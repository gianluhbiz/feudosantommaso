import { motion, useReducedMotion } from 'framer-motion'
import type { Photo } from '../data'
import { useLightbox } from './lightbox-context'

type FrameProps = {
  photo: Photo
  /** Photos the lightbox can page through, starting from this one. */
  set?: Photo[]
  className?: string
  fit?: 'cover' | 'contain'
  caption?: string
  eager?: boolean
  delay?: number
}

const ease = [0.23, 1, 0.32, 1] as const

/** A photo that unveils from the bottom once, then opens the lightbox on click. */
export function Frame({ photo, set, className = '', fit = 'cover', caption, eager, delay = 0 }: FrameProps) {
  const reduce = useReducedMotion()
  const { open } = useLightbox()
  const gallery = set ?? [photo]
  const index = Math.max(0, gallery.indexOf(photo))

  return (
    <motion.figure
      className={`group relative overflow-hidden bg-stone/20 ${className}`}
      initial={reduce ? { opacity: 0 } : { clipPath: 'inset(14% 0% 0% 0%)', opacity: 0 }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      <button
        type="button"
        onClick={() => open(gallery, index)}
        className="block size-full cursor-zoom-in"
        aria-label={`Ingrandisci: ${photo.alt}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`size-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} transition-transform duration-700 ease-out-strong group-hover:scale-[1.03]`}
        />
      </button>
      {caption && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-10 text-sm text-white">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
