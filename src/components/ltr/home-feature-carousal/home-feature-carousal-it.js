// Featured : défilement HORIZONTAL automatique (marquee CSS), SANS flèches - Eric 2026-06-23. Tri date desc, nouveaux en tête.
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
const LOCALE = "it";
const HomeFeatureCarousal = () => {
  const pool = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 10);
  const loop = pool.concat(pool);
  const Card = ({ a, priority }) => (
    <div className="feat-card">
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href={articleHref(a.slug, LOCALE)} className="thumb">
            <img decoding="async" src={a.hero || a.body} alt={a.title} className="img-fluid" width="640" height="360"
              loading={priority ? "eager" : "lazy"} fetchpriority={priority ? "high" : "auto"} />
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">{categoryLabel(a.category, LOCALE)}</span>
          <h5 className="mb-0"><a href={articleHref(a.slug, LOCALE)} className="title">{a.title}</a></h5>
        </div>
      </div>
    </div>
  );
  return (
    <div className="feat-marquee-mask">
      <div className="feat-marquee-track">
        {loop.map((a, i) => <Card a={a} priority={i === 0} key={i} />)}
      </div>
    </div>
  );
};
export default HomeFeatureCarousal;
