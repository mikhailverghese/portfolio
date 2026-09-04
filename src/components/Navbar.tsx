"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LocalTime } from "@/components/LocalTime";
import { ScrambleText } from "@/components/ScrambleText";

const links = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 lg:mix-blend-difference"
      >
        <div className="flex items-center justify-between px-5 py-5 text-[#f2f2f2] sm:px-8">
          <Link
            href="/"
            aria-label="Mikhail Verghese — home"
            className="group flex items-baseline gap-2 font-mono text-sm font-bold tracking-tight"
          >
            <span className="text-base transition-transform duration-500 group-hover:rotate-[10deg]">
              MV©
            </span>
            <span className="hidden font-normal uppercase tracking-[0.25em] opacity-60 sm:inline">
              Mikhail Verghese
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.25em] md:flex"
            aria-label="Primary"
          >
            {links.map((link, i) => (
              <Link key={link.label} href={link.href} className="group flex items-baseline gap-2">
                <span className="text-[9px] text-volt">0{i + 1}</span>
                <ScrambleText text={link.label} className="opacity-80 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
            <span className="flex items-center gap-2 opacity-80">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-volt" />
              Open to work
            </span>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-void px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={reduce ? false : { opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-5 border-b border-white/10 py-6"
                  >
                    <span className="font-mono text-xs text-volt">0{i + 1}</span>
                    <span className="font-display text-5xl font-extrabold uppercase tracking-tight text-bone transition group-hover:text-volt">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-fog"
            >
              <span>Analyst · Builder</span>
              <LocalTime />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
