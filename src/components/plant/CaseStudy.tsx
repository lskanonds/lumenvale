import Link from 'next/link'
import Image from 'next/image'
import { BrandMark } from '@/components/brand/Brand'
import { IndexChart } from '@/components/plant/IndexChart'
import { Container, Eyebrow, Section, SectionHeading } from '@/components/ui'
import { getSiteSettings } from '@/lib/cms'
import { formatCapacity, publishedMetrics, type Plant } from '@/lib/types'

/*
  Where the figures come from: how current they are and what they are compared against.
  An index against an unnamed group over an unnamed period cannot be checked, so this line
  is printed directly under the metrics.
*/
function Provenance({ plant }: { plant: Plant }) {
  const { period, source, peerGroupSize } = plant.performance

  // "Figures to June 2026" rather than "Reporting period": each card names its own period
  // (year to date, trailing twelve months), and the date only says how current the set is.
  const parts = [
    source && `Source: ${source}`,
    peerGroupSize &&
      `Indexed against a regional peer group of ${peerGroupSize} plants, this one included`,
    period && `Figures to ${period}`,
  ].filter(Boolean)

  if (parts.length === 0) return null

  return (
    <p className="mt-8 text-sm leading-relaxed text-cream/55">
      {parts.join(' · ')}. Each figure states the period it covers. Index figures are stated
      against the peer-group average, where 100 is parity. Peer plants are anonymised and their
      individual results are not published.
    </p>
  )
}

export function CaseStudyHero({ plant }: { plant: Plant }) {
  const facts = [
    { label: 'Region', value: plant.region },
    { label: 'Capacity', value: formatCapacity(plant.capacity) },
    plant.storage ? { label: 'Storage', value: plant.storage } : null,
    { label: 'Status', value: plant.statusLabel },
    plant.role ? { label: 'Our role', value: plant.role } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null)

  return (
    <section className="relative flex min-h-[34rem] items-end overflow-hidden lg:min-h-[42rem]">
      <div aria-hidden="true" className="absolute inset-0 bg-primary-950">
        {plant.heroImage ? (
          <Image
            src={plant.heroImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_22%_-10%,#1d5246_0%,#11332c_45%,#0a1f1b_100%)]" />
            <BrandMark
              variant="mono"
              className="absolute top-1/2 -right-[16%] h-[140%] -translate-y-1/2 text-white/[0.05]"
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/75 to-primary-950/30" />
      </div>

      <Container className="relative z-10 pt-36 pb-16 lg:pb-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/portfolio"
            className="text-[0.6875rem] font-semibold tracking-[0.18em] text-accent-300 uppercase transition-colors hover:text-accent-200"
          >
            &larr; Portfolio &amp; Performance
          </Link>
        </nav>

        <p className="font-label text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-300 uppercase">
          {plant.technology}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] font-light text-white text-balance sm:text-5xl lg:text-6xl">
          {plant.name}
        </h1>

        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
          {facts.map((item) => (
            <div key={item.label}>
              <dt className="text-[0.625rem] tracking-[0.16em] text-cream/60 uppercase">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-[0.9375rem] text-cream/90">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}

/**
 * The section the page exists for. Owners and lenders are the audience, so results come
 * before any description of the plant itself.
 */
export function PerformanceSection({ plant }: { plant: Plant }) {
  const { performance } = plant
  const metrics = publishedMetrics(plant)

  return (
    <Section className="bg-primary-900">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow className="text-accent-300">Performance under management</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] font-light text-cream text-balance lg:text-5xl">
              {performance.headline}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/70">
              {performance.body}
            </p>
          </div>

          {performance.rank && (
            <div className="lg:col-span-5">
              <div className="border border-accent-400/30 bg-primary-950/60 p-10 text-center lg:p-12">
                <p className="font-display text-7xl leading-none font-light text-accent-300 lining-nums lg:text-8xl">
                  {performance.rank}
                </p>
                <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.16em] text-cream/70 uppercase">
                  {performance.rankCaption}
                </p>
              </div>
            </div>
          )}
        </div>

        {metrics.length > 0 ? (
          <>
            <ul className="mt-16 grid gap-px border border-cream/12 bg-cream/12 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <li key={metric.key} data-metric className="bg-primary-900 p-8 lg:p-9">
                  <p
                    data-metric-value
                    className="font-display text-4xl leading-none font-light text-cream lining-nums lg:text-5xl"
                  >
                    {metric.trend === 'up' && (
                      <span aria-hidden="true" className="mr-1 text-accent-400">
                        &uarr;
                      </span>
                    )}
                    {metric.trend === 'down' && (
                      <span aria-hidden="true" className="mr-1 text-accent-400">
                        &darr;
                      </span>
                    )}
                    {metric.value}
                  </p>
                  <p className="mt-5 text-[0.6875rem] font-semibold tracking-[0.14em] text-cream uppercase">
                    {metric.label}
                  </p>
                  {metric.caption && (
                    <p className="mt-1.5 text-sm text-cream/60">{metric.caption}</p>
                  )}
                </li>
              ))}
            </ul>

            <Provenance plant={plant} />
            <IndexChart plant={plant} />
          </>
        ) : (
          <div className="mt-16 flex flex-col gap-6 border-t border-cream/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl leading-relaxed text-cream/60">{performance.dataNote}</p>
            <Link
              href="/owners"
              className="group inline-flex shrink-0 items-center gap-3 border-b border-accent-400/40 pb-2 text-[0.75rem] font-semibold tracking-[0.14em] text-accent-200 uppercase transition-colors hover:border-accent-300 hover:text-white"
            >
              Request the performance report
              <span
                aria-hidden="true"
                className="transition-transform duration-400 ease-out-soft group-hover:translate-x-1.5"
              >
                &rarr;
              </span>
            </Link>
          </div>
        )}
      </Container>
    </Section>
  )
}

export function ManagementScope({ plant }: { plant: Plant }) {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="What we run"
          title="One team accountable for the whole plant."
          intro={plant.roleSummary}
        />

        <div className="mt-16 grid gap-px border border-stone/70 bg-stone/70 md:grid-cols-3">
          {plant.scope.map((group) => (
            <div key={group.group} className="bg-cream p-8 lg:p-10">
              <h3 className="font-label text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-600 uppercase">
                {group.group}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-primary-900">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function PlantOverview({ plant }: { plant: Plant }) {
  return (
    <Section className="bg-sand">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>The plant</Eyebrow>
            <div className="mt-6 space-y-5">
              {plant.description.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-primary-900/85">
                  {paragraph}
                </p>
              ))}
            </div>

            {plant.highlights.length > 0 && (
              <dl className="mt-12 grid grid-cols-2 gap-px border border-stone bg-stone">
                {plant.highlights.map((item) => (
                  <div key={item.label} className="bg-sand p-6">
                    <dt className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-2 font-display text-xl font-normal text-primary-900 lining-nums">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {plant.systems.length > 0 && (
            <div className="lg:col-span-5">
              <Eyebrow>On-site systems</Eyebrow>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
                {plant.systems.map((system) => (
                  <li
                    key={system}
                    className="flex gap-3 border-b border-stone/70 pb-3 text-[0.9375rem] text-primary-900/85"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-400" />
                    {system}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

/** Rendered only once photography has been uploaded. */
export function PlantGallery({ plant }: { plant: Plant }) {
  if (plant.gallery.length === 0) return null

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading eyebrow="The plant" title="On site." />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plant.gallery.map((image) => (
            <li key={image.src}>
              <div className="relative aspect-3/2 overflow-hidden bg-primary-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {image.caption && <p className="mt-3 text-sm text-slate-muted">{image.caption}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

/*
  The map uses Google's keyless `output=embed` endpoint, which avoids a Cloud project and
  an API key for a single pin. It is long-standing but not formally documented: if it ever
  stops working, switch the URL to the Maps Embed API and add a key.

  The query is the site address, or `mapQuery` when the pin needs correcting. Solar sites
  rarely have a precise street address, so coordinates are common there. Hybrid satellite
  view at a wide zoom, because a plant is a field of panels, not a pin on a street.
*/
function PlantMap({ plant }: { plant: Plant }) {
  const { address, name } = plant
  const query =
    address.mapQuery || `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  const encoded = encodeURIComponent(query)

  return (
    <div className="mt-9">
      {/* Lazy: it is below the fold everywhere and would be the heaviest thing on the page. */}
      <div className="relative aspect-[4/3] overflow-hidden border border-stone sm:aspect-[16/10]">
        <iframe
          title={`Map showing the location of ${name}`}
          src={`https://maps.google.com/maps?q=${encoded}&t=h&z=14&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <p className="mt-4">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
        >
          Open in Google Maps
        </a>
      </p>
    </div>
  )
}

export function LocationAndGrid({ plant }: { plant: Plant }) {
  const { address } = plant
  const grid = [
    plant.interconnection ? { label: 'Interconnection', value: plant.interconnection } : null,
    plant.offtake ? { label: 'Offtake', value: plant.offtake } : null,
    plant.commissionedYear ? { label: 'Commissioned', value: String(plant.commissionedYear) } : null,
    plant.storage ? { label: 'Battery storage', value: plant.storage } : null,
  ].filter((row): row is { label: string; value: string } => row !== null)

  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>Location</Eyebrow>
            <address className="mt-6 font-display text-2xl leading-relaxed font-light text-primary-900 not-italic">
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </address>
            <PlantMap plant={plant} />
          </div>

          <div className="lg:col-span-6">
            <Eyebrow>Grid and offtake</Eyebrow>
            {grid.length > 0 && (
              <dl className="mt-6 border-t border-stone">
                {grid.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-stone py-4 sm:flex-row sm:gap-6"
                  >
                    <dt className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase sm:w-40 sm:shrink-0 sm:pt-1">
                      {row.label}
                    </dt>
                    <dd className="text-[0.9375rem] text-primary-900">{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-8 max-w-md leading-relaxed text-slate-muted">
              Plants are working industrial sites and are not open to the public. Site visits
              for owners, lenders and their advisers are arranged through the asset management
              team.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/** Closing call to action: the reason an owner is on this page at all. */
export async function OwnerCta() {
  const site = await getSiteSettings()

  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_75%_0%,#1d5246_0%,#11332c_50%,#0a1f1b_100%)]" />
        <BrandMark
          variant="mono"
          className="absolute top-1/2 -left-[14%] h-[150%] -translate-y-1/2 text-white/[0.04]"
        />
      </div>

      <Container className="relative z-10 py-section-sm lg:py-section">
        <div className="max-w-3xl">
          <Eyebrow className="text-accent-300">For asset owners</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] font-light text-cream text-balance lg:text-5xl">
            Is your plant producing what it should?
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-cream/70">
            {site.name} runs solar and storage plants for their owners: monitoring, maintenance,
            reporting and the commercial work around them, measured against the energy the plant
            should be producing rather than the hours we spent on it.
          </p>
          <Link
            href="/owners"
            className="mt-10 inline-flex items-center justify-center border border-accent-400 bg-accent-400 px-9 py-4.5 text-[0.75rem] font-semibold tracking-[0.14em] text-primary-950 uppercase transition-colors hover:border-accent-300 hover:bg-accent-300"
          >
            Talk to us about your plant
          </Link>
        </div>
      </Container>
    </section>
  )
}
