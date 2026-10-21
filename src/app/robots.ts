import type { MetadataRoute } from 'next'
import { getSiteSettings } from '@/lib/cms'
import { indexable } from '@/lib/indexing'

/*
  robots.txt, driven by the same switch as the robots meta tag in the root layout. The two
  have to agree: a page that says "index me" on a site whose robots.txt disallows
  everything is never crawled, so the tag is never read.

  This file sits at the root of app/ rather than in (frontend): Next only treats robots.ts
  as a metadata route at the app root, and one level down /robots.txt would fall through to
  the catch-all 404.
*/
export default async function robots(): Promise<MetadataRoute.Robots> {
  const site = await getSiteSettings()

  if (!indexable) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // All of these require a login anyway; listing them keeps crawlers on the content.
      disallow: ['/admin', '/api', '/next/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
