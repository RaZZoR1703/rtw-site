import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CreditCard, Truck, Warehouse } from "lucide-react";
import { BatchCalculator } from "@/components/batch-calculator";
import { ProductCard } from "@/components/product-card";
import { RichBlocks } from "@/components/rich-blocks";
import { LeadSection } from "@/components/lead-section";
import {
  categoryName,
  formatSum,
  productBySlug,
  products,
} from "@/lib/catalog";
import { articles } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/catalog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  return p
    ? {
        title: p.name,
        description: `${p.lead} Оптовая цена ${formatSum(p.pricePerKg)} сум/кг, склад в Ташкенте.`,
      }
    : {};
}

export default async function ProductPage({
  params,
}: PageProps<"/catalog/[slug]">) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = [
    ...products.filter(
      (p) => p.category === product.category && p.id !== product.id,
    ),
    ...products.filter((p) => p.category !== product.category),
  ];
  const article = articles.find((a) => a.productSlug === product.slug);
  const facts = [
    {
      icon: Warehouse,
      title: "В наличии на складе в Ташкенте",
      text: "Отгружаем без ожидания поставки",
    },
    {
      icon: Truck,
      title: product.freeDelivery ?? "Бесплатно по Ташкенту",
      text: "Доставка в удобное время",
    },
    {
      icon: CreditCard,
      title: "Оплата",
      text: "Перечислением, терминал UzCard, наличными",
    },
  ];

  return (
    <main className="pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <nav aria-label="Хлебные крошки" className="text-sm text-text-soft">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">
                Главная
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/catalog" className="hover:text-ink">
                Каталог
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/catalog?cat=${product.category}`}
                className="hover:text-ink"
              >
                {categoryName(product.category)}
              </Link>
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-[32px] bg-starch-2 lg:sticky lg:top-28 lg:mx-0 lg:self-start">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="hero-rise object-cover"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[#e7f4ea] px-3.5 py-1.5 text-sm font-semibold text-[#1d6b34]">
              <span className="size-2 rounded-full bg-[#1d9b4a]" />В наличии
            </span>
          </div>

          <div>
            <h1 className="text-balance font-display text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.03em]">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-soft">
              {product.lead}
            </p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[15px]">
              <div className="flex gap-2">
                <dt className="text-text-soft">Артикул:</dt>
                <dd className="tabular font-medium">{product.article}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-text-soft">Производство:</dt>
                <dd className="font-medium">{product.origin}</dd>
              </div>
              {product.packaging && (
                <div className="flex gap-2">
                  <dt className="text-text-soft">Упаковка:</dt>
                  <dd className="font-medium">{product.packaging}</dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="tabular font-display text-5xl font-extrabold tracking-tight">
                {formatSum(product.pricePerKg)}
              </span>
              <span className="text-lg text-text-soft">сум / кг</span>
            </div>
            <p className="mt-1 text-sm text-text-soft">
              Оптовая цена · минимальный заказ: {product.minLabel}
            </p>

            <div className="mt-6">
              <BatchCalculator product={product} />
            </div>

            <ul className="mt-6 grid gap-3 border-y border-ink/10 py-5 text-[15px]">
              {facts.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-amber-deep" />
                  <span>
                    <span className="font-semibold">{title}.</span>{" "}
                    <span className="text-text-soft">{text}</span>
                  </span>
                </li>
              ))}
            </ul>

            {product.specs && (
              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold tracking-tight">
                  Характеристики
                </h2>
                <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                  {product.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-3.5">
                      <dt className="text-text-soft">{k}</dt>
                      <dd className="tabular text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {product.blocks && (
              <section className="mt-12">
                <h2 className="mb-5 font-display text-2xl font-bold tracking-tight">
                  Описание
                </h2>
                <RichBlocks blocks={product.blocks} />
                {article && (
                  <Link
                    href={`/news/${article.slug}`}
                    className="mt-6 inline-block font-semibold text-ink underline decoration-amber-deep decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    Подробнее о применении — в новостях
                  </Link>
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      <section className="py-24">
        <h2 className="mx-auto max-w-7xl px-4 font-display text-3xl font-bold tracking-tight sm:px-8">
          Другие товары
        </h2>
        <div className="mt-8 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="mx-auto flex w-max snap-x snap-mandatory gap-5 px-4 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            {related.map((p) => (
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

      <LeadSection
        title="Нужна партия под ваше производство?"
        lead={`Назовите объём — посчитаем цену на «${product.name}» с доставкой и условиями оплаты.`}
        image="/images/stock/warehouse-forklift.webp"
        imageLabel="Иллюстрация"
        submitLabel="Рассчитать партию"
      />
    </main>
  );
}
