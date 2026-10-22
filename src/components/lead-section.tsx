"use client";

import Image from "next/image";
import { LeadForm } from "@/components/lead-form";
import { useI18n } from "@/i18n/client";
import { EMAIL, MAP_URL, PHONES, telHref } from "@/lib/site";

type Props = {
  title?: string;
  lead?: string;
  image?: string;
  submitLabel?: string;
  /** Visible note on the photo, e.g. "Illustration" for stock imagery. */
  imageLabel?: string;
  id?: string;
};

export function LeadSection({
  title,
  lead,
  image = "/images/gallery/bura-meshki.jpg",
  submitLabel,
  imageLabel,
  id = "lead",
}: Props) {
  const { m } = useI18n();

  return (
    <section id={id} className="px-4 pb-24 sm:px-8 lg:pb-32">
      <div className="relative isolate mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-ink text-starch lg:grid-cols-2">
        <div className="relative min-h-72 lg:min-h-full">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/10 lg:to-ink" />
          {imageLabel && (
            <span className="absolute bottom-4 left-4 rounded-full bg-ink px-3 py-1 text-xs text-starch/80">
              {imageLabel}
            </span>
          )}
        </div>
        <div className="relative p-7 sm:p-12">
          <h2 className="text-balance font-display text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {title ?? m.home.leadTitle}
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-starch/70">
            {lead ?? m.home.leadLead}
          </p>
          <div className="mt-8">
            <LeadForm dark submitLabel={submitLabel} />
          </div>
          <div className="mt-10 grid gap-2 border-t border-white/10 pt-8 text-[15px]">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={telHref(p)}
                  className="tabular font-semibold hover:text-amber"
                >
                  {p}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="text-starch/70 hover:text-amber"
            >
              {EMAIL}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-starch/70 hover:text-amber"
            >
              {m.company.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
