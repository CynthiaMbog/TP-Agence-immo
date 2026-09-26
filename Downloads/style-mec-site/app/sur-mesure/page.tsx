import Image from "next/image";
import type { Metadata } from "next";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sur mesure",
  description:
    "Commandez une création sur mesure StyleMec : découvrez les étapes, de la prise de mesures à la confection, à Bruxelles.",
};

const steps = [
  { n: "1", t: "Choisir une création", d: "Parcourez la boutique et repérez le modèle qui vous inspire, ou décrivez à Carole l'idée que vous avez en tête." },
  { n: "2", t: "Contacter StyleMec sur WhatsApp", d: "Cliquez sur « Commander cette création » ou écrivez directement au +32 471 41 55 05." },
  { n: "3", t: "Échanger avec la styliste", d: "Carole discute avec vous du modèle, des tissus et des finitions souhaitées." },
  { n: "4", t: "Prendre ses mesures", d: "Selon les indications données par Carole, en atelier ou à distance." },
  { n: "5", t: "Valider les détails de la confection", d: "Choix final du tissu, des couleurs et des délais de réalisation." },
  { n: "6", t: "Lancer la confection", d: "Votre création sur mesure est réalisée avec soin, pièce par pièce." },
];

export default function SurMesurePage() {
  return (
    <div>
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/products/robe-sirene-dentelle-bleu-1.jpg"
          alt="Confection sur mesure StyleMec"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="relative z-10 h-full mx-auto max-w-6xl px-5 sm:px-8 flex flex-col justify-end pb-10">
          <p className="text-gold-300 text-xs uppercase tracking-[0.25em] mb-3">
            Sur mesure
          </p>
          <h1 className="font-heading text-4xl text-cream-50 max-w-xl">
            Je souhaite commander sur mesure
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-16">
        <p className="text-navy-800/80 leading-relaxed">
          Chaque création StyleMec peut être confectionnée sur mesure, selon
          vos mensurations et vos préférences. La prise de mesures et tous
          les détails de votre commande sont gérés directement avec Carole,
          par échange WhatsApp — pas de formulaire compliqué, juste une
          conversation.
        </p>

        <ol className="mt-12 space-y-8">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="flex-shrink-0 h-10 w-10 rounded-full bg-navy-950 text-gold-400 font-heading flex items-center justify-center text-lg">
                {step.n}
              </span>
              <div>
                <h2 className="font-medium text-navy-950">{step.t}</h2>
                <p className="mt-1 text-sm text-navy-800/70 leading-relaxed">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <a
          href={waLink(WA_MESSAGES.surMesure)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center justify-center rounded-full bg-gold-500 text-navy-950 font-medium px-8 py-3.5 text-sm tracking-wide hover:bg-gold-400 transition-colors"
        >
          Prendre mes mesures / Commander sur mesure
        </a>
      </section>
    </div>
  );
}
