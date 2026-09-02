"use client";

import { motion, useReducedMotion } from "motion/react";

type Word = {
  t: string;
  accent?: boolean;
};

type HeroTitleProps = {
  lines: Word[][];
  className?: string;
};

export function HeroTitle({ lines, className = "" }: HeroTitleProps) {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((word) => {
            const delay = 0.35 + wordIndex++ * 0.07;
            return (
              <span key={`${word.t}-${delay}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className={`inline-block will-change-transform ${
                    word.accent ? "font-serif italic text-gradient pr-[0.06em]" : ""
                  }`}
                  initial={reduce ? false : { y: "115%", rotate: 4 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word.t}
                </motion.span>
                <span aria-hidden className="inline-block">
                  {"\u00A0"}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
