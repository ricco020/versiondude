// NewsTicker DÉFILANT (CSS marquee, sans Owl/jQuery) — derniers articles. Dynamique.
import { getArticles, articleHref } from "@/data/articles";
const LOCALE = "pt";
const NewsTicker = () => {
  const items = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 8);
  const loop = items.concat(items);
  return (
    <div className="container">
      <div className="newstricker_inner" style={{display:"flex",alignItems:"center",gap:"14px"}}>
        <div className="trending" style={{whiteSpace:"nowrap",flexShrink:0}}><strong>Tendências</strong></div>
        <div className="it-ticker-mask">
          <div className="it-ticker-track">
            {loop.map((a, i) => (<span className="item" key={i}><a href={articleHref(a.slug, LOCALE)}>{a.title}</a></span>))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsTicker;
