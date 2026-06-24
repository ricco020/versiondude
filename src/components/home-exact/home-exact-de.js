"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-de";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-de";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-de";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
export default function Home_de() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  const L = [...getArticles("de")].sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).slice(6);
  return (
    <Layout locale="de">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">VersionDude — Webstandards, Parser & Entwickler-Tools</h1>
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
                      <a href={articleHref(L[0].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[0].hero} alt={L[0].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[0].category,"de")}</span>
                        <h4><a href={articleHref(L[0].slug,"de")}>{L[0].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[1].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[1].hero} alt={L[1].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[1].category,"de")}</span>
                        <h4><a href={articleHref(L[1].slug,"de")}>{L[1].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[2].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[2].hero} alt={L[2].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[2].category,"de")}</span>
                        <h4><a href={articleHref(L[2].slug,"de")}>{L[2].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
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
                      <a href={articleHref(L[3].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[3].hero} alt={L[3].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[3].category,"de")}</span>
                        <h4><a href={articleHref(L[3].slug,"de")}>{L[3].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[4].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[4].hero} alt={L[4].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[4].category,"de")}</span>
                        <h4><a href={articleHref(L[4].slug,"de")}>{L[4].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[5].slug,"de")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[5].hero} alt={L[5].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[5].category,"de")}</span>
                        <h4><a href={articleHref(L[5].slug,"de")}>{L[5].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Von <span className="editor-name">VersionDude</span></li>
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
                    <strong>Top </strong> Stories
                  </h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/de/articles/secrets-management-werkzeuge">Secrets-Management-Werkzeuge für Entwickler</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Werkzeuge</span>
                          </li>
                          </ul>
                        <p>Warum Open Source bei einem Passwortmanager zählt — und welche Projekte vertrauenswürdig sind.</p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/de/articles/proton-mail-test">Proton Mail im Test: verschlüsselte E-Mail</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Archiv</span>
                          </li>
                          </ul>
                        <p>Was verschlüsselte E-Mail wirklich bedeutet — und welche Dienste es ernst meinen.</p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/de/articles/beste-verschluesselte-email-dienste">Die besten verschlüsselten E-Mail-Dienste</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Standards</span>
                          </li>
                          </ul>
                        <p>Das Document Object Model ist der Baum, den ein Browser aus Ihrem HTML aufbaut.</p>
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
                        Meistgelesen
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
                        Beliebt
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
                              <a href="/de/articles/beste-open-source-passwortmanager">Die besten Open-Source-Passwortmanager</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="/de/articles/selbstgehostete-passwortmanager">Selbstgehostete Passwortmanager</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="/de/articles/secrets-management-werkzeuge">Secrets-Management-Werkzeuge für Entwickler</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="/de/articles/proton-mail-test">Proton Mail im Test: verschlüsselte E-Mail</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="/de/articles/beste-verschluesselte-email-dienste">Die besten verschlüsselten E-Mail-Dienste</a>
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
                            <a href="/de/articles/proton-pass-test">Proton Pass im Test</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/de/categories/standards">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/de/articles/was-ist-das-dom">
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
                            <a href="/de/articles/was-ist-das-dom">Was ist das DOM?</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/de/articles/html-validator">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/de/articles/html-validator">
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
                            <a href="/de/articles/html-validator">Was ein HTML-Validator leistet</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/de/articles/was-ist-das-dom">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/de/articles/was-ist-das-dom">
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
                {/* START POST CATEGORY STYLE ONE (Beliebt) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href="/de/articles/was-ist-ein-parser">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/what-is-a-parser-hero.jpg"
                            width={345}
                            alt="Was ist ein Parser?"
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="/de/articles/was-ist-ein-parser">Was ist ein Parser?</a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Parsing</span>
                          </li>
                          <li>
                            Von <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                        <p>Wie ein Parser rohes Markup in einen strukturierten Baum verwandelt — und die normierte Fehlerbehandlung, die alle Browser übereinstimmen lässt.</p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Beliebt) */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/beste-open-source-passwortmanager">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/open-source-password-managers-hero.jpg"
                              className="img-fluid"
                              alt="Die besten Open-Source-Passwortmanager"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/beste-open-source-passwortmanager" className="title">Die besten Open-Source-Passwortmanager</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/selbstgehostete-passwortmanager">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/self-hosted-password-managers-hero.jpg"
                              className="img-fluid"
                              alt="Selbstgehostete Passwortmanager"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/selbstgehostete-passwortmanager" className="title">Selbstgehostete Passwortmanager</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/secrets-management-werkzeuge">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/secrets-management-tools-hero.jpg"
                              className="img-fluid"
                              alt="Secrets-Management-Werkzeuge für Entwickler"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/secrets-management-werkzeuge" className="title">Secrets-Management-Werkzeuge für Entwickler</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/proton-mail-test">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-mail-review-hero.jpg"
                              className="img-fluid"
                              alt="Proton Mail im Test: verschlüsselte E-Mail"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/proton-mail-test" className="title">Proton Mail im Test: verschlüsselte E-Mail</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/beste-verschluesselte-email-dienste">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-hero.jpg"
                              className="img-fluid"
                              alt="Die besten verschlüsselten E-Mail-Dienste"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/beste-verschluesselte-email-dienste" className="title">Die besten verschlüsselten E-Mail-Dienste</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/de/articles/proton-pass-test">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-pass-review-hero.jpg"
                              className="img-fluid"
                              alt="Proton Pass im Test"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/de/articles/proton-pass-test" className="title">Proton Pass im Test</a>
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
                      <strong>Kategorien</strong> durchsuchen
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/semantic-web-hero.jpg"
                    >
                      <a
                        href="/de/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standards
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/xml-vs-html-hero.jpg"
                    >
                      <a
                        href="/de/categories/parsing"
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
                        href="/de/categories/tooling"
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
                        href="/de/categories/archive"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Archiv
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/self-hosted-cms-hero.jpg"
                    >
                      <a
                        href="/de/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standards
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="/de/categories" className="fw-bold text-primary-hover">
                        <u>Alle Kategorien ansehen</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Neueste</strong> Reviews
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="/de/articles/beste-open-source-passwortmanager" className="news-image">
                        <img loading="lazy" decoding="async"
                          src="/assets/articles/open-source-password-managers-hero.jpg"
                          alt="Die besten Open-Source-Passwortmanager"
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
                        {/* <span class="post-category">Werkzeuge</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Archiv</span>
                          </li>
                          </ul>
                        <h4 className="mb-0">
                          Was ist das DOM?
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/de/articles/was-ist-das-dom" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-hero.jpg"
                              alt="Was ist das DOM?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/de/articles/was-ist-das-dom" className="title">Was ist das DOM?</a>
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
                          <a href="/de/articles/html-validator" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/html-validator-hero.jpg"
                              alt="Was ein HTML-Validator leistet"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/de/articles/html-validator" className="title">Was ein HTML-Validator leistet</a>
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
                          <a href="/de/articles/was-ist-ein-parser" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-a-parser-hero.jpg"
                              alt="Was ist ein Parser?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/de/articles/was-ist-ein-parser" className="title">Was ist ein Parser?</a>
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
                        <strong>Werkzeuge &amp;</strong> Standards
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/de/articles/semantisches-web" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/semantic-web-hero.jpg"
                            alt="Das semantische Web, erklärt"
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="/de/articles/semantisches-web">Das semantische Web, erklärt</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Standards</span>
                          </li>
                          </ul>
                        <p>Praktische, unabhängige Ratschläge zu den Werkzeugen, die Entwickler und datenschutzbewusste Leser wirklich nutzen.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/de/articles/xml-vs-html">XML vs. HTML: Wo liegt der Unterschied?</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/de/articles/ruby-on-rails-cms">Content-Management-Systeme auf Ruby on Rails</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/de/articles/zeichenkodierung-utf-8">Zeichenkodierung und warum sich UTF-8 durchsetzte</a>
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
                        <strong>REDAKTIONS-</strong> TIPPS
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/de/articles/selbstgehostete-cms" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/self-hosted-cms-hero.jpg"
                            alt="Selbstgehostete CMS, die man kennen sollte"
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="/de/articles/selbstgehostete-cms">Selbstgehostete CMS, die man kennen sollte</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Parsing</span>
                          </li>
                          </ul>
                        <p>Praktische, unabhängige Ratschläge zu den Werkzeugen, die Entwickler und datenschutzbewusste Leser wirklich nutzen.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/de/projects/html5-parser">HTML5-Parser (htmlparser)</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/de/projects/validator-nu">Validator.nu</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/de/projects/railfrog">Railfrog</a>
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
                        <strong>Neueste</strong> Artikel
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/de/articles/semantisches-web" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/semantic-web-hero.jpg"
                              alt="Das semantische Web, erklärt"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/de/articles/semantisches-web" className="title">Das semantische Web, erklärt</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Werkzeuge</span>
                            </li>
                            <li>
                              Von <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Ein HTML-Validator prüft Ihr Markup gegen den Living Standard.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/de/articles/xml-vs-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/xml-vs-html-hero.jpg"
                              alt="XML vs. HTML: Wo liegt der Unterschied?"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/de/articles/xml-vs-html" className="title">XML vs. HTML: Wo liegt der Unterschied?</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Archiv</span>
                            </li>
                            <li>
                              Von <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Wie ein Parser rohen Text in strukturierte, nutzbare Daten verwandelt.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/de/articles/ruby-on-rails-cms" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/ruby-on-rails-cms-hero.jpg"
                              alt="Content-Management-Systeme auf Ruby on Rails"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/de/articles/ruby-on-rails-cms" className="title">Content-Management-Systeme auf Ruby on Rails</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Standards</span>
                            </li>
                            <li>
                              Von <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Die Idee eines Web der Daten, in dem Bedeutung maschinenlesbar ist.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/de/articles/zeichenkodierung-utf-8" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/character-encoding-utf-8-hero.jpg"
                              alt="Zeichenkodierung und warum sich UTF-8 durchsetzte"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/de/articles/zeichenkodierung-utf-8" className="title">Zeichenkodierung und warum sich UTF-8 durchsetzte</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Parsing</span>
                            </li>
                            <li>
                              Von <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Halten Sie API-Schlüssel und Geheimnisse verschlüsselt, zugriffskontrolliert und außerhalb von Git.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/de/articles/selbstgehostete-cms" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/self-hosted-cms-hero.jpg"
                              alt="Selbstgehostete CMS, die man kennen sollte"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/de/articles/selbstgehostete-cms" className="title">Selbstgehostete CMS, die man kennen sollte</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Werkzeuge</span>
                            </li>
                            <li>
                              Von <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Den eigenen Passwortmanager zu hosten heißt, die Kontrolle über den Tresor zu behalten.</p>
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
                  <Tags locale="de" />
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
