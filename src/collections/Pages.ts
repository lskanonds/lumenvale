import type { CollectionConfig } from 'payload'
import { isSignedIn, publishedOrSignedIn } from '@/access'
import { sectionsField } from '@/blocks/config'
import { slugField } from '@/fields/slug'
import { draftsWithAutosave, sweepAbandonedDrafts, viewOnSite } from '@/hooks/preview'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/revalidate'

/*
  Pages editors build themselves from the section palette.

  Everything else in the CMS fills in a page that was designed in code. Here the editor
  picks the sections, their order and their backgrounds, so a new kind of page does not
  need a developer.

  The coded routes (/about, /services, /portfolio...) always win: Next matches a static
  segment before a dynamic one, so a page here that reuses one of those slugs is never
  reached. The slug field warns about this rather than trying to police it.
*/

// Revalidating the root as a layout clears every route, which is what a page joining or
// leaving the header navigation affects. The page's own path is covered by the same call.
const paths = () => ['/']

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'showInNav', '_status'],
    group: 'Pages',
    description:
      'Pages you build yourself from sections. Add sections in any order and give each one a background.',
    preview: viewOnSite('pages'),
    hideAPIURL: true,
  },
  access: {
    read: publishedOrSignedIn,
    create: isSignedIn,
    update: isSignedIn,
    delete: isSignedIn,
  },
  versions: draftsWithAutosave,
  defaultSort: 'navOrder',
  hooks: {
    beforeOperation: [sweepAbandonedDrafts('title')],
    afterChange: [revalidateAfterChange(paths, 'layout')],
    afterDelete: [revalidateAfterDelete(paths, 'layout')],
  },
  fields: [
    slugField('title'),
    {
      name: 'showInNav',
      type: 'checkbox',
      label: 'Show in the main menu',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Unticked, the page still works; it is simply not linked from the header.',
        components: { Cell: '/components/admin/Cells#InNavCell' },
      },
    },
    {
      // Titles are sentences ("Talk to the people who run the plants.") and menu links are
      // words. Without this the header would print the whole title.
      name: 'navLabel',
      type: 'text',
      label: 'Menu label',
      admin: {
        position: 'sidebar',
        description: 'One or two words. Left empty, the header shows the title instead.',
        condition: (data) => Boolean(data?.showInNav),
      },
    },
    {
      name: 'navOrder',
      type: 'number',
      label: 'Menu position',
      defaultValue: 100,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers sit further left. The built-in links occupy 10 to 60.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Opening',
          description: 'The dark band at the top of the page.',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Lead-in line',
              required: true,
              defaultValue: 'Lumenvale',
              admin: { description: 'Small line above the title.' },
            },
            {
              name: 'intro',
              type: 'textarea',
              admin: { description: 'One paragraph under the title. Optional.' },
            },
          ],
        },
        {
          label: 'Sections',
          description: 'The body of the page. Add, reorder and remove sections freely.',
          fields: [sectionsField('This page is made of these sections and nothing else.')],
        },
        {
          label: 'SEO',
          description: 'How this page appears in search results and link previews.',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: false,
              fields: [
                { name: 'title', type: 'text', admin: { description: 'Defaults to the title.' } },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
