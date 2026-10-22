"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "@/components/lead-form";
import { cn } from "@/lib/utils";

type Props = {
  triggerLabel: string;
  product?: string;
  variant?: "amber" | "ink" | "ghost";
  className?: string;
};

export const buttonVariants = {
  amber: "bg-amber text-ink btn btn-amber",
  ink: "bg-ink text-starch btn btn-ink",
  ghost: "bg-white/10 text-starch ring-1 ring-white/25 btn btn-ghost",
};

export function CallbackDialog({
  triggerLabel,
  product,
  variant = "amber",
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "h-11 rounded-full px-5 text-[15px] font-semibold",
            buttonVariants[variant],
            className,
          )}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden rounded-3xl border-0 bg-starch p-0 sm:max-w-md">
        <DialogHeader className="bg-ink p-7 text-left text-starch">
          <DialogTitle className="font-display text-2xl font-bold leading-tight">
            Перезвоним
          </DialogTitle>
          <DialogDescription className="text-starch/70">
            {product
              ? `По позиции «${product}»: уточним цену, партию и сроки.`
              : "Подберём продукцию под вашу задачу и пришлём актуальные цены."}
          </DialogDescription>
        </DialogHeader>
        <div className="p-7">
          <LeadForm product={product} compact onDone={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
