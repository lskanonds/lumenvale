import type { CollectionConfig } from 'payload'
import { isSignedIn } from '@/access'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
    group: 'Media',
    description:
      'Photographs, uploaded once and used anywhere. Upload the largest version you have: every size the site needs is cut from it here, and an image cannot be made sharper later than it arrived.',
    hideAPIURL: true,
  },
  access: {
    read: () => true,
    create: isSignedIn,
    update: isSignedIn,
    delete: isSignedIn,
  },
  upload: {
    mimeTypes: ['image/*'],
    // Focal point keeps the subject in frame when a wide hero is cropped to a card.
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 480, height: 320, position: 'centre' },
      { name: 'card', width: 900, height: 600, position: 'centre' },
      { name: 'wide', width: 1600, position: 'centre' },
      { name: 'hero', width: 2400, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description:
          'Describe what the image shows, for screen readers and for search. Leave a decorative image described as such.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: { description: 'Optional line printed under the image in galleries.' },
    },
    {
      name: 'credit',
      type: 'text',
      admin: { description: 'Photographer or licence holder, where attribution is required.' },
    },
  ],
}
