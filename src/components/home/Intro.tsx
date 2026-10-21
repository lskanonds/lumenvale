import { Button, Container, Section, SectionHeading } from '@/components/ui'
import { BrandMark } from '@/components/brand/Brand'
import { getSiteSettings } from '@/lib/cms'

const principles = [
  {
    title: 'Engineers first',
    body: 'Our own technicians commission, maintain and repair the plants we manage. Every recommendation we make to an owner is one we are prepared to carry out and be measured on.',
  },
  {
    title: 'Accountable to the meter',
    body: 'Monthly reporting against the energy a plant should have produced, benchmarked against comparable plants. Not a list of work orders.',
  },
  {
    title: 'Built for the full life',
    body: 'Decisions are weighed against thirty years of output, not against the convenience of this year’s maintenance budget.',
  },
]

export async function Intro() {
  const site = await getSiteSettings()

  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  A solar company built around
                  <span className="text-accent-500 italic"> how plants actually perform</span>.
                </>
              }
              intro={`${site.nameFull} manages and operates utility-scale solar and storage plants across ${site.location.region}. We take responsibility for the whole life of an asset: availability, energy yield, compliance and long-term value.`}
            />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-muted">
              Our footprint is deliberately concentrated. Field crews based in each region mean a
              tripped inverter is looked at the same day, and a plant is held to a standard rather
              than an average.
            </p>
            <Button href="/about" variant="outline" className="mt-10">
              About {site.name}
            </Button>

            <dl className="mt-14 space-y-8">
              {principles.map((item) => (
                <div key={item.title} className="border-l border-accent-300 pl-6">
                  <dt className="font-display text-2xl font-normal text-primary-900">{item.title}</dt>
                  <dd className="mt-2 leading-relaxed text-slate-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            {/* TODO: replace with photography of a plant or the field team. Sticky, so the
                tall text column scrolls past a fixed image on desktop. */}
            <div className="lg:sticky lg:top-28">
              <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-primary-900 lg:aspect-3/4">
                <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_30%_0%,#1b4a40_0%,#0e2a25_60%,#0a1f1b_100%)]" />
                <BrandMark variant="mono" className="relative h-56 w-56 text-white/10" />
                <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-accent-400/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
