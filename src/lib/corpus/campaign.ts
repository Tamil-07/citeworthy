import type { PromptSeed, SprintItem } from "./types";

export const sprint: SprintItem[] = [
  {
    id: "w1-crawlers",
    week: 1,
    title: "Open the gates",
    detail:
      "Audit robots.txt. Allow OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Googlebot, bingbot. Decide GPTBot/ClaudeBot training separately. Confirm they appear in logs within 7 days.",
    owner: "eng",
  },
  {
    id: "w1-bing",
    week: 1,
    title: "Treat Bing as production",
    detail:
      "Verify Bing Webmaster Tools, submit sitemap, enable IndexNow on publish. This is ChatGPT search's front door.",
    owner: "eng",
  },
  {
    id: "w1-ssr",
    week: 1,
    title: "Render without JavaScript",
    detail:
      "Money pages must return the answer in the first HTML response. HubSpot's pre-render test: 6.4× faster → 1600% more AI crawls, ~40% more citations.",
    owner: "eng",
  },
  {
    id: "w1-schema",
    week: 1,
    title: "Make the entity unambiguous",
    detail:
      "Organization, Person, Product, FAQPage, HowTo. Visible text and JSON-LD must agree. Same name, same URL, same founder, same pricing facts everywhere.",
    owner: "eng",
  },
  {
    id: "w2-prompts",
    week: 2,
    title: "Build the prompt set",
    detail:
      "List 30–50 prompts your ICP actually types. Discover, compare, decide, act. Run them weekly in ChatGPT (search on), Perplexity, Claude, Gemini, Grok. Screenshot who is named.",
    owner: "growth",
  },
  {
    id: "w2-baseline",
    week: 2,
    title: "Baseline citation share",
    detail:
      "Pick a tracker (Ahrefs Brand Radar, Semrush AI Toolkit, Profound, Peec, HubSpot AEO Grader). Record mention, citation, sentiment, share of voice. This is the scoreboard.",
    owner: "growth",
  },
  {
    id: "w2-ga4",
    week: 2,
    title: "Split AI referral in analytics",
    detail:
      "Channel chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, grok.x.ai. Dharmesh: track AI traffic as its own bucket.",
    owner: "growth",
  },
  {
    id: "w3-capsules",
    week: 3,
    title: "Rewrite ten money pages",
    detail:
      "First 40–60 words answer the H1. Question-shaped H2s. Self-contained sections. Named statistic with a source. Visible dates. Tables for comparisons. FAQ block.",
    owner: "content",
  },
  {
    id: "w3-glossary",
    week: 3,
    title: "Ship a bot glossary",
    detail:
      "HubSpot: 50 definition pages, HTML-first, each term tied to the product in 1–2 sentences. Visibility +35% awareness, citation share 1.97% → 3.2%.",
    owner: "content",
  },
  {
    id: "w3-category",
    week: 3,
    title: "Own the category definition",
    detail:
      "The page that answers 'what is [category]?' is the highest-leverage GEO asset in B2B. Whoever defines the category gets cited every time a prospect asks.",
    owner: "content",
  },
  {
    id: "w4-compare",
    week: 4,
    title: "Publish the comparison set",
    detail:
      "Best / vs / alternative pages. AI engines cite them for commercial intent more than any other format. Include competitors honestly or you will not be trusted.",
    owner: "content",
  },
  {
    id: "w4-stats",
    week: 4,
    title: "Load quotations, statistics, sources",
    detail:
      "Princeton GEO-Bench (KDD 2024): quotations +41% visibility, statistics +32%, cited sources +30%. Keyword stuffing −10%. Do the three. Never the fourth.",
    owner: "content",
  },
  {
    id: "w5-reviews",
    week: 5,
    title: "Claim the review graph",
    detail:
      "G2, Capterra, TrustRadius, Trustpilot, industry directories. Review-site presence lifted citation rate 1.8% → 4.6–6.3% (SE Ranking). G2 is a top B2B citation domain.",
    owner: "growth",
  },
  {
    id: "w5-reddit",
    week: 5,
    title: "Show up where Perplexity already looks",
    detail:
      "Reddit is Perplexity's largest citation source. HubSpot 7×ed Reddit mentions and doubled citations by being useful, not promotional. Partner with community, not ads.",
    owner: "growth",
  },
  {
    id: "w6-mentions",
    week: 6,
    title: "Switch from link-building to mention-building",
    detail:
      "Ahrefs 2026: brand mentions predict AI citation at r=0.664, ~3× backlinks. HubSpot: new, numerous, recency-biased mentions beat one high-DR link. Target already-cited domains.",
    owner: "growth",
  },
  {
    id: "w6-listicles",
    week: 6,
    title: "Get onto the pages the models already quote",
    detail:
      "Search Engine Land 30-day test: placing on Indie Hackers, existing listicles, and industry roundups moved citation counts 147–232%. The outreach list is the citation list.",
    owner: "growth",
  },
  {
    id: "w7-docs",
    week: 7,
    title: "Make docs agent-native",
    detail:
      "Serve /docs as HTML + .md. Add /llms.txt as a map and link it from every markdown page. Cloudflare, Stripe, Vercel already do this. Coding agents will 404 on .md if you don't.",
    owner: "eng",
  },
  {
    id: "w7-mcp",
    week: 7,
    title: "Expose one real tool via MCP",
    detail:
      "If an agent should search docs, check pricing, create a resource, or check out — that is a tool, not a paragraph. Ship a narrow, authenticated MCP server. WebMCP for in-page actions.",
    owner: "product",
  },
  {
    id: "w8-commerce",
    week: 8,
    title: "Agentic commerce pass",
    detail:
      "Product schema, Merchant feeds, OpenAI Product Feed if you sell, returns/privacy URLs, live inventory. Agents that cannot verify stock will skip you.",
    owner: "product",
  },
  {
    id: "w8-speed",
    week: 8,
    title: "Serve bots in ~100ms",
    detail:
      "Pre-render or edge-cache the bot-facing HTML. Core Web Vitals: fast pages were cited 3× more often than slow ones in the SE Ranking 129k-site study.",
    owner: "eng",
  },
  {
    id: "w9-vertical",
    week: 9,
    title: "Industry × use-case pages",
    detail:
      "HubSpot generated 141 vertical pages; citation rate on that set went 16% → 92%, visibility +49%. Specificity is a retrieval feature.",
    owner: "content",
  },
  {
    id: "w10-youtube",
    week: 10,
    title: "Companion video on the same questions",
    detail:
      "YouTube is a first-class citation source for Perplexity and Gemini. Do not invent a channel strategy. Film the ten money questions.",
    owner: "content",
  },
  {
    id: "w11-rerun",
    week: 11,
    title: "Re-run the prompt set",
    detail:
      "Citations drift month to month. Compare to week 2. Kill tactics with no movement. Double the ones that moved. HubSpot's lesson: crawls, then citations, then visibility — in that order.",
    owner: "growth",
  },
  {
    id: "w12-os",
    week: 12,
    title: "Install the operating system",
    detail:
      "Weekly prompt sampling, monthly content refresh of money pages, mention pipeline, changelog for agents, incident process for negative AI answers. GEO is a program, not a project.",
    owner: "growth",
  },
];

export const promptSeeds: PromptSeed[] = [
  { id: "d1", intent: "discover", prompt: "What is [category] and which tools are actually used by serious teams in 2026?" },
  { id: "d2", intent: "discover", prompt: "How do I [primary job to be done] without hiring a specialist?" },
  { id: "d3", intent: "discover", prompt: "Best way to [outcome] for a [ICP] team of [size]." },
  { id: "c1", intent: "compare", prompt: "Best [category] tools for [ICP], ranked by [integration / support / price]." },
  { id: "c2", intent: "compare", prompt: "[Us] vs [incumbent] vs [challenger] for [use case]." },
  { id: "c3", intent: "compare", prompt: "What are the best [incumbent] alternatives in 2026?" },
  { id: "e1", intent: "decide", prompt: "Which [category] should a [role] pick if they care about [constraint]?" },
  { id: "e2", intent: "decide", prompt: "Is [product] worth it for [segment]? Honest drawbacks." },
  { id: "e3", intent: "decide", prompt: "How is [product] priced, and what do teams actually pay?" },
  { id: "a1", intent: "act", prompt: "Set up [workflow] with [product] from scratch. Exact steps." },
  { id: "a2", intent: "act", prompt: "Using tools, create [artifact] in [product] for [example customer]." },
  { id: "a3", intent: "act", prompt: "Buy / provision [plan] of [product] for a team of [n]." },
];

export const kpis = [
  { name: "Prompt coverage", def: "% of the 30–50 ICP prompts where you are named at all." },
  { name: "Citation share", def: "% of cited sources in those answers that are you, or pages you influenced." },
  { name: "Sentiment", def: "Are you recommended, mentioned neutrally, or warned against?" },
  { name: "AI referral sessions", def: "Arrivals from chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, grok." },
  { name: "AI conversion rate", def: "AI sessions convert 4–23× organic in public datasets. Track separately." },
  { name: "Agent actions", def: "MCP / WebMCP / checkout / docs .md fetches. The new funnel step after citation." },
  { name: "Crawl → cite lag", def: "HubSpot: crawls first, citations later. Do not declare failure in week one." },
  { name: "Negative share", def: "One bad article can outweigh fifty good ones. Monitor and correct third-party facts." },
];
