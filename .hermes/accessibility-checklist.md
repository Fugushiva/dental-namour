# Checklist Accessibilité Web

> Légende des niveaux : `[A]` minimum légal · `[AA]` standard professionnel · `[AAA]` niveau supérieur · `[best]` bonne pratique

---

## 1. Perception visuelle

- [ ] **Contraste texte normal** `[AA]` — Ratio ≥ 4.5:1 entre le texte et son fond
- [ ] **Contraste grands textes (≥ 18px ou 14px gras)** `[AA]` — Ratio ≥ 3:1 suffisant pour les grandes tailles
- [ ] **Contraste composants UI et graphiques** `[AA]` — Bordures d'inputs, icônes actives, graphiques — ratio ≥ 3:1
- [ ] **Information pas transmise par couleur seule** `[A]` — Ajouter icône, motif ou label — ne pas dire juste "en rouge c'est une erreur"
- [ ] **Texte redimensionnable jusqu'à 200% sans perte** `[AA]` — Pas de scroll horizontal, pas de contenu coupé à 200% zoom navigateur
- [ ] **Texte réel, pas du texte dans une image** `[AA]` — Sauf logo — utiliser du HTML/CSS pour tout texte
- [ ] **Espacement texte personnalisable** `[AA]` — Le contenu tient si line-height ≥ 1.5, letter-spacing ≥ 0.12em, word-spacing ≥ 0.16em
- [ ] **Pas de contenu uniquement en image** `[A]` — Chaque image porteuse de sens a un équivalent textuel
- [ ] **Contenu visible sans CSS** `[best]` — L'ordre de lecture reste logique si les styles sont désactivés

---

## 2. Alternatives textuelles

- [ ] **Alt sur toutes les images informatives** `[A]` — Court, factuel, décrit ce que l'image apporte au contexte
- [ ] **Alt vide sur les images décoratives** `[A]` — `alt=""` — le lecteur d'écran l'ignore complètement
- [ ] **Sous-titres sur les vidéos pré-enregistrées** `[A]` — Captions synchronisées, fidèles au contenu audio
- [ ] **Transcription pour les podcasts / audio** `[A]` — Texte complet du contenu audio disponible
- [ ] **Description audio pour les vidéos** `[AA]` — Décrire les éléments visuels essentiels non perçus à l'oreille
- [ ] **Alt sur les graphiques et infographies** `[A]` — Résumer les données clés ou pointer vers un tableau équivalent
- [ ] **Titre et description pour les iframes** `[A]` — `title="..."` sur chaque `<iframe>` pour identifier son contenu

---

## 3. Navigation clavier

- [ ] **Tout contenu accessible au clavier** `[A]` — Tab, Shift+Tab, Entrée, Espace, flèches — aucun piège
- [ ] **Focus visible sur tous les éléments interactifs** `[AA]` — Ne jamais faire `outline: none` sans alternative visible
- [ ] **Ordre de focus logique** `[A]` — L'ordre Tab suit le sens de lecture — pas de sauts incohérents
- [ ] **Pas de piège clavier** `[A]` — L'utilisateur peut toujours quitter un composant avec Tab ou Échap
- [ ] **Skip nav link présent** `[A]` — Premier lien du DOM, visible au focus — "Aller au contenu principal"
- [ ] **Raccourcis clavier documentés** `[AA]` — Si des raccourcis existent, ils sont listés quelque part
- [ ] **Composants custom navigables** `[A]` — Carousel, modal, dropdown, tabs — focus géré correctement
- [ ] **Focus retourné après fermeture de modal** `[best]` — À la fermeture, le focus revient sur l'élément déclencheur

---

## 4. Sémantique HTML & ARIA

- [ ] **Landmarks HTML5 présents** `[best]` — `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>` — pas que des `<div>`
- [ ] **Hiérarchie de titres logique** `[A]` — H1 unique par page, pas de saut H1→H3, structure arborescente
- [ ] **Labels sur tous les inputs** `[A]` — `<label for="...">` visible et associé — pas de placeholder seul
- [ ] **Rôles ARIA uniquement si nécessaire** `[best]` — Ne pas sur-ariaiser — préférer l'élément HTML natif sémantique
- [ ] **aria-label ou aria-labelledby sur icônes actives** `[A]` — Bouton icône seule sans texte → `aria-label="Fermer"`
- [ ] **aria-live pour les contenus dynamiques** `[AA]` — Toasts, erreurs injectées en JS, compteurs — annoncés aux lecteurs
- [ ] **aria-expanded sur composants dépliables** `[A]` — Accordion, dropdown, nav mobile — état ouvert/fermé annoncé
- [ ] **aria-required ou required sur les champs obligatoires** `[A]` — Signaler l'obligation avant la soumission, pas seulement après
- [ ] **role="alert" sur les erreurs de formulaire** `[AA]` — Message d'erreur injecté dynamiquement — lu immédiatement
- [ ] **Langue déclarée sur `<html>`** `[A]` — `<html lang="fr">` — essentiel pour la prononciation des lecteurs d'écran
- [ ] **Changements de langue inline signalés** `[AA]` — `lang="en"` sur un mot ou passage dans une autre langue

---

## 5. Responsive & touch

- [ ] **Touch target ≥ 44×44px** `[AA]` — Boutons, liens, icônes — Apple HIG et W3C recommandent 44px minimum
- [ ] **Espacement entre cibles tactiles** `[AA]` — ≥ 8px entre deux zones cliquables adjacentes
- [ ] **Pas de blocage du zoom navigateur** `[AA]` — Ne jamais utiliser `user-scalable=no` dans le viewport meta
- [ ] **Orientation non verrouillée** `[AA]` — Le contenu fonctionne en portrait ET en paysage
- [ ] **Gestures alternatives disponibles** `[AA]` — Tout geste multi-touch (pinch, swipe) a une alternative simple
- [ ] **inputmode adapté sur les inputs** `[best]` — `inputmode="numeric"` pour les chiffres, `"email"` pour l'email, etc.

---

## 6. Formulaires & erreurs

- [ ] **Identification claire des erreurs** `[A]` — Message d'erreur textuel, précis, à côté du champ concerné
- [ ] **Suggestion de correction fournie** `[AA]` — Ne pas dire "format invalide" — dire "ex : jean@mail.com"
- [ ] **Confirmation avant action irréversible** `[AA]` — Suppression, achat, envoi — permettre de vérifier avant de valider
- [ ] **Autocomplete sur les champs courants** `[AA]` — Nom, email, téléphone, adresse — `autocomplete="..."` correct
- [ ] **Délai de session avec avertissement** `[AA]` — Prévenir avant déconnexion, permettre de prolonger la session
- [ ] **Pas de limite de temps sur les formulaires longs** `[A]` — Ou option pour désactiver / prolonger le délai
- [ ] **Validation compréhensible pour les lecteurs d'écran** `[A]` — L'erreur est annoncée sans que l'utilisateur ait à chercher

---

## 7. Mouvements & animations

- [ ] **prefers-reduced-motion respecté** `[AA]` — Désactiver ou réduire toutes les animations si l'OS le demande
- [ ] **Pas de clignotement > 3 fois/s** `[A]` — Risque de déclenchement épileptique — éviter absolument
- [ ] **Contenu animé peut être mis en pause** `[A]` — Carrousel auto, vidéo en autoplay, GIF — bouton pause accessible
- [ ] **Autoplay sans son seulement** `[AA]` — Vidéo en autoplay → muette par défaut, contrôles visibles
- [ ] **Animation ne cache pas de contenu essentiel** `[best]` — Overlay animé, loader plein écran — le contenu reste accessible

---

## 8. Lisibilité & compréhension

- [ ] **Niveau de lecture adapté** `[AAA]` — Viser un niveau secondaire — phrases courtes, mots courants
- [ ] **Abréviations explicitées** `[A]` — Première occurrence : terme complet + abréviation entre parenthèses
- [ ] **Liens descriptifs hors contexte** `[A]` — "Lire la suite" sans contexte = inaccessible — "Lire l'article sur X"
- [ ] **Titre de page unique et descriptif** `[A]` — `<title>` = "Page | Marque" — différent sur chaque page
- [ ] **But d'un lien identifiable** `[A]` — L'ancre seule ou avec son contexte immédiat dit où mène le lien
- [ ] **Avertissement pour liens externes** `[best]` — Indiquer visuellement et textuellement l'ouverture dans un nouvel onglet

---

## 9. Outils & tests

- [ ] **Audit automatique (axe, Lighthouse)** `[best]` — Zéro erreur critique — couvre environ 30% des problèmes
- [ ] **Test navigation clavier complète** `[best]` — Parcourir toute la page au Tab sans souris
- [ ] **Test avec lecteur d'écran** `[best]` — NVDA + Firefox (Windows) ou VoiceOver + Safari (Mac/iOS)
- [ ] **Test zoom 200%** `[best]` — Pas de scroll horizontal, pas de contenu coupé
- [ ] **Test mode sombre et contraste élevé** `[best]` — Vérifier que le design tient avec les préférences système
- [ ] **Vérification du contraste avec un outil** `[best]` — WebAIM Contrast Checker, Colour Contrast Analyser
- [ ] **Test sans CSS (mode texte brut)** `[best]` — L'ordre de lecture reste logique et le contenu sensé

---

## Ressources utiles

- [WCAG 2.2 (officiel)](https://www.w3.org/TR/WCAG22/) — Spécification complète du W3C
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — Vérifier les ratios de contraste
- [axe DevTools](https://www.deque.com/axe/) — Extension navigateur pour audit automatique
- [WAVE](https://wave.webaim.org/) — Outil d'audit visuel en ligne
- [Inclusive Components](https://inclusive-components.design/) — Patterns de composants accessibles

---

*Total : 74 critères — 9 catégories*
*`[A]` : 24 · `[AA]` : 29 · `[AAA]` : 1 · `[best]` : 20*
