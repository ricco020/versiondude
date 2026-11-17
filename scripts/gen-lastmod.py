#!/usr/bin/env python3
"""Ecrit src/data/lastmod.json : date de derniere modification par chemin du sitemap.
A lancer avant commit (le build Railway n'a pas l'historique git).
Article : empreinte de son contenu dans les 6 langues. Empreinte inchangee = date gardee,
empreinte changee = date du jour. Premiere passe : max(date de l'article, dernier commit
dont le diff touche une ligne citant le slug). Pages statiques : dernier commit du fichier."""
import json, re, hashlib, subprocess, datetime, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(R)
OUT = "src/data/lastmod.json"
old = json.load(open(OUT)) if os.path.exists(OUT) else {}
today = datetime.date.today().isoformat()

def git_date(*args):
    r = subprocess.run(["git", "log", "-1", "--format=%cs", *args], capture_output=True, text=True).stdout.strip()
    return r or today

js = open("src/data/articles.js", encoding="utf-8").read()
loc = {l: json.load(open(f"src/data/articles-{l}.json", encoding="utf-8")) for l in ("en", "fr", "es", "de", "it", "pt")}
blocks = re.split(r"\n  a\(\{\n", js[js.index("export const ARTICLES"):])[1:]
out = {}
for b in blocks:
    m = re.search(r"slug: '([^']+)'.*?date: '(\d{4}-\d\d-\d\d)'", b)
    if not m:
        continue
    slug, date = m.group(1), m.group(2)
    b = b.split("\n  }),")[0]
    h = hashlib.sha1((b + json.dumps([loc[l].get(slug) for l in loc], sort_keys=True, ensure_ascii=False)).encode()).hexdigest()[:12]
    k = f"/articles/{slug}"
    prev = old.get(k)
    if prev and prev.get("hash") == h:
        d = prev["date"]
    elif prev:
        d = today
    else:
        d = max(date, git_date("-G", re.escape(slug), "--", "src/data"))
    out[k] = {"date": d, "hash": h}
STATIC = {
    "": ["src/data/articles.js", "src/components/home-exact"],
    "/projects": ["src/data/content.js"], "/categories": ["src/data/articles.js"],
    "/about": ["src/components/pages/about-page.js"], "/contact": ["src/components/pages/contact-page.js"],
    "/faq": ["src/components/pages/faq-page.js"],
    "/semver-compare": ["src/components/pages/semver-compare-page.js"],
    "/semver-range-checker": ["src/components/pages/semver-range-page.js", "src/lib/semver-range.js"],
}
for k, files in STATIC.items():
    out[k] = {"date": git_date("--", *files)}
out["/projects/*"] = {"date": git_date("--", "src/data/content.js", "src/components/project-article")}
out["/categories/*"] = {"date": out["/categories"]["date"]}
json.dump(out, open(OUT, "w"), indent=1, sort_keys=True)
print(len(out), "chemins", sorted({v["date"] for v in out.values()})[-3:])
