import Link from 'next/link'
import { Emblem } from '@/components/brand/Brand'
import { getNavigation, getServices, getSiteSettings } from '@/lib/cms'
import { footerOnlyNavigation } from '@/lib/types'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
]

export async function Footer() {
  const [site, services, navigation] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getNavigation(),
  ])
  const socials = Object.entries(site.social).filter(([, url]) => url)
  // The footer lists the whole company, including pages kept out of the main menu.
  const companyLinks = [...navigation, ...footerOnlyNavigation]
  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  }))

  const contacts = [
    { label: 'General enquiries', email: site.email.general },
    { label: 'Asset owners', email: site.email.owners },
    { label: 'Investment & acquisitions', email: site.email.investors },
  ]

  return (
    <footer className="bg-primary-900 text-cream">
      <div className="mx-auto max-w-[85rem] px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            {/* Decorative: the company name follows as text. */}
            <Emblem variant="reverse" className="h-28 w-28" />
            <p className="mt-6 font-wordmark text-lg font-medium tracking-[0.14em] uppercase">
              {site.nameFull}
            </p>
            <p className="mt-3 font-display text-xl text-accent-200 italic">{site.tagline}</p>
            <div className="rule-accent mt-6 h-px w-24" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-accent-300">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-accent-300">Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-accent-300">Connect</h2>
            <ul className="mt-5 space-y-4">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <span className="block text-xs tracking-wider text-cream/60 uppercase">
                    {contact.label}
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-cream/85 transition-colors hover:text-accent-200"
                  >
                    {contact.email}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <span className="block text-xs tracking-wider text-cream/60 uppercase">Office</span>
                <address className="text-sm not-italic text-cream/85">
                  {site.location.city}, {site.location.stateCode}
                  <br />
                  Serving {site.location.region}
                </address>
              </li>
            </ul>

            {socials.length > 0 && (
              <ul className="mt-6 flex gap-4">
                {socials.map(([network, url]) => (
                  <li key={network}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-wider text-cream/60 uppercase transition-colors hover:text-accent-200"
                    >
                      {network}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/12 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-cream/60 transition-colors hover:text-accent-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {site.footerNote && (
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-cream/60">{site.footerNote}</p>
        )}
      </div>
    </footer>
  )
}
