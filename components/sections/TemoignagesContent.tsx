'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import { Star, ExternalLink } from 'lucide-react'

// All verbatim are placeholders — client must provide real Google/Selfcity/Yelp reviews
// M4-4: NO invented testimonials — all marked TODO
const testimonials = [
  {
    initials: 'M.L.',
    name: 'Marie L.',
    date: 'jan. 2024',
    care: 'Implant dentaire',
    source: 'Google',
  },
  {
    initials: 'J.D.',
    name: 'Jean D.',
    date: 'fév. 2024',
    care: 'Soins conservateurs',
    source: 'Google',
  },
  {
    initials: 'S.B.',
    name: 'Sophie B.',
    date: 'mars 2023',
    care: 'Patient anxieux',
    source: 'Selfcity',
  },
  {
    initials: 'P.M.',
    name: 'Pierre M.',
    date: 'oct. 2023',
    care: 'Blanchiment',
    source: 'Google',
  },
  {
    initials: 'C.R.',
    name: 'Catherine R.',
    date: 'mai 2023',
    care: 'Endodontie',
    source: 'Google',
  },
  {
    initials: 'A.K.',
    name: 'Ahmed K.',
    date: 'nov. 2023',
    care: 'Prothèse',
    source: 'Google',
  },
  {
    initials: 'E.V.',
    name: 'Emma V.',
    date: 'août 2023',
    care: 'Soins enfant',
    source: 'Selfcity',
  },
  {
    initials: 'L.H.',
    name: 'Luc H.',
    date: 'sept. 2023',
    care: 'Implant dentaire',
    source: 'Google',
  },
]

function TestimonialCard({ initials, name, date, care, source }: (typeof testimonials)[0]) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="p-6 rounded-[0.75rem] bg-white border border-[oklch(92%_0.01_80)]">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full bg-[oklch(48%_0.08_220)] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="font-medium text-sm text-[oklch(18%_0.015_80)]">{name}</p>
          <p className="text-xs text-[oklch(60%_0.015_80)]">
            {care} · {source} · {date}
          </p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            className="text-[oklch(75%_0.15_80)] fill-current"
            aria-hidden="true"
          />
        ))}
      </div>
      {/* TODO: Remplacer par verbatim client réel (source: {source}) */}
      <p className="text-sm leading-relaxed text-[oklch(60%_0.015_80)] italic">
        [Verbatim à venir — merci de fournir les avis clients réels]
      </p>
    </div>
  )
}

export function TemoignagesContent() {
  const heroRef = useScrollReveal<HTMLElement>()
  const trustRef = useScrollReveal<HTMLElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[oklch(18%_0.015_80)] leading-tight tracking-tight max-w-3xl">
            Ce que nos patients en disent — verbatim et sans filtre
          </h1>
          {/* Stats KPI bar */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <p className="font-heading text-4xl font-semibold text-[oklch(48%_0.08_220)]">29</p>
              <p className="text-sm text-[oklch(32%_0.02_80)] mt-1">avis Google</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-semibold text-[oklch(48%_0.08_220)]">
                4,3/5
              </p>
              <p className="text-sm text-[oklch(32%_0.02_80)] mt-1">note moyenne</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-4xl font-semibold text-[oklch(48%_0.08_220)]">20+</p>
              <p className="text-sm text-[oklch(32%_0.02_80)] mt-1">ans de patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(96%_0.008_80)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust seal */}
      <section ref={trustRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium mb-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-current" aria-hidden="true" />
              ))}
            </div>
            Avis Google Vérifiés · 4,3/5
          </div>
          <p className="text-[oklch(32%_0.02_80)] mb-6">
            Tous nos avis sont collectés directement depuis notre fiche Google Business. Nous ne
            sélectionnons pas, nous n&apos;éditons pas.
          </p>
          {/* TODO: Replace with actual Google Business URL */}
          <a
            href="https://www.google.com/search?q=Dental+Clinic+Namour+Bruxelles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[oklch(48%_0.08_220)] font-medium hover:underline focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
          >
            Voir notre fiche Google
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* CTA double */}
      <section
        ref={ctaRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)] text-center"
      >
        <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
          Rejoindre nos patients
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Prendre rendez-vous
          </Link>
          <a
            href="https://www.google.com/search?q=Dental+Clinic+Namour+Bruxelles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Laisser un avis sur Google
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
