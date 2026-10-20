import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { whatsapp } from '../data'
import { useScene } from './scene-context'
import { useSectionNav } from './useSectionNav'

const links = [
  { id: 'ristorante', label: 'Ristorante' },
  { id: 'eventi', label: 'Eventi' },
  { id: 'camere', label: 'Camere' },
  { id: 'dove', label: 'Dove siamo' },
]

export function Header() {
  const { chapter } = useScene()
  const { pathname } = useLocation()
  const go = useSectionNav()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  const night = chapter?.night ?? false
  const onMenu = pathname === '/menu'

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Principale"
        className={`pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 transition-[background-color,color,box-shadow] duration-500 ease-out ${
          night ? 'text-moon' : 'text-ink'
        } ${
          scrolled
            ? night
              ? 'bg-night/75 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] ring-1 ring-moon/10 backdrop-blur-md'
              : 'bg-paper/80 shadow-[0_10px_30px_-18px_rgba(33,26,20,0.45)] ring-1 ring-ink/5 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <Link to="/" aria-label="Feudo San Tommaso, torna all'inizio" className="flex shrink-0 items-center">
          <img
            src="/img/logo.png"
            alt=""
            width={512}
            height={312}
            className={`h-10 w-auto transition-[filter] duration-500 sm:h-11 ${night ? '' : 'brightness-0'}`}
          />
        </Link>

        <ul className="hidden items-center gap-1 text-sm lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(l.id)
                }}
                className={`rounded-full px-4 py-2.5 transition-colors duration-150 ${
                  chapter?.id === l.id ? (night ? 'bg-moon/10' : 'bg-ink/5') : night ? 'hover:bg-moon/10' : 'hover:bg-ink/5'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/menu"
              aria-current={onMenu ? 'page' : undefined}
              className={`rounded-full px-4 py-2.5 transition-colors duration-150 ${
                onMenu ? 'bg-ink/5 font-medium' : night ? 'hover:bg-moon/10' : 'hover:bg-ink/5'
              }`}
            >
              Menu e vini
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1.5">
          {!onMenu && (
            <Link
              to="/menu"
              className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium lg:hidden ${
                night ? 'ring-1 ring-moon/30' : 'ring-1 ring-ink/20'
              }`}
            >
              Menu
            </Link>
          )}
          <a
            href={whatsapp.table}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 cursor-pointer items-center gap-2 rounded-full bg-terra px-5 lg:inline-flex text-sm font-medium text-paper transition-[background-color,transform] duration-150 ease-out hover:bg-terra-deep active:scale-[0.97]"
          >
            <i className="ri-whatsapp-line text-base" aria-hidden />
            Prenota
          </a>
        </div>
      </nav>
    </header>
  )
}
