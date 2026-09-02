"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  title: string;
  image: string;
  alt: string;
};

export function BitebookHeroSlider({ slides }: { slides: Slide[] }) {
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
    <div className="space-y-4">
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
    </div>
  );
}
