import { ARTICLE_SLUGS, slugFor } from "@/data/articles";
import { PROJECT_SLUGS } from "@/data/content";
import { LOCALES } from "@/data/site-i18n";

const BASE = "https://versiondude.net";
const CATS = ["standards", "parsing", "tooling", "archive"];
export const dynamic = "force-static";

function paths() {
  const p = ["", "/projects", "/categories", "/about", "/contact", "/faq"];
  PROJECT_SLUGS.forEach((s) => p.push(`/projects/${s}`));
  ARTICLE_SLUGS.forEach((s) => p.push(`/articles/${s}`));
  CATS.forEach((c) => p.push(`/categories/${c}`));
  return p;
}

// URL d'un path (sans préfixe locale) pour une locale donnée.
// Les slugs d'articles sont localisés → traduire vers la locale cible.
function urlFor(path, locale) {
  const pre = locale === "en" ? "" : `/${locale}`;
  const m = path.match(/^\/articles\/(.+)$/);
  if (m) return `${BASE}${pre}/articles/${slugFor(m[1], locale)}`;
  return `${BASE}${pre}${path || "/"}`;
}

export function GET() {
  const body = paths().map((path) => {
    const en = urlFor(path, "en");
    const alts = [...LOCALES.map((l) => [l, urlFor(path, l)]), ["x-default", en]]
      .map(([l, u]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${u}"/>`).join("");
    return LOCALES.map((l) => urlFor(path, l)).map((u) =>
      `<url><loc>${u}</loc>${alts}<changefreq>weekly</changefreq><priority>${path === "" ? "1.0" : "0.7"}</priority></url>`
    ).join("");
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
