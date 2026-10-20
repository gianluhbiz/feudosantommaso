import { Frame } from '../../components/Frame'
import { ExtLink, Hour, Rise } from '../../components/ui'
import { contact, photos, whatsapp } from '../../data'
import { Chapter } from './Chapter'

const spaces = [
  { k: '2', v: 'sale ricevimenti' },
  { k: 'Giardini', v: 'e cortile in pietra' },
  { k: 'Cappella', v: 'e spazi per il rito civile' },
  { k: 'Suite', v: 'nuziale per gli sposi' },
]

const occasions = ['Matrimoni', 'Battesimi', 'Lauree', 'Cerimonie', 'Cene aziendali', 'Feste private']

// Bento layout: [photo, grid classes]
const board = [
  [photos.vault, 'col-span-2 row-span-2 lg:col-span-6'],
  [photos.greenFlowers, 'lg:col-span-3'],
  [photos.sweets, 'lg:col-span-3'],
  [photos.archHall, 'col-span-2 lg:col-span-6'],
  [photos.greenLong, 'lg:col-span-4'],
  [photos.pastries, 'lg:col-span-4'],
  [photos.archDoor, 'col-span-2 lg:col-span-4'],
  [photos.greenVault, 'lg:col-span-3'],
  [photos.longHall, 'lg:col-span-5'],
  [photos.favours, 'col-span-2 lg:col-span-4'],
] as const

const set = board.map(([p]) => p)

export function Events() {
  return (
    <Chapter id="eventi" className="bg-sand pt-10 pb-10 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Rise>
              <Hour hour="16:00" label="Ricevimenti" />
            </Rise>
            <Rise delay={0.05}>
              <h2 className="mt-8 font-display text-[clamp(2.3rem,4.6vw,4rem)] leading-[1] font-medium text-balance">
                Due sale, i giardini e una cappella per il vostro ricevimento.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                Costruite l’evento su misura: numero di ospiti, allestimento, menu. La cucina segue la linea tradizionale e
                mediterranea e prepara piatti per ospiti vegetariani, vegani, celiaci, diabetici e ipertesi.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Occasioni">
                {occasions.map((o) => (
                  <li key={o} className="rounded-full px-3.5 py-1.5 text-sm ring-1 ring-ink/20">
                    {o}
                  </li>
                ))}
              </ul>
            </Rise>
          </div>

          <Rise delay={0.1} className="lg:col-span-5 lg:pt-6">
            <dl className="grid grid-cols-2 border-t border-l border-ink/15">
              {spaces.map((s) => (
                <div key={s.k} className="border-r border-b border-ink/15 p-5">
                  <dt className="font-display text-3xl leading-none italic">{s.k}</dt>
                  <dd className="mt-2 text-sm text-ink-soft">{s.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 flex items-center gap-2 text-sm text-ink-soft">
              <i className="ri-award-line text-lg text-terra" aria-hidden />
              Premiato ai Wedding Awards di Matrimonio.com
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExtLink href={whatsapp.event} variant="primary" icon="ri-whatsapp-line">
                Chiedi una data
              </ExtLink>
              <ExtLink href={contact.phoneHref} variant="ghostDark" icon="ri-phone-line">
                {contact.phone}
              </ExtLink>
            </div>
          </Rise>
        </div>

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-2.5 sm:auto-rows-[220px] sm:gap-3 lg:mt-20 lg:grid-cols-12 lg:auto-rows-[250px]">
          {board.map(([photo, cls], i) => (
            <Frame key={photo.src} photo={photo} set={set} className={`rounded-[3px] ${cls}`} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
