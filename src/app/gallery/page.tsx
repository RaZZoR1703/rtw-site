import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { LeadSection } from "@/components/lead-section";

export const metadata: Metadata = {
  title: "Фотогалерея",
  description:
    "Как выглядят крахмал, патока, сиропы и бура, которые мы поставляем.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        image="/images/gallery/bochki-s-patokoy.jpg"
        crumbs={[{ href: "/", label: "Главная" }, { label: "Галерея" }]}
        title="Фотогалерея"
        lead="Продукция, которую мы поставляем: как выглядят крахмал, патока, сиропы и бура. Иллюстрации вида продукции, не фото конкретной партии."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        <GalleryGrid />
      </section>
      <LeadSection
        title="Нужна продукция?"
        lead="Назовём цену на ваш объём и рассчитаем доставку."
        submitLabel="Узнать цену"
      />
    </main>
  );
}
