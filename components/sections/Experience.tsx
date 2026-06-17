"use client";
// components/sections/Experience.tsx
import { ElementType } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Briefcase, BookOpen, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

const typeIcon: Record<string, ElementType> = {
  research: FlaskConical,
  project: Briefcase,
  learning: BookOpen,
  opensource: GitBranch,
};

const typeLabel: Record<string, string> = {
  research: "Research",
  project: "Applied Project",
  learning: "Coursework",
  opensource: "Open Source",
};

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32 bg-panel/30">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 06 — Experience"
          title="Hands-on work, not just coursework"
          description="Real projects and research — presented as they happened, nothing embellished."
        />

        <div className="mt-14 space-y-5">
          {experience.map((item, i) => {
            const Icon = typeIcon[item.type];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                className="glass rounded-2xl p-7 shadow-glass"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-signal-gradient text-white">
                      <Icon size={16} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {item.role}
                      </h3>
                      <p className="text-sm text-signal-cyan">{item.org}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-mono text-xs text-ink-faint">
                      {item.period}
                    </span>
                    <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                      {typeLabel[item.type]}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 pl-1">
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
