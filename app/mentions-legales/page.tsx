import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du cabinet Dental Clinic Namour conformément au Code de droit économique belge.',
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-prose mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
          Mentions légales
        </h1>

        <div className="prose max-w-none text-[oklch(32%_0.02_80)] space-y-8">
          <section aria-labelledby="editeur">
            <h2
              id="editeur"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              1. Éditeur du site
            </h2>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-medium inline">Dénomination sociale :</dt>{' '}
                <dd className="inline">
                  Dental Clinic Namour (nom commercial) — Namour Mélanie (entité juridique)
                </dd>
              </div>
              <div>
                <dt className="font-medium inline">Numéro BCE :</dt>{' '}
                <dd className="inline">BE 0562.994.037</dd>
              </div>
              <div>
                <dt className="font-medium inline">Forme juridique :</dt>{' '}
                <dd className="inline">Entreprise individuelle</dd>
              </div>
              <div>
                <dt className="font-medium inline">Adresse :</dt>{' '}
                <dd className="inline">Rue Paul Spaak 3, 1000 Bruxelles, Belgique</dd>
              </div>
              <div>
                <dt className="font-medium inline">Email :</dt>{' '}
                <dd className="inline">
                  <a
                    href="mailto:contact@dentalnamour.be"
                    className="text-[oklch(48%_0.08_220)] hover:underline"
                  >
                    contact@dentalnamour.be
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium inline">TVA :</dt>{' '}
                <dd className="inline">Exonéré — prestations médicales art. 44 §1, 1° CTVA</dd>
              </div>
              <div>
                <dt className="font-medium inline">Responsable de la publication :</dt>{' '}
                <dd className="inline">Mélanie Namour</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="hebergeur">
            <h2
              id="hebergeur"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              2. Hébergeur
            </h2>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="font-medium inline">Société :</dt>{' '}
                <dd className="inline">Vercel Inc.</dd>
              </div>
              <div>
                <dt className="font-medium inline">Adresse :</dt>{' '}
                <dd className="inline">340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</dd>
              </div>
              <div>
                <dt className="font-medium inline">Site :</dt>{' '}
                <dd className="inline">
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[oklch(48%_0.08_220)] hover:underline"
                  >
                    vercel.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="propriete">
            <h2
              id="propriete"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm">
              L&apos;ensemble des contenus de ce site (textes, images, structure) est protégé par le
              droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans
              autorisation préalable écrite de Namour Mélanie.
            </p>
          </section>

          <section aria-labelledby="responsabilite">
            <h2
              id="responsabilite"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              4. Limitation de responsabilité
            </h2>
            <p className="text-sm">
              Les informations publiées sur ce site ont un caractère informatif et ne constituent
              pas un avis médical. Consultez un professionnel de santé pour tout diagnostic ou
              traitement.
            </p>
          </section>

          <section aria-labelledby="apd">
            <h2
              id="apd"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              5. Protection des données
            </h2>
            <p className="text-sm">
              Pour toute question relative à vos données personnelles, consultez notre{' '}
              <a
                href="/politique-confidentialite"
                className="text-[oklch(48%_0.08_220)] hover:underline"
              >
                politique de confidentialité
              </a>
              . L&apos;autorité de contrôle compétente est l&apos;APD — Autorité de protection des
              données, Rue de la Presse 35, 1000 Bruxelles —{' '}
              <a
                href="https://www.autoriteprotectiondonnees.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(48%_0.08_220)] hover:underline"
              >
                autoriteprotectiondonnees.be
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="droit">
            <h2
              id="droit"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              6. Droit applicable
            </h2>
            <p className="text-sm">
              Ce site est régi par le droit belge. En cas de litige, les tribunaux de Bruxelles sont
              seuls compétents.
            </p>
          </section>

          <p className="text-xs text-[oklch(60%_0.015_80)]">Dernière mise à jour : mai 2026</p>
        </div>
      </div>
    </section>
  )
}
