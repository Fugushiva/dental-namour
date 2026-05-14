# Checklist Frontend — Éléments à penser pour un site web

> Légende des tags : `[base]` fondamental · `[a11y]` accessibilité · `[perf]` performance · `[ux]` expérience utilisateur

---

## 1. Typographie

- [ ] **Police(s) principale(s)** `[base]` — Heading, body, mono — 2 familles max en général
- [ ] **Police(s) secondaires / accent** — Serif pour citations, display pour grands titres
- [ ] **Échelle de tailles** `[base]` — xs / sm / base / lg / xl / 2xl / 3xl — définir en `rem`
- [ ] **Graisses (font-weight)** `[base]` — Regular 400, Medium 500, Bold 700 — pas toutes les graisses
- [ ] **Hauteur de ligne (line-height)** `[base]` — 1.5 body, 1.2 heading, 1.0 code
- [ ] **Interlettrage (letter-spacing)** — Léger + sur caps, légèrement − sur grands titres
- [ ] **Casse (text-transform)** — MAJUSCULES pour labels courts, Sentence case par défaut
- [ ] **Taille min sur mobile** `[a11y]` — ≥ 16px pour les inputs (évite le zoom iOS)
- [ ] **Hiérarchie visuelle H1–H6 + body + caption** `[base]` — Chaque niveau distinct sans ambiguïté

---

## 2. Couleurs

- [ ] **Couleur primaire (brand)** `[base]` — Action principale, liens, CTA
- [ ] **Couleur secondaire / accent** — Complément, hover, badges
- [ ] **Palette neutre (gris)** `[base]` — Backgrounds, borders, texte secondaire — 5–9 stops
- [ ] **Couleurs sémantiques** `[base]` — Success (vert), Warning (ambre), Error (rouge), Info (bleu)
- [ ] **Couleur de fond (background)** `[base]` — Primary / Secondary / Tertiary surfaces
- [ ] **Couleur de texte** `[base]` — Primary / Secondary / Disabled / Inverse
- [ ] **Couleur des bordures** — Subtle / Default / Strong
- [ ] **Contraste WCAG** `[a11y]` — 4.5:1 texte normal, 3:1 grands textes et icônes
- [ ] **Mode sombre (dark mode)** `[ux]` — Variables CSS ou tokens, jamais de couleurs hardcodées
- [ ] **États de couleur** `[base]` — Hover, active, focus, disabled pour chaque composant
- [ ] **Overlay / backdrop** — `rgba` pour modales, toasts, drawers

---

## 3. Espacement & Layout

- [ ] **Échelle d'espacement** `[base]` — Base 4px : 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px
- [ ] **Padding interne des composants** `[base]` — Boutons, inputs, cards — défini par taille (sm/md/lg)
- [ ] **Margin / gap entre éléments** `[base]` — Gap entre items dans une liste, section, nav
- [ ] **Gouttières de grille (grid gutter)** `[base]` — 16px mobile, 24px tablet, 32px desktop
- [ ] **Largeur max du contenu (max-width)** `[base]` — prose: 65ch, layout: 1200–1440px
- [ ] **Breakpoints** `[base]` — sm 640, md 768, lg 1024, xl 1280, 2xl 1536
- [ ] **Nombre de colonnes par breakpoint** — 1 col mobile → 2–3 tablet → 4–12 desktop
- [ ] **Safe area / insets mobiles** `[ux]` — `padding-bottom: env(safe-area-inset-bottom)` pour iOS

---

## 4. Formes & Bordures

- [ ] **Rayon de bordure (border-radius)** `[base]` — none / sm 4px / md 8px / lg 12px / full (pill)
- [ ] **Épaisseur de bordure** — 1px default, 2px focus ring
- [ ] **Style de bordure** — solid / dashed / dotted selon contexte
- [ ] **Ombre portée (box-shadow)** — xs à 2xl — utiliser avec parcimonie
- [ ] **Outline pour focus** `[a11y]` — 2px offset visible, ne jamais faire `outline: none` sans alternative

---

## 5. Icônes

- [ ] **Librairie d'icônes** `[base]` — Lucide, Tabler, Heroicons, Phosphor — une seule librairie
- [ ] **Tailles d'icône** — 16px inline, 20px default, 24px action, 32px+ illustratif
- [ ] **Stroke width cohérent** — 1.5 ou 2px — ne pas mélanger
- [ ] **Icône + label (accessibilité)** `[a11y]` — `aria-label` ou texte visible, jamais icône seule sans sens
- [ ] **Couleur héritée (currentColor)** — Les icônes doivent hériter la couleur du contexte

---

## 6. Composants interactifs

- [ ] **Boutons — variantes** `[base]` — Primary / Secondary / Ghost / Destructive / Icon-only
- [ ] **Boutons — tailles** `[base]` — sm / md / lg + états (hover, active, disabled, loading)
- [ ] **Inputs texte** `[base]` — Placeholder, label flottant ou fixe, helper text, error state
- [ ] **Textarea** — Auto-resize ou hauteur fixe + max
- [ ] **Select / Dropdown** `[ux]` — Natif vs custom — options clavier, search si liste longue
- [ ] **Checkbox & Radio** `[a11y]` — Taille min 20×20px, label cliquable, état indeterminate
- [ ] **Toggle / Switch** `[a11y]` — États on/off visuellement distincts sans couleur seule
- [ ] **Slider / Range** — Thumb visible, valeur affichée, step clair
- [ ] **Date picker** `[ux]` — Accessibilité clavier, format localisé
- [ ] **Liens** `[a11y]` — Couleur distincte + underline (au moins au hover)
- [ ] **Focus visible sur tous les interactifs** `[a11y]` — Tab order logique, aucun élément skipé

---

## 7. Navigation

- [ ] **Navbar / header** `[base]` — Logo, liens principaux, CTA, menu hamburger mobile
- [ ] **Menu mobile** `[ux]` — Drawer / fullscreen / bottom sheet
- [ ] **Sidebar** — Collapsible, active state, profondeur de sous-niveaux
- [ ] **Breadcrumbs** — Structure > Parent > Page courante
- [ ] **Tabs** `[a11y]` — Underline / pill — état actif lisible sans couleur seule
- [ ] **Pagination** — Prev/Next + numéros + état courant
- [ ] **Ancres internes** `[ux]` — Scroll smooth, offset pour header fixe
- [ ] **Skip nav link** `[a11y]` — Premier élément du DOM, visible au focus

---

## 8. Feedback & États

- [ ] **Toast / Snackbar** `[base]` — Position, durée, dismiss, success/error/info
- [ ] **Alerts inline** `[base]` — Banner d'erreur dans formulaire, zone info
- [ ] **Loading — spinner** `[base]` — Taille adaptée au contexte, accessible (`aria-busy`)
- [ ] **Loading — skeleton** `[ux]` — Placeholder animé pour contenu en cours de charge
- [ ] **Empty state** `[ux]` — Illustration + message + action suggérée
- [ ] **État erreur (404, 500…)** `[ux]` — Message clair + lien de retour
- [ ] **Validation formulaire** `[base]` — Inline, au blur ou au submit — message d'erreur visible
- [ ] **Confirmation dialog** `[ux]` — Modale légère pour actions destructives

---

## 9. Images & Médias

- [ ] **Attribut `alt` sur toutes les images** `[a11y]` — Descriptif pour images informatives, `""` pour décoratives
- [ ] **Ratio et crop** `[base]` — `object-fit: cover / contain` — ratio fixe ou `aspect-ratio` CSS
- [ ] **Lazy loading** `[perf]` — `loading="lazy"` sur images hors viewport
- [ ] **Format moderne** `[perf]` — WebP / AVIF avec fallback, `srcset` pour résolutions
- [ ] **Favicon et touch icons** — 16/32/180px — `manifest.json` pour PWA
- [ ] **Vidéo** `[a11y]` — Sous-titres (captions), controls visibles, autoplay sans son

---

## 10. Contenu & Microcopy

- [ ] **Ton et voix (brand voice)** `[base]` — Formel / casual / technique — cohérent partout
- [ ] **Labels de boutons actifs** `[ux]` — Verbe d'action précis, pas "Cliquez ici"
- [ ] **Messages d'erreur humains** `[ux]` — Dire quoi faire, pas juste ce qui s'est passé
- [ ] **Placeholder vs label** `[a11y]` — Toujours un label visible — le placeholder n'est pas un label
- [ ] **Truncation & overflow** — `text-overflow: ellipsis` + title tooltip si tronqué
- [ ] **Internationalisation (i18n)** — Longueur variable selon langue, direction (RTL), dates

---

## 11. Mobile & Touch

- [ ] **Touch target minimum** `[a11y]` — 44×44px (Apple / W3C) — espacement entre cibles
- [ ] **Gestures** `[ux]` — Swipe, pinch-zoom — ne pas bloquer les gestures natives
- [ ] **Clavier virtuel** `[ux]` — `inputmode` (numeric, email…), scroll quand clavier ouvert
- [ ] **Orientation** — Portrait et paysage — `@media (orientation: landscape)`
- [ ] **Viewport meta** `[base]` — `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## 12. Performance

- [ ] **Core Web Vitals** `[perf]` — LCP < 2.5s, CLS < 0.1, FID / INP < 200ms
- [ ] **Polices — swap & subset** `[perf]` — `font-display: swap`, ne charger que les glyphes nécessaires
- [ ] **CSS critique inline** `[perf]` — Above-the-fold sans render-blocking
- [ ] **Animations GPU** `[perf]` — `transform` + `opacity` uniquement — éviter `left`/`top` animés
- [ ] **Prefers-reduced-motion** `[a11y]` — Désactiver animations si l'OS le demande
- [ ] **Taille du bundle JS** `[perf]` — Code splitting, tree shaking, lazy import

---

## 15. Motion & Visual Excellence (standard Awwwards)

> Référence complète : `rules/visual-excellence.md`

- [ ] **Smooth scroll** `[ux]` — Lenis ou équivalent — jamais le scroll natif abrupt
- [ ] **Page reveal orchestré** `[ux]` — Hero avec stagger : titre → sous-titre → CTA → image
- [ ] **Scroll-triggered animations** `[ux]` — Au moins une par section — IntersectionObserver ou GSAP ScrollTrigger
- [ ] **Micro-interactions** `[ux]` — Hover défini sur boutons, liens, cards, images
- [ ] **Easing naturel** `[base]` — `cubic-bezier` custom — jamais `linear` sauf pour les marquees
- [ ] **GPU-only** `[perf]` — Toutes les animations sur `transform` + `opacity`, jamais `left`/`width`/`top`
- [ ] **Cleanup animations** `[base]` — `useEffect` retourne une fonction de nettoyage (ctx.revert, cancelAnimationFrame)
- [ ] **Curseur custom** `[ux]` — Masqué sur `pointer: coarse` (mobile/touch)
- [ ] **Typographie contrastée** `[ux]` — H1 ≥ 64px desktop — contraste de taille fort avec le body
- [ ] **Prefers-reduced-motion** `[a11y]` — `@media (prefers-reduced-motion: reduce)` désactive toutes les animations

---

## 13. Accessibilité structurelle

- [ ] **Sémantique HTML** `[a11y]` — `nav`, `main`, `aside`, `article`, `header`, `footer` — pas que des `div`
- [ ] **Rôles ARIA** `[a11y]` — Seulement si l'élément natif ne suffit pas
- [ ] **Ordre du DOM = ordre logique** `[a11y]` — Ce qu'on lit avec Tab = ce qu'on lit visuellement
- [ ] **Couleur seule ne suffit pas** `[a11y]` — Icône, pattern, label pour différencier success/error
- [ ] **Texte alternatif** `[a11y]` — Images, graphiques, icônes décoratives vs informatives
- [ ] **Titres de pages (`<title>`)** — Unique par page, format : Page | Marque

---

## 14. Design tokens & Système

- [ ] **Variables CSS / tokens** `[base]` — `--color-primary`, `--spacing-md` — source unique de vérité
- [ ] **Thème (theming)** — Tokens par thème, changement sans refactoring
- [ ] **Storybook ou doc de composants** — Chaque composant documenté avec ses variantes
- [ ] **Reset / normalize CSS** `[base]` — Base cohérente entre navigateurs
- [ ] **Z-index scale** — Définir les niveaux : dropdown, modal, toast, tooltip
- [ ] **Print styles** — `@media print` — masquer nav, ajuster couleurs

---

*Total : 107 éléments — 15 catégories*
