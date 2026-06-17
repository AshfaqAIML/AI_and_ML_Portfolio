import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core "AI lab" token system — values come from CSS vars in globals.css
        // so the dark/light toggle can repaint them at runtime.
        void: "rgb(var(--c-void) / <alpha-value>)",
        panel: "rgb(var(--c-panel) / <alpha-value>)",
        "panel-2": "rgb(var(--c-panel-2) / <alpha-value>)",
        hairline: "rgb(var(--c-hairline) / <alpha-value>)",
        signal: {
          DEFAULT: "#2F6FED", // electric blue — constant across themes
          cyan: "#22D3EE", // cyan pulse
          violet: "#8B5CF6", // violet accent
          amber: "#F2B84B", // sparingly used warm accent for highlights
        },
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--c-ink-faint) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(circle, rgba(154,163,184,0.18) 1px, transparent 1px)",
        "signal-gradient":
          "linear-gradient(135deg, #2F6FED 0%, #22D3EE 50%, #8B5CF6 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        "glow-blue": "0 0 40px rgba(47,111,237,0.35)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.30)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
