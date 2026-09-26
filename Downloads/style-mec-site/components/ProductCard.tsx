import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/boutique/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cream-200">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.surMesure && (
          <span className="absolute top-3 left-3 rounded-full bg-navy-950/85 text-cream-100 text-[11px] tracking-wide px-3 py-1">
            Sur mesure
          </span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-[11px] uppercase tracking-[0.14em] text-gold-600">
          {product.category}
        </p>
        <h3 className="font-heading text-lg text-navy-950 mt-0.5 group-hover:text-navy-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-navy-800/70 mt-1">
          {product.price ?? "Sur devis"}
        </p>
      </div>
    </Link>
  );
}
