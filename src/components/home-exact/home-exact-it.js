"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-it";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-it";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-it";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
export default function Home_it() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  const L = [...getArticles("it")].sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).slice(6);
  return (
    <Layout locale="it">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">VersionDude — standard web, parser e strumenti per sviluppatori</h1>
        {/* START NEWSTRICKER */}
        <NewsTicker />
        {/*  END OF /. NEWSTRICKER */}
        {/* START FEATURE SECTION */}
        <div
          className="bg-img feature-section py-4 py-lg-3 py-xl-4"
          data-image-src="/assets/images/bg-shape.png"
        >
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
                      <a href={articleHref(L[0].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[0].hero} alt={L[0].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[0].category,"it")}</span>
                        <h4><a href={articleHref(L[0].slug,"it")}>{L[0].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[1].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[1].hero} alt={L[1].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[1].category,"it")}</span>
                        <h4><a href={articleHref(L[1].slug,"it")}>{L[1].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[2].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[2].hero} alt={L[2].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[2].category,"it")}</span>
                        <h4><a href={articleHref(L[2].slug,"it")}>{L[2].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
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
                      <a href={articleHref(L[3].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[3].hero} alt={L[3].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[3].category,"it")}</span>
                        <h4><a href={articleHref(L[3].slug,"it")}>{L[3].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[4].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[4].hero} alt={L[4].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[4].category,"it")}</span>
                        <h4><a href={articleHref(L[4].slug,"it")}>{L[4].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[5].slug,"it")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[5].hero} alt={L[5].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[5].category,"it")}</span>
                        <h4><a href={articleHref(L[5].slug,"it")}>{L[5].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Di <span className="editor-name">VersionDude</span></li>
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
              <StickyBox >
                <div className="panel_header">
                  <h4>
                    <strong>Top </strong> Storie
                  </h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/it/articles/strumenti-gestione-segreti">Strumenti di gestione dei segreti per sviluppatori</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Strumenti</span>
                          </li>
                          </ul>
                        <p>Perché l'open source conta per un gestore di password, e i progetti di cui fidarsi.</p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/it/articles/recensione-proton-mail">Recensione di Proton Mail: l'email cifrata</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Archivio</span>
                          </li>
                          </ul>
                        <p>Cosa significa davvero l'email cifrata, e i servizi che la prendono sul serio.</p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/it/articles/migliori-servizi-email-cifrata">I migliori servizi di email cifrata</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Standard</span>
                          </li>
                          </ul>
                        <p>Il Document Object Model è l'albero che un browser costruisce a partire dal tuo HTML.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* START NAV TABS */}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0 active"
                        id="most-viewed"
                        data-bs-toggle="tab"
                        data-bs-target="#most-viewed-pane"
                        type="button"
                        role="tab"
                        aria-controls="most-viewed-pane"
                        aria-selected="true"
                      >
                        Più letti
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="popular-news"
                        data-bs-toggle="tab"
                        data-bs-target="#popular-news-pane"
                        type="button"
                        role="tab"
                        aria-controls="popular-news-pane"
                        aria-selected="false"
                      >
                        Popolari
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="most-viewed-pane"
                      role="tabpanel"
                      aria-labelledby="most-viewed"
                      tabIndex={0}
                    >
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          <li>
                            <span className="count">01</span>
                            <span className="text">
                              <a href="/it/articles/migliori-gestori-password-open-source">I migliori gestori di password open source</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="/it/articles/gestori-password-self-hosted">Gestori di password self-hosted</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="/it/articles/strumenti-gestione-segreti">Strumenti di gestione dei segreti per sviluppatori</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="/it/articles/recensione-proton-mail">Recensione di Proton Mail: l'email cifrata</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="/it/articles/migliori-servizi-email-cifrata">I migliori servizi di email cifrata</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="popular-news-pane"
                      role="tabpanel"
                      aria-labelledby="popular-news"
                      tabIndex={0}
                    >
                      <div className="popular-news">
                        <div className="p-post">
                          <h4>
                            <a href="/it/articles/recensione-proton-pass">Recensione di Proton Pass</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/it/categories/standards">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/it/articles/che-cos-e-il-dom">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="/it/articles/che-cos-e-il-dom">Che cos'è il DOM?</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/it/articles/validatore-html">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/it/articles/validatore-html">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                        <div className="p-post">
                          <h4>
                            <a href="/it/articles/validatore-html">Cosa fa un validatore HTML</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/it/articles/che-cos-e-il-dom">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/it/articles/che-cos-e-il-dom">
                                <i className="ti ti ti-thumb-up" />
                                15 likes
                              </a>
                            </li>
                          </ul>
                          <div className="reatting-2">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END OF /. NAV TABS */}
              </StickyBox>
            </div>
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <StickyBox>
                {/* START POST CATEGORY STYLE ONE (Popolari) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href="/it/articles/che-cos-e-un-parser">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/secrets-management-tools-hero.jpg"
                            width={345}
                            alt="Che cos'è un parser?"
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="/it/articles/che-cos-e-un-parser">Che cos'è un parser?</a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Parsing</span>
                          </li>
                          <li>
                            Di <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                        <p>Come un parser trasforma il markup grezzo in un albero strutturato — e il recupero degli errori standardizzato che mette d'accordo tutti i browser.</p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Popolari) */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/migliori-gestori-password-open-source">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-mail-review-hero.jpg"
                              className="img-fluid"
                              alt="I migliori gestori di password open source"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/migliori-gestori-password-open-source" className="title">I migliori gestori di password open source</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/gestori-password-self-hosted">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-hero.jpg"
                              className="img-fluid"
                              alt="Gestori di password self-hosted"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/gestori-password-self-hosted" className="title">Gestori di password self-hosted</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/strumenti-gestione-segreti">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-pass-review-hero.jpg"
                              className="img-fluid"
                              alt="Strumenti di gestione dei segreti per sviluppatori"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/strumenti-gestione-segreti" className="title">Strumenti di gestione dei segreti per sviluppatori</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/recensione-proton-mail">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-hero.jpg"
                              className="img-fluid"
                              alt="Recensione di Proton Mail: l'email cifrata"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/recensione-proton-mail" className="title">Recensione di Proton Mail: l'email cifrata</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/migliori-servizi-email-cifrata">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/html-validator-hero.jpg"
                              className="img-fluid"
                              alt="I migliori servizi di email cifrata"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/migliori-servizi-email-cifrata" className="title">I migliori servizi di email cifrata</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/it/articles/recensione-proton-pass">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-a-parser-hero.jpg"
                              className="img-fluid"
                              alt="Recensione di Proton Pass"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/it/articles/recensione-proton-pass" className="title">Recensione di Proton Pass</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
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
                    <h4>
                      <strong>Sfoglia</strong> le categorie
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/semantic-web-hero.jpg"
                    >
                      <a
                        href="/it/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standard
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/xml-vs-html-hero.jpg"
                    >
                      <a
                        href="/it/categories/parsing"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Parsing
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/ruby-on-rails-cms-hero.jpg"
                    >
                      <a
                        href="/it/categories/tooling"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Tooling
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/character-encoding-utf-8-hero.jpg"
                    >
                      <a
                        href="/it/categories/archive"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Archivio
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/self-hosted-cms-hero.jpg"
                    >
                      <a
                        href="/it/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standard
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="/it/categories" className="fw-bold text-primary-hover">
                        <u>Vedi tutte le categorie</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Ultime</strong> recensioni
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="/it/articles/migliori-gestori-password-open-source" className="news-image">
                        <img loading="lazy" decoding="async"
                          src="/assets/articles/open-source-password-managers-body.jpg"
                          alt="I migliori gestori di password open source"
                          className="img-fluid w-100"
                        />
                      </a>
                      <div className="reatting">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="post-text">
                        {/* <span class="post-category">Strumenti</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Archivio</span>
                          </li>
                          </ul>
                        <h4 className="mb-0">
                          Che cos'è il DOM?
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/it/articles/che-cos-e-il-dom" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/secrets-management-tools-body.jpg"
                              alt="Che cos'è il DOM?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/it/articles/che-cos-e-il-dom" className="title">Che cos'è il DOM?</a>
                          </h5>
                          <div className="reviews-reatting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/it/articles/validatore-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-body.jpg"
                              alt="Cosa fa un validatore HTML"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/it/articles/validatore-html" className="title">Cosa fa un validatore HTML</a>
                          </h5>
                          <div className="reviews-reatting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="news-list-item p-0">
                        <div className="img-wrapper">
                          <a href="/it/articles/che-cos-e-un-parser" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-body.jpg"
                              alt="Che cos'è un parser?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/it/articles/che-cos-e-un-parser" className="title">Che cos'è un parser?</a>
                          </h5>
                          <div className="reviews-reatting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
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
                  {/* START TECH & INNOVATION */}
                  <div className="panel_inner">
                    <div className="panel_header" style={{ marginTop: "2.5rem" }}>
                      <h4>
                        <strong>Strumenti &amp;</strong> Standard
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/it/articles/web-semantico" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/semantic-web-body.jpg"
                            alt="Il web semantico, spiegato"
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="/it/articles/web-semantico">Il web semantico, spiegato</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Standard</span>
                          </li>
                          </ul>
                        <p>Consigli pratici e indipendenti sugli strumenti che gli sviluppatori e i lettori attenti alla privacy usano davvero.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/it/articles/xml-contro-html">XML vs HTML: qual è la differenza?</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/it/articles/cms-ruby-on-rails">I CMS in Ruby on Rails</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/it/articles/codifica-dei-caratteri-utf-8">La codifica dei caratteri e perché UTF-8 ha vinto</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                  </div>
                  {/* END OF /. TECH & INNOVATION */}
                  {/* START EDITOR'S PICKS */}
                  <div className="panel_inner mb-0">
                    <div className="panel_header">
                      <h4>
                        <strong>SCELTE</strong> DELLA REDAZIONE
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/it/articles/cms-self-hosted" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/projects/html5-parser-hero.jpg"
                            alt="I CMS self-hosted da conoscere"
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="/it/articles/cms-self-hosted">I CMS self-hosted da conoscere</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Parsing</span>
                          </li>
                          </ul>
                        <p>Consigli pratici e indipendenti sugli strumenti che gli sviluppatori e i lettori attenti alla privacy usano davvero.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/it/projects/html5-parser">Parser HTML5 (htmlparser)</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/it/projects/validator-nu">Validator.nu</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/it/projects/railfrog">Railfrog</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                  </div>
                  {/* END OF /. EDITOR'S PICKS */}
                </StickyBox>
              </div>
              <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
                <StickyBox>
                  {/* START POST CATEGORY STYLE FOUR (Latest articles ) */}
                  <div className="post-inner">
                    {/*post header*/}
                    <div className="post-head" style={{ marginTop: "2.5rem" }}>
                      <h2 className="title">
                        <strong>Ultimi</strong> articoli
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/it/articles/web-semantico" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/validator-nu-hero.jpg"
                              alt="Il web semantico, spiegato"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/it/articles/web-semantico" className="title">Il web semantico, spiegato</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Strumenti</span>
                            </li>
                            <li>
                              Di <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Un validatore HTML verifica il tuo markup rispetto al living standard.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/it/articles/xml-contro-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/railfrog-hero.jpg"
                              alt="XML vs HTML: qual è la differenza?"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/it/articles/xml-contro-html" className="title">XML vs HTML: qual è la differenza?</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Archivio</span>
                            </li>
                            <li>
                              Di <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Come un parser trasforma il testo grezzo in dati strutturati e utilizzabili.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/it/articles/cms-ruby-on-rails" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/pellet-hero.jpg"
                              alt="I CMS in Ruby on Rails"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/it/articles/cms-ruby-on-rails" className="title">I CMS in Ruby on Rails</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Standard</span>
                            </li>
                            <li>
                              Di <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">L'idea di un web di dati, dove il significato è leggibile dalle macchine.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/it/articles/codifica-dei-caratteri-utf-8" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/bersirc-hero.jpg"
                              alt="La codifica dei caratteri e perché UTF-8 ha vinto"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/it/articles/codifica-dei-caratteri-utf-8" className="title">La codifica dei caratteri e perché UTF-8 ha vinto</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Parsing</span>
                            </li>
                            <li>
                              Di <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Mantieni chiavi API e segreti cifrati, con accesso controllato e fuori da git.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/it/articles/cms-self-hosted" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/open-source-password-managers-hero.jpg"
                              alt="I CMS self-hosted da conoscere"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/it/articles/cms-self-hosted" className="title">I CMS self-hosted da conoscere</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Strumenti</span>
                            </li>
                            <li>
                              Di <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Ospitare il proprio gestore di password significa mantenere il controllo della cassaforte.</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /. post body */}
                    {/*Post footer*/}
                    <div className="post-footer">
                      <div className="row thm-margin">
                        <div className="col-md-8 thm-padding">
                          {/* pagination */}
                          {" "}
                          {/* /.pagination */}
                        </div>
                        <div className="col-md-4 d-md-block d-none thm-padding">
                          <div className="social">
                            <ul>
                              <li>
                                <div className="share transition">
                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="ico fb">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fversiondude.net%2F&text=VersionDude" target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="ico tw">
                                    <i className="fab fa-twitter" />
                                  </a>
                                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="ico rs">
                                    <i className="fab fa-linkedin-in" />
                                  </a>
                                  <a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fversiondude.net%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="ico pin">
                                    <i className="fab fa-pinterest-p" />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /.Post footer*/}
                  </div>
                  {/* END OF /. POST CATEGORY STYLE FOUR (Latest articles ) */}
                  
                </StickyBox>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  
                  
                  {/* START ARCHIVE */}
                  <div className="archive-wrapper">
                    
                  </div>
                  {/* END OF /. ARCHIVE */}
                  {/* START POLL WIDGET */}
                  
                  {/* END OF /. POLL WIDGET */}
                  {/* START TAGS */}
                  <Tags locale="it" />
                  {/* END OF /. TAGS */}
                </StickyBox>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}

    </Layout>

  )
}
