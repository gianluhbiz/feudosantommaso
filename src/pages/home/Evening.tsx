import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Frame } from '../../components/Frame'
import { Hour, Rise } from '../../components/ui'
import { photos, ratings, reviews } from '../../data'
import { Chapter } from './Chapter'

const duskRow = [photos.houseDusk, photos.facade, photos.cottage]

function Panorama() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <div ref={ref} className="relative h-[78svh] min-h-[460px] overflow-hidden">
      <motion.img
        src={photos.terrace.src}
        alt={photos.terrace.alt}
        width={photos.terrace.w}
        height={photos.terrace.h}
        loading="lazy"
        style={reduce ? undefined : { y, scale: 1.16 }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <Rise>
          <Hour hour="19:40" label="Tramonto" />
        </Rise>
        <Rise delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] font-medium text-balance">
            La terrazza guarda le colline dell’ennese.
          </h2>
          <p className="mt-4 max-w-lg text-lg text-moon/80">
            A fine giornata gli ospiti escono con un bicchiere in mano e il cielo cambia colore sopra l’entroterra.
          </p>
        </Rise>
      </div>
    </div>
  )
}

export function Sunset() {
  return (
    <Chapter id="terrazza" className="bg-dusk pb-24 text-moon">
      <Panorama />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:gap-3">
          {duskRow.map((p, i) => (
            <Frame key={p.src} photo={p} set={duskRow} className="aspect-[4/5] rounded-[3px] sm:aspect-[4/3]" delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Frame photo={photos.staff} className="aspect-[4/5] rounded-[3px] lg:col-span-5" />

          <div className="lg:col-span-7 lg:pt-6">
            <Rise>
              <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">Chi vi accoglie</p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.02] font-medium text-balance">
                Nelle recensioni tornano due nomi: Santi e Sofia.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-moon/80 text-pretty">
                Marito e moglie, padroni di casa, con uno staff di ragazzi che vi segue dal primo piatto al caffè.
              </p>
            </Rise>

            <Rise delay={0.08}>
              <dl className="mt-10 grid max-w-lg grid-cols-2 gap-6 border-t border-moon/15 pt-6">
                <div>
                  <dt className="text-sm text-moon/70">Google · {ratings.google.label}</dt>
                  <dd className="mt-1 font-display text-6xl leading-none tabular-nums">{ratings.google.count}</dd>
                  <dd className="mt-1 text-sm text-moon/70">recensioni</dd>
                </div>
                <div>
                  <dt className="text-sm text-moon/70">Tripadvisor · {ratings.tripadvisor.label}</dt>
                  <dd className="mt-1 font-display text-6xl leading-none tabular-nums">{ratings.tripadvisor.count}</dd>
                  <dd className="mt-1 text-sm text-moon/70">recensioni</dd>
                </div>
              </dl>
            </Rise>
          </div>
        </div>

        <ul className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {reviews.map((r, i) => (
            <li key={r.name} className="break-inside-avoid">
              <Rise delay={(i % 3) * 0.06}>
                <figure className="rounded-[3px] bg-moon/[0.06] p-6 ring-1 ring-moon/10">
                  <div className="flex items-center justify-between text-xs tracking-[0.18em] text-gold uppercase">
                    <span>{r.occasion}</span>
                    <span className="flex gap-0.5" aria-label="5 stelle su 5">
                      {Array.from({ length: 5 }, (_, k) => (
                        <i key={k} className="ri-star-fill" aria-hidden />
                      ))}
                    </span>
                  </div>
                  <blockquote className="mt-4 font-display text-[1.4rem] leading-snug text-pretty">“{r.text}”</blockquote>
                  <figcaption className="mt-4 text-sm text-moon/70">
                    {r.name} · {r.source}
                  </figcaption>
                </figure>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  )
}

// Night mosaic: [photo, grid classes]
const night = [
  [photos.party, 'col-span-2 row-span-2 md:col-span-4 md:row-span-2'],
  [photos.garden, 'col-span-2'],
  [photos.cart, 'md:col-span-2'],
  [photos.star, ''],
  [photos.courtyard, 'col-span-2 md:col-span-3'],
  [photos.lightsHouse, 'md:col-span-2'],
  [photos.arch, 'md:col-span-3'],
  [photos.willows, ''],
  [photos.courtyard2, 'md:col-span-2'],
] as const

const nightSet = night.map(([p]) => p)

export function Courtyard() {
  return (
    <Chapter id="notte" className="bg-night pb-24 text-moon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Rise className="lg:col-span-7">
            <Hour hour="21:30" label="Cortile" />
            <h2 className="mt-8 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] font-medium text-balance">
              Cene e feste all’aperto, sotto le luci del cortile.
            </h2>
          </Rise>
          <Rise delay={0.06} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-moon/80 text-pretty">
              Nelle sere d’estate si sta fuori: il cortile in pietra, gli ulivi accesi di lucine, un vecchio carretto in legno in
              mezzo al giardino.
            </p>
          </Rise>
        </div>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-6 lg:auto-rows-[230px]">
          {night.map(([photo, cls], i) => (
            <Frame key={photo.src} photo={photo} set={nightSet} className={`rounded-[3px] ${cls}`} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
