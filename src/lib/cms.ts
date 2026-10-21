import 'server-only'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import type {
  Homepage as HomepageDoc,
  Job as JobDoc,
  Media as MediaDoc,
  Page as PageDoc,
  Plant as PlantDoc,
  Service as ServiceDoc,
  SiteSetting as SiteSettingsDoc,
  Team as TeamDoc,
} from '@/payload-types'
import {
  navigation,
  type HomepageContent,
  type Image,
  type Job,
  type NavItem,
  type Plant,
  type Service,
  type SiteConfig,
  type TeamMember,
} from '@/lib/types'

/*
  Read side of the CMS.

  Every export is wrapped in React's `cache`, so a page that needs site settings in three
  components still runs one query. Pages are statically rendered: these run at build time
  and again whenever a revalidation hook fires after an edit.

  Collection reads are draft-aware. A page asks for content the same way whether it is
  being built, served, or rendered in the admin's live preview; the decision is made here
  once, so no page needs to know that preview exists.
*/

const client = cache(async () => getPayload({ config }))

/** Documents visible to the public. Drafts are excluded by status, not by access rules. */
const publishedOnly = { _status: { equals: 'published' } }

/**
 * Whether this render is a draft preview.
 *
 * Draft mode is a request-scoped cookie and there is no request at build time or during
 * `generateStaticParams`, hence the try/catch. Falling back to false is the safe side: a
 * build renders published content, which is what a build should render.
 */
const previewing = cache(async (): Promise<boolean> => {
  try {
    return (await draftMode()).isEnabled
  } catch {
    return false
  }
})

/** Uploads arrive as an id when unpopulated; only a populated doc can be rendered. */
const toImage = (value: number | MediaDoc | null | undefined): Image | undefined => {
  if (!value || typeof value === 'number' || !value.url) return undefined
  return {
    src: value.url,
    alt: value.alt ?? '',
    width: value.width ?? undefined,
    height: value.height ?? undefined,
  }
}

/** Payload wraps repeated scalars in objects; views want plain arrays. */
const unwrap = (rows: Record<string, unknown>[] | null | undefined, key: string): string[] =>
  (rows ?? []).map((row) => row[key]).filter((value): value is string => typeof value === 'string')

const clean = <T>(value: T | null | undefined): T | undefined => value ?? undefined

/*
  The generated types mark many fields as required, which holds for published documents.
  A draft is saved while the editor types, so half of it can legitimately be empty. These
  fallbacks keep the live preview from crashing on the first keystroke of a new record.
*/
const text = (value: string | null | undefined): string => value ?? ''

const mapPlant = (doc: PlantDoc): Plant => ({
  slug: text(doc.slug),
  name: text(doc.name),
  technology: text(doc.technology),
  offtake: clean(doc.offtake),
  status: doc.operatingStatus ?? 'operating',
  statusLabel: text(doc.statusLabel),
  region: text(doc.region),
  capacity: doc.capacity ?? 0,
  storage: clean(doc.storage),
  commissionedYear: clean(doc.commissionedYear),
  interconnection: clean(doc.interconnection),
  role: clean(doc.role),
  address: {
    street: text(doc.address?.street),
    city: text(doc.address?.city),
    state: text(doc.address?.state),
    zip: text(doc.address?.zip),
    mapQuery: clean(doc.address?.mapQuery),
  },
  featured: Boolean(doc.featured),
  roleSummary: text(doc.roleSummary),
  scope: (doc.scope ?? []).map((group) => ({
    group: text(group.group),
    items: unwrap(group.items, 'item'),
  })),
  performance: {
    headline: text(doc.performance?.headline),
    body: text(doc.performance?.body),
    rank: clean(doc.performance?.rank),
    rankCaption: clean(doc.performance?.rankCaption),
    period: clean(doc.performance?.period),
    source: clean(doc.performance?.source),
    peerGroupSize: clean(doc.performance?.peerGroupSize),
    dataNote: text(doc.performance?.dataNote),
    // A half-typed row in a draft would otherwise plot at zero and drag the chart floor.
    indexSeries: (doc.performance?.indexSeries ?? []).flatMap((row) =>
      row.month && typeof row.yieldIndex === 'number'
        ? [{ month: row.month, value: row.yieldIndex }]
        : [],
    ),
    metrics: (doc.performance?.metrics ?? []).map((metric, index) => ({
      key: metric.id ?? `metric-${index}`,
      label: text(metric.label),
      value: clean(metric.value),
      caption: clean(metric.caption),
      trend: metric.trend === 'up' || metric.trend === 'down' ? metric.trend : undefined,
    })),
  },
  description: unwrap(doc.description, 'paragraph'),
  highlights: (doc.highlights ?? []).map((row) => ({ label: row.label, value: row.value })),
  systems: unwrap(doc.systems, 'system'),
  heroImage: toImage(doc.heroImage),
  gallery: (doc.gallery ?? []).flatMap((row) => {
    const image = toImage(row.image)
    return image ? [{ ...image, caption: clean(row.caption) }] : []
  }),
  extraSections: doc.extraSections ?? undefined,
  seo: {
    title: doc.seo?.title || text(doc.name),
    description: doc.seo?.description || text(doc.performance?.headline),
  },
})

const mapService = (doc: ServiceDoc): Service => ({
  slug: text(doc.slug),
  title: text(doc.title),
  blurb: text(doc.blurb),
  lead: text(doc.lead),
  sections: (doc.sections ?? []).map((s) => ({ heading: text(s.heading), body: text(s.body) })),
  covers: unwrap(doc.covers, 'item'),
  reporting: text(doc.reporting),
  extraSections: doc.extraSections ?? undefined,
})

const mapTeamMember = (doc: TeamDoc): TeamMember => ({
  slug: text(doc.slug),
  name: text(doc.name),
  title: text(doc.title),
  bio: unwrap(doc.bio, 'paragraph'),
  email: clean(doc.email),
  linkedin: clean(doc.linkedin),
  photo: toImage(doc.photo),
})

const mapJob = (doc: JobDoc): Job => ({
  slug: text(doc.slug),
  title: text(doc.title),
  department: text(doc.department),
  location: text(doc.location),
  type: text(doc.type),
  plant: text(doc.plant),
  summary: text(doc.summary),
  responsibilities: unwrap(doc.responsibilities, 'item'),
  requirements: unwrap(doc.requirements, 'item'),
})

/*
  Pages are returned as Payload documents instead of being mapped like everything else.
  A page is a list of block types, and a mapper would restate what `payload-types` already
  says for each of them. The block renderers are the only consumers.
*/
export const getPages = cache(async (): Promise<PageDoc[]> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'pages',
    where: draft ? undefined : publishedOnly,
    draft,
    sort: 'navOrder',
    limit: 200,
    depth: 1,
  })
  return docs
})

export const getPage = cache(async (slug: string): Promise<PageDoc | undefined> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'pages',
    where: draft ? { slug: { equals: slug } } : { slug: { equals: slug }, ...publishedOnly },
    draft,
    limit: 1,
    depth: 1,
  })
  return docs[0]
})

/**
 * Header and mobile menu links: the routes in code plus any page that asked to be listed,
 * sorted by a shared position so a CMS page can sit between two built-in links.
 */
export const getNavigation = cache(async (): Promise<NavItem[]> => {
  const pages = await getPages()
  const fromCms = pages
    .filter((page) => page.showInNav && page.slug)
    .map((page) => ({
      label: page.navLabel || page.title,
      href: `/${page.slug}`,
      order: page.navOrder ?? 100,
    }))

  return [...navigation, ...fromCms]
    .sort((a, b) => a.order - b.order)
    .map(({ label, href }) => ({ label, href }))
})

export const getPlants = cache(async (): Promise<Plant[]> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'plants',
    where: draft ? undefined : publishedOnly,
    draft,
    sort: 'order',
    limit: 200,
    depth: 1,
  })
  return docs.map(mapPlant)
})

export const getPlant = cache(async (slug: string): Promise<Plant | undefined> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'plants',
    where: draft ? { slug: { equals: slug } } : { slug: { equals: slug }, ...publishedOnly },
    draft,
    limit: 1,
    depth: 1,
  })
  return docs[0] ? mapPlant(docs[0]) : undefined
})

export const getFeaturedPlants = cache(async (): Promise<Plant[]> =>
  (await getPlants()).filter((plant) => plant.featured),
)

export const getServices = cache(async (): Promise<Service[]> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'services',
    where: draft ? undefined : publishedOnly,
    draft,
    sort: 'order',
    limit: 50,
    depth: 0,
  })
  return docs.map(mapService)
})

export const getService = cache(async (slug: string): Promise<Service | undefined> =>
  (await getServices()).find((service) => service.slug === slug),
)

export const getTeam = cache(async (): Promise<TeamMember[]> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'team',
    where: draft ? undefined : publishedOnly,
    draft,
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs.map(mapTeamMember)
})

export const getJobs = cache(async (): Promise<Job[]> => {
  const payload = await client()
  const draft = await previewing()
  const { docs } = await payload.find({
    collection: 'jobs',
    where: draft ? undefined : publishedOnly,
    draft,
    limit: 100,
    depth: 0,
  })
  return docs.map(mapJob)
})

/**
 * Every published address that comes out of the CMS, with the date it last changed.
 *
 * A separate read because the getters above drop `updatedAt`, which is the field a sitemap
 * exists to carry. Published only: a draft in the sitemap would invite a crawler to a 404.
 */
export const getSitemapEntries = cache(
  async (): Promise<{ lastModified: Date; path: string }[]> => {
    const payload = await client()

    const read = async (collection: 'pages' | 'plants' | 'services', prefix: string) => {
      const { docs } = await payload.find({
        collection,
        where: publishedOnly,
        draft: false,
        limit: 500,
        depth: 0,
        select: { slug: true, updatedAt: true },
      })

      return docs.flatMap((doc) => {
        const row = doc as unknown as { slug?: string; updatedAt?: string }
        if (!row.slug) return []
        return [{ lastModified: new Date(row.updatedAt ?? Date.now()), path: `${prefix}${row.slug}` }]
      })
    }

    const [pages, plants, services] = await Promise.all([
      read('pages', '/'),
      read('plants', '/portfolio/'),
      read('services', '/services/'),
    ])

    return [...pages, ...plants, ...services]
  },
)

export const getSiteSettings = cache(async (): Promise<SiteConfig> => {
  const payload = await client()
  const doc = (await payload.findGlobal({
    slug: 'siteSettings',
    draft: await previewing(),
  })) as SiteSettingsDoc
  return {
    legalName: text(doc.legalName),
    name: text(doc.name),
    nameFull: text(doc.nameFull),
    descriptor: text(doc.descriptor),
    tagline: text(doc.tagline),
    url: text(doc.url),
    description: text(doc.description),
    footerNote: clean(doc.footerNote),
    location: {
      city: text(doc.location?.city),
      state: text(doc.location?.state),
      stateCode: text(doc.location?.stateCode),
      region: text(doc.location?.region),
    },
    email: {
      general: text(doc.email?.general),
      owners: text(doc.email?.owners),
      investors: text(doc.email?.investors),
    },
    social: {
      linkedin: clean(doc.social?.linkedin),
      facebook: clean(doc.social?.facebook),
      instagram: clean(doc.social?.instagram),
    },
  }
})

export const getHomepage = cache(async (): Promise<HomepageContent> => {
  const payload = await client()
  const doc = (await payload.findGlobal({
    slug: 'homepage',
    draft: await previewing(),
  })) as HomepageDoc
  return {
    hero: { eyebrow: text(doc.hero?.eyebrow), intro: text(doc.hero?.intro) },
    stats: (doc.stats ?? []).map((stat) => ({
      value: text(stat.value),
      label: text(stat.label),
      detail: text(stat.detail),
    })),
    extraSections: doc.extraSections ?? undefined,
  }
})
