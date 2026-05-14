'use client'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'

const stats = [
  { value: '20+', label: "ans d'expérience" },
  { value: '3', label: 'dentistes familiaux' },
  { value: '4,3/5', label: 'note Google' },
  { value: '29', label: 'avis vérifiés' },
]

export function StatsBar() {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(48%_0.08_220)]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-4xl md:text-5xl font-semibold text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
