// NewsTicker STATIQUE (SSR, sans Owl/jQuery) — allège la home pour le PSI.
const NewsTicker = () => (
  <div className="container">
    <div className="newstricker_inner">
      <div className="trending"><strong>Trending</strong> Now</div>
      <div className="news-ticker owl-theme">
        <div className="item"><a href="/articles/open-source-password-managers">The best open-source password managers</a></div>
      </div>
    </div>
  </div>
);
export default NewsTicker;
