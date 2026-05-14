import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soins',
  description:
    'Tous les soins dentaires sous un même toit — détartrage, implants, orthodontie, blanchiment et plus encore au cabinet Namour.',
}

export default function SoinsPage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl font-semibold text-[oklch(18%_0.015_80)]">
        Tous les soins dentaires sous un même toit, pensés autour de vous
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
