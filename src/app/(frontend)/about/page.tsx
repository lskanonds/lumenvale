import type { Metadata } from 'next'
import Link from 'next/link'
import { BrandMark } from '@/components/brand/Brand'
import { OwnerCta } from '@/components/plant/CaseStudy'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Eyebrow, Section, SectionHeading } from '@/components/ui'
import { getServices, getSiteSettings } from '@/lib/cms'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()
  return { title: 'About', description: site.description }
}

const principles = [
  {
    title: 'Engineers first',
    body: 'Our own technicians commission, maintain and repair the plants we manage. Every recommendation we make to an owner is one we are prepared to carry out and be measured on, which keeps the advice practical.',
  },
  {
    title: 'Accountable to the meter',
    body: 'Reporting starts from the energy a plant should have produced and explains every gap. A list of completed work orders is an activity report, not a performance report, and we do not confuse the two.',
  },
  {
    title: 'Built for the full life',
    body: 'Decisions are weighed against thirty years of output, not the convenience of this year’s budget. A skipped inspection is a loan taken out against the plant’s future yield.',
  },
  {
    title: 'Concentrated on purpose',
    body: 'We would rather know two regions completely than six approximately. Knowing the soiling, the wind and the grid constraints of a valley is what lets us forecast honestly and staff properly.',
  },
]

export default async function AboutPage() {
  const [site, services] = await Promise.all([getSiteSettings(), getServices()])

  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="A solar company built around how plants actually perform."
        intro={`${site.nameFull} manages and operates utility-scale solar and storage plants across ${site.location.region}. We take responsibility for the whole life of an asset: availability, energy yield, compliance and long-term value.`}
      />

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Eyebrow>The company</Eyebrow>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-primary-900/85">
                <p>
                  {site.name} was founded to do one thing properly: keep solar plants producing
                  what they were built to produce. Most of the difference between a strong plant
                  and an average one is not design. It is whether a tripped string gets noticed
                  on Tuesday or in the quarterly report.
                </p>
                <p>
                  We work with utility-scale and community solar plants, with and without
                  storage, either as asset manager and O&amp;M contractor together or as the
                  owner’s independent asset manager. In both cases the same team is accountable
                  for the result, and the reporting shows ownership exactly what changed and why.
                </p>
                <p>
                  Our footprint is deliberately concentrated. We take on a plant when we can staff
                  it, stock spares for it and reach it the same day, not when a spreadsheet says
                  the fee looks attractive from a distance.
                </p>
              </div>

              <div className="mt-12 border-l border-accent-300 pl-7">
                <p className="font-display text-2xl leading-relaxed font-light text-primary-900 italic">
                  {site.tagline}
                </p>
                <p className="mt-3 text-slate-muted">
                  Not a slogan about service. A statement about what we measure ourselves
                  against.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-primary-900 lg:aspect-3/4">
                <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_30%_0%,#1b4a40_0%,#0e2a25_60%,#0a1f1b_100%)]" />
                <BrandMark variant="mono" className="relative h-48 w-48 text-white/10" />
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-accent-400/70 to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-primary-900">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="How we work"
            title="Four things we do not compromise on."
          />
          <dl className="mt-16 grid gap-px border border-cream/12 bg-cream/12 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="bg-primary-900 p-9 lg:p-11">
                <dt className="font-display text-2xl font-normal text-cream">{item.title}</dt>
                <dd className="mt-3 leading-relaxed text-cream/60">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Every service a plant needs."
            intro="Engage us for one of them or hand over the whole plant."
          />
          <ul className="mt-14 grid gap-px border border-stone/70 bg-stone/70 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-cream p-8 transition-colors hover:bg-sand"
                >
                  <h3 className="font-display text-2xl leading-snug font-normal text-primary-900 transition-colors group-hover:text-accent-600">
                    {service.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <OwnerCta />
    </>
  )
}
