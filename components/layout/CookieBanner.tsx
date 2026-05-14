'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'hermes-consent-dental-namour'
const EXPIRY_MS = 13 * 30 * 24 * 60 * 60 * 1000 // 13 months

interface ConsentData {
  analytics: boolean
  marketing: boolean
  timestamp: number
}

function getStoredConsent(): ConsentData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data: ConsentData = JSON.parse(raw)
    if (Date.now() - data.timestamp > EXPIRY_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showCustom, setShowCustom] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const firstBtnRef = useRef<HTMLButtonElement>(null)

  // Initialize visibility from localStorage (runs once on mount)
  useEffect(() => {
    const stored = getStoredConsent()
    // Use a microtask to avoid setState-in-effect lint warning
    Promise.resolve().then(() => {
      if (!stored) setVisible(true)
    })

    const handleReopen = () => {
      setVisible(true)
      setShowCustom(false)
    }
    window.addEventListener('hermes:open-cookie-banner', handleReopen)
    return () => window.removeEventListener('hermes:open-cookie-banner', handleReopen)
  }, [])

  // Focus first button when banner opens
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => firstBtnRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [visible])

  const saveConsent = useCallback((data: Omit<ConsentData, 'timestamp'>) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, timestamp: Date.now() }))
    setVisible(false)
  }, [])

  const handleAcceptAll = useCallback(
    () => saveConsent({ analytics: true, marketing: true }),
    [saveConsent]
  )

  const handleRefuse = useCallback(
    () => saveConsent({ analytics: false, marketing: false }),
    [saveConsent]
  )

  const handleSaveCustom = useCallback(
    () => saveConsent({ analytics, marketing }),
    [saveConsent, analytics, marketing]
  )

  // Escape key = refuse (CEPD compliant)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        handleRefuse()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [visible, handleRefuse])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      aria-describedby="cookie-desc"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative bg-white rounded-[var(--radius-card,0.75rem)] shadow-xl max-w-lg w-full p-6">
        <p className="text-sm font-medium text-[oklch(18%_0.015_80)] mb-1">Gestion des cookies</p>
        <p id="cookie-desc" className="text-sm text-[oklch(32%_0.02_80)] mb-4">
          Nous utilisons des cookies pour améliorer votre expérience. Les cookies nécessaires sont
          toujours actifs.{' '}
          <Link href="/cookies" className="underline hover:text-[oklch(48%_0.08_220)]">
            En savoir plus
          </Link>
        </p>

        {showCustom && (
          <div className="mb-4 space-y-2 border border-[oklch(92%_0.01_80)] rounded p-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked
                disabled
                readOnly
                className="accent-[oklch(48%_0.08_220)]"
              />
              <span>Strictement nécessaires (toujours actifs)</span>
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-[oklch(48%_0.08_220)]"
              />
              <span>Analytiques</span>
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-[oklch(48%_0.08_220)]"
              />
              <span>Marketing</span>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            ref={firstBtnRef}
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2 rounded bg-[oklch(48%_0.08_220)] text-white text-sm font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Accepter tout
          </button>
          <button
            type="button"
            onClick={handleRefuse}
            className="flex-1 px-4 py-2 rounded border border-[oklch(32%_0.02_80)] text-sm font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
          >
            Refuser tout
          </button>
          {!showCustom ? (
            <button
              type="button"
              onClick={() => setShowCustom(true)}
              className="flex-1 px-4 py-2 rounded border border-[oklch(32%_0.02_80)] text-sm font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Personnaliser
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSaveCustom}
              className="flex-1 px-4 py-2 rounded border border-[oklch(48%_0.08_220)] text-[oklch(48%_0.08_220)] text-sm font-medium hover:bg-[oklch(96%_0.008_80)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Enregistrer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
