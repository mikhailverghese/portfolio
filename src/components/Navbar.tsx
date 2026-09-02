"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={`mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-full border px-4 pl-5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-ink-950/80 shadow-[0_16px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "border-white/5 bg-white/[0.02] backdrop-blur-md"
          }`}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label="Mikhail Verghese — home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-300 via-cyan-300 to-violet-400 font-mono text-[11px] font-bold tracking-tight text-ink-950 transition-transform duration-500 group-hover:rotate-[8deg]">
              MV
            </span>
            <span className="text-sm font-semibold tracking-wide text-zinc-200 transition group-hover:text-white">
              Mikhail Verghese
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-2 inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-semibold text-ink-950 transition hover:bg-emerald-200"
            >
              Let&apos;s talk
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] md:hidden"
          >
            <span
              className={`h-px w-4 bg-zinc-200 transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-zinc-200 transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={reduce ? false : { opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-white/8 py-5"
                  >
                    <span className="font-mono text-xs text-emerald-300">0{i + 1}</span>
                    <span className="font-serif text-4xl italic text-zinc-200 transition group-hover:text-white">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10 text-xs uppercase tracking-[0.3em] text-zinc-500"
            >
              Analyst · Builder · Problem solver
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
