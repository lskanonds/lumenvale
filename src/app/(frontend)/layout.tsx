import React from 'react'
import type { Metadata } from 'next'
import { Newsreader, Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LivePreviewListener } from '@/components/layout/LivePreviewListener'
import { getNavigation, getSiteSettings } from '@/lib/cms'
import { indexable } from '@/lib/indexing'
import './styles.css'

// No `weight` lists: all three are variable fonts, and naming weights makes next/font ship
// one static file per weight instead of a single variable file.
//
// Newsreader's optical-size axis is requested explicitly: it thickens strokes as the size
// drops, so the same family works for a 92px hero line and a 14px label.
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-newsreader',
  display: 'swap',
})

// The wordmark only: the logo lockup and the company name in the footer.
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/**
 * `new URL('')` throws, and site settings are drafted, so the field can be momentarily
 * empty while someone retypes it. Without this guard the live preview would crash.
 */
const metadataBase = (url: string): URL | undefined => {
  try {
    return new URL(url)
  } catch {
    return undefined
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()

  return {
    metadataBase: metadataBase(site.url),
    title: {
      default: `${site.nameFull} | ${site.tagline}`,
      template: `%s | ${site.nameFull}`,
    },
    description: site.description,
    openGraph: {
      type: 'website',
      siteName: site.nameFull,
      locale: 'en_US',
      url: site.url,
      title: `${site.nameFull} | ${site.tagline}`,
      description: site.description,
    },
    twitter: { card: 'summary_large_image' },
    // Closed unless ALLOW_INDEXING says otherwise. Must agree with src/app/robots.ts.
    robots: { index: indexable, follow: indexable },
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const [site, navigation] = await Promise.all([getSiteSettings(), getNavigation()])

  return (
    <html lang="en" className={`${newsreader.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-800 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <LivePreviewListener />
        <Header siteName={site.name} descriptor={site.descriptor} navigation={navigation} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
