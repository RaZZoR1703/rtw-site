"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useI18n } from "@/i18n/client";

export function About() {
  const { m } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink text-starch"
    >
      <motion.div style={{ y }} className="absolute inset-[-12%_0] -z-10">
        <Image
          src="/images/stock/corn-cobs.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/92 to-ink/45" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 py-24 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:py-36">
        <div>
          <h2 className="max-w-2xl text-balance font-display text-[clamp(2rem,4.6vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            {m.home.aboutTitle}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-starch/75">
            {m.home.aboutLead}
          </p>
          <div className="mt-12">
            <h3 className="text-sm font-medium text-starch/60">
              {m.home.makers}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {m.data.countries.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-ink-2 px-5 py-2.5 font-display text-lg font-semibold ring-1 ring-white/15"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid content-center self-center divide-y divide-white/15">
          {m.data.advantages.map((a, i) => (
            <motion.li
              key={a}
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex gap-4 py-5 text-[17px] leading-relaxed text-starch/90"
            >
              <span
                aria-hidden
                className="mt-[0.55em] size-2 shrink-0 rounded-full bg-amber"
              />
              {a}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
