"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trash2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/i18n/client";
import { formatNumber, lp } from "@/i18n/config";

export function CartView() {
  const { lang, m } = useI18n();
  const { lines, total, ready, setKg, remove, clear } = useCart();
  const n = (v: number) => formatNumber(lang, v);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-8 lg:pb-32">
      <nav aria-label={m.common.breadcrumbs} className="text-sm text-text-soft">
        <Link href={lp(lang)} className="hover:text-ink">
          {m.common.home}
        </Link>{" "}
        / <span aria-current="page">{m.cart.title}</span>
      </nav>
      <h1 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-[-0.035em]">
        {m.cart.title}
      </h1>

      {!ready ? (
        <p className="mt-10 text-text-soft" aria-busy="true">
          {m.cart.loading}
        </p>
      ) : lines.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-6 rounded-[28px] bg-starch-2 p-8 sm:p-12">
          <p className="max-w-lg text-lg leading-relaxed text-text-soft">
            {m.cart.empty}
          </p>
          <Link
            href={lp(lang, "/catalog")}
            className="btn btn-amber group inline-flex h-12 items-center gap-2 rounded-full bg-amber px-6 font-semibold text-ink"
          >
            {m.cart.toCatalog}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {lines.map((l) => {
                const min = l.product.minKg ?? 1;
                const href = lp(lang, `/catalog/${l.slug}`);
                return (
                  <li
                    key={l.slug}
                    className="grid grid-cols-[88px_1fr] gap-5 py-6 sm:grid-cols-[112px_1fr_auto] sm:items-center"
                  >
                    <Link
                      href={href}
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
                        href={href}
                        className="font-semibold leading-snug hover:text-amber-deep"
                      >
                        {l.product.name}
                      </Link>
                      <p className="tabular mt-1 text-sm text-text-soft">
                        {m.cart.lineMeta(n(l.product.pricePerKg), n(min))}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <label className="sr-only" htmlFor={`kg-${l.slug}`}>
                          {m.cart.volume}
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
                        <span className="text-sm text-text-soft">
                          {m.common.kg}
                        </span>
                        <button
                          type="button"
                          onClick={() => remove(l.slug)}
                          aria-label={m.cart.remove(l.product.shortName)}
                          className="ml-auto grid size-10 place-items-center rounded-full text-text-soft hover:bg-ink/5 hover:text-brand-red sm:hidden"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                      <p className="tabular font-display text-xl font-bold">
                        {n(l.sum)} {m.common.currency}
                      </p>
                      <button
                        type="button"
                        onClick={() => remove(l.slug)}
                        className="hidden items-center gap-1.5 text-sm text-text-soft hover:text-brand-red sm:inline-flex"
                      >
                        <Trash2 className="size-4" />
                        {m.cart.removeShort}
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
              {m.cart.clear}
            </button>
          </div>

          <aside className="h-fit rounded-[28px] bg-ink p-7 text-starch sm:p-9 lg:sticky lg:top-28">
            <p className="text-starch/60">{m.cart.total}</p>
            <p className="tabular mt-2 font-display text-4xl font-bold">
              {n(total)}{" "}
              <span className="font-sans text-lg font-medium text-starch/60">
                {m.common.currency}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-starch/60">
              {m.cart.totalNote}
            </p>
            <div className="mt-8">
              <LeadForm
                dark
                compact
                submitLabel={m.cart.submit}
                details={lines
                  .map((l) => `${l.product.name}: ${l.kg} ${m.common.kg}`)
                  .join("; ")}
              />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
