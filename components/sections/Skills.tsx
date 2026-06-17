"use client";
// components/sections/Skills.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillCategories, radarData } from "@/data/skills";

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
}

export function Skills() {
  const [activeId, setActiveId] = useState<string | "all">("all");

  const visible =
    activeId === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeId);

  return (
    <section id="skills" className="relative py-28 sm:py-32 bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 02 — Skills"
          title="A toolkit built for vision-first AI systems"
          description="From classical ML foundations to Vision Transformers — filter by category or scan the radar for a full-stack view."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Radar overview */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl p-4 shadow-glass h-[340px] sm:h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="70%">
                <PolarGrid stroke="#1C2236" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "#9AA3B8", fontSize: 11 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  dataKey="score"
                  stroke="#22D3EE"
                  fill="#2F6FED"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Filter + cards */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveId("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
                  activeId === "all"
                    ? "border-signal-cyan/50 text-signal-cyan bg-signal-cyan/10"
                    : "border-hairline text-ink-muted hover:text-ink"
                }`}
              >
                All
              </button>
              {skillCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors border ${
                    activeId === c.id
                      ? "border-signal-cyan/50 text-signal-cyan bg-signal-cyan/10"
                      : "border-hairline text-ink-muted hover:text-ink"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.map((cat) => (
                  <motion.div
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                  >
                    <GlassCard className="h-full">
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="text-signal-cyan">
                          <Icon name={cat.icon} />
                        </span>
                        <h3 className="font-display text-base font-semibold text-ink">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="text-xs text-ink-faint mb-4">
                        {cat.description}
                      </p>
                      <div className="space-y-3">
                        {cat.items.map((item) => (
                          <div key={item.name}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-ink-muted">
                                {item.name}
                              </span>
                              <span className="font-mono text-ink-faint">
                                {item.level}%
                              </span>
                            </div>
                            <div className="h-1.5 rounded-full bg-hairline overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="h-full rounded-full bg-signal-gradient"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
