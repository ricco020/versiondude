"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import StickyBox from "react-sticky-box";
import Link from "next/link";
import { t } from "@/data/site-i18n";
import { getArticles, categoryLabel } from "@/data/articles";

// Design fidèle à category-style de la démo : page-title + "une" en overlay + grille + sidebar.
export default function CategoryPage({ locale = "en", categoryKey, title, items }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  const featured = items.slice(0, 4);
  const grid = items.slice(4);
  const side = getArticles(locale).filter((a) => a.category !== categoryKey).slice(0, 5);

  const Overlay = ({ x }) => (
    <div className="slider-post post-height-2">
      <Link href={`${p}/${x.type}/${x.slug}`} className="news-image">
        <img src={x.img} alt={x.alt} className="img-fluid" />
      </Link>
      <div className="post-text">
        <span className="post-category">{title}</span>
        <h4><Link href={`${p}/${x.type}/${x.slug}`}>{x.title}</Link></h4>
        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
          <li>{s.ui.by} <span className="editor-name">VersionDude</span></li>
          {x.meta ? <li>{x.meta}</li> : null}
        </ul>
      </div>
    </div>
  );

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

        {/* FEATURED OVERLAY ROW */}
        <section className="slider-inner">
          <div className="container">
            <div className="row thm-margin">
              {featured.map((x, i) => (
                <div className={i === 0 ? "col-md-6 thm-padding" : "col-md-6 col-lg-2 thm-padding"} key={x.slug}><Overlay x={x} /></div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row row-m">
            {/* GRID */}
            <div className="col-md-8 col-p main-content">
              <div className="row">
                {grid.length === 0 && <div className="col-12"><p className="text-muted">{title}</p></div>}
                {grid.map((x) => (
                  <div className="col-sm-6 thm-padding mb-4" key={x.slug}>
                    <div className="slider-post post-height-4">
                      <Link href={`${p}/${x.type}/${x.slug}`} className="news-image">
                        <img src={x.img} alt={x.alt} className="img-fluid" />
                      </Link>
                      <div className="post-text">
                        <span className="post-category">{title}</span>
                        <h4><Link href={`${p}/${x.type}/${x.slug}`}>{x.title}</Link></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{s.ui.by} <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-md-4 col-p rightSidebar">
              <StickyBox offsetTop={20}>
                <div className="tabs-wrapper">
                  <h4 className="widget-title border-bottom pb-2 mb-3">{s.ui.latest}</h4>
                  <div className="most-viewed"><ul className="content tabs-content">
                    {side.map((o, i) => (
                      <li key={o.slug}><span className="count">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text"><Link href={`${p}/articles/${o.slug}`}>{o.title}</Link></span></li>
                    ))}
                  </ul></div>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
