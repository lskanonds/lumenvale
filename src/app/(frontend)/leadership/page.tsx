import type { Metadata } from 'next'
import Image from 'next/image'
import { OwnerCta } from '@/components/plant/CaseStudy'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Eyebrow, Section, SectionHeading } from '@/components/ui'
import { getSiteSettings, getTeam } from '@/lib/cms'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()
  return {
    title: 'Leadership',
    description: `The people accountable for ${site.nameFull}: asset management, field operations and investment.`,
  }
}

const approach = [
  {
    title: 'Small by design',
    body: 'A lean corporate team means the people who make decisions about a plant are the people who visit it. Nothing is delegated to a layer that has never walked the rows.',
  },
  {
    title: 'In the field',
    body: 'Crews are based in each region, so problems are seen in person the same day. A fault seen on site gets solved differently from one that arrives as a line in a report.',
  },
  {
    title: 'Direct access',
    body: 'Owners and lenders deal with principals, not an account manager. If you are trusting us with an asset, you should be able to reach the person responsible for it.',
  },
]

export default async function LeadershipPage() {
  const [site, members] = await Promise.all([getSiteSettings(), getTeam()])

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Accountable people, not an account team."
        intro={`${site.name} is run by engineers and asset managers. The people who set the standard for a plant are the people who answer for it.`}
      />

      <Section className="bg-cream">
        <Container>
          <SectionHeading eyebrow="How we are organised" title="What that means in practice." />
          <dl className="mt-16 grid gap-px border border-stone/70 bg-stone/70 md:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title} className="bg-cream p-9 lg:p-11">
                <dt className="font-display text-2xl font-normal text-primary-900">{item.title}</dt>
                <dd className="mt-3 leading-relaxed text-slate-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {members.length > 0 && (
        <Section className="bg-sand">
          <Container>
            <SectionHeading eyebrow="Leadership" title="The team." />
            <ul className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <li key={member.slug}>
                  {member.photo && (
                    <div className="relative mb-6 aspect-4/5 overflow-hidden bg-primary-900">
                      <Image
                        src={member.photo.src}
                        alt={member.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-normal text-primary-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-label text-[0.6875rem] font-semibold tracking-[0.14em] text-accent-600 uppercase">
                    {member.title}
                  </p>
                  <div className="mt-4 space-y-3 leading-relaxed text-slate-muted">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-4 inline-block text-sm text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
                    >
                      {member.email}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <Section className="bg-sand">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Reach us directly</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-tight font-light text-primary-900">
                Straight to the desk that owns it.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-px border border-stone bg-stone sm:grid-cols-2">
                <li className="bg-sand p-8">
                  <p className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase">
                    Asset management & O&amp;M
                  </p>
                  <a
                    href={`mailto:${site.email.owners}`}
                    className="mt-3 block text-lg text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
                  >
                    {site.email.owners}
                  </a>
                </li>
                <li className="bg-sand p-8">
                  <p className="text-[0.625rem] tracking-[0.16em] text-slate-muted uppercase">
                    Acquisitions & investment
                  </p>
                  <a
                    href={`mailto:${site.email.investors}`}
                    className="mt-3 block text-lg text-primary-800 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
                  >
                    {site.email.investors}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <OwnerCta />
    </>
  )
}
