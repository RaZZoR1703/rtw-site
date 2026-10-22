"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/i18n/client";
import { formatNumber, lp } from "@/i18n/config";
import type { Product } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { lang, m } = useI18n();
  const { add, lines } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = lines.some((l) => l.slug === product.slug);
  const href = lp(lang, `/catalog/${product.slug}`);

  const onAdd = () => {
    if (!product.minKg) return;
    add(product.slug, product.minKg);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
    toast.success(
      m.common.addedToCart(
        product.shortName,
        formatNumber(lang, product.minKg),
      ),
      {
        action: {
          label: m.common.cart,
          onClick: () => (window.location.href = lp(lang, "/cart")),
        },
      },
    );
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-ink/8",
        className,
      )}
    >
      <Link
        href={href}
        className="relative block aspect-[4/3] overflow-hidden bg-starch-2"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink ring-1 ring-ink/10">
          {m.data.categories[product.category].name}
        </span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#e7f4ea] px-3 py-1 text-xs font-semibold text-[#1d6b34]">
          <span className="size-1.5 rounded-full bg-[#1d9b4a]" />
          {m.common.inStock}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-balance text-lg font-semibold leading-snug">
          <Link
            href={href}
            className="after:absolute after:inset-0 hover:text-amber-deep"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-text-soft">
          {m.common.origin}: {product.origin}
        </p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="tabular font-display text-[28px] font-bold leading-none tracking-tight">
              {formatNumber(lang, product.pricePerKg)}
              <span className="ml-1.5 font-sans text-sm font-medium text-text-soft">
                {m.common.perKg}
              </span>
            </p>
            <p className="mt-2 text-sm text-text-soft">
              {m.common.minBatch}: {product.minLabel}
            </p>
          </div>
          {product.minKg ? (
            <button
              type="button"
              onClick={onAdd}
              aria-label={m.common.addToCart(product.shortName)}
              className={cn(
                "relative z-10 grid size-12 shrink-0 place-items-center rounded-full transition-colors duration-200",
                justAdded || inCart
                  ? "bg-ink text-amber"
                  : "btn-icon btn-icon-fill bg-amber text-ink",
              )}
            >
              {justAdded ? (
                <Check className="size-5" />
              ) : (
                <Plus className="size-5" />
              )}
            </button>
          ) : (
            <Link
              href={href}
              className="btn btn-ink relative z-10 shrink-0 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-starch"
            >
              {m.common.clarify}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
