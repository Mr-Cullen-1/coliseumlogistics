import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze-light",
        className,
      )}
    >
      <span className="h-px w-6 bg-bronze" aria-hidden="true" />
      {children}
    </span>
  );
}
