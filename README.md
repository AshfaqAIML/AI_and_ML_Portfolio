# Ishfaq Dar — AI/ML Engineer Portfolio

A from-scratch rebuild of the reference portfolio (Dar-Ishfaq-1/My_Portfolio_Website),
repositioned for AI/ML Engineer roles. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, Framer Motion, and a hand-rolled Three.js
neural-network visualization.

## ⚠️ Read before deploying

1. **Contact info conflict found in the source repo.** The reference repo's
   `README.md` lists `dar1.ishfaq36@gmail.com` as the contact email — that's
   what's wired into `data/site.ts`. Its `contact.html` page, however, lists a
   *different* name's email and phone number, which looks like leftover
   template data that was never replaced. That mismatched info was **not**
   carried over here. Double-check the email in `data/site.ts` is correct,
   and add your real phone number (currently left blank).
2. **Assets aren't included.** Add your resume PDF to
   `public/resume/Ishfaq_Dar_Resume.pdf` and (optionally) an Open Graph image
   to `public/images/og-image.png`. See the `.txt` placeholders in those
   folders.
3. **Recommendations are placeholders.** `data/recommendations.ts` ships with
   clearly-marked "awaiting quote" cards rather than invented testimonials —
   swap in real quotes once you have them.
4. **The contact form doesn't send email yet.** It simulates a submit so the
   UI/UX is complete, but isn't wired to a backend. Easiest fix: drop in
   [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com), or add
   a Next.js Route Handler backed by [Resend](https://resend.com). See the
   comment at the top of `components/sections/Contact.tsx`.

## Design direction

Dark "AI research lab" aesthetic — near-black/navy surfaces, electric
blue → cyan → violet gradient as the single recurring accent, glass panels,
and a monospace type used only for data/labels (not body copy). The
signature element is the hero's Three.js visualization: a layered neural
network with signal pulses animating layer-to-layer, echoing forward
propagation — paired with a token-by-token typewriter headline, since both
nod directly at the subject matter instead of generic floating particles.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                   Next.js App Router: layout, page, sitemap, robots
components/
  layout/               Navbar, Footer, theme provider/toggle, loading
                         screen, scroll progress, back-to-top, custom
                         cursor, command palette (⌘K)
  sections/              One file per page section (Hero, About, Skills, …)
  three/                 Three.js hero background
  ui/                    Shared primitives (cards, badges, headings, …)
data/                   All editable content — copy, skills, projects, etc.
hooks/                  useTypewriter, useScrollProgress, useActiveSection
lib/                    cn() className helper
types/                  Shared TypeScript types
```

**To update any content** (projects, skills, timeline, experience,
certifications, recommendations, or your name/links/SEO copy), edit the
relevant file in `data/` — nothing else needs to change.

## Tech notes

- **Styling:** Tailwind CSS with a token system in `tailwind.config.ts`
  (colors are CSS variables in `app/globals.css` so the light/dark toggle can
  repaint them).
- **Animation:** Framer Motion for scroll reveals, page transitions, and
  micro-interactions; respects `prefers-reduced-motion`.
- **GitHub Analytics section** uses the public `github-readme-stats` and
  `streak-stats` image APIs — no token or backend required, updates
  automatically.
- **Skills radar chart** uses Recharts, fed by an average of each category's
  skill levels in `data/skills.ts`.
- **Command palette** (⌘K / Ctrl+K) jumps to any section or opens your
  GitHub/email/resume — hand-rolled, no extra dependency.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at https://vercel.com/new — Next.js
projects deploy with zero configuration. Set `seo.url` in `data/site.ts` to
your real production domain before deploying so metadata, the sitemap, and
JSON-LD structured data resolve correctly.

## Accessibility & performance

- Visible keyboard focus rings on all interactive elements.
- `prefers-reduced-motion` disables non-essential animation.
- Custom cursor and command-palette affordance are desktop-only; mobile gets
  full touch-friendly tap targets instead.
- Three.js scene is dynamically imported with `ssr: false` and disposes all
  geometries/materials on unmount.
