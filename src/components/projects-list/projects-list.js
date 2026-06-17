"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

// Index projets : grille de cartes magazine robuste (bootstrap).
export default function ProjectsList({ locale = "en", title, intro, projects }) {
  const p = locale === "en" ? "" : `/${locale}`;
  const s = t(locale);
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
          <p className="lead text-muted mb-4">{intro}</p>
          <div className="row g-4">
            {projects.map((pr) => (
              <div className="col-md-6 col-lg-4" key={pr.slug}>
                <article className="card h-100 border-0 shadow-sm">
                  <Link href={`${p}/projects/${pr.slug}`}>
                    <img src={pr.hero} className="card-img-top" alt={pr.heroAlt} style={{ height: 190, objectFit: "cover" }} />
                  </Link>
                  <div className="card-body">
                    <span className="badge bg-secondary mb-2">{pr.status}</span>
                    <h3 className="h5 card-title">
                      <Link href={`${p}/projects/${pr.slug}`} className="text-dark text-decoration-none stretched-link">{pr.name}</Link>
                    </h3>
                    <p className="card-text text-muted small">{pr.excerpt}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
