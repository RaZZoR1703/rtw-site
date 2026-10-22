import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { lp, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getProducts } from "@/lib/catalog";

export function StockRail({ lang }: { lang: Locale }) {
  const m = getMessages(lang);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <SectionHeading title={m.home.stockTitle} lead={m.home.stockLead}>
          <Link
            href={lp(lang, "/catalog")}
            className="btn btn-ink group inline-flex h-12 w-fit shrink-0 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-starch"
          >
            {m.home.allCatalog}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </SectionHeading>
      </div>
      <div className="mt-12 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="mx-auto flex w-max snap-x snap-mandatory gap-5 px-4 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {getProducts(m).map((p) => (
            <li
              key={p.id}
              className="w-[82vw] max-w-[340px] snap-start sm:w-[340px]"
            >
              <ProductCard product={p} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
