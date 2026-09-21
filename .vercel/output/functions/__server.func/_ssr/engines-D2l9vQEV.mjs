import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn, u as engines } from "./router-CbdEy4ZV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engines-D2l9vQEV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EnginesPage() {
	const hash = useRouterState({ select: (s) => s.location.hash });
	const navigate = useNavigate();
	const fromHash = hash.replace(/^#/, "");
	const initial = engines.find((e) => e.id === fromHash)?.id ?? engines[0]?.id ?? "chatgpt";
	const [id, setId] = (0, import_react.useState)(initial);
	const engine = engines.find((e) => e.id === id) ?? engines[0];
	(0, import_react.useEffect)(() => {
		const next = hash.replace(/^#/, "");
		if (next && engines.some((e) => e.id === next)) setId(next);
	}, [hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-sage",
				children: "Dossiers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl",
				children: "Six engines, six diets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted",
				children: "Shared foundation first: crawlers, SSR, entities, extractable pages, mentions. Then the 20% that diverges. A URL can be cited on ChatGPT and invisible on Perplexity. Optimize as if that is the default."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex gap-2 overflow-x-auto pb-2",
				children: engines.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					id: e.id,
					type: "button",
					onClick: () => {
						setId(e.id);
						navigate({
							to: "/engines",
							hash: e.id,
							replace: true
						});
					},
					className: cn("shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-150", e.id === engine.id ? "border-accent bg-accent text-accent-fg" : "border-line text-muted hover:text-fg"),
					children: e.name
				}, e.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-8 rounded-xl border border-line bg-surface p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-fg",
							children: engine.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: engine.operator
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-sm text-muted",
							children: engine.share
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Retrieval",
								value: engine.retrieval
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Citation style",
								value: engine.citationStyle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Freshness",
								value: engine.freshness
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Highest-leverage move",
								value: engine.lever
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
							children: "Crawlers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap gap-2",
							children: engine.crawlers.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-sm border border-line bg-bg px-2 py-1 font-mono text-xs text-paper",
								children: c
							}, c))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						className: "mt-8",
						label: "Citation diet",
						value: engine.diet
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-sage",
							children: "Play"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-3",
							children: engine.play.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-muted",
								children: item
							}, item))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-stamp",
							children: "Avoid"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-3",
							children: engine.avoid.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-muted",
								children: item
							}, item))
						})] })]
					})
				]
			})
		]
	});
}
function Fact({ label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-2 text-sm leading-relaxed text-fg",
			children: value
		})]
	});
}
//#endregion
export { EnginesPage as component };
