import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { OwnerCta } from '@/components/plant/CaseStudy'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Eyebrow, Section } from '@/components/ui'
import { Sections } from '@/blocks/Sections'
import { getService, getServices } from '@/lib/cms'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return {}
  return { title: service.title, description: service.blurb }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) notFound()

  const others = (await getServices()).filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} intro={service.lead} />

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="space-y-12">
                {service.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-display text-3xl leading-tight font-light text-primary-900">
                      {section.heading}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-primary-900/85">{section.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 border-l border-accent-300 pl-7">
                <h2 className="eyebrow">What ownership sees</h2>
                <p className="mt-4 text-lg leading-relaxed text-primary-900/85">{service.reporting}</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-stone bg-sand p-9 lg:sticky lg:top-28 lg:p-10">
                <Eyebrow>Scope</Eyebrow>
                <ul className="mt-6 space-y-3.5">
                  {service.covers.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] text-primary-900">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Sections blocks={service.extraSections} />

      <Section className="bg-sand">
        <Container>
          <Eyebrow>Other services</Eyebrow>
          <ul className="mt-8 grid gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-5">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full items-center bg-sand p-6 transition-colors hover:bg-cream"
                >
                  <span className="font-display text-xl leading-snug font-normal text-primary-900 transition-colors group-hover:text-accent-600">
                    {other.title}
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
