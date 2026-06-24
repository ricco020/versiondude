"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-es";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-es";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-es";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
export default function Home_es() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  const L = [...getArticles("es")].sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).slice(6);
  return (
    <Layout locale="es">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">VersionDude — estándares web, parsers y herramientas dev</h1>
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
                      <a href={articleHref(L[0].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[0].hero} alt={L[0].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[0].category,"es")}</span>
                        <h4><a href={articleHref(L[0].slug,"es")}>{L[0].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[1].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[1].hero} alt={L[1].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[1].category,"es")}</span>
                        <h4><a href={articleHref(L[1].slug,"es")}>{L[1].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[2].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[2].hero} alt={L[2].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[2].category,"es")}</span>
                        <h4><a href={articleHref(L[2].slug,"es")}>{L[2].title}</a></h4>
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
                      <a href={articleHref(L[3].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[3].hero} alt={L[3].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[3].category,"es")}</span>
                        <h4><a href={articleHref(L[3].slug,"es")}>{L[3].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[4].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[4].hero} alt={L[4].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[4].category,"es")}</span>
                        <h4><a href={articleHref(L[4].slug,"es")}>{L[4].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[5].slug,"es")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[5].hero} alt={L[5].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[5].category,"es")}</span>
                        <h4><a href={articleHref(L[5].slug,"es")}>{L[5].title}</a></h4>
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
                          <a href="/es/articles/herramientas-de-gestion-de-secretos">Herramientas de gestión de secretos para desarrolladores</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Herramientas</span>
                          </li>
                          </ul>
                        <p>Por qué importa el código abierto en un gestor de contraseñas, y los proyectos en los que confiar.</p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/es/articles/analisis-proton-mail">Análisis de Proton Mail: correo cifrado</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Archivo</span>
                          </li>
                          </ul>
                        <p>Qué significa realmente el correo cifrado, y los servicios que lo hacen con credibilidad.</p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/es/articles/mejores-servicios-de-correo-cifrado">Los mejores servicios de correo cifrado</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Estándares</span>
                          </li>
                          </ul>
                        <p>El Document Object Model es el árbol que un navegador construye a partir de tu HTML.</p>
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
                        Lo más visto
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
                        Populares
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
                              <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto">Los mejores gestores de contraseñas de código abierto</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="/es/articles/gestores-de-contrasenas-autoalojados">Gestores de contraseñas autoalojados</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="/es/articles/herramientas-de-gestion-de-secretos">Herramientas de gestión de secretos para desarrolladores</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="/es/articles/analisis-proton-mail">Análisis de Proton Mail: correo cifrado</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="/es/articles/mejores-servicios-de-correo-cifrado">Los mejores servicios de correo cifrado</a>
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
                            <a href="/es/articles/analisis-proton-pass">Análisis de Proton Pass</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/es/categories/standards">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/es/articles/que-es-el-dom">
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
                            <a href="/es/articles/que-es-el-dom">¿Qué es el DOM?</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/es/articles/validador-html">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/es/articles/validador-html">
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
                            <a href="/es/articles/validador-html">Qué hace un validador de HTML</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/es/articles/que-es-el-dom">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/es/articles/que-es-el-dom">
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
                {/* START POST CATEGORY STYLE ONE (Populares) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href="/es/articles/que-es-un-analizador">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/what-is-a-parser-hero.jpg"
                            width={345}
                            alt="¿Qué es un analizador?"
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="/es/articles/que-es-un-analizador">¿Qué es un analizador?</a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Análisis</span>
                          </li>
                          <li>
                            Por <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                        <p>Cómo un analizador convierte el marcado en un árbol estructurado — y la recuperación de errores normalizada que pone de acuerdo a todos los navegadores.</p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Populares) */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/open-source-password-managers-hero.jpg"
                              className="img-fluid"
                              alt="Los mejores gestores de contraseñas de código abierto"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto" className="title">Los mejores gestores de contraseñas de código abierto</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/gestores-de-contrasenas-autoalojados">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/self-hosted-password-managers-hero.jpg"
                              className="img-fluid"
                              alt="Gestores de contraseñas autoalojados"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/gestores-de-contrasenas-autoalojados" className="title">Gestores de contraseñas autoalojados</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/herramientas-de-gestion-de-secretos">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/secrets-management-tools-hero.jpg"
                              className="img-fluid"
                              alt="Herramientas de gestión de secretos para desarrolladores"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/herramientas-de-gestion-de-secretos" className="title">Herramientas de gestión de secretos para desarrolladores</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/analisis-proton-mail">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-mail-review-hero.jpg"
                              className="img-fluid"
                              alt="Análisis de Proton Mail: correo cifrado"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/analisis-proton-mail" className="title">Análisis de Proton Mail: correo cifrado</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/mejores-servicios-de-correo-cifrado">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-hero.jpg"
                              className="img-fluid"
                              alt="Los mejores servicios de correo cifrado"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/mejores-servicios-de-correo-cifrado" className="title">Los mejores servicios de correo cifrado</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/es/articles/analisis-proton-pass">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-pass-review-hero.jpg"
                              className="img-fluid"
                              alt="Análisis de Proton Pass"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/es/articles/analisis-proton-pass" className="title">Análisis de Proton Pass</a>
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
                      <strong>Explorar</strong> categorías
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/semantic-web-hero.jpg"
                    >
                      <a
                        href="/es/categories/standards"
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
                        href="/es/categories/parsing"
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
                        href="/es/categories/tooling"
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
                        href="/es/categories/archive"
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
                        href="/es/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Standards
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="/es/categories" className="fw-bold text-primary-hover">
                        <u>Ver todas las categorías</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Últimos</strong> Reviews
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto" className="news-image">
                        <img loading="lazy" decoding="async"
                          src="/assets/articles/open-source-password-managers-hero.jpg"
                          alt="Los mejores gestores de contraseñas de código abierto"
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
                        {/* <span class="post-category">Herramientas</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Archivo</span>
                          </li>
                          </ul>
                        <h4 className="mb-0">
                          ¿Qué es el DOM?
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/es/articles/que-es-el-dom" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-hero.jpg"
                              alt="¿Qué es el DOM?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/es/articles/que-es-el-dom" className="title">¿Qué es el DOM?</a>
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
                          <a href="/es/articles/validador-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/html-validator-hero.jpg"
                              alt="Qué hace un validador de HTML"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/es/articles/validador-html" className="title">Qué hace un validador de HTML</a>
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
                          <a href="/es/articles/que-es-un-analizador" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-a-parser-hero.jpg"
                              alt="¿Qué es un analizador?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/es/articles/que-es-un-analizador" className="title">¿Qué es un analizador?</a>
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
                        <strong>Herramientas &amp;</strong> Estándares
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/es/articles/web-semantica" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/semantic-web-hero.jpg"
                            alt="La web semántica, explicada"
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="/es/articles/web-semantica">La web semántica, explicada</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Estándares</span>
                          </li>
                          </ul>
                        <p>Consejos prácticos e independientes sobre las herramientas que los desarrolladores y los lectores preocupados por su privacidad usan de verdad.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/es/articles/xml-frente-a-html">XML vs HTML: ¿cuál es la diferencia?</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/es/articles/cms-ruby-on-rails-es">CMS en Ruby on Rails</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/es/articles/codificacion-de-caracteres-utf-8">La codificación de caracteres y por qué ganó UTF-8</a>
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
                        <strong>SELECCIÓN</strong> EDITORIAL
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/es/articles/cms-autoalojados" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/self-hosted-cms-hero.jpg"
                            alt="CMS autoalojados que conviene conocer"
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="/es/articles/cms-autoalojados">CMS autoalojados que conviene conocer</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Análisis</span>
                          </li>
                          </ul>
                        <p>Consejos prácticos e independientes sobre las herramientas que los desarrolladores y los lectores preocupados por su privacidad usan de verdad.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/es/projects/html5-parser">Analizador HTML5 (htmlparser)</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/es/projects/validator-nu">Validator.nu</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/es/projects/railfrog">Railfrog</a>
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
                        <strong>Últimos</strong> articles
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/es/articles/web-semantica" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/semantic-web-hero.jpg"
                              alt="La web semántica, explicada"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/es/articles/web-semantica" className="title">La web semántica, explicada</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Herramientas</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Un validador de HTML comprueba tu marcado frente al estándar vivo.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/es/articles/xml-frente-a-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/xml-vs-html-hero.jpg"
                              alt="XML vs HTML: ¿cuál es la diferencia?"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/es/articles/xml-frente-a-html" className="title">XML vs HTML: ¿cuál es la diferencia?</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Archivo</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Cómo un analizador convierte texto sin formato en datos estructurados utilizables.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/es/articles/cms-ruby-on-rails-es" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/ruby-on-rails-cms-hero.jpg"
                              alt="CMS en Ruby on Rails"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/es/articles/cms-ruby-on-rails-es" className="title">CMS en Ruby on Rails</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Estándares</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">La idea de una web de datos, donde el significado es legible por máquinas.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/es/articles/codificacion-de-caracteres-utf-8" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/character-encoding-utf-8-hero.jpg"
                              alt="La codificación de caracteres y por qué ganó UTF-8"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/es/articles/codificacion-de-caracteres-utf-8" className="title">La codificación de caracteres y por qué ganó UTF-8</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Análisis</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Mantén las claves de API y los secretos cifrados, con acceso controlado y fuera de git.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/es/articles/cms-autoalojados" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/self-hosted-cms-hero.jpg"
                              alt="CMS autoalojados que conviene conocer"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/es/articles/cms-autoalojados" className="title">CMS autoalojados que conviene conocer</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Herramientas</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Alojar tu propio gestor de contraseñas te pone al mando de tu bóveda.</p>
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
                  <Tags locale="es" />
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
