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
          className={word.accent ? "font-serif italic font-normal text-volt" : undefined}
        >
          {word.w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
