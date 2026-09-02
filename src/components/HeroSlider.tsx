"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 5200;

export type HeroSlide = {
  title: string;
  image: string;
  alt: string;
  description?: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  imageWidth: number;
  imageHeight: number;
};

export function HeroSlider({ slides, imageWidth, imageHeight }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const goTo = useCallback(
    (index: number) => setActiveIndex(((index % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (reduce || paused || slides.length <= 1) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, reduce, slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div
      className="space-y-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => goTo(index)}
                aria-pressed={isActive}
                aria-label={`Show ${slide.title}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-ink-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="hero-slider-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{slide.title}</span>
              </button>
            );
          })}
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="mx-1 text-zinc-700">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Stage */}
      <motion.div
        drag={reduce ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        onDragEnd={(_, info) => {
          if (info.offset.x < -70) goTo(activeIndex + 1);
          else if (info.offset.x > 70) goTo(activeIndex - 1);
        }}
        className="group relative cursor-grab overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] active:cursor-grabbing"
      >
        {/* ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-[110px]"
        />

        {/* progress bar */}
        <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-white/5">
          <div
            key={activeIndex}
            className="h-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-400"
            style={{
              animation: `slider-progress ${AUTOPLAY_MS}ms linear forwards`,
              animationPlayState: paused || reduce ? "paused" : "running",
            }}
          />
        </div>

        {/* arrows */}
        <button
          type="button"
          aria-label="Previous screen"
          onClick={() => goTo(activeIndex - 1)}
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/60 text-zinc-300 opacity-0 backdrop-blur-md transition duration-300 hover:border-white/30 hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next screen"
          onClick={() => goTo(activeIndex + 1)}
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-950/60 text-zinc-300 opacity-0 backdrop-blur-md transition duration-300 hover:border-white/30 hover:text-white focus-visible:opacity-100 group-hover:opacity-100"
        >
          →
        </button>

        {/* slide */}
        <div className="relative z-10 flex items-center justify-center px-6 py-10 sm:py-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="rounded-[2.1rem] border border-white/15 bg-ink-950 p-2.5 shadow-[0_32px_90px_rgba(0,0,0,0.65)]"
            >
              <div className="overflow-hidden rounded-[1.7rem]">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  width={imageWidth}
                  height={imageHeight}
                  priority={activeIndex === 0}
                  draggable={false}
                  className="h-[380px] w-auto select-none sm:h-[470px] lg:h-[540px]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* caption */}
      <div className="min-h-[76px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="space-y-2"
          >
            <p className="font-serif text-2xl italic text-zinc-100">{activeSlide.title}</p>
            {activeSlide.description ? (
              <p className="max-w-2xl text-sm leading-7 text-zinc-400">{activeSlide.description}</p>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
