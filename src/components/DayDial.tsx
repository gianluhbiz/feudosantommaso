import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { contact, whatsapp } from '../data'
import { useScene } from './scene-context'

/**
 * Sun-to-moon arc that tracks how far into the "day" the reader has scrolled,
 * plus the hour of the chapter on screen. Desktop: floating pill. Mobile: part
 * of the bottom booking bar.
 */
function Arc({ night }: { night: boolean }) {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })
  const progress = reduce ? scrollYProgress : smooth
  // 180° sweep from the left horizon to the right one.
  const angle = useTransform(progress, [0, 1], [Math.PI, 0])
  const cx = useTransform(angle, (a) => 22 + Math.cos(a) * 16)
  const cy = useTransform(angle, (a) => 22 - Math.sin(a) * 16)

  return (
    <svg viewBox="0 0 44 26" className="h-[26px] w-[44px] shrink-0" aria-hidden>
      <path d="M6 22 A16 16 0 0 1 38 22" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="1.5 2.5" />
      <line x1="2" y1="22.5" x2="42" y2="22.5" stroke="currentColor" strokeOpacity="0.35" />
      <motion.circle cx={cx} cy={cy} r="3.6" className={`transition-[fill] duration-700 ${night ? 'fill-moon' : 'fill-terra'}`} />
    </svg>
  )
}

function HourLabel({ compact = false }: { compact?: boolean }) {
  const { chapter } = useScene()
  if (!chapter) return null
  return (
    <span className="relative inline-grid overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={chapter.id}
          className="flex items-baseline gap-2 whitespace-nowrap"
          initial={{ opacity: 0, transform: 'translateY(60%)' }}
          animate={{ opacity: 1, transform: 'translateY(0%)' }}
          exit={{ opacity: 0, transform: 'translateY(-60%)' }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
        >
          {chapter.hour && <span className="font-display text-xl italic tabular-nums">{chapter.hour}</span>}
          <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] opacity-75 ${compact ? 'hidden min-[430px]:inline' : ''}`}>
            {chapter.label}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function DayDial() {
  const { chapter } = useScene()
  const night = chapter?.night ?? false
  const visible = Boolean(chapter && chapter.id !== 'dove')

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`fixed right-6 bottom-6 z-40 hidden items-center gap-3 rounded-full py-2.5 pl-3.5 pr-5 ring-1 backdrop-blur-md transition-[background-color,color] duration-700 lg:flex ${
            night ? 'bg-night/70 text-moon ring-moon/15' : 'bg-paper/80 text-ink ring-ink/10'
          }`}
          initial={{ opacity: 0, transform: 'translateY(12px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          exit={{ opacity: 0, transform: 'translateY(12px)' }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          aria-hidden
        >
          <Arc night={night} />
          <HourLabel />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** Thumb-reach booking bar on phones. Always present: booking is the job. */
export function MobileBar() {
  const { chapter } = useScene()
  const night = chapter?.night ?? false
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-[background-color,color,border-color] duration-700 lg:hidden ${
        night ? 'border-moon/10 bg-night/85 text-moon' : 'border-ink/10 bg-paper/90 text-ink'
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-2">
        {chapter && chapter.id !== 'dove' ? (
          <div className="flex min-w-0 flex-1 items-center gap-2" aria-hidden>
            <Arc night={night} />
            <HourLabel compact />
          </div>
        ) : (
          <a href={contact.phoneHref} className="flex min-h-12 flex-1 items-center gap-2 text-sm font-medium">
            <i className="ri-phone-line text-lg" aria-hidden />
            Chiama
          </a>
        )}
        <a
          href={whatsapp.table}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-terra px-5 text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.97]"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden />
          Prenota un tavolo
        </a>
      </div>
    </div>
  )
}
