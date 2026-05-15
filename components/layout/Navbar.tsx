'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/cabinet', label: 'Le Cabinet' },
  { href: '/equipe', label: "L'Équipe" },
  { href: '/soins', label: 'Soins' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header
      className={cn(
        'fixed top-8 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-[oklch(98%_0.005_80)] shadow-sm' : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-semibold text-xl text-[oklch(48%_0.08_220)] focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
        >
          Dental Clinic Namour
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[oklch(32%_0.02_80)] hover:text-[oklch(48%_0.08_220)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+3200000000"
            className="flex items-center gap-1.5 text-sm font-medium text-[oklch(32%_0.02_80)] hover:text-[oklch(48%_0.08_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
            aria-label="Appeler le cabinet"
          >
            <Phone size={16} aria-hidden="true" />
            Appeler
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-[oklch(48%_0.08_220)] text-white text-sm font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <Calendar size={16} aria-hidden="true" />
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="md:hidden p-2 rounded text-[oklch(32%_0.02_80)] hover:text-[oklch(48%_0.08_220)] focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[oklch(98%_0.005_80)] border-t border-[oklch(92%_0.01_80)] px-4 py-4"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded text-[oklch(32%_0.02_80)] hover:bg-[oklch(96%_0.008_80)] hover:text-[oklch(48%_0.08_220)] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-[oklch(92%_0.01_80)] flex flex-col gap-2">
            <a
              href="tel:+3200000000"
              className="flex items-center gap-2 py-2 px-3 rounded text-[oklch(32%_0.02_80)] hover:bg-[oklch(96%_0.008_80)] font-medium"
              aria-label="Appeler le cabinet"
            >
              <Phone size={16} aria-hidden="true" />
              Appeler le cabinet
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors"
            >
              <Calendar size={16} aria-hidden="true" />
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
