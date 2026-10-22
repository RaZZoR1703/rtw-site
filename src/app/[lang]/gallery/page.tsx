import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { LeadSection } from "@/components/lead-section";
import { lp } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return {
    title: m.gallery.metaTitle,
    description: m.gallery.metaDescription,
    alternates: alternates(lang, "/gallery"),
  };
}

export default async function GalleryPage({
  params,
}: PageProps<"/[lang]/gallery">) {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return (
    <main>
      <PageHero
        image="/images/gallery/bochki-s-patokoy.jpg"
        crumbsLabel={m.common.breadcrumbs}
        crumbs={[
          { href: lp(lang), label: m.common.home },
          { label: m.nav["/gallery"] },
        ]}
        title={m.gallery.title}
        lead={m.gallery.lead}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        <GalleryGrid />
      </section>
      <LeadSection
        title={m.gallery.leadTitle}
        lead={m.gallery.leadLead}
        submitLabel={m.gallery.leadSubmit}
      />
    </main>
  );
}
