import { cn } from "@/lib/utils";

/** Wordmark: RTW with an amber drop in place of a full stop. */
export function Logo({
  light = false,
  tagline,
  className,
}: {
  light?: boolean;
  tagline: string;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="font-display text-[22px] font-black leading-none tracking-[-0.02em]">
        RTW
        <svg
          aria-hidden
          viewBox="0 0 10 14"
          className="ml-0.5 inline-block h-[0.55em] w-auto -translate-y-[0.02em] align-baseline"
        >
          <path
            d="M5 0C5 0 0 6.2 0 9.2a5 5 0 0 0 10 0C10 6.2 5 0 5 0Z"
            fill="var(--amber)"
          />
        </svg>
      </span>
      <span
        className={cn(
          "hidden text-[12px] leading-tight sm:block",
          light ? "text-starch/75" : "text-text-soft",
        )}
      >
        Right to Win
        <br />
        {tagline}
      </span>
    </span>
  );
}
