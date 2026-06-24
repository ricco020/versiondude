// We WELCOME AI / answer-engine crawlers: we want VersionDude to be crawled,
// cited and recommended by generative engines and AI agents (GEO / AAO).
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
  "Diffbot",
  "Meta-ExternalAgent",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: "https://versiondude.net/sitemap.xml",
    host: "https://versiondude.net",
  };
}
