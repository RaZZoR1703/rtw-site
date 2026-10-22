/** Public site URL for canonical links, the sitemap and social previews. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rtw.uz"
).replace(/\/$/, "");
