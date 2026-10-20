import { Frame } from '../../components/Frame'
import { ExtLink, Rise } from '../../components/ui'
import { contact, photos, whatsapp } from '../../data'
import { Chapter } from './Chapter'

export function Visit() {
  return (
    <Chapter id="dove" className="bg-night-soft pt-24 pb-16 text-moon sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Rise>
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">Prenota</p>
          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.98] font-medium text-balance">
            Scrivici su WhatsApp e ti teniamo il tavolo.
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            <ExtLink href={whatsapp.table} variant="whatsapp" icon="ri-whatsapp-line" className="min-h-14 px-7 text-base">
              Prenota su WhatsApp
            </ExtLink>
            <ExtLink href={contact.phoneHref} variant="ghostLight" icon="ri-phone-line" className="min-h-14 px-7 text-base">
              Chiama {contact.phone}
            </ExtLink>
          </div>
        </Rise>

        <div className="mt-20 grid gap-10 border-t border-moon/10 pt-12 lg:grid-cols-12 lg:gap-16">
          <Rise className="lg:col-span-5">
            <h3 className="font-display text-4xl leading-tight">Come arrivare</h3>
            <p className="mt-4 flex items-start gap-3 text-lg">
              <i className="ri-map-pin-2-line mt-1 text-gold" aria-hidden />
              {contact.address}
            </p>

            <div className="mt-6 rounded-[3px] bg-terra/15 p-5 ring-1 ring-terra/40">
              <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em] text-[#f0a17e] uppercase">
                <i className="ri-error-warning-line text-base" aria-hidden />
                Prima di partire
              </p>
              <p className="mt-2 leading-relaxed text-moon/85">
                Google Maps al momento può indicare un percorso sbagliato. Arrivando da Enna o da Caltanissetta, cerca il cartello
                del feudo prima del bivio, poco prima di Borgo Cascino.
              </p>
              <ol className="mt-4 space-y-2 text-sm text-moon/80">
                <li>
                  <span className="font-display text-base text-gold italic">1.</span> Da Enna prendi la statale 117 bis in direzione
                  Caltanissetta.
                </li>
                <li>
                  <span className="font-display text-base text-gold italic">2.</span> Al km 15 svolta a sinistra al bivio (segnalato
                  da Anas come chiuso al transito).
                </li>
                <li>
                  <span className="font-display text-base text-gold italic">3.</span> Segui la strada interna per circa 2,5 km fino
                  all’indicazione del feudo.
                </li>
              </ol>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <ExtLink href={contact.maps} variant="ghostLight" icon="ri-navigation-line">
                Apri in Google Maps
              </ExtLink>
            </div>
          </Rise>

          <div className="lg:col-span-7">
            <Frame photo={photos.map} className="rounded-[3px] bg-moon ring-1 ring-moon/10" fit="contain" />
            <p className="mt-3 text-sm text-moon/60">Tocca la mappa per ingrandirla.</p>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
