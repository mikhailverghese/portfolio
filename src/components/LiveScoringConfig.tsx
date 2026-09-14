"use client";

import { useEffect, useState } from "react";

type ScoringConfig = {
  weights?: {
    positive?: Record<string, number>;
    negative?: Record<string, number>;
  };
};

const SCORING_CONFIG_URL =
  "https://raw.githubusercontent.com/mikhailverghese/job-checker/main/config/scoring-config.json";

function renderKeywordEntries(
  entries: Record<string, number> | undefined,
  tone: "positive" | "negative",
) {
  if (!entries || !Object.keys(entries).length) {
    return <p className="font-mono text-xs text-fog">Config unavailable.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(entries).map(([term, score]) => (
        <span
          key={`${tone}-${term}`}
          className={`border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
            tone === "positive"
              ? "border-volt/30 bg-volt/10 text-volt"
              : "border-rose-500/30 bg-rose-500/10 text-rose-300"
          }`}
        >
          {term} <span className="opacity-75">[{score > 0 ? `+${score}` : score}]</span>
        </span>
      ))}
    </div>
  );
}

export function LiveScoringConfig() {
  const [config, setConfig] = useState<ScoringConfig | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadConfig() {
      try {
        const response = await fetch(`${SCORING_CONFIG_URL}?ts=${Date.now()}`, {
          cache: "no-store",
        });
        if (!response.ok) return;
        const next = (await response.json()) as ScoringConfig;
        if (!cancelled) {
          setConfig(next);
        }
      } catch {
        // keep fallback state
      } finally {
        if (!cancelled) {
          setLoaded(true);
        }
      }
    }

    void loadConfig();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="border-t border-white/10 pt-10">
      <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em]">
        <span className="text-volt">/06</span>
        <span className="text-fog">Live Ingestion Model</span>
      </div>
      <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-bone">
        Live Scoring Config
      </h2>
      <p className="mb-8 font-mono text-xs uppercase leading-6 tracking-wider text-fog">
        Dynamically fetched from <code className="bg-ink px-2 py-0.5 text-volt">config/scoring-config.json</code>{" "}
        in the public repository.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border border-volt/30 bg-panel p-6">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-volt">
            Positive Signals
          </p>
          {loaded ? (
            renderKeywordEntries(config?.weights?.positive, "positive")
          ) : (
            <p className="font-mono text-xs text-fog">Loading current public config…</p>
          )}
        </div>
        <div className="border border-rose-500/30 bg-panel p-6">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
            Negative Penalties
          </p>
          {loaded ? (
            renderKeywordEntries(config?.weights?.negative, "negative")
          ) : (
            <p className="font-mono text-xs text-fog">Loading current public config…</p>
          )}
        </div>
      </div>
    </div>
  );
}
