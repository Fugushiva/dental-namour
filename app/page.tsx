import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TeamPreview } from '@/components/sections/TeamPreview'
import { Pillars } from '@/components/sections/Pillars'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Testimonials } from '@/components/sections/Testimonials'
import { StatsBar } from '@/components/sections/StatsBar'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Dental Clinic Namour | Dentiste à Bruxelles',
  description:
    'Dental Clinic Namour à Bruxelles — Pr. Samir, Amaury et Mélanie Namour vous reçoivent en famille pour tous vos soins dentaires depuis plus de 20 ans.',
}

export default function Home() {
  return (
    <>
      <div className="bg-amber-50/90 px-4 py-2 text-center text-xs text-amber-900">
        Démo non-officielle — proposition de refonte préparée par Jérôme Delodder. Site non affilié
        à Dental Clinic Namour.
      </div>
      <Hero />
      <TeamPreview />
      <Pillars />
      <ServicesGrid />
      <Testimonials />
      <StatsBar />
      <CTASection />
    </>
  )
}
