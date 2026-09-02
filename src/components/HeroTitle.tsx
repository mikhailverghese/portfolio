"use client";

import { motion, useReducedMotion } from "motion/react";

export type TitleWord = {
  t: string;
  accent?: boolean;
  outline?: boolean;
};

type HeroTitleProps = {
  lines: TitleWord[][];
  className?: string;
  delay?: number;
  as?: "h1" | "h2";
};

export function HeroTitle({ lines, className = "", delay = 0.2, as = "h1" }: HeroTitleProps) {
  const reduce = useReducedMotion();
  const Tag = as === "h1" ? motion.h1 : motion.h2;
  let wordIndex = 0;

  return (
    <Tag className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((word) => {
            const wordDelay = delay + wordIndex++ * 0.08;
            const style = word.accent
              ? "font-serif italic font-normal normal-case text-volt pr-[0.06em]"
              : word.outline
                ? "text-outline"
                : "";
            return (
              <span
                key={`${word.t}-${wordDelay}`}
                className="inline-block overflow-hidden pb-[0.09em] align-bottom"
              >
                <motion.span
                  className={`inline-block will-change-transform ${style}`}
                  initial={reduce ? false : { y: "115%", rotate: 4 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ duration: 0.9, delay: wordDelay, ease: [0.22, 1, 0.36, 1] }}
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
    </Tag>
  );
}
