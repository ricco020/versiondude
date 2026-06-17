"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";
import { getArticles, categoryLabel } from "@/data/articles";

// Page catégorie : grille de cartes robuste (bootstrap), rendu fiable. + sidebar derniers articles.
export default function CategoryPage({ locale = "en", categoryKey, title, items }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  const side = getArticles(locale).filter((a) => a.category !== categoryKey).slice(0, 6);
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col"><h1 className="mb-sm-0"><strong>{title}</strong></h1></div>
              <div className="col-12 col-sm-auto">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-inline-block">
                    <li className="breadcrumb-item"><Link href={`${p}/`}>{s.ui.home}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row g-4">
            {/* GRID */}
            <div className="col-lg-8">
              <div className="row g-4">
                {items.map((x) => (
                  <div className="col-md-6" key={x.slug}>
                    <article className="card h-100 border-0 shadow-sm">
                      <Link href={x.href}>
                        <img loading="lazy" decoding="async" src={x.img} className="card-img-top" alt={x.alt} style={{ height: 200, objectFit: "cover" }} />
                      </Link>
                      <div className="card-body">
                        <span className="badge bg-danger mb-2">{title}</span>
                        <h3 className="h5 card-title">
                          <Link href={x.href} className="text-dark text-decoration-none stretched-link">{x.title}</Link>
                        </h3>
                        {x.desc ? <p className="card-text text-muted small">{x.desc}</p> : null}
                        <div className="text-muted small">{s.ui.by} VersionDude{x.meta ? ` · ${x.meta}` : ""}</div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="bg-light p-3 rounded">
                <h4 className="h6 border-bottom pb-2 mb-3">{s.ui.latest}</h4>
                {side.map((o) => (
                  <div className="d-flex gap-3 mb-3" key={o.slug}>
                    <Link href={`${p}/articles/${o.slug}`} className="flex-shrink-0">
                      <img loading="lazy" decoding="async" src={o.hero} alt={o.heroAlt} width={84} height={60} style={{ objectFit: "cover", borderRadius: 6 }} />
                    </Link>
                    <div>
                      <span className="badge bg-light text-danger border small">{categoryLabel(o.category, locale)}</span>
                      <h5 className="h6 mb-0 mt-1"><Link href={`${p}/articles/${o.slug}`} className="text-dark text-decoration-none">{o.title}</Link></h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
