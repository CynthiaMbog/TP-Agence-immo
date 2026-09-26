import { Suspense } from "react";
import type { Metadata } from "next";
import BoutiqueClient from "@/components/BoutiqueClient";

export const metadata: Metadata = {
  title: "Boutique — Créations sur mesure",
  description:
    "Parcourez toutes les créations StyleMec : robes de cérémonie, tailleurs, sweats et tenues de soirée, confectionnées sur mesure à Bruxelles.",
};

export default function BoutiquePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
        Boutique
      </p>
      <h1 className="font-heading text-4xl text-navy-950 mb-10">
        Toutes nos créations
      </h1>
      <Suspense fallback={null}>
        <BoutiqueClient />
      </Suspense>
    </div>
  );
}
