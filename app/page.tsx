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
