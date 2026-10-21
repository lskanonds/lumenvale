import type { Field } from 'payload'

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * URL slug, filled in automatically from another field but editable.
 *
 * Once a page is live its slug is a published address and changing it breaks inbound
 * links, so this only generates a slug when the field is empty.
 */
export const slugField = (from = 'name'): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'Web address for this page. Generated from the title; change with care.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === 'string' && value.length > 0) return slugify(value)
        const source = data?.[from]
        return typeof source === 'string' ? slugify(source) : value
      },
    ],
  },
})
