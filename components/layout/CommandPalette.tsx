"use client";
// components/layout/CommandPalette.tsx
import { useEffect, useState, useMemo, ElementType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Home,
  User,
  Cpu,
  FolderGit2,
  FlaskConical,
  History,
  Briefcase,
  Award,
  Github,
  MessageCircle,
  Mail,
  FileDown,
} from "lucide-react";
import { site } from "@/data/site";

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: ElementType;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const items: CommandItem[] = useMemo(
    () => [
      { id: "home", label: "Go to Hero", hint: "section", icon: Home, action: () => goTo("hero") },
      { id: "about", label: "Go to About", hint: "section", icon: User, action: () => goTo("about") },
      { id: "skills", label: "Go to Skills", hint: "section", icon: Cpu, action: () => goTo("skills") },
      { id: "projects", label: "Go to Projects", hint: "section", icon: FolderGit2, action: () => goTo("projects") },
      { id: "research", label: "Go to Research", hint: "section", icon: FlaskConical, action: () => goTo("research") },
      { id: "timeline", label: "Go to AI Journey", hint: "section", icon: History, action: () => goTo("timeline") },
      { id: "experience", label: "Go to Experience", hint: "section", icon: Briefcase, action: () => goTo("experience") },
      { id: "certifications", label: "Go to Certifications", hint: "section", icon: Award, action: () => goTo("certifications") },
      { id: "contact", label: "Go to Contact", hint: "section", icon: MessageCircle, action: () => goTo("contact") },
      {
        id: "github",
        label: "Open GitHub Profile",
        hint: "external",
        icon: Github,
        action: () => window.open(site.social.github, "_blank"),
      },
      {
        id: "email",
        label: `Email ${site.name}`,
        hint: "external",
        icon: Mail,
        action: () => window.open(site.social.email, "_blank"),
      },
      {
        id: "resume",
        label: "Download Resume",
        hint: "external",
        icon: FileDown,
        action: () => window.open(site.resumeUrl, "_blank"),
      },
    ],
    []
  );

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass rounded-2xl shadow-glass overflow-hidden"
              role="dialog"
              aria-label="Command palette"
            >
              <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
                <Search size={16} className="text-ink-faint shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section, or open a link..."
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink-faint outline-none"
                />
                <kbd className="font-mono text-[10px] text-ink-faint border border-hairline rounded px-1.5 py-0.5">
                  esc
                </kbd>
              </div>
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-sm text-ink-faint text-center">
                    No matches.
                  </p>
                )}
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-ink hover:bg-white/5 transition-colors"
                  >
                    <item.icon size={15} className="text-signal-cyan shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    <span className="font-mono text-[10px] text-ink-faint uppercase">
                      {item.hint}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small persistent affordance, desktop only */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 left-6 z-50 items-center gap-2 rounded-full glass px-3.5 py-2 text-xs text-ink-muted hover:text-ink transition-colors shadow-glass"
        aria-label="Open command palette"
      >
        <Search size={13} />
        <span className="font-mono">⌘K</span>
      </button>
    </>
  );
}
