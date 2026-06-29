"use client";
// components/sections/Certifications.tsx
import { useMemo, useState } from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { certifications } from "@/data/certifications";
import Image from "next/image";
import { X } from "lucide-react";

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  if (!Cmp) return null;
  return <Cmp size={size} />;
}

export function Certifications() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...certifications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  return (
    <section id="certifications" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 07 — Certifications"
          title="Credentials behind the work"
          description="Industry-recognized certifications validating core AI/ML, data, and analytics skills."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            >
              <GlassCard
                className={`p-5 ${cert.imageUrl ? "cursor-pointer" : ""}`}
                onClick={() => cert.imageUrl && setLightbox(cert.imageUrl)}
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-panel-2 text-signal-cyan border border-hairline">
                    <Icon name={cert.icon} size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-sm font-semibold text-ink leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs text-ink-muted">
                      {cert.issuer}
                    </p>
                    <p className="mt-0.5 text-[11px] text-signal-cyan font-mono">
                      {cert.date}
                    </p>
                    {cert.certId && (
                      <p className="mt-1 text-[10px] text-ink-faint font-mono truncate">
                        ID: {cert.certId}
                      </p>
                    )}
                    {cert.duration && (
                      <p className="mt-0.5 text-[10px] text-ink-faint">
                        Duration: {cert.duration}
                      </p>
                    )}
                    {cert.topics && (
                      <p className="mt-0.5 text-[10px] text-ink-faint line-clamp-2">
                        {cert.topics}
                      </p>
                    )}
                    {cert.verifiedBy && (
                      <p className="mt-1 text-[10px] text-ink-muted italic">
                        Verified by {cert.verifiedBy}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Certificate"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}
    </section>
  );
}
