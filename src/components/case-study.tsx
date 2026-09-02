import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";

export function BackLink() {
  return (
    <Reveal y={12}>
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-400 backdrop-blur transition duration-300 hover:border-white/30 hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        Back to portfolio
      </Link>
    </Reveal>
  );
}

type SectionCardProps = {
  index: number;
  label: string;
  title: string;
  children: ReactNode;
};

export function SectionCard({ index, label, title, children }: SectionCardProps) {
  return (
    <Reveal>
      <section className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-7 transition-colors duration-500 hover:border-white/15 sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/0 blur-[80px] transition-colors duration-700 group-hover:bg-emerald-400/10"
        />
        <div className="mb-5 flex items-center gap-4">
          <span className="font-mono text-xs text-emerald-300">
            {String(index).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-white/15" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{label}</p>
        </div>
        <h2 className="mb-5 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
          {title}
        </h2>
        <div className="space-y-4 text-base leading-8 text-zinc-400">{children}</div>
      </section>
    </Reveal>
  );
}

type GalleryItemProps = {
  index: number;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export function GalleryItem({ index, title, description, image, imageWidth, imageHeight }: GalleryItemProps) {
  return (
    <Reveal>
      <div className="group grid gap-6 rounded-[1.5rem] border border-white/8 bg-ink-900/60 p-5 transition-colors duration-500 hover:border-white/15 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-6">
        <div className="relative mx-auto w-full max-w-[250px]">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 scale-90 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          <div className="relative rounded-[1.9rem] border border-white/12 bg-ink-950 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[0.5deg]">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src={image}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-mono text-xs text-zinc-600">{String(index).padStart(2, "0")}</p>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-50">{title}</h3>
          <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}

type SnapshotAsideProps = {
  highlights: string[];
  meta: { label: string; value: string }[];
};

export function SnapshotAside({ highlights, meta }: SnapshotAsideProps) {
  return (
    <Reveal delay={0.15} className="lg:sticky lg:top-28">
      <aside className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-[90px]"
        />
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Snapshot
        </p>
        <ul className="space-y-4 text-sm leading-7 text-zinc-300">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgb(110_231_183/0.8)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-7 space-y-4 border-t border-white/10 pt-6">
          {meta.map((row) => (
            <div key={row.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                {row.label}
              </dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-200">{row.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </Reveal>
  );
}

type NextProjectProps = {
  name: string;
  href: string;
  blurb: string;
};

export function NextProject({ name, href, blurb }: NextProjectProps) {
  return (
    <Reveal>
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-white/20 sm:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Next project
            </p>
            <p className="font-serif text-4xl italic text-zinc-100 transition-colors group-hover:text-white sm:text-5xl">
              {name}
            </p>
            <p className="max-w-md text-sm leading-7 text-zinc-400">{blurb}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 text-xl text-zinc-300 transition-all duration-500 group-hover:rotate-45 group-hover:border-emerald-300/60 group-hover:text-emerald-300">
            ↗
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
