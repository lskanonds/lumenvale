import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto max-w-[85rem] px-6 lg:px-10', className)}>{children}</div>
}

export function Section({
  className,
  children,
  ...props
}: { className?: string; children: ReactNode } & ComponentProps<'section'>) {
  return (
    <section className={cn('py-section-sm lg:py-section', className)} {...props}>
      {children}
    </section>
  )
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3', className)}>
      <span aria-hidden="true" className="rule-accent h-px w-8" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Eyebrow
          className={cn(
            align === 'center' && 'justify-center',
            tone === 'light' && 'text-accent-300',
          )}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          'mt-5 font-display text-4xl leading-[1.1] font-light text-balance lg:text-5xl',
          tone === 'light' ? 'text-cream' : 'text-primary-900',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-6 text-lg leading-relaxed',
            tone === 'light' ? 'text-cream/70' : 'text-slate-muted',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost-light'
  className?: string
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const styles = {
    primary: 'border-primary-800 bg-primary-800 text-cream hover:bg-primary-950 hover:border-primary-950',
    outline:
      'border-primary-800/30 text-primary-800 hover:border-primary-800 hover:bg-primary-800 hover:text-cream',
    'ghost-light':
      'border-white/40 text-white hover:border-white hover:bg-white hover:text-primary-900',
  }[variant]

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center border px-8 py-4 text-[0.75rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out-soft',
        styles,
        className,
      )}
    >
      {children}
    </Link>
  )
}
