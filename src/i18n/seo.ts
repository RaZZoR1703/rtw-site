import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, intlLocale, locales, lp, type Locale } from "@/i18n/config";

/** Canonical URL plus hreflang links to the same page in every language. */
export function alternates(lang: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: lp(lang, path),
    languages: Object.fromEntries(
      locales.map((l) => [intlLocale[l], lp(l, path)]),
    ),
  };
}

/** Narrow a route's lang param, or 404 for an unknown locale. */
export async function resolveLang(
  params: Promise<{ lang: string }>,
): Promise<Locale> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return lang;
}
