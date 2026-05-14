'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function CTASection({
  title = 'Réservez votre premier rendez-vous',
  subtitle = 'Cabinet Dental Namour · Rue Paul Spaak 3, 1000 Bruxelles',
  primaryCTA = { label: 'Prendre rendez-vous', href: '/contact' },
  secondaryCTA = { label: 'Lire les témoignages', href: '/temoignages' },
}: CTASectionProps) {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-4">
          {title}
        </h2>
        <p className="text-[oklch(32%_0.02_80)] mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center justify-center px-6 py-3 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
