import Link from 'next/link'
import { Button, Container, Section, SectionHeading } from '@/components/ui'
import { getServices } from '@/lib/cms'

export async function Services() {
  const services = await getServices()

  return (
    <Section className="bg-primary-900">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="What We Do"
            title="Six disciplines, one operating standard."
            intro="Owners engage us for a single service or hand over the whole asset. Either way the same reporting, the same inspections and the same people stand behind it."
          />
          <Button href="/services" variant="ghost-light" className="shrink-0">
            All Services
          </Button>
        </div>

        <ul className="mt-16 grid gap-px border border-cream/12 bg-cream/12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col bg-primary-900 p-9 transition-colors duration-400 hover:bg-primary-800 lg:p-11"
              >
                <span className="font-label text-xs font-semibold tracking-[0.16em] text-accent-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-display text-3xl leading-tight font-light text-cream">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-cream/60">
                  {service.blurb}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-8 inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-300 uppercase"
                >
                  Learn more
                  <span className="transition-transform duration-400 ease-out-soft group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
