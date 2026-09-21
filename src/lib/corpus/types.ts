export type Block =
  | { type: "lede"; text: string }
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string; by: string; role: string; source?: string }
  | { type: "statrow"; items: { value: string; label: string; source: string }[] }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; kicker: string; title: string; text: string }
  | { type: "code"; code: string; caption?: string }
  | { type: "doctrine"; number: string; title: string; text: string }
  | { type: "order"; text: string };

export type Chapter = {
  id: string;
  numeral: string;
  title: string;
  kicker: string;
  minutes: number;
  fieldOrder: string;
  kills: string;
  body: Block[];
};

export type Engine = {
  id: string;
  name: string;
  operator: string;
  share: string;
  retrieval: string;
  citationStyle: string;
  freshness: string;
  lever: string;
  crawlers: string[];
  diet: string;
  play: string[];
  avoid: string[];
};

export type BuilderQuote = {
  id: string;
  by: string;
  handle: string;
  role: string;
  text: string;
  implication: string;
};

export type SprintItem = {
  id: string;
  week: number;
  title: string;
  detail: string;
  owner: "eng" | "content" | "growth" | "product";
};

export type PromptSeed = {
  id: string;
  intent: "discover" | "compare" | "decide" | "act";
  prompt: string;
};
