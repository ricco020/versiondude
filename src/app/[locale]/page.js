"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal";
import { getContent } from "@/data/content";
import { localeHref, mediaFor } from "@/lib/site";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();
  const { projects, articles } = getContent(locale);
  const ref = articles[0];
  const cat = (k) => t(`categories.${k}`);
  const refHref = localeHref(locale, "/reference");
  const refMedia = mediaFor(ref.slug, locale);

  return (
    <main className="page_main_wrapper">
      {/* FEATURE SECTION */}
      <div className="bg-img feature-section py-4 py-lg-3 py-xl-4">
        <div className="container">
          <HomeFeatureCarousal />
        </div>
      </div>

      {/* HERO POST BLOCK */}
      <section className="slider-inner py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="slider-post post-height-1">
                <Link href={refHref} className="news-image">
                  <img src={refMedia.img} alt={refMedia.alt} className="img-fluid w-100" style={{ aspectRatio: "16/9", objectFit: "cover" }} />
                </Link>
                <div className="post-text pt-3">
                  <span className="post-category">{cat(ref.category)}</span>
                  <h2 className="mt-2"><Link href={refHref}>{ref.title}</Link></h2>
                  <p className="mt-2" style={{ opacity: 0.8 }}>{ref.dek}</p>
                  <ul className="align-items-center authar-info d-flex flex-wrap gap-2">
                    <li>{t("article.updated")}</li>
                    <li>{ref.readingMinutes} {t("article.minRead")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-4">
                {projects.slice(0, 2).map((p) => {
                  const m = mediaFor(p.slug, locale);
                  return (
                    <div className="col-sm-6 col-lg-12" key={p.slug}>
                      <div className="slider-post post-height-4">
                        <Link href={localeHref(locale, `/projects/${p.slug}`)} className="news-image">
                          <img src={m.img} alt={m.alt} className="img-fluid w-100" style={{ aspectRatio: "16/9", objectFit: "cover" }} />
                        </Link>
                        <div className="post-text pt-2">
                          <span className="post-category">{cat(p.category)}</span>
                          <h4 className="mt-1"><Link href={localeHref(locale, `/projects/${p.slug}`)}>{p.name}</Link></h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN GRID + SIDEBAR */}
      <section className="py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="section-title d-flex align-items-center gap-2 mb-4">
                <span style={{ display: "inline-block", width: 6, height: 24, background: "#DC2626" }} />
                <h3 className="m-0 text-uppercase">{t("home.latest")}</h3>
              </div>
              <div className="row g-4">
                {projects.map((p) => {
                  const m = mediaFor(p.slug, locale);
                  return (
                    <div className="col-sm-6" key={p.slug}>
                      <div className="slider-post post-height-4">
                        <Link href={localeHref(locale, `/projects/${p.slug}`)} className="news-image">
                          <img src={m.img} alt={m.alt} className="img-fluid w-100" style={{ aspectRatio: "16/9", objectFit: "cover" }} />
                        </Link>
                        <div className="post-text pt-2">
                          <span className="post-category">{cat(p.category)}</span>
                          <h4 className="mt-1"><Link href={localeHref(locale, `/projects/${p.slug}`)}>{p.name}</Link></h4>
                          <p className="mt-1" style={{ opacity: 0.75, fontSize: ".92rem" }}>{p.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="section-title d-flex align-items-center gap-2 mb-4">
                <span style={{ display: "inline-block", width: 6, height: 24, background: "#DC2626" }} />
                <h3 className="m-0 text-uppercase">{t("home.sidebarTitle")}</h3>
              </div>
              <ul className="list-unstyled m-0">
                {projects.slice(0, 4).map((p, i) => (
                  <li key={p.slug} className="d-flex gap-3 py-3 border-bottom">
                    <span style={{ fontFamily: "var(--font-cormorant-garamond)", fontWeight: 700, fontSize: "1.8rem", opacity: 0.4 }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h5 className="m-0"><Link href={localeHref(locale, `/projects/${p.slug}`)}>{p.name}</Link></h5>
                      <span className="post-category">{cat(p.category)}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 rounded" style={{ background: "#191717", color: "#fff" }}>
                <h4 style={{ fontFamily: "var(--font-cormorant-garamond)" }}>{t("home.ctaTitle")}</h4>
                <p style={{ opacity: 0.85, fontSize: ".92rem" }}>{t("home.ctaText")}</p>
                <Link href={refHref} className="btn btn-news m-0">{t("home.readReference")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
