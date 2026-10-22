"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { useI18n } from "@/i18n/client";
import { lp } from "@/i18n/config";
import { getCategories } from "@/lib/catalog";
import { EMAIL, MAP_URL, navPaths, PHONES, telHref } from "@/lib/site";

export function SiteFooter() {
  const { lang, m } = useI18n();

  return (
    <footer className="bg-ink text-starch">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-10 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light tagline={m.header.logoLine2} />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-starch/65">
            {m.footer.about}
          </p>
        </div>
        <nav aria-label={m.footer.sections}>
          <h2 className="text-sm font-semibold text-starch/50">
            {m.footer.sections}
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {navPaths.map((href) => (
              <li key={href}>
                <Link href={lp(lang, href)} className="hover:text-amber">
                  {m.nav[href]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={m.footer.products}>
          <h2 className="text-sm font-semibold text-starch/50">
            {m.footer.products}
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {getCategories(m).map((c) => (
              <li key={c.id}>
                <Link
                  href={`${lp(lang, "/catalog")}?cat=${c.id}`}
                  className="hover:text-amber"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-starch/50">
            {m.footer.contacts}
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {PHONES.map((p) => (
              <li key={p}>
                <a
                  href={telHref(p)}
                  className="tabular font-display text-lg font-semibold hover:text-amber"
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-amber">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-starch/65 hover:text-amber"
              >
                {m.company.address}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-white/10 px-4 py-6 text-sm text-starch/60 sm:px-8">
        <span>{m.footer.copyright(m.company.name)}</span>
        <span>{m.footer.warehouse}</span>
      </div>
    </footer>
  );
}
