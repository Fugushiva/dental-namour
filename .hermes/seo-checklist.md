# Checklist SEO — Éléments à penser pour un site web

> Légende des tags : `[base]` fondamental · `[tech]` technique · `[contenu]` éditorial · `[off]` off-page

---

## 0. Posture d'indexation — Règle Hermes (PRIORITAIRE)

> **RÈGLE ABSOLUE** : Tout site construit par le système Hermes est livré en mode **"invisible"** par défaut.
> L'indexation Google est **volontairement bloquée** lors du build. Elle sera activée manuellement par le propriétaire après la vente, s'il le décide.

### Implémentation obligatoire au build

- [ ] **`robots.txt` bloquant tout** — Contenu exact :
  ```
  User-agent: *
  Disallow: /

  # Indexation désactivée — site en phase de prospection Hermes
  # À modifier manuellement après signature client
  ```
- [ ] **`X-Robots-Tag: noindex` en header HTTP** — Via `next.config.js` (headers globaux) pour tous les crawlers qui ignorent robots.txt
- [ ] **`<meta name="robots" content="noindex, nofollow">` global** — Dans le `<head>` de chaque page via le layout racine
- [ ] **Sitemap XML non soumis à Google Search Console** — Le fichier peut exister mais ne doit pas être soumis
- [ ] **Pas de Google Search Console configuré** — Ne pas créer de propriété GSC pour ce site
- [ ] **Pas de Google Analytics / GA4** — Aucun tracking jusqu'à la vente confirmée

### Ce qui N'EST PAS affecté par cette règle

- Performance (Core Web Vitals) — toujours optimisée
- Données structurées (Schema.org) — présentes dans le HTML mais inactives tant que le site est noindex
- Balises title / meta description — rédigées correctement pour être prêtes à l'activation
- Accessibilité — non liée à l'indexation

### Activation post-vente (hors scope Hermes)

Quand le client signe, il doit lui-même (ou son développeur) :
1. Remplacer le `robots.txt` par un fichier autorisant les crawlers
2. Supprimer le header `X-Robots-Tag: noindex`
3. Changer la meta robots en `index, follow` dans le layout racine
4. Créer et vérifier la propriété Google Search Console
5. Soumettre le sitemap

---

## 1. Balises HTML fondamentales

- [ ] **Title tag** `[base]` — Unique par page, 50–60 caractères, mot-clé principal en premier
- [ ] **Meta description** `[base]` — Unique par page, 150–160 caractères, incitative au clic
- [ ] **Balise H1** `[base]` — Une seule par page, contient le mot-clé principal
- [ ] **Hiérarchie H2–H6** `[base]` — Structure logique, jamais de saut de niveau (H1 → H3)
- [ ] **Balise canonical** `[tech]` — `<link rel="canonical">` sur chaque page pour éviter le contenu dupliqué
- [ ] **Balise robots** `[tech]` — `noindex` / `nofollow` sur pages à exclure (panier, compte, filtres)
- [ ] **Balise lang** `[tech]` — `<html lang="fr">` — signal de langue pour Google
- [ ] **Charset UTF-8** `[tech]` — `<meta charset="UTF-8">` déclaré en premier dans `<head>`
- [ ] **Meta viewport** `[tech]` — `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## 2. Contenu & mots-clés

- [ ] **Recherche de mots-clés** `[base]` — Volume, intention, difficulté — outil : Ahrefs, Semrush, GSC
- [ ] **Intention de recherche** `[base]` — Informationnel / navigationnel / transactionnel / commercial
- [ ] **Mot-clé principal par page** `[base]` — Une page = un sujet = un mot-clé cible
- [ ] **Mots-clés secondaires / LSI** `[contenu]` — Synonymes, champ lexical, questions associées
- [ ] **Densité naturelle** `[contenu]` — Pas de keyword stuffing — présence dans titre, intro, sous-titres
- [ ] **Contenu long & exhaustif** `[contenu]` — Couvrir le sujet mieux que les concurrents en top 10
- [ ] **Contenu unique** `[base]` — Zéro duplication interne ou externe
- [ ] **Mise à jour du contenu** `[contenu]` — Date de dernière modification visible et fraîche
- [ ] **Featured snippet** `[contenu]` — Format question/réponse, listes, tableaux pour viser la position 0
- [ ] **People Also Ask** `[contenu]` — Intégrer les questions fréquentes dans le contenu

---

## 3. Structure des URLs

- [ ] **URLs courtes et lisibles** `[base]` — `/guide-seo` plutôt que `/page?id=42&cat=3`
- [ ] **Mot-clé dans l'URL** `[base]` — Slug descriptif, en minuscules, sans accents
- [ ] **Séparateur tiret (-)** `[tech]` — Toujours `-`, jamais `_` (Google traite `_` comme jointure)
- [ ] **Structure cohérente** `[tech]` — `/categorie/sous-categorie/page` — refléter l'arborescence
- [ ] **Pas de paramètres inutiles** `[tech]` — Sessions, filtres, tracking → canonicalize ou `noindex`
- [ ] **Redirections 301** `[tech]` — Toute URL modifiée redirige vers la nouvelle — jamais de 404 orphelins
- [ ] **Pas de trailing slash incohérent** `[tech]` — Choisir avec ou sans `/` final, et le tenir partout

---

## 4. SEO technique

- [ ] **Vitesse de chargement** `[tech]` — Core Web Vitals : LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] **Mobile-first** `[base]` — Google indexe en mobile-first — tester avec Search Console
- [ ] **HTTPS** `[base]` — Certificat SSL valide, zéro contenu mixte (HTTP dans HTTPS)
- [ ] **Crawlabilité** `[tech]` — Aucun lien important bloqué par JS, robots.txt ou `noindex`
- [ ] **Profondeur de clic** `[tech]` — Toute page importante accessible en ≤ 3 clics depuis la home
- [ ] **Pas d'erreurs 4xx / 5xx** `[tech]` — Crawler régulier (Screaming Frog, Sitebulb)
- [ ] **Pas de redirections chaînées** `[tech]` — A → B → C = perte de PageRank — réduire à A → C
- [ ] **Pagination** `[tech]` — `rel="next"` / `rel="prev"` ou infinite scroll traité correctement
- [ ] **JavaScript SEO** `[tech]` — Contenu critique en HTML statique ou SSR — tester avec "Fetch as Google"
- [ ] **Log files analysés** `[tech]` — Vérifier que Googlebot crawle les bonnes pages, pas les mauvaises
- [ ] **Hreflang** `[tech]` — Pour sites multilingues : balise hreflang correcte sur chaque version

---

## 5. Sitemap & robots.txt

- [ ] **Sitemap XML** `[base]` — Généré automatiquement, soumis dans Google Search Console
- [ ] **Sitemap à jour** `[tech]` — Ne contient que les pages indexables (pas de `noindex`, pas de 404)
- [ ] **Sitemap d'images / vidéos** `[tech]` — Si le site repose sur du contenu media
- [ ] **robots.txt propre** `[base]` — Bloquer crawl bots sur `/admin`, `/api`, `/cdn-cgi` etc.
- [ ] **robots.txt ne bloque pas les ressources CSS/JS** `[tech]` — Google doit pouvoir rendre la page
- [ ] **Lien vers sitemap dans robots.txt** `[tech]` — `Sitemap: https://monsite.com/sitemap.xml`

---

## 6. Maillage interne

- [ ] **Liens internes sur mots-clés** `[base]` — Ancre descriptive, pas "cliquez ici"
- [ ] **Pages orphelines** `[tech]` — Toute page doit recevoir au moins un lien interne
- [ ] **Pages piliers & clusters** `[contenu]` — Page mère + pages satellites liées entre elles
- [ ] **Nombre de liens par page** `[tech]` — Raisonnable (< 100 liens par page recommandé)
- [ ] **Liens brisés internes** `[tech]` — Audit régulier, corriger ou rediriger
- [ ] **Distribution du PageRank** `[tech]` — Les pages importantes reçoivent plus de liens internes
- [ ] **Breadcrumbs** `[base]` — Navigation hiérarchique + données structurées `BreadcrumbList`

---

## 7. Données structurées (Schema.org)

- [ ] **Type de schéma adapté au contenu** `[base]` — Article, Product, FAQ, HowTo, LocalBusiness…
- [ ] **JSON-LD recommandé** `[tech]` — Format préféré de Google, dans le `<head>` ou `<body>`
- [ ] **Schema Organization** `[base]` — Nom, logo, réseaux sociaux, contact de l'organisation
- [ ] **Schema WebSite + Sitelinks Searchbox** `[tech]` — Activer la recherche interne dans les SERP
- [ ] **Schema BreadcrumbList** `[tech]` — Sur toutes les pages avec breadcrumb visible
- [ ] **Schema Article / BlogPosting** `[contenu]` — Date, auteur, image pour les articles
- [ ] **Schema FAQ** `[contenu]` — Sur les pages avec section questions/réponses
- [ ] **Schema Product** `[base]` — Prix, dispo, avis — indispensable pour l'e-commerce
- [ ] **Schema LocalBusiness** `[base]` — Adresse, horaires, téléphone pour les commerces locaux
- [ ] **Schema Review / AggregateRating** `[off]` — Notes et avis visibles dans les résultats
- [ ] **Validation** `[tech]` — Tester avec Rich Results Test de Google

---

## 8. Images & médias

- [ ] **Attribut `alt` descriptif** `[base]` — Contient le mot-clé si pertinent, naturel
- [ ] **Nom de fichier optimisé** `[base]` — `guide-seo-debutant.webp` pas `IMG_4823.jpg`
- [ ] **Format moderne** `[tech]` — WebP / AVIF — poids réduit sans perte de qualité
- [ ] **Compression** `[tech]` — < 200 Ko idéalement — outil : Squoosh, Sharp, ImageOptim
- [ ] **Lazy loading** `[tech]` — `loading="lazy"` sur images hors viewport
- [ ] **Dimensions déclarées** `[tech]` — `width` et `height` dans le HTML pour éviter le CLS
- [ ] **Sitemap d'images** `[tech]` — Si les images sont une source de trafic (Google Images)
- [ ] **Vidéo** `[contenu]` — Transcript texte + Schema VideoObject pour indexation

---

## 9. Expérience utilisateur (UX Signals)

- [ ] **Taux de rebond & temps sur page** `[base]` — Contenu engageant, chargement rapide
- [ ] **Pas de popups intrusifs au chargement** `[base]` — Pénalité Google "intrusive interstitials"
- [ ] **Navigation claire** `[base]` — L'utilisateur trouve ce qu'il cherche en < 3 clics
- [ ] **Pages 404 personnalisées** `[tech]` — Lien vers la home + moteur de recherche interne
- [ ] **Accessibilité** `[base]` — Contraste, focus, sémantique HTML — signal de qualité global
- [ ] **Design responsive** `[base]` — Mobile-first, aucun contenu caché sur mobile
- [ ] **Sécurité** `[tech]` — Pas de malware, pas d'injections, Google Search Console clean

---

## 10. SEO local

- [ ] **Google Business Profile** `[base]` — Fiche complète, vérifiée, à jour
- [ ] **NAP cohérent** `[base]` — Nom, Adresse, Téléphone identiques partout (site, GBP, annuaires)
- [ ] **Avis Google** `[off]` — Demander des avis, répondre à tous (positifs et négatifs)
- [ ] **Citations locales** `[off]` — Présence sur Pages Jaunes, Yelp, TripAdvisor selon secteur
- [ ] **Pages locales** `[contenu]` — Une page par ville / zone si multi-sites
- [ ] **Schema LocalBusiness** `[base]` — Adresse, horaires, coordonnées GPS structurées
- [ ] **Mots-clés géolocalisés** `[contenu]` — "plombier Paris 15" dans titres et contenus

---

## 11. Netlinking & autorité (Off-page)

- [ ] **Profil de backlinks analysé** `[off]` — Ahrefs / Semrush / Majestic — quality > quantity
- [ ] **Backlinks depuis sites autoritaires** `[off]` — DR élevé, thématique proche
- [ ] **Ancres diversifiées** `[off]` — Branded, exact match, générique — éviter la sur-optimisation
- [ ] **Désaveu de liens toxiques** `[off]` — Google Disavow Tool si spam détecté
- [ ] **Relations presse / RP digitales** `[off]` — Articles invités, interviews, études citées
- [ ] **Liens depuis les partenaires** `[off]` — Fournisseurs, clients, associations du secteur
- [ ] **Social signals** `[off]` — Partages, mentions — indirect mais corrélé au ranking

---

## 12. Google Search Console & outils

- [ ] **Search Console configuré** `[base]` — Propriété vérifiée, sitemap soumis
- [ ] **Google Analytics / GA4** `[base]` — Suivi du trafic organique, conversions
- [ ] **Indexation vérifiée** `[tech]` — Toutes les pages importantes sont indexées (`site:monsite.com`)
- [ ] **Erreurs de couverture résolues** `[tech]` — Zéro erreur critique dans GSC
- [ ] **Performances suivies** `[base]` — Impressions, CTR, position moyenne par requête
- [ ] **Liens entrants dans GSC** `[off]` — Monitorer les nouveaux liens et les pertes
- [ ] **Audit SEO régulier** `[tech]` — Screaming Frog / Sitebulb trimestriel minimum
- [ ] **Suivi de positions** `[base]` — Outil dédié : Ahrefs, Semrush, SERPWatcher

---

## 13. Contenu éditorial & stratégie

- [ ] **Calendrier éditorial** `[contenu]` — Publication régulière — la fréquence compte
- [ ] **Contenu E-E-A-T** `[contenu]` — Expertise, Experience, Authoritativeness, Trustworthiness
- [ ] **Auteurs identifiés** `[contenu]` — Bio d'auteur, profil LinkedIn, Schema Person
- [ ] **Sources et références citées** `[contenu]` — Liens sortants vers sources autoritaires
- [ ] **Contenu multiformat** `[contenu]` — Texte + image + vidéo + infographie sur les sujets clés
- [ ] **Pages "À propos" et "Contact"** `[base]` — Signal de confiance pour Google
- [ ] **Mentions légales / CGU / Politique de confidentialité** `[base]` — Obligatoire et indexé
- [ ] **Revamp de contenu ancien** `[contenu]` — Mettre à jour les pages qui perdent des positions

---

## 14. International & multilingue

- [ ] **Balises hreflang correctes** `[tech]` — `<link rel="alternate" hreflang="en" href="...">` sur chaque page
- [ ] **Structure de site choisie** `[tech]` — Sous-domaine (`en.site.com`) ou sous-répertoire (`site.com/en/`)
- [ ] **Traduction native** `[contenu]` — Pas de traduction automatique non relue
- [ ] **Contenu localisé** `[contenu]` — Adapté à la culture, pas juste traduit mot à mot
- [ ] **Géociblage dans GSC** `[tech]` — Configurer le pays cible pour chaque propriété
- [ ] **Devises et formats locaux** `[contenu]` — Date, heure, adresse selon la région

---

*Total : 100 éléments — 14 catégories*
