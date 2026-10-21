import { BrandMark } from '@/components/brand/Brand'
import { Button, Container } from '@/components/ui'
import { getHomepage, getSiteSettings } from '@/lib/cms'

// TODO: swap for full-bleed photography once there is some. Keep the dark scrim: the
// transparent header and the hero copy rely on it for contrast.
function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-primary-950">
      <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_22%_-10%,#1d5246_0%,#11332c_45%,#0a1f1b_100%)]" />
      {/* Low sun in the top right corner. */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_88%_8%,rgba(224,169,47,0.16)_0%,transparent_70%)]" />

      {/* Oversized mark as a watermark, bled off the right edge. */}
      <BrandMark
        variant="mono"
        className="absolute top-1/2 -right-[18%] h-[150%] -translate-y-1/2 text-white/[0.05] sm:-right-[10%] sm:h-[135%]"
      />

      {/* Fine vertical rules, like rows of panels seen from above. */}
      <div className="absolute inset-0 bg-[length:7.5rem_100%] bg-[linear-gradient(to_right,rgba(224,169,47,0.07)_1px,transparent_1px)]" />

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-primary-950 via-primary-950/70 to-transparent" />
    </div>
  )
}

export async function Hero() {
  const [site, homepage] = await Promise.all([getSiteSettings(), getHomepage()])

  return (
    <section className="relative flex min-h-[42rem] items-end overflow-hidden lg:min-h-screen">
      <HeroBackdrop />

      <Container className="relative z-10 pt-36 pb-20 lg:pb-28">
        <div className="max-w-4xl">
          {/* Editors type the eyebrow as one line; slashes become separators. */}
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-accent-300">
            <span aria-hidden="true" className="rule-accent h-px w-10" />
            {homepage.hero.eyebrow
              .split('/')
              .map((part) => part.trim())
              .filter(Boolean)
              .flatMap((part, index) => [
                index > 0 ? (
                  <span key={`sep-${part}`} aria-hidden="true" className="text-accent-400/50">
                    /
                  </span>
                ) : null,
                <span key={part}>{part}</span>,
              ])}
          </p>

          <h1 className="mt-8">
            <span className="block font-display text-6xl leading-[0.95] font-light text-white text-balance sm:text-7xl lg:text-[5.75rem]">
              {site.tagline}
            </span>
            <span className="mt-8 block max-w-2xl text-lg leading-relaxed font-normal text-cream/70 lg:text-xl">
              {homepage.hero.intro}
            </span>
          </h1>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Button href="/owners" variant="ghost-light">
              Request a Proposal
            </Button>
            <Button href="/portfolio" variant="ghost-light" className="border-white/20">
              See the Performance
            </Button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 z-10 hidden justify-center lg:flex"
      >
        <span className="h-14 w-px bg-gradient-to-b from-transparent via-accent-400/60 to-transparent" />
      </div>
    </section>
  )
}
