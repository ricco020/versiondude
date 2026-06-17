"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

export default function CategoryPage({ locale = "en", categoryKey, title, items }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <section className="inner-head bg-img" style={{ backgroundImage: "url('/assets/articles/what-is-the-dom-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container position-relative">
            <div className="row"><div className="col-sm-12">
              <h1 className="entry-title text-white">{title}</h1>
              <div className="breadcrumb"><ul className="clearfix">
                <li className="ib"><Link href={`${p}/`}>{s.ui.home}</Link></li>
                <li className="ib current-page">{title}</li>
              </ul></div>
            </div></div>
          </div>
        </section>
        <div className="container py-4">
          <div className="row">
            {items.map((x) => (
              <div className="col-md-4 col-sm-6 thm-padding mb-4" key={x.slug}>
                <div className="slider-post post-height-4">
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
              </div>
            ))}
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
