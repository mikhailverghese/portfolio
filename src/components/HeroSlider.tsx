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
      className="space-y-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* progress + tabs */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => goTo(index)}
                aria-pressed={isActive}
                className={`relative px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? "bg-volt font-bold text-void" : "border border-white/10 text-fog hover:text-bone"
                }`}
              >
                <span>{slide.title}</span>
                <span className="ml-2 opacity-60">/{String(index + 1).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-fog">
          <span>PROGRESS</span>
          <div className="h-1 w-28 bg-white/10">
            <div
              key={activeIndex}
              className="h-full bg-volt"
              style={{
                animation: `slider-progress ${AUTOPLAY_MS}ms linear forwards`,
                animationPlayState: paused || reduce ? "paused" : "running",
              }}
            />
          </div>
        </div>
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
        className="group relative cursor-grab border border-white/10 bg-panel active:cursor-grabbing"
      >
        {/* corner markers */}
        <span className="absolute left-2 top-2 z-20 font-mono text-[9px] uppercase tracking-widest text-fog">
          VIEWPORT // {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-2 top-2 z-20 font-mono text-[9px] uppercase tracking-widest text-volt">
          LIVE CAPTURE
        </span>

        {/* arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(activeIndex - 1)}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-void font-mono text-sm text-bone transition hover:border-volt hover:text-volt"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(activeIndex + 1)}
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-void font-mono text-sm text-bone transition hover:border-volt hover:text-volt"
        >
          →
        </button>

        {/* slide */}
        <div className="flex items-center justify-center px-6 py-12 sm:py-16">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="border border-white/15 bg-void p-3 shadow-[0_32px_90px_rgba(0,0,0,0.75)]"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.alt}
                width={imageWidth}
                height={imageHeight}
                priority={activeIndex === 0}
                draggable={false}
                className="h-[400px] w-auto select-none sm:h-[480px] lg:h-[560px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* caption */}
      <div className="min-h-[64px] border-t border-white/10 pt-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <p className="font-display text-2xl font-bold uppercase tracking-tight text-bone">
              {activeSlide.title}
            </p>
            {activeSlide.description ? (
              <p className="max-w-xl text-sm leading-7 text-fog">{activeSlide.description}</p>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
