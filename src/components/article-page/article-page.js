"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";
import { getArticles, categoryLabel } from "@/data/articles";

// Design d'article fidèle au post-template de la démo : colonne article 8/12 + sidebar 4/12,
// partage social, méta auteur, citation, liste, image in-body légendée, tags, CTA affilié, articles liés.
export default function ArticlePage({ article, catLabel, relatedHref, relatedLabel, home = "" }) {
  const loc = home === "/fr" ? "fr" : home === "/es" ? "es" : "en";
  const s = t(loc);
  const p = home;
  const others = getArticles(loc).filter((x) => x.slug !== article.slug).slice(0, 5);
  const tags = [catLabel, "VersionDude", "open source", "web"];
  // citation = 1er paragraphe mis en exergue ; corps = reste
  const [lead, ...rest] = article.paras;
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
                    <li className="breadcrumb-item"><Link href={p || "/"}>{s.ui.home}</Link></li>
                    <li className="breadcrumb-item"><Link href={`${p}/categories/${article.category}`}>{catLabel}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{article.title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-m">
            {/* MAIN */}
            <div className="col-md-8 col-p main-content">
              <div className="post_details_inner">
                <div className="post_details_block">
                  <figure className="social-icon">
                    <img src={article.hero} className="img-fluid" alt={article.heroAlt} width={690} height={460} />
                    <div>
                      <span><i className="fab fa-facebook-f" /></span>
                      <span><i className="fab fa-twitter" /></span>
                      <span><i className="fab fa-linkedin-in" /></span>
                    </div>
                  </figure>

                  <ul className="authar-info d-flex flex-wrap">
                    <li><span className="link">VersionDude</span></li>
                    <li>{catLabel}</li>
                    <li>{article.readingMinutes} {s.ui.readMin}</li>
                  </ul>

                  <p className="lead"><strong>{article.dek}</strong></p>
                  <p>{lead}</p>

                  {rest.slice(0, 1).map((para, i) => (
                    <div className="article_comment" key={`q${i}`}><p>{para}</p></div>
                  ))}
                  {rest.slice(1).map((para, i) => {
                    const out = [<p key={i}>{para}</p>];
                    if (i === 1 && article.list) {
                      out.push(
                        <ul className="arrow_list" key="list">
                          {article.list.map((li, j) => (<li key={j}>{li}</li>))}
                        </ul>
                      );
                    }
                    if (i === 2) {
                      out.push(
                        <figure className="align-left" key="img">
                          <img src={article.body} alt={article.bodyCaption} width={300} height={362} />
                          <figcaption>{article.bodyCaption}</figcaption>
                        </figure>
                      );
                    }
                    return out;
                  })}

                  {article.cta && (
                    <aside className="article_comment" style={{ borderLeftColor: "#6d4aff", background: "#f6f4ff" }}>
                      <p style={{ marginBottom: ".75rem", fontWeight: 600 }}>{article.cta.sublabel}</p>
                      <a href={article.cta.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn btn-primary">{article.cta.label} &rarr;</a>
                    </aside>
                  )}

                  <div className="tags d-flex flex-wrap gap-2 align-items-center mt-4">
                    <strong>#</strong>
                    {tags.map((tg, i) => (<Link key={i} href={`${p}/`} className="badge bg-light text-dark text-decoration-none">{tg}</Link>))}
                  </div>

                  {relatedHref && (
                    <p style={{ marginTop: "1.5rem" }}>{s.ui.related}: <Link href={relatedHref} className="link">{relatedLabel}</Link></p>
                  )}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-md-4 sidebar">
              <div className="widget">
                <h4 className="widget-title border-bottom pb-2 mb-3">{s.ui.latest}</h4>
                <ul className="list-unstyled">
                  {others.map((o) => (
                    <li className="d-flex gap-3 mb-3" key={o.slug}>
                      <Link href={`${p}/articles/${o.slug}`} className="flex-shrink-0">
                        <img src={o.hero} alt={o.heroAlt} width={92} height={64} style={{ objectFit: "cover", borderRadius: 6 }} />
                      </Link>
                      <div>
                        <span className="post-category small text-danger">{categoryLabel(o.category, loc)}</span>
                        <h6 className="mb-0"><Link href={`${p}/articles/${o.slug}`} className="text-dark text-decoration-none">{o.title}</Link></h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
