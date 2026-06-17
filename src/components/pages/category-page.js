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
