'use client'

import { useActionState, useId, useState } from 'react'
import { usePathname } from 'next/navigation'
import { submitEnquiry, type EnquiryState } from '@/actions/enquiry'
import type { EnquiryKind } from '@/collections/Enquiries'
import { Eyebrow } from '@/components/ui'
import { cn } from '@/lib/cn'
import {
  ACCEPT_ATTRIBUTE,
  ACCEPTED_LABEL,
  MAX_FILES,
  MAX_TOTAL_BYTES,
  formatBytes,
} from '@/lib/attachments'

/*
  The enquiry form.

  Each kind of enquiry asks its own extra questions. The owner form asks for the plant, its
  capacity, location and age, which is what decides whether a conversation is worth having,
  and lets the reply start from what the sender already told us.

  A plain <form> posting to a server action: it works before JavaScript loads, keeps the
  browser's own validation, and keeps the typed values if the server sends back an error.
*/

type Field = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  required?: boolean
  /** Share of the row this field takes on wide screens. */
  width?: 'full' | 'half'
}

const CONTACT_FIELDS: Field[] = [
  { name: 'name', label: 'Your name', required: true, autoComplete: 'name', width: 'half' },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    autoComplete: 'email',
    width: 'half',
  },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', width: 'half' },
  { name: 'company', label: 'Company', autoComplete: 'organization', width: 'half' },
]

const EXTRA_FIELDS: Record<EnquiryKind, Field[]> = {
  general: [],
  owners: [
    { name: 'plantName', label: 'Plant or portfolio', width: 'half' },
    { name: 'capacity', label: 'Capacity (MWp)', width: 'half' },
    { name: 'location', label: 'Location', width: 'half' },
    { name: 'commissioned', label: 'Year commissioned', width: 'half' },
  ],
  investors: [],
  careers: [{ name: 'role', label: 'Role you are interested in', width: 'full' }],
}

const MESSAGE_LABEL: Record<EnquiryKind, string> = {
  general: 'How can we help?',
  owners: 'Tell us about the plant',
  investors: 'What would you like to discuss?',
  careers: 'Tell us about yourself',
}

const SUBMIT_LABEL: Record<EnquiryKind, string> = {
  general: 'Send enquiry',
  owners: 'Send enquiry',
  investors: 'Send enquiry',
  careers: 'Send your details',
}

// Lives here rather than next to the action: a "use server" file may only export async
// functions.
const IDLE: EnquiryState = { status: 'idle' }

const inputStyles =
  'mt-2 w-full border border-stone bg-cream px-4 py-3 text-[0.9375rem] text-primary-900 transition-colors placeholder:text-slate-muted/60 focus:border-primary-800 focus:outline-none'

export function EnquiryForm({
  kind = 'general',
  fallbackEmail,
  allowAttachments = false,
  className,
}: {
  kind?: EnquiryKind
  /** Shown if the form itself fails, so nobody is left without a way to reach us. */
  fallbackEmail: string
  /** Set per panel in the CMS, off unless deliberately wanted. */
  allowAttachments?: boolean
  className?: string
}) {
  const [state, action, pending] = useActionState(submitEnquiry, IDLE)
  const [chosen, setChosen] = useState<{ name: string; size: number }[]>([])
  const pathname = usePathname()
  const formId = useId()

  if (state.status === 'sent') {
    return (
      <div className={cn('border border-stone bg-sand p-9 lg:p-10', className)}>
        <Eyebrow>Thank you</Eyebrow>
        <p className="mt-6 font-display text-2xl leading-snug font-normal text-primary-900">
          Your enquiry has reached us.
        </p>
        <p className="mt-4 leading-relaxed text-slate-muted">
          Someone will come back to you directly, usually within one business day.
        </p>
        {/* The enquiry is saved, but the documents travelled only on the notification email,
            and that failed. The sender is the only one who can send them again. */}
        {state.attachmentsLost && (
          <p className="mt-6 border-t border-stone pt-5 text-sm leading-relaxed text-accent-600">
            Your documents did not reach us, and we do not keep a copy of them. Please email them
            to{' '}
            <a
              href={`mailto:${fallbackEmail}`}
              className="underline decoration-accent-400 underline-offset-4"
            >
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </div>
    )
  }

  const fields = [...CONTACT_FIELDS, ...EXTRA_FIELDS[kind]]

  return (
    <form
      action={action}
      noValidate={false}
      className={cn('border border-stone bg-sand p-9 lg:p-10', className)}
    >
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="page" value={pathname} />

      {/* Honeypot: hidden from sight, keyboard and screen readers. See the action. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Leave this field empty</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${formId}-${field.name}`
          const error = state.errors?.[field.name]

          return (
            <div key={field.name} className={field.width === 'full' ? 'sm:col-span-2' : undefined}>
              <label
                htmlFor={id}
                className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase"
              >
                {field.label}
                {field.required && <span className="text-accent-600"> *</span>}
              </label>
              {/* Keyed on the attempt: `defaultValue` is only read when the input mounts,
                  and React resets the form after every action, so the restored values
                  need fresh inputs to show up. */}
              <input
                key={`${field.name}-${state.attempt ?? 0}`}
                id={id}
                name={field.name}
                type={field.type ?? 'text'}
                required={field.required}
                autoComplete={field.autoComplete}
                defaultValue={state.values?.[field.name] ?? ''}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                className={cn(inputStyles, error && 'border-accent-600')}
              />
              {error && (
                <p id={`${id}-error`} className="mt-2 text-sm text-accent-600">
                  {error}
                </p>
              )}
            </div>
          )
        })}

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase"
          >
            {MESSAGE_LABEL[kind]}
            <span className="text-accent-600"> *</span>
          </label>
          <textarea
            key={`message-${state.attempt ?? 0}`}
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            defaultValue={state.values?.message ?? ''}
            aria-invalid={state.errors?.message ? true : undefined}
            aria-describedby={state.errors?.message ? `${formId}-message-error` : undefined}
            className={cn(inputStyles, 'resize-y', state.errors?.message && 'border-accent-600')}
          />
          {state.errors?.message && (
            <p id={`${formId}-message-error`} className="mt-2 text-sm text-accent-600">
              {state.errors.message}
            </p>
          )}
        </div>

        {/* Optional, and labelled as such, with a plain statement of what happens to the
            file. Someone sending operating data to a company they have not worked with yet
            should know both before they choose a file. */}
        {allowAttachments && (
          <div className="sm:col-span-2">
            <label
              htmlFor={`${formId}-attachments`}
              className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase"
            >
              Monitoring export or O&amp;M report <span className="normal-case">(optional)</span>
            </label>
            <p
              id={`${formId}-attachments-help`}
              className="mt-2 text-sm leading-relaxed text-slate-muted"
            >
              {ACCEPTED_LABEL}, up to {MAX_FILES} files and {formatBytes(MAX_TOTAL_BYTES)} in total.
              Documents are emailed to us and are not stored on this website.
            </p>
            <input
              id={`${formId}-attachments`}
              name="attachments"
              type="file"
              multiple
              accept={ACCEPT_ATTRIBUTE}
              onChange={(event) =>
                setChosen(
                  Array.from(event.target.files ?? []).map((file) => ({
                    name: file.name,
                    size: file.size,
                  })),
                )
              }
              aria-invalid={state.errors?.attachments ? true : undefined}
              aria-describedby={cn(
                `${formId}-attachments-help`,
                state.errors?.attachments && `${formId}-attachments-error`,
              )}
              className={cn(
                'mt-3 w-full text-sm text-slate-muted',
                'file:mr-4 file:cursor-pointer file:border file:border-primary-800/30 file:bg-cream file:px-5 file:py-2.5',
                'file:text-[0.6875rem] file:font-semibold file:tracking-[0.14em] file:text-primary-800 file:uppercase',
                'hover:file:border-primary-800',
                state.errors?.attachments && 'text-accent-600',
              )}
            />
            {/* The browser only says "2 files"; list them so the sender can check which. */}
            {chosen.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-primary-900/80">
                {chosen.map((file) => (
                  <li key={`${file.name}-${file.size}`} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent-600">
                      &middot;
                    </span>
                    <span className="min-w-0 flex-1 truncate">{file.name}</span>
                    <span className="shrink-0 text-slate-muted">{formatBytes(file.size)}</span>
                  </li>
                ))}
              </ul>
            )}
            {state.errors?.attachments && (
              <p id={`${formId}-attachments-error`} className="mt-2 text-sm text-accent-600">
                {state.errors.attachments}
              </p>
            )}
          </div>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="mt-7 border-t border-stone pt-6 text-sm text-accent-600">
          {state.message}{' '}
          <span className="text-slate-muted">
            If this keeps happening, write to{' '}
            <a
              href={`mailto:${fallbackEmail}`}
              className="text-primary-800 underline decoration-accent-400 underline-offset-4"
            >
              {fallbackEmail}
            </a>
            .
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex w-full items-center justify-center border border-primary-800 bg-primary-800 px-8 py-4 text-[0.75rem] font-semibold tracking-[0.14em] text-cream uppercase transition-colors hover:bg-primary-950 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? 'Sending…' : SUBMIT_LABEL[kind]}
      </button>

      <p className="mt-5 text-center text-sm text-slate-muted">
        Or write to{' '}
        <a
          href={`mailto:${fallbackEmail}`}
          className="text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
        >
          {fallbackEmail}
        </a>
      </p>
    </form>
  )
}
