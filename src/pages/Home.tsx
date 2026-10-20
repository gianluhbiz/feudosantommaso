import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { Footer } from '../components/Footer'
import { Rise } from '../components/ui'
import { Dusk } from './home/Chapter'
import { Courtyard, Sunset } from './home/Evening'
import { Events } from './home/Events'
import { Hero } from './home/Hero'
import { Restaurant } from './home/Restaurant'
import { Rooms } from './home/Rooms'
import { Visit } from './home/Visit'

export default function Home() {
  const { hash } = useLocation()
  const mounted = useRef(false)

  // Arriving from another page with a #section: jump there.
  // Already here: glide, unless the reader prefers reduced motion.
  useEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null
    if (el) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: mounted.current && !reduce ? 'smooth' : 'instant' })
    }
    mounted.current = true
  }, [hash])

  return (
    <main>
      <Hero />
      <Restaurant />
      <Dusk className="h-[12vh] bg-gradient-to-b from-cream to-sand" />
      <Events />
      <Dusk className="h-[70vh] bg-[linear-gradient(to_bottom,var(--color-sand)_0%,var(--color-sunset)_45%,#7a4433_72%,var(--color-dusk)_100%)] pb-16">
        <Rise>
          <p className="max-w-xl text-center font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-tight text-moon italic text-balance">
            Poi il sole scende sulle colline.
          </p>
        </Rise>
      </Dusk>
      <Sunset />
      <Dusk className="h-[50vh] bg-gradient-to-b from-dusk to-night pb-14">
        <Rise>
          <p className="max-w-xl text-center font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-tight text-moon/90 italic text-balance">
            E nel cortile si accendono le luci.
          </p>
        </Rise>
      </Dusk>
      <Courtyard />
      <Rooms />
      <Visit />
      <Footer />
    </main>
  )
}
