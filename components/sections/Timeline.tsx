"use client";
// components/sections/Timeline.tsx
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

const statusDot: Record<string, string> = {
  done: "bg-signal-cyan",
  current: "bg-signal-amber animate-pulse-slow",
  future: "bg-ink-faint",
};

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 05 — AI Journey"
          title="From C to computer vision"
          description="A real, ordered progression — each stage built on the last."
        />

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-hairline sm:left-[19px]" />

          <ol className="space-y-10">
            {timeline.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.04 }}
                className="relative flex gap-5 sm:gap-7 pl-1"
              >
                <div className="relative z-10 flex w-7 sm:w-9 shrink-0 justify-center pt-1.5">
                  <span
                    className={cn(
                      "h-3 w-3 rounded-full ring-4 ring-void",
                      statusDot[item.status]
                    )}
                  />
                </div>

                <div className="glass flex-1 rounded-2xl p-5 shadow-glass">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  {item.status === "current" && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-signal-amber/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-signal-amber">
                      In progress
                    </span>
                  )}
                  {item.status === "future" && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                      Target
                    </span>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
