import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
          <Image
            src="/images/products/robe-soiree-fleurie-emeraude-1.jpg"
            alt="Création StyleMec — robe de soirée sur mesure"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/25 to-navy-950/10" />
          <div className="relative z-10 h-full mx-auto max-w-6xl px-5 sm:px-8 flex flex-col justify-end pb-14">
            <p className="text-gold-300 text-xs uppercase tracking-[0.25em] mb-4">
              Modéliste sur mesure — Bruxelles
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-cream-50 max-w-2xl leading-[1.1]">
              Des créations sur mesure, pensées pour vous.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/boutique"
                className="inline-flex items-center rounded-full bg-gold-500 text-navy-950 font-medium px-6 py-3 text-sm tracking-wide hover:bg-gold-400 transition-colors"
              >
                Découvrir les créations
              </Link>
              <Link
                href="/sur-mesure"
                className="inline-flex items-center rounded-full border border-cream-100/60 text-cream-50 px-6 py-3 text-sm tracking-wide hover:border-gold-300 hover:text-gold-300 transition-colors"
              >
                Commander sur mesure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CRÉATIONS EN AVANT */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
              Sélection
            </p>
            <h2 className="font-heading text-3xl text-navy-950">
              Nos dernières créations
            </h2>
          </div>
          <Link
            href="/boutique"
            className="hidden sm:inline text-sm text-navy-800 border-b border-transparent hover:border-navy-800"
          >
            Voir toute la boutique →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link
          href="/boutique"
          className="sm:hidden mt-8 inline-block text-sm text-navy-800 border-b border-navy-800"
        >
          Voir toute la boutique →
        </Link>
      </section>

      {/* CATÉGORIES */}
      <section className="bg-cream-200/70 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
            Univers
          </p>
          <h2 className="font-heading text-3xl text-navy-950 mb-8">
            Parcourir par catégorie
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const example = products.find((p) => p.category === cat);
              return (
                <Link
                  key={cat}
                  href={`/boutique?categorie=${encodeURIComponent(cat)}`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg block"
                >
                  {example && (
                    <Image
                      src={example.images[0]}
                      alt={cat}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 text-cream-50 font-heading text-lg">
                    {cat}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* LA STYLISTE */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
          <Image
            src="/images/products/tailleur-rouge-noir-1.jpg"
            alt="Création StyleMec portée"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-600 mb-2">
            La styliste
          </p>
          <h2 className="font-heading text-3xl text-navy-950 mb-4">
            Carole, modéliste &amp; conseillère vestimentaire
          </h2>
          <p className="text-navy-800/80 leading-relaxed">
            Basée à Bruxelles, Carole conçoit et confectionne chaque création
            sur mesure, avec une attention particulière portée aux détails et
            à l&apos;accompagnement personnalisé de chaque cliente, du choix du
            tissu jusqu&apos;à l&apos;essayage final.
          </p>
          <Link
            href="/a-propos"
            className="inline-block mt-6 text-sm text-navy-900 border-b border-gold-500 hover:text-gold-600"
          >
            En savoir plus sur StyleMec →
          </Link>
        </div>
      </section>

      {/* COMMENT FONCTIONNE LE SUR-MESURE */}
      <section className="bg-navy-950 text-cream-100 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-400 mb-2">
            Sur mesure
          </p>
          <h2 className="font-heading text-3xl mb-10">
            Comment fonctionne la confection sur mesure ?
          </h2>
          <ol className="grid sm:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Choisissez une création", d: "Parcourez la boutique et repérez le modèle qui vous plaît." },
              { n: "02", t: "Contactez-nous sur WhatsApp", d: "Échangez directement avec Carole pour discuter de votre projet." },
              { n: "03", t: "Prenez vos mesures", d: "Selon les indications données, puis validez les détails de la confection." },
            ].map((step) => (
              <li key={step.n}>
                <span className="font-heading text-4xl text-gold-400">{step.n}</span>
                <h3 className="mt-3 text-lg font-medium">{step.t}</h3>
                <p className="mt-2 text-sm text-cream-100/70 leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>
          <a
            href={waLink(WA_MESSAGES.surMesure)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-10 rounded-full bg-gold-500 text-navy-950 font-medium px-6 py-3 text-sm tracking-wide hover:bg-gold-400 transition-colors"
          >
            Démarrer ma commande sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
