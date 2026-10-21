import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/ui'

/**
 * The enquiry layout: the numbered "what happens next" on the left, and on the right
 * whatever the page uses to start a conversation: the form, or the address card below
 * for a page that only wants to point at a mailbox.
 */
export function InquiryPanel({ steps, children }: { steps: { title: string; body: string }[]; children: ReactNode }) {
  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Eyebrow>What happens next</Eyebrow>
        <ol className="mt-8 space-y-8">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-6">
              <span className="font-label text-sm font-semibold tracking-[0.12em] text-accent-600 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-2xl font-normal text-primary-900">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">{children}</div>
      </div>
    </div>
  )
}

/** The pre-form card: a subject-line mailto and the address under it. */
export function MailtoCard({
  eyebrow,
  email,
  subject,
  cta,
  note,
}: {
  eyebrow: string
  email: string
  subject: string
  cta: string
  note?: string
}) {
  return (
    <div className="border border-stone bg-sand p-9 lg:p-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <p className="mt-6 leading-relaxed text-primary-900/85">
        Write to us directly and we will come back to you.
      </p>
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
        className="mt-7 inline-flex w-full items-center justify-center border border-primary-800 bg-primary-800 px-8 py-4 text-center text-[0.75rem] font-semibold tracking-[0.14em] text-cream uppercase transition-colors hover:bg-primary-950"
      >
        {cta}
      </a>
      <p className="mt-5 text-center">
        <a
          href={`mailto:${email}`}
          className="text-sm text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
        >
          {email}
        </a>
      </p>
      {note && <p className="mt-7 border-t border-stone pt-6 text-sm text-slate-muted">{note}</p>}
    </div>
  )
}
