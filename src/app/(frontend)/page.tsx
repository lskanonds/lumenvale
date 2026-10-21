import { Sections } from '@/blocks/Sections'
import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { Intro } from '@/components/home/Intro'
import { Services } from '@/components/home/Services'
import { PortfolioPreview } from '@/components/home/PortfolioPreview'
import { Markets } from '@/components/home/Markets'
import { CtaSplit } from '@/components/home/CtaSplit'
import { getHomepage } from '@/lib/cms'

export default async function HomePage() {
  const homepage = await getHomepage()

  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Services />
      <PortfolioPreview />
      <Markets />
      {/* Editor-added sections land above the closing band, so the page still ends on the
          call to action however many are added. */}
      <Sections blocks={homepage.extraSections} />
      <CtaSplit />
    </>
  )
}
