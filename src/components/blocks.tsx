import type { Block, Chapter } from "@/lib/corpus";
import { cn } from "@/lib/cn";
import { Bookmark } from "lucide-react";
import { useProgress } from "@/lib/progress";

export function ChapterMeta({ chapter }: { chapter: Chapter }) {
  const bookmarked = useProgress((s) => s.bookmarks.includes(chapter.id));
  const toggle = useProgress((s) => s.toggleBookmark);

  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-subtle">
      <span className="font-mono text-sage">Ch {chapter.numeral}</span>
      <span>{chapter.minutes} min</span>
      <button
        type="button"
        onClick={() => toggle(chapter.id)}
        className={cn(
          "inline-flex items-center gap-1 rounded-sm border px-2 py-1",
          bookmarked ? "border-sage text-sage" : "border-line text-subtle hover:text-fg",
        )}
      >
        <Bookmark className="size-3" fill={bookmarked ? "currentColor" : "none"} />
        {bookmarked ? "Saved" : "Save"}
      </button>
    </div>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lede":
      return (
        <p className="font-display text-xl leading-snug text-fg sm:text-2xl">{block.text}</p>
      );
    case "p":
      return <p className="text-[15px] leading-[1.7] text-muted">{block.text}</p>;
    case "h":
      return (
        <h2 className="mt-4 font-display text-2xl tracking-tight text-fg">{block.text}</h2>
      );
    case "quote":
      return (
        <figure className="border-l-2 border-sage pl-5">
          <blockquote className="font-display text-xl leading-snug text-fg">
            {block.text}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted">
            {block.by}
            <span className="text-subtle"> — {block.role}</span>
            {block.source ? <span className="text-subtle"> · {block.source}</span> : null}
          </figcaption>
        </figure>
      );
    case "statrow":
      return (
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
          {block.items.map((item) => (
            <div key={item.label} className="bg-surface px-4 py-5">
              <dt className="font-display text-3xl tracking-tight text-fg tabular-nums">
                {item.value}
              </dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted">{item.label}</dd>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-subtle">
                {item.source}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3 text-[15px] leading-[1.65] text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="min-w-0">
          {block.caption ? (
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              {block.caption}
            </p>
          ) : null}
          <div className="flex flex-col gap-3 sm:hidden">
            {block.rows.map((row, ri) => (
              <div key={ri} className="rounded-md border border-line bg-surface px-4 py-3">
                {row.map((cell, ci) => (
                  <div
                    key={ci}
                    className={ci === 0 ? "" : "mt-3 border-t border-line pt-3"}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                      {block.headers[ci]}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{cell}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="hidden overflow-x-auto rounded-lg border border-line sm:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-raised text-muted">
                <tr>
                  {block.headers.map((h) => (
                    <th key={h} className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-line align-top">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-muted">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "callout":
      return (
        <aside className="rounded-lg border border-line bg-raised px-5 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
            {block.kicker}
          </p>
          <p className="mt-2 font-display text-xl text-fg">{block.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>
        </aside>
      );
    case "code":
      return (
        <figure>
          {block.caption ? (
            <figcaption className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              {block.caption}
            </figcaption>
          ) : null}
          <pre className="overflow-x-auto rounded-lg border border-line bg-ink p-4 font-mono text-[12px] leading-relaxed text-paper">
            {block.code}
          </pre>
        </figure>
      );
    case "doctrine":
      return (
        <article className="rounded-lg border border-line bg-surface px-5 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
            Doctrine {block.number}
          </p>
          <h3 className="mt-2 font-display text-2xl text-fg">{block.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>
        </article>
      );
    case "order":
      return (
        <div className="rounded-lg bg-paper px-5 py-5 text-ink">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stamp">
            Field order
          </p>
          <p className="mt-2 font-display text-xl leading-snug">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}
