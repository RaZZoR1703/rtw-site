"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { CallbackDialog } from "@/components/callback-dialog";
import { useCart } from "@/lib/cart";
import { formatSum, type Product } from "@/lib/catalog";

export function BatchCalculator({ product }: { product: Product }) {
  const { add } = useCart();
  const min = product.minKg;
  const step = min && min >= 100 ? 100 : 25;
  const [kg, setKg] = useState(min ?? 0);
  const [draft, setDraft] = useState(String(min ?? ""));

  if (!min) {
    return (
      <div className="rounded-3xl bg-starch-2 p-6">
        <p className="text-[15px] leading-relaxed text-text-soft">
          Минимальную партию и фасовку по этой позиции уточнит менеджер — он же
          посчитает сумму с доставкой.
        </p>
        <CallbackDialog
          triggerLabel="Рассчитать партию"
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
        Объём партии, кг
      </label>
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => commit(kg - step)}
          disabled={kg <= min}
          aria-label={`Меньше на ${step} кг`}
          className="grid size-12 place-items-center rounded-full bg-starch-2 hover:bg-ink/10 disabled:opacity-40"
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
          aria-label={`Больше на ${step} кг`}
          className="grid size-12 place-items-center rounded-full bg-starch-2 hover:bg-ink/10"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <p className="mt-3 text-sm text-text-soft">
        Минимальная партия — {formatSum(min)} кг; меньше положить нельзя.
      </p>
      <div className="mt-5 flex items-baseline justify-between border-t border-ink/10 pt-5">
        <span className="text-text-soft">Сумма</span>
        <span
          className="tabular font-display text-3xl font-bold"
          aria-live="polite"
        >
          {formatSum(kg * product.pricePerKg)}{" "}
          <span className="font-sans text-base font-medium text-text-soft">
            сум
          </span>
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => {
            add(product.slug, kg);
            toast.success(
              `${product.shortName}: ${formatSum(kg)} кг в корзине`,
              {
                action: {
                  label: "Корзина",
                  onClick: () => (window.location.href = "/cart"),
                },
              },
            );
          }}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber font-semibold text-ink hover:bg-[#ffb52e]"
        >
          <ShoppingBag className="size-4" />В корзину
        </button>
        <CallbackDialog
          triggerLabel="Получить прайс"
          product={product.name}
          variant="ink"
          className="h-12 w-full"
        />
      </div>
      <Link
        href="/cart"
        className="mt-4 block text-center text-sm font-medium text-text-soft underline-offset-4 hover:underline"
      >
        Перейти в корзину
      </Link>
    </div>
  );
}
