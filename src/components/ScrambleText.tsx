"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_/[]{}—=+*^?#";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<number | null>(null);

  const scramble = () => {
    if (reduce) return;
    let frame = 0;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      frame += 1;
      const resolved = Math.floor(frame / 2);
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );
      if (resolved >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 28);
  };

  useEffect(
    () => () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <span onMouseEnter={scramble} className={className}>
      {display}
    </span>
  );
}
