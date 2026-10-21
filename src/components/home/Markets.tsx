import { Container, Section, SectionHeading } from '@/components/ui'

// No map on purpose: a region is an area, not a pin, and two short paragraphs say more
// than two iframes of half a state would. The plant pages carry maps.
const regions = [
  {
    name: 'San Joaquin Valley',
    body: 'Flat, sunny farmland with strong utility demand, where many of the state’s first-generation plants are now old enough to need repowering.',
    tags: ['Utility-scale', 'Repowering', 'Agrivoltaics'],
  },
  {
    name: 'High Desert',
    body: 'Some of the best irradiance in the country, with heat, dust and wind that punish deferred maintenance. Battery retrofits are changing how plants here earn.',
    tags: ['High irradiance', 'Storage', 'Trackers'],
  },
]

export function Markets() {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Where we operate"
          title="Concentrated in Central and Southern California, by design."
          intro="We would rather know two regions completely than six approximately. We take on a plant when one of our crews can reach it the same day."
        />

        <div className="mt-16 grid gap-px border border-stone/70 bg-stone/70 lg:grid-cols-2">
          {regions.map((region) => (
            <article key={region.name} className="bg-cream p-9 lg:p-12">
              <h3 className="font-display text-3xl font-light text-primary-900">{region.name}</h3>
              <div className="rule-accent mt-5 h-px w-16" />
              <p className="mt-5 leading-relaxed text-slate-muted">{region.body}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {region.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-stone px-3 py-1.5 text-[0.6875rem] font-medium tracking-[0.12em] text-primary-800/80 uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
