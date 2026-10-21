import type { Plant } from '@/lib/types'

/*
  Yield index against the regional peer group, month by month.

  One series and a parity line, drawn as plain SVG. A charting library would ship a
  runtime to every visitor to draw a polyline and a few ticks.

  Deliberately plain: no area fill, no gradient, no annotations on the good months. A
  filled area makes a small move look dramatic, and the people reading this page check
  figures for a living. Every value is also available as a table underneath.
*/

const WIDTH = 960
const HEIGHT = 340
const PAD = { top: 24, right: 28, bottom: 40, left: 48 }

/*
  Text inside an SVG scales with it. At 960 units wide in a 342px phone container, 13-unit
  labels would render at under 5px, and browser text zoom would not help. So the chart
  stops shrinking at MIN_RENDER and its container scrolls instead; at that width the
  15-unit labels come out at about 12 CSS pixels.
*/
const MIN_RENDER = '48rem'

const PLOT_W = WIDTH - PAD.left - PAD.right
const PLOT_H = HEIGHT - PAD.top - PAD.bottom

const LINE = '#eac15b'
const PARITY = '#93a39d'

/** Round the domain out to whole tick steps so the axis labels are not arbitrary. */
const domainOf = (values: number[]) => {
  const step = 20
  const min = Math.min(100, ...values)
  const max = Math.max(100, ...values)
  return {
    min: Math.floor((min - 8) / step) * step,
    max: Math.ceil((max + 8) / step) * step,
    step,
  }
}

export function IndexChart({ plant }: { plant: Plant }) {
  const series = plant.performance.indexSeries
  // Two points are a line between two dots, not a trend.
  if (series.length < 3) return null

  const values = series.map((point) => point.value)
  const { min, max, step } = domainOf(values)

  const x = (index: number) => PAD.left + (index / (series.length - 1)) * PLOT_W
  const y = (value: number) => PAD.top + PLOT_H - ((value - min) / (max - min)) * PLOT_H

  const ticks: number[] = []
  for (let value = min; value <= max; value += step) ticks.push(value)

  /*
    About six month labels, always including the latest. When the latest month lands less
    than a step after the previous label, that label is dropped instead: the two would
    overprint, and the latest month is the one a reader looks for.
  */
  const STEP = Math.max(1, Math.ceil((series.length - 1) / 6))
  const lastIndex = series.length - 1
  const labelled = series
    .map((point, index) => ({ ...point, index }))
    .filter((point, index) => index % STEP === 0 || index === lastIndex)
    .filter((point, position, kept) => {
      const next = kept[position + 1]
      return !next || next.index - point.index >= STEP
    })

  const path = series.map((point, index) => `${x(index)},${y(point.value)}`).join(' ')
  const last = series[lastIndex]
  const parity = y(100)

  // The parity label sits below the line at whichever end the series is above parity, so
  // the series never runs through it; above the line if both ends are below parity.
  const parityLabel =
    series[0].value >= 100
      ? { x: PAD.left, y: parity + 20, anchor: 'start' as const }
      : last.value >= 100
        ? { x: WIDTH - PAD.right, y: parity + 20, anchor: 'end' as const }
        : { x: PAD.left, y: parity - 10, anchor: 'start' as const }

  // Keep one decimal everywhere, including round values such as 100.
  const fmt = (value: number) => value.toFixed(1)

  const title = `Yield index against the regional peer group, ${series[0].month} to ${last.month}.`
  const summary = `Ranges from ${fmt(Math.min(...values))} to ${fmt(Math.max(...values))}, against a peer-group parity of 100. Latest month ${last.month}: ${fmt(last.value)}.`

  return (
    <figure className="mt-16">
      <figcaption className="max-w-2xl">
        <h3 className="font-display text-2xl leading-snug font-normal text-cream">
          Yield index by month
        </h3>
        <p className="mt-3 leading-relaxed text-cream/60">
          Energy produced per installed kilowatt, expressed against the peer-group average, where
          100 is parity. A reading of 110 means the plant produced 10 per cent more energy per
          kilowatt than the average plant in its group that month.
        </p>
      </figcaption>

      {/* The default preserveAspectRatio scales the chart down whole instead of reflowing
          it, which keeps the tick spacing honest at every width. On a phone the chart
          scrolls sideways, so the container takes focus and can be scrolled by keyboard. */}
      <div
        className="mt-9 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Yield index chart, scrolls horizontally on small screens"
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full"
          style={{ minWidth: MIN_RENDER }}
          role="img"
          aria-label={`${title} ${summary}`}
        >
          {/* Solid hairlines for the grid. Dashed lines read as thresholds, and parity is the
              only threshold on this chart. */}
          <g stroke="currentColor" className="text-cream/12" strokeWidth="1">
            {ticks.map((tick) => (
              <line key={tick} x1={PAD.left} x2={WIDTH - PAD.right} y1={y(tick)} y2={y(tick)} />
            ))}
          </g>

          <line
            x1={PAD.left}
            x2={WIDTH - PAD.right}
            y1={parity}
            y2={parity}
            stroke={PARITY}
            strokeWidth="1.5"
          />
          <text
            x={parityLabel.x}
            y={parityLabel.y}
            textAnchor={parityLabel.anchor}
            className="fill-cream/70 font-sans text-[15px]"
          >
            100 = parity
          </text>

          <g className="fill-cream/55 font-sans text-[15px] tabular-nums">
            {ticks.map((tick) => (
              <text key={tick} x={PAD.left - 12} y={y(tick) + 4} textAnchor="end">
                {tick}
              </text>
            ))}
            {/* End labels are anchored inward; centred, they would hang past the viewBox. */}
            {labelled.map((point) => (
              <text
                key={point.month}
                x={x(point.index)}
                y={HEIGHT - 12}
                textAnchor={
                  point.index === 0 ? 'start' : point.index === series.length - 1 ? 'end' : 'middle'
                }
              >
                {point.month}
              </text>
            ))}
          </g>

          <polyline
            points={path}
            fill="none"
            stroke={LINE}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* A <title> per point gives a native tooltip and is read by screen readers,
              without any JavaScript. */}
          {series.map((point, index) => (
            <g key={point.month}>
              <title>{`${point.month}: ${fmt(point.value)}`}</title>
              <circle cx={x(index)} cy={y(point.value)} r="4" fill={LINE} />
              {/* Larger transparent target so the pointer does not have to find a 4px dot. */}
              <circle cx={x(index)} cy={y(point.value)} r="14" fill="transparent" />
            </g>
          ))}

          <text
            x={x(series.length - 1)}
            y={y(last.value) - 16}
            textAnchor="end"
            className="fill-cream font-sans text-[17px] font-semibold tabular-nums"
          >
            {fmt(last.value)}
          </text>
        </svg>
      </div>

      {/* The same data as a table, for readers who prefer one. <details> opens without
          JavaScript. */}
      <details className="group mt-8 border-t border-cream/12">
        <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[0.75rem] font-semibold tracking-[0.14em] text-cream/70 uppercase marker:content-none hover:text-cream">
          View the figures as a table
          <span
            aria-hidden="true"
            className="shrink-0 text-xl leading-none text-accent-300 transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <div
          className="overflow-x-auto pb-6"
          tabIndex={0}
          role="region"
          aria-label="Yield index table, scrolls horizontally on small screens"
        >
          <table className="w-full min-w-[28rem] text-left text-sm">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr className="border-b border-cream/12 text-[0.6875rem] tracking-[0.14em] text-cream/55 uppercase">
                <th scope="col" className="py-3 pr-6 font-semibold">
                  Month
                </th>
                <th scope="col" className="py-3 font-semibold">
                  Yield index
                </th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {series.map((point) => (
                <tr key={point.month} className="border-b border-cream/8">
                  <th scope="row" className="py-2.5 pr-6 font-normal text-cream/70">
                    {point.month}
                  </th>
                  <td className="py-2.5 text-cream/90">{fmt(point.value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  )
}
