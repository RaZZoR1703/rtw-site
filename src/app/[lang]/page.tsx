import { Hero } from "@/components/home/hero";
import { PriceBand } from "@/components/home/price-band";
import { Directions } from "@/components/home/directions";
import { Industries } from "@/components/home/industries";
import { StockRail } from "@/components/home/stock-rail";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { LeadSection } from "@/components/lead-section";
import { resolveLang } from "@/i18n/seo";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLang(params);
  return (
    <main>
      <Hero lang={lang} />
      <PriceBand lang={lang} />
      <Directions lang={lang} />
      <Industries />
      <StockRail lang={lang} />
      <About />
      <Faq lang={lang} />
      <LeadSection />
    </main>
  );
}
