"use client";
// components/layout/Navbar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "timeline", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(["hero", ...NAV_ITEMS.map((n) => n.id)]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-3.5 mt-3 glass rounded-2xl shadow-glass md:mx-6 lg:mx-auto">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-sm font-semibold tracking-tight text-ink"
        >
          ishfaq<span className="text-signal-cyan">.dar</span>
          <span className="ml-1.5 font-mono text-[10px] text-ink-faint align-top">
            v1.ai
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-colors",
                  active === item.id
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-signal-gradient px-4 py-2 text-[13px] font-semibold text-white shadow-glow-blue hover:opacity-90 transition-opacity"
          >
            <FileDown size={14} /> Resume
          </a>
        </div>

        <button
          className="lg:hidden grid h-9 w-9 place-items-center text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-4 mt-2 glass rounded-2xl shadow-glass overflow-hidden"
          >
            <ul className="flex flex-col p-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-sm transition-colors",
                      active === item.id
                        ? "text-ink bg-white/5"
                        : "text-ink-muted"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="flex items-center justify-between px-4 py-3">
                <ThemeToggle />
                <a
                  href={site.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-signal-gradient px-4 py-2 text-[13px] font-semibold text-white"
                >
                  <FileDown size={14} /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
