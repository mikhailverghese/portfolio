import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mikhailverghese/" },
  { label: "GitHub", href: "https://github.com/mikhailverghese" },
];

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-300 via-cyan-300 to-violet-400 font-mono text-[11px] font-bold text-ink-950 transition-transform duration-500 group-hover:rotate-[8deg]">
              MV
            </span>
            <span className="text-sm font-semibold tracking-wide text-zinc-300">Mikhail Verghese</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500" aria-label="Footer">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mikhail Verghese. All rights reserved.</p>
          <p className="font-mono tracking-wide">Designed & built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
