"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css/animate.css";
import { getContent } from "@/data/content";
import { localeHref, mediaFor } from "@/lib/site";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const HomeFeatureCarousal = () => {
  const locale = useLocale();
  const t = useTranslations();
  const { projects, articles } = getContent(locale);
  const items = [
    { href: localeHref(locale, "/reference"), title: articles[0].title, category: articles[0].category, slug: articles[0].slug },
    ...projects.map((p) => ({ href: localeHref(locale, `/projects/${p.slug}`), title: p.name, category: p.category, slug: p.slug })),
  ];

  return (
    <OwlCarousel
      className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{ 0: { items: 1, autoplay: true }, 576: { items: 2 }, 768: { items: 2.5 }, 992: { items: 3.5 }, 1200: { items: 4 } }}
    >
      {items.map((it) => {
        const media = mediaFor(it.slug, locale);
        return (
          <div className="news-list-item" key={it.slug}>
            <div className="img-wrapper">
              <Link href={it.href} className="thumb">
                <img src={media.img} alt={media.alt} className="img-fluid" />
                <div className="link-icon">
                  <i className="fa fa-camera" />
                </div>
              </Link>
            </div>
            <div className="post-info-2">
              <span className="post-category">{t(`categories.${it.category}`)}</span>
              <h5 className="mb-0">
                <Link href={it.href}>{it.title}</Link>
              </h5>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;
