import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 sm:px-10 lg:px-12">
        <Link
          href="#top"
          data-cursor-label="TOP"
          className="group max-w-full w-fit"
          aria-label="Back to top"
        >
          <span className="text-outline block font-display text-[clamp(2.15rem,9vw,7rem)] font-extrabold uppercase leading-none tracking-tight transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-volt)]">
            Mikhail
          </span>
          <span className="text-outline block font-display text-[clamp(2.15rem,9vw,7rem)] font-extrabold uppercase leading-none tracking-tight transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-volt)]">
            Verghese
          </span>
        </Link>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mikhail Verghese</p>
          <p>Built with Next.js + Motion</p>
        </div>
      </div>
    </footer>
  );
}
