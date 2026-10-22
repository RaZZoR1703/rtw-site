import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq, PHONE, telHref } from "@/lib/site";

export function Faq() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
      <div>
        <h2 className="text-balance font-display text-[clamp(2rem,4.6vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em]">
          Коротко об условиях
        </h2>
        <p className="mt-5 text-lg text-text-soft">
          Не нашли ответа — позвоните, ответим сразу:
        </p>
        <a
          href={telHref(PHONE)}
          className="tabular mt-3 inline-block font-display text-3xl font-bold hover:text-amber-deep"
        >
          {PHONE}
        </a>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="0"
        className="border-t border-ink/12"
      >
        {faq.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={String(i)}
            className="border-ink/12"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline sm:text-xl">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-[16px] leading-relaxed text-text-soft">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
