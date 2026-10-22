import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SyrupCanvas } from "@/components/syrup-canvas";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PHONE, stats, telHref } from "@/lib/site";

const words = ["Крахмал", "и патока", "оптом"];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-starch">
      <SyrupCanvas className="absolute inset-0 -z-10 size-full" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-14 pt-32 sm:px-8 lg:pb-20">
        <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8.4vw,7.25rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
          {words.map((w, i) => (
            <span
              key={w}
              className="hero-word block overflow-hidden pb-[0.06em]"
              style={{ ["--i" as string]: i }}
            >
              <span className="block">{w}</span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="hero-rise" style={{ animationDelay: "420ms" }}>
            <p className="max-w-xl text-lg leading-relaxed text-starch/85 sm:text-xl">
              Сырьё заводов Казахстана, России и Польши для кондитерских,
              мясокомбинатов, текстильных и бумажных фабрик. Отгружаем из
              наличия, по Ташкенту везём бесплатно.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="group inline-flex h-14 items-center gap-3 rounded-full bg-amber px-7 text-[17px] font-semibold text-ink btn btn-amber"
              >
                Каталог и цены
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={telHref(PHONE)}
                className="tabular inline-flex h-14 items-center gap-3 rounded-full bg-ink px-7 text-[17px] font-semibold ring-1 ring-white/20 btn btn-ink"
              >
                <Phone className="size-5" />
                {PHONE}
              </a>
            </div>
          </div>

          <dl
            className="hero-rise grid grid-cols-3 divide-x divide-white/15 rounded-3xl bg-ink py-5 ring-1 ring-white/10 sm:py-6"
            style={{ animationDelay: "560ms" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 px-3 sm:px-6">
                <dd className="tabular whitespace-nowrap font-display text-2xl font-bold text-amber sm:text-4xl">
                  {s.plain ? (
                    s.value
                  ) : (
                    <NumberTicker value={s.value} className="text-amber" />
                  )}
                  {s.suffix}
                </dd>
                <dt className="mt-2 text-[13px] leading-snug text-starch/70 [overflow-wrap:anywhere] [hyphens:auto] sm:text-sm">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
