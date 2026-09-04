"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef, useSyncExternalStore } from "react";

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function subscribeToCompactViewport(callback: () => void) {
  const media = window.matchMedia("(max-width: 1023px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getCompactViewportSnapshot() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

type MarqueeProps = {
  items: string[];
  className?: string;
  baseVelocity?: number;
};

export function Marquee({ items, className = "", baseVelocity = 2.4 }: MarqueeProps) {
  const reduce = useReducedMotion();
  const compactViewport = useSyncExternalStore(subscribeToCompactViewport, getCompactViewportSnapshot, () => false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "240px 0px 240px 0px" });
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4.5], { clamp: false });
  const directionRef = useRef(1);
  const shouldAnimate = !reduce && !compactViewport && inView;

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!shouldAnimate) return;
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionRef.current = -1;
    else if (vf > 0) directionRef.current = 1;
    moveBy += directionRef.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl ${
              i % 2 === 1 ? "text-outline-faint" : "text-bone"
            }`}
          >
            {item}
          </span>
          <span className="text-xl text-volt sm:text-2xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className={`overflow-hidden border-y border-white/10 py-6 ${className}`}>
      <motion.div style={shouldAnimate ? { x } : undefined} className="flex w-max">
        {row(false)}
        {row(true)}
        {shouldAnimate ? row(true) : null}
        {shouldAnimate ? row(true) : null}
      </motion.div>
    </div>
  );
}
