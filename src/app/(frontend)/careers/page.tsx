import type { Metadata } from 'next'
import { EnquiryForm } from '@/components/forms/EnquiryForm'
import { PageHero } from '@/components/layout/PageHero'
import { Container, Eyebrow, Section, SectionHeading } from '@/components/ui'
import { getJobs, getSiteSettings } from '@/lib/cms'

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()
  return {
    title: 'Careers',
    description: `Work with ${site.nameFull}: field service, engineering and asset management roles across ${site.location.region}.`,
  }
}

const whyUs = [
  {
    title: 'You will be trusted to decide',
    body: 'We are small enough that people get real responsibility early and are expected to use it. Nobody here waits for three approvals to reset a tripped inverter.',
  },
  {
    title: 'The standard is written down',
    body: 'You will know what good looks like, because it is documented and inspected rather than left to interpretation. That makes it easier to work to, not harder.',
  },
  {
    title: 'Growth follows the portfolio',
    body: 'As we add plants we promote from within first. The people who bring a plant back to form are the people we want running the next one.',
  },
]

const areas = [
  'Field service',
  'High voltage & substations',
  'SCADA & controls',
  'Performance analytics',
  'Asset management',
  'Health & safety',
]

export default async function CareersPage() {
  const [site, roles] = await Promise.all([getSiteSettings(), getJobs()])

  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Plants are run by people, not by dashboards."
        intro="Monitoring tells you something is wrong. Somebody still has to drive out, find it and fix it safely, and we hire and train for exactly that."
      />

      <Section className="bg-cream">
        <Container>
          <SectionHeading eyebrow={`Why ${site.name}`} title="What you can expect from us." />
          <dl className="mt-16 grid gap-px border border-stone/70 bg-stone/70 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-cream p-9 lg:p-11">
                <dt className="font-display text-2xl leading-snug font-normal text-primary-900">
                  {item.title}
                </dt>
                <dd className="mt-3 leading-relaxed text-slate-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-sand">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>{roles.length > 0 ? 'Open roles' : 'Open applications'}</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-tight font-light text-primary-900">
                {roles.length > 0 ? 'Current vacancies.' : 'No vacancies posted right now.'}
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-slate-muted">
                {roles.length > 0
                  ? 'Apply directly and your application reaches the person who will interview you.'
                  : 'We still want to hear from good technicians and engineers. Send us your details and we will keep them on file for the next opening.'}
              </p>
            </div>

            <div className="lg:col-span-7">
              {roles.length > 0 ? (
                <ul className="border-t border-stone">
                  {roles.map((job) => (
                    <li key={job.slug} className="border-b border-stone py-7">
                      <h3 className="font-display text-2xl font-normal text-primary-900">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-muted">
                        {job.plant} · {job.location} · {job.type}
                      </p>
                      <p className="mt-3 leading-relaxed text-primary-900/80">{job.summary}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border border-stone bg-cream p-9 lg:p-11">
                  <Eyebrow>Where we hire</Eyebrow>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {areas.map((area) => (
                      <li key={area} className="flex gap-3 text-[0.9375rem] text-primary-900">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-3 shrink-0 bg-accent-400"
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="mt-8 text-sm leading-relaxed text-slate-muted">
                {site.legalName} is an equal opportunity employer. We consider all applicants
                without regard to race, colour, religion, sex, sexual orientation, gender identity,
                national origin, age, disability or veteran status.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* The form gets its own full-width section: squeezed beside the vacancy list, it would
          put two inputs on a line barely wide enough for one. */}
      <Section className="bg-cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Apply"
                title="Send us your details."
                intro="You do not need a vacancy to apply. Tell us what you do and where you want to do it, and we will come back to you when something fits, or sooner if it already does."
              />
            </div>
            <div className="lg:col-span-6">
              <EnquiryForm kind="careers" fallbackEmail={site.email.general} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
