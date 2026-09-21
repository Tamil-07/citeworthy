import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { chapters } from "@/lib/corpus";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

const STATS = [
  { value: "23×", label: "AI referrals convert vs organic" },
  { value: "87%", label: "of AI clicks still come from ChatGPT" },
  { value: "1,850%", label: "HubSpot AI-qualified leads, 12 months" },
  { value: "+41%", label: "visibility from adding quotations" },
];

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-line lg:block" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="rise font-mono text-[11px] uppercase tracking-[0.22em] text-sage">
              Classification · FAN-OUT / 00-BRIEFING · Sep 2026
            </p>
            <h1 className="rise-2 mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight text-fg sm:text-6xl">
              The click is no longer the conversion.
            </h1>
            <p className="rise-3 mt-6 max-w-xl text-[17px] leading-[1.65] text-muted">
              A living field manual for AI development teams on how to win{" "}
              <em className="text-fg">agentic traffic</em> and{" "}
              <em className="text-fg">LLM citations</em> — compiled from proven
              builders on X, HubSpot’s GEO lab, Princeton GEO-Bench, Cloudflare,
              Chrome WebMCP, OpenAI, Anthropic, Gemini, Claude, ChatGPT, Grok, and
              Verbal.
            </p>
            <div className="rise-4 mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/read/$id" params={{ id: "briefing" }}>
                  Open the manual
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/kit">90-day campaign kit</Link>
              </Button>
            </div>
          </div>
          <aside className="rise-3 flex flex-col justify-end gap-4">
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                Doctrine I
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-fg">
                Be citeworthy, not rankworthy.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Dharmesh Shah: you are not tricking ChatGPT. You are becoming the
                passage it can trust, the entity it can name, and the tool it can
                call.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-raised p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                Doctrine II
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-fg">
                Two doors. Humans and machines.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Cloudflare: agents are a new kind of visitor. HTML, MCP, WebMCP,
                and markdown docs are the second door.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={
                "px-4 py-8 sm:px-6 " +
                (i < 3 ? "border-b border-line sm:border-b-0 sm:border-r" : "border-b border-line sm:border-b-0") +
                (i % 2 === 0 ? " border-r sm:border-r" : "")
              }
            >
              <p className="font-display text-3xl tracking-tight text-fg tabular-nums sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
              Contents
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight text-fg">
              Eleven transmissions
            </h2>
          </div>
          <Link to="/engines" className="hidden text-sm text-muted hover:text-fg sm:inline">
            Engine dossiers →
          </Link>
        </div>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {chapters.map((ch) => (
            <li key={ch.id}>
              <Link
                to="/read/$id"
                params={{ id: ch.id }}
                className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[5.5rem_1fr_auto]"
              >
                <span className="font-mono text-xs text-sage">{ch.numeral}</span>
                <span>
                  <span className="font-display text-xl text-fg group-hover:text-paper">
                    {ch.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{ch.kicker}</span>
                </span>
                <span className="hidden font-mono text-[11px] text-subtle sm:block">
                  {ch.minutes} min
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <Card
            kicker="Read"
            title="Engine dossiers"
            body="ChatGPT, Perplexity, Gemini, Claude, Grok, Copilot — retrieval diets, crawlers, and the 20% that actually diverges."
            to="/engines"
          />
          <Card
            kicker="Listen"
            title="Builder signals"
            body="Dispatches from Dharmesh, swyx, Rauch, Jeremy Howard, Sarah Drasner, levelsio, Connor Gillivan, and operators in the field."
            to="/signals"
          />
          <Card
            kicker="Ship"
            title="90-day kit"
            body="Week-by-week owners, a prompt set for your ICP, and a checklist that lives in this browser."
            to="/kit"
          />
        </div>
      </section>
    </main>
  );
}

function Card({
  kicker,
  title,
  body,
  to,
}: {
  kicker: string;
  title: string;
  body: string;
  to: "/engines" | "/signals" | "/kit";
}) {
  return (
    <Link
      to={to}
      className="flex flex-col rounded-xl border border-line bg-bg p-6 transition-colors duration-150 hover:border-line-strong"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">{kicker}</p>
      <h3 className="mt-3 font-display text-2xl text-fg">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-fg">
        Open
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
