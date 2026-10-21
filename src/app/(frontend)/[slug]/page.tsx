import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Sections } from '@/blocks/Sections'
import { PageHero } from '@/components/layout/PageHero'
import { getPage, getPages } from '@/lib/cms'

/*
  Pages built in the CMS.

  The least specific single-segment route, so every coded page (/about, /services...)
  still wins: Next matches static segments before dynamic ones.

  `dynamicParams` stays at its default of true, so pages published after the last build
  render on first request instead of returning 404 until the next deploy.
*/

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const pages = await getPages()
  return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.intro || undefined,
  }
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro ?? undefined} />
      <Sections blocks={page.sections} />
    </>
  )
}
