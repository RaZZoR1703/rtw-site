import type { Locale } from "@/i18n/config";
import { ru } from "@/i18n/dictionaries/ru";
import { en } from "@/i18n/dictionaries/en";
import { uz } from "@/i18n/dictionaries/uz";

/** Russian is the source of truth: en and uz are typed against it, so a missing string fails the build. */
export type Messages = typeof ru;

const all: Record<Locale, Messages> = { ru, en, uz };

export function getMessages(lang: Locale): Messages {
  return all[lang];
}
