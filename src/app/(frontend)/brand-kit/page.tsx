import { notFound } from 'next/navigation'
import { BrandMark, Emblem, Logo } from '@/components/brand/Brand'
import { Container } from '@/components/ui'
import { getSiteSettings } from '@/lib/cms'

const MARK_SIZES = [16, 24, 32, 44, 64, 96]

const SWATCHES = [
  ['primary-950', 'bg-primary-950'],
  ['primary-900', 'bg-primary-900'],
  ['primary-800', 'bg-primary-800'],
  ['primary-600', 'bg-primary-600'],
  ['accent-600', 'bg-accent-600'],
  ['accent-500', 'bg-accent-500'],
  ['accent-400', 'bg-accent-400'],
  ['accent-200', 'bg-accent-200'],
  ['accent-50', 'bg-accent-50'],
  ['sand', 'bg-sand'],
  ['cream', 'bg-cream'],
  ['ink', 'bg-ink'],
]

const TYPE_SCALE = [
  { label: 'Display / hero', className: 'font-display text-6xl leading-[0.95] font-light' },
  { label: 'Display / section', className: 'font-display text-4xl leading-[1.1] font-light' },
  { label: 'Display / card', className: 'font-display text-2xl leading-snug font-normal' },
  { label: 'Body / lead', className: 'text-lg leading-relaxed' },
  { label: 'Body', className: 'text-[0.9375rem] leading-relaxed' },
]

/**
 * Internal brand sheet: every logo variant at the sizes it is actually used, the palette
 * and the type scale, so regressions are visible at a glance. Development only.
 */
export default async function BrandKitPage() {
  if (process.env.NODE_ENV === 'production') notFound()

  const site = await getSiteSettings()
  const wordmark = { name: site.name, descriptor: site.descriptor }

  return (
    <div className="pt-28 pb-24">
      <Container>
        <h1 className="font-display text-5xl font-light text-primary-900">Brand kit</h1>

        <section className="mt-14">
          <h2 className="eyebrow">Mark on light</h2>
          <div className="mt-6 flex flex-wrap items-end gap-10 border border-stone bg-cream p-10">
            {MARK_SIZES.map((size) => (
              <div key={size} className="text-center">
                <BrandMark style={{ width: size, height: size }} />
                <p className="mt-3 text-xs text-slate-muted">{size}px</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="eyebrow">Mark on dark, reverse</h2>
            <div className="mt-6 flex flex-wrap items-end gap-8 border border-stone bg-primary-900 p-10">
              {MARK_SIZES.map((size) => (
                <BrandMark key={size} variant="reverse" style={{ width: size, height: size }} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="eyebrow">Mark, mono</h2>
            <div className="mt-6 flex flex-wrap items-end gap-8 border border-stone bg-primary-900 p-10 text-cream">
              {MARK_SIZES.map((size) => (
                <BrandMark key={size} variant="mono" style={{ width: size, height: size }} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {(['color', 'reverse', 'mono'] as const).map((variant) => (
            <div key={variant}>
              <h2 className="eyebrow">Emblem, {variant}</h2>
              <div
                className={`mt-6 flex items-end gap-8 border border-stone p-10 ${
                  variant === 'color' ? 'bg-cream' : 'bg-primary-900 text-cream'
                }`}
              >
                {[64, 120].map((size) => (
                  <Emblem key={size} variant={variant} style={{ width: size, height: size }} />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="eyebrow">Lockup, colour</h2>
            <div className="mt-6 space-y-8 border border-stone bg-cream p-10">
              <Logo {...wordmark} />
              <Logo {...wordmark} compact />
            </div>
          </div>
          <div>
            <h2 className="eyebrow">Lockup, reverse</h2>
            <div className="mt-6 space-y-8 border border-stone bg-primary-900 p-10">
              <Logo {...wordmark} variant="reverse" />
              <Logo {...wordmark} variant="reverse" compact />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="eyebrow">Palette</h2>
          <div className="mt-6 grid grid-cols-3 gap-px border border-stone bg-stone sm:grid-cols-6 lg:grid-cols-12">
            {SWATCHES.map(([name, bg]) => (
              <div key={name} className="bg-cream p-3 text-center">
                <div className={`${bg} mb-2 h-16 w-full border border-stone/60`} />
                <p className="text-[0.625rem] text-slate-muted">{name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="eyebrow">Type</h2>
          <div className="mt-6 divide-y divide-stone border border-stone bg-cream">
            {TYPE_SCALE.map((style) => (
              <div key={style.label} className="grid gap-4 p-8 md:grid-cols-[12rem_1fr]">
                <p className="text-xs text-slate-muted">{style.label}</p>
                <p className={`${style.className} text-primary-900 lining-nums`}>
                  {site.tagline} 1,742 kWh/kWp
                </p>
              </div>
            ))}
            <div className="grid gap-4 p-8 md:grid-cols-[12rem_1fr]">
              <p className="text-xs text-slate-muted">Label</p>
              <p className="eyebrow">Portfolio &amp; performance</p>
            </div>
            <div className="grid gap-4 p-8 md:grid-cols-[12rem_1fr]">
              <p className="text-xs text-slate-muted">Wordmark</p>
              <p className="font-wordmark text-2xl font-semibold tracking-[0.2em] text-primary-800 uppercase">
                {site.name}
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
