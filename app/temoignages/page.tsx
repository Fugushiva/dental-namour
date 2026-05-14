import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Témoignages',
  description:
    "Ce que nos patients disent du cabinet Dental Namour — avis authentiques et retours d'expérience.",
}

export default function TemoignagesPage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl font-semibold text-[oklch(18%_0.015_80)]">
        Ce que nos patients en disent — verbatim et sans filtre
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
