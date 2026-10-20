import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router'
import { useSectionNav } from '../../components/useSectionNav'
import { buttonClass } from '../../components/button'
import { ExtLink, Eyebrow } from '../../components/ui'
import { photos, ratings, whatsapp, type Photo } from '../../data'
import { Chapter } from './Chapter'

const ease = [0.23, 1, 0.32, 1] as const

// Five frames, five hours: a preview of the whole page that doubles as navigation.
const frames: { to: string; hour: string; label: string; photo: Photo; size: string }[] = [
  { to: 'ristorante', hour: '12:30', label: 'Pranzo', photo: photos.pastaWine, size: 'col-span-2 h-64 sm:col-span-1 sm:h-[40vh]' },
  { to: 'eventi', hour: '16:00', label: 'Ricevimenti', photo: photos.greenFlowers, size: 'h-44 sm:h-[33vh]' },
  { to: 'terrazza', hour: '19:40', label: 'Tramonto', photo: photos.terrace, size: 'h-44 sm:h-[46vh]' },
  { to: 'notte', hour: '21:30', label: 'Cortile', photo: photos.party, size: 'h-44 sm:h-[37vh]' },
  { to: 'camere', hour: '23:30', label: 'Camere', photo: photos.path, size: 'h-44 sm:h-[28vh]' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const go = useSectionNav()

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, transform: 'translateY(22px)' },
          animate: { opacity: 1, transform: 'translateY(0px)' },
          transition: { duration: 0.8, ease, delay },
        }

  return (
    <Chapter chapterId={null} className="relative bg-cream pt-28 pb-14 sm:pt-36 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div {...rise(0)}>
              <Eyebrow className="text-terra">Agriturismo · Enna, Sicilia · dal 1930</Eyebrow>
            </motion.div>
            <motion.h1
              {...rise(0.08)}
              className="mt-5 font-display text-[clamp(2.7rem,6.6vw,6rem)] leading-[0.95] font-medium tracking-[-0.01em] text-balance"
            >
              La Sicilia dell’entroterra, a tavola <em className="font-normal text-terra">dal pranzo a mezzanotte.</em>
            </motion.h1>
          </div>

          <motion.div {...rise(0.18)} className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
              Un agriturismo tra le colline di Enna. Pranzi e cene alla carta, due sale per matrimoni e cerimonie, due camere
              per fermarti la notte.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ExtLink href={whatsapp.table} variant="primary" icon="ri-whatsapp-line">
                Prenota un tavolo
              </ExtLink>
              <Link to="/menu" className={buttonClass('ghostDark')}>
                Sfoglia il menu
                <i className="ri-arrow-right-line" aria-hidden />
              </Link>
            </div>
            <dl className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              <div className="flex items-center gap-1.5">
                <span className="flex text-terra" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className="ri-star-fill text-xs" />
                  ))}
                </span>
                <dt className="sr-only">Google</dt>
                <dd>
                  <strong className="font-semibold text-ink">{ratings.google.label}</strong> · {ratings.google.count} recensioni Google
                </dd>
              </div>
              <div>
                <dt className="sr-only">Tripadvisor</dt>
                <dd>
                  <strong className="font-semibold text-ink">{ratings.tripadvisor.label}</strong> su Tripadvisor
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <ol className="mt-12 grid grid-cols-2 items-end gap-2.5 sm:mt-16 sm:grid-cols-5 sm:gap-3" aria-label="Una giornata al feudo">
          {frames.map((f, i) => (
            <motion.li
              key={f.to}
              className={f.size}
              initial={reduce ? { opacity: 0 } : { clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.08 }}
            >
              <a
                href={`#${f.to}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(f.to)
                }}
                className="group relative block size-full overflow-hidden rounded-[3px] bg-sand"
              >
                <img
                  src={f.photo.src}
                  alt={f.photo.alt}
                  width={f.photo.w}
                  height={f.photo.h}
                  fetchPriority={i === 2 ? 'high' : 'auto'}
                  className="size-full object-cover transition-transform duration-700 ease-out-strong group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/40" />
                <span className="absolute top-3 left-3 font-display text-2xl text-white italic sm:text-3xl">{f.hour}</span>
                <span className="absolute inset-x-3 bottom-3 flex items-center justify-between text-xs font-semibold tracking-[0.18em] text-white uppercase">
                  {f.label}
                  <i
                    className="ri-arrow-down-line text-base transition-transform duration-300 ease-out-strong group-hover:translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </Chapter>
  )
}
