import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Footer } from '../components/Footer'
import { useScene } from '../components/scene-context'
import { buttonClass } from '../components/button'
import { ExtLink, Eyebrow, Rise } from '../components/ui'
import { contact, kitchen, whatsapp, wines, type MenuSection } from '../data'

const ease = [0.23, 1, 0.32, 1] as const

const tabs = [
  { id: 'cucina', label: 'Cucina', sections: kitchen },
  { id: 'vini', label: 'Carta dei vini', sections: wines },
] as const

type TabId = (typeof tabs)[number]['id']

function scrollToId(id: string) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}

function Group({ section, index, onActive }: { section: MenuSection; index: number; onActive: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '-35% 0px -60% 0px' })

  useEffect(() => {
    if (inView) onActive(section.id)
  }, [inView, onActive, section.id])

  return (
    <section id={section.id} ref={ref} aria-labelledby={`${section.id}-title`} className="scroll-mt-40 lg:scroll-mt-28">
      <div className="mb-5 aspect-[16/8] overflow-hidden rounded-[3px] lg:hidden">
        <img src={section.photo.src} alt={section.photo.alt} loading="lazy" className="size-full object-cover" />
      </div>
      <div className="flex items-baseline gap-4 border-b border-ink pb-3">
        <span className="font-display text-xl text-terra italic tabular-nums">{String(index + 1).padStart(2, '0')}</span>
        <h2 id={`${section.id}-title`} className="font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none font-medium">
          {section.title}
        </h2>
      </div>
      <ul>
        {section.items.map((item, i) => (
          <li key={`${item.name}-${i}`} className="border-b border-ink/10 py-4">
            <div className="flex items-baseline gap-3">
              <h3 className="font-display text-[1.45rem] leading-tight sm:text-[1.6rem]">{item.name}</h3>
              <span aria-hidden className="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-ink/30" />
              <span className="shrink-0 font-medium tabular-nums">€ {item.price}</span>
            </div>
            {item.note && <p className="mt-1 max-w-[46ch] text-[0.95rem] text-ink-soft">{item.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Board({ sections }: { sections: readonly MenuSection[] }) {
  const [active, setActive] = useState(sections[0].id)
  const reduce = useReducedMotion()
  const chips = useRef<HTMLDivElement>(null)
  const current = sections.find((s) => s.id === active) ?? sections[0]

  // Keep the active chip visible in the phone's horizontal category bar.
  useEffect(() => {
    const bar = chips.current
    const chip = bar?.querySelector<HTMLElement>(`[data-chip="${active}"]`)
    if (bar && chip) bar.scrollTo({ left: chip.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' })
  }, [active, reduce])

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      <aside className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <nav aria-label="Sezioni del menu">
            <ol className="space-y-0.5">
              {sections.map((s, i) => {
                const on = s.id === active
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => scrollToId(s.id)}
                      aria-current={on ? 'true' : undefined}
                      className={`group flex w-full cursor-pointer items-baseline gap-4 py-1.5 text-left transition-colors duration-200 ${
                        on ? 'text-ink' : 'text-ink/55 hover:text-ink/85'
                      }`}
                    >
                      <span className="w-6 font-display text-base italic tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-2xl">{s.title}</span>
                      <span
                        aria-hidden
                        className={`ml-auto h-px bg-terra transition-[width] duration-300 ease-out-strong ${on ? 'w-12' : 'w-0'}`}
                      />
                    </button>
                  </li>
                )
              })}
            </ol>
          </nav>
          <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-[3px] bg-sand">
            <AnimatePresence initial={false}>
              <motion.img
                key={current.photo.src}
                src={current.photo.src}
                alt={current.photo.alt}
                className="absolute inset-0 size-full object-cover"
                initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(1.04)' }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              />
            </AnimatePresence>
          </div>
        </div>
      </aside>

      <div className="min-w-0 lg:col-span-7">
        <div
          ref={chips}
          className="sticky top-[4.75rem] z-30 -mx-4 mb-8 flex gap-2 overflow-x-auto bg-cream/90 px-4 py-3 backdrop-blur-md [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              data-chip={s.id}
              onClick={() => scrollToId(s.id)}
              className={`min-h-10 shrink-0 cursor-pointer rounded-full px-4 text-sm transition-colors duration-200 ${
                s.id === active ? 'bg-ink text-paper' : 'ring-1 ring-ink/20'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
        <div className="space-y-16">
          {sections.map((s, i) => (
            <Group key={s.id} section={s} index={i} onActive={setActive} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Menu() {
  const { setChapterId } = useScene()
  const [tab, setTab] = useState<TabId>('cucina')
  const boardTop = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => setChapterId(null), [setChapterId])

  const pick = (id: TabId) => {
    setTab(id)
    const top = boardTop.current
    if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ behavior: 'instant' })
  }

  const sections = tabs.find((t) => t.id === tab)!.sections

  return (
    <main className="bg-cream">
      <section className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 sm:pt-40">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Rise className="lg:col-span-7">
            <Eyebrow className="text-terra">Ristorante · Cucina dell’entroterra ennese</Eyebrow>
            <h1 className="mt-4 font-display text-[clamp(4.5rem,13vw,11rem)] leading-[0.82] font-light italic tracking-tight">
              Il Menu
            </h1>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5 lg:pb-3">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
              Pasta fresca, carne alla brace, dolci della casa e una carta con più di cinquanta etichette, in gran parte siciliane. Hai
              allergie o segui una dieta? Diccelo quando prenoti.
            </p>
            <div ref={boardTop} className="mt-7 scroll-mt-24">
              <div role="tablist" aria-label="Menu" className="inline-flex rounded-full bg-paper p-1 ring-1 ring-ink/10">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    aria-controls="menu-board"
                    onClick={() => pick(t.id)}
                    className={`relative min-h-11 cursor-pointer rounded-full px-5 text-sm font-medium transition-colors duration-200 ${
                      tab === t.id ? 'text-paper' : 'text-ink hover:text-ink/70'
                    }`}
                  >
                    {tab === t.id && (
                      <motion.span
                        layoutId="menu-tab"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.4, bounce: 0.15 }}
                      />
                    )}
                    <span className="relative">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </Rise>
        </div>
      </section>

      <section id="menu-board" role="tabpanel" aria-label={tab === 'cucina' ? 'Cucina' : 'Carta dei vini'} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <Board sections={sections} />
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="bg-night px-4 py-20 text-moon sm:px-6 sm:py-28">
        <Rise className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1] font-medium text-balance">
            Hai già scelto? Ti teniamo il tavolo.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ExtLink href={whatsapp.table} variant="whatsapp" icon="ri-whatsapp-line" className="min-h-14 px-7 text-base">
              Prenota su WhatsApp
            </ExtLink>
            <ExtLink href={contact.phoneHref} variant="ghostLight" icon="ri-phone-line" className="min-h-14 px-7 text-base">
              Chiama {contact.phone}
            </ExtLink>
            <Link to="/#eventi" className={buttonClass('ghostLight', 'min-h-14 px-7 text-base')}>
              Organizzi un evento?
              <i className="ri-arrow-right-line" aria-hidden />
            </Link>
          </div>
        </Rise>
      </section>
      <Footer />
    </main>
  )
}
