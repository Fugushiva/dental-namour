export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:bg-[oklch(48%_0.08_220)] focus:text-white focus:font-medium focus:shadow-lg"
    >
      Aller au contenu principal
    </a>
  )
}
