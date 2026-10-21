import type { CollectionConfig } from 'payload'
import { isAdmin, isSignedIn } from '@/access'

/*
  Everything the enquiry forms receive.

  The record is written before the notification email is sent. Mail is the part that can
  fail (a wrong key, a lapsed domain, a provider outage), and someone who filled in a form
  will not send it twice. Saving first means the worst case is an unannounced enquiry
  sitting in the admin, never a lost one.

  Enquiries are not drafted or versioned: they are things that arrived, not documents.
*/

/** The four forms. `general` is the contact page; the others match their own pages. */
export const ENQUIRY_KINDS = ['general', 'owners', 'investors', 'careers'] as const

export type EnquiryKind = (typeof ENQUIRY_KINDS)[number]

/** Which address in Site settings is notified. Careers has no address of its own. */
export const NOTIFY_ROUTE: Record<EnquiryKind, 'general' | 'owners' | 'investors'> = {
  general: 'general',
  owners: 'owners',
  investors: 'investors',
  careers: 'general',
}

const KIND_LABELS: Record<EnquiryKind, string> = {
  general: 'General enquiry',
  owners: 'Asset owner',
  investors: 'Investor & acquisitions',
  careers: 'Careers',
}

/** Shown only for the form that asks the question, so a record reads as that form's answers. */
const onlyFor =
  (kind: EnquiryKind) =>
  ({ siblingData }: { siblingData?: Partial<{ kind: EnquiryKind }> }) =>
    siblingData?.kind === kind

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'kind', 'company', 'status', 'createdAt'],
    group: 'Enquiries',
    description:
      'Everything sent through the forms on the site. Nothing is deleted automatically; mark an enquiry closed once it has been dealt with so the list stays a list of open work.',
    hideAPIURL: true,
  },
  access: {
    read: isSignedIn,
    // Submissions come in through the form's server action, which validates the input and
    // writes with access overridden. Nothing may post straight to /api/enquiries.
    create: () => false,
    update: isSignedIn,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'kind',
          type: 'select',
          label: 'Enquiry type',
          required: true,
          admin: { width: '50%', readOnly: true },
          options: ENQUIRY_KINDS.map((value) => ({ label: KIND_LABELS[value], value })),
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          defaultValue: 'new',
          admin: { width: '50%', description: 'For your own tracking. It changes nothing on the site.' },
          options: [
            { label: 'New', value: 'new' },
            { label: 'In progress', value: 'inProgress' },
            { label: 'Closed', value: 'closed' },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'email', type: 'email', required: true, admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'phone', type: 'text', admin: { width: '50%' } },
        { name: 'company', type: 'text', label: 'Company', admin: { width: '50%' } },
      ],
    },

    // The owner form asks four qualifying questions a mailto link never could.
    {
      name: 'plantName',
      type: 'text',
      label: 'Plant or portfolio',
      admin: { condition: onlyFor('owners') },
    },
    {
      type: 'row',
      admin: { condition: onlyFor('owners') },
      fields: [
        { name: 'capacity', type: 'text', label: 'Capacity (MWp)', admin: { width: '34%' } },
        { name: 'location', type: 'text', label: 'Location', admin: { width: '33%' } },
        { name: 'commissioned', type: 'text', label: 'Commissioned', admin: { width: '33%' } },
      ],
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role of interest',
      admin: { condition: onlyFor('careers') },
    },

    { name: 'message', type: 'textarea', required: true },

    {
      name: 'page',
      type: 'text',
      label: 'Sent from',
      admin: { readOnly: true, description: 'The page the form was on.' },
    },
    /*
      A receipt for the attachments, not the files themselves. Documents travel only on the
      notification email (see src/lib/attachments.ts). If that email failed, this line is
      how the office knows something was sent and can ask for it again.
    */
    {
      name: 'attachmentNames',
      type: 'text',
      label: 'Documents attached',
      admin: {
        readOnly: true,
        description:
          'Names and sizes only. The files are not stored; they exist only on the notification email.',
      },
    },
    {
      name: 'notified',
      type: 'checkbox',
      label: 'Notification email sent',
      defaultValue: false,
      admin: {
        readOnly: true,
        description:
          'Unticked means the enquiry arrived but the email announcing it did not go out. The enquiry itself is safe either way.',
      },
    },
  ],
}
