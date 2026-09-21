import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { searchCorpus } from "@/lib/corpus";
import { cn } from "@/lib/cn";

export function SearchPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const hits = useMemo(() => searchCorpus(q), [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 20);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-[12vh]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Search the manual"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-4 text-subtle" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search doctrines, engines, quotes, sprints"
            className="h-12 w-full bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-subtle hover:text-fg"
            aria-label="Close search"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {q.trim().length >= 2 && hits.length === 0 && (
            <p className="px-3 py-6 text-sm text-muted">No matches in the corpus.</p>
          )}
          {hits.map((hit) => (
            <button
              key={hit.href + hit.title}
              type="button"
              onClick={() => {
                if (hit.to === "/read/$id" && hit.params) {
                  void navigate({ to: "/read/$id", params: hit.params });
                } else if (hit.to === "/engines") {
                  void navigate({ to: "/engines", hash: hit.hash });
                } else if (hit.to === "/signals") {
                  void navigate({ to: "/signals", hash: hit.hash });
                } else {
                  void navigate({ to: "/kit", hash: hit.hash });
                }
                onClose();
              }}
              className={cn(
                "flex w-full flex-col items-start gap-1 rounded-md px-3 py-3 text-left",
                "hover:bg-raised",
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-sage">
                {hit.kicker}
              </span>
              <span className="font-display text-base text-fg">{hit.title}</span>
              <span className="line-clamp-2 text-xs leading-relaxed text-muted">
                {hit.snippet}
              </span>
            </button>
          ))}
          {q.trim().length < 2 && (
            <p className="px-3 py-6 text-sm text-muted">
              Type at least two characters. Try “Reddit”, “MCP”, “capsule”, “HubSpot”.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
