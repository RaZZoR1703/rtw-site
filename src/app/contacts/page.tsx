import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { ADDRESS, EMAIL, MAP_URL, PHONES, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Телефоны, e-mail и адрес склада RTW: ${ADDRESS}.`,
};

export default function ContactsPage() {
  return (
    <main>
      <PageHero
        image="/images/gallery/bochki-s-patokoy.jpg"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Контакты" }]}
        title="Контакты"
        lead="Позвоните или оставьте заявку — подберём продукцию, рассчитаем партию и доставку."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div className="grid content-start gap-5">
          <div className="rounded-[24px] bg-white p-7 ring-1 ring-ink/8">
            <Phone className="size-6 text-amber-deep" />
            <h2 className="mt-4 text-sm font-medium text-text-soft">
              Телефоны
            </h2>
            <ul className="mt-2 grid gap-1">
              {PHONES.map((p) => (
                <li key={p}>
                  <a
                    href={telHref(p)}
                    className="tabular font-display text-2xl font-bold hover:text-amber-deep"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white p-7 ring-1 ring-ink/8">
              <Mail className="size-6 text-amber-deep" />
              <h2 className="mt-4 text-sm font-medium text-text-soft">
                E-mail
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block text-lg font-semibold hover:text-amber-deep"
              >
                {EMAIL}
              </a>
            </div>
            <div className="rounded-[24px] bg-white p-7 ring-1 ring-ink/8">
              <MapPin className="size-6 text-amber-deep" />
              <h2 className="mt-4 text-sm font-medium text-text-soft">
                Склад и офис
              </h2>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-semibold leading-snug hover:text-amber-deep"
              >
                {ADDRESS}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-starch-2 ring-1 ring-ink/8">
            <iframe
              title="Склад RTW на карте"
              src={`https://yandex.uz/map-widget/v1/?text=${encodeURIComponent(ADDRESS)}&z=14`}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="h-fit rounded-[28px] bg-ink p-7 text-starch sm:p-10">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Оставить заявку
          </h2>
          <p className="mt-3 text-starch/65">
            Отправьте ваши контакты и получите актуальные цены.
          </p>
          <div className="mt-8">
            <LeadForm dark submitLabel="Отправить заявку" />
          </div>
        </div>
      </section>
    </main>
  );
}
