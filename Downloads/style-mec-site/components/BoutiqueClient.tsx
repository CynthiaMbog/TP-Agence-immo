"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, categories, type Category, type Season } from "@/lib/products";

const seasons: Season[] = ["Toutes saisons", "Hiver", "Été", "Mi-saison"];

export default function BoutiqueClient() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("categorie") as Category | null) ?? "Toutes";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Toutes">(initialCategory);
  const [season, setSeason] = useState<Season | "Toutes">("Toutes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        [p.name, p.description, p.category, p.type, p.color, ...p.occasion]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesCategory = category === "Toutes" || p.category === category;
      const matchesSeason = season === "Toutes" || p.season === season;
      return matchesQuery && matchesCategory && matchesSeason;
    });
  }, [query, category, season]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
        <label className="relative flex-1 sm:max-w-sm">
          <span className="sr-only">Rechercher une création</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher : robe, mariage, hiver..."
            className="w-full rounded-full border border-navy-900/15 bg-cream-50 px-5 py-2.5 text-sm text-navy-950 placeholder:text-navy-800/40 focus:outline-none focus:border-gold-500"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category | "Toutes")}
            className="rounded-full border border-navy-900/15 bg-cream-50 px-4 py-2 text-sm text-navy-900 focus:outline-none focus:border-gold-500"
            aria-label="Filtrer par catégorie"
          >
            <option value="Toutes">Toutes les catégories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={season}
            onChange={(e) => setSeason(e.target.value as Season | "Toutes")}
            className="rounded-full border border-navy-900/15 bg-cream-50 px-4 py-2 text-sm text-navy-900 focus:outline-none focus:border-gold-500"
            aria-label="Filtrer par saison"
          >
            <option value="Toutes">Toutes les saisons</option>
            {seasons.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-navy-800/70 text-sm py-16 text-center">
          Aucune création ne correspond à votre recherche pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
