import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { formatNumber, lp, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getProducts } from "@/lib/catalog";

export function PriceBand({ lang }: { lang: Locale }) {
  const m = getMessages(lang);
  const sorted = getProducts(m).sort((a, b) => a.pricePerKg - b.pricePerKg);
  return (
    <section
      aria-label={m.home.priceBand}
      className="relative bg-amber text-ink"
    >
      <h2 className="sr-only">{m.home.priceBand}</h2>
      <Marquee pauseOnHover className="py-5 [--duration:48s] [--gap:3rem]">
        {sorted.map((p) => (
          <Link
            key={p.id}
            href={lp(lang, `/catalog/${p.slug}`)}
            className="flex items-baseline gap-3 whitespace-nowrap hover:underline"
          >
            <span className="text-[17px] font-semibold">{p.shortName}</span>
            <span className="tabular font-display text-2xl font-bold">
              {formatNumber(lang, p.pricePerKg)}
            </span>
            <span className="text-sm font-medium text-ink/70">
              {m.common.perKg}
            </span>
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
