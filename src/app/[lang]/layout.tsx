import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Golos_Text, Unbounded } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";
import { I18nProvider } from "@/i18n/client";
import { hasLocale, intlLocale, locales, ogLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { SITE_URL } from "@/lib/env";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getMessages(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.meta.title, template: m.meta.template },
    description: m.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((l) => [intlLocale[l], `/${l}`]),
      ),
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      siteName: m.meta.siteName,
      title: m.meta.title,
      description: m.meta.description,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const m = getMessages(lang);

  return (
    <html
      lang={intlLocale[lang]}
      className={cn("h-full antialiased", golos.variable, unbounded.variable)}
    >
      <body className="flex min-h-full flex-col bg-starch font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-starch"
        >
          {m.common.skipToContent}
        </a>
        <I18nProvider lang={lang}>
          <Providers>
            <CartProvider>
              <SiteHeader />
              <div id="main" className="flex flex-1 flex-col">
                {children}
              </div>
              <SiteFooter />
              <Toaster position="bottom-center" />
            </CartProvider>
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
