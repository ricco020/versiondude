"use client";
import { useState, useEffect } from "react";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";

const LOCALE = "it";

// Bloc "featured" STATIQUE (pas de carousel/défilement). Montre les articles récents,
// se met à jour avec les nouveaux (tri date desc) et TOURNE à chaque visite côté client
// (le visiteur ne voit pas toujours la même chose). Le plus récent reste en tête.
const HomeFeatureCarousal = () => {
  const pool = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const [items, setItems] = useState(pool.slice(0, 6));
  useEffect(() => {
    const recent = pool.slice(0, Math.min(10, pool.length));
    if (recent.length <= 1) { setItems(recent); return; }
    const head = recent[0];
    const rest = recent.slice(1);
    for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
    setItems([head, ...rest].slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="featured-static row g-3">
      {items.map((a) => (
        <div className="col-6 col-md-4 col-xl-2" key={a.slug}>
          <div className="news-list-item">
            <div className="img-wrapper">
              <a href={articleHref(a.slug, LOCALE)} className="thumb">
                <img loading="lazy" decoding="async" src={a.body || a.hero} alt={a.title} className="img-fluid" />
              </a>
            </div>
            <div className="post-info-2">
              <span className="post-category">{categoryLabel(a.category, LOCALE)}</span>
              <h5 className="mb-0"><a href={articleHref(a.slug, LOCALE)} className="title">{a.title}</a></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeatureCarousal;
