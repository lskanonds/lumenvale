import Link from 'next/link'
import { useId, type CSSProperties } from 'react'
import { cn } from '@/lib/cn'

/*
  Logo system. Each mark is drawn for the size it is used at:

    BrandMark  ring, sun and three panel rows       16-64px   header, watermarks
    Emblem     the mark plus rays and an inner ring 96px+     sign-in screen, footer
    Logo       BrandMark next to the wordmark                 header

  Everything sits on a 120x120 grid centred at (60,60). The sun is a full circle clipped
  at the horizon, so the header logo can raise it on hover without opening a gap under it.
*/

const HORIZON = 66

const ROWS = ['M17 70 H103 L100 76 H20 Z', 'M23 82 H97 L94 88 H26 Z', 'M32 94 H88 L85 100 H35 Z']

const RAYS = [20, 45, 70, 90, 110, 135, 160].map((degrees) => {
  const angle = (degrees * Math.PI) / 180
  const at = (radius: number) => ({
    x: Number((60 + radius * Math.cos(angle)).toFixed(2)),
    y: Number((64 - radius * Math.sin(angle)).toFixed(2)),
  })
  return { degrees, from: at(29), to: at(36) }
})

type Variant = 'color' | 'reverse' | 'mono'

type MarkProps = {
  /** `color` on light backgrounds, `reverse` on dark ones, `mono` inherits currentColor. */
  variant?: Variant
  className?: string
  style?: CSSProperties
  /** Supply when the mark carries meaning on its own; otherwise it is hidden from AT. */
  title?: string
}

const paletteFor = (variant: Variant) => {
  switch (variant) {
    case 'mono':
      return { ring: 'currentColor', sun: 'currentColor', rows: 'currentColor', rays: 'currentColor' }
    case 'reverse':
      return {
        ring: 'var(--color-cream)',
        sun: 'var(--color-accent-400)',
        rows: 'var(--color-cream)',
        rays: 'var(--color-accent-300)',
      }
    default:
      return {
        ring: 'var(--color-primary-800)',
        sun: 'var(--color-accent-400)',
        rows: 'var(--color-primary-800)',
        rays: 'var(--color-accent-400)',
      }
  }
}

// React does not promise that useId() output is a valid fragment identifier.
const useClipId = () => `sun-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

function Sun({ fill, clipId, className }: { fill: string; clipId: string; className?: string }) {
  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="120" height={HORIZON} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <circle cx="60" cy="64" r="22" fill={fill} className={className} />
      </g>
    </>
  )
}

const svgProps = (title?: string) => ({
  viewBox: '0 0 120 120',
  role: title ? 'img' : 'presentation',
  'aria-label': title,
  'aria-hidden': title ? undefined : true,
  focusable: 'false' as const,
})

export function BrandMark({
  variant = 'color',
  className,
  style,
  title,
  rise = false,
}: MarkProps & {
  /** Lift the sun when a parent `.group` is hovered. Used by the header logo. */
  rise?: boolean
}) {
  const colors = paletteFor(variant)
  const clipId = useClipId()

  return (
    <svg {...svgProps(title)} className={className} style={style}>
      <circle cx="60" cy="60" r="56" fill="none" stroke={colors.ring} strokeWidth="2.5" />
      <Sun
        fill={colors.sun}
        clipId={clipId}
        className={
          rise
            ? 'transition-transform duration-500 ease-out-soft group-hover:-translate-y-[6px]'
            : undefined
        }
      />
      <g fill={colors.rows} opacity={variant === 'mono' ? 0.7 : 1}>
        {ROWS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  )
}

export function Emblem({ variant = 'color', className, style, title }: MarkProps) {
  const colors = paletteFor(variant)
  const clipId = useClipId()
  const mono = variant === 'mono'

  return (
    <svg {...svgProps(title)} className={className} style={style}>
      <circle cx="60" cy="60" r="56" fill="none" stroke={colors.ring} strokeWidth="2.5" />
      <circle
        cx="60"
        cy="60"
        r="50.5"
        fill="none"
        stroke={colors.ring}
        strokeWidth="1"
        opacity={mono ? 0.5 : 0.6}
      />
      <g stroke={colors.rays} strokeWidth="2.5" strokeLinecap="round" opacity={mono ? 0.6 : 1}>
        {RAYS.map(({ degrees, from, to }) => (
          <line key={degrees} x1={from.x} y1={from.y} x2={to.x} y2={to.y} />
        ))}
      </g>
      <Sun fill={colors.sun} clipId={clipId} />
      <g fill={colors.rows} opacity={mono ? 0.7 : 1}>
        {ROWS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  )
}

type LogoProps = {
  /** Passed in rather than read from the CMS: the header is a client component. */
  name: string
  descriptor: string
  /** `reverse` for the transparent header over the hero. */
  variant?: 'color' | 'reverse'
  /** Hides the descriptor line in tight layouts. */
  compact?: boolean
  className?: string
}

/**
 * Horizontal lockup. The wordmark is live text rather than outlined paths, so it stays
 * crisp at any size and is selectable and readable by screen readers.
 */
export function Logo({
  name,
  descriptor,
  variant = 'color',
  compact = false,
  className,
}: LogoProps) {
  const reverse = variant === 'reverse'

  // No aria-label: the visible wordmark already names the link, and a label that differs
  // from it would fail WCAG 2.5.3 (Label in Name).
  return (
    <Link href="/" className={cn('group inline-flex shrink-0 items-center gap-3', className)}>
      <BrandMark variant={variant} rise className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span
          className={cn(
            'font-wordmark text-[1.125rem] font-semibold tracking-[0.2em] uppercase',
            reverse ? 'text-white' : 'text-primary-800',
          )}
        >
          {name}
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1.5 font-wordmark text-[0.5625rem] font-medium tracking-[0.22em] uppercase',
              reverse ? 'text-accent-200' : 'text-accent-600',
            )}
          >
            {descriptor}
          </span>
        )}
      </span>
    </Link>
  )
}
