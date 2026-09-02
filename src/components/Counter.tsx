"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  suffix?: string;
  label: string;
  sublabel?: string;
};

export function Counter({ to, suffix = "", label, sublabel }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <div ref={ref} className="flex flex-col gap-3 px-2 py-10 sm:px-6">
      <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-bone sm:text-6xl lg:text-7xl">
        {value}
        <span className="text-volt">{suffix}</span>
      </p>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone">{label}</p>
        {sublabel ? (
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
            {sublabel}
          </p>
        ) : null}
      </div>
    </div>
  );
}
