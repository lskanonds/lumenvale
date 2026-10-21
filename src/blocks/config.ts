import type { Block, Field } from 'payload'
import { surfaceField } from '@/lib/surfaces'

/*
  The section palette.

  Everything an editor can put on a page is one of these blocks. Editors choose which
  blocks to use, in what order and on which background; the layout of each block stays in
  code. That keeps any page assembled in the admin consistent with the rest of the site.

  Field names are shared across blocks (`eyebrow`, `heading`, `items`) so the renderers
  stay predictable and a new block is cheap to add.
*/

/*
  The palette is sorted onto three shelves, and each block shows a small wireframe in the
  "add section" menu (public/blocks/*.svg). Wireframes rather than screenshots, so they
  describe the shape of a section without going stale. Payload draws them at 3:2.
*/
const WORDS = 'Text and pictures'
const PROOF = 'Panels and proof'
const CONTACT = 'Getting in touch'

const shelf = (group: string, file: string, alt: string): Block['admin'] => ({
  group,
  images: { thumbnail: { url: `/blocks/${file}.svg`, alt } },
})

// "Eyebrow" is design-system jargon, so the admin label says what it actually is.
const eyebrow: Field = {
  name: 'eyebrow',
  type: 'text',
  label: 'Lead-in line',
  admin: { description: 'Small line above the heading. Optional.' },
}

const heading: Field = { name: 'heading', type: 'text' }

const paragraphs: Field = {
  name: 'paragraphs',
  type: 'array',
  labels: { singular: 'Paragraph', plural: 'Paragraphs' },
  fields: [{ name: 'text', type: 'textarea', required: true }],
}

/** A link the editor can point anywhere on the site, or at an external address. */
const link = (name: string, label: string, required = false): Field => ({
  name,
  type: 'group',
  label,
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'label', type: 'text', label: 'Button text', required, admin: { width: '50%' } },
        {
          name: 'href',
          type: 'text',
          label: 'Where it goes',
          required,
          admin: {
            width: '50%',
            description: 'A path on this site such as /portfolio, or a full https:// address.',
          },
        },
      ],
    },
  ],
})

export const ProseBlock: Block = {
  slug: 'prose',
  labels: { singular: 'Text', plural: 'Text' },
  interfaceName: 'ProseBlock',
  admin: shelf(WORDS, 'prose', 'A heading with paragraphs of text beneath it'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    paragraphs,
    {
      name: 'align',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Centred', value: 'center' },
      ],
    },
    link('cta', 'Button (optional)'),
  ],
}

export const TextImageBlock: Block = {
  slug: 'textImage',
  labels: { singular: 'Text with image', plural: 'Text with image' },
  interfaceName: 'TextImageBlock',
  admin: shelf(WORDS, 'text-image', 'Text on one side, a photograph on the other'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    paragraphs,
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'imageSide',
      type: 'select',
      defaultValue: 'right',
      admin: { description: 'Which side the photograph sits on, on a wide screen.' },
      options: [
        { label: 'Image right', value: 'right' },
        { label: 'Image left', value: 'left' },
      ],
    },
    link('cta', 'Button (optional)'),
  ],
}

export const FiguresBlock: Block = {
  slug: 'figures',
  labels: { singular: 'Figures', plural: 'Figures' },
  interfaceName: 'FiguresBlock',
  admin: shelf(PROOF, 'figures', 'A row of large numbers with a label under each'),
  fields: [
    surfaceField('primaryDeep'),
    eyebrow,
    heading,
    {
      name: 'items',
      type: 'array',
      label: 'Figures',
      minRows: 1,
      maxRows: 4,
      labels: { singular: 'Figure', plural: 'Figures' },
      admin: {
        description: 'Publish only numbers you can stand behind; owners and lenders check them.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', type: 'text', required: true, admin: { width: '25%' } },
            { name: 'label', type: 'text', required: true, admin: { width: '35%' } },
            { name: 'detail', type: 'text', admin: { width: '40%' } },
          ],
        },
      ],
    },
  ],
}

export const CardsBlock: Block = {
  slug: 'cards',
  labels: { singular: 'Cards', plural: 'Cards' },
  interfaceName: 'CardsBlock',
  admin: shelf(PROOF, 'cards', 'A grid of boxes, each with a title and a paragraph'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      admin: { description: 'Cards always stack to one column on a phone.' },
      options: [
        { label: 'Two across', value: '2' },
        { label: 'Three across', value: '3' },
        { label: 'Four across', value: '4' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      labels: { singular: 'Card', plural: 'Cards' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
  ],
}

/**
 * Short labels with a fact against each: acquisition criteria, plant specifications, terms.
 *
 * The inverse of Cards. Cards lead with a title and explain it underneath; this leads with
 * a quiet label and sets the answer large, the same pattern as the highlights on a plant
 * page.
 */
export const DetailsBlock: Block = {
  slug: 'details',
  labels: { singular: 'Details', plural: 'Details' },
  interfaceName: 'DetailsBlock',
  admin: shelf(PROOF, 'details', 'A grid of short labels, each with a fact set below it'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      admin: { description: 'Always two on a tablet and one on a phone.' },
      options: [
        { label: 'Two across', value: '2' },
        { label: 'Three across', value: '3' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Details',
      minRows: 1,
      labels: { singular: 'Detail', plural: 'Details' },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: { width: '35%', description: 'The quiet line, e.g. "Geography".' },
            },
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { width: '65%', description: 'The answer, set large.' },
            },
          ],
        },
      ],
    },
  ],
}

/**
 * An ordered sequence with a marker against each step.
 *
 * Cards are a set: reordering them changes nothing. This is a sequence, and the marker
 * names each step's place in it, either a cadence ("Daily", "Monthly") or a phase
 * ("First 30 days"). It is built for things like how a plant is run through the year and
 * how a takeover is handled.
 */
export const ProcessBlock: Block = {
  slug: 'process',
  labels: { singular: 'Process', plural: 'Processes' },
  interfaceName: 'ProcessBlock',
  admin: shelf(PROOF, 'process', 'A row of numbered steps joined by a line, in order'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 2,
      maxRows: 6,
      labels: { singular: 'Step', plural: 'Steps' },
      admin: {
        description:
          'Shown in this order, left to right on a wide screen and top to bottom on a phone.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'marker',
              type: 'text',
              required: true,
              admin: {
                width: '35%',
                description: 'Where this step sits, e.g. "Daily" or "First 30 days".',
              },
            },
            { name: 'title', type: 'text', required: true, admin: { width: '65%' } },
          ],
        },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    {
      name: 'footnote',
      type: 'text',
      admin: { description: 'Optional line under the steps, e.g. who receives the reporting.' },
    },
  ],
}

/**
 * A worked example of the monthly report an owner receives.
 *
 * Unlike Figures, which states results, this shows the shape of a document so an owner can
 * see what will arrive every month. The renderer stamps it as an example and prints the
 * disclaimer itself, so no combination of field values can make it read as a live report.
 */
export const OwnerReportBlock: Block = {
  slug: 'ownerReport',
  labels: { singular: 'Owner report example', plural: 'Owner report examples' },
  interfaceName: 'OwnerReportBlock',
  admin: shelf(PROOF, 'owner-report', 'A sample report card with figures and action items'),
  fields: [
    surfaceField('sand'),
    eyebrow,
    heading,
    { name: 'intro', type: 'textarea' },
    {
      name: 'reportPeriod',
      type: 'text',
      label: 'Period shown',
      admin: { description: 'Printed in the report header, e.g. June 2026.' },
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Figures',
      minRows: 1,
      maxRows: 8,
      labels: { singular: 'Figure', plural: 'Figures' },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', required: true, admin: { width: '45%' } },
            { name: 'value', type: 'text', required: true, admin: { width: '25%' } },
            { name: 'note', type: 'text', admin: { width: '30%' } },
          ],
        },
      ],
    },
    {
      name: 'actions',
      type: 'array',
      label: 'Action items',
      labels: { singular: 'Action', plural: 'Actions' },
      admin: {
        description:
          'What the report commits to doing next. Shown under an "example" heading, never as real commitments.',
      },
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      name: 'covers',
      type: 'textarea',
      label: 'What the full report also covers',
      admin: {
        description:
          'One line naming the sections not shown, so it is clear the example is an extract.',
      },
    },
  ],
}

export const QuoteBlock: Block = {
  slug: 'quote',
  labels: { singular: 'Quote', plural: 'Quotes' },
  interfaceName: 'QuoteBlock',
  admin: shelf(PROOF, 'quote', 'A single quotation, centred, with who said it'),
  fields: [
    surfaceField('primary'),
    { name: 'quote', type: 'textarea', required: true },
    {
      type: 'row',
      fields: [
        { name: 'attribution', type: 'text', admin: { width: '50%' } },
        {
          name: 'role',
          type: 'text',
          admin: { width: '50%', description: 'Title and company, e.g. "Asset manager, plant owner".' },
        },
      ],
    },
  ],
}

export const GalleryBlock: Block = {
  slug: 'gallery',
  labels: { singular: 'Gallery', plural: 'Galleries' },
  interfaceName: 'GalleryBlock',
  admin: shelf(WORDS, 'gallery', 'A grid of photographs, each able to carry a caption'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Image', plural: 'Images' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
  ],
}

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  interfaceName: 'CtaBlock',
  admin: shelf(CONTACT, 'cta', 'A centred heading with one or two buttons under it'),
  fields: [
    surfaceField('primary'),
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    link('primary', 'Primary button', true),
    link('secondary', 'Second button (optional)'),
  ],
}

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'Questions and answers', plural: 'Questions and answers' },
  interfaceName: 'FaqBlock',
  admin: shelf(PROOF, 'faq', 'A list of questions that open to reveal their answers'),
  fields: [
    surfaceField(),
    eyebrow,
    heading,
    {
      name: 'items',
      type: 'array',
      label: 'Questions',
      minRows: 1,
      labels: { singular: 'Question', plural: 'Questions' },
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}

/*
  The three blocks below carry the contact and legal pages: the enquiry panel, the contact
  routes and long-form text. They are narrower in purpose than the rest of the palette.
*/

/** Which address in Site settings a form or mailto uses, so the two never drift apart. */
const emailRoute: Field = {
  name: 'emailRoute',
  type: 'select',
  required: true,
  defaultValue: 'general',
  admin: { description: 'Taken from Site settings, so changing it there updates this too.' },
  options: [
    { label: 'General enquiries', value: 'general' },
    { label: 'Asset owners', value: 'owners' },
    { label: 'Investors & acquisitions', value: 'investors' },
  ],
}

export const InquiryBlock: Block = {
  slug: 'inquiry',
  labels: { singular: 'Enquiry panel', plural: 'Enquiry panels' },
  interfaceName: 'InquiryBlock',
  admin: shelf(CONTACT, 'inquiry', 'A form beside a numbered "what happens next"'),
  fields: [
    surfaceField('sand'),
    { name: 'eyebrow', type: 'text', label: 'Lead-in line', required: true },
    emailRoute,
    {
      name: 'mode',
      type: 'select',
      label: 'How people get in touch',
      required: true,
      defaultValue: 'form',
      admin: {
        description:
          'A form works in any browser and its answers are kept under Enquiries. An email button depends on the visitor having a mail app set up, and leaves no record here.',
      },
      options: [
        { label: 'A form on the page', value: 'form' },
        { label: 'An email button', value: 'email' },
      ],
    },
    {
      type: 'row',
      admin: { condition: (_, siblingData) => siblingData?.mode === 'email' },
      fields: [
        { name: 'subject', type: 'text', admin: { width: '50%' } },
        {
          name: 'cta',
          type: 'text',
          label: 'Button label',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'allowAttachments',
      type: 'checkbox',
      label: 'Let people attach documents',
      defaultValue: false,
      admin: {
        condition: (_, siblingData) => siblingData?.mode === 'form',
        description:
          'Useful on the owner form, where a monitoring export or an O&M report says more than a paragraph. Files are emailed to the address above and never stored on the site, so leave this off wherever it is not needed.',
      },
    },
    {
      name: 'steps',
      type: 'array',
      label: 'What happens next',
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
    {
      name: 'note',
      type: 'textarea',
      admin: { description: 'Small print inside the card, under the form.' },
    },
    {
      name: 'footnote',
      type: 'group',
      label: 'Small print below',
      admin: {
        description:
          'Optional. Sits under the whole panel, above a dividing rule: the place for a disclaimer that belongs to the page rather than the form.',
      },
      fields: [
        { name: 'eyebrow', type: 'text', label: 'Lead-in line' },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}

export const ContactRoutesBlock: Block = {
  slug: 'contactRoutes',
  labels: { singular: 'Contact routes', plural: 'Contact routes' },
  interfaceName: 'ContactRoutesBlock',
  admin: shelf(CONTACT, 'contact-routes', 'Columns of email addresses, one per kind of enquiry'),
  fields: [
    surfaceField(),
    {
      name: 'items',
      type: 'array',
      label: 'Routes',
      minRows: 1,
      labels: { singular: 'Route', plural: 'Routes' },
      fields: [
        { name: 'eyebrow', type: 'text', label: 'Lead-in line', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
        { type: 'row', fields: [emailRoute, { name: 'subject', type: 'text', required: true }] },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Notes below',
      maxRows: 2,
      labels: { singular: 'Column', plural: 'Columns' },
      admin: {
        description:
          'Optional. Sits under the routes, above a dividing rule, e.g. the office address and a note for the press.',
      },
      fields: [
        { name: 'eyebrow', type: 'text', label: 'Lead-in line', required: true },
        {
          name: 'lead',
          type: 'textarea',
          admin: { description: 'Optional opening line, set larger in the display face.' },
        },
        { name: 'body', type: 'textarea', required: true },
      ],
    },
  ],
}

export const LongFormBlock: Block = {
  slug: 'longForm',
  labels: { singular: 'Long-form text', plural: 'Long-form text' },
  interfaceName: 'LongFormBlock',
  admin: shelf(WORDS, 'long-form', 'A narrow column of headings, paragraphs and lists'),
  fields: [
    surfaceField(),
    {
      name: 'meta',
      type: 'text',
      admin: { description: 'Small grey line above the text, e.g. "Last updated: August 2026".' },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      admin: {
        description:
          'Headings, paragraphs and lists, set at a narrow reading width. This is the block for policies and terms.',
      },
    },
  ],
}

/**
 * Every block, in the order they appear in the "add section" menu. Payload starts a new
 * group where it first meets one, so blocks are listed shelf by shelf.
 */
export const pageBlocks: Block[] = [
  ProseBlock,
  TextImageBlock,
  GalleryBlock,
  LongFormBlock,
  CardsBlock,
  DetailsBlock,
  ProcessBlock,
  FiguresBlock,
  OwnerReportBlock,
  QuoteBlock,
  FaqBlock,
  CtaBlock,
  InquiryBlock,
  ContactRoutesBlock,
]

/**
 * The palette as a single field, ready to drop into any collection or global, so a block
 * added here is available everywhere at once.
 */
export const sectionsField = (description: string, name = 'sections'): Field => ({
  name,
  type: 'blocks',
  label: false,
  labels: { singular: 'Section', plural: 'Sections' },
  blocks: pageBlocks,
  admin: { description },
})
