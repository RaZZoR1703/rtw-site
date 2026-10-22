import type { MetadataRoute } from "next";
import { products } from "@/lib/catalog";
import { articles, nav } from "@/lib/site";
import { SITE_URL } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...nav.map((n) => ({
      url: `${SITE_URL}${n.href === "/" ? "" : n.href}`,
      priority: n.href === "/" ? 1 : 0.8,
    })),
    ...products.map((p) => ({
      url: `${SITE_URL}/catalog/${p.slug}`,
      priority: 0.9,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/news/${a.slug}`,
      lastModified: a.date,
      priority: 0.5,
    })),
  ];
}
