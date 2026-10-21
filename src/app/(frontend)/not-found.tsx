import type { Metadata } from 'next'
import { BrandMark } from '@/components/brand/Brand'
import { Button, Container, Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-primary-950 pt-44 pb-28 lg:pt-52 lg:pb-36">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_25%_-10%,#1d5246_0%,#11332c_50%,#0a1f1b_100%)]" />
        <BrandMark
          variant="mono"
          className="absolute top-1/2 -right-[14%] h-[130%] -translate-y-1/2 text-white/[0.05]"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <Eyebrow className="text-accent-300">Error 404</Eyebrow>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-light text-white lg:text-6xl">
            We can&rsquo;t find that page.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-cream/70">
            The link may be out of date, or the page may have moved. Head back to the homepage or
            get in touch and we will point you in the right direction.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/" variant="ghost-light">
              Back to Home
            </Button>
            <Button href="/contact" variant="ghost-light" className="border-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
