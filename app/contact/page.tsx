import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Prenez rendez-vous au cabinet Dental Namour à Bruxelles — formulaire en ligne, téléphone ou email.',
}

export default function ContactPage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl font-semibold text-[oklch(18%_0.015_80)]">
        Prenons rendez-vous — c&apos;est plus simple qu&apos;il n&apos;y paraît
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
