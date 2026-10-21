import Link from 'next/link'
import Image from 'next/image'
import { BrandMark } from '@/components/brand/Brand'
import { formatCapacity, type Plant } from '@/lib/types'

/** Portfolio card. Leads with the performance claim rather than the size of the plant. */
export function PlantCard({ plant }: { plant: Plant }) {
  const { rank } = plant.performance

  return (
    <Link href={`/portfolio/${plant.slug}`} className="group block">
      <div className="relative flex aspect-3/2 items-center justify-center overflow-hidden bg-primary-900">
        {plant.heroImage ? (
          <Image
            src={plant.heroImage.src}
            alt={plant.heroImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_25%_0%,#1b4a40_0%,#0e2a25_65%,#0a1f1b_100%)]" />
            <BrandMark
              variant="mono"
              className="relative h-24 w-24 text-white/12 transition-transform duration-700 ease-out-soft group-hover:scale-110"
            />
          </>
        )}

        <span className="absolute top-4 left-4 bg-cream/95 px-3 py-1.5 text-[0.625rem] font-semibold tracking-[0.14em] text-primary-900 uppercase">
          {plant.statusLabel}
        </span>

        {rank && (
          <span className="absolute right-4 bottom-4 bg-accent-400 px-3 py-1.5 font-label text-[0.6875rem] font-semibold tracking-[0.12em] text-primary-950 uppercase">
            {rank} in peer group
          </span>
        )}
      </div>

      <div className="pt-6">
        <p className="font-label text-[0.6875rem] font-semibold tracking-[0.16em] text-accent-600 uppercase">
          {plant.technology}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-snug font-normal text-primary-900 transition-colors group-hover:text-accent-600">
          {plant.name}
        </h3>
        <p className="mt-2 text-sm text-slate-muted">
          {plant.region} · {formatCapacity(plant.capacity)}
        </p>
        <span
          aria-hidden="true"
          className="mt-4 inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-primary-800 uppercase"
        >
          View case study
          <span className="transition-transform duration-400 ease-out-soft group-hover:translate-x-1.5">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  )
}
