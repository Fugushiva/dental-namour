import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de traitement des données personnelles du cabinet Dental Clinic Namour, conforme au RGPD (UE 2016/679).',
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-prose mx-auto">
        <h1 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-[oklch(60%_0.015_80)] mb-8">
          Conforme au Règlement (UE) 2016/679 — RGPD
        </p>

        <div className="space-y-8 text-[oklch(32%_0.02_80)]">
          <section aria-labelledby="responsable">
            <h2
              id="responsable"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              1. Responsable du traitement
            </h2>
            <p className="text-sm">
              Namour Mélanie (BCE BE 0562.994.037) — Dental Clinic Namour
              <br />
              Rue Paul Spaak 3, 1000 Bruxelles
              <br />
              Email :{' '}
              <a
                href="mailto:contact@dentalnamour.be"
                className="text-[oklch(48%_0.08_220)] hover:underline"
              >
                contact@dentalnamour.be
              </a>
            </p>
          </section>

          <section aria-labelledby="donnees">
            <h2
              id="donnees"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              2. Données collectées
            </h2>
            <p className="text-sm mb-2">Via le formulaire de contact :</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Motif du rendez-vous</li>
              <li>Message libre</li>
              <li>Créneau souhaité (indicatif)</li>
            </ul>
            <p className="text-sm mt-2">Aucune donnée de santé n&apos;est collectée via ce site.</p>
          </section>

          <section aria-labelledby="finalites">
            <h2
              id="finalites"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              3. Finalités du traitement
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Gestion et traitement des demandes de rendez-vous</li>
              <li>Communication préalable à la consultation</li>
            </ul>
          </section>

          <section aria-labelledby="base-legale">
            <h2
              id="base-legale"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              4. Base légale
            </h2>
            <p className="text-sm">
              Le traitement est fondé sur votre consentement explicite (art. 6.1.a RGPD), exprimé
              via la case à cocher du formulaire. Ce consentement peut être retiré à tout moment
              sans incidence sur les traitements antérieurs.
            </p>
          </section>

          <section aria-labelledby="duree">
            <h2
              id="duree"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              5. Durée de conservation
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Demandes de rendez-vous non concrétisées : 12 mois maximum</li>
              <li>
                Dossiers patients (après consultation) : conservés selon les obligations légales du
                secteur médical (30 ans)
              </li>
            </ul>
          </section>

          <section aria-labelledby="destinataires">
            <h2
              id="destinataires"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              6. Destinataires des données
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>L&apos;équipe du cabinet Dental Clinic Namour (accès limité aux praticiens)</li>
              <li>Vercel Inc. (hébergeur) — voir section 10</li>
              <li>
                Service de messagerie transactionnel (Resend) — utilisé pour l&apos;acheminement de
                vos demandes
              </li>
            </ul>
          </section>

          <section aria-labelledby="droits">
            <h2
              id="droits"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              7. Vos droits
            </h2>
            <p className="text-sm mb-2">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retrait du consentement à tout moment</li>
            </ul>
          </section>

          <section aria-labelledby="contact-rgpd">
            <h2
              id="contact-rgpd"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              8. Exercer vos droits
            </h2>
            <p className="text-sm">
              Pour exercer vos droits, contactez-nous par email à{' '}
              <a
                href="mailto:contact@dentalnamour.be"
                className="text-[oklch(48%_0.08_220)] hover:underline"
              >
                contact@dentalnamour.be
              </a>{' '}
              en indiquant clairement votre demande. Nous nous engageons à y répondre dans un délai
              de 30 jours.
            </p>
          </section>

          <section aria-labelledby="reclamation">
            <h2
              id="reclamation"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              9. Droit de réclamation
            </h2>
            <p className="text-sm">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              plainte auprès de l&apos;APD — Autorité de protection des données :
              <br />
              Rue de la Presse 35, 1000 Bruxelles —{' '}
              <a
                href="https://www.autoriteprotectiondonnees.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(48%_0.08_220)] hover:underline"
              >
                autoriteprotectiondonnees.be
              </a>
            </p>
          </section>

          <section aria-labelledby="transferts">
            <h2
              id="transferts"
              className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-3"
            >
              10. Transferts hors Union européenne
            </h2>
            <p className="text-sm">
              L&apos;hébergeur Vercel Inc. est basé aux États-Unis. Les transferts de données vers
              les États-Unis sont encadrés par le EU-US Data Privacy Framework (décision
              d&apos;adéquation de la Commission européenne du 10 juillet 2023). Resend Inc.
              (service de messagerie) est également soumis à des garanties contractuelles adéquates.
            </p>
          </section>

          <p className="text-xs text-[oklch(60%_0.015_80)]">Dernière mise à jour : mai 2026</p>
        </div>
      </div>
    </section>
  )
}
