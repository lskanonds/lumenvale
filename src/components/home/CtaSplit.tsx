import Link from 'next/link'
import { Container, Eyebrow } from '@/components/ui'

const panels = [
  {
    eyebrow: 'Asset owners',
    title: 'Considering an O&M change?',
    body: 'Send us the plant and twelve months of monitoring data. We will come back with an honest read on what it should be producing and what it would take to get there.',
    href: '/owners',
    cta: 'Request an O&M Proposal',
  },
  {
    eyebrow: 'Investors & brokers',
    title: 'Bringing us a portfolio?',
    body: 'We review operating and late-stage solar and storage assets across California, and we answer every broker submission, including the ones we pass on.',
    href: '/investors',
    cta: 'Submit an Opportunity',
  },
]

export function CtaSplit() {
  return (
    <section className="bg-primary-950">
      <Container className="px-0 lg:px-0">
        <div className="grid gap-px bg-cream/12 lg:grid-cols-2">
          {panels.map((panel) => (
            <div key={panel.href} className="flex bg-primary-950 px-6 py-20 lg:px-16 lg:py-28">
              {/* Column flex with mt-auto keeps both buttons on one baseline even when the
                  headings wrap to different line counts. */}
              <div className="mx-auto flex max-w-lg flex-col">
                <Eyebrow className="text-accent-300">{panel.eyebrow}</Eyebrow>
                <h2 className="mt-6 font-display text-4xl leading-tight font-light text-cream text-balance lg:text-[2.75rem]">
                  {panel.title}
                </h2>
                <p className="mt-5 leading-relaxed text-cream/60">{panel.body}</p>
                <Link
                  href={panel.href}
                  className="group mt-auto inline-flex items-center gap-3 self-start border-b border-accent-400/40 pt-10 pb-2 text-[0.75rem] font-semibold tracking-[0.14em] text-accent-200 uppercase transition-colors hover:border-accent-300 hover:text-white"
                >
                  {panel.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-400 ease-out-soft group-hover:translate-x-1.5"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
