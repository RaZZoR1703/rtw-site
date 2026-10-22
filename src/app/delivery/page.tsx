import type { Metadata } from "next";
import Image from "next/image";
import {
  Banknote,
  CalendarClock,
  CreditCard,
  Landmark,
  MapPinned,
  PackageCheck,
  Truck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { LeadSection } from "@/components/lead-section";
import { BlurFade } from "@/components/ui/blur-fade";
import { deliveryOptions, orderSteps, payments } from "@/lib/site";

export const metadata: Metadata = {
  title: "Оплата и доставка",
  description:
    "Перечислением, через UzCard или наличными. Бесплатная доставка по Ташкенту от 200 кг, поставки в регионы, самовывоз из Келеса.",
};

const payIcons = [Landmark, CreditCard, Banknote];
const deliveryIcons = [Truck, CalendarClock, MapPinned, PackageCheck];

export default function DeliveryPage() {
  return (
    <main>
      <PageHero
        image="/images/stock/truck-road.webp"
        crumbs={[
          { href: "/", label: "Главная" },
          { label: "Оплата и доставка" },
        ]}
        title="Оплата и доставка"
        lead="Работаем с юридическими лицами и предпринимателями по всему Узбекистану. Товар в наличии на складе в Ташкенте."
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          title="Способы оплаты"
          lead="Выберите удобный способ — для юрлиц выставим счёт на перечисление."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {payments.map((p, i) => {
            const Icon = payIcons[i];
            return (
              <BlurFade
                key={p.name}
                delay={i * 0.06}
                offset={16}
                blur="0px"
                inView
              >
                <li className="h-full rounded-[24px] bg-white p-7 ring-1 ring-ink/8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-amber text-ink">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-text-soft">
                    {p.text}
                  </p>
                </li>
              </BlurFade>
            );
          })}
        </ul>
      </section>

      <section className="bg-ink text-starch">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div>
            <SectionHeading dark title="Привезём сырьё туда, где оно нужно" />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {deliveryOptions.map((d, i) => {
                const Icon = deliveryIcons[i];
                return (
                  <li
                    key={d.name}
                    className="rounded-[22px] bg-white/5 p-6 ring-1 ring-white/10"
                  >
                    <Icon className="size-6 text-amber" />
                    <h3 className="mt-5 text-lg font-semibold">{d.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-starch/65">
                      {d.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-[28px]">
            <Image
              src="/images/stock/warehouse-forklift.webp"
              alt="Погрузчик между стеллажами с паллетами на складе"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink px-3 py-1 text-xs text-starch/80">
              Иллюстрация
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <SectionHeading title="Четыре шага до поставки" />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink/15 md:block"
          />
          {orderSteps.map((s, i) => (
            <BlurFade
              key={s.name}
              delay={i * 0.1}
              offset={16}
              blur="0px"
              inView
            >
              <li className="relative">
                <span className="tabular relative grid size-12 place-items-center rounded-full bg-ink font-display font-bold text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {s.name}
                </h3>
                <p className="mt-2 leading-relaxed text-text-soft">{s.text}</p>
              </li>
            </BlurFade>
          ))}
        </ol>
      </section>

      <LeadSection
        title="Посчитаем доставку вашей партии"
        lead="Назовите объём и адрес — ответим, когда привезём и сколько это будет стоить."
        image="/images/stock/warehouse-bags.webp"
        imageLabel="Иллюстрация"
        submitLabel="Рассчитать"
      />
    </main>
  );
}
