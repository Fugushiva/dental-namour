'use client'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { AppointmentForm } from '@/components/forms/AppointmentForm'

export function ContactContent() {
  const heroRef = useScrollReveal<HTMLElement>()
  const infoRef = useScrollReveal<HTMLDivElement>()
  const formRef = useScrollReveal<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[oklch(18%_0.015_80)] leading-tight tracking-tight">
            Prenons rendez-vous — c&apos;est plus simple qu&apos;il n&apos;y paraît
          </h1>
          <p className="mt-6 text-lg text-[oklch(32%_0.02_80)] leading-relaxed">
            Décrivez-nous brièvement votre besoin, nous vous recontactons sous 24h ouvrées.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Infos pratiques */}
          <div ref={infoRef}>
            <h2 className="font-heading text-2xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
              Informations pratiques
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(96%_0.008_80)] flex items-center justify-center flex-shrink-0">
                  <MapPin
                    size={18}
                    className="text-[oklch(48%_0.08_220)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-medium text-[oklch(18%_0.015_80)]">Adresse</p>
                  <address className="not-italic text-sm text-[oklch(32%_0.02_80)] mt-1">
                    Rue Paul Spaak 3
                    <br />
                    1000 Bruxelles
                    <br />
                    Belgique
                  </address>
                  <p className="text-xs text-[oklch(60%_0.015_80)] mt-1">
                    Quartier Ixelles / Bailli
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(96%_0.008_80)] flex items-center justify-center flex-shrink-0">
                  <Phone
                    size={18}
                    className="text-[oklch(48%_0.08_220)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-medium text-[oklch(18%_0.015_80)]">Téléphone</p>
                  <a
                    href="tel:+3220000000"
                    className="text-sm text-[oklch(48%_0.08_220)] hover:underline mt-1 block focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
                  >
                    +32 (0)2 000 00 00 {/* TODO confirmer numéro */}
                  </a>
                  <p className="text-xs text-[oklch(60%_0.015_80)] mt-1">
                    Du lundi au vendredi pendant les heures d&apos;ouverture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(96%_0.008_80)] flex items-center justify-center flex-shrink-0">
                  <Mail
                    size={18}
                    className="text-[oklch(48%_0.08_220)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-medium text-[oklch(18%_0.015_80)]">Email</p>
                  <a
                    href="mailto:contact@dentalnamour.be"
                    className="text-sm text-[oklch(48%_0.08_220)] hover:underline mt-1 block focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
                  >
                    contact@dentalnamour.be {/* TODO confirmer email */}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[oklch(96%_0.008_80)] flex items-center justify-center flex-shrink-0">
                  <Clock
                    size={18}
                    className="text-[oklch(48%_0.08_220)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="font-medium text-[oklch(18%_0.015_80)]">
                    Horaires {/* TODO confirmer horaires */}
                  </p>
                  <table className="mt-2 text-sm text-[oklch(32%_0.02_80)] w-full">
                    <tbody>
                      <tr>
                        <td className="pr-4 py-0.5">Lundi – Vendredi</td>
                        <td>8h00 – 18h00</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-0.5">Samedi</td>
                        <td>Sur rendez-vous</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-0.5">Dimanche</td>
                        <td>Fermé</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-[oklch(60%_0.015_80)] mt-2">
                    Urgences : contactez-nous par téléphone
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <p className="font-medium text-[oklch(18%_0.015_80)] mb-3">Plan d&apos;accès</p>
              {/* TODO: Replace with optimized static map image */}
              <div className="aspect-video rounded-[0.5rem] bg-[oklch(92%_0.01_80)] flex items-center justify-center border border-[oklch(92%_0.01_80)]">
                <p className="text-[oklch(60%_0.015_80)] text-sm text-center">
                  📍 Rue Paul Spaak 3, 1000 Bruxelles
                  <br />
                  <span className="text-xs">(Carte statique à intégrer)</span>
                </p>
              </div>
              <p className="text-xs text-[oklch(60%_0.015_80)] mt-2">
                Accessible en transports en commun · {/* TODO confirmer transports */}
                Métro / Tram / Bus
              </p>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef}>
            <h2 className="font-heading text-2xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
              Formulaire de prise de rendez-vous
            </h2>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  )
}
