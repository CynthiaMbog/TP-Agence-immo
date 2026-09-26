# StyleMec — Boutique en ligne

Site vitrine + catalogue pour StyleMec (modéliste sur mesure, Bruxelles), construit avec Next.js (App Router), TypeScript et Tailwind CSS v4. Le parcours de commande redirige vers WhatsApp — aucun paiement en ligne dans cette première version.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## Build de production

```bash
npm run build
npm run start
```

## Déployer

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com) (créateur de Next.js) :

1. Pousse ce dossier sur un dépôt GitHub.
2. Importe le dépôt sur vercel.com → "New Project".
3. Aucune variable d'environnement n'est nécessaire. Vercel détecte Next.js automatiquement.

Le projet fonctionne aussi sur n'importe quel hébergeur compatible Node.js (Netlify, Render, un VPS avec `npm run build && npm run start`, etc.).

## Ajouter une nouvelle création

Tout le catalogue est centralisé dans **`lib/products.ts`**. Pour ajouter une création :

1. Dépose la ou les photos dans `public/images/products/`.
2. Ajoute un nouvel objet au tableau `products` dans `lib/products.ts` (copie un objet existant comme modèle) :
   - `slug` : identifiant unique utilisé dans l'URL (`/boutique/mon-slug`)
   - `images` : chemin(s) vers les photos ajoutées
   - `category` : une des 4 catégories existantes, ou une nouvelle (ajoute-la aussi au tableau `categories`)
   - `price` : laisse `null` pour afficher "Sur devis"
3. Sauvegarde — la fiche produit, la page boutique, la recherche et les filtres se mettent à jour automatiquement, aucune autre page à toucher.

## Modifier le numéro WhatsApp ou les messages préremplis

Tout est centralisé dans **`lib/whatsapp.ts`** (`WHATSAPP_NUMBER`, `WHATSAPP_DISPLAY`, et les modèles de messages `WA_MESSAGES`).

## Structure du projet

```
app/                  Pages (App Router)
  page.tsx            Accueil
  boutique/page.tsx   Catalogue (recherche + filtres)
  boutique/[slug]/    Fiche produit dynamique
  sur-mesure/         Parcours de commande sur mesure
  a-propos/           Présentation de la marque et de la styliste
  contact/            Coordonnées
components/           Composants réutilisables (Header, Footer, ProductCard, bouton WhatsApp...)
lib/products.ts       Données produits (source unique de vérité)
lib/whatsapp.ts       Logique et messages WhatsApp
public/images/        Photos (produits + carte de visite)
```

## Charte graphique

Couleurs extraites de la carte de visite StyleMec (bleu marine + or), sur un fond crème assorti aux photos de créations. Les tokens sont définis dans `app/globals.css` (`--color-navy-*`, `--color-gold-*`, `--color-cream-*`) et utilisables directement comme classes Tailwind (`bg-navy-950`, `text-gold-500`, etc.).

## À compléter / prochaines étapes possibles

- Remplacer les photos par des visuels dédoublonnés si tu obtiens des prises de vue individuelles par création (les fichiers actuels sont des planches-contact avec plusieurs vues dans une seule image).
- Ajouter les prix si tu souhaites les communiquer publiquement.
- Ajouter d'autres créations au fil du temps (voir section ci-dessus).
- Un jour, si besoin : paiement en ligne, formulaire de mesures en ligne, compte client — non inclus volontairement dans cette V1, conformément au brief.
