"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/i18n/config";
import { getMessages, type Messages } from "@/i18n/messages";

const LocaleContext = createContext<Locale>("ru");

/** Only the locale crosses the server/client boundary; messages hold functions, so each side imports them itself. */
export function I18nProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>
  );
}

export function useI18n(): { lang: Locale; m: Messages } {
  const lang = useContext(LocaleContext);
  return { lang, m: getMessages(lang) };
}
