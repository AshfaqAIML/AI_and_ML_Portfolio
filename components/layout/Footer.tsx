// components/layout/Footer.tsx
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { site } from "@/data/site";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-display text-base font-semibold text-ink mb-3">
            ishfaq<span className="text-signal-cyan">.dar</span>
          </div>
          <p className="text-sm text-ink-muted max-w-xs leading-relaxed">
            {site.subTagline}
          </p>
        </div>

        <div>
          <p className="eyebrow text-ink-faint mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-sm text-ink-muted hover:text-signal-cyan transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ink-faint mb-4">Connect</p>
          <ul className="space-y-2.5">
            <li>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-signal-cyan transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-signal-cyan transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.email}
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-signal-cyan transition-colors"
              >
                <Mail size={14} /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-signal-cyan transition-colors"
              >
                <Code2 size={14} /> Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-ink-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-ink-faint">
            built with next.js · tailwind · three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
