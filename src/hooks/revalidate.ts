import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
} from 'payload'

type Doc = Record<string, unknown>

/**
 * Whether this save is an autosave, and therefore invisible on the public site.
 *
 * Autosave writes a draft every few hundred milliseconds while someone types. Revalidating
 * on each would throw the page cache away several times a sentence for nothing.
 *
 * Detected from the request rather than from `_status`: an autosave and an unpublish both
 * end at `draft`, and treating an unpublish as an autosave would leave a withdrawn page
 * live. Only positively identified autosaves are skipped.
 */
const isAutosave = (req: PayloadRequest): boolean => {
  const flag = (req?.query as Record<string, unknown> | undefined)?.autosave
  return flag === true || flag === 'true'
}

/**
 * Revalidate without ever breaking the admin.
 *
 * Next refuses `revalidatePath` during a render, and with autosave on Payload creates the
 * empty draft for a new document while rendering the create screen. The hooks below skip
 * that case; this catch makes sure any other path into a render is logged, not fatal.
 */
const revalidate = (path: string, type?: 'page' | 'layout'): void => {
  try {
    if (type) revalidatePath(path, type)
    else revalidatePath(path)
  } catch (error) {
    console.error(`[revalidate] ${path} could not be revalidated`, error)
  }
}

/**
 * Push published edits to the live site without a rebuild.
 *
 * Pages are statically rendered, so an edit shows up once its paths are revalidated. Both
 * the document's own page and the indexes listing it are cleared, and the previous paths
 * too, so a renamed plant disappears from its old address.
 *
 * Pass 'layout' when the document can change something rendered on every route, such as a
 * CMS page adding itself to the header.
 */
export const revalidateAfterChange =
  (paths: (doc: Doc) => string[], type?: 'page' | 'layout'): CollectionAfterChangeHook =>
  ({ doc, previousDoc, operation, req }) => {
    if (req.context?.skipRevalidate) return doc
    if (isAutosave(req)) return doc
    // A new, unpublished document is not on the site yet. This is also the empty draft
    // created while the "new document" screen renders, where revalidating would throw.
    if (operation === 'create' && (doc as Doc)?._status !== 'published') return doc

    const targets = new Set([
      ...paths(doc as Doc),
      ...(previousDoc ? paths(previousDoc as Doc) : []),
    ])
    targets.forEach((path) => revalidate(path, type))

    return doc
  }

export const revalidateAfterDelete =
  (paths: (doc: Doc) => string[], type?: 'page' | 'layout'): CollectionAfterDeleteHook =>
  ({ doc, req }) => {
    if (req.context?.skipRevalidate) return doc
    paths(doc as Doc).forEach((path) => revalidate(path, type))
    return doc
  }

/**
 * Globals, revalidated by path. Use 'layout' for anything rendered on every page: site
 * settings reach the header and footer, so clearing only the homepage would leave a renamed
 * company everywhere else until the next build.
 */
export const revalidateGlobal =
  (paths: string[], type: 'page' | 'layout' = 'page'): GlobalAfterChangeHook =>
  ({ doc, req }) => {
    if (req.context?.skipRevalidate) return doc
    if (isAutosave(req)) return doc
    paths.forEach((path) => revalidate(path, type))
    return doc
  }
