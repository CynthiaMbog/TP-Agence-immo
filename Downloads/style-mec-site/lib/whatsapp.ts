// Centralise toute la logique WhatsApp du site.
// Un seul numéro à modifier ici si jamais il change.

export const WHATSAPP_NUMBER = "32471415505"; // format international sans + ni espaces
export const WHATSAPP_DISPLAY = "+32 471 41 55 05";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:
    "Bonjour StyleMec, je souhaiterais avoir des informations sur vos créations sur mesure.",
  produit: (nom: string) =>
    `Bonjour StyleMec 👋\nJe suis intéressée par la création ${nom}.\nJe souhaiterais avoir plus d'informations concernant la confection sur mesure.\nMerci.`,
  surMesure:
    "Bonjour StyleMec 👋\nJe souhaite commander une création sur mesure. Pouvez-vous m'indiquer la marche à suivre pour prendre mes mesures ?\nMerci.",
};
