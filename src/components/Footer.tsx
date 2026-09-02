import Link from "next/link";

import { LocalTime } from "@/components/LocalTime";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikhailverghese/" },
  { label: "GitHub", href: "https://github.com/mikhailverghese" },
];

const nav = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-14 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Link
            href="#top"
            data-cursor-label="TOP"
            className="group w-fit"
            aria-label="Back to top"
          >
            <span className="text-outline block font-display text-[clamp(3rem,10vw,7rem)] font-extrabold uppercase leading-none tracking-tight transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-volt)]">
              Mikhail
            </span>
            <span className="text-outline block font-display text-[clamp(3rem,10vw,7rem)] font-extrabold uppercase leading-none tracking-tight transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-volt)]">
              Verghese
            </span>
          </Link>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2" aria-label="Footer">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                Sitemap
              </p>
              {nav.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-baseline gap-3 text-sm text-bone/80 transition hover:text-volt"
                >
                  <span className="font-mono text-[9px] text-fog group-hover:text-volt">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                Elsewhere
              </p>
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline gap-3 text-sm text-bone/80 transition hover:text-volt"
                >
                  <span className="font-mono text-[9px] text-fog group-hover:text-volt">↗</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mikhail Verghese</p>
          <LocalTime />
          <p>Built with Next.js + Motion</p>
        </div>
      </div>
    </footer>
  );
}
