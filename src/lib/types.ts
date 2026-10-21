/**
 * Domain types used by the components.
 *
 * Kept separate from the generated Payload types on purpose. The CMS shapes are full of
 * `{ item: string }` wrappers and nullable relations that do not belong in a view, so
 * `src/lib/cms.ts` maps one onto the other and absorbs schema changes in one place.
 */

import type { PageSection } from '@/blocks/types'

// The one CMS shape that reaches the views unmapped: a union of block types whose only
// readers are the block renderers, which need to know the CMS shape anyway.
export type { PageSection }

export type Image = { src: string; alt: string; width?: number; height?: number }

export type Metric = {
  key: string
  label: string
  /** Undefined until a verified figure exists; the card is then not rendered. */
  value?: string
  caption?: string
  trend?: 'up' | 'down'
}

export type PlantStatus = 'operating' | 'repowering' | 'construction'

export type Plant = {
  slug: string
  name: string
  technology: string
  offtake?: string
  status: PlantStatus
  statusLabel: string
  region: string
  /** Peak DC capacity in MWp. */
  capacity: number
  storage?: string
  commissionedYear?: number
  interconnection?: string
  role?: string
  address: { street: string; city: string; state: string; zip: string; mapQuery?: string }
  featured: boolean
  roleSummary: string
  scope: { group: string; items: string[] }[]
  performance: {
    headline: string
    body: string
    rank?: string
    rankCaption?: string
    period?: string
    source?: string
    peerGroupSize?: number
    metrics: Metric[]
    indexSeries: { month: string; value: number }[]
    dataNote: string
  }
  description: string[]
  highlights: { label: string; value: string }[]
  systems: string[]
  heroImage?: Image
  gallery: (Image & { caption?: string })[]
  /** Sections the editor added below the case study. */
  extraSections?: PageSection[]
  seo: { title: string; description: string }
}

export type Service = {
  slug: string
  title: string
  blurb: string
  lead: string
  sections: { heading: string; body: string }[]
  covers: string[]
  reporting: string
  extraSections?: PageSection[]
}

export type TeamMember = {
  slug: string
  name: string
  title: string
  bio: string[]
  email?: string
  linkedin?: string
  photo?: Image
}

export type Job = {
  slug: string
  title: string
  department: string
  location: string
  type: string
  plant: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export type SiteConfig = {
  legalName: string
  name: string
  nameFull: string
  descriptor: string
  tagline: string
  url: string
  description: string
  footerNote?: string
  location: { city: string; state: string; stateCode: string; region: string }
  email: { general: string; owners: string; investors: string }
  social: { linkedin?: string; facebook?: string; instagram?: string }
}

export type HomepageContent = {
  hero: { eyebrow: string; intro: string }
  stats: { value: string; label: string; detail: string }[]
  extraSections?: PageSection[]
}

/** Only metrics with a verified figure are ever rendered. */
export const publishedMetrics = (plant: Plant) =>
  plant.performance.metrics.filter((metric) => Boolean(metric.value))

/** "48.6 MWp". One decimal at most, and none for whole numbers. */
export const formatCapacity = (capacity: number) =>
  `${capacity.toLocaleString('en-US', { maximumFractionDigits: 1 })} MWp`

export type NavItem = { label: string; href: string }

/**
 * Routes that live in code, with the menu positions the Pages collection refers to
 * ("the built-in links occupy 10 to 60"). `getNavigation` merges CMS pages into this list,
 * which is how a new page can put itself in the menu. Contact is a CMS page at position 60.
 */
export const navigation: (NavItem & { order: number })[] = [
  { label: 'About', href: '/about', order: 10 },
  { label: 'Services', href: '/services', order: 20 },
  // The page itself is titled "Portfolio & Performance"; the menu only has room for a word.
  { label: 'Portfolio', href: '/portfolio', order: 30 },
  { label: 'Leadership', href: '/leadership', order: 40 },
]

/** Pages reachable from the footer but kept out of the main menu. */
export const footerOnlyNavigation: NavItem[] = [{ label: 'Careers', href: '/careers' }]
