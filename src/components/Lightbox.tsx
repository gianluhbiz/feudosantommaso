import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import type { Photo } from '../data'
import { LightboxContext } from './lightbox-context'

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ set: Photo[]; index: number } | null>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)

  const open = useCallback((set: Photo[], index: number) => {
    returnFocus.current = document.activeElement as HTMLElement
    setState({ set, index })
  }, [])

  const close = useCallback(() => setState(null), [])

  const step = useCallback((dir: number) => {
    setState((s) => (s ? { ...s, index: (s.index + dir + s.set.length) % s.set.length } : s))
  }, [])

  useEffect(() => {
    if (!state) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeBtn.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [state, close, step])

  const current = state ? state.set[state.index] : null

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <AnimatePresence onExitComplete={() => returnFocus.current?.focus()}>
        {state && current && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Galleria foto"
            className="fixed inset-0 z-[80] flex flex-col bg-night/95 text-moon backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            onClick={close}
          >
            <div className="flex items-center justify-between px-4 py-3 text-sm sm:px-6">
              <span className="tabular-nums text-moon/70">
                {String(state.index + 1).padStart(2, '0')} / {String(state.set.length).padStart(2, '0')}
              </span>
              <button
                ref={closeBtn}
                type="button"
                onClick={close}
                aria-label="Chiudi galleria"
                className="grid size-11 cursor-pointer place-items-center rounded-full text-2xl transition-[background-color,transform] duration-150 ease-out hover:bg-moon/10 active:scale-[0.96]"
              >
                <i className="ri-close-line" aria-hidden />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
                initial={{ opacity: 0, transform: 'scale(0.97)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                onClick={(e) => e.stopPropagation()}
              />
              {state.set.length > 1 && (
                <>
                  <NavButton dir={-1} onClick={step} />
                  <NavButton dir={1} onClick={step} />
                </>
              )}
            </div>

            <p className="px-6 py-4 text-center text-sm text-moon/75" onClick={(e) => e.stopPropagation()}>
              {current.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}

function NavButton({ dir, onClick }: { dir: number; onClick: (dir: number) => void }) {
  return (
    <button
      type="button"
      aria-label={dir < 0 ? 'Foto precedente' : 'Foto successiva'}
      onClick={(e) => {
        e.stopPropagation()
        onClick(dir)
      }}
      className={`absolute top-1/2 grid size-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-night/60 text-2xl ring-1 ring-moon/20 transition-[background-color,transform] duration-150 ease-out hover:bg-moon/15 active:scale-[0.96] ${
        dir < 0 ? 'left-2 sm:left-6' : 'right-2 sm:right-6'
      }`}
    >
      <i className={dir < 0 ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'} aria-hidden />
    </button>
  )
}
