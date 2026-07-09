// Tendances : ticker VERTICAL pas-à-pas avec pause entre chaque (sans owl/jQuery) - Eric 2026-06-23.
import { getArticles, articleHref } from "@/data/articles";
const LOCALE = "pt";
const NewsTicker = () => {
  const items = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))).slice(1, 7); // fenetre distincte : le plus recent est deja le hero central
  const loop = items.length ? items.concat([items[0]]) : items;
  return (
    <div className="container">
      <div className="newstricker_inner" style={{display:"flex",alignItems:"center",gap:"14px"}}>
        <div className="trending" style={{whiteSpace:"nowrap",flexShrink:0}}><strong>Tendências</strong></div>
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
