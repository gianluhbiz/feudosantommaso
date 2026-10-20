import { Frame } from '../../components/Frame'
import { ExtLink, Hour, Rise } from '../../components/ui'
import { photos, whatsapp } from '../../data'
import { Chapter } from './Chapter'

const set = [photos.door, photos.path, photos.driveway, photos.gate]

const notes = [
  'Per gli ospiti di un evento, per le coppie, per chi viaggia in Sicilia',
  'Nella quiete del feudo, a pochi passi dalle sale',
  'Sono solo due: scrivici in anticipo per weekend e date di cerimonia',
]

export function Rooms() {
  return (
    <Chapter id="camere" className="bg-night pt-16 pb-28 text-moon">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:col-span-6">
          <Frame photo={photos.door} set={set} className="col-span-2 aspect-[16/10] rounded-[3px]" />
          <Frame photo={photos.path} set={set} className="aspect-square rounded-[3px]" delay={0.06} />
          <Frame photo={photos.driveway} set={set} className="aspect-square rounded-[3px]" delay={0.12} />
        </div>

        <div className="lg:col-span-6 lg:pt-8">
          <Rise>
            <Hour hour="23:30" label="Camere" />
          </Rise>
          <Rise delay={0.05}>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.02] font-medium text-balance">
              Due camere, per non dover guidare dopo cena.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-moon/80 text-pretty">
              Resti a dormire al feudo e la mattina ti svegli in campagna, con il paesaggio, gli spazi e il silenzio dell’ennese
              tutti per te.
            </p>
            <ul className="mt-8 max-w-lg space-y-3">
              {notes.map((n) => (
                <li key={n} className="flex gap-3 text-moon/85">
                  <i className="ri-moon-clear-line mt-0.5 text-gold" aria-hidden />
                  {n}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ExtLink href={whatsapp.room} variant="light" icon="ri-whatsapp-line">
                Chiedi se c’è una camera libera
              </ExtLink>
            </div>
          </Rise>
        </div>
      </div>
    </Chapter>
  )
}
