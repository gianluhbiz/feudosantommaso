import { Link } from 'react-router'
import { contact } from '../data'

export function Footer() {
  return (
    <footer className="bg-night-soft px-4 pt-12 pb-28 text-moon/70 sm:px-6 lg:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-moon/10 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <img src="/img/logo.png" alt="Feudo San Tommaso, agriturismo dal 1930" width={512} height={312} className="h-16 w-auto" loading="lazy" />
          <p className="mt-4 text-sm">
            {contact.address} · <a href={contact.phoneHref} className="underline-offset-4 hover:underline">{contact.phone}</a>
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
          <div className="flex items-center gap-2">
            <Link to="/menu" className="rounded-full px-3 py-2 hover:text-moon">
              Menu e vini
            </Link>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-11 place-items-center rounded-full text-xl ring-1 ring-moon/15 transition-colors duration-150 hover:bg-moon/10 hover:text-moon"
            >
              <i className="ri-instagram-line" aria-hidden />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid size-11 place-items-center rounded-full text-xl ring-1 ring-moon/15 transition-colors duration-150 hover:bg-moon/10 hover:text-moon"
            >
              <i className="ri-facebook-circle-line" aria-hidden />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Feudo San Tommaso · P.IVA {contact.vat}</p>
          <p>
            Developed and Designed by{' '}
            <a
              href="https://gianluh.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-moon underline underline-offset-4"
            >
              Gianluca De Maio
              <i className="ri-external-link-line" aria-hidden />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
