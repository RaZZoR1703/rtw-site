import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { RichBlocks } from "@/components/rich-blocks";
import { LeadSection } from "@/components/lead-section";
import { formatDate, locales, lp } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";
import { getProducts } from "@/lib/catalog";
import { articles } from "@/lib/site";

/** Every page is prerendered per language; the params read is a blocking, not streamed, step. */
export const instant = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    articles.map((a) => ({ lang, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/news/[slug]">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  const text = getMessages(lang).data.articles[a.slug];
  return {
    title: text.title,
    description: text.excerpt,
    alternates: alternates(lang, `/news/${slug}`),
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/[lang]/news/[slug]">) {
  const lang = await resolveLang(params);
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const m = getMessages(lang);
  const text = m.data.articles[article.slug];
  const product = getProducts(m).find((p) => p.slug === article.productSlug);

  return (
    <main>
      <PageHero
        image={article.image}
        crumbsLabel={m.common.breadcrumbs}
        crumbs={[
          { href: lp(lang), label: m.common.home },
          { href: lp(lang, "/news"), label: m.news.title },
          { label: text.title },
        ]}
        title={text.title}
      >
        <time
          dateTime={article.date}
          className="hero-rise mt-6 block text-starch/65"
          style={{ animationDelay: "160ms" }}
        >
          {formatDate(lang, article.date)}
        </time>
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_360px] lg:py-24">
        <article>
          <RichBlocks blocks={text.blocks} />
          <Link
            href={lp(lang, "/news")}
            className="mt-12 inline-flex items-center gap-2 font-semibold text-ink underline decoration-amber-deep decoration-2 underline-offset-4 hover:decoration-ink"
          >
            <ArrowLeft className="size-4" />
            {m.news.all}
          </Link>
        </article>
        {product && (
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-sm font-medium text-text-soft">
              {m.news.productFrom}
            </p>
            <ProductCard product={product} />
          </aside>
        )}
      </div>
      <LeadSection
        title={m.news.leadTitle}
        lead={m.news.leadLead}
        image={article.image}
        submitLabel={m.news.leadSubmit}
      />
    </main>
  );
}
