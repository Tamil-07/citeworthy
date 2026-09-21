import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { SearchPalette } from "./search-palette";

const NAV: { to: "/" | "/read/$id" | "/engines" | "/signals" | "/kit"; params?: { id: string }; label: string }[] = [
  { to: "/", label: "Briefing" },
  { to: "/read/$id", params: { id: "briefing" }, label: "Manual" },
  { to: "/engines", label: "Engines" },
  { to: "/signals", label: "Signals" },
  { to: "/kit", label: "Campaign kit" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-baseline gap-3 min-w-0">
            <span className="font-display text-lg tracking-tight text-fg">Citeworthy</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-subtle sm:inline">
              Field manual
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : item.to === "/read/$id"
                    ? pathname.startsWith("/read")
                    : pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  params={item.params}
                  className={cn(
                    "rounded-sm px-3 py-2 text-sm transition-colors duration-150",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearch(true)}
              className="inline-flex h-10 items-center gap-2 rounded-sm border border-line px-3 text-xs text-muted hover:text-fg"
              aria-label="Search"
            >
              <Search className="size-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden font-mono text-[10px] text-subtle sm:inline">⌘K</kbd>
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-sm border border-line text-fg md:hidden"
              onClick={() => setMenu((v) => !v)}
              aria-label={menu ? "Close menu" : "Open menu"}
            >
              {menu ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        {menu && (
          <nav className="border-t border-line px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  params={item.params}
                  className="py-3 text-base text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div id="content">{children}</div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xl text-fg">Citeworthy</p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
              Compiled September 2026 from builder transmissions on X, HubSpot’s GEO lab,
              Princeton GEO-Bench, Cloudflare, Chrome WebMCP, OpenAI, Anthropic, and Google.
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            For internal AI development teams
          </p>
        </div>
      </footer>
      <SearchPalette open={search} onClose={() => setSearch(false)} />
    </div>
  );
}
