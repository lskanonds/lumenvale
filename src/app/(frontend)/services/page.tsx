import type { Metadata } from 'next'
import Link from 'next/link'
import { OwnerCta } from '@/components/plant/CaseStudy'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Section } from '@/components/ui'
import { getServices } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Asset management, operations and maintenance, performance engineering, repowering, technical due diligence and energy market services for solar and storage plants.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Six disciplines, one operating standard."
        intro="Owners engage us for a single service or hand over the whole asset. Either way the same reporting, the same inspections and the same people stand behind it."
      />

      <Section className="bg-cream">
        <Container>
          <ul className="grid gap-px border border-stone/70 bg-stone/70 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col bg-cream p-9 transition-colors duration-400 hover:bg-sand lg:p-11"
                >
                  <span className="font-label text-xs font-semibold tracking-[0.16em] text-accent-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-6 font-display text-3xl leading-tight font-light text-primary-900">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-slate-muted">
                    {service.blurb}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-8 inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-primary-800 uppercase"
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

      <OwnerCta />
    </>
  )
}
