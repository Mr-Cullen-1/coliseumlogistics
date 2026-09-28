import { cn } from "@/lib/cn";

interface StatProps {
  value: string;
  label: string;
  className?: string;
}

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span aria-hidden="true" className="h-px w-8 bg-bronze" />
      <span className="text-h2 font-semibold text-foreground">{value}</span>
      <span className="text-small uppercase tracking-wide text-text-secondary">{label}</span>
    </div>
  );
}
