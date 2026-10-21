import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  CaseStudyHero,
  LocationAndGrid,
  ManagementScope,
  OwnerCta,
  PerformanceSection,
  PlantGallery,
  PlantOverview,
} from '@/components/plant/CaseStudy'
import { Sections } from '@/blocks/Sections'
import { getPlant, getPlants } from '@/lib/cms'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const plants = await getPlants()
  return plants.map((plant) => ({ slug: plant.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const plant = await getPlant(slug)
  if (!plant) return {}
  return { title: plant.seo.title, description: plant.seo.description }
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params
  const plant = await getPlant(slug)
  if (!plant) notFound()

  return (
    <>
      <CaseStudyHero plant={plant} />
      {/* Performance comes before the description: the audience is owners and lenders. */}
      <PerformanceSection plant={plant} />
      <ManagementScope plant={plant} />
      <PlantOverview plant={plant} />
      <PlantGallery plant={plant} />
      <LocationAndGrid plant={plant} />
      {/* Sections an editor added for this plant, before the closing call to action. */}
      <Sections blocks={plant.extraSections} />
      <OwnerCta />
    </>
  )
}
