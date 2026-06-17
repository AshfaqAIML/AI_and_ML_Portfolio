// components/sections/GithubAnalytics.tsx
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";

const username = "Dar-Ishfaq-1";

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
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000&title_color=22D3EE&icon_color=2F6FED&text_color=9AA3B8&ring_color=2F6FED`}
              alt={`${site.name} GitHub stats`}
              className="w-full"
              loading="lazy"
            />
          </GlassCard>

          <GlassCard hover={false} className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://streak-stats.demolab.com?user=${username}&hide_border=true&background=00000000&ring=2F6FED&fire=22D3EE&currStreakLabel=22D3EE&sideLabels=9AA3B8&sideNums=E8ECF6&dates=5C6580`}
              alt={`${site.name} GitHub streak stats`}
              className="w-full"
              loading="lazy"
            />
          </GlassCard>

          <GlassCard hover={false} className="overflow-hidden lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&title_color=22D3EE&text_color=9AA3B8`}
              alt={`${site.name} top languages`}
              className="mx-auto"
              loading="lazy"
            />
          </GlassCard>
        </div>

        <p className="mt-6 text-center text-xs text-ink-faint">
          Powered by github-readme-stats — updates automatically, no manual edits needed.
        </p>
      </div>
    </section>
  );
}
