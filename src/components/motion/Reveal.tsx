"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

function subscribeToCompactViewport(callback: () => void) {
  const media = window.matchMedia("(max-width: 1023px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCompactViewportSnapshot() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const compactViewport = useSyncExternalStore(
    subscribeToCompactViewport,
    getCompactViewportSnapshot,
    () => false,
  );

  if (reduce || compactViewport) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
