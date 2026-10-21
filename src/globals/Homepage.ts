import type { GlobalConfig } from 'payload'
import { isSignedIn } from '@/access'
import { sectionsField } from '@/blocks/config'
import { draftsWithAutosaveGlobal } from '@/hooks/preview'
import { revalidateGlobal } from '@/hooks/revalidate'

/** Editable parts of the homepage. Section structure stays in code; wording does not. */
export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    group: 'Settings',
    description: 'Opening statement and the figures in the band beneath it.',
    hideAPIURL: true,
  },
  access: { read: () => true, update: isSignedIn },
  versions: draftsWithAutosaveGlobal,
  hooks: { afterChange: [revalidateGlobal(['/'])] },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          admin: { description: 'Small line above the headline. Separate items with a slash.' },
        },
        {
          name: 'intro',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Paragraph under the tagline. The tagline itself is in Site settings.',
          },
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      maxRows: 4,
      admin: {
        description:
          'The four figures under the hero. Publish only numbers you can stand behind; owners and lenders check them.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', type: 'text', required: true, admin: { width: '25%' } },
            { name: 'label', type: 'text', required: true, admin: { width: '35%' } },
            { name: 'detail', type: 'text', required: true, admin: { width: '40%' } },
          ],
        },
      ],
    },
    sectionsField(
      'Extra sections added to the bottom of the homepage, above the closing band. Use sparingly.',
      'extraSections',
    ),
  ],
}
