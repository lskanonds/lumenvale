import type { CollectionConfig } from 'payload'
import { isSignedIn, publishedOrSignedIn } from '@/access'
import { sectionsField } from '@/blocks/config'
import { slugField } from '@/fields/slug'
import { draftsWithAutosave, sweepAbandonedDrafts, viewOnSite } from '@/hooks/preview'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/revalidate'

const paths = (doc: Record<string, unknown>) => ['/', '/portfolio', `/portfolio/${doc.slug}`]

/**
 * Solar plants in the portfolio, each published as a case study.
 *
 * The tabs follow the order of the page: identity, performance, scope, then the plant
 * itself. Performance comes first because that is what owners and lenders read first.
 */
export const Plants: CollectionConfig = {
  slug: 'plants',
  labels: { singular: 'Plant', plural: 'Plants' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'region', 'capacity', 'operatingStatus', '_status'],
    group: 'Content',
    description: 'Each plant in the portfolio. Adding one here publishes a full case study.',
    preview: viewOnSite('plants'),
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
    beforeOperation: [sweepAbandonedDrafts('name')],
    afterChange: [revalidateAfterChange(paths)],
    afterDelete: [revalidateAfterDelete(paths)],
  },
  fields: [
    slugField('name'),
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Show this plant on the homepage.' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },

    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identity',
          fields: [
            { name: 'name', type: 'text', required: true },
            {
              type: 'row',
              fields: [
                {
                  name: 'technology',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Shown above the name on cards, e.g. "Single-axis trackers".',
                  },
                },
                {
                  name: 'offtake',
                  type: 'text',
                  admin: { width: '50%', description: 'Who buys the power, e.g. "15-year utility PPA".' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  // Not `status`: with drafts on, Payload owns `_status` and both names would
                  // map to the same Postgres enum. The label avoids a second "Status" column
                  // next to Draft/Published in the list view.
                  name: 'operatingStatus',
                  label: 'Plant status',
                  type: 'select',
                  required: true,
                  defaultValue: 'operating',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Operating', value: 'operating' },
                    { label: 'Being repowered', value: 'repowering' },
                    { label: 'Under construction', value: 'construction' },
                  ],
                },
                {
                  name: 'statusLabel',
                  type: 'text',
                  label: 'Status badge',
                  required: true,
                  admin: {
                    width: '50%',
                    description: 'Shown on cards, e.g. "Operating · Repowered 2025".',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                { name: 'region', type: 'text', required: true, admin: { width: '50%' } },
                {
                  name: 'commissionedYear',
                  type: 'number',
                  label: 'Commissioned',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'capacity',
                  type: 'number',
                  label: 'Capacity (MWp)',
                  required: true,
                  min: 0.1,
                  admin: { width: '50%', step: 0.1 },
                },
                {
                  name: 'storage',
                  type: 'text',
                  label: 'Battery storage',
                  admin: { width: '50%', description: 'Optional, e.g. "30 MW / 120 MWh".' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'interconnection',
                  type: 'text',
                  admin: { width: '60%', description: 'e.g. "70 kV line to the county substation".' },
                },
                {
                  name: 'role',
                  type: 'text',
                  label: 'Our role',
                  defaultValue: 'Asset management & O&M',
                  admin: { width: '40%', description: 'Shown in the case study header.' },
                },
              ],
            },
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'street', type: 'text', label: 'Site access', required: true },
                {
                  type: 'row',
                  fields: [
                    { name: 'city', type: 'text', required: true, admin: { width: '50%' } },
                    { name: 'state', type: 'text', required: true, admin: { width: '25%' } },
                    { name: 'zip', type: 'text', required: true, admin: { width: '25%' } },
                  ],
                },
                {
                  name: 'mapQuery',
                  type: 'text',
                  label: 'Map location',
                  admin: {
                    description:
                      'Leave empty and the map looks up the address above. Fill it in when the pin lands in the wrong place: a place name, or coordinates such as "35.2216, -119.0412".',
                  },
                },
              ],
            },
          ],
        },

        {
          label: 'Performance',
          description: 'The section owners and lenders read first.',
          fields: [
            {
              name: 'performance',
              type: 'group',
              label: false,
              fields: [
                { name: 'headline', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
                // Printed together as one line under the metrics. A figure without its period
                // and the size of the group it is compared with cannot be checked.
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'period',
                      type: 'text',
                      label: 'Figures to',
                      admin: { width: '35%', description: 'Latest month covered, e.g. June 2026.' },
                    },
                    {
                      name: 'source',
                      type: 'text',
                      admin: {
                        width: '35%',
                        description: 'Where the data comes from, e.g. revenue-grade meters.',
                      },
                    },
                    {
                      name: 'peerGroupSize',
                      type: 'number',
                      label: 'Plants in peer group',
                      min: 2,
                      admin: { width: '30%', description: 'Including this one.' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'rank',
                      type: 'text',
                      label: 'Peer-group position',
                      admin: { width: '30%', description: 'e.g. 1 of 9. Leave empty to hide.' },
                    },
                    {
                      name: 'rankCaption',
                      type: 'text',
                      admin: { width: '70%' },
                      defaultValue: 'Position within regional peer group',
                    },
                  ],
                },
                {
                  name: 'metrics',
                  type: 'array',
                  labels: { singular: 'Metric', plural: 'Metrics' },
                  admin: {
                    description:
                      'A metric with no value is not shown on the site, so figures can be added as they are verified.',
                  },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'label', type: 'text', required: true, admin: { width: '50%' } },
                        {
                          name: 'value',
                          type: 'text',
                          admin: { width: '25%', description: 'Empty hides this card.' },
                        },
                        {
                          name: 'trend',
                          type: 'select',
                          admin: { width: '25%' },
                          options: [
                            { label: 'None', value: 'none' },
                            { label: 'Up', value: 'up' },
                            { label: 'Down', value: 'down' },
                          ],
                          defaultValue: 'none',
                        },
                      ],
                    },
                    { name: 'caption', type: 'text' },
                  ],
                },
                /*
                  Monthly series behind the chart. Stored as data rather than an image so it
                  can be updated from each monthly report and printed as a table under the
                  chart. Peer plants stay anonymous; only this plant's index is published.
                */
                {
                  name: 'indexSeries',
                  type: 'array',
                  label: 'Yield index by month',
                  labels: { singular: 'Month', plural: 'Months' },
                  admin: {
                    description:
                      'From the monthly performance report. The chart is drawn once there are three months or more.',
                  },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'month',
                          type: 'text',
                          required: true,
                          admin: {
                            width: '50%',
                            description: 'As it should read on the axis, e.g. Jan 2026.',
                          },
                        },
                        {
                          name: 'yieldIndex',
                          type: 'number',
                          label: 'Yield index',
                          required: true,
                          admin: { width: '50%', description: '100 is parity with the peer group.' },
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'dataNote',
                  type: 'textarea',
                  label: 'Shown when no figures are published',
                  required: true,
                },
              ],
            },
          ],
        },

        {
          label: 'Management scope',
          fields: [
            { name: 'roleSummary', type: 'textarea', required: true },
            {
              name: 'scope',
              type: 'array',
              labels: { singular: 'Group', plural: 'Groups' },
              fields: [
                { name: 'group', type: 'text', required: true },
                {
                  name: 'items',
                  type: 'array',
                  fields: [{ name: 'item', type: 'text', required: true }],
                },
              ],
            },
          ],
        },

        {
          label: 'The plant',
          fields: [
            {
              name: 'description',
              type: 'array',
              labels: { singular: 'Paragraph', plural: 'Paragraphs' },
              fields: [{ name: 'paragraph', type: 'textarea', required: true }],
            },
            {
              name: 'highlights',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', required: true, admin: { width: '40%' } },
                    { name: 'value', type: 'text', required: true, admin: { width: '60%' } },
                  ],
                },
              ],
            },
            {
              name: 'systems',
              type: 'array',
              label: 'On-site systems',
              fields: [{ name: 'system', type: 'text', required: true }],
            },
          ],
        },

        {
          label: 'Photography',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Full-width image at the top. Falls back to the brand panel.' },
            },
            {
              name: 'gallery',
              type: 'array',
              admin: { description: 'The gallery section is hidden while this is empty.' },
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'caption', type: 'text' },
              ],
            },
          ],
        },

        {
          label: 'Extra sections',
          description: 'Anything this plant needs that the case study does not cover.',
          fields: [
            sectionsField(
              'These appear after the case study and before the closing call to action. The case study keeps its own order, performance first.',
              'extraSections',
            ),
          ],
        },

        {
          label: 'SEO',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: false,
              fields: [
                { name: 'title', type: 'text', admin: { description: 'Defaults to the name.' } },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
