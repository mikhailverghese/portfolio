type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const row = (ariaHidden: boolean) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-7 text-sm font-medium uppercase tracking-[0.32em] text-zinc-500">
            {item}
          </span>
          <span className="text-emerald-300/80">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee overflow-hidden border-y border-white/5 py-5 ${className}`}>
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
