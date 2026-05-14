import type { Metadata } from 'next'
import { TemoignagesContent } from '@/components/sections/TemoignagesContent'

export const metadata: Metadata = {
  title: 'Témoignages patients',
  description:
    '29 avis Google et plus de 20 ans de patients fidèles : lisez les témoignages authentiques de celles et ceux qui nous ont confié leur sourire.',
}

export default function TemoignagesPage() {
  return <TemoignagesContent />
}
