"use client";
// components/sections/Recommendations.tsx
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recommendations } from "@/data/recommendations";

export function Recommendations() {
  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 09 — Recommendations"
          title="What people I've worked with say"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="glass relative rounded-2xl p-6 shadow-glass"
            >
              <Quote size={20} className="text-signal-cyan/60" />
              <p className="mt-4 text-sm italic leading-relaxed text-ink-muted">
                &ldquo;{rec.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-hairline pt-4">
                <p className="text-sm font-semibold text-ink">{rec.name}</p>
                <p className="text-xs text-ink-faint">
                  {rec.title} · {rec.relation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
