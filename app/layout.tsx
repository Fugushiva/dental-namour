import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { SkipNav } from '@/components/layout/SkipNav'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider'
import { StructuredData } from '@/components/seo/StructuredData'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dental Clinic Namour | Dentiste à Bruxelles',
    template: '%s · Dental Clinic Namour',
  },
  description:
    'Dental Clinic Namour à Bruxelles — Pr. Samir, Amaury et Mélanie Namour vous reçoivent en famille pour tous vos soins dentaires depuis plus de 20 ans.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://dental-namour.vercel.app',
  },
  openGraph: {
    title: 'Dental Clinic Namour | Dentiste à Bruxelles',
    description:
      'Trois générations de dentistes à Bruxelles. Cabinet familial, patients anxieux bienvenus.',
    url: 'https://dental-namour.vercel.app',
    siteName: 'Dental Clinic Namour',
    images: [{ url: '/og?title=Dental+Clinic+Namour', width: 1200, height: 630 }],
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic Namour | Dentiste à Bruxelles',
    description:
      'Trois générations de dentistes à Bruxelles. Cabinet familial, patients anxieux bienvenus.',
    images: ['/og?title=Dental+Clinic+Namour'],
  },
}

const globalSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Dental Clinic Namour',
    description: 'Cabinet dentaire familial à Bruxelles — Pr. Samir, Amaury et Mélanie Namour',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Paul Spaak 3',
      addressLocality: 'Bruxelles',
      postalCode: '1000',
      addressCountry: 'BE',
    },
    url: 'https://dental-namour.vercel.app',
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
    medicalSpecialty: [
      'Dentistry',
      'Implantology',
      'Endodontics',
      'Aesthetic Dentistry',
      'Laser Dentistry',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dental Clinic Namour',
    legalName: 'Namour Mélanie',
    vatID: 'BE0562994037',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue Paul Spaak 3',
      addressLocality: 'Bruxelles',
      postalCode: '1000',
      addressCountry: 'BE',
    },
    url: 'https://dental-namour.vercel.app',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dental Clinic Namour',
    url: 'https://dental-namour.vercel.app',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[oklch(98%_0.005_80)] text-[oklch(18%_0.015_80)] font-sans antialiased flex flex-col">
        <SmoothScrollProvider>
          <div
            role="note"
            aria-label="Avertissement démo"
            className="fixed top-0 left-0 right-0 z-50 w-full bg-amber-50 border-b border-amber-200 text-amber-900 text-xs text-center py-1.5 px-4"
          >
            Démo non-officielle — proposition de refonte préparée par{' '}
            <strong>Jérôme Delodder</strong>. Site non affilié à Dental Clinic Namour.
          </div>
          <SkipNav />
          <Navbar />
          <main id="main-content" className="flex-1 pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </SmoothScrollProvider>
        <StructuredData data={globalSchemas} />
      </body>
    </html>
  )
}
