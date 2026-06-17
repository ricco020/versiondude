"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

// Rendu d'un article dans le design d'article de la démo (post_details_block) + CTA affilié perso (Pilier 2).
export default function ArticlePage({ article, catLabel, relatedHref, relatedLabel, home = "" }) {
  const loc = home === "/fr" ? "fr" : home === "/es" ? "es" : "en";
  const s = t(loc);
  return (
    <LayoutTwo locale={loc}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col"><h1 className="mb-sm-0"><strong>{article.title}</strong></h1></div>
              <div className="col-12 col-sm-auto">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-inline-block">
                    <li className="breadcrumb-item"><Link href={home || "/"}>{s.ui.home}</Link></li>
                    <li className="breadcrumb-item">{catLabel}</li>
                    <li className="breadcrumb-item active" aria-current="page">{article.title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-m">
            <div className="col-md-8 col-p main-content">
              <div className="post_details_inner">
                <div className="post_details_block">
                  <figure>
                    <img src={article.hero} className="img-fluid" alt={article.heroAlt} width={690} height={460} />
                  </figure>
                  <ul className="authar-info d-flex flex-wrap">
                    <li><span className="link">VersionDude</span></li>
                    <li>{catLabel}</li>
                    <li>{article.readingMinutes} {s.ui.readMin}</li>
                  </ul>

                  <p><strong>{article.dek}</strong></p>
                  {article.paras.map((p, i) => (<p key={i}>{p}</p>))}

                  {article.list && (
                    <ul className="arrow_list">
                      {article.list.map((li, i) => (<li key={i}>{li}</li>))}
                    </ul>
                  )}

                  <figure className="align-left">
                    <img src={article.body} alt={article.bodyCaption} width={300} height={362} />
                    <figcaption>{article.bodyCaption}</figcaption>
                  </figure>

                  {article.cta && (
                    <aside className="article_comment" style={{ borderLeftColor: "#6d4aff" }}>
                      <p style={{ marginBottom: ".75rem" }}>{article.cta.sublabel}</p>
                      <a href={article.cta.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                         className="btn btn-primary">{article.cta.label} &rarr;</a>
                    </aside>
                  )}

                  {relatedHref && (
                    <p style={{ marginTop: "1.5rem" }}>
                      {s.ui.related}: <Link href={relatedHref} className="link">{relatedLabel}</Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
