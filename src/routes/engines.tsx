import { createFileRoute, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { engines } from "@/lib/corpus";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/engines")({ component: EnginesPage });

function EnginesPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const navigate = useNavigate();
  const fromHash = hash.replace(/^#/, "");
  const initial =
    engines.find((e) => e.id === fromHash)?.id ?? engines[0]?.id ?? "chatgpt";
  const [id, setId] = useState(initial);
  const engine = engines.find((e) => e.id === id) ?? engines[0];

  useEffect(() => {
    const next = hash.replace(/^#/, "");
    if (next && engines.some((e) => e.id === next)) setId(next);
  }, [hash]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
        Dossiers
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl">
        Six engines, six diets
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        Shared foundation first: crawlers, SSR, entities, extractable pages, mentions.
        Then the 20% that diverges. A URL can be cited on ChatGPT and invisible on
        Perplexity. Optimize as if that is the default.
      </p>

      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {engines.map((e) => (
          <button
            key={e.id}
            id={e.id}
            type="button"
            onClick={() => {
              setId(e.id);
              void navigate({ to: "/engines", hash: e.id, replace: true });
            }}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-150",
              e.id === engine.id
                ? "border-accent bg-accent text-accent-fg"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {e.name}
          </button>
        ))}
      </div>

      <article className="mt-8 rounded-xl border border-line bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-fg">{engine.name}</h2>
            <p className="mt-1 text-sm text-muted">{engine.operator}</p>
          </div>
          <p className="max-w-sm text-sm text-muted">{engine.share}</p>
        </div>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <Fact label="Retrieval" value={engine.retrieval} />
          <Fact label="Citation style" value={engine.citationStyle} />
          <Fact label="Freshness" value={engine.freshness} />
          <Fact label="Highest-leverage move" value={engine.lever} />
        </dl>
        <div className="mt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
            Crawlers
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {engine.crawlers.map((c) => (
              <li
                key={c}
                className="rounded-sm border border-line bg-bg px-2 py-1 font-mono text-xs text-paper"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <Fact className="mt-8" label="Citation diet" value={engine.diet} />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
              Play
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {engine.play.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stamp">
              Avoid
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {engine.avoid.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
}

function Fact({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-fg">{value}</dd>
    </div>
  );
}
