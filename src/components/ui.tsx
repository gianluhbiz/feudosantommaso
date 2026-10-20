import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { buttonClass, type Variant } from './button'

export function ExtLink({
  href,
  variant,
  icon,
  children,
  className = '',
}: {
  href: string
  variant: Variant
  icon?: string
  children: ReactNode
  className?: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={buttonClass(variant, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <i className={`${icon} text-lg`} aria-hidden />}
      {children}
    </a>
  )
}

/** Small uppercase label used above headings. */
export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${className}`}>{children}</p>
}

/** The big italic hour stamp that opens each chapter. */
export function Hour({ hour, label, className = '' }: { hour: string; label: string; className?: string }) {
  return (
    <div className={`flex items-end gap-4 ${className}`}>
      <span className="font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.8] font-light italic tracking-tight">
        {hour}
      </span>
      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] opacity-70">{label}</span>
    </div>
  )
}

/** Fade-and-rise for text blocks entering the viewport. Runs once. */
export function Rise({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'translateY(18px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
