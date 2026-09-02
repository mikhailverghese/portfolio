"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export function CentfulHeroSlider({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="space-y-5">
      <div className="rounded-[2rem] border border-black/8 bg-zinc-950 p-4 shadow-[0_24px_80px_rgba(24,24,27,0.16)]">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            width={1179}
            height={2556}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[1.5rem] border border-black/8 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Screen preview
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">{activeSlide.title}</h2>
          <p className="max-w-2xl text-base leading-8 text-zinc-600">{activeSlide.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                  ? "bg-zinc-950 text-white"
                  : "border border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-900 hover:text-zinc-950"
                  }`}
                aria-pressed={isActive}
                aria-label={`Show ${slide.title}`}
              >
                {slide.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
