"use client";
// components/sections/Certifications.tsx
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { certifications } from "@/data/certifications";

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 07 — Certifications"
          title="Credentials behind the work"
          description="Industry-recognized certifications validating core AI/ML, data, and analytics skills."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            >
              <GlassCard className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-panel-2 text-signal-cyan border border-hairline">
                  <Icon name={cert.icon} size={18} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-ink leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink-muted">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
