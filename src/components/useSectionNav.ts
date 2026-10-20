import { useLocation, useNavigate } from 'react-router'

/** Scroll to a landing-page section, from any route. */
export function useSectionNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (id: string) => {
    if (pathname === '/') {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
      history.replaceState(null, '', `#${id}`)
    } else {
      navigate(`/#${id}`)
    }
  }
}
