import { Container } from '@/components/ui'
import { getHomepage } from '@/lib/cms'

export async function Stats() {
  const { stats } = await getHomepage()
  if (stats.length === 0) return null

  return (
    <section className="border-b border-stone/60 bg-cream">
      <Container>
        {/* A list rather than a <dl>: the design needs value → label → detail order,
            which a definition list cannot express without invalid dt/dd nesting. */}
        <ul className="grid grid-cols-2 divide-stone/60 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="border-b border-stone/60 px-2 py-10 lg:border-b-0 lg:px-10 lg:py-14 lg:first:pl-0 lg:last:pr-0"
            >
              {/* lining-nums keeps every figure at cap height, which matters in a row of
                  numbers set side by side. */}
              <p className="font-display text-5xl leading-none font-light text-primary-800 lining-nums lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-[0.75rem] font-semibold tracking-[0.16em] text-primary-900 uppercase">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm text-slate-muted">{stat.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
