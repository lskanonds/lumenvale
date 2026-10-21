import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { InquiryPanel, MailtoCard } from '@/components/layout/InquiryPanel'
import { Prose as ReadingMeasure } from '@/components/layout/PageHero'
import { Button, Container, Eyebrow, Section, SectionHeading } from '@/components/ui'
import { getSiteSettings } from '@/lib/cms'
import { cn } from '@/lib/cn'
import { surfaceOf } from '@/lib/surfaces'
import type { PageSection } from '@/blocks/types'
import type {
  CardsBlock,
  ContactRoutesBlock,
  CtaBlock,
  DetailsBlock,
  FaqBlock,
  FiguresBlock,
  GalleryBlock,
  InquiryBlock,
  LongFormBlock,
  Media,
  OwnerReportBlock,
  ProcessBlock,
  ProseBlock,
  QuoteBlock,
  TextImageBlock,
} from '@/payload-types'

/*
  Renderers for the section palette.

  Each block is built from the design system's own pieces (Container, Section,
  SectionHeading, Button), so a page assembled in the admin looks like the coded pages. A
  block decides what it contains; type scale, rhythm and colour come from the tokens.

  The background an editor picks also decides the text tone (see src/lib/surfaces.ts), so
  there is no way to end up with light text on cream.
*/

/** Uploads arrive populated at depth 1; an id means the relation is unresolved. */
const asMedia = (value: number | Media | null | undefined): Media | undefined =>
  value && typeof value !== 'number' && value.url ? value : undefined

const paragraphsOf = (rows: { text: string; id?: string | null }[] | null | undefined) =>
  (rows ?? []).flatMap((row, index) => (row.text ? [{ text: row.text, key: row.id ?? index }] : []))

const bodyTone = (tone: 'dark' | 'light') =>
  tone === 'light' ? 'text-cream/75' : 'text-slate-muted'

const Cta = ({
  cta,
  tone,
  className,
}: {
  cta?: { label?: string | null; href?: string | null } | null
  tone: 'dark' | 'light'
  className?: string
}) =>
  cta?.label && cta?.href ? (
    <Button
      href={cta.href}
      variant={tone === 'light' ? 'ghost-light' : 'outline'}
      className={className}
    >
      {cta.label}
    </Button>
  ) : null

function Prose({ block }: { block: ProseBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const paragraphs = paragraphsOf(block.paragraphs)
  const centred = block.align === 'center'

  return (
    <Section className={className}>
      <Container>
        <div className={cn('max-w-3xl', centred && 'mx-auto text-center')}>
          {(block.eyebrow || block.heading) && (
            <SectionHeading
              eyebrow={block.eyebrow ?? undefined}
              title={block.heading ?? ''}
              align={centred ? 'center' : 'left'}
              tone={tone}
              className={centred ? 'mx-auto' : undefined}
            />
          )}
          {paragraphs.length > 0 && (
            <div
              className={cn(
                'space-y-5 text-lg leading-relaxed',
                bodyTone(tone),
                block.heading && 'mt-8',
              )}
            >
              {paragraphs.map((paragraph) => (
                <p key={paragraph.key}>{paragraph.text}</p>
              ))}
            </div>
          )}
          <Cta cta={block.cta} tone={tone} className={cn('mt-10', centred && 'mx-auto')} />
        </div>
      </Container>
    </Section>
  )
}

function TextImage({ block }: { block: TextImageBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const image = asMedia(block.image)
  const paragraphs = paragraphsOf(block.paragraphs)

  return (
    <Section className={className}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={cn(block.imageSide === 'left' && 'lg:order-2')}>
            {(block.eyebrow || block.heading) && (
              <SectionHeading
                eyebrow={block.eyebrow ?? undefined}
                title={block.heading ?? ''}
                tone={tone}
              />
            )}
            {paragraphs.length > 0 && (
              <div className={cn('mt-8 space-y-5 text-lg leading-relaxed', bodyTone(tone))}>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.key}>{paragraph.text}</p>
                ))}
              </div>
            )}
            <Cta cta={block.cta} tone={tone} className="mt-10" />
          </div>

          {image && (
            <div
              className={cn(
                'relative aspect-[4/3] overflow-hidden',
                block.imageSide === 'left' && 'lg:order-1',
              )}
            >
              <Image
                src={image.url as string}
                alt={image.alt ?? ''}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

const COLUMNS = {
  '2': 'sm:grid-cols-2',
  '3': 'sm:grid-cols-2 lg:grid-cols-3',
  '4': 'sm:grid-cols-2 lg:grid-cols-4',
} as const

function Cards({ block }: { block: CardsBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const columns = COLUMNS[(block.columns ?? '3') as keyof typeof COLUMNS] ?? COLUMNS['3']

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading || block.intro) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            intro={block.intro ?? undefined}
            tone={tone}
          />
        )}
        {/* Same rule widths and padding as the card grids on the coded pages. */}
        <dl
          className={cn(
            'mt-16 grid gap-px border',
            columns,
            tone === 'light' ? 'border-cream/12 bg-cream/12' : 'border-stone/70 bg-stone/70',
          )}
        >
          {(block.items ?? []).map((item, index) => (
            <div
              key={item.id ?? index}
              className={cn('p-9 lg:p-11', tone === 'light' ? 'bg-primary-900' : 'bg-cream')}
            >
              <dt
                className={cn(
                  'font-display text-2xl leading-snug font-normal',
                  tone === 'light' ? 'text-cream' : 'text-primary-900',
                )}
              >
                {item.title}
              </dt>
              <dd
                className={cn(
                  'mt-3 leading-relaxed',
                  tone === 'light' ? 'text-cream/60' : 'text-slate-muted',
                )}
              >
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

// The specification grid: a small, quiet label with the fact set large underneath, the
// same pattern as the highlights on a plant page.
function Details({ block }: { block: DetailsBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const columns = block.columns === '2' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading || block.intro) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            intro={block.intro ?? undefined}
            tone={tone}
          />
        )}
        <dl
          className={cn(
            'mt-16 grid gap-px border',
            columns,
            tone === 'light' ? 'border-cream/12 bg-cream/12' : 'border-stone/70 bg-stone/70',
          )}
        >
          {(block.items ?? []).map((item, index) => (
            <div
              key={item.id ?? index}
              className={cn('p-8 lg:p-9', tone === 'light' ? 'bg-primary-900' : 'bg-cream')}
            >
              <dt
                className={cn(
                  'text-[0.625rem] tracking-[0.16em] uppercase',
                  tone === 'light' ? 'text-cream/60' : 'text-slate-muted',
                )}
              >
                {item.label}
              </dt>
              <dd
                className={cn(
                  'mt-3 font-display text-xl leading-snug font-normal',
                  tone === 'light' ? 'text-cream' : 'text-primary-900',
                )}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

/*
  A sequence of steps joined by a rule. The rule is what tells the reader the steps are
  ordered: horizontal across the row on wide screens, vertical down the left edge once
  the steps stack.

  Drawn with borders on each step rather than one positioned line, so steps of unequal
  length still connect.
*/
// Listed per step count because Tailwind only generates classes it can find in the
// source; `lg:grid-cols-${n}` would never exist. The block config caps steps at 6.
const PROCESS_COLUMNS: Record<number, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

function Process({ block }: { block: ProcessBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const steps = block.steps ?? []
  const light = tone === 'light'

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading || block.intro) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            intro={block.intro ?? undefined}
            tone={tone}
          />
        )}

        {/* No gap between steps (it would break the rule); spacing comes from padding.
            One column until lg, then exactly one column per step. The rule switches from
            vertical to horizontal at the same breakpoint, so an intermediate two-column
            layout can never connect the wrong steps. */}
        <ol className={cn('mt-16 grid', PROCESS_COLUMNS[steps.length] ?? 'lg:grid-cols-4')}>
          {steps.map((step, index) => (
            <li
              key={step.id ?? index}
              className={cn(
                'relative pb-10 pl-8 last:pb-0 lg:pt-10 lg:pr-8 lg:pb-0 lg:pl-0',
                // The rule: down the left on a phone, along the top on a wide screen.
                'border-l lg:border-t lg:border-l-0',
                light ? 'border-cream/20' : 'border-stone',
              )}
            >
              {/* The node sits on the rule, so it moves with it between the two layouts. */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-[4.5px] h-2 w-2 rotate-45 lg:top-[-4.5px] lg:left-0',
                  light ? 'bg-accent-300' : 'bg-accent-500',
                )}
              />
              <p
                className={cn(
                  'font-label text-[0.6875rem] font-semibold tracking-[0.16em] uppercase',
                  light ? 'text-accent-300' : 'text-accent-600',
                )}
              >
                {step.marker}
              </p>
              <h3
                className={cn(
                  'mt-3 font-display text-2xl leading-snug font-normal',
                  light ? 'text-cream' : 'text-primary-900',
                )}
              >
                {step.title}
              </h3>
              <p className={cn('mt-3 max-w-xs leading-relaxed', bodyTone(tone))}>{step.body}</p>
            </li>
          ))}
        </ol>

        {block.footnote && (
          <p
            className={cn(
              'mt-14 border-t pt-8 text-sm',
              light ? 'border-cream/12' : 'border-stone',
              bodyTone(tone),
            )}
          >
            {block.footnote}
          </p>
        )}
      </Container>
    </Section>
  )
}

function Figures({ block }: { block: FiguresBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const items = block.items ?? []

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            tone={tone}
            className="mb-14"
          />
        )}
        <dl className={cn('grid gap-10 sm:grid-cols-2', items.length > 2 && 'lg:grid-cols-4')}>
          {items.map((item, index) => (
            <div key={item.id ?? index}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span
                  className={cn(
                    'block font-display text-5xl leading-none font-light lg:text-6xl',
                    tone === 'light' ? 'text-accent-300' : 'text-accent-500',
                  )}
                >
                  {item.value}
                </span>
                <span
                  className={cn(
                    'mt-4 block text-[0.75rem] font-semibold tracking-[0.14em] uppercase',
                    tone === 'light' ? 'text-cream' : 'text-primary-900',
                  )}
                >
                  {item.label}
                </span>
                {item.detail && (
                  <span className={cn('mt-2 block text-sm', bodyTone(tone))}>{item.detail}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

/*
  The owner report, styled as a document rather than a marketing section: a hairline
  panel, plain figures and a list of actions.

  The "Example" stamp and the disclaimer under the panel are hard-coded rather than taken
  from fields, so no admin input can make it read as a live report for a real plant.
*/
function OwnerReport({ block }: { block: OwnerReportBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const metrics = block.metrics ?? []
  const actions = block.actions ?? []
  const light = tone === 'light'

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading || block.intro) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            intro={block.intro ?? undefined}
            tone={tone}
          />
        )}

        <article
          className={cn(
            'mt-14 border',
            light ? 'border-cream/20 bg-primary-950' : 'border-stone bg-cream',
          )}
        >
          <header
            className={cn(
              'flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b px-8 py-6 lg:px-10',
              light ? 'border-cream/20' : 'border-stone',
            )}
          >
            <h3
              className={cn(
                'font-display text-xl font-normal',
                light ? 'text-cream' : 'text-primary-900',
              )}
            >
              {/* A real space, not the margin. Margin is invisible to text extraction, so
                  the accessible name read "Monthly owner reportJune 2026". */}
              Monthly owner report{' '}
              {block.reportPeriod && (
                <span className={cn('ml-1 text-base', bodyTone(tone))}>{block.reportPeriod}</span>
              )}
            </h3>
            <span
              className={cn(
                'border px-3 py-1 font-label text-[0.625rem] font-semibold tracking-[0.16em] uppercase',
                light ? 'border-accent-300/50 text-accent-300' : 'border-accent-400 text-accent-600',
              )}
            >
              Example
            </span>
          </header>

          {metrics.length > 0 && (
            <dl
              className={cn(
                'grid gap-px border-b sm:grid-cols-2 lg:grid-cols-3',
                light ? 'border-cream/20 bg-cream/20' : 'border-stone bg-stone',
              )}
            >
              {metrics.map((metric, index) => (
                <div
                  key={metric.id ?? index}
                  className={cn('px-8 py-7 lg:px-10', light ? 'bg-primary-950' : 'bg-cream')}
                >
                  <dt
                    className={cn(
                      'text-[0.625rem] tracking-[0.16em] uppercase',
                      light ? 'text-cream/55' : 'text-slate-muted',
                    )}
                  >
                    {metric.label}
                  </dt>
                  {/* The note sits inside the <dd>: a <div> in a <dl> may only contain
                      <dt> and <dd>, and anything else fails axe's definition-list rule. */}
                  <dd
                    className={cn(
                      'mt-2.5 font-display text-3xl leading-none font-light lining-nums',
                      light ? 'text-cream' : 'text-primary-900',
                    )}
                  >
                    {metric.value}
                    {metric.note && (
                      <span className={cn('mt-2 block font-sans text-sm', bodyTone(tone))}>
                        {metric.note}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {actions.length > 0 && (
            <div className="px-8 py-8 lg:px-10">
              <h4
                className={cn(
                  'font-label text-[0.6875rem] font-semibold tracking-[0.16em] uppercase',
                  light ? 'text-accent-300' : 'text-accent-600',
                )}
              >
                Example action items
              </h4>
              <ul className="mt-5 space-y-3.5">
                {actions.map((action, index) => (
                  <li
                    key={action.id ?? index}
                    className={cn(
                      'flex gap-3.5 text-[0.9375rem] leading-relaxed',
                      light ? 'text-cream/80' : 'text-primary-900/85',
                    )}
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-400" />
                    {action.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <p className={cn('mt-6 max-w-3xl text-sm leading-relaxed', bodyTone(tone))}>
          An example of the report format, not a live report.
          {block.covers ? ` ${block.covers}` : ''}
        </p>
      </Container>
    </Section>
  )
}

function Quote({ block }: { block: QuoteBlock }) {
  const { className, tone } = surfaceOf(block.surface)

  return (
    <Section className={className}>
      <Container>
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote
            className={cn(
              'font-display text-3xl leading-[1.3] font-light text-balance lg:text-4xl',
              tone === 'light' ? 'text-cream' : 'text-primary-900',
            )}
          >
            &ldquo;{block.quote}&rdquo;
          </blockquote>
          {(block.attribution || block.role) && (
            <figcaption
              className={cn(
                'mt-8 text-[0.75rem] font-semibold tracking-[0.14em] uppercase',
                tone === 'light' ? 'text-accent-300' : 'text-accent-500',
              )}
            >
              {block.attribution}
              {block.attribution && block.role && <span aria-hidden="true"> · </span>}
              {block.role && <span className={bodyTone(tone)}>{block.role}</span>}
            </figcaption>
          )}
        </figure>
      </Container>
    </Section>
  )
}

function Gallery({ block }: { block: GalleryBlock }) {
  const { className, tone } = surfaceOf(block.surface)
  const images = (block.images ?? []).flatMap((row) => {
    const media = asMedia(row.image)
    return media ? [{ media, caption: row.caption, key: row.id ?? media.id }] : []
  })

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            tone={tone}
            className="mb-14"
          />
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(({ media, caption, key }) => (
            <figure key={key}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={media.url as string}
                  alt={media.alt ?? ''}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              {caption && (
                <figcaption className={cn('mt-3 text-sm', bodyTone(tone))}>{caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function Faq({ block }: { block: FaqBlock }) {
  const { className, tone } = surfaceOf(block.surface)

  return (
    <Section className={className}>
      <Container>
        {(block.eyebrow || block.heading) && (
          <SectionHeading
            eyebrow={block.eyebrow ?? undefined}
            title={block.heading ?? ''}
            tone={tone}
            className="mb-12"
          />
        )}
        {/* <details> rather than a scripted accordion: it opens without JavaScript, is
            keyboard operable for free, and is searchable by the browser's find. */}
        <div className="max-w-3xl">
          {(block.items ?? []).map((item, index) => (
            <details
              key={item.id ?? index}
              className={cn(
                'group border-b',
                tone === 'light' ? 'border-white/15' : 'border-stone/70',
              )}
            >
              <summary
                className={cn(
                  'flex cursor-pointer items-center justify-between gap-6 py-6 font-display text-xl font-normal marker:content-none',
                  tone === 'light' ? 'text-cream' : 'text-primary-900',
                )}
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={cn(
                    'shrink-0 text-2xl leading-none transition-transform duration-300 group-open:rotate-45',
                    tone === 'light' ? 'text-accent-300' : 'text-accent-500',
                  )}
                >
                  +
                </span>
              </summary>
              <p className={cn('pb-6 leading-relaxed', bodyTone(tone))}>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function Cta_({ block }: { block: CtaBlock }) {
  const { className, tone } = surfaceOf(block.surface)

  return (
    <Section className={className}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={cn(
              'font-display text-4xl leading-[1.1] font-light text-balance lg:text-5xl',
              tone === 'light' ? 'text-cream' : 'text-primary-900',
            )}
          >
            {block.heading}
          </h2>
          {block.body && (
            <p className={cn('mt-6 text-lg leading-relaxed', bodyTone(tone))}>{block.body}</p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {block.primary?.label && block.primary?.href && (
              <Button
                href={block.primary.href}
                variant={tone === 'light' ? 'ghost-light' : 'primary'}
              >
                {block.primary.label}
              </Button>
            )}
            <Cta cta={block.secondary} tone={tone} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

// The contact and legal blocks reuse the layout components the coded pages use
// (InquiryPanel, Prose), so CMS pages and coded pages render identically.

async function Inquiry({ block }: { block: InquiryBlock }) {
  const site = await getSiteSettings()
  const { className } = surfaceOf(block.surface)
  const email = site.email[block.emailRoute]
  const steps = (block.steps ?? []).map((step) => ({ title: step.title, body: step.body }))

  // The form is the default. A mailto link does nothing for a visitor without a mail app
  // configured (webmail users, most work laptops), and a failed enquiry leaves no trace.
  const note = block.note && (
    <p className="mt-6 text-sm leading-relaxed text-slate-muted">{block.note}</p>
  )

  return (
    <Section className={className}>
      <Container>
        <InquiryPanel steps={steps}>
          {block.mode === 'email' && block.subject && block.cta ? (
            <MailtoCard
              eyebrow={block.eyebrow}
              email={email}
              subject={block.subject}
              cta={block.cta}
              note={block.note ?? undefined}
            />
          ) : (
            <>
              <EnquiryForm
                kind={block.emailRoute}
                fallbackEmail={email}
                allowAttachments={Boolean(block.allowAttachments)}
              />
              {note}
            </>
          )}
        </InquiryPanel>

        {/* A div, not a <p>: Eyebrow renders a <p>, and the HTML parser closes a paragraph
            nested inside another one early. */}
        {block.footnote?.text && (
          <div className="mt-16 max-w-3xl border-t border-stone pt-8">
            {block.footnote.eyebrow && <Eyebrow className="mb-4">{block.footnote.eyebrow}</Eyebrow>}
            <p className="text-sm leading-relaxed text-slate-muted">{block.footnote.text}</p>
          </div>
        )}
      </Container>
    </Section>
  )
}

async function ContactRoutes({ block }: { block: ContactRoutesBlock }) {
  const site = await getSiteSettings()
  const { className } = surfaceOf(block.surface)
  const columns = block.columns ?? []

  return (
    <Section className={className}>
      <Container>
        <ul className="grid gap-px border border-stone/70 bg-stone/70 lg:grid-cols-3">
          {(block.items ?? []).map((route, index) => {
            const email = site.email[route.emailRoute]
            return (
              <li key={route.id ?? index} className="flex flex-col bg-cream p-9 lg:p-11">
                <Eyebrow>{route.eyebrow}</Eyebrow>
                <h2 className="mt-6 font-display text-2xl leading-snug font-normal text-primary-900">
                  {route.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-slate-muted">{route.body}</p>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(route.subject)}`}
                  className="mt-8 inline-flex items-center gap-2 self-start border-b border-accent-400 pb-1 text-[0.9375rem] text-primary-800 transition-colors hover:text-accent-600"
                >
                  {email}
                </a>
              </li>
            )
          })}
        </ul>

        {columns.length > 0 && (
          <div className="mt-16 grid gap-14 border-t border-stone pt-16 lg:grid-cols-12 lg:gap-16">
            {columns.map((column, index) => (
              <div key={column.id ?? index} className="lg:col-span-6">
                <Eyebrow>{column.eyebrow}</Eyebrow>
                {/* whitespace-pre-line because the field is a textarea: the office
                    address is two lines in the box and has to be two lines on the page. */}
                {column.lead && (
                  <p className="mt-6 font-display text-2xl leading-relaxed font-light whitespace-pre-line text-primary-900">
                    {column.lead}
                  </p>
                )}
                <p className="mt-6 max-w-md leading-relaxed text-slate-muted">{column.body}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}

function LongForm({ block }: { block: LongFormBlock }) {
  const { className } = surfaceOf(block.surface)

  return (
    <Section className={className}>
      <Container>
        <ReadingMeasure>
          {block.meta && <p className="mb-8 text-sm text-slate-muted">{block.meta}</p>}
          {/* Prose supplies the measure and the heading/list styling; RichText only
              turns the stored document into elements. */}
          <RichText data={block.content} />
        </ReadingMeasure>
      </Container>
    </Section>
  )
}

/** Renders one section. Unknown block types are skipped rather than crashing the page. */
function Render({ block }: { block: PageSection }) {
  switch (block.blockType) {
    case 'prose':
      return <Prose block={block} />
    case 'textImage':
      return <TextImage block={block} />
    case 'cards':
      return <Cards block={block} />
    case 'details':
      return <Details block={block} />
    case 'process':
      return <Process block={block} />
    case 'figures':
      return <Figures block={block} />
    case 'ownerReport':
      return <OwnerReport block={block} />
    case 'quote':
      return <Quote block={block} />
    case 'gallery':
      return <Gallery block={block} />
    case 'faq':
      return <Faq block={block} />
    case 'cta':
      return <Cta_ block={block} />
    case 'inquiry':
      return <Inquiry block={block} />
    case 'contactRoutes':
      return <ContactRoutes block={block} />
    case 'longForm':
      return <LongForm block={block} />
    default:
      return null
  }
}

export function Sections({ blocks }: { blocks?: PageSection[] | null }) {
  return (
    <>
      {(blocks ?? []).map((block, index) => (
        <Render key={block.id ?? index} block={block} />
      ))}
    </>
  )
}
