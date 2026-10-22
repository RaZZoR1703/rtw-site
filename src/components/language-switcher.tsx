"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/client";
import {
  LOCALE_COOKIE,
  localeLabels,
  locales,
  lp,
  stripLocale,
  type Locale,
} from "@/i18n/config";
import { cn } from "@/lib/utils";

type Props = { light?: boolean; className?: string };

export function LanguageSwitcher({ light, className }: Props) {
  const { lang, m } = useI18n();
  const path = stripLocale(usePathname());

  const choose = (event: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    if (next === lang) {
      event.preventDefault();
      return;
    }
    // Keep ?cat= and other query params when switching language.
    if (window.location.search) {
      event.preventDefault();
      window.location.assign(lp(next, path) + window.location.search);
    }
  };

  return (
    <nav
      aria-label={m.common.language}
      className={cn(
        "flex items-center rounded-full p-1",
        light ? "bg-white/10" : "bg-ink/5",
        className,
      )}
    >
      {locales.map((l) => {
        const active = l === lang;
        return (
          <a
            key={l}
            href={lp(l, path)}
            hrefLang={l}
            lang={l}
            title={localeLabels[l].name}
            aria-current={active ? "true" : undefined}
            onClick={(e) => choose(e, l)}
            className={cn(
              "btn-icon grid h-9 min-w-10 place-items-center rounded-full px-2 text-[13px] font-semibold",
              active
                ? light
                  ? "bg-starch text-ink"
                  : "bg-ink text-starch"
                : light
                  ? "text-starch/80 btn-icon-light"
                  : "text-ink/70 btn-icon-dark",
            )}
          >
            {localeLabels[l].short}
          </a>
        );
      })}
    </nav>
  );
}
