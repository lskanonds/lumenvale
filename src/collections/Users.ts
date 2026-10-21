import type { CollectionBeforeChangeHook, CollectionConfig, PayloadRequest } from 'payload'
import { isAdmin, isAdminFieldLevel, isAdminOrSelf } from '@/access'

/**
 * The first account in an empty database is always an administrator.
 *
 * The "create first user" screen honours the field default, which is Editor, and an
 * editor cannot manage users or change roles. Accepting the pre-filled form would lock the
 * only account out of user management, with the database as the only way back. After the
 * first account the default applies as normal.
 */
const firstUserIsAdmin: CollectionBeforeChangeHook = async ({ data, operation, req }) => {
  if (operation !== 'create') return data

  const { totalDocs } = await req.payload.count({ collection: 'users', req, overrideAccess: true })
  if (totalDocs > 0) return data

  return { ...data, role: 'admin' }
}

/** The company name from Site settings, so the reset email never names the CMS instead. */
const siteName = async (req?: PayloadRequest): Promise<string> => {
  if (!req) return 'website'
  try {
    const settings = await req.payload.findGlobal({ slug: 'siteSettings', req, overrideAccess: true })
    return settings.name || 'website'
  } catch {
    return 'website'
  }
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // A week rather than Payload's two hours. People open this admin to make one change,
    // and being signed out on almost every visit pushes them towards weaker passwords.
    tokenExpiration: 60 * 60 * 24 * 7,
    forgotPassword: {
      generateEmailSubject: async ({ req } = {}) =>
        `Reset your ${await siteName(req)} admin password`,
      // The link is built from the configured serverURL, so there is a single definition
      // of where this deployment lives.
      generateEmailHTML: async ({ req, token } = {}) => {
        const base = req?.payload.config.serverURL ?? ''
        const url = `${base}/admin/reset/${token}`
        const name = await siteName(req)

        return `
          <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#0e2a25;max-width:34em">
            <p>Someone asked to reset your password for the ${name} admin.</p>
            <p><a href="${url}" style="display:inline-block;padding:12px 22px;background:#133830;color:#faf8f3;text-decoration:none">Choose a new password</a></p>
            <p style="color:#56625e;font-size:13px">Or paste this into your browser:<br><a href="${url}" style="color:#56625e">${url}</a></p>
            <p style="color:#56625e;font-size:13px">The link works once and expires in an hour. If this was not you, nothing has changed and you can ignore this message.</p>
          </div>
        `
      },
    },
  },
  hooks: { beforeChange: [firstUserIsAdmin] },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Administration',
    description:
      'Who can sign in here. Everyone with an account can edit every part of the site; administrators can also add and remove people.',
    hideAPIURL: true,
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text' },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      // Only an admin can hand out admin, otherwise an editor could promote themselves.
      access: { create: isAdminFieldLevel, update: isAdminFieldLevel },
      options: [
        { label: 'Administrator (full access, manages users)', value: 'admin' },
        { label: 'Editor (manages content)', value: 'editor' },
      ],
    },
  ],
}
