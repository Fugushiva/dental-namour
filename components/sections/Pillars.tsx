'use client'
import { Heart, Shield, Zap, Clock } from 'lucide-react'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

const pillars = [
  {
    icon: Heart,
    title: 'Approche familiale',
    description:
      'Trois générations de dentistes sous un même toit. Ici, chaque patient fait partie de la famille.',
    delay: 0,
  },
  {
    icon: Shield,
    title: 'Patients anxieux bienvenus',
    description: "Nous prenons le temps d'expliquer chaque geste. Votre rythme est notre priorité.",
    delay: 100,
  },
  {
    icon: Zap,
    title: 'Équipement moderne',
    description:
      'Dentisterie laser, imagerie numérique, matériaux de pointe — le meilleur pour vos soins.',
    delay: 200,
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description:
      'Urgences prises en charge, délais raisonnables, plusieurs praticiens disponibles.',
    delay: 300,
  },
]

type PillarItem = (typeof pillars)[0]

function PillarCard({ icon: Icon, title, description, delay }: PillarItem) {
  const ref = useScrollReveal<HTMLDivElement>({ delay })
  return (
    <div
      ref={ref}
      className="p-6 rounded-[0.75rem] bg-white border border-[oklch(92%_0.01_80)] hover:-translate-y-0.5 transition-transform duration-200"
    >
      <Icon
        size={24}
        className="text-[oklch(48%_0.08_220)] mb-4"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[oklch(32%_0.02_80)]">{description}</p>
    </div>
  )
}

export function Pillars() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-12 text-center">
          Ce qui nous définit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
