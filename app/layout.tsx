import type { Metadata } from 'next'
import { Fraunces, Inter, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  title: 'Dental Clinic Namour | Dentiste à Bruxelles',
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
    <html lang="fr" className={cn(fraunces.variable, inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
