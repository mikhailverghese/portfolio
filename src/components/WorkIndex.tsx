import Image from "next/image";
import Link from "next/link";

export type WorkProject = {
  name: string;
  href: string;
  tagline: string;
  meta: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

type WorkIndexProps = {
  projects: WorkProject[];
};

export function WorkIndex({ projects }: WorkIndexProps) {
  return (
    <div className="relative">
      {/* rows */}
      <div className="border-b border-white/10">
        {projects.map((project, index) => (
          <Link
            key={project.name}
            href={project.href}
            data-cursor-label="VIEW"
            className="group relative block overflow-hidden border-t border-white/10"
          >
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-volt transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
            />
            <div className="relative z-10 grid gap-4 px-2 py-8 transition-colors duration-300 group-hover:text-void sm:px-4 lg:grid-cols-[72px_1fr_auto] lg:items-center lg:py-12">
              {/* mobile image */}
              <span className="block overflow-hidden lg:hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  priority={index === 0}
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 64px), 0px"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </span>

              <span className="font-mono text-sm text-volt transition-colors duration-300 group-hover:text-void">
                /{String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="block font-display text-[clamp(1.9rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.95] tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                  {project.name}
                </span>
                <span className="mt-2 block font-serif text-xl italic text-fog transition-colors duration-300 group-hover:text-void/70 sm:text-2xl">
                  {project.tagline}
                </span>
              </span>

              <span className="flex items-center gap-8 lg:flex-col lg:items-end lg:gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog transition-colors duration-300 group-hover:text-void/70">
                  {project.meta}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-bone transition-colors duration-300 group-hover:text-void">
                  Case study
                  <span className="inline-block transition-transform duration-500 group-hover:rotate-45">
                    ↗
                  </span>
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
