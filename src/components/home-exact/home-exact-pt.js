"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/news-ticker-carousal/page-pt";
import SunnyWeather from "@/components/ltr/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/ltr/date-picker/date-picker";
import PollWidget from "@/components/ltr/poll-widget/poll";
import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal-pt";
import HomeCenterSlider from "@/components/ltr/home-center-slider/home-center-slider-pt";
import Tags from "@/components/ltr/tags/tags";
import { useEffect } from "react";
import Link from "next/link";
import { getArticles, articleHref, categoryLabel } from "@/data/articles";
export default function Home_pt() {
  useEffect(() => {
    // Your logic for setting dir attribute using JavaScript
    // For example:
    document.documentElement.removeAttribute('dir', 'rtl');
  }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  const L = [...getArticles("pt")].sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).slice(6);
  return (
    <Layout locale="pt">
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">VersionDude — padrões web, analisadores e ferramentas para programadores</h1>
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
                      <a href={articleHref(L[0].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[0].hero} alt={L[0].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[0].category,"pt")}</span>
                        <h4><a href={articleHref(L[0].slug,"pt")}>{L[0].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[1].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[1].hero} alt={L[1].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[1].category,"pt")}</span>
                        <h4><a href={articleHref(L[1].slug,"pt")}>{L[1].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={articleHref(L[2].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[2].hero} alt={L[2].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[2].category,"pt")}</span>
                        <h4><a href={articleHref(L[2].slug,"pt")}>{L[2].title}</a></h4>
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
                      <a href={articleHref(L[3].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[3].hero} alt={L[3].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[3].category,"pt")}</span>
                        <h4><a href={articleHref(L[3].slug,"pt")}>{L[3].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[4].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[4].hero} alt={L[4].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[4].category,"pt")}</span>
                        <h4><a href={articleHref(L[4].slug,"pt")}>{L[4].title}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>Por <span className="editor-name">VersionDude</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={articleHref(L[5].slug,"pt")} className="news-image">
                        <img loading="lazy" decoding="async" src={L[5].hero} alt={L[5].title} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{categoryLabel(L[5].category,"pt")}</span>
                        <h4><a href={articleHref(L[5].slug,"pt")}>{L[5].title}</a></h4>
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
                    <strong>Top </strong> Histórias
                  </h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/pt/articles/ferramentas-de-gestao-de-segredos">Ferramentas de gestão de segredos para programadores</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Ferramentas</span>
                          </li>
                          </ul>
                        <p>Porque é que o open source importa num gestor de palavras-passe, e os projetos em que confiar.</p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/pt/articles/analise-proton-mail">Análise do Proton Mail: o email cifrado</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Arquivo</span>
                          </li>
                          </ul>
                        <p>O que significa realmente o email cifrado, e os serviços que o fazem a sério.</p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="/pt/articles/melhores-servicos-de-email-cifrado">Os melhores serviços de email cifrado</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">Padrões</span>
                          </li>
                          </ul>
                        <p>O Document Object Model é a árvore que um navegador constrói a partir do seu HTML.</p>
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
                        Mais lidos
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
                              <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source">Os melhores gestores de palavras-passe open source</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">02</span>
                            <span className="text">
                              <a href="/pt/articles/gestores-de-palavras-passe-auto-hospedados">Gestores de palavras-passe auto-hospedados</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">03</span>
                            <span className="text">
                              <a href="/pt/articles/ferramentas-de-gestao-de-segredos">Ferramentas de gestão de segredos para programadores</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">04</span>
                            <span className="text">
                              <a href="/pt/articles/analise-proton-mail">Análise do Proton Mail: o email cifrado</a>
                            </span>
                          </li>
                          <li>
                            <span className="count">05</span>
                            <span className="text">
                              <a href="/pt/articles/melhores-servicos-de-email-cifrado">Os melhores serviços de email cifrado</a>
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
                            <a href="/pt/articles/analise-proton-pass">Análise do Proton Pass</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/pt/categories/standards">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/pt/articles/o-que-e-o-dom">
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
                            <a href="/pt/articles/o-que-e-o-dom">O que é o DOM?</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/pt/articles/validador-html">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/pt/articles/validador-html">
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
                            <a href="/pt/articles/validador-html">O que faz um validador HTML</a>
                          </h4>
                          <ul className="authar-info d-flex flex-wrap justify-content-center">
                            <li className="date">
                              <a href="/pt/articles/o-que-e-o-dom">
                                <i className="ti ti ti-timer" /> 
                              </a>
                            </li>
                            <li className="like">
                              <a href="/pt/articles/o-que-e-o-dom">
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
                        <a href="/pt/articles/o-que-e-um-analisador">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/secrets-management-tools-hero.jpg"
                            width={345}
                            alt="O que é um analisador?"
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="/pt/articles/o-que-e-um-analisador">O que é um analisador?</a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Análise</span>
                          </li>
                          <li>
                            Por <span className="editor-name">VersionDude</span>
                          </li>
                          </ul>
                        <p>Como um analisador transforma markup bruto numa árvore estruturada — e a recuperação de erros normalizada que põe todos os navegadores de acordo.</p>
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
                          <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-mail-review-hero.jpg"
                              className="img-fluid"
                              alt="Os melhores gestores de palavras-passe open source"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source" className="title">Os melhores gestores de palavras-passe open source</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/pt/articles/gestores-de-palavras-passe-auto-hospedados">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-hero.jpg"
                              className="img-fluid"
                              alt="Gestores de palavras-passe auto-hospedados"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/gestores-de-palavras-passe-auto-hospedados" className="title">Gestores de palavras-passe auto-hospedados</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/pt/articles/ferramentas-de-gestao-de-segredos">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/proton-pass-review-hero.jpg"
                              className="img-fluid"
                              alt="Ferramentas de gestão de segredos para programadores"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/ferramentas-de-gestao-de-segredos" className="title">Ferramentas de gestão de segredos para programadores</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/pt/articles/analise-proton-mail">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-hero.jpg"
                              className="img-fluid"
                              alt="Análise do Proton Mail: o email cifrado"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/analise-proton-mail" className="title">Análise do Proton Mail: o email cifrado</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/pt/articles/melhores-servicos-de-email-cifrado">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/html-validator-hero.jpg"
                              className="img-fluid"
                              alt="Os melhores serviços de email cifrado"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/melhores-servicos-de-email-cifrado" className="title">Os melhores serviços de email cifrado</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="/pt/articles/analise-proton-pass">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-a-parser-hero.jpg"
                              className="img-fluid"
                              alt="Análise do Proton Pass"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <h5>
                          <a href="/pt/articles/analise-proton-pass" className="title">Análise do Proton Pass</a>
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
                      <strong>Explorar</strong> as categorias
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/semantic-web-hero.jpg"
                    >
                      <a
                        href="/pt/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Padrões
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/xml-vs-html-hero.jpg"
                    >
                      <a
                        href="/pt/categories/parsing"
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
                        href="/pt/categories/tooling"
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
                        href="/pt/categories/archive"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Arquivo
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="/assets/articles/self-hosted-cms-hero.jpg"
                    >
                      <a
                        href="/pt/categories/standards"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Padrões
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="/pt/categories" className="fw-bold text-primary-hover">
                        <u>Ver todas as categorias</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Últimas</strong> análises
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source" className="news-image">
                        <img loading="lazy" decoding="async"
                          src="/assets/articles/open-source-password-managers-body.jpg"
                          alt="Os melhores gestores de palavras-passe open source"
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
                        {/* <span class="post-category">Ferramentas</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Arquivo</span>
                          </li>
                          </ul>
                        <h4 className="mb-0">
                          O que é o DOM?
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="/pt/articles/o-que-e-o-dom" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/secrets-management-tools-body.jpg"
                              alt="O que é o DOM?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/pt/articles/o-que-e-o-dom" className="title">O que é o DOM?</a>
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
                          <a href="/pt/articles/validador-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/best-encrypted-email-body.jpg"
                              alt="O que faz um validador HTML"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-play" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/pt/articles/validador-html" className="title">O que faz um validador HTML</a>
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
                          <a href="/pt/articles/o-que-e-um-analisador" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/what-is-the-dom-body.jpg"
                              alt="O que é um analisador?"
                              className="img-fluid"
                            />
                            <div className="link-icon">
                              <i className="fa fa-camera" />
                            </div>
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h5>
                            <a href="/pt/articles/o-que-e-um-analisador" className="title">O que é um analisador?</a>
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
                        <strong>Ferramentas &amp;</strong> Padrões
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/pt/articles/web-semantica" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/articles/semantic-web-body.jpg"
                            alt="A web semântica, explicada"
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="/pt/articles/web-semantica">A web semântica, explicada</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Padrões</span>
                          </li>
                          </ul>
                        <p>Conselhos práticos e independentes sobre as ferramentas que os programadores e os leitores atentos à privacidade realmente usam.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/pt/articles/xml-vs-html">XML vs HTML: qual é a diferença?</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/pt/articles/cms-ruby-on-rails">Os CMS em Ruby on Rails</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/pt/articles/codificacao-de-caracteres-utf-8">A codificação de caracteres e porque o UTF-8 venceu</a>
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
                        <strong>ESCOLHAS</strong> DA REDAÇÃO
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="/pt/articles/cms-auto-hospedados" className="d-block mb-3">
                          <img loading="lazy" decoding="async"
                            src="/assets/projects/html5-parser-hero.jpg"
                            alt="Os CMS auto-hospedados a conhecer"
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="/pt/articles/cms-auto-hospedados">Os CMS auto-hospedados a conhecer</a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Análise</span>
                          </li>
                          </ul>
                        <p>Conselhos práticos e independentes sobre as ferramentas que os programadores e os leitores atentos à privacidade realmente usam.</p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/pt/projects/html5-parser">Analisador HTML5 (htmlparser)</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="/pt/projects/validator-nu">Validator.nu</a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="/pt/projects/railfrog">Railfrog</a>
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
                        <strong>Últimos</strong> artigos
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/pt/articles/web-semantica" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/validator-nu-hero.jpg"
                              alt="A web semântica, explicada"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/pt/articles/web-semantica" className="title">A web semântica, explicada</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Ferramentas</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Um validador HTML verifica o seu markup face ao living standard.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/pt/articles/xml-vs-html" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/railfrog-hero.jpg"
                              alt="XML vs HTML: qual é a diferença?"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/pt/articles/xml-vs-html" className="title">XML vs HTML: qual é a diferença?</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Arquivo</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Como um analisador transforma texto bruto em dados estruturados e utilizáveis.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/pt/articles/cms-ruby-on-rails" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/pellet-hero.jpg"
                              alt="Os CMS em Ruby on Rails"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/pt/articles/cms-ruby-on-rails" className="title">Os CMS em Ruby on Rails</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Padrões</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">A ideia de uma web de dados, onde o significado é legível por máquinas.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/pt/articles/codificacao-de-caracteres-utf-8" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/projects/bersirc-hero.jpg"
                              alt="A codificação de caracteres e porque o UTF-8 venceu"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/pt/articles/codificacao-de-caracteres-utf-8" className="title">A codificação de caracteres e porque o UTF-8 venceu</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Análise</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Mantenha as chaves de API e os segredos cifrados, com acesso controlado e fora do git.</p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="/pt/articles/cms-auto-hospedados" className="thumb">
                            <img loading="lazy" decoding="async"
                              src="/assets/articles/open-source-password-managers-hero.jpg"
                              alt="Os CMS auto-hospedados a conhecer"
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="/pt/articles/cms-auto-hospedados" className="title">Os CMS auto-hospedados a conhecer</a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Ferramentas</span>
                            </li>
                            <li>
                              Por <span className="editor-name">VersionDude</span>
                            </li>
                            </ul>
                          <p className="d-lg-block d-none">Alojar o seu próprio gestor de palavras-passe é manter o controlo do seu cofre.</p>
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
                  <Tags locale="pt" />
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
