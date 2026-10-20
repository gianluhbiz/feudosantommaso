import { Link } from 'react-router'
import { Frame } from '../../components/Frame'
import { buttonClass } from '../../components/button'
import { ExtLink, Hour, Rise } from '../../components/ui'
import { photos, whatsapp } from '../../data'
import { Chapter } from './Chapter'

const picks = [
  { name: 'Antipasto del feudo', price: '15' },
  { name: 'Pasta fresca al ragù della nonna', price: '12' },
  { name: 'Ravioli di burrata al ragù bianco', price: '15' },
  { name: 'Stinco di maiale con patate al forno', price: '15' },
  { name: 'Cannolo scomposto con ricotta nostrana', price: '5' },
]

const gallery = [
  photos.ravioli,
  photos.redTable,
  photos.risotto,
  photos.tableDetail,
  photos.plateGlass,
  photos.crisp,
  photos.centerpiece,
  photos.pastaRed,
]

function Quote({ text, name, source }: { text: string; name: string; source: string }) {
  return (
    <Rise className="break-inside-avoid">
      <figure className="rounded-[3px] bg-paper p-4 ring-1 ring-ink/5 sm:p-6">
        <i className="ri-double-quotes-l text-2xl text-terra" aria-hidden />
        <blockquote className="mt-2 font-display text-lg leading-snug text-pretty sm:text-[1.45rem]">{text}</blockquote>
        <figcaption className="mt-4 text-sm text-ink-soft">
          {name} · {source}
        </figcaption>
      </figure>
    </Rise>
  )
}

function MenuCard({ className = '' }: { className?: string }) {
  return (
    <Rise className={`break-inside-avoid ${className}`}>
      <div className="rounded-[3px] bg-paper p-6 ring-1 ring-ink/5">
        <p className="text-xs font-semibold tracking-[0.22em] text-terra uppercase">Dal menu</p>
        <ul className="mt-3 divide-y divide-ink/10">
          {picks.map((d) => (
            <li key={d.name} className="flex items-baseline justify-between gap-4 py-2.5">
              <span className="font-display text-lg leading-tight">{d.name}</span>
              <span className="shrink-0 text-sm text-ink-soft">€ {d.price}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/menu"
          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-terra underline-offset-4 hover:underline"
        >
          Tutto il menu
          <i className="ri-arrow-right-up-line" aria-hidden />
        </Link>
      </div>
    </Rise>
  )
}

export function Restaurant() {
  return (
    <Chapter id="ristorante" className="bg-cream pt-16 pb-16 sm:pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Rise>
              <Hour hour="12:30" label="Pranzo" className="text-ink" />
            </Rise>
            <Rise delay={0.05}>
              <h2 className="mt-8 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.02] font-medium text-balance">
                Si comincia con l’antipasto del feudo.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
                Lo chef sceglie i prodotti tipici della zona e li porta in tavola in tanti piccoli piatti. Dopo arrivano la pasta
                fresca, la carne alla brace e il cannolo con la ricotta nostrana.
              </p>
            </Rise>

            <Rise delay={0.1}>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExtLink href={whatsapp.table} variant="primary" icon="ri-whatsapp-line">
                  Prenota un tavolo
                </ExtLink>
                <Link to="/menu" className={buttonClass('ghostDark')}>
                  Menu completo e vini
                  <i className="ri-arrow-right-line" aria-hidden />
                </Link>
              </div>
              <MenuCard className="mt-8 lg:hidden" />
              <p className="mt-5 max-w-md text-sm text-ink-soft">
                Vegani, vegetariani o celiaci? Scrivilo quando prenoti e la cucina si organizza.
              </p>
            </Rise>
          </div>
        </div>

        <div className="columns-2 gap-3 sm:gap-4 lg:col-span-7 [&>*]:mb-3 sm:[&>*]:mb-4">
          <Frame photo={photos.ravioli} set={gallery} className="rounded-[3px]" />
          <Quote
            text="Antipasto del feudo composto da una decina di portate, gran parte preparate sul momento."
            name="Ugo P."
            source="Tripadvisor"
          />
          <MenuCard className="hidden lg:block" />
          <Frame photo={photos.redTable} set={gallery} className="aspect-[4/5] rounded-[3px]" />
          <Frame photo={photos.crisp} set={gallery} className="rounded-[3px]" />
          <Frame photo={photos.risotto} set={gallery} className="rounded-[3px]" />
          <Frame photo={photos.tableDetail} set={gallery} className="aspect-square rounded-[3px]" />
          <Quote text="Consiglio lo stinco di maiale, cotto davvero a puntino. Prezzi onesti." name="Raul" source="Google" />
          <Frame photo={photos.plateGlass} set={gallery} className="rounded-[3px]" />
          <Frame photo={photos.centerpiece} set={gallery} className="aspect-[4/5] rounded-[3px]" />
          <Frame photo={photos.pastaRed} set={gallery} className="rounded-[3px]" />
        </div>
      </div>
    </Chapter>
  )
}
