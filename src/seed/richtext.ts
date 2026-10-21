import type { LongFormBlock } from '@/payload-types'

/*
  A small builder for the Lexical documents Payload stores in rich text fields, so the
  long-form pages in the seed read as text rather than hundreds of lines of node JSON.
*/

type LexicalNode = { type: string; version: number; [key: string]: unknown }
type Inline = string | LexicalNode

const text = (value: string): LexicalNode => ({
  type: 'text',
  text: value,
  format: 0,
  style: '',
  mode: 'normal',
  detail: 0,
  version: 1,
})

const inline = (parts: Inline[]) => parts.map((part) => (typeof part === 'string' ? text(part) : part))

const block = { direction: null, format: '', indent: 0 }

/** A link; mailto addresses are shown without the scheme. */
export const link = (url: string, label = url.replace(/^mailto:/, '')): LexicalNode => ({
  type: 'link',
  fields: { url, newTab: false, linkType: 'custom' },
  children: [text(label)],
  ...block,
  version: 3,
})

export const br = (): LexicalNode => ({ type: 'linebreak', version: 1 })

export const p = (...parts: Inline[]): LexicalNode => ({
  type: 'paragraph',
  children: inline(parts),
  ...block,
  textFormat: 0,
  textStyle: '',
  version: 1,
})

export const h2 = (value: string): LexicalNode => ({
  type: 'heading',
  tag: 'h2',
  children: [text(value)],
  ...block,
  version: 1,
})

export const ul = (...items: string[]): LexicalNode => ({
  type: 'list',
  listType: 'bullet',
  tag: 'ul',
  start: 1,
  children: items.map((item, index) => ({
    type: 'listitem',
    value: index + 1,
    children: [text(item)],
    ...block,
    version: 1,
  })),
  ...block,
  version: 1,
})

export const richText = (...children: LexicalNode[]): LongFormBlock['content'] => ({
  root: { type: 'root', children, direction: null, format: '', indent: 0, version: 1 },
})
