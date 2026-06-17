"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import StickyBox from "react-sticky-box";
import Link from "next/link";
import { t } from "@/data/site-i18n";
import { getArticles, categoryLabel, getSections, articleHref } from "@/data/articles";

// Article fidèle au post-template démo + structure éditoriale magazine (chapô lettrine, intertitres H2,
// citation, image légendée, sidebar onglets). Contenu réel, sans fake.
export default function ArticlePage({ article, catLabel, relatedHref, relatedLabel, home = "" }) {
  const loc = home === "/fr" ? "fr" : home === "/es" ? "es" : "en";
  const s = t(loc);
  const p = home;
  const all = getArticles(loc).filter((x) => x.slug !== article.slug);
  const sideA = all.slice(0, 5);
  const sideB = all.slice(5, 10);
  const related = all.slice(0, 3);
  const sections = getSections(article, loc);
  const tags = [catLabel, "open source", "web", "VersionDude"];
  let pIndex = 0; // pour placer image + liste + citation à des endroits variés

  return (
    <LayoutTwo locale={loc}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col"><h1 className="mb-sm-0"><strong>{catLabel}</strong></h1></div>
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
            <div className="col-md-8 col-p main-content">
              <StickyBox>
                <div className="post_details_inner">
                  <div className="post_details_block">
                    <figure className="social-icon">
                      <img loading="lazy" decoding="async" src={article.hero} className="img-fluid" alt={article.heroAlt} />
                      <div>
                        <span className="ico fb"><i className="fab fa-facebook-f" /></span>
                        <span className="ico tw"><i className="fab fa-twitter" /></span>
                        <span className="ico in"><i className="fab fa-linkedin-in" /></span>
                      </div>
                    </figure>

                    <h2 style={{ borderLeft: "none", paddingLeft: 0, fontSize: "2.2rem" }}>{article.title}</h2>
                    <ul className="authar-info d-flex flex-wrap">
                      <li><span className="link">VersionDude</span></li>
                      <li>{catLabel}</li>
                      <li>{article.readingMinutes} {s.ui.readMin}</li>
                    </ul>

                    <p className="lead">{article.dek}</p>

                    {sections.map((sec, si) => (
                      <div key={si}>
                        {sec.heading ? <h2>{sec.heading}</h2> : null}
                        {sec.paras.map((para, pi) => {
                          pIndex++;
                          const blocks = [<p key={pi}>{para}</p>];
                          // image in-body après la 1re section
                          if (si === 1 && pi === 0) {
                            blocks.unshift(
                              <figure className="align-left" key="img">
                                <img loading="lazy" decoding="async" src={article.body} alt={article.bodyCaption} />
                                <figcaption>{article.bodyCaption}</figcaption>
                              </figure>
                            );
                          }
                          // liste après la 2e section
                          if (si === 2 && pi === 0 && article.list) {
                            blocks.push(
                              <ul className="arrow_list" key="list">
                                {article.list.map((li, j) => (<li key={j}>{li}</li>))}
                              </ul>
                            );
                          }
                          return blocks;
                        })}
                        {/* citation en exergue : dernier para de l'avant-dernière section */}
                        {si === sections.length - 2 && sec.paras.length > 0 ? (
                          <div className="article_comment">
                            <p>{sec.paras[sec.paras.length - 1]}</p>
                            <div className="customers">— VersionDude</div>
                          </div>
                        ) : null}
                      </div>
                    ))}

                    {article.cta && (
                      <aside className="vd-cta">
                        <p>{article.cta.sublabel}</p>
                        <a href={article.cta.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn btn-primary">{article.cta.label} &rarr;</a>
                      </aside>
                    )}

                    <div className="tags d-flex flex-wrap gap-2 align-items-center mt-4">
                      <strong>#</strong>
                      {tags.map((tg, i) => (<Link key={i} href={`${p}/categories/${article.category}`} className="badge bg-light text-dark text-decoration-none">{tg}</Link>))}
                    </div>
                  </div>
                </div>

                <div className="post-inner post-inner-2 mt-4">
                  <div className="post-head"><h2 className="title" style={{ borderLeft: "none", paddingLeft: 0 }}><strong>{s.ui.related}</strong></h2></div>
                  <div className="post-body">
                    <div className="row">
                      {related.map((r) => (
                        <div className="col-sm-4" key={r.slug}>
                          <div className="slider-post post-height-4">
                            <Link href={articleHref(r.slug, loc)} className="news-image">
                              <img loading="lazy" decoding="async" src={r.hero} alt={r.heroAlt} className="img-fluid" />
                            </Link>
                            <div className="post-text">
                              <span className="post-category">{categoryLabel(r.category, loc)}</span>
                              <h4><Link href={articleHref(r.slug, loc)}>{r.title}</Link></h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StickyBox>
            </div>

            <div className="col-md-4 col-p rightSidebar">
              <StickyBox offsetTop={20}>
                {article.cta && (
                  <div className="add-inner text-center p-4 mb-3" style={{ background: "#f6f4ff", borderRadius: 12 }}>
                    <p className="fw-semibold mb-2">{article.cta.sublabel}</p>
                    <a href={article.cta.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn btn-primary btn-sm">{article.cta.label}</a>
                  </div>
                )}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="sideTab" role="tablist">
                    <li className="nav-item" role="presentation"><button className="nav-link border-0 active" id="mv" data-bs-toggle="tab" data-bs-target="#mv-pane" type="button" role="tab" aria-controls="mv-pane" aria-selected="true">{s.ui.latest}</button></li>
                    <li className="nav-item" role="presentation"><button className="nav-link border-0" id="pn" data-bs-toggle="tab" data-bs-target="#pn-pane" type="button" role="tab" aria-controls="pn-pane" aria-selected="false">{s.ui.projects}</button></li>
                  </ul>
                  <div className="tab-content" id="sideTabContent">
                    <div className="tab-pane fade show active" id="mv-pane" role="tabpanel" aria-labelledby="mv" tabIndex={0}>
                      <div className="most-viewed"><ul className="content tabs-content">
                        {sideA.map((o, i) => (<li key={o.slug}><span className="count">{String(i + 1).padStart(2, "0")}</span><span className="text"><Link href={articleHref(o.slug, loc)}>{o.title}</Link></span></li>))}
                      </ul></div>
                    </div>
                    <div className="tab-pane fade" id="pn-pane" role="tabpanel" aria-labelledby="pn" tabIndex={0}>
                      <div className="most-viewed"><ul className="content tabs-content">
                        {sideB.map((o, i) => (<li key={o.slug}><span className="count">{String(i + 1).padStart(2, "0")}</span><span className="text"><Link href={articleHref(o.slug, loc)}>{o.title}</Link></span></li>))}
                      </ul></div>
                    </div>
                  </div>
                </div>
                {relatedHref && (<div className="mt-3"><p>{s.ui.related}: <Link href={relatedHref} className="link">{relatedLabel}</Link></p></div>)}
              </StickyBox>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
