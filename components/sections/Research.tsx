"use client";
// components/sections/Research.tsx
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { researchInterests } from "@/data/research";

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
}

export function Research() {
  return (
    <section id="research" className="relative py-28 sm:py-32 bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 04 — Research"
          title="Where I want to push next"
          description="The questions I keep coming back to, across vision, retrieval, and interpretability."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            >
              <GlassCard className="h-full">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-signal-gradient text-white shadow-glow-blue">
                  <Icon name={r.icon} size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {r.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
