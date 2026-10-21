'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/brand/Brand'
import type { NavItem } from '@/lib/types'
import { cn } from '@/lib/cn'

/**
 * Sticky header. On the home page it floats transparently over the hero image and
 * turns solid once the user scrolls past it; everywhere else it is solid from the start.
 */
export function Header({
  siteName,
  descriptor,
  navigation,
}: {
  siteName: string
  descriptor: string
  navigation: NavItem[]
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const overHero = pathname === '/'
  const solid = scrolled || !overHero || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation. Adjusting state during render rather than in
  // an effect avoids the cascading re-render that react-hooks/set-state-in-effect flags,
  // and it also covers browser back/forward, which an onClick handler would miss.
  const [renderedPath, setRenderedPath] = useState(pathname)
  if (pathname !== renderedPath) {
    setRenderedPath(pathname)
    setMenuOpen(false)
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-out-soft',
        solid
          ? 'border-b border-stone/60 bg-cream/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* Between lg and xl the row is tight: the nav, the wordmark and the call to
          action all shrink a step so nothing wraps or collides. */}
      <div className="mx-auto flex h-20 max-w-[85rem] items-center justify-between gap-4 px-6 lg:gap-6 lg:px-8 xl:gap-10 xl:px-10">
        <Logo name={siteName} descriptor={descriptor} variant={solid ? 'color' : 'reverse'} />

        <nav
          aria-label="Main"
          className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-9"
        >
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-1 text-[0.75rem] font-medium tracking-[0.08em] uppercase transition-colors xl:text-[0.8125rem] xl:tracking-[0.11em]',
                  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent-400 after:transition-transform after:duration-400 after:ease-out-soft hover:after:scale-x-100',
                  active && 'after:scale-x-100',
                  solid
                    ? cn('text-primary-800/75 hover:text-primary-900', active && 'text-primary-900')
                    : cn('text-white/80 hover:text-white', active && 'text-white'),
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/owners"
            className={cn(
              'inline-flex items-center border px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-all duration-300 xl:px-6 xl:text-[0.75rem] xl:tracking-[0.14em]',
              solid
                ? 'border-primary-800 bg-primary-800 text-cream hover:bg-primary-900'
                : 'border-white/45 text-white hover:border-white hover:bg-white hover:text-primary-900',
            )}
          >
            Request a Proposal
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={cn(
            'flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden',
            solid ? 'text-primary-800' : 'text-white',
          )}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span
            aria-hidden="true"
            className={cn(
              'block h-px w-6 bg-current transition-transform duration-300',
              menuOpen && 'translate-y-[6px] rotate-45',
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              'block h-px w-6 bg-current transition-opacity duration-300',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              'block h-px w-6 bg-current transition-transform duration-300',
              menuOpen && '-translate-y-[6px] -rotate-45',
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-stone/60 bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[85rem] px-6 py-6">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-stone/50 last:border-0">
                <Link href={item.href} className="block py-4 font-display text-2xl text-primary-800">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/owners"
            className="mt-6 block bg-primary-800 px-6 py-4 text-center text-[0.75rem] font-semibold tracking-[0.14em] text-cream uppercase"
          >
            Request an O&amp;M Proposal
          </Link>
        </nav>
      </div>
    </header>
  )
}
