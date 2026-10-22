"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "@/components/section-heading";
import { useI18n } from "@/i18n/client";
import { industryImages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Industries() {
  const { m } = useI18n();
  const [active, setActive] = useState(0);
  const industries = m.data.industries.map((ind, i) => ({
    ...ind,
    image: industryImages[i],
  }));
  const [before, accent, after] = m.home.industriesTitle;

  return (
    <section className="bg-ink text-starch">
      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          dark
          title={
            <>
              {before}
              <span className="text-amber">{accent}</span>
              {after}
            </>
          }
          lead={m.home.industriesLead}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <ul className="flex flex-col">
            {industries.map((ind, i) => (
              <li
                key={ind.name}
                className="border-b border-white/10 first:border-t"
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-start gap-6 py-6 text-left"
                >
                  <span className="flex-1">
                    <span
                      className={cn(
                        "block font-display text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl",
                        active === i
                          ? "text-starch"
                          : "text-starch/55 group-hover:text-starch/80",
                      )}
                    >
                      {ind.name}
                    </span>
                    <span
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        active === i
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-3 text-[16px] leading-relaxed text-starch/70">
                          {ind.text}
                        </span>
                        <span className="relative mt-4 block aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                          <Image
                            src={ind.image}
                            alt=""
                            fill
                            sizes="90vw"
                            className="object-cover"
                          />
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-[28px] lg:block">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={industries[active].image}
                  alt=""
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 font-display text-xl font-semibold">
              {industries[active].name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
