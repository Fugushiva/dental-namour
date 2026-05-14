import type { Metadata } from 'next'
import { EquipeContent } from './EquipeContent'

export const metadata: Metadata = {
  title: "L'Équipe",
  description:
    'Rencontrez Pr. Samir, Amaury et Mélanie Namour — trois dentistes, une famille, une même passion pour votre sourire.',
}

export default function EquipePage() {
  return <EquipeContent />
}
