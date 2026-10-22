import type { Metadata } from "next";
import { Golos_Text, Unbounded } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/lib/cart";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Providers } from "@/components/providers";
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

const description =
  "Крахмал, патока, сиропы и техническая химия оптом со склада в Ташкенте. Сырьё заводов Казахстана, России и Польши. Бесплатная доставка по городу.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RTW — крахмал и патока оптом в Ташкенте",
    template: "%s — RTW",
  },
  description,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "RTW — Right to Win",
    title: "RTW — крахмал и патока оптом в Ташкенте",
    description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={cn("h-full antialiased", golos.variable, unbounded.variable)}
    >
      <body className="flex min-h-full flex-col bg-starch font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-starch"
        >
          К содержимому
        </a>
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
      </body>
    </html>
  );
}
