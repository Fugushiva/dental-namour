'use client'
import Link from 'next/link'
import {
  Smile,
  Zap,
  Sparkles,
  Settings,
  Scissors,
  ShieldCheck,
  GitBranch,
  Star,
} from 'lucide-react'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

const services = [
  {
    icon: ShieldCheck,
    title: 'Soins conservateurs',
    description:
      'Détartrage, obturations et prévention pour préserver vos dents le plus longtemps possible.',
  },
  {
    icon: Settings,
    title: 'Endodontie',
    description: 'Traitement des canaux racinaires pour sauver les dents sévèrement atteintes.',
  },
  {
    icon: Star,
    title: 'Implants',
    description:
      'Remplacement durable des dents manquantes par des implants en titane intégrés naturellement.',
  },
  {
    icon: Smile,
    title: 'Prothèses',
    description: 'Couronnes, bridges et prothèses amovibles adaptés à chaque cas clinique.',
  },
  {
    icon: Sparkles,
    title: 'Esthétique',
    description: 'Blanchiment, facettes et remodelage pour un sourire qui vous ressemble.',
  },
  {
    icon: Zap,
    title: 'Dentisterie laser',
    description: 'Traitements précis et moins invasifs grâce aux technologies laser de pointe.',
  },
  {
    icon: Scissors,
    title: 'Chirurgie',
    description:
      'Extractions, greffes et interventions chirurgicales réalisées dans le confort du cabinet.',
  },
  {
    icon: GitBranch,
    title: 'Orthodontie',
    description:
      'Alignement des dents pour les enfants, adolescents et adultes — discret et efficace.',
  },
]

type ServiceItem = (typeof services)[0]

function ServiceCard({ icon: Icon, title, description }: ServiceItem) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="p-5 rounded-[0.75rem] bg-white border border-[oklch(92%_0.01_80)] hover:-translate-y-0.5 transition-transform duration-200"
    >
      <Icon
        size={20}
        className="text-[oklch(48%_0.08_220)] mb-3"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="font-heading text-lg font-semibold text-[oklch(18%_0.015_80)] mb-1">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[oklch(32%_0.02_80)]">{description}</p>
    </div>
  )
}

export function ServicesGrid() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-3 text-center">
            Tous nos soins
          </h2>
          <p className="text-center text-[oklch(32%_0.02_80)] mb-12">
            Un catalogue complet de soins dentaires, pensé pour vous accompagner à chaque étape.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/soins"
            className="inline-flex items-center px-6 py-3 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Découvrir tous nos soins
          </Link>
        </div>
      </div>
    </section>
  )
}
