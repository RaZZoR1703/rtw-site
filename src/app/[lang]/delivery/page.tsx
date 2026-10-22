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
import { lp } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";

const payIcons = [Landmark, CreditCard, Banknote];
const deliveryIcons = [Truck, CalendarClock, MapPinned, PackageCheck];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/delivery">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return {
    title: m.delivery.metaTitle,
    description: m.delivery.metaDescription,
    alternates: alternates(lang, "/delivery"),
  };
}

export default async function DeliveryPage({
  params,
}: PageProps<"/[lang]/delivery">) {
  const lang = await resolveLang(params);
  const m = getMessages(lang);

  return (
    <main>
      <PageHero
        image="/images/stock/truck-road.webp"
        crumbsLabel={m.common.breadcrumbs}
        crumbs={[
          { href: lp(lang), label: m.common.home },
          { label: m.delivery.title },
        ]}
        title={m.delivery.title}
        lead={m.delivery.lead}
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <SectionHeading title={m.delivery.payTitle} lead={m.delivery.payLead} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {m.data.payments.map((p, i) => {
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
            <SectionHeading dark title={m.delivery.deliveryTitle} />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {m.data.deliveryOptions.map((d, i) => {
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
              alt={m.delivery.forkliftAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink px-3 py-1 text-xs text-starch/80">
              {m.common.illustration}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <SectionHeading title={m.delivery.stepsTitle} />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink/15 md:block"
          />
          {m.data.orderSteps.map((s, i) => (
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
        title={m.delivery.leadTitle}
        lead={m.delivery.leadLead}
        image="/images/stock/warehouse-bags.webp"
        imageLabel={m.common.illustration}
        submitLabel={m.delivery.leadSubmit}
      />
    </main>
  );
}
