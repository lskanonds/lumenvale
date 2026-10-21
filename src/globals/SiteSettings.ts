import type { GlobalConfig } from 'payload'
import { isSignedIn } from '@/access'
import { draftsWithAutosaveGlobal } from '@/hooks/preview'
import { revalidateGlobal } from '@/hooks/revalidate'

/** Company identity and contact routing. Appears in the header, footer and metadata. */
export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  label: 'Site settings',
  admin: {
    group: 'Settings',
    description: 'Company name, tagline, contact addresses and social links.',
    hideAPIURL: true,
  },
  access: { read: () => true, update: isSignedIn },
  versions: draftsWithAutosaveGlobal,
  hooks: { afterChange: [revalidateGlobal(['/'], 'layout')] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identity',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
                {
                  name: 'descriptor',
                  type: 'text',
                  required: true,
                  admin: { width: '50%', description: 'Line under the wordmark.' },
                },
              ],
            },
            { name: 'nameFull', type: 'text', label: 'Full name', required: true },
            { name: 'legalName', type: 'text', required: true },
            { name: 'tagline', type: 'text', required: true },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: { description: 'Used for search results, link previews and the footer.' },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: { description: 'Public address of the site, used for canonical links.' },
            },
            {
              name: 'footerNote',
              type: 'textarea',
              label: 'Footer note',
              admin: { description: 'Optional small print at the very bottom of every page.' },
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'email',
              type: 'group',
              label: 'Enquiry routing',
              fields: [
                { name: 'general', type: 'email', required: true },
                { name: 'owners', type: 'email', required: true, label: 'Asset owners' },
                {
                  name: 'investors',
                  type: 'email',
                  required: true,
                  label: 'Investors & acquisitions',
                },
              ],
            },
            {
              name: 'location',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'city', type: 'text', required: true, admin: { width: '40%' } },
                    { name: 'state', type: 'text', required: true, admin: { width: '35%' } },
                    {
                      name: 'stateCode',
                      type: 'text',
                      required: true,
                      admin: { width: '25%' },
                    },
                  ],
                },
                {
                  name: 'region',
                  type: 'text',
                  required: true,
                  admin: { description: 'The area served, as it reads after "Serving" in the footer.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Social',
          description: 'Empty fields are not rendered.',
          fields: [
            {
              name: 'social',
              type: 'group',
              label: false,
              fields: [
                { name: 'linkedin', type: 'text', label: 'LinkedIn' },
                { name: 'facebook', type: 'text' },
                { name: 'instagram', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
