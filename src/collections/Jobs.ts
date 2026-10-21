import type { CollectionConfig } from 'payload'
import { isSignedIn, publishedOrSignedIn } from '@/access'
import { slugField } from '@/fields/slug'
import { draftsWithAutosave, sweepAbandonedDrafts, viewOnSite } from '@/hooks/preview'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/revalidate'

const paths = () => ['/careers']

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job opening', plural: 'Careers' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'plant', 'location', 'type', '_status'],
    group: 'Content',
    description:
      'Open roles. With none published, the careers page invites open applications instead.',
    preview: viewOnSite('jobs'),
    hideAPIURL: true,
  },
  access: {
    read: publishedOrSignedIn,
    create: isSignedIn,
    update: isSignedIn,
    delete: isSignedIn,
  },
  versions: draftsWithAutosave,
  hooks: {
    beforeOperation: [sweepAbandonedDrafts('title')],
    afterChange: [revalidateAfterChange(paths)],
    afterDelete: [revalidateAfterDelete(paths)],
  },
  fields: [
    slugField('title'),
    { name: 'title', type: 'text', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'plant',
          type: 'text',
          required: true,
          defaultValue: 'Corporate',
          admin: { width: '34%', description: 'Plant name, or Corporate.' },
        },
        { name: 'location', type: 'text', required: true, admin: { width: '33%' } },
        {
          name: 'type',
          type: 'select',
          required: true,
          defaultValue: 'Full-time',
          admin: { width: '33%' },
          options: [
            { label: 'Full-time', value: 'Full-time' },
            { label: 'Part-time', value: 'Part-time' },
            { label: 'Seasonal', value: 'Seasonal' },
          ],
        },
      ],
    },
    { name: 'department', type: 'text', required: true },
    { name: 'summary', type: 'textarea', required: true },
    {
      name: 'responsibilities',
      type: 'array',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [{ name: 'item', type: 'text', required: true }],
    },
  ],
}
