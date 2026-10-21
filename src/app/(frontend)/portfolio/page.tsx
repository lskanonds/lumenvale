import type { Metadata } from 'next'
import { BrandMark } from '@/components/brand/Brand'
import { OwnerCta } from '@/components/plant/CaseStudy'
import { PlantCard } from '@/components/plant/PlantCard'
import { Container, Eyebrow, Section } from '@/components/ui'
import { getPlants, getSiteSettings } from '@/lib/cms'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()
  return {
    title: 'Portfolio & Performance',
    description: `Solar and storage plants managed by ${site.nameFull}, presented as case studies with plant-level performance against a regional peer group.`,
  }
}

export default async function PortfolioPage() {
  const [site, plants] = await Promise.all([getSiteSettings(), getPlants()])

  return (
    <>
      <section className="relative overflow-hidden bg-primary-950 pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_25%_-10%,#1d5246_0%,#11332c_50%,#0a1f1b_100%)]" />
          <BrandMark
            variant="mono"
            className="absolute top-1/2 -right-[14%] h-[130%] -translate-y-1/2 text-white/[0.05]"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Eyebrow className="text-accent-300">Portfolio &amp; performance</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-light text-white text-balance lg:text-6xl">
              Every plant, measured.
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-cream/70">
              We present our plants the way an owner would want to see their own: by how each one
              performs against comparable plants, not by the length of its equipment list.
            </p>
          </div>

          {/* No headline counters (plants, megawatts) on purpose: this page is about how the
              plants perform, not how big the company is. */}
        </Container>
      </section>

      <Section className="bg-cream">
        <Container>
          <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {plants.map((plant) => (
              <li key={plant.slug}>
                <PlantCard plant={plant} />
              </li>
            ))}
          </ul>

          <p className="mt-16 max-w-2xl leading-relaxed text-slate-muted">
            The portfolio grows deliberately across {site.location.region}. If you own a plant in
            the region and want to know what it should be producing, we are happy to take a look.
          </p>
        </Container>
      </Section>

      <OwnerCta />
    </>
  )
}
