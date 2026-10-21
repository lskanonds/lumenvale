import Link from 'next/link'
import Image from 'next/image'
import { BrandMark } from '@/components/brand/Brand'
import { PlantCard } from '@/components/plant/PlantCard'
import { Button, Container, Section, SectionHeading } from '@/components/ui'
import { getFeaturedPlants } from '@/lib/cms'
import { formatCapacity } from '@/lib/types'

/**
 * The first featured plant gets a wide case-study teaser and any others fall into a grid
 * below it, so a portfolio with a single featured plant still looks intentional.
 */
export async function PortfolioPreview() {
  const featured = await getFeaturedPlants()
  if (featured.length === 0) return null

  const [lead, ...rest] = featured

  return (
    <Section className="bg-sand">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio & performance"
            title="What our management looks like in the numbers."
            intro="We present every plant as a case study: how it performs against comparable plants in its region while we run it."
          />
          <Button href="/portfolio" variant="outline" className="shrink-0">
            See the Performance
          </Button>
        </div>

        <article className="mt-16 grid items-stretch gap-px border border-stone/70 bg-stone/70 lg:grid-cols-2">
          <Link href={`/portfolio/${lead.slug}`} className="group relative block bg-primary-900">
            <div className="relative flex h-full min-h-[22rem] items-center justify-center overflow-hidden">
              {lead.heroImage ? (
                <Image
                  src={lead.heroImage.src}
                  alt={lead.heroImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_25%_0%,#1b4a40_0%,#0e2a25_65%,#0a1f1b_100%)]" />
                  <BrandMark
                    variant="mono"
                    className="relative h-32 w-32 text-white/12 transition-transform duration-700 ease-out-soft group-hover:scale-110"
                  />
                </>
              )}
              <span className="absolute top-5 left-5 bg-cream/95 px-3 py-1.5 text-[0.625rem] font-semibold tracking-[0.14em] text-primary-900 uppercase">
                {lead.statusLabel}
              </span>
            </div>
          </Link>

          <div className="flex flex-col justify-center bg-sand p-9 lg:p-14">
            <p className="font-label text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-600 uppercase">
              {lead.technology}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-snug font-light text-primary-900 lg:text-4xl">
              <Link
                href={`/portfolio/${lead.slug}`}
                className="transition-colors hover:text-accent-600"
              >
                {lead.name}
              </Link>
            </h3>
            <p className="mt-3 text-sm text-slate-muted">
              {lead.region} · {formatCapacity(lead.capacity)}
            </p>

            {lead.performance.rank && (
              <div className="mt-9 flex items-baseline gap-5 border-t border-stone pt-8">
                <p className="font-display text-5xl leading-none font-light whitespace-nowrap text-accent-600 lining-nums">
                  {lead.performance.rank}
                </p>
                <p className="text-sm leading-snug text-primary-900/80">
                  {lead.performance.rankCaption}
                </p>
              </div>
            )}

            <Link
              href={`/portfolio/${lead.slug}`}
              className="group mt-9 inline-flex items-center gap-2 self-start text-[0.6875rem] font-semibold tracking-[0.16em] text-primary-800 uppercase"
            >
              Read the case study
              <span
                aria-hidden="true"
                className="transition-transform duration-400 ease-out-soft group-hover:translate-x-1.5"
              >
                &rarr;
              </span>
            </Link>
          </div>
        </article>

        {rest.length > 0 && (
          <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((plant) => (
              <li key={plant.slug}>
                <PlantCard plant={plant} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  )
}
