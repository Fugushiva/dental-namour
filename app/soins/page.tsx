import type { Metadata } from 'next'
import { SoinsContent } from '@/components/sections/SoinsContent'

export const metadata: Metadata = {
  title: 'Soins dentaires',
  description:
    "Soins conservateurs, implants, esthétique, endodontie, prothèses, chirurgie et dentisterie laser : découvrez l'offre complète du cabinet Namour à Bruxelles.",
}

export default function SoinsPage() {
  return <SoinsContent />
}
