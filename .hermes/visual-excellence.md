# Visual Excellence — Standards Awwwards Level

> Standard : chaque site Hermes doit être digne d'une nomination Awwwards.
> Ce document définit les règles de motion, typographie créative, layouts éditoriaux et micro-interactions
> qui différencient un site "propre" d'un site qui fait dire "holy shit, that's done".
>
> **Règle de compatibilité** : toutes les animations respectent `prefers-reduced-motion`.
> **Règle de performance** : chaque effet doit être GPU-accelerated (transform + opacity uniquement).
> Les seuils Lighthouse ≥ 90 restent non négociables — la beauté ne justifie pas la lenteur.

---

## 1. Motion Design — Principes Fondamentaux

### 1.1 Philosophie du mouvement

- [ ] **Intention, pas décoration** — chaque animation guide l'attention ou communique un état
- [ ] **Orchestration temporelle** — les éléments entrent en scène avec un délai progressif (`stagger`)
- [ ] **Easing naturel** — courbes custom (`cubic-bezier`) qui accélèrent en début et décélèrent en fin, jamais `linear`
- [ ] **Durées cohérentes** : micro (100–200ms) / standard (300–500ms) / cinématique (600ms–1.2s) — pas de mélange arbitraire
- [ ] **Continuité** — les transitions partagent des propriétés avec l'état précédent (shared element transitions)

### 1.2 Entrées de page (Page Reveal)

- [ ] **Séquence d'entrée** — le Hero ne s'affiche pas immédiatement : titre → sous-titre → CTA → image, chacun avec un délai staggeré
- [ ] **Clip-path reveals** — textes et images masqués par `clip-path: inset(100% 0 0 0)` qui s'ouvre vers le haut
- [ ] **Opacity + translateY** — combinaison standard : `opacity: 0` + `translateY(30px)` → `opacity: 1` + `translateY(0)`
- [ ] **Split text animation** — les grands titres (H1) entrent mot par mot ou lettre par lettre avec GSAP SplitText ou équivalent
- [ ] **Masking reveal** — images révélées par un overlay coloré qui slide pour dévoiler le contenu

### 1.3 Scroll Animations

- [ ] **Scroll-triggered** — `IntersectionObserver` ou GSAP ScrollTrigger pour déclencher les animations au scroll
- [ ] **Parallax maîtrisé** — parallax léger (15–30% de déplacement max) sur images de fond, pas sur le texte
- [ ] **Scrub animations** — éléments dont la progression est liée à la position de scroll (pinned sections)
- [ ] **Counter animations** — chiffres clés qui s'incrémentent quand ils entrent dans le viewport
- [ ] **Line animations** — traits, séparateurs ou bordures qui se dessinent au scroll (`stroke-dashoffset`)
- [ ] **Section transitions** — les sections n'apparaissent pas brusquement : fade + slide cohérents

### 1.4 Micro-interactions

- [ ] **Boutons** — magnetic effect subtil (le bouton suit légèrement le curseur) ou hover avec scale + background fill
- [ ] **Liens nav** — underline animé qui slide depuis le centre ou de gauche à droite
- [ ] **Cards** — lift au hover (translateY(-4px) + box-shadow plus profonde), transition 200ms ease-out
- [ ] **Images** — scale subtil au hover (`scale(1.03)`) avec overflow hidden, pas de scale brutal
- [ ] **Curseur custom** — curseur remplacé par un point fluide qui suit avec un lag organique (`lerp`)
- [ ] **Formulaires** — labels qui flottent avec animation douce, focus avec outline animé

---

## 2. Typographie Créative

### 2.1 Hiérarchie typographique éditoriale

- [ ] **Contraste de taille extrême** — H1 en display (80–160px desktop) vs body (16–18px) : le contraste crée l'impact
- [ ] **Mix typographique** — serif expressif pour les headlines, sans-serif clean pour le body (ex: Playfair Display + Inter)
- [ ] **Italic expressif** — les mots-clés ou phrases chocs en italic pour créer du rythme visuel
- [ ] **Graisse variable** — exploiter les variable fonts : weight change au hover, animation de 300 → 700 sur les titres
- [ ] **Letter-spacing dramatique** — `-0.05em` à `-0.02em` sur les grands titres, `+0.15em` sur les labels uppercase
- [ ] **Texte en couleur accent** — un mot-clé dans la couleur brand pour casser la monotonie
- [ ] **Oversized type** — texte décoratif hors grille en arrière-plan, ultra-light, pour créer de la profondeur

### 2.2 Layouts typographiques

- [ ] **Text masking** — texte en mode `background-clip: text` avec gradient ou image en remplissage
- [ ] **Outline text** — titres en `-webkit-text-stroke` alternés avec du texte plein
- [ ] **Texte qui défile** — marquees horizontaux pour mentions, références ou mots-clés (vitesse constante, pause au hover)
- [ ] **Texte vertical** — labels de section en `writing-mode: vertical-rl` sur desktop
- [ ] **Typographie qui scrubbe** — lettres ou mots qui changent de style/poids avec la position de scroll

### 2.3 Règles de lisibilité (non négociables même avec créativité)

- [ ] **Contraste WCAG maintenu** — même avec les effets créatifs, ratio 4.5:1 sur texte normal
- [ ] **Pas d'animation sur le body text** — les animations typographiques se limitent aux headlines et aux éléments décoratifs
- [ ] **Fallback pour variable fonts** — `font-weight: 700` si le navigateur ne supporte pas les variable fonts

---

## 3. Layouts Éditoriaux

### 3.1 Grilles brisées (Broken Grid)

- [ ] **Chevauchements intentionnels** — éléments qui débordent sur les sections voisines avec `position: relative` + `z-index`
- [ ] **Décalage asymétrique** — images et textes qui ne s'alignent pas sur la même grille de 12 colonnes
- [ ] **Oversize elements** — un élément qui déborde volontairement du max-width pour créer la tension
- [ ] **Composition en diagonale** — layout qui guide l'œil en diagonal plutôt que strictement horizontal
- [ ] **Whitespace dramatique** — sections avec 30–50% d'espace négatif pour laisser respirer le contenu premium

### 3.2 Techniques visuelles avancées

- [ ] **Sticky avec effets** — éléments qui restent fixés pendant le scroll et évoluent (scale, opacity, couleur)
- [ ] **Horizontal scroll** — sections ou portfolios en scroll horizontal (`overflow-x: scroll` ou GSAP)
- [ ] **Perspective 3D CSS** — cards ou éléments avec `perspective` et rotation légère au hover
- [ ] **SVG animés** — illustrations ou icônes SVG avec animations `stroke-dashoffset` ou morphing
- [ ] **Noise / grain** — texture grain subtile en pseudo-element `::after` pour les backgrounds (svg noise filter)
- [ ] **Glassmorphism maîtrisé** — `backdrop-filter: blur()` uniquement pour les overlays et cartes flottantes, pas partout
- [ ] **Color grading** — transitions de couleur de section (`background` qui change en dégradé) liées au scroll

### 3.3 Hero créatifs

- [ ] **Hero full-viewport** — `min-height: 100svh` (safe viewport height), jamais de scroll avant le fold
- [ ] **Composition dynamique** — le hero n'est pas une image + texte à gauche : explorer les compositions centrées, obliques, typographiques pures
- [ ] **Vidéo background** — vidéo autoplay muted loop si client a du contenu vidéo, avec overlay gradient pour lisibilité
- [ ] **WebGL / Canvas** — pour les clients premium, fond interactif en Three.js ou GSAP Canvas (particules, fluides, géométrie)
- [ ] **Texte animé en boucle** — typewriter ou morphing entre plusieurs propositions de valeur

---

## 4. Bibliothèques d'Animation Autorisées

### 4.1 Stack recommandée

| Librairie | Usage | Poids | Justification |
|-----------|-------|-------|---------------|
| **GSAP** (free tier) | Animations complexes, ScrollTrigger, SplitText | ~30KB | Standard industrie, performance max |
| **Framer Motion** | Animations React déclaratives, layout animations | ~50KB | Intégration Next.js native, API simple |
| **CSS Animations** | Micro-interactions, keyframes simples | 0KB | Priorité quand possible |
| **Lenis** | Smooth scroll | ~5KB | Scroll fluide et contrôlable |
| **@studio-freight/lenis** | Alternative Lenis | ~5KB | Même usage |

### 4.2 Librairies interdites

| Librairie | Raison |
|-----------|--------|
| `Anime.js` seul | Préférer GSAP pour la cohérence |
| `ScrollReveal` | Obsolète — utiliser IntersectionObserver natif |
| `AOS` | Trop basique — pas de différenciation |
| `Velocity.js` | Abandonné |
| `jQuery` | Interdit dans toute la stack Hermes |

### 4.3 Installation

```bash
# GSAP (free)
npm install gsap

# Framer Motion
npm install framer-motion

# Smooth scroll
npm install @studio-freight/lenis
```

```tsx
// app/layout.tsx — Lenis setup
'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

---

## 5. Effets Spécifiques par Composant

### 5.1 Navbar

- [ ] **Reveal progressif** — navbar invisible au load, apparaît après 1s ou après scroll de 50px
- [ ] **Blend mode** — `mix-blend-mode: difference` pour une navbar blanche sur fond sombre et noire sur fond clair
- [ ] **Transition de fond** — transparent → `backdrop-filter: blur(20px)` au scroll
- [ ] **Liens avec morphing** — le lien actif change de style avec une transition de fond ou underline

### 5.2 Hero Section

```tsx
// Exemple d'orchestration GSAP au page load
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = new SplitType('[data-animate="title"]', { types: 'lines,words' })

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from(text.words, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        stagger: 0.04,
      })
      .from('[data-animate="subtitle"]', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from('[data-animate="cta"]', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.2')
      .from('[data-animate="image"]', { opacity: 0, scale: 1.05, duration: 1 }, '-=0.5')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return <div ref={containerRef}>{/* contenu hero */}</div>
}
```

### 5.3 Cards & Grid

```css
/* Hover lift avec ombre dynamique */
.card {
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 200ms ease-out;
  will-change: transform;
}
.card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 40px -12px rgb(0 0 0 / 0.25);
}

/* Image scale dans la card */
.card .card-image {
  overflow: hidden;
}
.card .card-image img {
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card:hover .card-image img {
  transform: scale(1.06);
}
```

### 5.4 Curseur Custom

```tsx
// components/ui/CustomCursor.tsx
'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => { target.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', move)

    let raf: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary mix-blend-difference"
      aria-hidden="true"
    />
  )
}
```

### 5.5 Marquee (texte défilant)

```tsx
// components/ui/Marquee.tsx — infinite scroll horizontal
import { cn } from '@/lib/utils'

interface MarqueeProps {
  items: string[]
  speed?: number // px/s, default 50
  className?: string
}

export function Marquee({ items, speed = 50, className }: MarqueeProps) {
  const duration = `${(items.length * 150) / speed}s`

  return (
    <div className={cn('overflow-hidden', className)} aria-hidden="true">
      <div
        className="flex w-max gap-8 animate-marquee"
        style={{ '--marquee-duration': duration } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="shrink-0 font-display text-4xl font-bold uppercase tracking-tight">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
```

```css
/* globals.css */
@keyframes marquee {
  from { transform: translateX(0) }
  to { transform: translateX(-50%) }
}
.animate-marquee {
  animation: marquee var(--marquee-duration, 20s) linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
```

---

## 6. Références & Inspiration

### Sites de référence (consulter avant chaque projet)

- **Awwwards** (awwwards.com) — SOTD et SOTM comme étalon
- **Hoverstates** — micro-interactions et UX patterns
- **Minimal Gallery** — layouts minimalistes haut de gamme
- **Godly** (godly.website) — animations web premium

### Patterns récurrents sur les sites nominés

1. **Smooth scroll** — Lenis est quasi-universel sur les sites Awwwards
2. **Page transitions** — fade ou clip-path entre les pages (Framer Motion `AnimatePresence`)
3. **Typographie oversized** — H1 qui prend 60–80% de la largeur écran
4. **Couleur unique et cohérente** — palette réduite (2–3 couleurs max) mais parfaitement maîtrisée
5. **Images pleine largeur** — pas de petites images dans des colonnes étroites
6. **Interaction responsive** — les effets hover ont leur équivalent touch sur mobile
7. **Loading screen** — courte séquence d'intro (1.5–2s max) qui sert de page reveal

---

## 7. Checklist Awwwards — Validation avant Livraison

- [ ] Le site a un effet de scroll smooth (Lenis ou équivalent)
- [ ] Le Hero a une animation d'entrée orchestrée (pas d'apparition brutale)
- [ ] Au moins un composant utilise une animation scroll-triggered (IntersectionObserver ou ScrollTrigger)
- [ ] Les micro-interactions hover sont définies sur les boutons, liens et cards
- [ ] La typographie utilise un contraste de taille significatif (H1 ≥ 64px desktop)
- [ ] Les couleurs sont en `oklch()` avec une cohérence sur toute la palette
- [ ] `prefers-reduced-motion` est géré — toutes les animations sont désactivées si activé
- [ ] Aucune animation ne cause de CLS ou de perf < 90 Lighthouse
- [ ] Les animations utilisent exclusivement `transform` et `opacity` (GPU-only)
- [ ] Le code d'animation est nettoyé au unmount (cleanup dans `useEffect`)
- [ ] Sur mobile : les effets hover sont remplacés par des interactions touch appropriées
- [ ] Le curseur custom est masqué sur mobile (`display: none` si `pointer: coarse`)

---

*Visual Excellence V1 — Mai 2026*
*Standard : les sites Hermes sont des candidats naturels aux nominations Awwwards*
