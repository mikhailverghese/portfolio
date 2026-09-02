"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

type Word = {
  w: string;
  accent?: boolean;
};

type ManifestoProps = {
  words: Word[];
  className?: string;
};

function Word({
  children,
  accent,
  progress,
  range,
}: {
  children: string;
  accent?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className={`mr-[0.28em] inline-block ${
        accent ? "font-serif italic font-normal text-volt" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

export function Manifesto({ words, className = "" }: ManifestoProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"] as const,
  });

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {words.map((word, i) => (
          <span
            key={`${word.w}-${i}`}
            className={`mr-[0.28em] inline-block ${
              word.accent ? "font-serif italic text-volt" : ""
            }`}
          >
            {word.w}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word.w}-${i}`}
            accent={word.accent}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word.w}
          </Word>
        );
      })}
    </p>
  );
}
