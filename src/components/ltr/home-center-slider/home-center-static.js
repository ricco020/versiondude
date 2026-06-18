// Hero central STATIQUE (SSR) — remplace le carousel Owl client (LCP tardif). Garde id="owl-slider" (CSS existant).
const HomeCenterStatic = () => (
  <div id="owl-slider" className="owl-theme owl-static">
    <div className="item">
      <div className="slider-post post-height-1">
        <a href="/articles/open-source-password-managers" className="news-image">
          <img loading="eager" fetchPriority="high" decoding="async"
            src="/assets/articles/self-hosted-password-managers-body.jpg"
            alt="The best open-source password managers" className="img-fluid" />
        </a>
        <div className="post-text">
          <span className="post-category">Tooling</span>
          <h2><a href="/articles/open-source-password-managers">The best open-source password managers</a></h2>
          <ul className="align-items-center authar-info d-flex flex-wrap gap-1"><li>By <span className="editor-name">VersionDude</span></li></ul>
        </div>
      </div>
    </div>
  </div>
);
export default HomeCenterStatic;
