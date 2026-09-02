"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  fine.addEventListener("change", callback);
  return () => fine.removeEventListener("change", callback);
}

function getSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function CursorGlow() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 260);
      y.set(event.clientY - 260);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 h-[520px] w-[520px] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgb(52 211 153 / 0.08) 0%, rgb(34 211 238 / 0.05) 38%, transparent 68%)",
      }}
    />
  );
}
