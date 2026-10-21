import type { Access, FieldAccess } from 'payload'

/**
 * Access rules.
 *
 * Editors manage content. Admins additionally manage users and can delete records.
 * Anonymous visitors read published documents only. Drafts must never leak, since
 * this is how the public site queries content.
 */
type Role = 'admin' | 'editor'

const roleOf = (user: unknown): Role | undefined =>
  (user as { role?: Role } | null)?.role ?? undefined

export const isAdmin: Access = ({ req: { user } }) => roleOf(user) === 'admin'

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => roleOf(user) === 'admin'

export const isSignedIn: Access = ({ req: { user } }) => Boolean(user)

/** Signed-in users see everything; the public sees published documents only. */
export const publishedOrSignedIn: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}

/** Users may always read and edit their own record. */
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (roleOf(user) === 'admin') return true
  if (!user) return false
  return { id: { equals: user.id } }
}
