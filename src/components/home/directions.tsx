import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeading } from "@/components/section-heading";
import { lp, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getCategories, getProducts } from "@/lib/catalog";

export function Directions({ lang }: { lang: Locale }) {
  const m = getMessages(lang);
  const products = getProducts(m);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        title={m.home.directionsTitle}
        lead={m.home.directionsLead}
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {getCategories(m).map((c, i) => {
          const count = products.filter((p) => p.category === c.id).length;
          return (
            <BlurFade key={c.id} delay={i * 0.08} offset={24} blur="0px" inView>
              <Link
                href={`${lp(lang, "/catalog")}?cat=${c.id}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[28px] bg-ink p-7 text-starch sm:aspect-[16/11] lg:aspect-[4/5]"
              >
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
                <span className="absolute right-6 top-6 grid size-12 place-items-center rounded-full bg-ink ring-1 ring-white/20 transition-colors duration-300 group-hover:bg-amber group-hover:text-ink">
                  <ArrowUpRight className="size-5" />
                </span>
                <div className="relative">
                  <h3 className="font-display text-3xl font-bold tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber">
                    {m.common.goods(count)}
                  </p>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-starch/80">
                    {c.description}
                  </p>
                  <p className="mt-4 text-sm text-starch/60">{c.industries}</p>
                </div>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
