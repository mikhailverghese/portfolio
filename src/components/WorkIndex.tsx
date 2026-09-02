"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type WorkProject = {
  name: string;
  href: string;
  tagline: string;
  meta: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

type WorkIndexProps = {
  projects: WorkProject[];
};

export function WorkIndex({ projects }: WorkIndexProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 160, damping: 20, mass: 0.5 });
  const xVelocity = useVelocity(springX);
  const rotate = useTransform(xVelocity, [-1200, 1200], [-7, 7], { clamp: true });

  const onMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={reduce ? undefined : onMouseMove}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {/* floating preview (desktop) */}
      <AnimatePresence>
        {active !== null && !reduce && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: springX, y: springY, rotate }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
          >
            <div className="-ml-40 -mt-28 h-56 w-80 overflow-hidden border border-white/15 bg-panel shadow-[0_32px_90px_rgba(0,0,0,0.7)]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  exit={{ clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full"
                >
                  <Image
                    src={projects[active].image}
                    alt=""
                    width={projects[active].imageWidth}
                    height={projects[active].imageHeight}
                    className="h-full w-full object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* rows */}
      <div className="border-b border-white/10">
        {projects.map((project, index) => (
          <Link
            key={project.name}
            href={project.href}
            data-cursor-label="VIEW"
            onMouseEnter={() => setActive(index)}
            className="group relative block overflow-hidden border-t border-white/10"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-volt transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
            />
            <div className="relative z-10 grid gap-4 px-2 py-8 transition-colors duration-300 group-hover:text-void sm:px-4 lg:grid-cols-[72px_1fr_auto] lg:items-center lg:py-12">
              {/* mobile image */}
              <span className="block overflow-hidden lg:hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </span>

              <span className="font-mono text-sm text-volt transition-colors duration-300 group-hover:text-void">
                /{String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="block font-display text-[clamp(1.9rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                  {project.name}
                </span>
                <span className="mt-2 block font-serif text-xl italic text-fog transition-colors duration-300 group-hover:text-void/70 sm:text-2xl">
                  {project.tagline}
                </span>
              </span>

              <span className="flex items-center gap-8 lg:flex-col lg:items-end lg:gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog transition-colors duration-300 group-hover:text-void/70">
                  {project.meta}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-bone transition-colors duration-300 group-hover:text-void">
                  Case study
                  <span className="inline-block transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
