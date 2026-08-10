export type Link = { label: string; href: string };

export type ProofItem = {
  value: string;
  hat: string;
  note: string;
};

export type Principle = {
  index: string;
  title: string;
  quote: string;
  note: string;
};

export type TimelineStop = {
  year: string;
  badge: string;
  title: string;
  beat: string;
};

export type ToolkitRow = [string, string];

/**
 * SITE — single source of truth for config-level content.
 * Everything marked [TO FILL] is a placeholder: swap it in one place.
 * Never invent metrics — placeholders keep their explicit bracket labels.
 */
export const site = {
  name: "Mrigya Sahai",
  firstName: "Mrigya",
  roleTag: "product person who builds",
  roles: [
    "Product Manager",
    "Product Builder",
    "AI Builder",
    "Documentation Engineer",
    "Shopify Product Specialist",
  ] as const,
  headline: "I solve product problems. I build the products that fix them.",
  headlineHighlight: "solve product problems",
  scriptNote: "that's me",
  metaDescription:
    "Mrigya Sahai is a product manager, product builder, AI builder, documentation engineer and Shopify specialist. I solve product problems and I build the products that fix them.",
  url: "https://example.com/[to-fill-your-domain]",
  email: "hello@[TO-FILL-EMAIL].com",
  status: "OPEN TO WORK",

  proof: [
    {
      value: "TAT −63%",
      hat: "[AI]",
      note: "retail returns automation",
    },
    {
      value: "ROI 3.2×",
      hat: "[AI AGENT]",
      note: "[TO FILL] flagship build",
    },
    {
      value: "12 SHIPPED",
      hat: "[PRODUCT]",
      note: "[TO FILL] products & systems",
    },
  ] satisfies ProofItem[],

  marquee: ["PRODUCT", "AI", "DOCS", "SHOPIFY", "METRICS"],

  principles: [
    {
      index: "01",
      title: "Understand the problem",
      quote: "the why before the what",
      note: "Interviews, journeys, and the one metric that actually matters — before any build.",
    },
    {
      index: "02",
      title: "Build to learn",
      quote: "ship small, learn real",
      note: "A working prototype beats a perfect spec. Real users give better answers than assumptions.",
    },
    {
      index: "03",
      title: "Ship fast, measure honestly",
      quote: "shipped counts, vanity doesn't",
      note: "Release small, instrument everything, and let the numbers argue back.",
    },
    {
      index: "04",
      title: "Document everything",
      quote: "docs are the product I write them first",
      note: "Runbooks, decisions, and architecture notes — so the next person can ship faster.",
    },
  ] satisfies Principle[],

  methodMarginNote:
    "I've never seen a good product idea die because it was documented too well.",
  featuredMarginNote:
    "The play: write the runbook before the code. It made the build boring — which is exactly what you want from ops.",
  writingMarginNote:
    "Docs are the product I write them first. Readable systems ship faster.",

  timeline: [
    {
      year: "2019",
      badge: "⑩",
      title: "First build",
      beat: "Started building products to answer my own questions.",
    },
    {
      year: "2021",
      badge: "⑫",
      title: "Shopify builds",
      beat: "[TO FILL] commerce builds — stores, checkout flows, ops tooling.",
    },
    {
      year: "2024",
      badge: "⑱",
      title: "AI agent products",
      beat: "Automation agents for retail operations — returns, escalations, live actions.",
    },
    {
      year: "2026",
      badge: "⑳",
      title: "Docs & systems",
      beat: "Architecture docs, runbooks, and the discipline of shipping with receipts.",
    },
  ] satisfies TimelineStop[],

  about: {
    bio: "Product manager and builder who goes from problem to shipped product — interviews, specs, AI agents, and Shopify builds included. I write the docs as I go, because documentation is what turns a demo into a system.",
    scriptNote: "that's me, in one margin note",
  },

  toolkit: {
    rows: [
      ["PRODUCT", "PM × BUILDER"],
      ["AI", "AGENTS · PIPELINES"],
      ["COMMERCE", "SHOPIFY"],
      ["DOCS", "SYSTEMS · RUNBOOKS"],
      ["STACK", "PYTHON · TS · PLAYWRIGHT"],
      ["STATUS", "OPEN TO WORK"],
    ] as ToolkitRow[],
    footer: "[TO FILL] — my tooling list lives here",
  },

  links: [
    { label: "LINKEDIN", href: "https://[TO-FILL].linkedin.com" },
    { label: "GITHUB", href: "https://[TO-FILL].github.com" },
    { label: "EMAIL", href: "mailto:hello@[TO-FILL-EMAIL].com" },
  ] satisfies Link[],

  navItems: [
    { label: "WORK", href: "#work", id: "work" },
    { label: "WRITING", href: "#writing", id: "writing" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ] as const,

  footerNote: "BUILT BY HAND · NO TEMPLATES",
};
