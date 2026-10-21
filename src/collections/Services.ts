import type { CollectionConfig } from 'payload'
import { isSignedIn, publishedOrSignedIn } from '@/access'
import { sectionsField } from '@/blocks/config'
import { slugField } from '@/fields/slug'
import { draftsWithAutosave, sweepAbandonedDrafts, viewOnSite } from '@/hooks/preview'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/revalidate'

const paths = (doc: Record<string, unknown>) => [
  '/',
  '/about',
  '/services',
  `/services/${doc.slug}`,
]

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', '_status'],
    group: 'Content',
    description: 'The service lines. Each one gets its own page.',
    preview: viewOnSite('services'),
    hideAPIURL: true,
  },
  access: {
    read: publishedOrSignedIn,
    create: isSignedIn,
    update: isSignedIn,
    delete: isSignedIn,
  },
  versions: draftsWithAutosave,
  defaultSort: 'order',
  hooks: {
    beforeOperation: [sweepAbandonedDrafts('title')],
    afterChange: [revalidateAfterChange(paths)],
    afterDelete: [revalidateAfterDelete(paths)],
  },
  fields: [
    slugField('title'),
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
    { name: 'title', type: 'text', required: true },
    {
      name: 'blurb',
      type: 'textarea',
      required: true,
      admin: { description: 'One-liner used on the homepage and the services index.' },
    },
    {
      name: 'lead',
      type: 'textarea',
      required: true,
      admin: { description: 'Opening paragraph on the service page.' },
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    {
      name: 'covers',
      type: 'array',
      label: 'Scope',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'reporting',
      type: 'textarea',
      required: true,
      label: 'What ownership sees',
    },
    sectionsField(
      'Optional sections appended below the service description, before the list of other services.',
      'extraSections',
    ),
  ],
}
