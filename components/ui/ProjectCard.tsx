"use client";
// components/ui/ProjectCard.tsx
import { ElementType } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Flower2, CloudSun, MessageSquareText } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/GlassCard";

const projectIcons: Record<string, ElementType> = {
  "vi-cbir": Brain,
  "flower-clustering": Flower2,
  "weather-analytics": CloudSun,
  "text-to-sql": MessageSquareText,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.id] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative glass rounded-2xl shadow-glass hover:border-signal-cyan/30 hover:shadow-glow-cyan transition-[border-color,box-shadow] duration-300 overflow-hidden"
    >
      {project.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-signal-gradient px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white shadow-glow-blue z-10">
          Flagship
        </span>
      )}

      <div className="h-32 sm:h-40 bg-gradient-to-br from-signal/5 via-signal-cyan/5 to-signal-violet/5 flex items-center justify-center border-b border-hairline">
        <div className="relative">
          <div className="absolute inset-0 bg-signal-gradient opacity-10 blur-2xl rounded-full" />
          <Icon size={48} className="text-signal-cyan/40" />
        </div>
      </div>

      <div className="p-7 pt-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-signal-cyan">{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="text-ink-faint hover:text-ink transition-colors"
              >
                <Github size={17} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-ink-faint hover:text-ink transition-colors"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-hairline pt-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-lg font-semibold text-ink">
                {m.value}
              </p>
              <p className="text-xs text-ink-faint">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
