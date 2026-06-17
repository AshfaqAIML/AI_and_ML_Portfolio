// components/ui/GlassCard.tsx
import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-glass",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-signal-cyan/30 hover:shadow-glow-cyan",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-panel-2/60 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-ink-muted">
      {children}
    </span>
  );
}
