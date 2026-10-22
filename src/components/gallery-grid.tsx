"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BlurFade } from "@/components/ui/blur-fade";
import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
];

export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);
  const go = useCallback(
    (d: number) =>
      setIndex((i) =>
        i === null ? i : (i + d + gallery.length) % gallery.length,
      ),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  return (
    <>
      <ul className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 lg:auto-rows-[260px]">
        {gallery.map((g, i) => (
          <li key={g.src} className={cn(spans[i])}>
            <BlurFade
              delay={(i % 4) * 0.05}
              offset={16}
              blur="0px"
              inView
              className="h-full"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block size-full overflow-hidden rounded-[22px] bg-starch-2 text-left"
              >
                <Image
                  src={g.src}
                  alt={g.caption}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 pt-16 text-[15px] font-medium text-starch">
                  {g.caption}
                </span>
              </button>
            </BlurFade>
          </li>
        ))}
      </ul>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-[min(1100px,94vw)] border-0 bg-ink p-0 text-starch sm:max-w-[min(1100px,94vw)]">
          {index !== null && (
            <figure>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={gallery[index].src}
                  alt={gallery[index].caption}
                  fill
                  sizes="94vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 p-5">
                <DialogTitle className="text-base font-medium">
                  {gallery[index].caption}
                </DialogTitle>
                <span className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Предыдущее фото"
                    className="grid size-11 place-items-center rounded-full bg-white/10 btn-icon btn-icon-light"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Следующее фото"
                    className="grid size-11 place-items-center rounded-full bg-white/10 btn-icon btn-icon-light"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </span>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
