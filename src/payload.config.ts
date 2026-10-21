import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { livePreviewUrl } from './hooks/preview'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Plants } from './collections/Plants'
import { Services } from './collections/Services'
import { Team } from './collections/Team'
import { Jobs } from './collections/Jobs'
import { Enquiries } from './collections/Enquiries'
import { SiteSettings } from './globals/SiteSettings'
import { Homepage } from './globals/Homepage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/*
  Absolute address of this deployment.

  Payload builds password-reset links from it, and local media URLs too when the Blob
  adapter is off. Left unset, the reset link silently falls back to an empty origin.

  Set NEXT_PUBLIC_SITE_URL explicitly on the host. VERCEL_PROJECT_PRODUCTION_URL is only a
  fallback: it switches to the custom domain as soon as one is attached to the project,
  which can be well before that domain's DNS actually points at the deployment.
*/
const serverURL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

/*
  Outgoing mail: password resets and enquiry notifications.

  Without an adapter Payload logs the message and still reports success, which is right for
  local development (the reset link is printed in the terminal) and wrong anywhere else.
  Send from a subdomain with its own SPF and DKIM records so the main domain's mail setup
  is never touched.
*/
const email = process.env.RESEND_API_KEY
  ? resendAdapter({
      apiKey: process.env.RESEND_API_KEY,
      defaultFromAddress: process.env.EMAIL_FROM || 'no-reply@example.com',
      defaultFromName: process.env.EMAIL_FROM_NAME || 'Lumenvale',
    })
  : undefined

export default buildConfig({
  serverURL,
  email,
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    // Editors see their own company here, not the name of the CMS.
    components: {
      graphics: {
        Logo: '/components/admin/Graphics#AdminLogo',
        Icon: '/components/admin/Graphics#AdminIcon',
      },
      beforeLogin: ['/components/admin/Dashboard#BeforeLogin'],
      beforeDashboard: ['/components/admin/Dashboard#BeforeDashboard'],
      afterNavLinks: [
        // A link back to the public site from the admin menu.
        '/components/admin/Dashboard#ViewSiteLink',
        // Not a link: it renders the drag handle over the live preview seam. This slot is
        // mounted on every admin view, including the edit screen, which is why it lives here.
        '/components/admin/PreviewSplit#PreviewSplit',
      ],
    },
    /*
      Live preview: the real page in an iframe beside the form, re-rendered as the editor
      types. Breakpoints match the widths the layout is tested at.
    */
    livePreview: {
      url: livePreviewUrl,
      collections: ['pages', 'plants', 'services', 'team', 'jobs'],
      globals: ['homepage', 'siteSettings'],
      breakpoints: [
        { label: 'Phone', name: 'phone', width: 390, height: 844 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
    meta: {
      titleSuffix: '| Lumenvale',
      description: 'Content management for the Lumenvale website.',
      icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/brand/admin-icon.svg' }],
    },
  },
  collections: [Pages, Plants, Services, Team, Jobs, Enquiries, Media, Users],
  globals: [SiteSettings, Homepage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  upload: { limits: { fileSize: 15_000_000 } },
  sharp,
  plugins: [
    /*
      Uploads go to local disk in development and to Vercel Blob when deployed; serverless
      hosts do not keep files written to disk.

      Gated on VERCEL as well as the token: `vercel env pull` writes the token into
      .env.local, and without the second check a developer's test uploads would land in the
      production store.
    */
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN && process.env.VERCEL),
      token: process.env.BLOB_READ_WRITE_TOKEN,
      /*
        Serve media straight from the Blob host instead of proxying through
        /api/media/file/... The Media collection is public, so the access check would protect
        nothing, and the direct URL is already allowed in next.config `remotePatterns` and
        does not change when the domain does.
      */
      collections: { media: { disablePayloadAccessControl: true } },
    }),
  ],
})
