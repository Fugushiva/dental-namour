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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[oklch(98%_0.005_80)] text-[oklch(18%_0.015_80)] font-sans antialiased flex flex-col">
        <SmoothScrollProvider>
          <SkipNav />
          <Navbar />
          <main id="main-content" className="flex-1 pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
