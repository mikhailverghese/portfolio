"use client";

import { useEffect, useState } from "react";

type ScoringConfig = {
  search_terms?: string[];
};

const SCORING_CONFIG_URL =
  "https://raw.githubusercontent.com/mikhailverghese/job-checker/main/config/scoring-config.json";

export function LiveJobSearchTitles() {
  const [titles, setTitles] = useState<string[] | null>(null);
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
          setTitles(next.search_terms ?? []);
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
    <div className="space-y-4 border border-volt/20 bg-panel/70 p-5">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-volt">
        Live Search Titles
      </p>
      {loaded ? (
        titles && titles.length ? (
          <div className="flex flex-wrap gap-2">
            {titles.map((title) => (
              <span
                key={title}
                className="border border-volt/30 bg-volt/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-volt"
              >
                {title}
              </span>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-fog">Search titles unavailable.</p>
        )
      ) : (
        <p className="font-mono text-xs text-fog">Loading live search titles…</p>
      )}
    </div>
  );
}
