import Link from "next/link";
import { WHATSAPP_DISPLAY, waLink, WA_MESSAGES } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100 mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">
            Style<span className="text-gold-400">Mec</span>
          </p>
          <p className="mt-3 text-sm text-cream-100/70 leading-relaxed">
            Modéliste sur mesure &amp; conseillère vestimentaire à Bruxelles.
            Créations wax, cérémonie, soirée et confection sur mesure.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400/90 mb-4">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li><Link href="/boutique" className="hover:text-gold-300">Boutique</Link></li>
            <li><Link href="/sur-mesure" className="hover:text-gold-300">Sur mesure</Link></li>
            <li><Link href="/a-propos" className="hover:text-gold-300">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-gold-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400/90 mb-4">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-cream-100/80">
            <li>Bruxelles, Belgique</li>
            <li>
              <a href={waLink(WA_MESSAGES.general)} className="hover:text-gold-300">
                WhatsApp — {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href="mailto:stylmec4@yahoo.fr" className="hover:text-gold-300">
                stylmec4@yahoo.fr
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/stylmecfashion"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300"
              >
                @stylmecfashion
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <p className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-cream-100/50">
          © {new Date().getFullYear()} StyleMec. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
