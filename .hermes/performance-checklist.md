# Checklist Performance Web

> Légende : `[critique]` impact direct sur LCP/CLS/INP · `[important]` gain significatif · `[optimisation]` amélioration fine

---

## 1. Core Web Vitals

- [ ] **LCP < 2.5s (Largest Contentful Paint)** `[critique]` — Temps d'affichage du plus grand élément visible
- [ ] **CLS < 0.1 (Cumulative Layout Shift)** `[critique]` — Stabilité visuelle — pas de saut de mise en page
- [ ] **INP < 200ms (Interaction to Next Paint)** `[critique]` — Réactivité aux clics, touches et clavier
- [ ] **FCP < 1.8s (First Contentful Paint)** `[important]` — Premier pixel de contenu affiché
- [ ] **TTFB < 800ms (Time to First Byte)** `[important]` — Délai de réponse du serveur
- [ ] **TTI < 3.8s (Time to Interactive)** `[important]` — Page utilisable sans blocage JS
- [ ] **Mesure en conditions réelles** `[critique]` — Google Search Console → Core Web Vitals, pas seulement Lighthouse lab

---

## 2. Images

- [ ] **Format moderne WebP ou AVIF** `[critique]` — 25–50% plus léger que JPEG/PNG à qualité égale
- [ ] **Fallback pour les formats modernes** `[important]` — `<picture>` avec `<source>` WebP + `<img>` JPEG de secours
- [ ] **Compression appliquée** `[critique]` — Qualité 75–85% JPEG, outil : Squoosh, Sharp, ImageOptim
- [ ] **Dimensions déclarées dans le HTML** `[critique]` — `width` et `height` sur chaque `<img>` — évite le CLS
- [ ] **`loading="lazy"` sur images hors viewport** `[important]` — Pas sur le LCP element ni les images above-the-fold
- [ ] **`fetchpriority="high"` sur l'image LCP** `[critique]` — Charger en priorité le plus grand visuel de la page
- [ ] **srcset et sizes pour le responsive** `[important]` — Servir la taille adaptée à l'écran, pas une image 2000px sur mobile
- [ ] **Pas d'images de fond CSS pour le contenu critique** `[important]` — Les images CSS ne sont pas priorisées par le navigateur
- [ ] **CDN d'images avec redimensionnement à la volée** `[optimisation]` — Cloudinary, Imgix, Cloudflare Images
- [ ] **Pas d'images animées GIF** `[important]` — Remplacer par `<video autoplay loop muted playsinline>`
- [ ] **Sprites SVG pour les icônes répétées** `[optimisation]` — Réduire les requêtes HTTP sur les icônes

---

## 3. Polices (fonts)

- [ ] **`font-display: swap`** `[critique]` — Afficher le texte en police système pendant le chargement
- [ ] **Subsetting — charger uniquement les glyphes nécessaires** `[important]` — `&subset=latin` — éviter les 300 Ko de glyphes inutilisés
- [ ] **Précharger les polices critiques** `[important]` — `<link rel="preload" as="font" crossorigin>` dans le `<head>`
- [ ] **2 familles de polices max** `[important]` — Chaque famille = plusieurs requêtes réseau
- [ ] **Polices hébergées en local ou sur CDN fiable** `[optimisation]` — Éviter Google Fonts en production (RGPD + latence)
- [ ] **Variable fonts si plusieurs graisses** `[optimisation]` — Un seul fichier pour toutes les graisses au lieu de 4 fichiers
- [ ] **`size-adjust` pour éviter le FOUT** `[optimisation]` — Ajuster la police de secours pour limiter le saut visuel

---

## 4. CSS

- [ ] **CSS critique inline dans `<head>`** `[critique]` — Above-the-fold sans render-blocking — < 14 Ko idéalement
- [ ] **Charger le CSS non-critique en différé** `[important]` — `media="print" onload="this.media='all'"` pattern
- [ ] **Supprimer le CSS inutilisé (purge)** `[important]` — PurgeCSS, Tailwind purge — réduire la taille du bundle
- [ ] **Pas de `@import` CSS** `[important]` — Crée des requêtes en cascade — utiliser `<link>` ou bundler
- [ ] **Minification du CSS** `[important]` — Supprimer espaces, commentaires — cssnano, PostCSS
- [ ] **Animations uniquement sur `transform` et `opacity`** `[critique]` — Éviter `left`, `top`, `width` — GPU only
- [ ] **`will-change` avec parcimonie** `[optimisation]` — Seulement sur les éléments animés fréquemment
- [ ] **Éviter les sélecteurs universels** `[optimisation]` — `* {}` et sélecteurs trop génériques ralentissent le rendu
- [ ] **`content-visibility: auto` sur sections longues** `[optimisation]` — Sauter le rendu des sections hors viewport

---

## 5. JavaScript

- [ ] **Minification et tree-shaking du bundle** `[critique]` — Supprimer le code mort — esbuild, Rollup, Webpack
- [ ] **Code splitting par route** `[critique]` — Ne charger que le JS de la page courante
- [ ] **`defer` ou `async` sur les scripts non-critiques** `[critique]` — Ne jamais bloquer le parsing HTML
- [ ] **Lazy import des composants lourds** `[important]` — `import()` dynamique — carousel, charts, rich editor
- [ ] **Réduire les dépendances tierces** `[important]` — Chaque librairie ajoutée = Ko en plus — préférer natif
- [ ] **Pas de JavaScript pour le contenu statique** `[important]` — HTML/CSS suffisent pour 80% des UI
- [ ] **Éviter les longues tâches JS (> 50ms)** `[critique]` — Découper avec `setTimeout` ou `scheduler.yield()`
- [ ] **Web Workers pour les calculs lourds** `[optimisation]` — Ne pas bloquer le thread principal
- [ ] **Supprimer les polyfills inutiles** `[optimisation]` — Vérifier le support navigateur cible avant de polyfiller
- [ ] **Bundle size analysé régulièrement** `[important]` — webpack-bundle-analyzer, bundlephobia.com

---

## 6. Réseau & serveur

- [ ] **HTTPS activé** `[critique]` — Obligatoire — HTTP/2 et HTTP/3 nécessitent TLS
- [ ] **HTTP/2 ou HTTP/3 activé** `[important]` — Multiplexage des requêtes — réduire la latence
- [ ] **Compression Brotli ou Gzip** `[critique]` — Brotli préféré — réduire de 60–80% les assets texte
- [ ] **CDN pour les assets statiques** `[critique]` — Servir depuis le PoP le plus proche de l'utilisateur
- [ ] **Headers de cache corrects** `[important]` — `Cache-Control: max-age=31536000, immutable` sur les assets versionnés
- [ ] **Préconnexion aux origines tierces** `[important]` — `<link rel="preconnect">` pour polices, analytics, CDN
- [ ] **Préchargement des ressources critiques** `[important]` — `<link rel="preload">` pour LCP image, police principale, CSS critique
- [ ] **DNS prefetch pour les domaines tiers** `[optimisation]` — `<link rel="dns-prefetch">` — résoudre le DNS en avance
- [ ] **Pas trop de requêtes HTTP** `[important]` — Idéalement < 50 requêtes par page — bundler, sprites, inline SVG
- [ ] **Early hints (103)** `[optimisation]` — Envoyer les preloads avant que le HTML soit prêt
- [ ] **Server-side rendering ou SSG pour les pages statiques** `[important]` — HTML prêt dès la réponse serveur

---

## 7. Cache & stockage

- [ ] **Cache-Control sur tous les assets** `[critique]` — Immutable + hash dans le nom de fichier pour les assets versionnés
- [ ] **Service Worker pour le cache applicatif** `[optimisation]` — Workbox — cache des assets et réponses réseau
- [ ] **Stratégie stale-while-revalidate** `[optimisation]` — Servir depuis le cache, mettre à jour en arrière-plan
- [ ] **Invalider le cache après déploiement** `[critique]` — Hash dans les noms de fichiers ou `?v=xxx` en query string
- [ ] **localStorage / sessionStorage avec parcimonie** `[important]` — Synchrone et bloquant — préférer IndexedDB pour les gros volumes
- [ ] **Purge CDN après mise en production** `[critique]` — S'assurer que les utilisateurs reçoivent la nouvelle version

---

## 8. Rendu & layout

- [ ] **Éviter le reflow (layout thrashing)** `[critique]` — Ne pas lire et écrire le DOM en alternance dans une boucle
- [ ] **`aspect-ratio` CSS sur les médias** `[critique]` — Réserver l'espace avant le chargement — évite le CLS
- [ ] **Pas de `width`/`height` en `auto` sur images dynamiques** `[important]` — Toujours définir des dimensions explicites
- [ ] **Skeleton screens plutôt que spinners** `[important]` — Réserver l'espace exact du contenu — évite le CLS
- [ ] **Pas d'injection de contenu au-dessus du fold** `[critique]` — Bannière cookie, chat widget — apparaître sans déplacer le contenu
- [ ] **Font swap sans saut de layout** `[important]` — `size-adjust` ou `ascent-override` pour matcher la police de secours
- [ ] **`contain: layout` sur les composants isolés** `[optimisation]` — Limiter le recalcul de layout au composant

---

## 9. Third-party scripts

- [ ] **Auditer tous les scripts tiers** `[critique]` — Analytics, chat, publicité, widgets — chacun coûte du temps
- [ ] **Charger les scripts tiers en différé** `[important]` — `defer`, `async` ou chargement après interaction utilisateur
- [ ] **Façade pour les embeds lourds** `[important]` — YouTube : afficher une image jusqu'au clic — lite-youtube-embed
- [ ] **Tag manager chargé en dernier** `[important]` — GTM ne doit pas bloquer le rendu de la page
- [ ] **Limiter le nombre de scripts analytics** `[important]` — Un seul outil analytics suffit dans la plupart des cas
- [ ] **Tester l'impact sans scripts tiers** `[optimisation]` — Lighthouse avec blocage des tiers — mesurer l'écart

---

## 10. Outils de mesure

- [ ] **Google Search Console — Core Web Vitals** `[critique]` — Données terrain réelles (CrUX) par page
- [ ] **Lighthouse (DevTools ou CI)** `[important]` — Audit lab — score > 90 en Performance
- [ ] **WebPageTest** `[important]` — Tests multi-localisations, waterfall, filmstrip
- [ ] **PageSpeed Insights** `[important]` — Combine données lab et terrain en une page
- [ ] **Chrome DevTools — Performance tab** `[important]` — Profiler le thread principal, identifier les longues tâches
- [ ] **Chrome DevTools — Network tab** `[important]` — Vérifier les tailles, les caches, les priorités de chargement
- [ ] **bundlephobia.com** `[optimisation]` — Vérifier le poids d'une dépendance npm avant de l'installer
- [ ] **Intégration CI/CD** `[important]` — Lighthouse CI ou Calibre — bloquer si le score chute sous un seuil

---

*Total : 82 critères — 10 catégories*
*`[critique]` : 28 · `[important]` : 37 · `[optimisation]` : 17*
