import type { Metadata } from 'next'
import { CabinetContent } from './CabinetContent'

export const metadata: Metadata = {
  title: 'Le Cabinet',
  description:
    'Découvrez le cabinet Dental Namour à Bruxelles — un espace familial dédié à votre santé bucco-dentaire depuis plus de 20 ans.',
}

export default function CabinetPage() {
  return <CabinetContent />
}
