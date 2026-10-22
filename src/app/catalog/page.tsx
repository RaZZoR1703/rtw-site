import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { LeadSection } from "@/components/lead-section";
import { categories, isCategoryId, pluralGoods, products } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Каталог продукции",
  description:
    "Крахмал, патока и сиропы, техническая химия — оптовые цены за килограмм, товар в наличии на складе в Ташкенте.",
};

export default function CatalogPage({ searchParams }: PageProps<"/catalog">) {
  return (
    <main>
      <Suspense fallback={<CatalogView />}>
        <CatalogFromParams searchParams={searchParams} />
      </Suspense>
      <LeadSection
        title="Не нашли нужную позицию или объём?"
        lead="Скажите, что нужно производству, — подберём позицию из наличия или привезём партию под заказ."
        image="/images/stock/warehouse-forklift.webp"
        imageLabel="Иллюстрация"
        submitLabel="Перезвоните мне"
      />
    </main>
  );
}

async function CatalogFromParams({
  searchParams,
}: Pick<PageProps<"/catalog">, "searchParams">) {
  const { cat } = await searchParams;
  return <CatalogView cat={isCategoryId(cat) ? cat : undefined} />;
}

function CatalogView({ cat }: { cat?: string }) {
  const active = categories.find((c) => c.id === cat);
  const list = active
    ? products.filter((p) => p.category === active.id)
    : products;
  const filters = [
    { id: undefined, name: "Все товары", count: products.length },
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
        crumbs={[
          { href: "/", label: "Главная" },
          ...(active
            ? [{ href: "/catalog", label: "Каталог" }, { label: active.name }]
            : [{ label: "Каталог" }]),
        ]}
        title={active ? active.name : "Каталог продукции"}
        lead={
          active
            ? active.description
            : "Крахмал, патока и сиропы, техническая химия — оптовые цены за килограмм, товар в наличии на складе в Ташкенте."
        }
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <nav
            aria-label="Категории"
            className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex w-max gap-2 rounded-full bg-starch-2 p-1.5">
              {filters.map((f) => {
                const selected = f.id === active?.id;
                return (
                  <li key={f.name}>
                    <Link
                      href={f.id ? `/catalog?cat=${f.id}` : "/catalog"}
                      scroll={false}
                      aria-current={selected ? "page" : undefined}
                      className={cn(
                        "flex h-11 items-center gap-2 rounded-full px-5 font-semibold transition-colors duration-200",
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
            {pluralGoods(list.length)} · цены за 1 кг
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
