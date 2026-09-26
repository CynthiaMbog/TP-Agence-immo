// Structure de données des créations StyleMec.
// Pour ajouter une nouvelle création : ajoute un nouvel objet à ce tableau.
// Aucune donnée n'est codée en dur dans les pages : tout part d'ici.

export type Category =
  | "Mariage & Cérémonies"
  | "Tenues élégantes"
  | "Sweats & Mode quotidienne"
  | "Soirée & Événements";

export type Occasion = "Mariage" | "Cérémonie" | "Soirée" | "Quotidien" | "Événement";

export type Season = "Toutes saisons" | "Hiver" | "Été" | "Mi-saison";

export type ClothingType =
  | "Robe"
  | "Ensemble"
  | "Sweat à capuche"
  | "Tailleur / Blazer";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  details: string[];
  images: string[];
  category: Category;
  occasion: Occasion[];
  season: Season;
  type: ClothingType;
  color: string;
  disponibilite: "Sur commande" | "Confection sur mesure";
  price: string | null; // null => afficher "Sur devis"
  surMesure: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "ensemble-wax-couple-ceremonie",
    name: "Ensemble Wax Couple — Cérémonie",
    description:
      "Un ensemble couple pensé pour les grandes cérémonies : agbada blanc brodé de wax pour monsieur, robe sirène blanche à traîne wax assortie pour madame.",
    details: [
      "Broderie wax vert, jaune et violet sur base blanche",
      "Robe sirène épaulettes dentelle, traîne wax",
      "Agbada assorti avec col brodé",
      "Pièce confectionnée sur mesure aux mensurations du couple",
    ],
    images: [
      "/images/products/ensemble-couple-ceremonie-1.jpg",
    ],
    category: "Mariage & Cérémonies",
    occasion: ["Mariage", "Cérémonie"],
    season: "Toutes saisons",
    type: "Ensemble",
    color: "Blanc, vert, jaune, violet",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
  {
    id: "2",
    slug: "sweat-wax-rose-patchwork",
    name: "Sweat Wax Rose — Patchwork",
    description:
      "Un sweat à capuche fuchsia revisité avec des empiècements wax graphiques sur les manches et un patch brodé sur le devant, pour un look casual affirmé.",
    details: [
      "Molleton rose fuchsia",
      "Manches et capuche doublées en wax multicolore",
      "Patch appliqué wax cousu main",
      "Finitions côtelées aux poignets et à la taille",
    ],
    images: ["/images/products/sweat-wax-rose-1.jpg"],
    category: "Sweats & Mode quotidienne",
    occasion: ["Quotidien"],
    season: "Hiver",
    type: "Sweat à capuche",
    color: "Rose fuchsia, multicolore",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
  {
    id: "3",
    slug: "robe-sweat-wax-bleu-or",
    name: "Robe-Sweat Wax Bleu & Or",
    description:
      "Une robe-sweat oversize bleu pétrole aux manches raglan en wax doré, personnalisable avec vos initiales brodées — le confort streetwear rencontre l'imprimé wax.",
    details: [
      "Coupe robe-sweat, portée ceinturée",
      "Manches raglan en wax motif chaîne doré",
      "Initiales brodées personnalisables",
      "Capuche et cordon assortis",
    ],
    images: ["/images/products/robe-sweat-bleu-or-1.jpg"],
    category: "Sweats & Mode quotidienne",
    occasion: ["Quotidien"],
    season: "Mi-saison",
    type: "Sweat à capuche",
    color: "Bleu pétrole, doré",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
  {
    id: "4",
    slug: "tailleur-wax-rouge-noir",
    name: "Tailleur Wax Rouge & Noir",
    description:
      "Un blazer imprimé wax graphique rouge, noir et blanc, associé à un pantalon évasé ivoire — pour une allure business affirmée et résolument moderne.",
    details: [
      "Blazer wax motif graphique rouge, noir, blanc et jaune",
      "Doublure et col cintrés",
      "Fermeture par bouton drapé",
      "Se porte avec pantalon évasé uni",
    ],
    images: ["/images/products/tailleur-rouge-noir-1.jpg"],
    category: "Tenues élégantes",
    occasion: ["Événement", "Cérémonie"],
    season: "Toutes saisons",
    type: "Tailleur / Blazer",
    color: "Rouge, noir, blanc, jaune",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
  {
    id: "5",
    slug: "robe-sirene-dentelle-wax-bleu",
    name: "Robe Sirène Dentelle & Wax Bleu",
    description:
      "Une robe sirène élégante, buste en dentelle blanche et jupe en wax bleu et blanc à motifs géométriques, complétée d'un sac assorti et d'un headpiece.",
    details: [
      "Buste dentelle florale blanche",
      "Jupe sirène en wax bleu et blanc",
      "Sac pochette et headpiece assortis",
      "Finitions dentelle au bas de la jupe",
    ],
    images: ["/images/products/robe-sirene-dentelle-bleu-1.jpg"],
    category: "Mariage & Cérémonies",
    occasion: ["Mariage", "Cérémonie", "Événement"],
    season: "Toutes saisons",
    type: "Robe",
    color: "Bleu, blanc",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
  {
    id: "6",
    slug: "robe-soiree-fleurie-emeraude",
    name: "Robe de Soirée Fleurie Émeraude",
    description:
      "Une robe longue satinée vert émeraude à imprimé fleuri rouge, décolleté plongeant et nœud à l'épaule — une pièce spectaculaire pour vos soirées.",
    details: [
      "Satin vert émeraude imprimé floral rouge",
      "Décolleté plongeant, dos nu",
      "Nœud drapé à l'épaule",
      "Jupe évasée longueur au sol",
    ],
    images: ["/images/products/robe-soiree-fleurie-emeraude-1.jpg"],
    category: "Soirée & Événements",
    occasion: ["Soirée", "Événement"],
    season: "Toutes saisons",
    type: "Robe",
    color: "Vert émeraude, rouge",
    disponibilite: "Confection sur mesure",
    price: null,
    surMesure: true,
  },
];

export const categories: Category[] = [
  "Mariage & Cérémonies",
  "Tenues élégantes",
  "Sweats & Mode quotidienne",
  "Soirée & Événements",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) =>
    [p.name, p.description, p.category, p.type, p.color, ...p.occasion]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}
