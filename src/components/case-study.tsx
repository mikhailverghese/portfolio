import Link from "next/link";
import type { ReactNode } from "react";

import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

export function BackLink() {
  return (
    <Reveal y={12}>
      <Link
        href="/"
        className="group inline-flex w-fit items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-fog transition hover:text-volt"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1.5">←</span>
        Index of work
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
      <section className="group border-t border-white/10 pt-8 sm:pt-10">
        <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em]">
          <span className="text-volt">/{String(index).padStart(2, "0")}</span>
          <span className="text-fog">{label}</span>
        </div>
        <h2 className="mb-6 font-display text-2xl font-bold uppercase tracking-tight text-bone sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="space-y-5 text-base leading-8 text-fog sm:text-lg sm:leading-9">
          {children}
        </div>
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

export function GalleryItem({
  index,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
}: GalleryItemProps) {
  return (
    <Reveal>
      <div className="group border-t border-white/10 pt-8 sm:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative border border-white/10 bg-panel p-3">
            <ParallaxImage
              src={image}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="w-full"
            />
            <span className="absolute bottom-4 left-4 bg-void/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-volt backdrop-blur">
              Fig. {String(index).padStart(2, "0")}
            </span>
          </div>
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
              Screen {String(index).padStart(2, "0")}
            </p>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-bone sm:text-3xl">
              {title}
            </h3>
            <p className="text-base leading-8 text-fog sm:leading-8">{description}</p>
          </div>
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
    <Reveal delay={0.15} className="lg:sticky lg:top-24">
      <aside className="border-t-2 border-volt bg-panel p-6 sm:p-8">
        <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-volt">
          System Dossier
        </p>
        <ul className="space-y-4 text-sm leading-7 text-bone/90">
          {highlights.map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-xs text-volt">[{i + 1}]</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
          {meta.map((row) => (
            <div key={row.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                {row.label}
              </dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-bone">
                {row.value}
              </dd>
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
        data-cursor-label="NEXT"
        className="group relative block overflow-hidden border-t-2 border-volt bg-panel p-8 sm:p-14"
      >
        <span
          aria-hidden
          className="absolute inset-0 origin-bottom scale-y-0 bg-volt transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
        />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 transition-colors duration-300 group-hover:text-void">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-fog group-hover:text-void/70">
              Next system / 02
            </p>
            <p className="font-display text-4xl font-extrabold uppercase tracking-tight text-bone group-hover:text-void sm:text-6xl">
              {name}
            </p>
            <p className="max-w-md text-sm leading-7 text-fog group-hover:text-void/80">{blurb}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 font-mono text-xl text-bone transition-all duration-500 group-hover:rotate-45 group-hover:border-void group-hover:text-void">
            ↗
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
