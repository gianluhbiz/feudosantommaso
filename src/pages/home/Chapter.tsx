import { useInView } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { useScene } from '../../components/scene-context'

/**
 * A landing-page section that tells the scene which hour is on screen.
 * `chapterId` null marks the hero, which has no hour.
 */
export function Chapter({
  id,
  chapterId = id ?? null,
  className = '',
  children,
}: {
  id?: string
  chapterId?: string | null
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '-50% 0px -50% 0px' })
  const { setChapterId } = useScene()

  useEffect(() => {
    if (inView) setChapterId(chapterId)
  }, [inView, chapterId, setChapterId])

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  )
}

/** Gradient strip that carries the page colour from one hour to the next. */
export function Dusk({ className, children }: { className: string; children?: ReactNode }) {
  return (
    <div aria-hidden={!children} className={`relative flex items-end justify-center px-5 ${className}`}>
      {children}
    </div>
  )
}
