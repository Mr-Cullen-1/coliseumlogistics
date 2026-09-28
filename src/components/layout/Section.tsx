import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  surface?: "base" | "surface" | "elevated";
}

const surfaceStyles: Record<NonNullable<SectionProps["surface"]>, string> = {
  base: "",
  surface: "bg-surface",
  elevated: "bg-surface-elevated",
};

export function Section({ children, id, className, surface = "base" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-28", surfaceStyles[surface], className)}>
      {children}
    </section>
  );
}
