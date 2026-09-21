import { createFileRoute, Link } from "@tanstack/react-router";
import { chapterById, chapters } from "@/lib/corpus";
import { Blocks, ChapterMeta } from "@/components/blocks";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/read/$id")({
  component: ReadChapter,
});

function ReadChapter() {
  const { id } = Route.useParams();
  const chapter = chapterById(id);
  if (!chapter) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-sage">Missing</p>
        <h1 className="mt-3 font-display text-3xl text-fg">Chapter not in the corpus</h1>
        <Link to="/read/$id" params={{ id: "briefing" }} className="mt-6 inline-block text-sm text-muted hover:text-fg">
          Return to the briefing
        </Link>
      </main>
    );
  }

  const idx = chapters.findIndex((c) => c.id === chapter.id);
  const prev = idx > 0 ? chapters[idx - 1] : undefined;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : undefined;

  return (
    <div className="mx-auto grid min-w-0 max-w-6xl lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="hidden border-r border-line lg:block">
        <div className="sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-4 py-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Manual
          </p>
          <nav className="mt-4 flex flex-col gap-1" aria-label="Chapters">
            {chapters.map((c) => (
              <Link
                key={c.id}
                to="/read/$id"
                params={{ id: c.id }}
                className={cn(
                  "rounded-sm px-2 py-2 text-sm leading-snug",
                  c.id === chapter.id ? "bg-raised text-fg" : "text-muted hover:text-fg",
                )}
              >
                <span className="font-mono text-[10px] text-sage">{c.numeral}</span>
                <span className="mt-0.5 block">{c.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <article className="min-w-0 px-4 py-10 sm:px-8 sm:py-14">
        <ChapterMeta chapter={chapter} />
        <h1 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-fg sm:text-5xl">
          {chapter.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{chapter.kicker}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-line bg-surface px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
              Field order
            </p>
            <p className="mt-1 text-sm leading-relaxed text-fg">{chapter.fieldOrder}</p>
          </div>
          <div className="rounded-md border border-line bg-surface px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
              Myth this kills
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{chapter.kills}</p>
          </div>
        </div>
        <div className="mt-10 max-w-3xl">
          <Blocks blocks={chapter.body} />
        </div>
        <nav className="mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to="/read/$id"
              params={{ id: prev.id }}
              className="text-sm text-muted hover:text-fg"
            >
              ← {prev.numeral} {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/read/$id"
              params={{ id: next.id }}
              className="text-sm text-muted hover:text-fg sm:text-right"
            >
              {next.numeral} {next.title} →
            </Link>
          ) : (
            <Link to="/kit" className="text-sm text-muted hover:text-fg sm:text-right">
              Open the campaign kit →
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
