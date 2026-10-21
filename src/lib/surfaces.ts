import type { Field } from 'payload'

/*
  Backgrounds an editor can give a section.

  Each entry pairs a background with the text tone that stays legible on it, and the two
  are always chosen together. That is why the admin offers this list instead of a colour
  picker: nothing reachable from the admin can fail contrast or drift off the palette.

  Ordered light to dark, which is how the select reads in the admin.
*/

export type SurfaceName =
  | 'cream'
  | 'white'
  | 'sand'
  | 'accentTint'
  | 'accentBand'
  | 'primary'
  | 'primaryDeep'
  | 'primaryGradient'
  | 'ink'

export type Surface = {
  label: string
  /** Background utilities, written out in full because Tailwind cannot see built-up strings. */
  className: string
  /** Which text colours the blocks should use on this background. */
  tone: 'dark' | 'light'
}

export const SURFACES: Record<SurfaceName, Surface> = {
  cream: { label: 'Cream, the default page background', className: 'bg-cream', tone: 'dark' },
  white: { label: 'White, a clean break between cream sections', className: 'bg-white', tone: 'dark' },
  sand: { label: 'Sand, a warmer and slightly deeper neutral', className: 'bg-sand', tone: 'dark' },
  accentTint: {
    label: 'Amber tint, for a quiet highlight',
    className: 'bg-accent-50',
    tone: 'dark',
  },
  accentBand: {
    label: 'Amber band, stronger (use sparingly)',
    className: 'bg-accent-100',
    tone: 'dark',
  },
  primary: { label: 'Pine, the primary brand colour', className: 'bg-primary-800', tone: 'light' },
  primaryDeep: {
    label: 'Deep pine, heavier and good behind figures',
    className: 'bg-primary-950',
    tone: 'light',
  },
  primaryGradient: {
    label: 'Pine gradient, for a section that should feel like a hero',
    className: 'bg-gradient-to-b from-primary-900 to-primary-800',
    tone: 'light',
  },
  ink: { label: 'Ink, near-black with the strongest contrast', className: 'bg-ink', tone: 'light' },
}

export const surfaceOf = (name?: string | null): Surface =>
  SURFACES[(name ?? 'cream') as SurfaceName] ?? SURFACES.cream

/** Added to every block so each section carries its own background. */
export const surfaceField = (defaultValue: SurfaceName = 'cream'): Field => ({
  name: 'surface',
  type: 'select',
  label: 'Background',
  required: true,
  defaultValue,
  admin: {
    description:
      'Alternating light and dark sections gives a page its rhythm. Two dark sections in a row usually look like a mistake.',
  },
  options: (Object.keys(SURFACES) as SurfaceName[]).map((value) => ({
    value,
    label: SURFACES[value].label,
  })),
})
