import type { Metadata } from "next";
import { waLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez StyleMec à Bruxelles par WhatsApp, email ou Instagram pour toute demande de confection sur mesure.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
        Contact
      </p>
      <h1 className="font-heading text-4xl text-navy-950 mb-6">
        Parlons de votre projet
      </h1>
      <p className="text-navy-800/80 leading-relaxed max-w-xl">
        La façon la plus rapide d&apos;échanger avec Carole est WhatsApp —
        vous pouvez aussi la contacter par email ou Instagram.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        <a
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-navy-900/10 p-6 hover:border-gold-500 transition-colors"
        >
          <p className="text-xs uppercase tracking-wide text-gold-600 mb-2">WhatsApp</p>
          <p className="text-navy-950 font-medium">{WHATSAPP_DISPLAY}</p>
        </a>

        <a
          href="mailto:stylmec4@yahoo.fr"
          className="rounded-lg border border-navy-900/10 p-6 hover:border-gold-500 transition-colors"
        >
          <p className="text-xs uppercase tracking-wide text-gold-600 mb-2">Email</p>
          <p className="text-navy-950 font-medium break-all">stylmec4@yahoo.fr</p>
        </a>

        <a
          href="https://instagram.com/stylmecfashion"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-navy-900/10 p-6 hover:border-gold-500 transition-colors"
        >
          <p className="text-xs uppercase tracking-wide text-gold-600 mb-2">Instagram</p>
          <p className="text-navy-950 font-medium">@stylmecfashion</p>
        </a>
      </div>

      <div className="mt-10 rounded-lg bg-cream-200/70 p-6 text-sm text-navy-800/70">
        Basée à Bruxelles, Belgique.
      </div>
    </div>
  );
}
