import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { formatSum, products } from "@/lib/catalog";

export function PriceBand() {
  const sorted = [...products].sort((a, b) => a.pricePerKg - b.pricePerKg);
  return (
    <section
      aria-label="Оптовые цены на складе"
      className="relative bg-amber text-ink"
    >
      <h2 className="sr-only">Оптовые цены на складе, сум за 1 кг</h2>
      <Marquee pauseOnHover className="py-5 [--duration:48s] [--gap:3rem]">
        {sorted.map((p) => (
          <Link
            key={p.id}
            href={`/catalog/${p.slug}`}
            className="flex items-baseline gap-3 whitespace-nowrap hover:underline"
          >
            <span className="text-[17px] font-semibold">{p.shortName}</span>
            <span className="tabular font-display text-2xl font-bold">
              {formatSum(p.pricePerKg)}
            </span>
            <span className="text-sm font-medium text-ink/70">сум/кг</span>
            <span
              aria-hidden
              className="ml-6 size-1.5 self-center rounded-full bg-ink/40"
            />
          </Link>
        ))}
      </Marquee>
    </section>
  );
}
