import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le Cabinet',
  description:
    'Découvrez le cabinet Dental Namour à Bruxelles — un espace familial dédié à votre santé bucco-dentaire depuis plus de 20 ans.',
}

export default function CabinetPage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl font-semibold text-[oklch(18%_0.015_80)]">
        Un cabinet familial où la dentisterie se transmet en héritage
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
