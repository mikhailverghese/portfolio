"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState, useSyncExternalStore } from "react";

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

export function Cursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const onOver = (event: Event) => {
      const target = (event.target as HTMLElement).closest?.(
        "a, button, [data-cursor-label]",
      ) as HTMLElement | null;
      setHovering(Boolean(target));
      setLabel(target?.getAttribute("data-cursor-label") ?? null);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* dot — instant */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[96] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-volt"
        style={{ x, y }}
      />
      {/* ring — trailing */}
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[95] -ml-10 -mt-10 flex items-center justify-center rounded-full border ${
          label ? "" : "mix-blend-difference"
        }`}
        style={{ x: ringX, y: ringY }}
        animate={{
          width: label ? 80 : hovering ? 52 : 32,
          height: label ? 80 : hovering ? 52 : 32,
          backgroundColor: label ? "rgba(212,248,60,0.95)" : "rgba(212,248,60,0)",
          borderColor: label ? "rgba(212,248,60,0)" : "rgba(233,231,222,0.55)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        {label ? (
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-void">
            {label}
          </span>
        ) : null}
      </motion.div>
    </>
  );
}
