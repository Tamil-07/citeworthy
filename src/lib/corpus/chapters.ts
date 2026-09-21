import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  {
    id: "briefing",
    numeral: "00",
    title: "The briefing",
    kicker: "The click is no longer the conversion.",
    minutes: 6,
    fieldOrder:
      "Optimize for being retrieved, extracted, named, and invoked — not for a blue link.",
    kills: "That GEO is just SEO with a new acronym.",
    body: [
      {
        type: "lede",
        text: "Your next important visitor may never see your homepage. It will fan a buyer's question into sixteen sub-queries, lift three sentences from the open web, name two brands, and, increasingly, complete the purchase. This manual is how an AI development team becomes one of those names — and then one of those tools.",
      },
      {
        type: "statrow",
        items: [
          { value: "23×", label: "AI-referred visitors convert vs organic, Ahrefs", source: "Ahrefs" },
          { value: "87%", label: "of AI referral traffic still comes from ChatGPT", source: "Conductor 2026" },
          { value: "1,850%", label: "HubSpot qualified leads from AI after 12 months", source: "Project Lighthouse" },
          { value: "1.08%", label: "of sessions are AI referrals today — and already 5–10% of value", source: "Conductor, 3.3B sessions" },
        ],
      },
      {
        type: "p",
        text: "Conductor's 2026 benchmark across 3.3 billion sessions and 13,000+ domains put AI referral at 1.08% of traffic. That number is used as a reason to wait. It is the wrong reading. Those visitors spend 68% more time on site (SE Ranking), bounce 23% less (Adobe), and convert at 4× to 23× organic depending on the study (Exposure Ninja 14.2% vs 2.8%; Ahrefs 23×). Adobe tracked a 10× rise in AI-driven referrals from mid-2024 to early 2025. ChatGPT sat at ~900 million weekly actives by February 2026. Vodafone UK watched customer searches through AI platforms go from 0.5 billion to 4 billion in a year.",
      },
      {
        type: "p",
        text: "The Princeton / IIT Delhi / Georgia Tech / Allen Institute paper that named Generative Engine Optimization (arXiv 2311.09735, KDD 2024) showed that adding quotations, statistics, and sources lifted visibility 30–41%, while keyword stuffing reduced it. The unit of work changed: from ranking a URL to being inside the synthesized paragraph.",
      },
      {
        type: "doctrine",
        number: "I",
        title: "Citeworthy, not rankworthy",
        text: "Dharmesh Shah, who used inbound SEO to help build HubSpot, now says the job is to be citeworthy. You are not tricking a model. You are becoming the passage it can trust, the entity it can name, and the tool it can call.",
      },
      {
        type: "doctrine",
        number: "II",
        title: "Two visitors, two doors",
        text: "Humans still want narrative, brand, and UI. Agents want maps, facts, APIs, and actions. Cloudflare's CEO has said agent traffic has already surpassed human traffic on the web. A site with one door is hiding from half of its future.",
      },
      {
        type: "doctrine",
        number: "III",
        title: "Most citations are not yours",
        text: "Connor Gillivan's operator SOP, HubSpot's mention program, and Ahrefs' brand-mention correlation (r = 0.664, ~3× backlinks) all rhyme: the model quotes Reddit, G2, Wikipedia, listicles, and other people's blogs more than it quotes you. Winning GEO is mostly off-site.",
      },
      {
        type: "order",
        text: "Read this manual as a 90-day operating system, not a blog. Engineering owns crawlers, rendering, schema, docs, MCP. Content owns capsules, glossaries, comparisons. Growth owns the prompt set, mentions, Reddit, reviews. Product owns the actions an agent can take.",
      },
    ],
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
        text: "There is the internet of people, the internet of search crawlers, and now the internet of agents. They leave different footprints, want different representations of the same product, and convert on different events. Teams that lump them as 'organic' will watch revenue move and not know why.",
      },
      {
        type: "h",
        text: "The three visitors",
      },
      {
        type: "table",
        headers: ["Visitor", "Wants", "Success event", "Failure mode"],
        rows: [
          ["Human", "A story, a UI, a reason to trust", "Session, signup, purchase", "Friction, ugliness, confusion"],
          ["Answer engine", "A passage it can lift and a brand it can name", "Citation, recommendation", "JS-only pages, buried answers, conflicting facts"],
          ["Agent", "A map, a tool, a transaction", "Tool call, checkout, API 200", "No MCP/WebMCP, 404 on .md, blocked crawler, stale stock"],
        ],
      },
      {
        type: "p",
        text: "vLLM's September 2026 AgentX write-up is the server-side mirror of this: agentic workloads are already a major slice of inference. OpenAI reported Codex generating 64% of combined Codex and ChatGPT output tokens among enterprise customers. Median agent session: 43 turns, 142k input tokens, 444 output tokens, 96%+ prefix-cache hits, 44% of sessions spawning subagents. These machines are not 'users who type short queries.' They are long-running workers that will fetch your docs a hundred times.",
      },
      {
        type: "p",
        text: "Crystal Carter's Moz framework splits the work cleanly. Declarative optimization tells an agent who you are (GEO content, schema, llms.txt, agent cards). Imperative optimization lets it act (MCP, WebMCP, APIs, NL Web, Agentic Commerce Protocol). Most teams are still decorating the human site and hoping machines notice.",
      },
      {
        type: "callout",
        kicker: "Verbal / oversight",
        title: "Agentic traffic you cannot stand behind is a liability",
        text: "Verbal (tryverbal.com) exists because enterprises will not route customer traffic through agents they cannot audit. Hallucination detection, protocol adherence, self-identification, escalation. If your product is an agent, or is called by agents, trust is a distribution channel. Unverified agents get blocked at the gateway.",
      },
      {
        type: "quote",
        text: "Agents are here — not as a new kind of software, but as a new kind of visitor to the web.",
        by: "Cloudflare",
        role: "The Agentic Internet",
        source: "blog.cloudflare.com",
      },
      {
        type: "order",
        text: "This week: add an AI-referral channel in analytics, a crawler allow-list with log proof, and a single dashboard tile for agent tool-calls. If you cannot see the three visitors, you cannot improve them.",
      },
    ],
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
        text: "Search Engine Land's 2026 pillar model is the cleanest map we have. GEO is not a tactic. It is three campaigns that share a brand and almost no skills.",
      },
      {
        type: "h",
        text: "Pillar 1 — LLM readability",
      },
      {
        type: "p",
        text: "How efficiently a model can process, understand, and reuse your page as an answer. Traditional SEO is a prerequisite, not a substitute. The page is read in chunks. Agents overweight the first 350–400 words (the 512-token habit). Lost-in-the-middle is real: bury the answer and you are invisible even if you rank.",
      },
      {
        type: "list",
        items: [
          "Pyramid: answer → explanation → evidence → context. Never the reverse.",
          "One idea per paragraph, under ~250 words. Sections that still make sense if you delete every surrounding paragraph.",
          "Question-shaped H2s. Tables and lists over prose for anything comparative.",
          "Semantic triplets (subject–predicate–object). Consistent entity names. No 'we' without the brand name nearby.",
          "Front-load the first 350–400 words. Keep high-density pages nearer 2,000 words than 8,000 unless you are writing the category bible.",
        ],
      },
      {
        type: "h",
        text: "Pillar 2 — Brand context",
      },
      {
        type: "p",
        text: "Models do not 'rank you.' They complete a pattern: Notion with 'all-in-one workspace,' Stripe with 'payments infrastructure.' Co-occurrence across the training set and the live retrieval set is the association. This is why mentions beat links, why G2 profiles matter, why a single bad article can outweigh fifty good ones (models are negatively biased by design — operators keep repeating this).",
      },
      {
        type: "h",
        text: "Pillar 3 — Agentic commerce",
      },
      {
        type: "p",
        text: "The user delegates not only search but selection and, increasingly, payment. ChatGPT Instant Checkout, OpenAI's open Agentic Commerce Protocol, Google shopping inside AI Overviews, MCP tool calls, WebMCP in Chrome 146. The customer of your shop is an agent doing preselection. If your product feed, inventory, returns policy, or API is messy, you are not in the shortlist of two to five.",
      },
      {
        type: "table",
        caption: "AEO sits inside GEO. ACO is the third rail.",
        headers: ["Layer", "Win condition", "Dominant signal", "Owner"],
        rows: [
          ["AEO", "Named inside a chat answer", "Entity, schema, answer capsules, tier-1 citations", "Content + growth"],
          ["GEO (wide)", "Inside any generative summary, including AI Overviews", "AEO + classic SEO / E-E-A-T", "SEO + content"],
          ["ACO", "Selected and transacted by an agent", "Feeds, MCP, WebMCP, stock, policy URLs", "Product + eng"],
        ],
      },
      {
        type: "order",
        text: "Do not start with MCP if the crawler cannot read the pricing page. Do not start with another blog if you are already uncited on G2. Sequence: readable → mentioned → callable.",
      },
    ],
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
        text: "A brand is named for one of three mechanical reasons: it was in the training data, it was retrieved just now, or it was sitting in a third-party passage the retriever already trusted. You must play all three, on purpose, per engine.",
      },
      {
        type: "h",
        text: "Training vs search vs browse",
      },
      {
        type: "p",
        text: "OpenAI is explicit: GPTBot is training. OAI-SearchBot feeds ChatGPT search. ChatGPT-User is a live browse. Blocking training does not block citations. Collapsing them into 'Disallow: GPTBot' and a catch-all AI rule is how companies accidentally vanish from ChatGPT search. Claude-SearchBot vs ClaudeBot is the same split. Google's AI features use Googlebot; they have said you do not need a new AI file to appear.",
      },
      {
        type: "h",
        text: "Query fan-out",
      },
      {
        type: "p",
        text: "Google AI Mode fans one question into roughly sixteen sub-queries. Agents in the wild do the same: 'best CRM for a 12-person climate startup that uses HubSpot-like automation but cheaper' becomes definitions, comparison tables, pricing, Reddit threads, G2 scores, integration lists. A page that answers only the parent keyword loses fifteen of sixteen retrievals. Cover the sub-questions as first-class H2s.",
      },
      {
        type: "h",
        text: "The citation diet is third-party",
      },
      {
        type: "p",
        text: "Profound's analysis of hundreds of millions of citations: ChatGPT's most-cited domain is Wikipedia, then Reddit and licensed media. Perplexity: Reddit first, YouTube second. HubSpot's prompt set kept lighting up LinkedIn, YouTube, and Reddit. The Search Engine Land 775-citation experiment: a comprehensive listicle on someone else's site produced 190 mentions — more than anything the tested brand owned. Lesson: your outreach list is the list of URLs already being cited for your category.",
      },
      {
        type: "callout",
        kicker: "Princeton GEO-Bench",
        title: "What actually moved visibility",
        text: "Across 10,000 queries and nine tactics: quotations ~+41%, statistics ~+32%, cited sources ~+30%, fluency helped. Keyword stuffing hurt (~−10%). The authors partially validated on live Perplexity, where quotations still lifted position-adjusted visibility ~22%. This is the closest thing the field has to a physics paper. Use it.",
      },
      {
        type: "order",
        text: "For each money query, write down: which engine's index, which passage on your site could be lifted, and which three third-party URLs already get cited. You now have a content ticket, a rewrite ticket, and an outreach ticket.",
      },
    ],
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
        text: "Models lift sentences out of context. A paragraph that only makes sense after three paragraphs of setup is dead on arrival. The test from the LLM SEO operators: delete every sentence except the first one in the section. Does it still mean something? If not, rewrite.",
      },
      {
        type: "h",
        text: "The answer capsule",
      },
      {
        type: "p",
        text: "Directly under the H1, 40–60 words that answer the question the title asks, with one number and its source in parentheses. Atlas Marketing's tighter variant: 120–150 characters immediately after a question H2, zero internal links, a complete standalone statement. Both patterns exist because engines quote openings. HubSpot called this 'writing for the bot' and split content into human-only, bot-only, and both.",
      },
      {
        type: "h",
        text: "What HubSpot actually shipped",
      },
      {
        type: "list",
        items: [
          "Project Lighthouse: two SEOs, daily standup, weekly experiments. Qualified AI leads +1,850%. #1 CRM in AI search by year end.",
          "141 hyper-specific industry × use-case pages. Citation rate 16% → 92%. Visibility +49%. ChatGPT's bot hit them 15k times in weeks before citations moved. Crawls, then citations, then visibility.",
          "50 glossary pages, SSR, HTML-first, definition + example + 1–2 sentences tying the term to HubSpot. Awareness visibility +35%, consideration +26%, citation share 1.97% → 3.2%. Then they translated.",
          "Pricing posts structured so a bot could restate plan facts. They also corrected wrong prices on third-party pages — because the model was reading those, not the product page.",
          "Pre-render experiment (Botify SpeedWorkers): load ~0.1s, 6.4× faster. AI crawls +1600%, traditional crawls +30%, citations ~+40%, AI referral traffic only +6%. Citations and clicks are not the same KPI.",
        ],
      },
      {
        type: "h",
        text: "Vendor blogs are a cheat code that is not a cheat",
      },
      {
        type: "p",
        text: "Rankscale and operators like Alex Groberman keep finding the same thing: for commercial queries ('best CRM,' 'New Relic alternatives'), a surprising share of citations are the vendor's own comparison posts — SigNoz, AppSignal, Honeycomb, Thinkific, Monday, Pipedrive, HP. Third-party publishers do not write niche comparison depth. Models need structured, factual, recently updated HTML. They are weak at discounting bias. If you will not write the honest comparison, someone less honest will, and they will own the category in the model.",
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
| Cited sources | ~30%            | GEO-Bench, 2024   |`,
      },
      {
        type: "order",
        text: "Rewrite the ten highest-intent pages this sprint. Capsule, dates, table, FAQ, named sources. Then stop rewriting and go get mentioned on the pages already cited.",
      },
    ],
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
        text: "SE Ranking's study of 129,000 websites, 216,524 pages and 100,000 prompts is the blunt instrument: 32,000+ referring domains → 3.5× ChatGPT citations; high trust → ~4×; Quora/Reddit presence → 4×; review platforms → 3–6×; homepage traffic and domain trust still matter. llms.txt did almost nothing. Authority, structure, and reputation did almost everything.",
      },
      {
        type: "h",
        text: "Mentions are the new links",
      },
      {
        type: "p",
        text: "Ahrefs 2026, 75,000 brands: brand mentions are the strongest single predictor of AI citation (r = 0.664), roughly three times the correlation of backlinks. HubSpot rebuilt link-building into a flat-fee mention program, preferred new pages over inserting into old ones (recency bias makes new cheaper and more effective), and preferred twenty medium-DR mentions over one trophy DR. They priced a mention by AI-influenced ARR.",
      },
      {
        type: "h",
        text: "Reddit is infrastructure",
      },
      {
        type: "p",
        text: "Not a growth-hack subreddit blast. HubSpot partnered with the community team, pursued co-moderation, ran AMAs, invited useful commenters as champions. Community +61.7% YoY, HubSpot mentions across Reddit 7×, citations doubled. Perplexity's citation diet makes this non-optional. Fake accounts backfire; models and mods both notice.",
      },
      {
        type: "h",
        text: "Reviews, Wikipedia, YouTube, listicles",
      },
      {
        type: "list",
        items: [
          "G2 is repeatedly the #2 cited domain for B2B SaaS queries. Unclaimed or thin profiles are unpaid advertising for competitors.",
          "Wikipedia and licensed media dominate ChatGPT's training-plus-search mix. You cannot buy this. You can be accurate, notable, and cited by people who write those pages.",
          "YouTube is Perplexity's second diet. Companion videos of the ten money questions are GEO, not brand.",
          "Listicles that already rank in Bing/Google and already appear in AI answers are the highest-ROI placements. Search Engine Land: Indie Hackers mentions 44 → 146 (+232%) after a placement on a page the models were already using.",
        ],
      },
      {
        type: "quote",
        text: "Study the citations, not the rankings. Most of them will not be your site. That list becomes your real target list.",
        by: "Connor Gillivan",
        role: "@ConnorGillivan",
        source: "X, Sep 2026",
      },
      {
        type: "order",
        text: "Build a 40-row sheet: URL already cited for your prompts, domain, engine, last seen, owner, ask. This is the growth team's sprint board. Content without this sheet is a diary.",
      },
    ],
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
        text: "There is a stack, and almost every team implements it upside down — starting with a fashionable file, skipping the HTML, never shipping a tool. Here is the order that matches how agents actually behave.",
      },
      {
        type: "h",
        text: "Layer 0 — Do not be blocked",
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
# Disallow: /`,
      },
      {
        type: "h",
        text: "Layer 1 — HTML the machine can eat without executing your app",
      },
      {
        type: "p",
        text: "Server-side render money pages. Gemini inherits Googlebot's renderer; ChatGPT, Perplexity, and most agents do not reliably run your React tree. If the answer is not in the first response body, it does not exist. Pair with Core Web Vitals: the 129k-site study saw fast pages cited 3× more often than slow ones. HubSpot's 100ms bot HTML is the reference experiment.",
      },
      {
        type: "h",
        text: "Layer 2 — Entity and product facts",
      },
      {
        type: "p",
        text: "JSON-LD for Organization, Person, Product, Offer, AggregateRating, FAQPage, HowTo, BreadcrumbList. The visible page and the graph must not disagree. Google has said AI Overviews need no special markup — but they need the same unambiguous entity the rest of the index already uses. For commerce: Merchant Center, OpenAI Product Feed (enable_search before enable_checkout), live availability, returns URL, privacy URL. Missing policy pages quietly exclude you from chat checkout.",
      },
      {
        type: "h",
        text: "Layer 3 — Maps, not spells (llms.txt)",
      },
      {
        type: "p",
        text: "Jeremy Howard proposed llms.txt in September 2024 as a markdown map at the site root: who you are, which pages matter, where the plain-text versions live. Stripe, Cloudflare, Vercel, Anthropic docs, Mintlify sites ship it. Chrome DevTools will validate it. Wix generates it. And yet: Ahrefs, May 2026, 137,210 domains — 97% of llms.txt files got zero requests. Of the hits, most were SEO auditors. Verifiable LLM hits are tiny. Adobe AEM logs: 1.1% of /llms.txt traffic was real LLMs. Google's John Mueller: no AI system currently uses it for ranking. HubSpot paused it after seeing no result.",
      },
      {
        type: "p",
        text: "So why keep it? Because coding agents are a different animal. Mintlify's 2,400-run benchmark with Claude Code and Codex: agents kept requesting .md and /llms.txt, 404'd without them, and a single link to the map cut dead URLs ~90% across Opus, GPT, and others. Liad Yosef's Aura traces: chat/search agents ignored the file and went to /docs then /. Jeremy: 'llms.txt is for agents, not training.' swyx publishes forge.smol.ai/llms.txt as the door. Put the file in for agent navigation. Do not report it as a citation strategy.",
      },
      {
        type: "h",
        text: "Layer 4 — Docs as markdown",
      },
      {
        type: "p",
        text: "Cloudflare's Docs for Agents pattern is the gold standard: /llms.txt as an index, /llms-full.txt for bulk, per-product maps, and markdown twins of every page. Agents that write code against your API will fetch these on every session. HTML-only docs waste their tokens and yours.",
      },
      {
        type: "h",
        text: "Layer 5 — Tools (MCP, WebMCP, NL Web)",
      },
      {
        type: "p",
        text: "MCP (donated to the Linux Foundation's Agentic AI Foundation with Block, OpenAI, Google, Microsoft, AWS, Cloudflare, Bloomberg) is how an agent uses you as a verb. Monday, Wix, Cloudflare already sit inside Claude, Cursor, and Perplexity Pro. WebMCP, introduced by Google at I/O 2026 and previewed in Chrome 146 as document.modelContext, is the on-page version: tools in the actual website, with origin trials and evals led in public by Sarah Drasner and the Chrome AI team. NL Web lets agents query your existing schema.org graph in natural language. x402, Web Bot Auth, PACT, and the Agentic Commerce Protocol are the payment and identity layer Cloudflare is wiring into 'the agentic internet.'",
      },
      {
        type: "callout",
        kicker: "IndexNow",
        title: "Ping Bing when you publish. ChatGPT is downstream.",
        text: "Google crawls on its own clock. Bing + Copilot + ChatGPT search can be notified in minutes. Host a key file, POST the URL list on publish and on update. This is the highest-leverage one-hour engineering task in the entire stack.",
      },
      {
        type: "order",
        text: "This quarter, engineering ships: crawler allow-list, SSR money pages, IndexNow, schema audit, markdown docs + llms.txt map, one MCP tool that a real agent would actually call. Everything else is content.",
      },
    ],
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
        text: "The field is young, the incentives are rotten, and a lot of what is sold as 'AI SEO' is a file, a plugin, and an invoice. Here is what independent logs and operator tests keep showing.",
      },
      {
        type: "table",
        headers: ["Claim", "What the logs / tests show", "Keep / kill"],
        rows: [
          [
            "llms.txt gets you cited",
            "Ahrefs: 97% of files get zero requests. HubSpot paused it. Mueller: unused for ranking. Useful as an agent map for coding agents (Mintlify, Jeremy Howard, swyx).",
            "Keep as a map. Kill as a ranking play.",
          ],
          [
            "Schema is a silver bullet",
            "Necessary for entity clarity and commerce. Google: not required for AI Overviews. Insufficient without content and mentions.",
            "Keep as hygiene.",
          ],
          [
            "Keyword-rich AI content",
            "GEO-Bench: stuffing hurt ~10%. Slop reputation is sticky (Dharmesh). Models deprioritize you later.",
            "Kill.",
          ],
          [
            "One engine strategy",
            "Same URL can be 18% citation share on ChatGPT and 0% on Perplexity. Retrieval diets differ.",
            "Shared 80%, then per-engine 20%.",
          ],
          [
            "AI traffic is too small",
            "1% of sessions, 5–10% of value already, converting 4–23×, growing double to triple digits.",
            "Kill the wait.",
          ],
          [
            "Just write more blog posts",
            "HubSpot and SE Ranking: structure, speed, third-party mentions, reviews, Reddit moved more than volume.",
            "Write fewer, extractable, mentioned pages.",
          ],
        ],
      },
      {
        type: "p",
        text: "Search Engine Land's two GEO experiments (775 citation events) overturned a conclusion between test one and test two: the sources that mention you can matter more than the content you control. Indie Hackers and existing listicles moved numbers; owned pages lagged. That is not an argument against owned content. It is an argument against owned content as the whole program.",
      },
      {
        type: "quote",
        text: "Crawls happen first, then citations, then visibility.",
        by: "Aja Frost / Project Lighthouse",
        role: "HubSpot",
        source: "Growth Unhinged, 2026",
      },
      {
        type: "order",
        text: "Anything in this manual that you cannot see in your own logs in 30 days is a hypothesis, not a process. Kill it.",
      },
    ],
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
        text: "If GEO breaks the click as the conversion event, it also breaks last-click dashboards. You need a prompt set, a sampling cadence, and the humility to watch crawls for weeks before citations move.",
      },
      {
        type: "h",
        text: "The prompt set is the keyword set",
      },
      {
        type: "p",
        text: "Connor Gillivan: 30–50 prompts your ICP actually types, plus adjacent variations, run across ChatGPT (search on), Claude, Gemini, Perplexity, Grok. Screenshot who is named. Re-run every 2–4 weeks. Citations drift. HubSpot tracks prompts down to the feature level. Audience size of a publication barely predicted citations; being on the bibliography did.",
      },
      {
        type: "h",
        text: "Tools that are not theater",
      },
      {
        type: "list",
        items: [
          "Ahrefs Brand Radar (custom prompt tracking, 2026).",
          "Semrush AI Toolkit.",
          "Profound (enterprise, citation graphs at hundreds of millions of rows).",
          "Peec, Otterly, Parse / Soar.",
          "HubSpot AEO Grader (free sentiment + share of voice across ChatGPT, Perplexity, Gemini).",
          "Your own sheet. A tracker you do not open is a subscription, not a program.",
        ],
      },
      {
        type: "p",
        text: "GA4: classify chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, grok / x.ai as a dedicated channel. Justin McKelvey's 77% engagement on that channel is the quality check. If AI arrivals bounce, your landing pages are written for searchers, not for people who already got the answer and came to verify.",
      },
      {
        type: "callout",
        kicker: "Negative space",
        title: "Audit what the models say when they are unkind",
        text: "Operators keep repeating: AI is biased toward negative information. One inaccurate pricing page, one rage-post, one out-of-date security claim can dominate the completion. Assign someone to collect hostile answers monthly and correct the upstream sources — including third parties.",
      },
      {
        type: "order",
        text: "Stand up the prompt set and the AI channel this week. Everything you 'optimize' without a baseline is folklore.",
      },
    ],
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
        text: "Dharmesh's warning is the one that should hang on the wall: a reputation as slop is worse than zero returns. Models will remember. Humans will too. The following are reliable ways to lose.",
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
          "Building an 'agent harness' nobody asked for (levelsio) instead of a product an existing agent can call.",
        ],
      },
      {
        type: "quote",
        text: "You're not trying to trick ChatGPT into providing your answer. Do the work to come up with really good answers.",
        by: "Dharmesh Shah",
        role: "@dharmesh",
        source: "AEO interviews, 2025–26",
      },
      {
        type: "order",
        text: "If a tactic would embarrass you if an engineer posted it on X, it is not GEO. It is spam with a new buyer.",
      },
    ],
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
        text: "HubSpot did not wait for the industry to mature. They pulled two curious SEOs off the roadmap, met daily, shipped weekly, and bought measurement (Xfunnel). Vercel ships computers for agents. Cloudflare ships the agentic internet protocols. Chrome ships WebMCP. Your advantage is the same as 2004 inbound: the incumbents are still arguing about whether this is real.",
      },
      {
        type: "h",
        text: "The 80 that serves every engine",
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
          "Markdown docs and one real MCP/WebMCP tool.",
        ],
      },
      {
        type: "h",
        text: "The 20 that is engine-specific",
      },
      {
        type: "p",
        text: "ChatGPT: Bing and licensed-media adjacency. Perplexity: recency and Reddit/YouTube. Gemini: organic top-10 and fan-out coverage. Claude: primary sources, careful prose, agent docs. Grok: X-native reputation. Copilot: IndexNow. Do the 80 before you staff the 20.",
      },
      {
        type: "h",
        text: "Cadence",
      },
      {
        type: "p",
        text: "Weekly: prompt sample (subset), ship one extractable page or one mention, read crawler logs. Monthly: full prompt set, money-page refresh, negative-answer audit, MCP error rates. Quarterly: kill/keep on tactics, vertical page expansion, language expansion if a glossary already worked.",
      },
      {
        type: "quote",
        text: "What happened to coding isn't the exception; it's the herald.",
        by: "swyx",
        role: "@swyx",
        source: "On Jevons paradox and agentic engineering, Jul 2026",
      },
      {
        type: "order",
        text: "Open the Campaign kit. Assign owners. Do week 1 in week 1. This document does not compound. Your logs do.",
      },
    ],
  },
];
