import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn, l as chapters } from "./router-CbdEy4ZV.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BfH3miRs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/70 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:opacity-90",
			ghost: "bg-transparent text-fg border border-line hover:border-line-strong hover:bg-raised",
			sage: "bg-sage text-ink hover:opacity-90",
			quiet: "bg-transparent text-muted hover:text-fg"
		},
		size: {
			sm: "h-9 px-3 rounded-sm",
			md: "h-11 px-4 rounded-md",
			lg: "h-12 px-5 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		ref,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
Button.displayName = "Button";
var STATS = [
	{
		value: "23×",
		label: "AI referrals convert vs organic"
	},
	{
		value: "87%",
		label: "of AI clicks still come from ChatGPT"
	},
	{
		value: "1,850%",
		label: "HubSpot AI-qualified leads, 12 months"
	},
	{
		value: "+41%",
		label: "visibility from adding quotations"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-line lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise font-mono text-[11px] uppercase tracking-[0.22em] text-sage",
						children: "Classification · FAN-OUT / 00-BRIEFING · Sep 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-2 mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight text-fg sm:text-6xl",
						children: "The click is no longer the conversion."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise-3 mt-6 max-w-xl text-[17px] leading-[1.65] text-muted",
						children: [
							"A living field manual for AI development teams on how to win",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-fg",
								children: "agentic traffic"
							}),
							" and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-fg",
								children: "LLM citations"
							}),
							" — compiled from proven builders on X, HubSpot’s GEO lab, Princeton GEO-Bench, Cloudflare, Chrome WebMCP, OpenAI, Anthropic, Gemini, Claude, ChatGPT, Grok, and Verbal."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-4 mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/read/$id",
								params: { id: "briefing" },
								children: ["Open the manual", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kit",
								children: "90-day campaign kit"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rise-3 flex flex-col justify-end gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-surface p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
								children: "Doctrine I"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl leading-snug text-fg",
								children: "Be citeworthy, not rankworthy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: "Dharmesh Shah: you are not tricking ChatGPT. You are becoming the passage it can trust, the entity it can name, and the tool it can call."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-raised p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
								children: "Doctrine II"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl leading-snug text-fg",
								children: "Two doors. Humans and machines."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: "Cloudflare: agents are a new kind of visitor. HTML, MCP, WebMCP, and markdown docs are the second door."
							})
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 py-8 sm:px-6 " + (i < 3 ? "border-b border-line sm:border-b-0 sm:border-r" : "border-b border-line sm:border-b-0") + (i % 2 === 0 ? " border-r sm:border-r" : ""),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tracking-tight text-fg tabular-nums sm:text-4xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-sage",
					children: "Contents"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl tracking-tight text-fg",
					children: "Eleven transmissions"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/engines",
					className: "hidden text-sm text-muted hover:text-fg sm:inline",
					children: "Engine dossiers →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 divide-y divide-line border-y border-line",
				children: chapters.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/read/$id",
					params: { id: ch.id },
					className: "group grid grid-cols-[4.5rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[5.5rem_1fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-sage",
							children: ch.numeral
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl text-fg group-hover:text-paper",
							children: ch.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: ch.kicker
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden font-mono text-[11px] text-subtle sm:block",
							children: [ch.minutes, " min"]
						})
					]
				}) }, ch.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						kicker: "Read",
						title: "Engine dossiers",
						body: "ChatGPT, Perplexity, Gemini, Claude, Grok, Copilot — retrieval diets, crawlers, and the 20% that actually diverges.",
						to: "/engines"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						kicker: "Listen",
						title: "Builder signals",
						body: "Dispatches from Dharmesh, swyx, Rauch, Jeremy Howard, Sarah Drasner, levelsio, Connor Gillivan, and operators in the field.",
						to: "/signals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						kicker: "Ship",
						title: "90-day kit",
						body: "Week-by-week owners, a prompt set for your ICP, and a checklist that lives in this browser.",
						to: "/kit"
					})
				]
			})
		})
	] });
}
function Card({ kicker, title, body, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex flex-col rounded-xl border border-line bg-bg p-6 transition-colors duration-150 hover:border-line-strong",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-sage",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-2xl text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-6 inline-flex items-center gap-2 text-sm text-fg",
				children: ["Open", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
//#endregion
export { Home as component };
