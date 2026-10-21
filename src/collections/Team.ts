import type { CollectionConfig } from 'payload'
import { isSignedIn, publishedOrSignedIn } from '@/access'
import { slugField } from '@/fields/slug'
import { draftsWithAutosave, sweepAbandonedDrafts, viewOnSite } from '@/hooks/preview'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/revalidate'

const paths = () => ['/leadership']

export const Team: CollectionConfig = {
  slug: 'team',
  labels: { singular: 'Team member', plural: 'Team' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'order', '_status'],
    group: 'Content',
    description:
      'Leadership profiles. The profile grid on the leadership page appears once there is at least one published entry.',
    preview: viewOnSite('team'),
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
    beforeOperation: [sweepAbandonedDrafts('name')],
    afterChange: [revalidateAfterChange(paths)],
    afterDelete: [revalidateAfterDelete(paths)],
  },
  fields: [
    slugField('name'),
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, admin: { width: '50%' } },
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: { width: '50%', description: 'Job title, e.g. Managing Partner.' },
        },
      ],
    },
    {
      name: 'bio',
      type: 'array',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      fields: [{ name: 'paragraph', type: 'textarea', required: true }],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', type: 'email', admin: { width: '50%' } },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL', admin: { width: '50%' } },
      ],
    },
    { name: 'photo', type: 'upload', relationTo: 'media' },
  ],
}
