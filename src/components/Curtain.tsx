import { motion, useReducedMotion } from 'framer-motion'
import { useLayoutEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { useDestination } from './route-context'

const titles: Record<string, string> = {
  '/': 'Feudo San Tommaso',
  '/menu': 'Il Menu',
}

const ease = [0.77, 0, 0.175, 1] as const

// The very first paint should show content immediately, not a curtain.
let firstPage = true

/**
 * Route transition: a dark curtain drops over the old page, carrying the name
 * of the destination, then lifts off the new one.
 */
export function Page({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  const { hash } = useLocation()
  // While this page exits, the curtain announces where you are going.
  const pathname = useDestination()
  const skipIntro = firstPage

  // A new page starts at the top, under the curtain. Pages with a #hash
  // scroll themselves to the section after mounting.
  useLayoutEffect(() => {
    if (!firstPage && !hash) window.scrollTo({ top: 0, behavior: 'instant' })
    firstPage = false
    // Mount-only: the exiting page re-renders with the new location.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const title = titles[pathname] ?? 'Feudo San Tommaso'

  if (reduce) {
    return (
      <motion.div initial={{ opacity: skipIntro ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
        {children}
      </motion.div>
    )
  }

  return (
    <>
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-night text-moon"
        initial={skipIntro ? { clipPath: 'inset(0% 0% 100% 0%)' } : { clipPath: 'inset(0% 0% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.6, ease, delay: 0.1 } }}
        exit={{ clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.5, ease } }}
      >
        <div className="flex flex-col items-center gap-4">
          <img src="/img/logo.png" alt="" className="h-16 w-auto opacity-90" />
          <span className="font-display text-4xl italic sm:text-5xl">{title}</span>
        </div>
      </motion.div>
    </>
  )
}
