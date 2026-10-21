import type { CollectionBeforeOperationHook, CollectionConfig, GlobalConfig } from 'payload'

type Doc = Record<string, unknown>

/**
 * Draft settings for everything that has a live preview.
 *
 * The preview pane renders the saved draft on the server, so without autosave it would
 * only move when the editor pressed Save. 375ms is the interval Payload recommends: quick
 * enough to feel live, slow enough not to write a row per keystroke.
 *
 * Drafts never reach visitors; the published version is untouched until Publish.
 */
export const draftsWithAutosave: CollectionConfig['versions'] = {
  drafts: { autosave: { interval: 375 } },
}

/**
 * The same for globals, which type their version settings separately. Worth having even
 * for single documents: without drafts, a typo in the company name is live as it is typed.
 */
export const draftsWithAutosaveGlobal: GlobalConfig['versions'] = {
  drafts: { autosave: { interval: 375 } },
}

/** An hour of grace, so a create screen left open in another tab is never swept. */
const ABANDONED_AFTER = 60 * 60 * 1000

/** Two saves this close together are one save: the row's own insert. */
const NEVER_EDITED = 2 * 1000

/**
 * Delete drafts that were created by opening "Create new" and never touched.
 *
 * With autosave on, Payload creates the document as soon as the create screen renders, so
 * every visit that ends in a change of mind leaves a `<No Name>` row in the list. Such a
 * row has no slug, so it never reaches the site, but it clutters the admin.
 *
 * Only rows that were never edited are removed. `updatedAt` changes on every autosave, so a
 * document whose two timestamps still match has had no input at all. Partly filled drafts
 * are always left alone.
 *
 * Runs before a create, which is the action that produces these rows, so no scheduled job
 * is needed.
 */
export const sweepAbandonedDrafts =
  (titleField: string): CollectionBeforeOperationHook =>
  async ({ collection, operation, req }) => {
    if (operation !== 'create') return

    try {
      const { docs } = await req.payload.find({
        collection: collection.slug,
        where: {
          _status: { equals: 'draft' },
          [titleField]: { exists: false },
          updatedAt: { less_than: new Date(Date.now() - ABANDONED_AFTER).toISOString() },
        },
        // There will normally be zero or one. Capped so a backlog is cleared in batches.
        limit: 100,
        depth: 0,
        overrideAccess: true,
      })

      // The collection is only known at runtime, so `docs` is typed as every collection at
      // once, including ones without timestamps. Every collection using this hook has them.
      const rows = docs as unknown as { createdAt?: string; id: number | string; updatedAt?: string }[]

      // Payload cannot compare two fields in a query, so the "never edited" check is here.
      const untouched = rows.filter((doc) => {
        const created = Date.parse(String(doc.createdAt))
        const updated = Date.parse(String(doc.updatedAt))
        return Number.isFinite(created) && Number.isFinite(updated) && updated - created < NEVER_EDITED
      })

      if (untouched.length === 0) return

      await req.payload.delete({
        collection: collection.slug,
        where: { id: { in: untouched.map((doc) => doc.id) } },
        // These were never published, so there is no cache to clear. Skipping also keeps
        // revalidatePath out of a render, where Next refuses it.
        context: { skipRevalidate: true },
        overrideAccess: true,
      })
    } catch (error) {
      // A failed sweep is only untidiness; it must never block creating a record.
      console.error(`[drafts] abandoned drafts in ${collection.slug} could not be swept`, error)
    }
  }

/**
 * Where each editable thing appears on the public site.
 *
 * Separate from the revalidation paths on each collection, which answer a different
 * question: revalidation clears every page a change touches, preview opens the one page the
 * editor is looking at.
 */
const PAGE: Record<string, (doc: Doc) => string> = {
  // A document without a slug was only just created. Opening the index instead of
  // `/portfolio/undefined` keeps the preview pane off a 404.
  pages: (doc) => (doc.slug ? `/${doc.slug}` : '/'),
  plants: (doc) => (doc.slug ? `/portfolio/${doc.slug}` : '/portfolio'),
  services: (doc) => (doc.slug ? `/services/${doc.slug}` : '/services'),
  team: () => '/leadership',
  jobs: () => '/careers',
  homepage: () => '/',
  siteSettings: () => '/',
}

/** Route that turns draft mode on and lands on the given page. */
export const previewUrl = (path: string): string => `/next/preview?path=${encodeURIComponent(path)}`

/**
 * Source for the live preview pane. Always routed through the preview endpoint, because the
 * pane exists to show work that is not on the public site yet.
 */
export const livePreviewUrl = ({
  data,
  collectionConfig,
  globalConfig,
}: {
  data: Doc
  collectionConfig?: { slug: string }
  globalConfig?: { slug: string }
}): string => {
  const slug = collectionConfig?.slug ?? globalConfig?.slug ?? ''
  const page = PAGE[slug]
  return previewUrl(page ? page(data) : '/')
}

/**
 * "View on site" button in the edit view.
 *
 * A published document opens the real page. An unpublished one goes through the preview
 * route, otherwise the button would 404 or show the older published version. Shares PAGE
 * with the live preview so the two can never disagree about where a document lives.
 */
export const viewOnSite =
  (collection: keyof typeof PAGE) =>
  (doc: Doc): string => {
    const path = PAGE[collection](doc)
    return doc?._status === 'published' ? path : previewUrl(path)
  }
