"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

let hasPlayed = false;

export function Preloader() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [finished, setFinished] = useState(hasPlayed);

  useEffect(() => {
    if (finished) return;
    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: reduce ? 0 : 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => {
        window.setTimeout(() => setExiting(true), 220);
      },
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, [finished, reduce]);

  if (finished) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (exiting) {
          hasPlayed = true;
          setFinished(true);
          document.body.style.overflow = "";
        }
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-void px-6 py-8 sm:px-10"
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
        <span>Mikhail Verghese</span>
        <span>Portfolio © 2026</span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="h-px w-full bg-white/10">
          <div className="h-px bg-volt transition-[width] duration-100" style={{ width: `${count}%` }} />
        </div>
        <div className="flex items-end justify-between">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            Loading selected work
          </p>
          <p className="font-display text-[clamp(5rem,18vw,13rem)] font-extrabold leading-none tracking-tight text-bone">
            {String(count).padStart(3, "0")}
            <span className="text-volt">%</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
