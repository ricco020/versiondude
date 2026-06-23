"use client";
import { useState, useEffect, useRef } from "react";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
const LOCALE = "pt";
// Featured : 1 rangée scrollable (scrollbar masquée) + flèches gauche/droite. Tri date desc.
const HomeFeatureCarousal = () => {
  const scroller = useRef(null);
  const scroll = (dir) => { if (scroller.current) scroller.current.scrollBy({ left: dir * 340, behavior: "smooth" }); };
  const pool = [...getArticles(LOCALE)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const head = pool[0];
  const [rest, setRest] = useState(pool.slice(1, 6));
  useEffect(() => {
    const cand = pool.slice(1, Math.min(12, pool.length));
    for (let i = cand.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cand[i], cand[j]] = [cand[j], cand[i]]; }
    setRest(cand.slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const all = head ? [head, ...rest] : rest;
  const Card = ({ a, priority }) => (
    <div className="feat-card">
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href={articleHref(a.slug, LOCALE)} className="thumb">
            <img decoding="async" src={a.body || a.hero} alt={a.title} className="img-fluid" width="640" height="360"
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
    <div className="featured-wrap">
      <button type="button" className="feat-arrow feat-arrow-left" aria-label="Prev" onClick={() => scroll(-1)}>&#8249;</button>
      <div className="featured-scroll" ref={scroller}>
        {all.map((a, i) => <Card a={a} priority={i === 0} key={a.slug} />)}
      </div>
      <button type="button" className="feat-arrow feat-arrow-right" aria-label="Next" onClick={() => scroll(1)}>&#8250;</button>
    </div>
  );
};
export default HomeFeatureCarousal;
