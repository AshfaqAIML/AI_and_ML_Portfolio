"use client";
// components/sections/Hero.tsx
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, ArrowDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { site } from "@/data/site";

const NeuralBackground = dynamic(
  () => import("@/components/three/NeuralBackground").then((m) => m.NeuralBackground),
  { ssr: false }
);

const ROLES = [
  "Computer Vision",
  "Deep Learning",
  "Vision Transformers",
  "Explainable AI",
];

export function Hero() {
  const typed = useTypewriter({ words: ROLES });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid"
    >
      <NeuralBackground />
      <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-void via-void/70 to-void" />


      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow text-signal-cyan mb-5"
            >
              AI / ML Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {site.name.split(" ")[0]}, building intelligent systems with{" "}
              <span className="text-signal-gradient">AI &amp; Machine Learning</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex h-7 items-center font-mono text-sm text-ink-muted sm:text-base"
            >
              <span className="text-ink-faint mr-2">specializing in</span>
              <span className="text-ink">{typed}</span>
              <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-signal-cyan" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-base text-ink-muted leading-relaxed"
            >
              {site.subTagline} Currently building VI-CBIR, an explainable
              retrieval system for medical imaging.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-signal-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow-blue hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href={site.resumeUrl}
                download
                className="rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-ink hover:border-signal-cyan/50 hover:text-signal-cyan transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                Contact Me →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 flex items-center gap-5"
            >
              {[
                { href: site.social.github, icon: Github, label: "GitHub" },
                { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: site.social.email, icon: Mail, label: "Email" },
                { href: site.social.leetcode, icon: Code2, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-ink-faint hover:text-signal-cyan transition-colors"
                >
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-10 lg:mb-0 shrink-0"
          >
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="absolute inset-0 rounded-full bg-signal-gradient opacity-20 blur-3xl animate-pulse-slow" />
              <div className="relative h-full w-full rounded-full border-2 border-hairline overflow-hidden ring-2 ring-signal-cyan/20">
                <Image
                  src={site.profileImage}
                  alt={site.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-panel border border-hairline px-4 py-2 shadow-glass">
                <span className="font-mono text-[11px] text-signal-cyan">AI/ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
