"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-fr";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-fr";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-fr";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
export default function Home_fr() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  return (
    <Layout locale="fr">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
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
                      <Link href="/fr/articles/open-source-password-managers" className="news-image">
                        <img
                          src="/assets/articles/open-source-password-managers-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-text">
                        <span className="post-category">Standards</span>
                        <h4><Link href="/fr/articles/open-source-password-managers">Les meilleurs gestionnaires de mots de passe open source</Link>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <Link href="/fr/articles/self-hosted-password-managers" className="news-image">
                        <img
                          src="/assets/articles/self-hosted-password-managers-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-text">
                        <span className="post-category">Analyse</span>
                        <h4><Link href="/fr/articles/self-hosted-password-managers">Gestionnaires de mots de passe auto-hébergés</Link>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <Link href="/fr/articles/secrets-management-tools" className="news-image">
                        <img
                          src="/assets/articles/secrets-management-tools-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-text">
                        <span className="post-category">Outils</span>
                        <h4><Link href="/fr/articles/secrets-management-tools">Outils de gestion des secrets pour développeurs</Link>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
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
                      <Link href="/fr/articles/proton-mail-review" className="news-image">
                        <img
                          src="/assets/articles/proton-mail-review-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                      <div className="post-text">
                        <span className="post-category">Archive</span>
                        <h4><Link href="/fr/articles/proton-mail-review">Test de Proton Mail : l'email chiffré</Link>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href="/fr/" className="news-image">
                        <img
                          src="/assets/articles/open-source-password-managers-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Standards</span>
                        <h4>
                          <a href="/fr/articles/open-source-password-managers">Les meilleurs gestionnaires de mots de passe open source</a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href="/fr/" className="news-image">
                        <img
                          src="/assets/articles/self-hosted-password-managers-hero.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Analyse</span>
                        <h4>
                          <a href="/fr/articles/self-hosted-password-managers">Gestionnaires de mots de passe auto-hébergés</a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
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
                          <a href="/fr/articles/secrets-management-tools">Outils de gestion des secrets pour développeurs</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Outils</span>
                          </li>
                          </ul>
                        <p>Pourquoi l'open source compte pour un gestionnaire de mots de passe, et les projets dignes de confiance.</p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/fr/articles/proton-mail-review">Test de Proton Mail : l'email chiffré</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Archive</span>
                          </li>
                          </ul>
                        <p>Ce que signifie vraiment l'email chiffré, et les services qui le font sérieusement.</p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/fr/articles/best-encrypted-email">Les meilleurs services d'email chiffré</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Standards</span>
                          </li>
                          </ul>
                        <p>Le Document Object Model est l'arbre qu'un navigateur construit à partir de votre HTML.</p>
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
                        Most Viewed
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
                        Popular news
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
                              <a href="/fr/">
                                South Africa bounce back on eventful day
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="/fr/">
                                Steyn ruled out of series with shoulder fracture
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="/fr/">
                                BCCI asks ECB to bear expenses of team's India tour
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="/fr/">
                                Duminy, Elgar tons set Australia huge target
                              </a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="/fr/">
                                English spinners are third-class citizens, says
                                Graeme Swann
                              </a>
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
                            <a href="/fr/articles/proton-pass-review">Test de Proton Pass</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/fr/">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/fr/">
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
                            <a href="/fr/articles/what-is-the-dom">Qu'est-ce que le DOM ?</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/fr/">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/fr/">
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
                            <a href="/fr/articles/html-validator">À quoi sert un validateur HTML</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/fr/">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/fr/">
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
                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href="">
                          <img
                            src="/assets/articles/secrets-management-tools-hero.jpg"
                            width={345}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="/fr/articles/what-is-a-parser">Qu'est-ce qu'un parseur ?</a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Analyse</span>
                          </li>
                          <li>
                            Par <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                        <p>Comment un parseur transforme le balisage brut en arbre structuré — et la récupération d'erreurs normalisée qui met tous les navigateurs d'accord.</p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/proton-mail-review-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/open-source-password-managers" className="title">Les meilleurs gestionnaires de mots de passe open source</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/best-encrypted-email-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/self-hosted-password-managers" className="title">Gestionnaires de mots de passe auto-hébergés</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/proton-pass-review-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/secrets-management-tools" className="title">Outils de gestion des secrets pour développeurs</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/what-is-the-dom-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/proton-mail-review" className="title">Test de Proton Mail : l'email chiffré</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/html-validator-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/best-encrypted-email" className="title">Les meilleurs services d'email chiffré</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/fr/">
                            <img
                              src="/assets/articles/what-is-a-parser-hero.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/fr/articles/proton-pass-review" className="title">Test de Proton Pass</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                  
                </div>
                {/* END OF /. ADVERTISEMENT */}
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
              <StickyBox>
                {/* START SOCIAL COUNTER TEXT */}
                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                  <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                  <span className="fw-bold mx-1">2.5M</span> Followers
                </div>
                {/* END OF /. SOCIAL COUNTER TEXT */}
                {/* START SOCIAL ICON */}
                <div className="social-media-inner">
                  <ul className="g-1 row social-media">
                    <li className="col-4">
                      <a href="/fr/" className="rss">
                        <i className="fas fa-rss" />
                        <div>2,035</div>
                        <p>Abonnés</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="/fr/" className="fb">
                        <i className="fab fa-facebook-f" />
                        <div>3,794</div>
                        <p>Fans</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="/fr/" className="insta">
                        <i className="fab fa-instagram" />
                        <div>941</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="/fr/" className="you_tube">
                        <i className="fab fa-youtube" />
                        <div>7,820</div>
                        <p>Abonnés</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="/fr/" className="twitter">
                        <i className="fab fa-twitter" />
                        <div>1,562</div>
                        <p>Followers</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="/fr/" className="pint">
                        <i className="fab fa-pinterest-p" />
                        <div>1,310</div>
                        <p>Followers</p>
                      </a>
                    </li>
                  </ul>{" "}
                  {/* /.social icon */}
                </div>
                {/* END OF /. SOCIAL ICON */}
                {/* START TRENDING TOPICS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Parcourir</strong> les catégories
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/semantic-web-hero.jpg"
                    >
                      <a
                        href="/fr/categories/standards"
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
                        href="/fr/categories/parsing"
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
                        href="/fr/categories/tooling"
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
                        href="/fr/categories/archive"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Archive
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/self-hosted-cms-hero.jpg"
                    >
                      <a
                        href="/fr/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standards
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="/fr/" className="fw-bold text-primary-hover">
                        <u>Voir toutes les catégories</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Derniers</strong> Reviews
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="/fr/" className="news-image">
                        <img
                          src="/assets/articles/open-source-password-managers-body.jpg"
                          alt=""
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
                        {/* <span class="post-category">Outils</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Archive</span>
                          </li>
                          </ul>
                        <h4 className="mb-0">
                          Quisque tincidunt metus a lacinia faucibus.
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/fr/articles/open-source-password-managers" className="thumb">
                            <img
                              src="/assets/articles/secrets-management-tools-body.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/fr/articles/what-is-the-dom" className="title">Qu'est-ce que le DOM ?</a>
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
                          <a href="/fr/articles/self-hosted-password-managers" className="thumb">
                            <img
                              src="/assets/articles/best-encrypted-email-body.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/fr/articles/html-validator" className="title">À quoi sert un validateur HTML</a>
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
                          <a href="/fr/articles/secrets-management-tools" className="thumb">
                            <img
                              src="/assets/articles/what-is-the-dom-body.jpg"
                              alt=""
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/fr/articles/what-is-a-parser" className="title">Qu'est-ce qu'un parseur ?</a>
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
        {/* START YOUTUBE VIDEO */}
        <div className="mb-4 py-5 position-relative video-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6 text-center">
                <h3 className="text-white">Dernières vidéos</h3>
                <p className="text-white mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </div>
            
          </div>
        </div>
        {/* END OF /. YOUTUBE VIDEO */}
        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-md-3 leftSidebar d-none d-xl-block">
                <StickyBox>
                  {/* START TECH & INNOVATION */}
                  <div className="panel_inner">
                    <div className="panel_header">
                      <h4>
                        <strong>Outils &amp;</strong> Standards
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/fr/" className="d-block mb-3">
                          <img
                            src="/assets/articles/semantic-web-body.jpg"
                            alt=""
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="/fr/articles/semantic-web">Le web sémantique, expliqué</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Standards</span>
                          </li>
                          </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/fr/articles/xml-vs-html">XML vs HTML : quelle différence ?</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/fr/articles/ruby-on-rails-cms">Les CMS en Ruby on Rails</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/fr/articles/character-encoding-utf-8">L'encodage des caractères et pourquoi UTF-8 a gagné</a>
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
                        <strong>EDITOR'S</strong> PICKS
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/fr/" className="d-block mb-3">
                          <img
                            src="/assets/projects/html5-parser-hero.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="/fr/articles/self-hosted-cms">Les CMS auto-hébergés à connaître</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Analyse</span>
                          </li>
                          </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/fr/projects/html5-parser">Parseur HTML5 (htmlparser)</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/fr/projects/validator-nu">Validator.nu</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/fr/projects/railfrog">Railfrog</a>
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
                    <div className="post-head">
                      <h2 className="title">
                        <strong>Derniers</strong> articles
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/fr/articles/proton-mail-review" className="thumb">
                            <img
                              src="/assets/projects/validator-nu-hero.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/fr/articles/semantic-web" className="title">Le web sémantique, expliqué</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Outils</span>
                            </li>
                            <li>
                              Par <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Un validateur HTML vérifie votre balisage face au standard vivant.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/fr/articles/best-encrypted-email" className="thumb">
                            <img
                              src="/assets/projects/railfrog-hero.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/fr/articles/xml-vs-html" className="title">XML vs HTML : quelle différence ?</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Archive</span>
                            </li>
                            <li>
                              Par <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Comment un parseur transforme du texte brut en données structurées exploitables.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/fr/articles/proton-pass-review" className="thumb">
                            <img
                              src="/assets/projects/pellet-hero.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/fr/articles/ruby-on-rails-cms" className="title">Les CMS en Ruby on Rails</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Standards</span>
                            </li>
                            <li>
                              Par <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">L'idée d'un web de données, où le sens est lisible par les machines.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/fr/articles/what-is-the-dom" className="thumb">
                            <img
                              src="/assets/projects/bersirc-hero.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/fr/articles/character-encoding-utf-8" className="title">L'encodage des caractères et pourquoi UTF-8 a gagné</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Analyse</span>
                            </li>
                            <li>
                              Par <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Gardez clés d'API et secrets chiffrés, à accès contrôlé et hors de git.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/fr/articles/html-validator" className="thumb">
                            <img
                              src="/assets/articles/open-source-password-managers-hero.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/fr/articles/self-hosted-cms" className="title">Les CMS auto-hébergés à connaître</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Outils</span>
                            </li>
                            <li>
                              Par <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Héberger son propre gestionnaire de mots de passe, c'est garder la main sur son coffre.</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /. post body */}
                    {/*Post footer*/}
                    <div className="post-footer">
                      <div className="row thm-margin">
                        <div className="col-md-8 thm-padding">
                          {/* pagination */}
                          <ul className="pagination">
                            <li className="disabled">
                              <span className="ti ti-angle-left" />
                            </li>
                            <li className="active">
                              <span>1</span>
                            </li>
                            <li>
                              <a href="/fr/">2</a>
                            </li>
                            <li>
                              <a href="/fr/">3</a>
                            </li>
                            <li className="disabled">
                              <span className="extend">...</span>
                            </li>
                            <li></li>
                            <li>
                              <a href="/fr/">12</a>
                            </li>
                            <li>
                              <a href="/fr/">
                                <i className="ti ti-angle-right" />
                              </a>
                            </li>
                          </ul>{" "}
                          {/* /.pagination */}
                        </div>
                        <div className="col-md-4 d-md-block d-none thm-padding">
                          <div className="social">
                            <ul>
                              <li>
                                <div className="share transition">
                                  <a href="/fr/" target="_blank" className="ico fb">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                  <a href="/fr/" target="_blank" className="ico tw">
                                    <i className="fab fa-twitter" />
                                  </a>
                                  <a href="/fr/" target="_blank" className="ico rs">
                                    <i className="fas fa-rss" />
                                  </a>
                                  <a href="/fr/" target="_blank" className="ico pin">
                                    <i className="fab fa-pinterest-p" />
                                  </a>
                                  <i className="ti ti-share ico-share" />
                                </div>
                              </li>
                              <li>
                                <a href="/fr/">
                                  <i className="ti ti-heart" />
                                </a>
                              </li>
                              <li>
                                <a href="/fr/">
                                  <i className="ti ti-twitter" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /.Post footer*/}
                  </div>
                  {/* END OF /. POST CATEGORY STYLE FOUR (Latest articles ) */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner mb-0">
                    
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                </StickyBox>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  {/* START WEATHER */}
                  <div className="weather-wrapper-2 weather-bg-2">
                    <div className="weather-temperature">
                      <div className="weather-now">
                        <span className="big-degrees">39</span>
                        <span className="circle">°</span>
                        <span className="weather-unit">C</span>
                      </div>
                      <div className="weather-icon-2">
                        <SunnyWeather />
                      </div>
                    </div>
                    <div className="weather-info">
                      <div className="weather-name"></div>
                      <span>
                         <sup>°</sup>
                      </span>
                      <span></span>
                    </div>
                    <div className="weather-week-2">
                      <div className="weather-days">
                        <div className="day-0">Sun</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sunny" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-0">45</span>
                          <span className="td-circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-1">Mon</div>
                        <div className="day-icon">
                          <i className="wi wi-day-cloudy-high" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-1">21</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-2">Tue</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-2">29</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-3">Wed</div>
                        <div className="day-icon">
                          <i className="wi wi-day-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-3">19</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Thu</div>
                        <div className="day-icon">
                          <i className="wi wi-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-4">54</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Fri</div>
                        <div className="day-icon">
                          <i className="wi wi-smog" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-5">68</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Sat</div>
                        <div className="day-icon">
                          <i className="wi wi-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-6">28</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                    </div>
                    <div className="weather-footer">
                      <div className="weather-date">Saturday, March 26th</div>
                      <div className="weather-city">San Francisco, CA</div>
                    </div>
                  </div>
                  {/* END OF /. WEATHER */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner">
                    
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                  {/* START ARCHIVE */}
                  <div className="archive-wrapper">
                    
                  </div>
                  {/* END OF /. ARCHIVE */}
                  {/* START POLL WIDGET */}
                  
                  {/* END OF /. POLL WIDGET */}
                  {/* START TAGS */}
                  <Tags />
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
