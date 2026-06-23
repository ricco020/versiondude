// NewsTicker STATIQUE + DYNAMIQUE (SSR, sans Owl/jQuery) — derniers articles. Pas de carousel.
import { getArticles, articleHref } from "@/data/articles";
const LOCALE = "es";
const NewsTicker = () => {
  const items = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 6);
  return (
    <div className="container">
      <div className="newstricker_inner" style={{display:"flex",alignItems:"center",gap:"12px",overflow:"hidden",flexWrap:"nowrap"}}>
        <div className="trending" style={{whiteSpace:"nowrap",flexShrink:0}}><strong>Tendencias</strong></div>
        <div className="news-ticker-static" style={{display:"flex",gap:"18px",overflow:"hidden",whiteSpace:"nowrap"}}>
          {items.map((a) => (<span className="item" key={a.slug} style={{flexShrink:0}}><a href={articleHref(a.slug, LOCALE)}>{a.title}</a></span>))}
        </div>
      </div>
    </div>
  );
};
export default NewsTicker;
