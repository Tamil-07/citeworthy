import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engines-BNmxuOtX.js
var engines = [
	{
		id: "chatgpt",
		name: "ChatGPT",
		operator: "OpenAI",
		share: "87.4% of AI referral traffic in multi-industry studies",
		retrieval: "Bing web index + training corpus + licensed publishers",
		citationStyle: "Inline links, typically 3–6 sources. Often names a brand without linking.",
		freshness: "Moderate. Search mode leans on recent Bing pages; training memory is sticky.",
		lever: "Bing Webmaster Tools + IndexNow + entity consistency + comparison pages",
		crawlers: [
			"OAI-SearchBot (citations)",
			"ChatGPT-User (live browse)",
			"GPTBot (training, optional)"
		],
		diet: "Wikipedia, Reddit, established media, vendor blogs with clean structure, G2/Capterra for B2B.",
		play: [
			"Submit sitemaps to Bing. ChatGPT search historically overlapped ~87% with Bing top results (Seer, 2025).",
			"Open every money page with a 40–60 word answer capsule that can stand alone.",
			"Publish category-defining and comparison content on your own blog. Rankscale found vendor blogs (Monday, Pipedrive, Thinkific, SigNoz) cited as primary sources.",
			"If you sell, ship OpenAI's Product Feed Spec with enable_search before enable_checkout. Feed syntax without authority is a silent no-op.",
			"Keep OAI-SearchBot and ChatGPT-User allowed even if you block GPTBot for training."
		],
		avoid: [
			"Assuming Google rank = ChatGPT citation. Different index.",
			"Blocking all OpenAI bots with a generic AI disallow.",
			"All-caps titles, JS-only rendering, undated claims."
		]
	},
	{
		id: "perplexity",
		name: "Perplexity",
		operator: "Perplexity AI",
		share: "Smaller volume, highest citation rate (~13.8%) and highest click-through to sources",
		retrieval: "Live multi-source web retrieval. Recency-weighted. Heavy Reddit / YouTube diet.",
		citationStyle: "Numbered footnotes, 4–10 sources, almost always clickable.",
		freshness: "Very high. A page dated this month beats an undated equal page.",
		lever: "Visible dateModified, original data, Reddit presence, comparison tables",
		crawlers: ["PerplexityBot"],
		diet: "Reddit (largest single source), YouTube, recent blogs even from lower-authority domains if structurally clean, original research.",
		play: [
			"Stamp publish and last-updated dates in visible HTML, not just metadata.",
			"Ship original numbers. Perplexity prefers primary data over restated roundups.",
			"Build authentic Reddit and YouTube companion content. Do not post like an ad.",
			"Write comparison and review pages with extractable tables.",
			"Refresh cornerstone pages on a monthly cycle, not quarterly."
		],
		avoid: [
			"Evergreen-undated posts.",
			"Blocking PerplexityBot in a blanket AI robots rule.",
			"Thin listicles with no proof."
		]
	},
	{
		id: "gemini",
		name: "Gemini / AI Overviews / AI Mode",
		operator: "Google",
		share: "AI Overviews trigger on a large and growing slice of queries; Gemini referrals surged ~388% YoY in late 2025 samples",
		retrieval: "Google index + Knowledge Graph. Query fan-out into ~16 sub-queries in AI Mode.",
		citationStyle: "AI Overview chips + Gemini citations. Strong bias toward sources already ranking top-10 organically.",
		freshness: "High on newsy queries; entity graph is slower to rewrite.",
		lever: "Classic SEO + sub-question coverage + schema + entity pages",
		crawlers: ["Googlebot"],
		diet: "Pages already ranking, Knowledge Graph entities, YouTube, Reddit, review platforms. Google has said no special AI file is required.",
		play: [
			"Win the SERP first. Google generative surfaces preferentially cite organic winners.",
			"Cover the fan-out: every H2 should answer a sub-question an agent would spawn from the parent query.",
			"Keep Organization, Product, FAQ, HowTo, and Person schema accurate and consistent with visible text.",
			"Treat YouTube as a citation surface, not a side channel.",
			"Do not expect llms.txt to move AI Overviews. John Mueller: no AI system currently uses it for ranking."
		],
		avoid: [
			"GEO theater that skips technical SEO.",
			"Inconsistent NAP / entity facts across the site.",
			"JS-gated content Googlebot can render but slower bots cannot — still hurts other engines."
		]
	},
	{
		id: "claude",
		name: "Claude",
		operator: "Anthropic",
		share: "Lower referral share today; outsized influence on technical buyers and coding-agent traffic",
		retrieval: "Training corpus + Brave-indexed web via Claude-SearchBot. Coding agents (Claude Code) fetch docs aggressively.",
		citationStyle: "Sparse, conservative, prefers named experts, papers, primary docs. Filters marketing claims.",
		freshness: "Moderate. Depth and corroboration beat recency theater.",
		lever: "Primary-source docs, evidence-led longform, markdown/llms.txt for coding agents, MCP tools",
		crawlers: [
			"Claude-SearchBot",
			"ClaudeBot",
			"Claude-User"
		],
		diet: "Academic and primary sources, well-structured documentation, consensus across the web. Coding agents love .md and /llms.txt maps.",
		play: [
			"Lead with evidence, not superlatives. 'Best-in-class' is discarded; a named benchmark is kept.",
			"Serve docs as HTML and Markdown. Mintlify's 2,400-run benchmark: linking llms.txt cut agent 404s ~90%.",
			"Ship a real MCP server if agents should *use* you, not just *cite* you. Wix, Monday, Cloudflare already live in Claude / Cursor / Perplexity Pro.",
			"Allow Claude-SearchBot separately from training crawlers.",
			"Write the long, careful version. Claude's citation diet rewards nuance."
		],
		avoid: [
			"Press-release tone.",
			"Docs that 404 on .md suffixes — coding agents will try them.",
			"Assuming citation volume equals revenue. Claude traffic is smaller and more qualified."
		]
	},
	{
		id: "grok",
		name: "Grok",
		operator: "xAI",
		share: "Small in 2026 citation studies (single-digit appearances in some 30-day tests) but native to X, where builders actually argue",
		retrieval: "X corpus + web. Real-time social context is the differentiator.",
		citationStyle: "Conversational, source-light compared with Perplexity; will name brands that dominate X discourse.",
		freshness: "Very high on anything that is currently being argued on X.",
		lever: "Be present in the actual builder conversation on X. Ship public artifacts agents can fetch.",
		crawlers: ["Grok crawlers / xAI fetchers — verify current UA in logs"],
		diet: "X threads from proven builders, primary docs, GitHub, live web. Distrusts SEO copy.",
		play: [
			"Publish where builders already talk. Grok is downstream of X consensus.",
			"Keep a public changelog, llms.txt for agents, and fetchable markdown docs.",
			"Treat 'being the named tool in a swyx / levelsio / rauchg thread' as a GEO placement.",
			"Do not write for Grok as if it were Google. Write as if a sharp engineer is reading you live."
		],
		avoid: [
			"Agency-speak listicles.",
			"Buying mentions on sites Grok's users mock.",
			"Ignoring X as a retrieval surface."
		]
	},
	{
		id: "copilot",
		name: "Copilot / Bing generative",
		operator: "Microsoft",
		share: "Smaller volume; Copilot-referred sessions convert extremely well in some datasets (reported 17x vs direct in one 2026 compilation)",
		retrieval: "Bing index. IndexNow is first-class.",
		citationStyle: "Generative answers with source cards.",
		freshness: "High when IndexNow is wired.",
		lever: "Bing Webmaster Tools + IndexNow ping on every publish",
		crawlers: ["bingbot"],
		diet: "Bing-ranked pages, Wikipedia, established publishers.",
		play: [
			"IndexNow on publish and on update. This also feeds ChatGPT search.",
			"Treat Bing like a production index, not a leftover.",
			"Keep product and org schema aligned with Merchant / Copilot shopping surfaces."
		],
		avoid: ["Google-only webmaster workflows.", "Stale sitemaps."]
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/chapters-DvikKojl.js
var chapters = [
	{
		id: "briefing",
		numeral: "00",
		title: "The briefing",
		kicker: "The click is no longer the conversion.",
		minutes: 6,
		fieldOrder: "Optimize for being retrieved, extracted, named, and invoked — not for a blue link.",
		kills: "That GEO is just SEO with a new acronym.",
		body: [
			{
				type: "lede",
				text: "Your next important visitor may never see your homepage. It will fan a buyer's question into sixteen sub-queries, lift three sentences from the open web, name two brands, and, increasingly, complete the purchase. This manual is how an AI development team becomes one of those names — and then one of those tools."
			},
			{
				type: "statrow",
				items: [
					{
						value: "23×",
						label: "AI-referred visitors convert vs organic, Ahrefs",
						source: "Ahrefs"
					},
					{
						value: "87%",
						label: "of AI referral traffic still comes from ChatGPT",
						source: "Conductor 2026"
					},
					{
						value: "1,850%",
						label: "HubSpot qualified leads from AI after 12 months",
						source: "Project Lighthouse"
					},
					{
						value: "1.08%",
						label: "of sessions are AI referrals today — and already 5–10% of value",
						source: "Conductor, 3.3B sessions"
					}
				]
			},
			{
				type: "p",
				text: "Conductor's 2026 benchmark across 3.3 billion sessions and 13,000+ domains put AI referral at 1.08% of traffic. That number is used as a reason to wait. It is the wrong reading. Those visitors spend 68% more time on site (SE Ranking), bounce 23% less (Adobe), and convert at 4× to 23× organic depending on the study (Exposure Ninja 14.2% vs 2.8%; Ahrefs 23×). Adobe tracked a 10× rise in AI-driven referrals from mid-2024 to early 2025. ChatGPT sat at ~900 million weekly actives by February 2026. Vodafone UK watched customer searches through AI platforms go from 0.5 billion to 4 billion in a year."
			},
			{
				type: "p",
				text: "The Princeton / IIT Delhi / Georgia Tech / Allen Institute paper that named Generative Engine Optimization (arXiv 2311.09735, KDD 2024) showed that adding quotations, statistics, and sources lifted visibility 30–41%, while keyword stuffing reduced it. The unit of work changed: from ranking a URL to being inside the synthesized paragraph."
			},
			{
				type: "doctrine",
				number: "I",
				title: "Citeworthy, not rankworthy",
				text: "Dharmesh Shah, who used inbound SEO to help build HubSpot, now says the job is to be citeworthy. You are not tricking a model. You are becoming the passage it can trust, the entity it can name, and the tool it can call."
			},
			{
				type: "doctrine",
				number: "II",
				title: "Two visitors, two doors",
				text: "Humans still want narrative, brand, and UI. Agents want maps, facts, APIs, and actions. Cloudflare's CEO has said agent traffic has already surpassed human traffic on the web. A site with one door is hiding from half of its future."
			},
			{
				type: "doctrine",
				number: "III",
				title: "Most citations are not yours",
				text: "Connor Gillivan's operator SOP, HubSpot's mention program, and Ahrefs' brand-mention correlation (r = 0.664, ~3× backlinks) all rhyme: the model quotes Reddit, G2, Wikipedia, listicles, and other people's blogs more than it quotes you. Winning GEO is mostly off-site."
			},
			{
				type: "order",
				text: "Read this manual as a 90-day operating system, not a blog. Engineering owns crawlers, rendering, schema, docs, MCP. Content owns capsules, glossaries, comparisons. Growth owns the prompt set, mentions, Reddit, reviews. Product owns the actions an agent can take."
			}
		]
	},
	{
		id: "two-internets",
		numeral: "01",
		title: "Two internets, one scoreboard",
		kicker: "A new species of visitor is already in the logs.",
		minutes: 7,
		fieldOrder: "Instrument three funnels: human click, LLM citation, agent action.",
		kills: "That 'AI traffic' is one channel.",
		body: [
			{
				type: "lede",
				text: "There is the internet of people, the internet of search crawlers, and now the internet of agents. They leave different footprints, want different representations of the same product, and convert on different events. Teams that lump them as 'organic' will watch revenue move and not know why."
			},
			{
				type: "h",
				text: "The three visitors"
			},
			{
				type: "table",
				headers: [
					"Visitor",
					"Wants",
					"Success event",
					"Failure mode"
				],
				rows: [
					[
						"Human",
						"A story, a UI, a reason to trust",
						"Session, signup, purchase",
						"Friction, ugliness, confusion"
					],
					[
						"Answer engine",
						"A passage it can lift and a brand it can name",
						"Citation, recommendation",
						"JS-only pages, buried answers, conflicting facts"
					],
					[
						"Agent",
						"A map, a tool, a transaction",
						"Tool call, checkout, API 200",
						"No MCP/WebMCP, 404 on .md, blocked crawler, stale stock"
					]
				]
			},
			{
				type: "p",
				text: "vLLM's September 2026 AgentX write-up is the server-side mirror of this: agentic workloads are already a major slice of inference. OpenAI reported Codex generating 64% of combined Codex and ChatGPT output tokens among enterprise customers. Median agent session: 43 turns, 142k input tokens, 444 output tokens, 96%+ prefix-cache hits, 44% of sessions spawning subagents. These machines are not 'users who type short queries.' They are long-running workers that will fetch your docs a hundred times."
			},
			{
				type: "p",
				text: "Crystal Carter's Moz framework splits the work cleanly. Declarative optimization tells an agent who you are (GEO content, schema, llms.txt, agent cards). Imperative optimization lets it act (MCP, WebMCP, APIs, NL Web, Agentic Commerce Protocol). Most teams are still decorating the human site and hoping machines notice."
			},
			{
				type: "callout",
				kicker: "Verbal / oversight",
				title: "Agentic traffic you cannot stand behind is a liability",
				text: "Verbal (tryverbal.com) exists because enterprises will not route customer traffic through agents they cannot audit. Hallucination detection, protocol adherence, self-identification, escalation. If your product is an agent, or is called by agents, trust is a distribution channel. Unverified agents get blocked at the gateway."
			},
			{
				type: "quote",
				text: "Agents are here — not as a new kind of software, but as a new kind of visitor to the web.",
				by: "Cloudflare",
				role: "The Agentic Internet",
				source: "blog.cloudflare.com"
			},
			{
				type: "order",
				text: "This week: add an AI-referral channel in analytics, a crawler allow-list with log proof, and a single dashboard tile for agent tool-calls. If you cannot see the three visitors, you cannot improve them."
			}
		]
	},
	{
		id: "three-wars",
		numeral: "02",
		title: "The three wars",
		kicker: "Readability. Reputation. Action.",
		minutes: 8,
		fieldOrder: "Win extraction first, then brand context, then agentic commerce — in that order, overlapping.",
		kills: "That one 'GEO checklist' covers discovery, recommendation, and checkout.",
		body: [
			{
				type: "lede",
				text: "Search Engine Land's 2026 pillar model is the cleanest map we have. GEO is not a tactic. It is three campaigns that share a brand and almost no skills."
			},
			{
				type: "h",
				text: "Pillar 1 — LLM readability"
			},
			{
				type: "p",
				text: "How efficiently a model can process, understand, and reuse your page as an answer. Traditional SEO is a prerequisite, not a substitute. The page is read in chunks. Agents overweight the first 350–400 words (the 512-token habit). Lost-in-the-middle is real: bury the answer and you are invisible even if you rank."
			},
			{
				type: "list",
				items: [
					"Pyramid: answer → explanation → evidence → context. Never the reverse.",
					"One idea per paragraph, under ~250 words. Sections that still make sense if you delete every surrounding paragraph.",
					"Question-shaped H2s. Tables and lists over prose for anything comparative.",
					"Semantic triplets (subject–predicate–object). Consistent entity names. No 'we' without the brand name nearby.",
					"Front-load the first 350–400 words. Keep high-density pages nearer 2,000 words than 8,000 unless you are writing the category bible."
				]
			},
			{
				type: "h",
				text: "Pillar 2 — Brand context"
			},
			{
				type: "p",
				text: "Models do not 'rank you.' They complete a pattern: Notion with 'all-in-one workspace,' Stripe with 'payments infrastructure.' Co-occurrence across the training set and the live retrieval set is the association. This is why mentions beat links, why G2 profiles matter, why a single bad article can outweigh fifty good ones (models are negatively biased by design — operators keep repeating this)."
			},
			{
				type: "h",
				text: "Pillar 3 — Agentic commerce"
			},
			{
				type: "p",
				text: "The user delegates not only search but selection and, increasingly, payment. ChatGPT Instant Checkout, OpenAI's open Agentic Commerce Protocol, Google shopping inside AI Overviews, MCP tool calls, WebMCP in Chrome 146. The customer of your shop is an agent doing preselection. If your product feed, inventory, returns policy, or API is messy, you are not in the shortlist of two to five."
			},
			{
				type: "table",
				caption: "AEO sits inside GEO. ACO is the third rail.",
				headers: [
					"Layer",
					"Win condition",
					"Dominant signal",
					"Owner"
				],
				rows: [
					[
						"AEO",
						"Named inside a chat answer",
						"Entity, schema, answer capsules, tier-1 citations",
						"Content + growth"
					],
					[
						"GEO (wide)",
						"Inside any generative summary, including AI Overviews",
						"AEO + classic SEO / E-E-A-T",
						"SEO + content"
					],
					[
						"ACO",
						"Selected and transacted by an agent",
						"Feeds, MCP, WebMCP, stock, policy URLs",
						"Product + eng"
					]
				]
			},
			{
				type: "order",
				text: "Do not start with MCP if the crawler cannot read the pricing page. Do not start with another blog if you are already uncited on G2. Sequence: readable → mentioned → callable."
			}
		]
	},
	{
		id: "citation-birth",
		numeral: "03",
		title: "How a citation is born",
		kicker: "Training memory, live retrieval, and query fan-out.",
		minutes: 7,
		fieldOrder: "Be in the index the engine actually searches, in the passage shape it actually lifts.",
		kills: "That there is one algorithm called 'the LLM.'",
		body: [
			{
				type: "lede",
				text: "A brand is named for one of three mechanical reasons: it was in the training data, it was retrieved just now, or it was sitting in a third-party passage the retriever already trusted. You must play all three, on purpose, per engine."
			},
			{
				type: "h",
				text: "Training vs search vs browse"
			},
			{
				type: "p",
				text: "OpenAI is explicit: GPTBot is training. OAI-SearchBot feeds ChatGPT search. ChatGPT-User is a live browse. Blocking training does not block citations. Collapsing them into 'Disallow: GPTBot' and a catch-all AI rule is how companies accidentally vanish from ChatGPT search. Claude-SearchBot vs ClaudeBot is the same split. Google's AI features use Googlebot; they have said you do not need a new AI file to appear."
			},
			{
				type: "h",
				text: "Query fan-out"
			},
			{
				type: "p",
				text: "Google AI Mode fans one question into roughly sixteen sub-queries. Agents in the wild do the same: 'best CRM for a 12-person climate startup that uses HubSpot-like automation but cheaper' becomes definitions, comparison tables, pricing, Reddit threads, G2 scores, integration lists. A page that answers only the parent keyword loses fifteen of sixteen retrievals. Cover the sub-questions as first-class H2s."
			},
			{
				type: "h",
				text: "The citation diet is third-party"
			},
			{
				type: "p",
				text: "Profound's analysis of hundreds of millions of citations: ChatGPT's most-cited domain is Wikipedia, then Reddit and licensed media. Perplexity: Reddit first, YouTube second. HubSpot's prompt set kept lighting up LinkedIn, YouTube, and Reddit. The Search Engine Land 775-citation experiment: a comprehensive listicle on someone else's site produced 190 mentions — more than anything the tested brand owned. Lesson: your outreach list is the list of URLs already being cited for your category."
			},
			{
				type: "callout",
				kicker: "Princeton GEO-Bench",
				title: "What actually moved visibility",
				text: "Across 10,000 queries and nine tactics: quotations ~+41%, statistics ~+32%, cited sources ~+30%, fluency helped. Keyword stuffing hurt (~−10%). The authors partially validated on live Perplexity, where quotations still lifted position-adjusted visibility ~22%. This is the closest thing the field has to a physics paper. Use it."
			},
			{
				type: "order",
				text: "For each money query, write down: which engine's index, which passage on your site could be lifted, and which three third-party URLs already get cited. You now have a content ticket, a rewrite ticket, and an outreach ticket."
			}
		]
	},
	{
		id: "extraction",
		numeral: "04",
		title: "The extraction grammar",
		kicker: "Write passages a stranger model can steal without shame.",
		minutes: 8,
		fieldOrder: "If the first sentence of a section cannot stand alone, it will not be cited.",
		kills: "Long-form brand storytelling as a GEO strategy.",
		body: [
			{
				type: "lede",
				text: "Models lift sentences out of context. A paragraph that only makes sense after three paragraphs of setup is dead on arrival. The test from the LLM SEO operators: delete every sentence except the first one in the section. Does it still mean something? If not, rewrite."
			},
			{
				type: "h",
				text: "The answer capsule"
			},
			{
				type: "p",
				text: "Directly under the H1, 40–60 words that answer the question the title asks, with one number and its source in parentheses. Atlas Marketing's tighter variant: 120–150 characters immediately after a question H2, zero internal links, a complete standalone statement. Both patterns exist because engines quote openings. HubSpot called this 'writing for the bot' and split content into human-only, bot-only, and both."
			},
			{
				type: "h",
				text: "What HubSpot actually shipped"
			},
			{
				type: "list",
				items: [
					"Project Lighthouse: two SEOs, daily standup, weekly experiments. Qualified AI leads +1,850%. #1 CRM in AI search by year end.",
					"141 hyper-specific industry × use-case pages. Citation rate 16% → 92%. Visibility +49%. ChatGPT's bot hit them 15k times in weeks before citations moved. Crawls, then citations, then visibility.",
					"50 glossary pages, SSR, HTML-first, definition + example + 1–2 sentences tying the term to HubSpot. Awareness visibility +35%, consideration +26%, citation share 1.97% → 3.2%. Then they translated.",
					"Pricing posts structured so a bot could restate plan facts. They also corrected wrong prices on third-party pages — because the model was reading those, not the product page.",
					"Pre-render experiment (Botify SpeedWorkers): load ~0.1s, 6.4× faster. AI crawls +1600%, traditional crawls +30%, citations ~+40%, AI referral traffic only +6%. Citations and clicks are not the same KPI."
				]
			},
			{
				type: "h",
				text: "Vendor blogs are a cheat code that is not a cheat"
			},
			{
				type: "p",
				text: "Rankscale and operators like Alex Groberman keep finding the same thing: for commercial queries ('best CRM,' 'New Relic alternatives'), a surprising share of citations are the vendor's own comparison posts — SigNoz, AppSignal, Honeycomb, Thinkific, Monday, Pipedrive, HP. Third-party publishers do not write niche comparison depth. Models need structured, factual, recently updated HTML. They are weak at discounting bias. If you will not write the honest comparison, someone less honest will, and they will own the category in the model."
			},
			{
				type: "code",
				caption: "Passage shape the engines keep quoting",
				code: `## What is generative engine optimization?

Generative engine optimization (GEO) is the practice of
structuring content, entities, and off-site mentions so
answer engines — ChatGPT, Perplexity, Gemini, Claude, Grok —
retrieve, trust, and cite a brand inside synthesized answers.
Princeton's GEO-Bench (KDD 2024) found quotations, statistics,
and sources lift visibility 30–41%.

| Tactic        | Visibility lift | Source            |
|---------------|-----------------|-------------------|
| Quotations    | ~41%            | GEO-Bench, 2024   |
| Statistics    | ~32%            | GEO-Bench, 2024   |
| Cited sources | ~30%            | GEO-Bench, 2024   |`
			},
			{
				type: "order",
				text: "Rewrite the ten highest-intent pages this sprint. Capsule, dates, table, FAQ, named sources. Then stop rewriting and go get mentioned on the pages already cited."
			}
		]
	},
	{
		id: "gravity",
		numeral: "05",
		title: "Off-site gravity",
		kicker: "The model already has a bibliography. Get in it.",
		minutes: 7,
		fieldOrder: "Target the URLs the engines already cite for your category. Volume of fresh mentions beats one trophy backlink.",
		kills: "That a perfect site is sufficient.",
		body: [
			{
				type: "lede",
				text: "SE Ranking's study of 129,000 websites, 216,524 pages and 100,000 prompts is the blunt instrument: 32,000+ referring domains → 3.5× ChatGPT citations; high trust → ~4×; Quora/Reddit presence → 4×; review platforms → 3–6×; homepage traffic and domain trust still matter. llms.txt did almost nothing. Authority, structure, and reputation did almost everything."
			},
			{
				type: "h",
				text: "Mentions are the new links"
			},
			{
				type: "p",
				text: "Ahrefs 2026, 75,000 brands: brand mentions are the strongest single predictor of AI citation (r = 0.664), roughly three times the correlation of backlinks. HubSpot rebuilt link-building into a flat-fee mention program, preferred new pages over inserting into old ones (recency bias makes new cheaper and more effective), and preferred twenty medium-DR mentions over one trophy DR. They priced a mention by AI-influenced ARR."
			},
			{
				type: "h",
				text: "Reddit is infrastructure"
			},
			{
				type: "p",
				text: "Not a growth-hack subreddit blast. HubSpot partnered with the community team, pursued co-moderation, ran AMAs, invited useful commenters as champions. Community +61.7% YoY, HubSpot mentions across Reddit 7×, citations doubled. Perplexity's citation diet makes this non-optional. Fake accounts backfire; models and mods both notice."
			},
			{
				type: "h",
				text: "Reviews, Wikipedia, YouTube, listicles"
			},
			{
				type: "list",
				items: [
					"G2 is repeatedly the #2 cited domain for B2B SaaS queries. Unclaimed or thin profiles are unpaid advertising for competitors.",
					"Wikipedia and licensed media dominate ChatGPT's training-plus-search mix. You cannot buy this. You can be accurate, notable, and cited by people who write those pages.",
					"YouTube is Perplexity's second diet. Companion videos of the ten money questions are GEO, not brand.",
					"Listicles that already rank in Bing/Google and already appear in AI answers are the highest-ROI placements. Search Engine Land: Indie Hackers mentions 44 → 146 (+232%) after a placement on a page the models were already using."
				]
			},
			{
				type: "quote",
				text: "Study the citations, not the rankings. Most of them will not be your site. That list becomes your real target list.",
				by: "Connor Gillivan",
				role: "@ConnorGillivan",
				source: "X, Sep 2026"
			},
			{
				type: "order",
				text: "Build a 40-row sheet: URL already cited for your prompts, domain, engine, last seen, owner, ask. This is the growth team's sprint board. Content without this sheet is a diary."
			}
		]
	},
	{
		id: "stack",
		numeral: "06",
		title: "The machine-readable stack",
		kicker: "Crawlers, HTML, schema, maps, tools, checkout.",
		minutes: 9,
		fieldOrder: "HTML first. Tools second. Files are maps, not magic.",
		kills: "That dropping llms.txt is a GEO program.",
		body: [
			{
				type: "lede",
				text: "There is a stack, and almost every team implements it upside down — starting with a fashionable file, skipping the HTML, never shipping a tool. Here is the order that matches how agents actually behave."
			},
			{
				type: "h",
				text: "Layer 0 — Do not be blocked"
			},
			{
				type: "code",
				caption: "Citation crawlers ≠ training crawlers. Decide separately.",
				code: `User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

# Training is a policy choice. Blocking it does not hide you from search.
# User-agent: GPTBot
# Disallow: /`
			},
			{
				type: "h",
				text: "Layer 1 — HTML the machine can eat without executing your app"
			},
			{
				type: "p",
				text: "Server-side render money pages. Gemini inherits Googlebot's renderer; ChatGPT, Perplexity, and most agents do not reliably run your React tree. If the answer is not in the first response body, it does not exist. Pair with Core Web Vitals: the 129k-site study saw fast pages cited 3× more often than slow ones. HubSpot's 100ms bot HTML is the reference experiment."
			},
			{
				type: "h",
				text: "Layer 2 — Entity and product facts"
			},
			{
				type: "p",
				text: "JSON-LD for Organization, Person, Product, Offer, AggregateRating, FAQPage, HowTo, BreadcrumbList. The visible page and the graph must not disagree. Google has said AI Overviews need no special markup — but they need the same unambiguous entity the rest of the index already uses. For commerce: Merchant Center, OpenAI Product Feed (enable_search before enable_checkout), live availability, returns URL, privacy URL. Missing policy pages quietly exclude you from chat checkout."
			},
			{
				type: "h",
				text: "Layer 3 — Maps, not spells (llms.txt)"
			},
			{
				type: "p",
				text: "Jeremy Howard proposed llms.txt in September 2024 as a markdown map at the site root: who you are, which pages matter, where the plain-text versions live. Stripe, Cloudflare, Vercel, Anthropic docs, Mintlify sites ship it. Chrome DevTools will validate it. Wix generates it. And yet: Ahrefs, May 2026, 137,210 domains — 97% of llms.txt files got zero requests. Of the hits, most were SEO auditors. Verifiable LLM hits are tiny. Adobe AEM logs: 1.1% of /llms.txt traffic was real LLMs. Google's John Mueller: no AI system currently uses it for ranking. HubSpot paused it after seeing no result."
			},
			{
				type: "p",
				text: "So why keep it? Because coding agents are a different animal. Mintlify's 2,400-run benchmark with Claude Code and Codex: agents kept requesting .md and /llms.txt, 404'd without them, and a single link to the map cut dead URLs ~90% across Opus, GPT, and others. Liad Yosef's Aura traces: chat/search agents ignored the file and went to /docs then /. Jeremy: 'llms.txt is for agents, not training.' swyx publishes forge.smol.ai/llms.txt as the door. Put the file in for agent navigation. Do not report it as a citation strategy."
			},
			{
				type: "h",
				text: "Layer 4 — Docs as markdown"
			},
			{
				type: "p",
				text: "Cloudflare's Docs for Agents pattern is the gold standard: /llms.txt as an index, /llms-full.txt for bulk, per-product maps, and markdown twins of every page. Agents that write code against your API will fetch these on every session. HTML-only docs waste their tokens and yours."
			},
			{
				type: "h",
				text: "Layer 5 — Tools (MCP, WebMCP, NL Web)"
			},
			{
				type: "p",
				text: "MCP (donated to the Linux Foundation's Agentic AI Foundation with Block, OpenAI, Google, Microsoft, AWS, Cloudflare, Bloomberg) is how an agent uses you as a verb. Monday, Wix, Cloudflare already sit inside Claude, Cursor, and Perplexity Pro. WebMCP, introduced by Google at I/O 2026 and previewed in Chrome 146 as document.modelContext, is the on-page version: tools in the actual website, with origin trials and evals led in public by Sarah Drasner and the Chrome AI team. NL Web lets agents query your existing schema.org graph in natural language. x402, Web Bot Auth, PACT, and the Agentic Commerce Protocol are the payment and identity layer Cloudflare is wiring into 'the agentic internet.'"
			},
			{
				type: "callout",
				kicker: "IndexNow",
				title: "Ping Bing when you publish. ChatGPT is downstream.",
				text: "Google crawls on its own clock. Bing + Copilot + ChatGPT search can be notified in minutes. Host a key file, POST the URL list on publish and on update. This is the highest-leverage one-hour engineering task in the entire stack."
			},
			{
				type: "order",
				text: "This quarter, engineering ships: crawler allow-list, SSR money pages, IndexNow, schema audit, markdown docs + llms.txt map, one MCP tool that a real agent would actually call. Everything else is content."
			}
		]
	},
	{
		id: "logs",
		numeral: "07",
		title: "What the logs actually say",
		kicker: "A short list of ideas that did not survive contact with data.",
		minutes: 5,
		fieldOrder: "Run the experiment on your own host. The timeline of GEO advice is littered with confident fiction.",
		kills: "Copy-pasting agency GEO checklists as policy.",
		body: [
			{
				type: "lede",
				text: "The field is young, the incentives are rotten, and a lot of what is sold as 'AI SEO' is a file, a plugin, and an invoice. Here is what independent logs and operator tests keep showing."
			},
			{
				type: "table",
				headers: [
					"Claim",
					"What the logs / tests show",
					"Keep / kill"
				],
				rows: [
					[
						"llms.txt gets you cited",
						"Ahrefs: 97% of files get zero requests. HubSpot paused it. Mueller: unused for ranking. Useful as an agent map for coding agents (Mintlify, Jeremy Howard, swyx).",
						"Keep as a map. Kill as a ranking play."
					],
					[
						"Schema is a silver bullet",
						"Necessary for entity clarity and commerce. Google: not required for AI Overviews. Insufficient without content and mentions.",
						"Keep as hygiene."
					],
					[
						"Keyword-rich AI content",
						"GEO-Bench: stuffing hurt ~10%. Slop reputation is sticky (Dharmesh). Models deprioritize you later.",
						"Kill."
					],
					[
						"One engine strategy",
						"Same URL can be 18% citation share on ChatGPT and 0% on Perplexity. Retrieval diets differ.",
						"Shared 80%, then per-engine 20%."
					],
					[
						"AI traffic is too small",
						"1% of sessions, 5–10% of value already, converting 4–23×, growing double to triple digits.",
						"Kill the wait."
					],
					[
						"Just write more blog posts",
						"HubSpot and SE Ranking: structure, speed, third-party mentions, reviews, Reddit moved more than volume.",
						"Write fewer, extractable, mentioned pages."
					]
				]
			},
			{
				type: "p",
				text: "Search Engine Land's two GEO experiments (775 citation events) overturned a conclusion between test one and test two: the sources that mention you can matter more than the content you control. Indie Hackers and existing listicles moved numbers; owned pages lagged. That is not an argument against owned content. It is an argument against owned content as the whole program."
			},
			{
				type: "quote",
				text: "Crawls happen first, then citations, then visibility.",
				by: "Aja Frost / Project Lighthouse",
				role: "HubSpot",
				source: "Growth Unhinged, 2026"
			},
			{
				type: "order",
				text: "Anything in this manual that you cannot see in your own logs in 30 days is a hypothesis, not a process. Kill it."
			}
		]
	},
	{
		id: "measure",
		numeral: "08",
		title: "The new scoreboard",
		kicker: "Rank and sessions are lagging indicators of a citation war.",
		minutes: 5,
		fieldOrder: "Prompt coverage, citation share, sentiment, AI conversion, agent actions. Weekly.",
		kills: "Reporting GEO as 'we published 12 posts.'",
		body: [
			{
				type: "lede",
				text: "If GEO breaks the click as the conversion event, it also breaks last-click dashboards. You need a prompt set, a sampling cadence, and the humility to watch crawls for weeks before citations move."
			},
			{
				type: "h",
				text: "The prompt set is the keyword set"
			},
			{
				type: "p",
				text: "Connor Gillivan: 30–50 prompts your ICP actually types, plus adjacent variations, run across ChatGPT (search on), Claude, Gemini, Perplexity, Grok. Screenshot who is named. Re-run every 2–4 weeks. Citations drift. HubSpot tracks prompts down to the feature level. Audience size of a publication barely predicted citations; being on the bibliography did."
			},
			{
				type: "h",
				text: "Tools that are not theater"
			},
			{
				type: "list",
				items: [
					"Ahrefs Brand Radar (custom prompt tracking, 2026).",
					"Semrush AI Toolkit.",
					"Profound (enterprise, citation graphs at hundreds of millions of rows).",
					"Peec, Otterly, Parse / Soar.",
					"HubSpot AEO Grader (free sentiment + share of voice across ChatGPT, Perplexity, Gemini).",
					"Your own sheet. A tracker you do not open is a subscription, not a program."
				]
			},
			{
				type: "p",
				text: "GA4: classify chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, grok / x.ai as a dedicated channel. Justin McKelvey's 77% engagement on that channel is the quality check. If AI arrivals bounce, your landing pages are written for searchers, not for people who already got the answer and came to verify."
			},
			{
				type: "callout",
				kicker: "Negative space",
				title: "Audit what the models say when they are unkind",
				text: "Operators keep repeating: AI is biased toward negative information. One inaccurate pricing page, one rage-post, one out-of-date security claim can dominate the completion. Assign someone to collect hostile answers monthly and correct the upstream sources — including third parties."
			},
			{
				type: "order",
				text: "Stand up the prompt set and the AI channel this week. Everything you 'optimize' without a baseline is folklore."
			}
		]
	},
	{
		id: "antipatterns",
		numeral: "09",
		title: "Anti-patterns",
		kicker: "How to become invisible, or worse, untrustworthy.",
		minutes: 4,
		fieldOrder: "Never trade a durable reputation for a temporary completion.",
		kills: "AI-slop content mills as a GEO strategy.",
		body: [
			{
				type: "lede",
				text: "Dharmesh's warning is the one that should hang on the wall: a reputation as slop is worse than zero returns. Models will remember. Humans will too. The following are reliable ways to lose."
			},
			{
				type: "list",
				items: [
					"Blanket-blocking AI in robots.txt 'to protect content,' then wondering why ChatGPT never names you.",
					"Client-side-only apps whose first HTML is an empty div.",
					"llms.txt as the entire program.",
					"Generating 400 undifferentiated posts. GEO-Bench and every operator: stuffing and slop reduce visibility.",
					"Inconsistent facts: three prices, two founding dates, a product name that drifts. Entities collapse.",
					"Fake Reddit. The citation source that matters most is also the one that bans you hardest.",
					"Enabling agent checkout with stale inventory. Trust, once lost with a model, is slow to rewrite.",
					"Optimizing only Google and assuming Gemini/ChatGPT/Perplexity follow. They do not share an index.",
					"Reporting vanity crawls as success. HubSpot watched 15k ChatGPT crawls sit at 16% citations until the content shape changed.",
					"Building an 'agent harness' nobody asked for (levelsio) instead of a product an existing agent can call."
				]
			},
			{
				type: "quote",
				text: "You're not trying to trick ChatGPT into providing your answer. Do the work to come up with really good answers.",
				by: "Dharmesh Shah",
				role: "@dharmesh",
				source: "AEO interviews, 2025–26"
			},
			{
				type: "order",
				text: "If a tactic would embarrass you if an engineer posted it on X, it is not GEO. It is spam with a new buyer."
			}
		]
	},
	{
		id: "team",
		numeral: "10",
		title: "How a development team actually runs this",
		kicker: "Roles, cadence, and the 80/20.",
		minutes: 5,
		fieldOrder: "A two-person pod, weekly ships, shared prompt set. Not a task force slide.",
		kills: "Waiting for a dedicated 'GEO hire' before anything ships.",
		body: [
			{
				type: "lede",
				text: "HubSpot did not wait for the industry to mature. They pulled two curious SEOs off the roadmap, met daily, shipped weekly, and bought measurement (Xfunnel). Vercel ships computers for agents. Cloudflare ships the agentic internet protocols. Chrome ships WebMCP. Your advantage is the same as 2004 inbound: the incumbents are still arguing about whether this is real."
			},
			{
				type: "h",
				text: "The 80 that serves every engine"
			},
			{
				type: "list",
				items: [
					"Crawler access, SSR HTML, speed.",
					"Entity-clean schema and identical facts everywhere.",
					"Answer-first pages with statistics, quotations, sources, dates.",
					"Category, comparison, glossary, pricing pages.",
					"Bing + IndexNow.",
					"Review graph, Reddit usefulness, YouTube companions.",
					"Mention pipeline aimed at already-cited URLs.",
					"Markdown docs and one real MCP/WebMCP tool."
				]
			},
			{
				type: "h",
				text: "The 20 that is engine-specific"
			},
			{
				type: "p",
				text: "ChatGPT: Bing and licensed-media adjacency. Perplexity: recency and Reddit/YouTube. Gemini: organic top-10 and fan-out coverage. Claude: primary sources, careful prose, agent docs. Grok: X-native reputation. Copilot: IndexNow. Do the 80 before you staff the 20."
			},
			{
				type: "h",
				text: "Cadence"
			},
			{
				type: "p",
				text: "Weekly: prompt sample (subset), ship one extractable page or one mention, read crawler logs. Monthly: full prompt set, money-page refresh, negative-answer audit, MCP error rates. Quarterly: kill/keep on tactics, vertical page expansion, language expansion if a glossary already worked."
			},
			{
				type: "quote",
				text: "What happened to coding isn't the exception; it's the herald.",
				by: "swyx",
				role: "@swyx",
				source: "On Jevons paradox and agentic engineering, Jul 2026"
			},
			{
				type: "order",
				text: "Open the Campaign kit. Assign owners. Do week 1 in week 1. This document does not compound. Your logs do."
			}
		]
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/quotes-DqiflkNv.js
var quotes = [
	{
		id: "dharmesh-citeworthy",
		by: "Dharmesh Shah",
		handle: "@dharmesh",
		role: "Co-founder / CTO, HubSpot. Building agent.ai",
		text: "In the same way that you need to be rankworthy, you need to be citeworthy. You're not trying to trick ChatGPT into providing your answer. Do the work to come up with really good answers.",
		implication: "Quality is the strategy. Gaming an LLM is a reputation you cannot wash off."
	},
	{
		id: "dharmesh-aeo",
		by: "Dharmesh Shah",
		handle: "@dharmesh",
		role: "HubSpot",
		text: "Being early to SEO helped build HubSpot. The new game is AI ranking: showing up when people ask ChatGPT for recommendations instead of Googling.",
		implication: "AEO is inbound's second act. Start the compounding clock now."
	},
	{
		id: "aja-headwind",
		by: "Aja Frost",
		handle: "ex-HubSpot Global Growth",
		role: "Ran Project Lighthouse, HubSpot's GEO lab",
		text: "Every headwind is a tailwind if you turn around. Some content was meant for humans and bots. Some content was just for humans. Some content was just for bots.",
		implication: "Stop forcing one page to serve every visitor species. Write bot-native pages on purpose."
	},
	{
		id: "jeremy-agents",
		by: "Jeremy Howard",
		handle: "@jeremyphoward",
		role: "Proposed llms.txt. fast.ai / Answer.AI",
		text: "llms.txt is for agents, not training — but still a good thing to add. Having a known place you can get information for a given URL, rather than creating it from scratch, is rather convenient.",
		implication: "Treat llms.txt as an agent map, not a ranking hack. Chrome DevTools now validates it."
	},
	{
		id: "swyx-llms",
		by: "swyx",
		handle: "@swyx",
		role: "smol.ai / Latent Space / AI Engineer",
		text: "Point clanker to forge.smol.ai/llms.txt — a fast agent-native git remote.",
		implication: "Serious builders now publish a machine door next to the human door. Your docs should too."
	},
	{
		id: "rauch-computer",
		by: "Guillermo Rauch",
		handle: "@rauchg",
		role: "CEO, Vercel",
		text: "A computer for every agent, in every region.",
		implication: "The product surface is no longer a UI. It is a computer an agent can occupy. Design for that tenant."
	},
	{
		id: "sarah-webmcp",
		by: "Sarah Drasner",
		handle: "@sarah_edo",
		role: "Area Tech Lead, AI and Web Ecosystem, Chrome",
		text: "WebMCP office hours are live. Guides now exist for site builders, agent builders, agentic workflows, and evals.",
		implication: "Browser-native agent tools are a platform, not a blog post. Implement document.modelContext."
	},
	{
		id: "connor-sop",
		by: "Connor Gillivan",
		handle: "@ConnorGillivan",
		role: "7x founder. B2B SEO operator",
		text: "Study the citations, not the rankings. Most of them will not be your site. That list becomes your real target list. Your website alone won't get you cited. Most AI citations come from sources you don't own.",
		implication: "GEO is a distribution problem. Outreach to already-cited domains beats another blog post."
	},
	{
		id: "levelsio-harness",
		by: "Pieter Levels",
		handle: "@levelsio",
		role: "Indie builder. Multiple $10k–$80k/mo products",
		text: "Just using one AI coding agent is good enough and it can spin up more agents if it needs to. You don't need to build that yourself.",
		implication: "Don't build agent theater. Build the thing agents will choose. Complexity is not a moat."
	},
	{
		id: "alex-blogs",
		by: "Alex Groberman",
		handle: "@alexgroberman",
		role: "Operator, AI SEO. Public citation experiments",
		text: "Vendor blogs are quietly becoming one of the most cited sources in ChatGPT, Gemini, Perplexity and Google AI Overviews. The algorithm doesn't care about bias, only clarity.",
		implication: "Own your category definition and comparison pages. Third-party publishers will not write them for your niche."
	},
	{
		id: "liad-obsolete",
		by: "Liad Yosef",
		handle: "co-creator, MCP Apps spec",
		role: "Aura research on agent journeys",
		text: "Roughly 50% of tested websites publish llm.txt, but none of the agents we ran — Claude Code, Vercel's Eve, ChatGPT — actually used it. They went straight to the docs page, then the homepage.",
		implication: "Agents follow hunger, not your instructions file. Put the food on the docs URL they already try."
	},
	{
		id: "justin-quality",
		by: "Justin McKelvey",
		handle: "@justinmckelvey",
		role: "SaaS / ecomm operator",
		text: "The channel that classifies ChatGPT, Claude, and Perplexity arrivals engages at 77%. Higher than organic search, higher than direct, higher than anything on my two bigger sites.",
		implication: "Volume is the wrong scoreboard. AI arrivals are later-funnel and hotter."
	},
	{
		id: "contentpen",
		by: "Contentpen",
		handle: "@contentpen_ai",
		role: "GEO tooling",
		text: "Your blog gets traffic but zero AI citations. It's almost always one of these: the answer is buried, no stats, no sources, no FAQ block.",
		implication: "Citability is a formatting problem as much as an authority problem."
	},
	{
		id: "simon-agents",
		by: "Simon Willison",
		handle: "@simonw",
		role: "Django co-creator. Datasette. Agent engineering patterns",
		text: "Rewriting large changes as separate commits is a great example of the kind of thing I never used to do because it was tedious — now I have agents do it for me all the time.",
		implication: "Agents eat structured, boring, well-specified work. Make your product that kind of work."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/campaign-VxDvpuvP.js
var sprint = [
	{
		id: "w1-crawlers",
		week: 1,
		title: "Open the gates",
		detail: "Audit robots.txt. Allow OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Googlebot, bingbot. Decide GPTBot/ClaudeBot training separately. Confirm they appear in logs within 7 days.",
		owner: "eng"
	},
	{
		id: "w1-bing",
		week: 1,
		title: "Treat Bing as production",
		detail: "Verify Bing Webmaster Tools, submit sitemap, enable IndexNow on publish. This is ChatGPT search's front door.",
		owner: "eng"
	},
	{
		id: "w1-ssr",
		week: 1,
		title: "Render without JavaScript",
		detail: "Money pages must return the answer in the first HTML response. HubSpot's pre-render test: 6.4× faster → 1600% more AI crawls, ~40% more citations.",
		owner: "eng"
	},
	{
		id: "w1-schema",
		week: 1,
		title: "Make the entity unambiguous",
		detail: "Organization, Person, Product, FAQPage, HowTo. Visible text and JSON-LD must agree. Same name, same URL, same founder, same pricing facts everywhere.",
		owner: "eng"
	},
	{
		id: "w2-prompts",
		week: 2,
		title: "Build the prompt set",
		detail: "List 30–50 prompts your ICP actually types. Discover, compare, decide, act. Run them weekly in ChatGPT (search on), Perplexity, Claude, Gemini, Grok. Screenshot who is named.",
		owner: "growth"
	},
	{
		id: "w2-baseline",
		week: 2,
		title: "Baseline citation share",
		detail: "Pick a tracker (Ahrefs Brand Radar, Semrush AI Toolkit, Profound, Peec, HubSpot AEO Grader). Record mention, citation, sentiment, share of voice. This is the scoreboard.",
		owner: "growth"
	},
	{
		id: "w2-ga4",
		week: 2,
		title: "Split AI referral in analytics",
		detail: "Channel chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, grok.x.ai. Dharmesh: track AI traffic as its own bucket.",
		owner: "growth"
	},
	{
		id: "w3-capsules",
		week: 3,
		title: "Rewrite ten money pages",
		detail: "First 40–60 words answer the H1. Question-shaped H2s. Self-contained sections. Named statistic with a source. Visible dates. Tables for comparisons. FAQ block.",
		owner: "content"
	},
	{
		id: "w3-glossary",
		week: 3,
		title: "Ship a bot glossary",
		detail: "HubSpot: 50 definition pages, HTML-first, each term tied to the product in 1–2 sentences. Visibility +35% awareness, citation share 1.97% → 3.2%.",
		owner: "content"
	},
	{
		id: "w3-category",
		week: 3,
		title: "Own the category definition",
		detail: "The page that answers 'what is [category]?' is the highest-leverage GEO asset in B2B. Whoever defines the category gets cited every time a prospect asks.",
		owner: "content"
	},
	{
		id: "w4-compare",
		week: 4,
		title: "Publish the comparison set",
		detail: "Best / vs / alternative pages. AI engines cite them for commercial intent more than any other format. Include competitors honestly or you will not be trusted.",
		owner: "content"
	},
	{
		id: "w4-stats",
		week: 4,
		title: "Load quotations, statistics, sources",
		detail: "Princeton GEO-Bench (KDD 2024): quotations +41% visibility, statistics +32%, cited sources +30%. Keyword stuffing −10%. Do the three. Never the fourth.",
		owner: "content"
	},
	{
		id: "w5-reviews",
		week: 5,
		title: "Claim the review graph",
		detail: "G2, Capterra, TrustRadius, Trustpilot, industry directories. Review-site presence lifted citation rate 1.8% → 4.6–6.3% (SE Ranking). G2 is a top B2B citation domain.",
		owner: "growth"
	},
	{
		id: "w5-reddit",
		week: 5,
		title: "Show up where Perplexity already looks",
		detail: "Reddit is Perplexity's largest citation source. HubSpot 7×ed Reddit mentions and doubled citations by being useful, not promotional. Partner with community, not ads.",
		owner: "growth"
	},
	{
		id: "w6-mentions",
		week: 6,
		title: "Switch from link-building to mention-building",
		detail: "Ahrefs 2026: brand mentions predict AI citation at r=0.664, ~3× backlinks. HubSpot: new, numerous, recency-biased mentions beat one high-DR link. Target already-cited domains.",
		owner: "growth"
	},
	{
		id: "w6-listicles",
		week: 6,
		title: "Get onto the pages the models already quote",
		detail: "Search Engine Land 30-day test: placing on Indie Hackers, existing listicles, and industry roundups moved citation counts 147–232%. The outreach list is the citation list.",
		owner: "growth"
	},
	{
		id: "w7-docs",
		week: 7,
		title: "Make docs agent-native",
		detail: "Serve /docs as HTML + .md. Add /llms.txt as a map and link it from every markdown page. Cloudflare, Stripe, Vercel already do this. Coding agents will 404 on .md if you don't.",
		owner: "eng"
	},
	{
		id: "w7-mcp",
		week: 7,
		title: "Expose one real tool via MCP",
		detail: "If an agent should search docs, check pricing, create a resource, or check out — that is a tool, not a paragraph. Ship a narrow, authenticated MCP server. WebMCP for in-page actions.",
		owner: "product"
	},
	{
		id: "w8-commerce",
		week: 8,
		title: "Agentic commerce pass",
		detail: "Product schema, Merchant feeds, OpenAI Product Feed if you sell, returns/privacy URLs, live inventory. Agents that cannot verify stock will skip you.",
		owner: "product"
	},
	{
		id: "w8-speed",
		week: 8,
		title: "Serve bots in ~100ms",
		detail: "Pre-render or edge-cache the bot-facing HTML. Core Web Vitals: fast pages were cited 3× more often than slow ones in the SE Ranking 129k-site study.",
		owner: "eng"
	},
	{
		id: "w9-vertical",
		week: 9,
		title: "Industry × use-case pages",
		detail: "HubSpot generated 141 vertical pages; citation rate on that set went 16% → 92%, visibility +49%. Specificity is a retrieval feature.",
		owner: "content"
	},
	{
		id: "w10-youtube",
		week: 10,
		title: "Companion video on the same questions",
		detail: "YouTube is a first-class citation source for Perplexity and Gemini. Do not invent a channel strategy. Film the ten money questions.",
		owner: "content"
	},
	{
		id: "w11-rerun",
		week: 11,
		title: "Re-run the prompt set",
		detail: "Citations drift month to month. Compare to week 2. Kill tactics with no movement. Double the ones that moved. HubSpot's lesson: crawls, then citations, then visibility — in that order.",
		owner: "growth"
	},
	{
		id: "w12-os",
		week: 12,
		title: "Install the operating system",
		detail: "Weekly prompt sampling, monthly content refresh of money pages, mention pipeline, changelog for agents, incident process for negative AI answers. GEO is a program, not a project.",
		owner: "growth"
	}
];
var promptSeeds = [
	{
		id: "d1",
		intent: "discover",
		prompt: "What is [category] and which tools are actually used by serious teams in 2026?"
	},
	{
		id: "d2",
		intent: "discover",
		prompt: "How do I [primary job to be done] without hiring a specialist?"
	},
	{
		id: "d3",
		intent: "discover",
		prompt: "Best way to [outcome] for a [ICP] team of [size]."
	},
	{
		id: "c1",
		intent: "compare",
		prompt: "Best [category] tools for [ICP], ranked by [integration / support / price]."
	},
	{
		id: "c2",
		intent: "compare",
		prompt: "[Us] vs [incumbent] vs [challenger] for [use case]."
	},
	{
		id: "c3",
		intent: "compare",
		prompt: "What are the best [incumbent] alternatives in 2026?"
	},
	{
		id: "e1",
		intent: "decide",
		prompt: "Which [category] should a [role] pick if they care about [constraint]?"
	},
	{
		id: "e2",
		intent: "decide",
		prompt: "Is [product] worth it for [segment]? Honest drawbacks."
	},
	{
		id: "e3",
		intent: "decide",
		prompt: "How is [product] priced, and what do teams actually pay?"
	},
	{
		id: "a1",
		intent: "act",
		prompt: "Set up [workflow] with [product] from scratch. Exact steps."
	},
	{
		id: "a2",
		intent: "act",
		prompt: "Using tools, create [artifact] in [product] for [example customer]."
	},
	{
		id: "a3",
		intent: "act",
		prompt: "Buy / provision [plan] of [product] for a team of [n]."
	}
];
var kpis = [
	{
		name: "Prompt coverage",
		def: "% of the 30–50 ICP prompts where you are named at all."
	},
	{
		name: "Citation share",
		def: "% of cited sources in those answers that are you, or pages you influenced."
	},
	{
		name: "Sentiment",
		def: "Are you recommended, mentioned neutrally, or warned against?"
	},
	{
		name: "AI referral sessions",
		def: "Arrivals from chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, grok."
	},
	{
		name: "AI conversion rate",
		def: "AI sessions convert 4–23× organic in public datasets. Track separately."
	},
	{
		name: "Agent actions",
		def: "MCP / WebMCP / checkout / docs .md fetches. The new funnel step after citation."
	},
	{
		name: "Crawl → cite lag",
		def: "HubSpot: crawls first, citations later. Do not declare failure in week one."
	},
	{
		name: "Negative share",
		def: "One bad article can outweigh fifty good ones. Monitor and correct third-party facts."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CbdEy4ZV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function chapterById(id) {
	return chapters.find((c) => c.id === id);
}
function clip(text, q) {
	const i = text.toLowerCase().indexOf(q);
	if (i < 0) return text.slice(0, 140);
	const start = Math.max(0, i - 40);
	return (start > 0 ? "…" : "") + text.slice(start, start + 160);
}
function searchCorpus(query) {
	const q = query.trim().toLowerCase();
	if (q.length < 2) return [];
	const hits = [];
	for (const c of chapters) if ([
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
		})
	].join(" ").toLowerCase().includes(q)) {
		const snippetSource = c.body.find((b) => b.type === "lede" || b.type === "p") && "text" in c.body[0] ? c.body[0].text : c.kicker;
		hits.push({
			href: `/read/${c.id}`,
			to: "/read/$id",
			params: { id: c.id },
			kicker: `Ch ${c.numeral}`,
			title: c.title,
			snippet: clip(snippetSource, q)
		});
	}
	for (const e of engines) if ([
		e.name,
		e.operator,
		e.retrieval,
		e.lever,
		e.diet,
		...e.play,
		...e.avoid
	].join(" ").toLowerCase().includes(q)) hits.push({
		href: `/engines#${e.id}`,
		to: "/engines",
		hash: e.id,
		kicker: "Dossier",
		title: e.name,
		snippet: clip(e.lever, q)
	});
	for (const quote of quotes) if (`${quote.by} ${quote.handle} ${quote.text} ${quote.implication}`.toLowerCase().includes(q)) hits.push({
		href: `/signals#${quote.id}`,
		to: "/signals",
		hash: quote.id,
		kicker: quote.handle,
		title: quote.by,
		snippet: clip(quote.text, q)
	});
	for (const item of sprint) if (`${item.title} ${item.detail}`.toLowerCase().includes(q)) hits.push({
		href: `/kit#${item.id}`,
		to: "/kit",
		hash: item.id,
		kicker: `Week ${item.week}`,
		title: item.title,
		snippet: clip(item.detail, q)
	});
	return hits.slice(0, 12);
}
function SearchPalette({ open, onClose }) {
	const [q, setQ] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const hits = (0, import_react.useMemo)(() => searchCorpus(q), [q]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setQ("");
			const t = window.setTimeout(() => inputRef.current?.focus(), 20);
			return () => window.clearTimeout(t);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-ink/70 px-4 pt-[12vh]",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
			onClick: (e) => e.stopPropagation(),
			role: "dialog",
			"aria-label": "Search the manual",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 border-b border-line px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search doctrines, engines, quotes, sprints",
						className: "h-12 w-full bg-transparent text-sm text-fg placeholder:text-subtle focus:outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "text-subtle hover:text-fg",
						"aria-label": "Close search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[50vh] overflow-y-auto p-2",
				children: [
					q.trim().length >= 2 && hits.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-6 text-sm text-muted",
						children: "No matches in the corpus."
					}),
					hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (hit.to === "/read/$id" && hit.params) navigate({
								to: "/read/$id",
								params: hit.params
							});
							else if (hit.to === "/engines") navigate({
								to: "/engines",
								hash: hit.hash
							});
							else if (hit.to === "/signals") navigate({
								to: "/signals",
								hash: hit.hash
							});
							else navigate({
								to: "/kit",
								hash: hit.hash
							});
							onClose();
						},
						className: cn("flex w-full flex-col items-start gap-1 rounded-md px-3 py-3 text-left", "hover:bg-raised"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.16em] text-sage",
								children: hit.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base text-fg",
								children: hit.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-clamp-2 text-xs leading-relaxed text-muted",
								children: hit.snippet
							})
						]
					}, hit.href + hit.title)),
					q.trim().length < 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-6 text-sm text-muted",
						children: "Type at least two characters. Try “Reddit”, “MCP”, “capsule”, “HubSpot”."
					})
				]
			})]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "Briefing"
	},
	{
		to: "/read/$id",
		params: { id: "briefing" },
		label: "Manual"
	},
	{
		to: "/engines",
		label: "Engines"
	},
	{
		to: "/signals",
		label: "Signals"
	},
	{
		to: "/kit",
		label: "Campaign kit"
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [search, setSearch] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setSearch(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		setMenu(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-baseline gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg tracking-tight text-fg",
								children: "Citeworthy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-mono text-[10px] uppercase tracking-[0.18em] text-subtle sm:inline",
								children: "Field manual"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: NAV.map((item) => {
								const active = item.to === "/" ? pathname === "/" : item.to === "/read/$id" ? pathname.startsWith("/read") : pathname === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									params: item.params,
									className: cn("rounded-sm px-3 py-2 text-sm transition-colors duration-150", active ? "text-fg" : "text-muted hover:text-fg"),
									children: item.label
								}, item.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSearch(true),
								className: "inline-flex h-10 items-center gap-2 rounded-sm border border-line px-3 text-xs text-muted hover:text-fg",
								"aria-label": "Search",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Search"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "hidden font-mono text-[10px] text-subtle sm:inline",
										children: "⌘K"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-10 items-center justify-center rounded-sm border border-line text-fg md:hidden",
								onClick: () => setMenu((v) => !v),
								"aria-label": menu ? "Close menu" : "Open menu",
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							})]
						})
					]
				}), menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line px-4 py-3 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							params: item.params,
							className: "py-3 text-base text-fg",
							children: item.label
						}, item.label))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-fg",
						children: "Citeworthy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-md text-sm leading-relaxed text-muted",
						children: "Compiled September 2026 from builder transmissions on X, HubSpot’s GEO lab, Princeton GEO-Bench, Cloudflare, Chrome WebMCP, OpenAI, Anthropic, and Google."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-subtle",
						children: "For internal AI development teams"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPalette, {
				open: search,
				onClose: () => setSearch(false)
			})
		]
	});
}
var styles_default = "/assets/styles-D3wZuB1b.css";
var APP_NAME = "Citeworthy";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Citeworthy is a field manual for agentic traffic and LLM citations — compiled from proven AI builders for development teams."
			},
			{
				name: "theme-color",
				content: "#0c0c0b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-BfH3miRs.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./engines-D2l9vQEV.mjs");
var Route$3 = createFileRoute("/engines")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./kit-B-zE1LQ9.mjs");
var Route$2 = createFileRoute("/kit")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./signals-DpZ_5_0K.mjs");
var Route$1 = createFileRoute("/signals")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./read._id-fAhpXxfa.mjs");
var Route = createFileRoute("/read/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	EnginesRoute: Route$3.update({
		id: "/engines",
		path: "/engines",
		getParentRoute: () => Route$5
	}),
	KitRoute: Route$2.update({
		id: "/kit",
		path: "/kit",
		getParentRoute: () => Route$5
	}),
	SignalsRoute: Route$1.update({
		id: "/signals",
		path: "/signals",
		getParentRoute: () => Route$5
	}),
	ReadIdRoute: Route.update({
		id: "/read/$id",
		path: "/read/$id",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { kpis as a, quotes as c, cn as i, chapters as l, Route as n, promptSeeds as o, chapterById as r, sprint as s, router_exports as t, engines as u };
