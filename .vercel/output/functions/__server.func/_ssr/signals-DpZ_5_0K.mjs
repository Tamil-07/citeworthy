import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as quotes } from "./router-CbdEy4ZV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signals-DpZ_5_0K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SignalsPage() {
	const hash = useRouterState({ select: (s) => s.location.hash });
	(0, import_react.useEffect)(() => {
		const id = hash.replace(/^#/, "");
		if (!id) return;
		document.getElementById(id)?.scrollIntoView({ block: "center" });
	}, [hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-sage",
				children: "Intercepts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight text-fg sm:text-5xl",
				children: "Builder signals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-[15px] leading-relaxed text-muted",
				children: "Not a quote wall. Each dispatch is paired with the implication for an AI development team. Sources are public posts, interviews, and operator write-ups from 2025–2026."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-10",
				children: quotes.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					id: q.id,
					className: "border-t border-line pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-fg",
									children: q.by
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-sage",
									children: q.handle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-subtle",
									children: q.role
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-4 font-display text-2xl leading-snug text-fg",
							children: q.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.16em] text-sage",
								children: "Implication"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block",
								children: q.implication
							})]
						})
					]
				}, q.id))
			})
		]
	});
}
//#endregion
export { SignalsPage as component };
