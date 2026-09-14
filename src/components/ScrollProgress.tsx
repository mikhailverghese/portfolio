"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useSyncExternalStore } from "react";

function subscribeToCompactViewport(callback: () => void) {
  const media = window.matchMedia("(max-width: 1279px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCompactViewportSnapshot() {
  return window.matchMedia("(max-width: 1279px)").matches;
}

export function ScrollProgress() {
  const compactViewport = useSyncExternalStore(
    subscribeToCompactViewport,
    getCompactViewportSnapshot,
    () => true,
  );
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });

  if (compactViewport) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-volt"
      style={{ scaleX }}
    />
  );
}
