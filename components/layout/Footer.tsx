import Link from 'next/link'
import { CookieReopenButton } from './CookieReopenButton'

export function Footer() {
  return (
    <footer className="bg-[oklch(18%_0.015_80)] text-[oklch(92%_0.01_80)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-heading font-semibold text-lg text-white mb-2">
              Dental Clinic Namour
            </p>
            <address className="not-italic text-sm leading-relaxed text-[oklch(60%_0.015_80)]">
              Rue Paul Spaak 3<br />
              1000 Bruxelles
              <br />
              <a
                href="tel:+3200000000"
                className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
              >
                {/* TODO confirmer numéro */}
                +32 (0)2 000 00 00
              </a>
            </address>
          </div>

          {/* Horaires */}
          <div>
            <p className="font-medium text-white mb-2">Horaires</p>
            <p className="text-sm text-[oklch(60%_0.015_80)]">
              {/* TODO confirmer horaires */}
              Lundi–Vendredi : 8h00–18h00
              <br />
              Samedi : Sur rendez-vous
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-medium text-white mb-2">Navigation</p>
            <nav aria-label="Navigation secondaire">
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href="/contact"
                    className="text-[oklch(60%_0.015_80)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
                  >
                    Prendre rendez-vous
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentions-legales"
                    className="text-[oklch(60%_0.015_80)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politique-confidentialite"
                    className="text-[oklch(60%_0.015_80)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-[oklch(60%_0.015_80)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded"
                  >
                    Politique de cookies
                  </Link>
                </li>
                <li>
                  <CookieReopenButton />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[oklch(32%_0.02_80)] text-xs text-[oklch(60%_0.015_80)] flex flex-col sm:flex-row justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} Namour Mélanie — BCE BE0562994037 — Dental Clinic
            Namour
          </p>
          <p>Hébergé par Vercel Inc.</p>
        </div>
      </div>
    </footer>
  )
}
