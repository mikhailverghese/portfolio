"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function MagneticLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: MagneticLinkProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMouseMove = (event: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.32);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-white text-ink-950 hover:bg-emerald-200"
      : "border border-white/15 bg-white/[0.03] text-zinc-100 backdrop-blur hover:border-white/40";

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-emerald-100/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={`${base} ${styles} ${className}`}>
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
