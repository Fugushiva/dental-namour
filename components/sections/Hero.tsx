'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const elements = [titleRef.current, subtitleRef.current, ctaRef.current, imageRef.current]
    elements.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
      }
    })

    elements.forEach((el, i) => {
      if (!el) return
      setTimeout(() => {
        el.style.transition =
          'opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, i * 80)
    })
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[oklch(98%_0.005_80)] px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1
            ref={titleRef}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[oklch(18%_0.015_80)] leading-tight tracking-tight"
          >
            Trois générations à votre service, une seule exigence :{' '}
            <span className="text-[oklch(48%_0.08_220)]">votre confiance.</span>
          </h1>
          <p
            ref={subtitleRef}
            className="mt-6 text-lg leading-relaxed text-[oklch(32%_0.02_80)] max-w-xl"
          >
            Le cabinet Dental Namour, à Ixelles depuis plus de 20 ans, accueille en famille les
            patients de toute la région bruxelloise — y compris celles et ceux qui appréhendent le
            dentiste.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/equipe"
              className="inline-flex items-center justify-center px-6 py-3 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Découvrir notre équipe
            </Link>
          </div>
        </div>

        {/* Image placeholder */}
        <div
          ref={imageRef}
          className="relative aspect-[4/3] rounded-[0.75rem] overflow-hidden shadow-md"
        >
          {/* TODO: Replace with actual family photo */}
          <div className="absolute inset-0 bg-[oklch(92%_0.01_80)] flex items-center justify-center">
            <p className="text-[oklch(60%_0.015_80)] text-sm text-center px-4">
              <span className="block text-4xl mb-2">📷</span>
              Photo de famille Namour
              <br />
              <span className="text-xs">(Photo à fournir par le cabinet)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
