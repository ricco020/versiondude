"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-es";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-es";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-es";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";

const LOC = "es";

export default function Home() {
  useEffect(() => {
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  useBackgroundImageLoader();

  // Liste COMPLETE triee par date desc. Chaque section pioche une FENETRE DISTINCTE de A
  // (quasi-partition) : un article n'apparait au plus que dans UNE section editoriale + la
  // liste "Latest", au lieu de repeter les 6 memes articles de tete dans toutes les sections.
  // Tout le catalogue reste couvert (chemins de crawl, majorite a 1 clic).
  const A = [...getArticles(LOC)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const href = (s) => articleHref(s, LOC);
  const cat = (k) => categoryLabel(k, LOC);

  // POST BLOCK : 6 cartes sur une fenetre distincte (decalee du hero / feature / ticker).
  const L = A.slice(7, 13);
  // slices editoriales = quasi-partition de A (chaque article dans UNE seule de ces sections)
  const topStories  = A.slice(1, 4);                 // Top Stories
  const mostViewed  = A.slice(4, 9);                 // onglet Most Viewed
  const popularNews = A.slice(9, 12);                // onglet Popular news
  const featured    = A[0];                          // gros article en tete (Popular)
  const grid        = A.slice(12, 18);               // news-grid-2
  const reviews     = A.slice(18, 22);               // Latest Reviews (1 grande + 3 liste)
  // Tooling & Standards : set distinct (categorie tooling/standards) pris hors des fenetres ci-dessus
  const toolFeed    = A.filter((a) => a.category === "tooling" || a.category === "standards");
  const toolPick    = [A[13], A[14], A[21], A[22]].filter(Boolean);
  const toolsStacks = (toolPick.length === 4 ? toolPick : (toolFeed.length ? toolFeed : A).slice(-4));
  const editorPick  = A[A.length - 1];               // Editor's Picks = l'article le plus profond
  const latest      = A;                             // Latest = TOUT le catalogue (couverture crawl complete)

  return (
    <Layout locale="es">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">VersionDude - web standards, parsers &amp; developer tooling</h1>
        <NewsTicker />
        {/* START FEATURE SECTION */}
        <div className="bg-img feature-section py-4 py-lg-3 py-xl-4" data-image-src="/assets/images/bg-shape.png">
          <div className="container">
            <HomeFeatureCarousal />
          </div>
        </div>
        {/* END OF /. FEATURE SECTION */}
        {/* START POST BLOCK SECTION */}
        <section className="slider-inner">
          <div className="container-fluid p-0">
            <div className="row thm-margin">
              <div className="col-md-4 col-xxl-4 thm-padding d-md-none d-xxl-block">
                <div className="row slider-right-post thm-margin">
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={href(L[0].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[0].hero} alt={L[0].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[0].category)}</span>
                        <h4><a href={href(L[0].slug)}>{L[0].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={href(L[1].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[1].hero} alt={L[1].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[1].category)}</span>
                        <h4><a href={href(L[1].slug)}>{L[1].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={href(L[2].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[2].hero} alt={L[2].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[2].category)}</span>
                        <h4><a href={href(L[2].slug)}>{L[2].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="slider-wrapper">
                  <HomeCenterSlider />
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="row slider-right-post thm-margin">
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={href(L[3].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[3].hero} alt={L[3].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[3].category)}</span>
                        <h4><a href={href(L[3].slug)}>{L[3].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={href(L[4].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[4].hero} alt={L[4].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[4].category)}</span>
                        <h4><a href={href(L[4].slug)}>{L[4].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={href(L[5].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={L[5].hero} alt={L[5].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{cat(L[5].category)}</span>
                        <h4><a href={href(L[5].slug)}>{L[5].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF /. POST BLOCK SECTION */}
        <div className="container">
          <div className="row gx-lg-5">
            {/* START MAIN CONTENT */}
            <div className="col-md-3 leftSidebar d-none d-xl-block">
              <StickyBox>
                <div className="panel_header">
                  <h4><strong>Top </strong> Stories</h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    {topStories.map((a, i) => (
                      <li className={i === 2 ? "d-none d-xl-block post-grid" : "post-grid"} key={a.slug}>
                        <div className="posts-inner px-0">
                          <h6 className="posts-title"><a href={href(a.slug)}>{a.title}</a></h6>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li><span className="post-category">{cat(a.category)}</span></li>
                          </ul>
                          <p>{a.dek}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* START NAV TABS */}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link border-0 active" id="most-viewed" data-bs-toggle="tab" data-bs-target="#most-viewed-pane" type="button" role="tab" aria-controls="most-viewed-pane" aria-selected="true">Lo más visto</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link border-0" id="popular-news" data-bs-toggle="tab" data-bs-target="#popular-news-pane" type="button" role="tab" aria-controls="popular-news-pane" aria-selected="false">Populares</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="most-viewed-pane" role="tabpanel" aria-labelledby="most-viewed" tabIndex={0}>
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          {mostViewed.map((a, i) => (
                            <li key={a.slug}>
                              <span className="count">{String(i + 1).padStart(2, "0")}</span>
                              <span className="text"><a href={href(a.slug)}>{a.title}</a></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="popular-news-pane" role="tabpanel" aria-labelledby="popular-news" tabIndex={0}>
                      <div className="popular-news">
                        {popularNews.map((a) => (
                          <div className="p-post" key={a.slug}>
                            <h4><a href={href(a.slug)}>{a.title}</a></h4>
                            <ul className="authar-info d-flex flex-wrap justify-content-center">
                              <li className="date"><a href={href(a.slug)}><i className="ti ti ti-timer" /> </a></li>
                              <li className="like"><a href={href(a.slug)}><i className="ti ti ti-thumb-up" />{cat(a.category)}</a></li>
                            </ul>
                            <div className="reatting-2">
                              <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF /. NAV TABS */}
              </StickyBox>
            </div>
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <StickyBox>
                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                <div className="post-inner">
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href={href(featured.slug)}>
                          <img loading="lazy" decoding="async" src={featured.hero} width={345} alt={featured.title} className="img-fluid" />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4"><a href={href(featured.slug)}>{featured.title}</a></h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{cat(featured.category)}</span></li>
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                        <p>{featured.dek}</p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    {grid.map((a, i) => (
                      <div className="col-6 col-md-4 col-sm-6" key={a.slug}>
                        <div className="grid-item mb-0">
                          <div className="grid-item-img">
                            <a href={href(a.slug)}>
                              <img loading="lazy" decoding="async" src={a.hero} className="img-fluid" alt={a.title} />
                              <div className="link-icon"><i className={i % 2 ? "fa fa-camera" : "fa fa-play"} /></div>
                            </a>
                          </div>
                          <h5><a href={href(a.slug)} className="title">{a.title}</a></h5>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
              <StickyBox>
                {/* START TRENDING TOPICS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4><strong>Explorar</strong> categorías</h4>
                  </div>
                  <div className="panel_body">
                    {["standards", "parsing", "tooling", "archive"].map((k) => {
                      const pic = A.find((a) => a.category === k) || A[0];
                      return (
                        <div className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3" data-image-src={pic.hero} key={k}>
                          <a href={LOC === "en" ? `/categories/${k}` : `/${LOC}/categories/${k}`} className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white">{cat(k)}</a>
                        </div>
                      );
                    })}
                    <div className="text-center mt-3">
                      <a href={LOC === "en" ? "/categories" : `/${LOC}/categories`} className="fw-bold text-primary-hover"><u>Ver todas las categorías</u></a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4><strong>Últimos</strong> Reviews</h4>
                  </div>
                  <div className="panel_body">
                    {reviews[0] && (
                    <div className="more-post">
                      <a href={href(reviews[0].slug)} className="news-image">
                        <img loading="lazy" decoding="async" src={reviews[0].hero} alt={reviews[0].title} className="img-fluid w-100" />
                      </a>
                      <div className="reatting">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" /><i className="fa fa-star-o" />
                      </div>
                      <div className="post-text">
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li><span className="post-category mb-0">{cat(reviews[0].category)}</span></li>
                        </ul>
                        <h4 className="mb-0"><a href={href(reviews[0].slug)}>{reviews[0].title}</a></h4>
                      </div>
                    </div>
                    )}
                    <div className="mt-4 news-list">
                      {reviews.slice(1, 4).map((a, i) => (
                        <div className={i === 2 ? "news-list-item p-0" : "news-list-item p-0 mb-4"} key={a.slug}>
                          <div className="img-wrapper">
                            <a href={href(a.slug)} className="thumb">
                              <img loading="lazy" decoding="async" src={a.hero} alt={a.title} className="img-fluid" />
                              <div className="link-icon"><i className={i % 2 ? "fa fa-play" : "fa fa-camera"} /></div>
                            </a>
                          </div>
                          <div className="post-info-2">
                            <h5><a href={href(a.slug)} className="title">{a.title}</a></h5>
                            <div className="reviews-reatting">
                              <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* END OF /. LATEST REVIEWS */}
              </StickyBox>
            </div>
            {/* END OF /. SIDE CONTENT */}
          </div>
        </div>

        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-md-3 leftSidebar d-none d-xl-block">
                <StickyBox>
                  {/* START TOOLING & STANDARDS */}
                  <div className="panel_inner">
                    <div className="panel_header" style={{ marginTop: "2.5rem" }}>
                      <h4><strong>Herramientas &amp;</strong> Standards</h4>
                    </div>
                    <div className="panel_body">
                      {toolsStacks[0] && (
                      <div className="border-bottom">
                        <a href={href(toolsStacks[0].slug)} className="d-block mb-3">
                          <img loading="lazy" decoding="async" src={toolsStacks[0].hero} alt={toolsStacks[0].title} className="img-fluid w-100" />
                        </a>
                        <h5><a href={href(toolsStacks[0].slug)}>{toolsStacks[0].title}</a></h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{cat(toolsStacks[0].category)}</span></li>
                        </ul>
                        <p>{toolsStacks[0].dek}</p>
                      </div>
                      )}
                      {toolsStacks.slice(1, 4).map((a, i) => (
                        <div className={i === 2 ? "py-3 pb-0" : "border-bottom py-3"} key={a.slug}>
                          <h6 className="posts-title"><a href={href(a.slug)}>{a.title}</a></h6>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* END OF /. TOOLING & STANDARDS */}
                  {/* START EDITOR'S PICKS */}
                  <div className="panel_inner mb-0">
                    <div className="panel_header">
                      <h4><strong>SELECCIÓN</strong> EDITORIAL</h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href={href(editorPick.slug)} className="d-block mb-3">
                          <img loading="lazy" decoding="async" src={editorPick.hero} alt={editorPick.title} className="img-fluid" />
                        </a>
                        <h5><a href={href(editorPick.slug)}>{editorPick.title}</a></h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{cat(editorPick.category)}</span></li>
                        </ul>
                        <p>{editorPick.dek}</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title"><a href={LOC === "en" ? "/projects/html5-parser" : `/${LOC}/projects/html5-parser`}>HTML5 Parser (htmlparser)</a></h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title"><a href={LOC === "en" ? "/projects/validator-nu" : `/${LOC}/projects/validator-nu`}>Validator.nu</a></h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title"><a href={LOC === "en" ? "/projects/railfrog" : `/${LOC}/projects/railfrog`}>Railfrog</a></h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                      </div>
                    </div>
                  </div>
                  {/* END OF /. EDITOR'S PICKS */}
                </StickyBox>
              </div>
              <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
                <StickyBox>
                  {/* START POST CATEGORY STYLE FOUR (Latest articles) */}
                  <div className="post-inner">
                    <div className="post-head" style={{ marginTop: "2.5rem" }}>
                      <h2 className="title"><strong>Últimos</strong> articles</h2>
                    </div>
                    <div className="post-body">
                      {latest.map((a) => (
                        <div className="news-list-item articles-list" key={a.slug}>
                          <div className="img-wrapper">
                            <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                              <i className="fa-solid fa-bolt-lightning" />
                            </div>
                            <a href={href(a.slug)} className="thumb">
                              <img loading="lazy" decoding="async" src={a.hero} alt={a.title} className="img-fluid w-100" />
                            </a>
                          </div>
                          <div className="post-info-2">
                            <h4><a href={href(a.slug)} className="title">{a.title}</a></h4>
                            <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                              <li><span className="post-category mb-0">{cat(a.category)}</span></li>
                              <li>Por <span className="editor-name">VersionDude</span></li>
                            </ul>
                            <p className="d-lg-block d-none">{a.dek}</p>
                          </div>
                        </div>
                      ))}
                    </div>{" "}
                    <div className="post-footer">
                      <div className="row thm-margin">
                        <div className="col-md-8 thm-padding">{" "}</div>
                        <div className="col-md-4 d-md-block d-none thm-padding">
                          <div className="social">
                            <ul>
                              <li>
                                <div className="share transition">
                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="ico fb"><i className="fab fa-facebook-f" /></a>
                                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fversiondude.net%2F&text=VersionDude" target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="ico tw"><i className="fab fa-twitter" /></a>
                                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="ico rs"><i className="fab fa-linkedin-in" /></a>
                                  <a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="ico pin"><i className="fab fa-pinterest-p" /></a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                  {/* END OF /. POST CATEGORY STYLE FOUR */}
                </StickyBox>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  <div className="archive-wrapper"></div>
                  <Tags locale="es" />
                </StickyBox>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}
    </Layout>
  );
}
