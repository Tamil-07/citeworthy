export type { Block, BuilderQuote, Chapter, Engine, PromptSeed, SprintItem } from "./types";
export { chapters } from "./chapters";
export { engines } from "./engines";
export { quotes } from "./quotes";
export { kpis, promptSeeds, sprint } from "./campaign";

import { chapters } from "./chapters";
import { engines } from "./engines";
import { quotes } from "./quotes";
import { sprint } from "./campaign";

export const APP_NAME = "Citeworthy";
export const APP_TAGLINE = "The field manual for agentic traffic";

export function chapterById(id: string) {
  return chapters.find((c) => c.id === id);
}

export type SearchHit = {
  href: string;
  to: "/read/$id" | "/engines" | "/signals" | "/kit";
  params?: { id: string };
  hash?: string;
  kicker: string;
  title: string;
  snippet: string;
};

function clip(text: string, q: string) {
  const lower = text.toLowerCase();
  const i = lower.indexOf(q);
  if (i < 0) return text.slice(0, 140);
  const start = Math.max(0, i - 40);
  return (start > 0 ? "…" : "") + text.slice(start, start + 160);
}

export function searchCorpus(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];

  for (const c of chapters) {
    const blob = [
      c.title,
      c.kicker,
      c.fieldOrder,
      c.kills,
      ...c.body.flatMap((b) => {
        if ("text" in b && typeof b.text === "string") return [b.text];
        if (b.type === "list") return b.items;
        if (b.type === "table") return [...b.headers, ...b.rows.flat()];
        if (b.type === "statrow") return b.items.map((s) => `${s.value} ${s.label}`);
        if (b.type === "code") return [b.code];
        return [];
      }),
    ]
      .join(" ")
      .toLowerCase();
    if (blob.includes(q)) {
      const snippetSource =
        c.body.find((b) => b.type === "lede" || b.type === "p") && "text" in c.body[0]
          ? (c.body[0] as { text: string }).text
          : c.kicker;
      hits.push({
        href: `/read/${c.id}`,
        to: "/read/$id",
        params: { id: c.id },
        kicker: `Ch ${c.numeral}`,
        title: c.title,
        snippet: clip(snippetSource, q),
      });
    }
  }

  for (const e of engines) {
    const blob = [e.name, e.operator, e.retrieval, e.lever, e.diet, ...e.play, ...e.avoid]
      .join(" ")
      .toLowerCase();
    if (blob.includes(q)) {
      hits.push({
        href: `/engines#${e.id}`,
        to: "/engines",
        hash: e.id,
        kicker: "Dossier",
        title: e.name,
        snippet: clip(e.lever, q),
      });
    }
  }

  for (const quote of quotes) {
    const blob = `${quote.by} ${quote.handle} ${quote.text} ${quote.implication}`.toLowerCase();
    if (blob.includes(q)) {
      hits.push({
        href: `/signals#${quote.id}`,
        to: "/signals",
        hash: quote.id,
        kicker: quote.handle,
        title: quote.by,
        snippet: clip(quote.text, q),
      });
    }
  }

  for (const item of sprint) {
    const blob = `${item.title} ${item.detail}`.toLowerCase();
    if (blob.includes(q)) {
      hits.push({
        href: `/kit#${item.id}`,
        to: "/kit",
        hash: item.id,
        kicker: `Week ${item.week}`,
        title: item.title,
        snippet: clip(item.detail, q),
      });
    }
  }

  return hits.slice(0, 12);
}
