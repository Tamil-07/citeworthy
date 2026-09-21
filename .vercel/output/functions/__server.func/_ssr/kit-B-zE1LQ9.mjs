import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check } from "../_libs/lucide-react.mjs";
import { a as kpis, i as cn, o as promptSeeds, s as sprint } from "./router-CbdEy4ZV.mjs";
import { t as useProgress } from "./progress-D7n2rcwQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kit-B-zE1LQ9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OWNERS = {
	eng: "Engineering",
	content: "Content",
	growth: "Growth",
	product: "Product"
};
function KitPage() {
	const hash = useRouterState({ select: (s) => s.location.hash });
	const done = useProgress((s) => s.done);
	const toggle = useProgress((s) => s.toggle);
	const notes = useProgress((s) => s.promptNotes);
	const setNote = useProgress((s) => s.setNote);
	const total = sprint.length;
	const complete = sprint.filter((s) => done[s.id]).length;
	const weeks = Array.from(new Set(sprint.map((s) => s.week)));
	(0, import_react.useEffect)(() => {
		const id = hash.replace(/^#/, "");
		if (!id) return;
		const t = window.setTimeout(() => {
			document.getElementById(id)?.scrollIntoView({ block: "center" });
		}, 60);
		return () => window.clearTimeout(t);
	}, [hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-sage",
				children: "Operating system"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl tracking-tight text-fg sm:text-5xl",
					children: "90-day campaign kit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm tabular-nums text-muted",
					children: [
						complete,
						" / ",
						total,
						" shipped"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted",
				children: "HubSpot’s Project Lighthouse pattern: a small pod, weekly ships, measurement before opinions. Checks persist in this browser. Assign the owner. Do week 1 in week 1."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-2 overflow-hidden rounded-full bg-raised",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-sage transition-[width] duration-300",
					style: { width: `${Math.round(complete / total * 100)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "The scoreboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2",
					children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-line bg-surface px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-fg",
							children: k.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: k.def
						})]
					}, k.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "Weekly ships"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-col gap-10",
					children: weeks.map((week) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-sage",
						children: ["Week ", week]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-col gap-2",
						children: sprint.filter((s) => s.week === week).map((item) => {
							const on = Boolean(done[item.id]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								id: item.id,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggle(item.id),
									className: cn("flex w-full gap-4 rounded-lg border px-4 py-4 text-left transition-colors duration-150", on ? "border-sage/40 bg-raised" : "border-line bg-surface hover:border-line-strong"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border", on ? "border-sage bg-sage text-ink" : "border-line-strong text-transparent"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-wrap items-baseline gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-fg",
												children: item.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] uppercase tracking-[0.14em] text-subtle",
												children: OWNERS[item.owner]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm leading-relaxed text-muted",
											children: item.detail
										})]
									})]
								})
							}, item.id);
						})
					})] }, week))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-fg",
						children: "ICP prompt set"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Replace the brackets. Run these weekly with search enabled. Note who is named. This is your keyword set now."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-col gap-3",
						children: promptSeeds.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-line bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.16em] text-sage",
									children: p.intent
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-fg",
									children: p.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-3 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										children: ["Notes for ", p.prompt]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: notes[p.id] ?? "",
										onChange: (e) => setNote(p.id, e.target.value),
										placeholder: "Who got named? Sentiment? Source URLs?",
										rows: 2,
										className: "w-full resize-y rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus:border-line-strong focus:outline-none"
									})]
								})
							]
						}, p.id))
					})
				]
			})
		]
	});
}
//#endregion
export { KitPage as component };
