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
    x.set((event.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden px-8 py-3 font-mono text-xs font-bold uppercase tracking-[0.22em] transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-volt text-[#0a0a0b] hover:bg-bone hover:text-[#0a0a0b]"
      : "border border-white/20 bg-transparent text-bone hover:border-volt hover:text-volt";

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
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
