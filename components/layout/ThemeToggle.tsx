"use client";
// components/layout/ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
