"use client";
// components/sections/Contact.tsx
//
// The form below is wired to simulate a submit locally — there's no email
// backend connected yet. To make it actually send mail, the simplest options
// are Formspree, EmailJS, or a Next.js Route Handler + Resend. Swap the
// `handleSubmit` body for a fetch() call to whichever you pick.
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, FileDown, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Placeholder: replace with a real request to your email provider.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3500);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32 bg-panel/30">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 10 — Contact"
          title="Let's build something"
          description="Open to AI/ML internships, research collaborations, and full-time roles."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <a
              href={site.social.email}
              className="glass flex items-center gap-3.5 rounded-2xl p-5 shadow-glass hover:border-signal-cyan/30 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-signal-gradient text-white">
                <Mail size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Email</p>
                <p className="text-xs text-ink-muted">{site.email}</p>
              </div>
            </a>

            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3.5 rounded-2xl p-5 shadow-glass hover:border-signal-cyan/30 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-panel-2 border border-hairline text-signal-cyan">
                <Linkedin size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">LinkedIn</p>
                <p className="text-xs text-ink-muted">Connect professionally</p>
              </div>
            </a>

            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-3.5 rounded-2xl p-5 shadow-glass hover:border-signal-cyan/30 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-panel-2 border border-hairline text-signal-cyan">
                <Github size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">GitHub</p>
                <p className="text-xs text-ink-muted">Browse my repositories</p>
              </div>
            </a>

            <a
              href={site.resumeUrl}
              download
              className="glass flex items-center gap-3.5 rounded-2xl p-5 shadow-glass hover:border-signal-cyan/30 transition-colors"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-panel-2 border border-hairline text-signal-cyan">
                <FileDown size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Resume</p>
                <p className="text-xs text-ink-muted">Download as PDF</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7 shadow-glass space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs text-ink-muted">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-hairline bg-panel-2/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-signal-cyan/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-ink-muted">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-hairline bg-panel-2/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-signal-cyan/50"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-ink-muted">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="What are you working on?"
                className="w-full resize-none rounded-xl border border-hairline bg-panel-2/60 px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-signal-cyan/50"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-signal-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow-blue transition-opacity hover:opacity-90 disabled:opacity-70 sm:w-auto"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Send size={15} /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sending…
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckCircle2 size={15} /> Message sent
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
