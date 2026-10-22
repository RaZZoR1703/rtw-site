import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { LeadSection } from "@/components/lead-section";
import { lp, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";
import {
  getCategories,
  getProducts,
  isCategoryId,
  type CategoryId,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/catalog">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return {
    title: m.catalog.metaTitle,
    description: m.catalog.metaDescription,
    alternates: alternates(lang, "/catalog"),
  };
}

export default async function CatalogPage({
  params,
  searchParams,
}: PageProps<"/[lang]/catalog">) {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return (
    <main>
      <Suspense fallback={<CatalogView lang={lang} />}>
        <CatalogFromParams lang={lang} searchParams={searchParams} />
      </Suspense>
      <LeadSection
        title={m.catalog.leadTitle}
        lead={m.catalog.leadLead}
        image="/images/stock/warehouse-forklift.webp"
        imageLabel={m.common.illustration}
        submitLabel={m.catalog.leadSubmit}
      />
    </main>
  );
}

async function CatalogFromParams({
  lang,
  searchParams,
}: {
  lang: Locale;
  searchParams: PageProps<"/[lang]/catalog">["searchParams"];
}) {
  const { cat } = await searchParams;
  return <CatalogView lang={lang} cat={isCategoryId(cat) ? cat : undefined} />;
}

function CatalogView({ lang, cat }: { lang: Locale; cat?: CategoryId }) {
  const m = getMessages(lang);
  const categories = getCategories(m);
  const products = getProducts(m);
  const active = categories.find((c) => c.id === cat);
  const list = active
    ? products.filter((p) => p.category === active.id)
    : products;
  const catalogHref = lp(lang, "/catalog");
  const filters = [
    { id: undefined, name: m.catalog.allGoods, count: products.length },
    ...categories.map((c) => ({
      id: c.id,
      name: c.name,
      count: products.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <>
      <PageHero
        image={active?.image ?? "/images/stock/corn-cobs.webp"}
        crumbsLabel={m.common.breadcrumbs}
        crumbs={[
          { href: lp(lang), label: m.common.home },
          ...(active
            ? [
                { href: catalogHref, label: m.nav["/catalog"] },
                { label: active.name },
              ]
            : [{ label: m.nav["/catalog"] }]),
        ]}
        title={active ? active.name : m.catalog.title}
        lead={active ? active.description : m.catalog.lead}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label={m.catalog.categories}
            className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex w-max gap-2 rounded-full bg-starch-2 p-1.5">
              {filters.map((f) => {
                const selected = f.id === active?.id;
                return (
                  <li key={f.name}>
                    <Link
                      href={f.id ? `${catalogHref}?cat=${f.id}` : catalogHref}
                      scroll={false}
                      aria-current={selected ? "page" : undefined}
                      className={cn(
                        "flex h-11 items-center gap-2 whitespace-nowrap rounded-full px-5 font-semibold transition-colors duration-200",
                        selected ? "bg-ink text-starch" : "hover:bg-white",
                      )}
                    >
                      {f.name}
                      <span
                        className={cn(
                          "tabular text-sm",
                          selected ? "text-amber" : "text-text-soft",
                        )}
                      >
                        {f.count}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <p className="text-[15px] text-text-soft">
            {m.common.goods(list.length)} · {m.catalog.pricesPerKg}
            {active && <> · {active.industries}</>}
          </p>
        </div>

        <ul
          key={active?.id ?? "all"}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} className="h-full" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
