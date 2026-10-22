import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { lp } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";
import { EMAIL, MAP_EMBED, MAP_URL, PHONES, telHref } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contacts">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const m = getMessages(lang);
  return {
    title: m.contacts.metaTitle,
    description: m.contacts.metaDescription(m.company.address),
    alternates: alternates(lang, "/contacts"),
  };
}

export default async function ContactsPage({
  params,
}: PageProps<"/[lang]/contacts">) {
  const lang = await resolveLang(params);
  const m = getMessages(lang);

  return (
    <main>
      <PageHero
        image="/images/gallery/bochki-s-patokoy.jpg"
        crumbsLabel={m.common.breadcrumbs}
        crumbs={[
          { href: lp(lang), label: m.common.home },
          { label: m.contacts.title },
        ]}
        title={m.contacts.title}
        lead={m.contacts.lead}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div className="grid content-start gap-5">
          <div className="rounded-[24px] bg-white p-7 ring-1 ring-ink/8">
            <Phone className="size-6 text-amber-deep" />
            <h2 className="mt-4 text-sm font-medium text-text-soft">
              {m.contacts.phones}
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
                {m.contacts.email}
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
                {m.contacts.address}
              </h2>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-semibold leading-snug hover:text-amber-deep"
              >
                {m.company.address}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-starch-2 ring-1 ring-ink/8">
            <iframe
              title={m.contacts.mapTitle}
              src={MAP_EMBED}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="h-fit rounded-[28px] bg-ink p-7 text-starch sm:p-10">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            {m.contacts.formTitle}
          </h2>
          <p className="mt-3 text-starch/65">{m.contacts.formLead}</p>
          <div className="mt-8">
            <LeadForm dark submitLabel={m.contacts.formSubmit} />
          </div>
        </div>
      </section>
    </main>
  );
}
