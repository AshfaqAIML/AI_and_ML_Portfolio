// app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Timeline } from "@/components/sections/Timeline";
import { Certifications } from "@/components/sections/Certifications";
import { GithubAnalytics } from "@/components/sections/GithubAnalytics";
import { Recommendations } from "@/components/sections/Recommendations";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const hasRecommendations = false;

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Timeline />
      <Certifications />
      <GithubAnalytics />
      {hasRecommendations && <Recommendations />}
      <Contact />
      <Footer />
    </main>
  );
}
