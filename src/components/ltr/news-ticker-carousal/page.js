// Tendances : ticker VERTICAL pas-à-pas avec pause entre chaque (sans owl/jQuery) - Eric 2026-06-23.
import { getArticles, articleHref } from "@/data/articles";
const LOCALE = "en";
const NewsTicker = () => {
  const items = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(0, 6);
  const loop = items.length ? items.concat([items[0]]) : items;
  return (
    <div className="container">
      <div className="newstricker_inner" style={{display:"flex",alignItems:"center",gap:"14px"}}>
        <div className="trending" style={{whiteSpace:"nowrap",flexShrink:0}}><strong>Trending</strong></div>
        <div className="v-tick-mask">
          <ul className="v-tick-track">
            {loop.map((a, i) => (<li className="v-tick-item" key={i}><a href={articleHref(a.slug, LOCALE)}>{a.title}</a></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NewsTicker;
