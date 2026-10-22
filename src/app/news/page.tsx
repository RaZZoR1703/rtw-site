import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { articles, formatDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Новости",
  description: "Поступления товара, применение продукции и условия поставок.",
};

export default function NewsPage() {
  return (
    <main>
      <PageHero
        image="/images/stock/lab-quality.webp"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Новости" }]}
        title="Новости"
        lead="Поступления товара, применение продукции и условия поставок."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        <ul className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-ink/8">
                <div className="relative aspect-[16/9] overflow-hidden bg-starch-2">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <time dateTime={a.date} className="text-sm text-text-soft">
                    {formatDate(a.date)}
                  </time>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    <Link
                      href={`/news/${a.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-soft">
                    {a.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-ink underline decoration-amber-deep decoration-2 underline-offset-4">
                    Читать
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
