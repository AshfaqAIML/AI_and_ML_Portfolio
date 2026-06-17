"use client";
// components/layout/LoadingScreen.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 22;
        return next >= 100 ? 100 : next;
      });
    }, 110);

    const timeout = setTimeout(() => setVisible(false), 1100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-void"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="font-mono text-xs text-ink-faint tracking-[0.3em] uppercase mb-4">
            initializing model
          </div>
          <div className="h-px w-48 bg-hairline overflow-hidden relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-signal-gradient"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="font-mono text-[10px] text-ink-faint mt-3">
            {Math.min(Math.round(progress), 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
