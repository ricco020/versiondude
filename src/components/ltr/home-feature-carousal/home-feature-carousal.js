
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import { getArticles } from "@/data/articles";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");

// Featured carousel = les derniers articles publiés (tri par date desc).
// Data-driven : tout nouvel article remonte automatiquement dans le hero.
const HomeFeatureCarousal = () => {
  const items = getArticles("en")
    .slice()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, 8);

  return (
    <OwlCarousel className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{
        0: { items: 1, autoplay: true },
        576: { items: 2 },
        768: { items: 2.5 },
        992: { items: 3.5 },
        1200: { items: 4 }
      }}
    >
      {items.map((a) => (
        <div className="news-list-item" key={a.slug}>
          <div className="img-wrapper">
            <a href={`/articles/${a.slug}`} className="thumb">
              <img loading="lazy" decoding="async"
                src={a.body || a.hero}
                alt={a.title}
                className="img-fluid"
              />
              <div className="link-icon">
                <i className="fa fa-camera" />
              </div>
            </a>
          </div>
          <div className="post-info-2">
            <span className="post-category">{cap(a.category)}</span>
            <h5 className="mb-0">
              <a href={`/articles/${a.slug}`} className="title">{a.title}</a>
            </h5>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;
