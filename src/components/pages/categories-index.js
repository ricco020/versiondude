"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";
import { getArticles } from "@/data/articles";
import { getProjects, projectImages } from "@/data/content";

const CATS = ["standards", "parsing", "tooling", "archive"];

// Index des catégories : une carte par catégorie (image d'un article du thème + nb d'articles).
export default function CategoriesIndex({ locale = "en" }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  const arts = getArticles(locale);
  const projs = getProjects(locale);
  const cards = CATS.map((c) => {
    const a = arts.find((x) => x.category === c);
    const count = arts.filter((x) => x.category === c).length + projs.filter((x) => x.category === c).length;
    const img = a ? a.hero : projectImages(projs.find((x) => x.category === c)?.slug || "html5-parser").hero;
    return { key: c, label: s.cats[c], img, count };
  });
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col"><h1 className="mb-sm-0"><strong>{s.ui.category}</strong></h1></div>
              <div className="col-12 col-sm-auto">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-inline-block">
                    <li className="breadcrumb-item"><Link href={`${p}/`}>{s.ui.home}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{s.ui.category}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="row g-4">
            {cards.map((c) => (
              <div className="col-md-6 col-lg-3" key={c.key}>
                <Link href={`${p}/categories/${c.key}`} className="text-decoration-none">
                  <article className="card border-0 shadow-sm h-100">
                    <img loading="lazy" decoding="async" src={c.img} className="card-img-top" alt={c.label} style={{ height: 150, objectFit: "cover" }} />
                    <div className="card-body text-center">
                      <h3 className="h5 mb-1 text-dark">{c.label}</h3>
                      <span className="text-muted small">{c.count} {s.nav.articles}</span>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
