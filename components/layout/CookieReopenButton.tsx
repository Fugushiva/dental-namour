'use client'

export function CookieReopenButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('hermes:open-cookie-banner'))}
      className="text-[oklch(60%_0.015_80)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded cursor-pointer"
    >
      Gérer mes cookies
    </button>
  )
}
