/**
 * Public site URL for canonical links, hreflang, the sitemap and social previews.
 * NEXT_PUBLIC_SITE_URL wins; on Vercel the production domain is provided automatically.
 */
const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProd ? `https://${vercelProd}` : "http://localhost:3000")
).replace(/\/$/, "");
