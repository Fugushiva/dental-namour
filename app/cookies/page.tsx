import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <section className="py-20 px-4 max-w-prose mx-auto">
      <h1 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)]">
        Politique de gestion des cookies
      </h1>
      <p className="mt-4 text-[oklch(32%_0.02_80)]">Page en construction.</p>
    </section>
  )
}
