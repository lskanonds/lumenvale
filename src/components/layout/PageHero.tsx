import type { ReactNode } from 'react'
import { BrandMark } from '@/components/brand/Brand'
import { Container, Eyebrow } from '@/components/ui'

/** Standard opening band for interior pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-primary-950 pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_25%_-10%,#1d5246_0%,#11332c_50%,#0a1f1b_100%)]" />
        <BrandMark
          variant="mono"
          className="absolute top-1/2 -right-[14%] h-[130%] -translate-y-1/2 text-white/[0.05]"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Eyebrow className="text-accent-300">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-light text-white text-balance lg:text-6xl">
            {title}
          </h1>
          {intro && <p className="mt-7 text-lg leading-relaxed text-cream/70">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}

/*
  Narrow reading measure for long-form pages such as policies and terms.

  Spacing targets descendants rather than direct children (and is reset on the first of
  each kind) because the rich-text renderer wraps the content in its own container, where
  `space-y` on this element would have no effect.
*/
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl text-[1.0625rem] leading-relaxed text-primary-900/85 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-primary-900 [&_h2:first-child]:mt-0 [&_li]:mb-2 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:mt-5 [&_p:first-child]:mt-0 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
      {children}
    </div>
  )
}
