"use client";
// components/sections/About.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const HIGHLIGHTS = [
  "MSc Information Technology",
  "AI/ML Engineer",
  "Computer Vision Enthusiast",
  "Python Developer",
  "Deep Learning Practitioner",
  "Research-Oriented Developer",
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 01 — About"
          title="An engineer who thinks in tensors and ships in production"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden border border-hairline ring-2 ring-signal-cyan/20">
                <Image
                  src={site.profileImage}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-ink-muted">
                  I&apos;m <span className="text-ink font-semibold">{site.name}</span>, an AI/ML Engineer based in {site.location}
                  , with an MSc in Information Technology and a focus on{" "}
                  <span className="text-ink">computer vision</span>,{" "}
                  <span className="text-ink">deep learning</span>, and{" "}
                  <span className="text-ink">explainable retrieval systems</span>.
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-ink-muted">
              My work centers on making vision models not just accurate, but
              auditable — pairing Vision Transformers and CNNs with
              explainability methods like Grad-CAM so the &quot;why&quot;
              behind a prediction is always inspectable.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              I&apos;m most energized by problems at the intersection of{" "}
              <span className="text-ink">research and engineering</span>:
              turning a paper&apos;s idea into a system that runs, retrieves,
              and explains itself in production. I&apos;m currently seeking
              roles and research opportunities where I can push on
              vision-grounded, interpretable AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {HIGHLIGHTS.map((h) => (
                <Badge key={h}>{h}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 self-start"
          >
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 shadow-glass"
              >
                <p className="font-display text-3xl font-semibold text-signal-gradient sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
            <div className="col-span-2 glass rounded-2xl p-6 shadow-glass">
              <p className="text-xs text-ink-faint uppercase tracking-wider font-mono mb-1">Open to Work</p>
              <p className="text-sm text-ink-muted">
                Seeking <span className="text-ink">AI/ML internships</span>, research roles, and full-time opportunities in computer vision and deep learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
