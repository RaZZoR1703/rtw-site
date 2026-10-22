export const locales = ["ru", "en", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  ru: { short: "RU", name: "Русский" },
  en: { short: "EN", name: "English" },
  uz: { short: "UZ", name: "Oʻzbekcha" },
};

/** BCP 47 tags for Intl formatting and the html lang attribute. */
export const intlLocale: Record<Locale, string> = {
  ru: "ru-RU",
  en: "en-US",
  uz: "uz-Latn-UZ",
};

export const ogLocale: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
  uz: "uz_UZ",
};

export const LOCALE_COOKIE = "rtw-locale";

/** Prefix an internal path with the locale: lp("en", "/catalog") -> "/en/catalog". */
export function lp(lang: Locale, path = "/") {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Strip a leading locale segment: "/en/catalog" -> "/catalog". */
export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  return first && hasLocale(first) ? `/${rest.join("/")}` : pathname;
}

const thousandsSeparator: Record<Locale, string> = {
  ru: " ",
  en: ",",
  uz: " ",
};

/**
 * Grouped integer. Hand-rolled on purpose: Node and browsers ship different ICU data for uz,
 * so Intl output differs between server and client and breaks hydration.
 */
export function formatNumber(lang: Locale, value: number) {
  const digits = String(Math.abs(Math.round(value)));
  const grouped = digits.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator[lang],
  );
  return value < 0 ? `-${grouped}` : grouped;
}

export function formatDate(lang: Locale, iso: string) {
  return new Intl.DateTimeFormat(intlLocale[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
