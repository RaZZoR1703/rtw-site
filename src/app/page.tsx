import { Hero } from "@/components/home/hero";
import { PriceBand } from "@/components/home/price-band";
import { Directions } from "@/components/home/directions";
import { Industries } from "@/components/home/industries";
import { StockRail } from "@/components/home/stock-rail";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { LeadSection } from "@/components/lead-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <PriceBand />
      <Directions />
      <Industries />
      <StockRail />
      <About />
      <Faq />
      <LeadSection />
    </main>
  );
}
