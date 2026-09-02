"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type Capability = {
  title: string;
  body: string;
};

export function Capabilities({ items }: { items: Capability[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-white/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title} className="border-t border-white/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-2 py-7 text-left sm:gap-8 sm:px-4"
            >
              <span
                className={`font-mono text-sm transition-colors duration-300 ${
                  isOpen ? "text-volt" : "text-fog group-hover:text-volt"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display text-2xl font-bold uppercase tracking-tight transition-colors duration-300 sm:text-4xl ${
                  isOpen ? "text-bone" : "text-fog group-hover:text-bone"
                }`}
              >
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className={`flex h-10 w-10 items-center justify-center border text-lg transition-colors duration-300 ${
                  isOpen
                    ? "border-volt text-volt"
                    : "border-white/15 text-fog group-hover:border-white/40 group-hover:text-bone"
                }`}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-2 pb-8 pl-[3.4rem] text-base leading-8 text-fog sm:px-4 sm:pl-[4.4rem] sm:text-lg sm:leading-9">
                    {item.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
