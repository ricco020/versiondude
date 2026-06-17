import { ARTICLE_SLUGS, slugFor } from "@/data/articles";
import { PROJECT_SLUGS } from "@/data/content";

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

export function GET() {
  const body = paths().map((path) => {
    const m = path.match(/^\/articles\/(.+)$/);
    const slug = m ? m[1] : null;
    const en = `${BASE}${path || "/"}`;
    const fr = slug ? `${BASE}/fr/articles/${slugFor(slug,"fr")}` : `${BASE}/fr${path}`;
    const es = slug ? `${BASE}/es/articles/${slugFor(slug,"es")}` : `${BASE}/es${path}`;
    const alts = [["en", en], ["fr", fr], ["es", es], ["x-default", en]]
      .map(([l, u]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${u}"/>`).join("");
    return [en, fr, es].map((u) =>
      `<url><loc>${u}</loc>${alts}<changefreq>weekly</changefreq><priority>${path === "" ? "1.0" : "0.7"}</priority></url>`
    ).join("");
  }).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${body}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
