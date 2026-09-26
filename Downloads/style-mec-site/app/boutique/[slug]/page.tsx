import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/lib/products";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
      <nav className="text-xs text-navy-800/60 mb-8">
        <Link href="/boutique" className="hover:text-navy-900">Boutique</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="grid gap-3">
          {product.images.map((src, i) => (
            <div key={src} className="relative aspect-[4/5] rounded-lg overflow-hidden bg-cream-200">
              <Image
                src={src}
                alt={`${product.name} — photo ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-gold-600 mb-2">
            {product.category}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy-950">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-navy-900">
            {product.price ?? "Sur devis"}
          </p>

          {product.surMesure && (
            <span className="inline-block mt-3 rounded-full bg-navy-950 text-cream-100 text-xs px-3 py-1">
              Confection sur mesure
            </span>
          )}

          <p className="mt-6 text-navy-800/80 leading-relaxed">
            {product.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-y-3 text-sm border-t border-navy-900/10 pt-6">
            <dt className="text-navy-800/60">Type</dt>
            <dd className="text-navy-950">{product.type}</dd>
            <dt className="text-navy-800/60">Couleurs</dt>
            <dd className="text-navy-950">{product.color}</dd>
            <dt className="text-navy-800/60">Saison</dt>
            <dd className="text-navy-950">{product.season}</dd>
            <dt className="text-navy-800/60">Occasion</dt>
            <dd className="text-navy-950">{product.occasion.join(", ")}</dd>
            <dt className="text-navy-800/60">Disponibilité</dt>
            <dd className="text-navy-950">{product.disponibilite}</dd>
          </dl>

          {product.details.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm text-navy-800/80">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-gold-500 mt-0.5">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={waLink(WA_MESSAGES.produit(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gold-500 text-navy-950 font-medium px-8 py-3.5 text-sm tracking-wide hover:bg-gold-400 transition-colors"
          >
            Commander cette création
          </a>
          <p className="mt-3 text-xs text-navy-800/50">
            Vous serez redirigée vers WhatsApp pour échanger directement avec Carole.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-heading text-2xl text-navy-950 mb-8">
            Dans la même catégorie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
