import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "L'Équipe",
  description:
    'Rencontrez Pr. Samir, Amaury et Mélanie Namour — trois dentistes, une famille, une même passion pour votre sourire.',
}

export default function EquipePage() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl font-semibold text-[oklch(18%_0.015_80)]">
        Une équipe, une famille, trois regards d&apos;expert sur votre sourire
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
