'use client'

export function CookiesPageContent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-prose mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
          Politique de gestion des cookies
        </h1>

        <div className="space-y-8 text-[oklch(32%_0.02_80)]">
          <section aria-labelledby="qu-est-ce">
            <h2
              id="qu-est-ce"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              Qu&apos;est-ce qu&apos;un cookie ?
            </h2>
            <p className="text-sm leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite
              sur notre site. Il permet de mémoriser des informations (comme vos préférences de
              navigation) pour améliorer votre expérience.
            </p>
          </section>

          <section aria-labelledby="categories">
            <h2
              id="categories"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              Catégories de cookies utilisés
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[oklch(96%_0.008_80)]">
                    <th className="text-left p-3 border border-[oklch(92%_0.01_80)] font-medium text-[oklch(18%_0.015_80)]">
                      Catégorie
                    </th>
                    <th className="text-left p-3 border border-[oklch(92%_0.01_80)] font-medium text-[oklch(18%_0.015_80)]">
                      Finalité
                    </th>
                    <th className="text-left p-3 border border-[oklch(92%_0.01_80)] font-medium text-[oklch(18%_0.015_80)]">
                      Durée
                    </th>
                    <th className="text-left p-3 border border-[oklch(92%_0.01_80)] font-medium text-[oklch(18%_0.015_80)]">
                      Tiers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[oklch(92%_0.01_80)] font-medium">
                      Strictement nécessaires
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">
                      Mémorisation de vos préférences de consentement aux cookies
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">13 mois</td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">Aucun (localStorage)</td>
                  </tr>
                  <tr className="bg-[oklch(98%_0.005_80)]">
                    <td className="p-3 border border-[oklch(92%_0.01_80)] font-medium">
                      Analytiques
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">
                      Mesure d&apos;audience (si activés). Actuellement désactivés.
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">Jusqu&apos;à 13 mois</td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">
                      Vercel Analytics (si consenti)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[oklch(92%_0.01_80)] font-medium">
                      Marketing
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">
                      Publicité ciblée. Actuellement désactivés — non utilisés.
                    </td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">—</td>
                    <td className="p-3 border border-[oklch(92%_0.01_80)]">Aucun</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="gestion">
            <h2
              id="gestion"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              Gérer vos préférences
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur le
              bouton ci-dessous. Votre choix sera mémorisé pendant 13 mois.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('hermes:open-cookie-banner'))}
              className="px-5 py-2.5 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] text-sm font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Gérer mes cookies
            </button>
          </section>

          <section aria-labelledby="refus">
            <h2
              id="refus"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              Refuser les cookies via votre navigateur
            </h2>
            <p className="text-sm leading-relaxed">
              Vous pouvez également configurer votre navigateur pour refuser ou supprimer les
              cookies. Consultez l&apos;aide de votre navigateur pour plus d&apos;informations.
              Notez que certaines fonctionnalités du site pourraient être affectées.
            </p>
          </section>

          <p className="text-xs text-[oklch(60%_0.015_80)]">Dernière mise à jour : mai 2026</p>
        </div>
      </div>
    </section>
  )
}
