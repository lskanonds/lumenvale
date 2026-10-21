import type { CSSProperties } from 'react'
import { BrandMark, Emblem } from '@/components/brand/Brand'

/**
 * The marks are painted with the site's design tokens, which the Payload admin stylesheet
 * does not define. Without these they render solid black.
 */
const palette = {
  '--color-primary-800': '#133830',
  '--color-accent-300': '#eac15b',
  '--color-accent-400': '#e0a92f',
  '--color-cream': '#faf8f3',
} as CSSProperties

/*
  Admin branding. Payload shows its own logo on the sign-in screen and in the header;
  editors see the company's instead. Inline styles, because the admin has its own
  stylesheet and none of the site's Tailwind classes.
*/

/** Sign-in screen. Payload renders this at roughly 200px wide. */
export function AdminLogo() {
  return (
    <div
      style={{
        ...palette,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '0.5rem 0',
      }}
    >
      <Emblem style={{ width: 96, height: 96 }} />
      <div style={{ textAlign: 'center', lineHeight: 1.35 }}>
        <div
          style={{
            fontSize: '1.125rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#133830',
            fontWeight: 600,
          }}
        >
          Lumenvale
        </div>
        <div
          style={{
            marginTop: '0.4rem',
            fontSize: '0.625rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#704d0c',
          }}
        >
          Solar Asset Management
        </div>
      </div>
    </div>
  )
}

/** Small mark in the admin header and on the account menu. */
export function AdminIcon() {
  return <BrandMark style={{ ...palette, width: 26, height: 26 }} />
}
