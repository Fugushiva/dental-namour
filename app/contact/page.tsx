import type { Metadata } from 'next'
import { ContactContent } from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description:
    "Cabinet Dental Namour, Rue Paul Spaak 3, 1000 Bruxelles. Horaires, plan d'accès, téléphone et formulaire de prise de rendez-vous.",
}

export default function ContactPage() {
  return <ContactContent />
}
