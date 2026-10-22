import type { Block } from "@/lib/catalog";

export function RichBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="grid gap-8">
      {blocks.map((b, i) => (
        <div key={i}>
          {b.title && (
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {b.title}
            </h3>
          )}
          {b.paragraphs?.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="mt-3 max-w-[68ch] text-[17px] leading-relaxed text-text-soft first:mt-0"
            >
              {p}
            </p>
          ))}
          {b.list && (
            <ul className="mt-4 grid max-w-[68ch] gap-3">
              {b.list.map((li) => (
                <li
                  key={li.slice(0, 40)}
                  className="flex gap-3 text-[17px] leading-relaxed text-text-soft"
                >
                  <span
                    aria-hidden
                    className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-amber-deep"
                  />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
