// components/sections/GithubAnalytics.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const username = "AshfaqAIML";
const cardTheme = "transparent";

export function GithubAnalytics() {
  return (
    <section id="github" className="relative py-28 sm:py-32 bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="// 08 — GitHub Analytics"
          title="Activity, at a glance"
          description="Live stats pulled straight from GitHub — contribution history, streaks, and top languages."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <GlassCard hover={false} className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=${cardTheme}`}
              alt={`${site.name} GitHub stats`}
              className="w-full"
              loading="lazy"
            />
          </GlassCard>

          <GlassCard hover={false} className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=${cardTheme}`}
              alt={`${site.name} language distribution across repos`}
              className="w-full"
              loading="lazy"
            />
          </GlassCard>

          <GlassCard hover={false} className="overflow-hidden lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=${cardTheme}`}
              alt={`${site.name} contribution history`}
              className="w-full"
              loading="lazy"
            />
          </GlassCard>
        </div>

        <p className="mt-6 text-center text-xs text-ink-faint">
          Powered by github-profile-summary-cards — updates automatically, no manual edits needed.
        </p>
      </div>
    </section>
  );
}
