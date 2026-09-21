import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { quotes } from "@/lib/corpus";

export const Route = createFileRoute("/signals")({ component: SignalsPage });

function SignalsPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ block: "center" });
  }, [hash]);
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
        Intercepts
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl">
        Builder signals
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        Not a quote wall. Each dispatch is paired with the implication for an AI
        development team. Sources are public posts, interviews, and operator
        write-ups from 2025–2026.
      </p>
      <div className="mt-12 flex flex-col gap-10">
        {quotes.map((q) => (
          <figure key={q.id} id={q.id} className="border-t border-line pt-8">
            <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-lg text-fg">{q.by}</span>
              <span className="font-mono text-xs text-sage">{q.handle}</span>
              <span className="text-xs text-subtle">{q.role}</span>
            </figcaption>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-fg">
              {q.text}
            </blockquote>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                Implication
              </span>
              <span className="mt-2 block">{q.implication}</span>
            </p>
          </figure>
        ))}
      </div>
    </main>
  );
}
