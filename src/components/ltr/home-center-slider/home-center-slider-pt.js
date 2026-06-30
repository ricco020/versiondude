// Hero central STATIQUE + DYNAMIQUE (SSR, sans Owl) - article le plus récent. Pas de carousel.
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
const LOCALE = "pt";
const HomeCenterStatic = () => {
  const list = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const a = list[0];
  if (!a) return null;
  return (
    <div id="owl-slider" className="owl-static">
      <div className="item">
        <div className="slider-post post-height-1">
          <a href={articleHref(a.slug, LOCALE)} className="news-image">
            <img loading="eager" fetchPriority="high" decoding="async" src={a.hero || a.body} alt={a.title} className="img-fluid" width="900" height="500" />
          </a>
          <div className="post-text">
            <span className="post-category">{categoryLabel(a.category, LOCALE)}</span>
            <h2><a href={articleHref(a.slug, LOCALE)}>{a.title}</a></h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCenterStatic;
