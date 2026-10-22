"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { CallbackDialog } from "@/components/callback-dialog";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/i18n/client";
import { formatNumber, lp } from "@/i18n/config";
import type { Product } from "@/lib/catalog";

export function BatchCalculator({ product }: { product: Product }) {
  const { lang, m } = useI18n();
  const { add } = useCart();
  const min = product.minKg;
  const step = min && min >= 100 ? 100 : 25;
  const [kg, setKg] = useState(min ?? 0);
  const [draft, setDraft] = useState(String(min ?? ""));

  if (!min) {
    return (
      <div className="rounded-3xl bg-starch-2 p-6">
        <p className="text-[15px] leading-relaxed text-text-soft">
          {m.product.batchAsk}
        </p>
        <CallbackDialog
          triggerLabel={m.product.batchAskButton}
          product={product.name}
          className="mt-5 h-12 w-full"
        />
      </div>
    );
  }

  const commit = (value: number) => {
    const next = Math.max(min, Math.round(value));
    setKg(next);
    setDraft(String(next));
  };

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/10">
      <label htmlFor="kg" className="text-sm font-medium text-text-soft">
        {m.product.batchVolume}
      </label>
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => commit(kg - step)}
          disabled={kg <= min}
          aria-label={m.product.batchLess(step)}
          className="btn-icon btn-icon-dark grid size-12 place-items-center rounded-full bg-starch-2 disabled:opacity-40"
        >
          <Minus className="size-4" />
        </button>
        <input
          id="kg"
          inputMode="numeric"
          value={draft}
          onChange={(e) => setDraft(e.target.value.replace(/\D/g, ""))}
          onBlur={() => commit(Number(draft) || min)}
          onKeyDown={(e) => e.key === "Enter" && commit(Number(draft) || min)}
          className="tabular h-12 w-full min-w-0 flex-1 rounded-xl bg-starch px-4 text-center font-display text-xl font-bold ring-1 ring-ink/10"
        />
        <button
          type="button"
          onClick={() => commit(kg + step)}
          aria-label={m.product.batchMore(step)}
          className="btn-icon btn-icon-dark grid size-12 place-items-center rounded-full bg-starch-2"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <p className="mt-3 text-sm text-text-soft">
        {m.product.batchMin(formatNumber(lang, min))}
      </p>
      <div className="mt-5 flex items-baseline justify-between border-t border-ink/10 pt-5">
        <span className="text-text-soft">{m.product.batchSum}</span>
        <span
          className="tabular font-display text-3xl font-bold"
          aria-live="polite"
        >
          {formatNumber(lang, kg * product.pricePerKg)}{" "}
          <span className="font-sans text-base font-medium text-text-soft">
            {m.common.currency}
          </span>
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => {
            add(product.slug, kg);
            toast.success(
              m.common.addedToCart(product.shortName, formatNumber(lang, kg)),
              {
                action: {
                  label: m.common.cart,
                  onClick: () => (window.location.href = lp(lang, "/cart")),
                },
              },
            );
          }}
          className="btn btn-amber inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber font-semibold text-ink"
        >
          <ShoppingBag className="size-4" />
          {m.common.toCart}
        </button>
        <CallbackDialog
          triggerLabel={m.product.getPrice}
          product={product.name}
          variant="ink"
          className="h-12 w-full"
        />
      </div>
      <Link
        href={lp(lang, "/cart")}
        className="mt-4 block text-center text-sm font-medium text-text-soft underline-offset-4 hover:underline"
      >
        {m.common.goToCart}
      </Link>
    </div>
  );
}
