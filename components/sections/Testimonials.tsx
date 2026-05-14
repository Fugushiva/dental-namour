'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

const testimonials = [
  {
    initials: 'M.L.',
    name: 'Marie L.',
    date: '2024',
    care: 'Implant dentaire',
    source: 'Google',
    text: '',
  },
  {
    initials: 'J.D.',
    name: 'Jean D.',
    date: '2024',
    care: 'Soins conservateurs',
    source: 'Google',
    text: '',
  },
  {
    initials: 'S.B.',
    name: 'Sophie B.',
    date: '2023',
    care: 'Patient anxieux',
    source: 'Selfcity',
    text: '',
  },
]

type TestimonialItem = (typeof testimonials)[0]

function TestimonialCard({ initials, name, date, care, source, text }: TestimonialItem) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="p-6 rounded-[0.75rem] bg-[oklch(98%_0.005_80)] border border-[oklch(92%_0.01_80)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full bg-[oklch(48%_0.08_220)] text-white flex items-center justify-center text-sm font-semibold"
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
      <p className="text-sm leading-relaxed text-[oklch(32%_0.02_80)] italic">
        {text ? (
          text
        ) : (
          <span className="text-[oklch(60%_0.015_80)] not-italic">
            [Verbatim patient à venir — TODO: remplacer par avis réel]
          </span>
        )}
      </p>
    </div>
  )
}

export function Testimonials() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef}>
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-3 text-center">
            Ce que disent nos patients
          </h2>
          <p className="text-center text-[oklch(32%_0.02_80)] mb-12">
            29 avis Google · Note moyenne 4,3/5
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/temoignages"
            className="inline-flex items-center px-6 py-3 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Lire tous les témoignages
          </Link>
        </div>
      </div>
    </section>
  )
}
