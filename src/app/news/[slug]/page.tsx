import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { RichBlocks } from "@/components/rich-blocks";
import { LeadSection } from "@/components/lead-section";
import { productBySlug } from "@/lib/catalog";
import { articles, formatDate } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({
  params,
}: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const product = productBySlug(article.productSlug);

  return (
    <main>
      <PageHero
        image={article.image}
        crumbs={[
          { href: "/", label: "Главная" },
          { href: "/news", label: "Новости" },
          { label: article.title },
        ]}
        title={article.title}
      >
        <time
          dateTime={article.date}
          className="hero-rise mt-6 block text-starch/65"
          style={{ animationDelay: "160ms" }}
        >
          {formatDate(article.date)}
        </time>
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_360px] lg:py-24">
        <article>
          <RichBlocks blocks={article.blocks} />
          <Link
            href="/news"
            className="mt-12 inline-flex items-center gap-2 font-semibold text-ink underline decoration-amber-deep decoration-2 underline-offset-4 hover:decoration-ink"
          >
            <ArrowLeft className="size-4" />
            Все новости
          </Link>
        </article>
        {product && (
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm font-medium text-text-soft">
              Товар из статьи
            </p>
            <ProductCard product={product} />
          </aside>
        )}
      </div>
      <LeadSection
        title="Нужен этот продукт для производства?"
        lead="Перезвоним, расскажем о наличии и пришлём оптовую цену."
        image={article.image}
        submitLabel="Перезвоните мне"
      />
    </main>
  );
}
