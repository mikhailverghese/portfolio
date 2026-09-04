type Word = {
  w: string;
  accent?: boolean;
};

type ManifestoProps = {
  words: Word[];
  className?: string;
};

export function Manifesto({ words, className = "" }: ManifestoProps) {
  return (
    <p className={className}>
      {words.map((word, i) => (
        <span
          key={`${word.w}-${i}`}
          className={`mr-[0.28em] inline ${word.accent ? "font-serif italic font-normal text-volt" : ""}`}
        >
          {word.w}
        </span>
      ))}
    </p>
  );
}
