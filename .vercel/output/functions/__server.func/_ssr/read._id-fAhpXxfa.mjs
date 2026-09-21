import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Bookmark } from "../_libs/lucide-react.mjs";
import { i as cn, l as chapters, n as Route, r as chapterById } from "./router-CbdEy4ZV.mjs";
import { t as useProgress } from "./progress-D7n2rcwQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read._id-fAhpXxfa.js
var import_jsx_runtime = require_jsx_runtime();
function ChapterMeta({ chapter }) {
	const bookmarked = useProgress((s) => s.bookmarks.includes(chapter.id));
	const toggle = useProgress((s) => s.toggleBookmark);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-subtle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-sage",
				children: ["Ch ", chapter.numeral]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [chapter.minutes, " min"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggle(chapter.id),
				className: cn("inline-flex items-center gap-1 rounded-sm border px-2 py-1", bookmarked ? "border-sage text-sage" : "border-line text-subtle hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
					className: "size-3",
					fill: bookmarked ? "currentColor" : "none"
				}), bookmarked ? "Saved" : "Save"]
			})
		]
	});
}
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-6",
		children: blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, i))
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "lede": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl leading-snug text-fg sm:text-2xl",
			children: block.text
		});
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[15px] leading-[1.7] text-muted",
			children: block.text
		});
		case "h": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 font-display text-2xl tracking-tight text-fg",
			children: block.text
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "border-l-2 border-sage pl-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "font-display text-xl leading-snug text-fg",
				children: block.text
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-3 text-sm text-muted",
				children: [
					block.by,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" — ", block.role]
					}),
					block.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" · ", block.source]
					}) : null
				]
			})]
		});
		case "statrow": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface px-4 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-3xl tracking-tight text-fg tabular-nums",
						children: item.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: item.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-mono text-[10px] uppercase tracking-wider text-subtle",
						children: item.source
					})
				]
			}, item.label))
		});
		case "list": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 text-[15px] leading-[1.65] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-sage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
			}, item.slice(0, 40)))
		});
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle",
					children: block.caption
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 sm:hidden",
					children: block.rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md border border-line bg-surface px-4 py-3",
						children: row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: ci === 0 ? "" : "mt-3 border-t border-line pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-subtle",
								children: block.headers[ci]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: cell
							})]
						}, ci))
					}, ri))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden overflow-x-auto rounded-lg border border-line sm:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-raised text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: h
							}, h)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
							className: "border-t border-line align-top",
							children: row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: cell
							}, ci))
						}, ri)) })]
					})
				})
			]
		});
		case "callout": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-lg border border-line bg-raised px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.18em] text-sage",
					children: block.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-xl text-fg",
					children: block.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: block.text
				})
			]
		});
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-subtle",
			children: block.caption
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto rounded-lg border border-line bg-ink p-4 font-mono text-[12px] leading-relaxed text-paper",
			children: block.code
		})] });
		case "doctrine": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg border border-line bg-surface px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.18em] text-sage",
					children: ["Doctrine ", block.number]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl text-fg",
					children: block.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: block.text
				})
			]
		});
		case "order": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-paper px-5 py-5 text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.18em] text-stamp",
				children: "Field order"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl leading-snug",
				children: block.text
			})]
		});
		default: return null;
	}
}
function ReadChapter() {
	const { id } = Route.useParams();
	const chapter = chapterById(id);
	if (!chapter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.18em] text-sage",
				children: "Missing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl text-fg",
				children: "Chapter not in the corpus"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/read/$id",
				params: { id: "briefing" },
				className: "mt-6 inline-block text-sm text-muted hover:text-fg",
				children: "Return to the briefing"
			})
		]
	});
	const idx = chapters.findIndex((c) => c.id === chapter.id);
	const prev = idx > 0 ? chapters[idx - 1] : void 0;
	const next = idx < chapters.length - 1 ? chapters[idx + 1] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid min-w-0 max-w-6xl lg:grid-cols-[220px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "hidden border-r border-line lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
					children: "Manual"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-4 flex flex-col gap-1",
					"aria-label": "Chapters",
					children: chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$id",
						params: { id: c.id },
						className: cn("rounded-sm px-2 py-2 text-sm leading-snug", c.id === chapter.id ? "bg-raised text-fg" : "text-muted hover:text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-sage",
							children: c.numeral
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block",
							children: c.title
						})]
					}, c.id))
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "min-w-0 px-4 py-10 sm:px-8 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterMeta, { chapter }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl leading-[1.1] tracking-tight text-fg sm:text-5xl",
					children: chapter.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg text-muted",
					children: chapter.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-sage",
							children: "Field order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-fg",
							children: chapter.fieldOrder
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-line bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.16em] text-subtle",
							children: "Myth this kills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: chapter.kills
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: chapter.body })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-16 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:justify-between",
					children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$id",
						params: { id: prev.id },
						className: "text-sm text-muted hover:text-fg",
						children: [
							"← ",
							prev.numeral,
							" ",
							prev.title
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$id",
						params: { id: next.id },
						className: "text-sm text-muted hover:text-fg sm:text-right",
						children: [
							next.numeral,
							" ",
							next.title,
							" →"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kit",
						className: "text-sm text-muted hover:text-fg sm:text-right",
						children: "Open the campaign kit →"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ReadChapter as component };
