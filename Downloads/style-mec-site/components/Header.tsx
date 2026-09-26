"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/sur-mesure", label: "Sur mesure" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream-50/95 backdrop-blur border-b border-navy-900/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="font-heading text-2xl tracking-wide text-navy-900">
              Style<span className="text-gold-500">Mec</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-navy-700/70 mt-0.5">
              Modéliste sur mesure — Bruxelles
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-gold-600 ${
                    active ? "text-gold-600 font-medium" : "text-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/boutique"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 px-3.5 py-2 text-sm text-navy-800 hover:border-gold-500 hover:text-gold-600 transition-colors"
              aria-label="Rechercher une création"
            >
              <SearchIcon />
              Rechercher
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-navy-900/15 text-navy-900"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-navy-900/10 bg-cream-50">
          <ul className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-navy-900 border-b border-navy-900/5 last:border-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}
