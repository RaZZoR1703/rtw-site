"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trash2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { useCart } from "@/lib/cart";
import { formatSum } from "@/lib/catalog";

export function CartView() {
  const { lines, total, ready, setKg, remove, clear } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 lg:pb-32">
      <nav aria-label="Хлебные крошки" className="text-sm text-text-soft">
        <Link href="/" className="hover:text-ink">
          Главная
        </Link>{" "}
        / <span aria-current="page">Корзина</span>
      </nav>
      <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.035em]">
        Корзина
      </h1>

      {!ready ? (
        <p className="mt-10 text-text-soft" aria-busy="true">
          Загружаем корзину…
        </p>
      ) : lines.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-6 rounded-[28px] bg-starch-2 p-8 sm:p-12">
          <p className="max-w-lg text-lg leading-relaxed text-text-soft">
            В корзине пока пусто. Выберите позиции в каталоге — посчитаем партию
            и доставку одной заявкой.
          </p>
          <Link
            href="/catalog"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-amber px-6 font-semibold text-ink hover:bg-[#ffb52e]"
          >
            Перейти в каталог
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {lines.map((l) => {
                const min = l.product.minKg ?? 1;
                return (
                  <li
                    key={l.slug}
                    className="grid grid-cols-[88px_1fr] gap-5 py-6 sm:grid-cols-[112px_1fr_auto] sm:items-center"
                  >
                    <Link
                      href={`/catalog/${l.slug}`}
                      className="relative aspect-square overflow-hidden rounded-2xl bg-starch-2"
                    >
                      <Image
                        src={l.product.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </Link>
                    <div>
                      <Link
                        href={`/catalog/${l.slug}`}
                        className="font-semibold leading-snug hover:text-amber-deep"
                      >
                        {l.product.name}
                      </Link>
                      <p className="tabular mt-1 text-sm text-text-soft">
                        {formatSum(l.product.pricePerKg)} сум/кг · мин.{" "}
                        {formatSum(min)} кг
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <label className="sr-only" htmlFor={`kg-${l.slug}`}>
                          Объём, кг
                        </label>
                        <input
                          id={`kg-${l.slug}`}
                          type="number"
                          min={min}
                          step={min >= 100 ? 100 : 1}
                          defaultValue={l.kg}
                          onBlur={(e) => {
                            const v = Math.max(
                              min,
                              Math.round(Number(e.target.value) || min),
                            );
                            e.target.value = String(v);
                            setKg(l.slug, v);
                          }}
                          className="tabular h-11 w-32 rounded-xl bg-white px-3 font-semibold ring-1 ring-ink/15"
                        />
                        <span className="text-sm text-text-soft">кг</span>
                        <button
                          type="button"
                          onClick={() => remove(l.slug)}
                          aria-label={`Убрать «${l.product.shortName}»`}
                          className="ml-auto grid size-10 place-items-center rounded-full text-text-soft hover:bg-ink/5 hover:text-brand-red sm:hidden"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                      <p className="tabular font-display text-xl font-bold">
                        {formatSum(l.sum)} сум
                      </p>
                      <button
                        type="button"
                        onClick={() => remove(l.slug)}
                        className="hidden items-center gap-1.5 text-sm text-text-soft hover:text-brand-red sm:inline-flex"
                      >
                        <Trash2 className="size-4" />
                        Убрать
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={clear}
              className="mt-4 text-sm text-text-soft underline-offset-4 hover:underline"
            >
              Очистить корзину
            </button>
          </div>

          <aside className="h-fit rounded-[28px] bg-ink p-7 text-starch sm:p-9 lg:sticky lg:top-28">
            <p className="text-starch/60">Итого по оптовым ценам</p>
            <p className="tabular mt-2 font-display text-4xl font-bold">
              {formatSum(total)}{" "}
              <span className="font-sans text-lg font-medium text-starch/60">
                сум
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-starch/60">
              Менеджер подтвердит наличие и пришлёт счёт. По Ташкенту доставка
              бесплатная от 200 кг.
            </p>
            <div className="mt-8">
              <LeadForm
                dark
                compact
                submitLabel="Отправить заявку"
                details={lines
                  .map((l) => `${l.product.name}: ${l.kg} кг`)
                  .join("; ")}
              />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
