import type { Metadata } from 'next'
import { CookiesPageContent } from '@/components/sections/CookiesPageContent'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description:
    'Détail des cookies utilisés sur le site Dental Clinic Namour, durée de vie, finalités et procédure de retrait du consentement.',
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return <CookiesPageContent />
}
