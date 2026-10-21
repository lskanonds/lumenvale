'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { NOTIFY_ROUTE, type EnquiryKind } from '@/collections/Enquiries'
import { checkAttachments, formatBytes } from '@/lib/attachments'

/*
  Write side of the enquiry forms.

  1. The record is saved before the email is attempted, and a failed email is recorded
     rather than raised. Someone who filled in six fields will not fill them in again; if
     the notification cannot go out, the enquiry still sits in the admin with "notified"
     unticked.

  2. The visitor is told the truth: one message for success, one for failure, and the
     failure message names an address to write to instead of "something went wrong".
*/

/*
  Only a type crosses this boundary. A "use server" file may export async functions and
  nothing else; a plain object export passes type checking and lint, then throws when the
  module loads. The form's initial state therefore lives in the form component.
*/
export type EnquiryState = {
  status: 'idle' | 'sent' | 'error'
  message?: string
  /** Field name → what is wrong with it, so each message sits under its input. */
  errors?: Partial<Record<string, string>>
  /**
   * The enquiry was saved but the email carrying the attachments failed. Attachments are
   * not stored anywhere else, so the sender has to be told to send them again.
   */
  attachmentsLost?: boolean
  /**
   * What the sender typed, echoed back after a rejection. React resets the form once the
   * action resolves, so without this a rejected file type would also empty every field.
   */
  values?: Record<string, string>
  /** Bumped on every rejection so the inputs remount and pick up the values above. */
  attempt?: number
}

/*
  Honeypot: a field no human sees and therefore no human fills in. A submission with it
  filled is answered with the normal success message, so a bot learns nothing.
*/
const HONEYPOT = 'website'

const LIMITS = { name: 120, email: 200, short: 160, message: 5000 } as const

const text = (form: FormData, field: string) => {
  const value = form.get(field)
  return typeof value === 'string' ? value.trim() : ''
}

/** Deliberately loose. A reply arriving is what proves an address works. */
const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const KIND_TITLES: Record<EnquiryKind, string> = {
  general: 'General enquiry',
  owners: 'Asset owner enquiry',
  investors: 'Investor enquiry',
  careers: 'Careers enquiry',
}

/** The extra questions each form asks, in the order they appear on the page. */
const EXTRA_FIELDS: Record<EnquiryKind, { name: string; label: string }[]> = {
  general: [],
  owners: [
    { name: 'plantName', label: 'Plant or portfolio' },
    { name: 'capacity', label: 'Capacity (MWp)' },
    { name: 'location', label: 'Location' },
    { name: 'commissioned', label: 'Commissioned' },
  ],
  investors: [],
  careers: [{ name: 'role', label: 'Role of interest' }],
}

const isKind = (value: string): value is EnquiryKind =>
  value === 'general' || value === 'owners' || value === 'investors' || value === 'careers'

export async function submitEnquiry(
  _previous: EnquiryState,
  form: FormData,
): Promise<EnquiryState> {
  const kindValue = text(form, 'kind')
  const kind: EnquiryKind = isKind(kindValue) ? kindValue : 'general'

  if (text(form, HONEYPOT)) return { status: 'sent' }

  const name = text(form, 'name')
  const email = text(form, 'email')
  const message = text(form, 'message')

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Please tell us your name.'
  else if (name.length > LIMITS.name) errors.name = 'That is longer than we can store.'

  if (!email) errors.email = 'We need an address to reply to.'
  else if (!looksLikeEmail(email) || email.length > LIMITS.email)
    errors.email = 'That does not look like an email address.'

  if (!message) errors.message = 'Please tell us what you need.'
  else if (message.length > LIMITS.message)
    errors.message = 'Please keep this under 5,000 characters.'

  // Attachments are checked before anything is written, so a rejected file costs the
  // sender a new upload rather than a duplicate enquiry. Empty pickers post a zero-byte
  // File; dropping those first keeps this list index-aligned with the checked one.
  const uploaded = form
    .getAll('attachments')
    .filter((value): value is File => value instanceof File && value.size > 0)

  const checked = checkAttachments(uploaded)
  if (!checked.ok) errors.attachments = checked.error

  if (Object.keys(errors).length > 0) {
    // Everything the sender typed, except the honeypot and the files.
    const values: Record<string, string> = { name, email, message }
    for (const field of ['phone', 'company', ...EXTRA_FIELDS[kind].map((f) => f.name)]) {
      values[field] = text(form, field)
    }

    return {
      status: 'error',
      message: 'Please check the fields marked below.',
      errors,
      values,
      attempt: (_previous.attempt ?? 0) + 1,
    }
  }

  const accepted = checked.ok ? checked.files : []
  const attachments = await Promise.all(
    accepted.map(async (file, index) => ({
      filename: file.filename,
      size: file.size,
      content: Buffer.from(await uploaded[index].arrayBuffer()),
    })),
  )

  const extras = Object.fromEntries(
    EXTRA_FIELDS[kind].map((field) => [field.name, text(form, field.name).slice(0, LIMITS.short)]),
  )

  const payload = await getPayload({ config })

  const enquiry = await payload.create({
    collection: 'enquiries',
    data: {
      kind,
      status: 'new',
      name,
      email,
      phone: text(form, 'phone').slice(0, LIMITS.short) || undefined,
      company: text(form, 'company').slice(0, LIMITS.short) || undefined,
      message,
      page: text(form, 'page') || undefined,
      notified: false,
      // Names and sizes only, so the office knows a document was sent even if the email
      // carrying it failed.
      attachmentNames:
        attachments.map((file) => `${file.filename} (${formatBytes(file.size)})`).join(', ') ||
        undefined,
      ...extras,
    },
    overrideAccess: true,
  })

  /*
    The enquiry is safe from here on; the notification below is allowed to fail.

    Without a configured adapter Payload swaps in one that only logs and still resolves, so
    a successful `sendEmail` proves nothing. "Notified" is therefore only ticked under the
    same condition the adapter is created on in payload.config.ts.
  */
  if (!process.env.RESEND_API_KEY) {
    payload.logger.warn(
      { id: enquiry.id, attachments: attachments.length },
      'enquiry saved; no email adapter configured, so nobody has been told',
    )
    return { status: 'sent', attachmentsLost: attachments.length > 0 }
  }

  try {
    const site = await payload.findGlobal({ slug: 'siteSettings', overrideAccess: true })
    const to = site.email?.[NOTIFY_ROUTE[kind]]
    if (!to) throw new Error(`no address configured for ${NOTIFY_ROUTE[kind]}`)

    const rows: [string, string][] = [
      ['Name', name],
      ['Email', email],
      ['Phone', text(form, 'phone')],
      ['Company', text(form, 'company')],
      ...EXTRA_FIELDS[kind].map(
        (field) => [field.label, String(extras[field.name] ?? '')] as [string, string],
      ),
      ['Sent from', text(form, 'page')],
      [
        'Attached',
        attachments.map((file) => `${file.filename} (${formatBytes(file.size)})`).join(', '),
      ],
    ]

    await payload.sendEmail({
      to,
      replyTo: `${name} <${email}>`,
      subject: `${KIND_TITLES[kind]}: ${name}`,
      // The only copy of the files; nothing on the site keeps them after this call.
      attachments: attachments.map(({ filename, content }) => ({ filename, content })),
      text: [
        ...rows.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
        '',
        message,
      ].join('\n'),
      html: [
        `<h2 style="font:600 16px system-ui;margin:0 0 16px">${escape(KIND_TITLES[kind])}</h2>`,
        '<table style="font:14px system-ui;border-collapse:collapse" cellpadding="0">',
        ...rows
          .filter(([, value]) => value)
          .map(
            ([label, value]) =>
              `<tr><td style="padding:2px 16px 2px 0;color:#666">${escape(label)}</td><td>${escape(value)}</td></tr>`,
          ),
        '</table>',
        `<p style="font:14px/1.6 system-ui;white-space:pre-line;margin:20px 0 0">${escape(message)}</p>`,
      ].join(''),
    })

    await payload.update({
      collection: 'enquiries',
      id: enquiry.id,
      data: { notified: true },
      overrideAccess: true,
    })
  } catch (error) {
    // Logged, not thrown: the enquiry did arrive, and the unticked box tells the office the
    // notification did not. Attachments are the exception, because they only existed on
    // that email, so the sender is told.
    payload.logger.error(
      { err: error, id: enquiry.id, attachments: attachments.length },
      'enquiry saved but notification email failed',
    )
    return { status: 'sent', attachmentsLost: attachments.length > 0 }
  }

  return { status: 'sent' }
}
