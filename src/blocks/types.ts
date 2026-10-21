import type {
  CardsBlock,
  ContactRoutesBlock,
  CtaBlock,
  DetailsBlock,
  FaqBlock,
  FiguresBlock,
  GalleryBlock,
  InquiryBlock,
  LongFormBlock,
  OwnerReportBlock,
  ProcessBlock,
  ProseBlock,
  QuoteBlock,
  TextImageBlock,
} from '@/payload-types'

/**
 * One section from the palette.
 *
 * Every block sets `interfaceName`, so Payload generates one shared interface per block
 * type instead of a private copy per parent. That lets the same union and the same
 * renderers serve pages, plants, services and the homepage.
 */
export type PageSection =
  | ProseBlock
  | TextImageBlock
  | CardsBlock
  | DetailsBlock
  | ProcessBlock
  | FiguresBlock
  | OwnerReportBlock
  | QuoteBlock
  | GalleryBlock
  | FaqBlock
  | CtaBlock
  | InquiryBlock
  | ContactRoutesBlock
  | LongFormBlock
