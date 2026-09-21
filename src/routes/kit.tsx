import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { kpis, promptSeeds, sprint } from "@/lib/corpus";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export const Route = createFileRoute("/kit")({ component: KitPage });

const OWNERS = {
  eng: "Engineering",
  content: "Content",
  growth: "Growth",
  product: "Product",
} as const;

function KitPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const done = useProgress((s) => s.done);
  const toggle = useProgress((s) => s.toggle);
  const notes = useProgress((s) => s.promptNotes);
  const setNote = useProgress((s) => s.setNote);
  const total = sprint.length;
  const complete = sprint.filter((s) => done[s.id]).length;
  const weeks = Array.from(new Set(sprint.map((s) => s.week)));

  useEffect(() => {
    const id = hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "center" });
    }, 60);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
        Operating system
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-4xl tracking-tight text-fg sm:text-5xl">
          90-day campaign kit
        </h1>
        <p className="font-mono text-sm tabular-nums text-muted">
          {complete} / {total} shipped
        </p>
      </div>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        HubSpot’s Project Lighthouse pattern: a small pod, weekly ships, measurement
        before opinions. Checks persist in this browser. Assign the owner. Do week 1
        in week 1.
      </p>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-raised">
        <div
          className="h-full bg-sage transition-[width] duration-300"
          style={{ width: `${Math.round((complete / total) * 100)}%` }}
        />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-fg">The scoreboard</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {kpis.map((k) => (
            <div key={k.name} className="rounded-lg border border-line bg-surface px-4 py-4">
              <p className="font-medium text-fg">{k.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{k.def}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-fg">Weekly ships</h2>
        <div className="mt-8 flex flex-col gap-10">
          {weeks.map((week) => (
            <div key={week}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
                Week {week}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {sprint
                  .filter((s) => s.week === week)
                  .map((item) => {
                    const on = Boolean(done[item.id]);
                    return (
                      <li key={item.id} id={item.id}>
                        <button
                          type="button"
                          onClick={() => toggle(item.id)}
                          className={cn(
                            "flex w-full gap-4 rounded-lg border px-4 py-4 text-left transition-colors duration-150",
                            on ? "border-sage/40 bg-raised" : "border-line bg-surface hover:border-line-strong",
                          )}
                        >
                          <span
                            className={cn(
                              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border",
                              on ? "border-sage bg-sage text-ink" : "border-line-strong text-transparent",
                            )}
                          >
                            <Check className="size-3" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-baseline gap-2">
                              <span className="font-medium text-fg">{item.title}</span>
                              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                                {OWNERS[item.owner]}
                              </span>
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted">
                              {item.detail}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-fg">ICP prompt set</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Replace the brackets. Run these weekly with search enabled. Note who is
          named. This is your keyword set now.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {promptSeeds.map((p) => (
            <div key={p.id} className="rounded-lg border border-line bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                {p.intent}
              </p>
              <p className="mt-2 text-sm text-fg">{p.prompt}</p>
              <label className="mt-3 block">
                <span className="sr-only">Notes for {p.prompt}</span>
                <textarea
                  value={notes[p.id] ?? ""}
                  onChange={(e) => setNote(p.id, e.target.value)}
                  placeholder="Who got named? Sentiment? Source URLs?"
                  rows={2}
                  className="w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-line-strong focus:outline-none"
                />
              </label>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
