import type { MetadataRoute } from "next";
import { intlLocale, locales, lp } from "@/i18n/config";
import { productSlugs } from "@/lib/catalog";
import { articles, navPaths } from "@/lib/site";
import { SITE_URL } from "@/lib/env";

/** One entry per page and language, each listing its translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; lastModified?: string }[] = [
    ...navPaths.map((path) => ({ path, priority: path === "/" ? 1 : 0.8 })),
    ...productSlugs.map((slug) => ({
      path: `/catalog/${slug}`,
      priority: 0.9,
    })),
    ...articles.map((a) => ({
      path: `/news/${a.slug}`,
      priority: 0.5,
      lastModified: a.date,
    })),
  ];
  return pages.flatMap(({ path, priority, lastModified }) =>
    locales.map((lang) => ({
      url: `${SITE_URL}${lp(lang, path)}`,
      priority,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [intlLocale[l], `${SITE_URL}${lp(l, path)}`]),
        ),
      },
    })),
  );
}
