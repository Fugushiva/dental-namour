'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

export function TeamPreview() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-6">
          Qui nous sommes
        </h2>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-[oklch(32%_0.02_80)]">
          <p>
            Le Professeur Samir Namour a fondé le cabinet à Ixelles il y a plus de vingt ans, avec
            une seule conviction : prendre le temps d&apos;écouter chaque patient.
          </p>
          <p>
            Ses deux enfants, Amaury et Mélanie, ont choisi à leur tour la dentisterie et le
            rejoignent aujourd&apos;hui dans la même pratique familiale.
          </p>
          <p>
            Ensemble, trois générations de Namour vous accompagnent avec la même exigence de douceur
            et de pédagogie.
          </p>
        </div>
        <Link
          href="/equipe"
          className="inline-flex items-center mt-8 px-5 py-2.5 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
        >
          Rencontrer notre équipe
        </Link>
      </div>
    </section>
  )
}
