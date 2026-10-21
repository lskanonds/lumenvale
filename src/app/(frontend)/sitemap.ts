import type { MetadataRoute } from 'next'
import { getSitemapEntries, getSiteSettings } from '@/lib/cms'

/*
  Routes that live in code and so cannot be discovered from the CMS. Written out rather
  than read from the filesystem: /brand-kit answers 404 in production and must not be
  advertised. A page that moves into the CMS comes off this list.
*/
const CODED_ROUTES = ['/', '/about', '/services', '/portfolio', '/leadership', '/careers']

/*
  Rebuilt hourly. The revalidation hooks clear page paths when an editor publishes, but a
  metadata route is not a page path, so without this the sitemap would only change on the
  next deploy.
*/
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [site, entries] = await Promise.all([getSiteSettings(), getSitemapEntries()])

  // Same source as the canonical links: the address in Site settings.
  const base = site.url.replace(/\/$/, '')

  return [
    ...CODED_ROUTES.map((path) => ({ url: `${base}${path}` })),
    ...entries.map(({ lastModified, path }) => ({ lastModified, url: `${base}${path}` })),
  ]
}
