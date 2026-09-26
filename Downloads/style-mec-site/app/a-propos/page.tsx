import Image from "next/image";
import type { Metadata } from "next";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez StyleMec, modéliste et conseillère vestimentaire à Bruxelles, spécialisée dans la confection sur mesure.",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
        À propos
      </p>
      <h1 className="font-heading text-4xl text-navy-950 mb-10">
        StyleMec
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
          <Image
            src="/images/products/ensemble-couple-ceremonie-1.jpg"
            alt="Création StyleMec"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 text-navy-800/80 leading-relaxed">
          <p>
            StyleMec est une marque de mode basée à Bruxelles, portée par
            Carole, modéliste sur mesure et conseillère vestimentaire.
          </p>
          <p>
            Chaque création naît d&apos;un échange avec la cliente : le choix
            du modèle, des tissus et des finitions se construit ensemble,
            pour aboutir à une pièce confectionnée sur mesure, à son image.
          </p>
          <p>
            Le savoir-faire de StyleMec se retrouve aussi bien dans les
            tenues de cérémonie et de soirée que dans des pièces plus
            quotidiennes, toujours avec la même attention portée aux
            détails et le même accompagnement personnalisé, du premier
            échange jusqu&apos;à l&apos;essayage final.
          </p>

          <div className="pt-4 border-t border-navy-900/10">
            <p className="text-sm text-navy-950 font-medium">Carole</p>
            <p className="text-sm text-navy-800/60">
              Modéliste sur mesure — Conseillère vestimentaire
            </p>
          </div>

          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 rounded-full bg-navy-950 text-cream-100 font-medium px-6 py-3 text-sm tracking-wide hover:bg-navy-900 transition-colors"
          >
            Échanger avec Carole sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
