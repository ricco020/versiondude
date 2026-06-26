# -*- coding: utf-8 -*-
# Genere les 6 home-exact-{loc}.js (EN=home-exact.js) avec TOUTES les rubriques DYNAMIQUES
# (triees par date desc -> le recent circule, la home lie un max d'articles distincts pour le crawl).
# Design I-News INCHANGE : seul le markup hardcode est remplace par du .map() sur des slices de `A`.
# Adapte de VueTelemetry/scripts/gen-home-exact.py (commit 443776d) pour VersionDude.
import io, os

OUT = "src/components/home-exact"
BRAND = "VersionDude"
DOMAIN = "versiondude.net"
H1 = "VersionDude — web standards, parsers &amp; developer tooling"

# Categories REELLES de versiondude (data: standards/parsing/tooling/archive)
CATS = ["standards", "parsing", "tooling", "archive"]
# Editor's Picks = liens /projects/ reels de versiondude (preserves)
PROJECTS = [("html5-parser", "HTML5 Parser (htmlparser)"), ("validator-nu", "Validator.nu"), ("railfrog", "Railfrog")]

LOCS = {
    "en": {
        "file": "home-exact.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal",
        "comp_center": "home-center-slider/home-center-static",
        "comp_center_name": "HomeCenterStatic",
        "comp_ticker": "news-ticker-carousal/page",
        "tags_loc": "", "layout_loc": "",
        "top": ("Top ", "Stories"), "browse": ("Browse", "categories"),
        "reviews": ("Latest", "Reviews"), "toolsstacks": ("Tooling &amp;", "Standards"),
        "editor": ("EDITOR'S", "PICKS"), "latest": ("Latest", "articles"),
        "tab_mv": "Most Viewed", "tab_pn": "Popular news",
        "viewall": "View all categories", "by": "By",
    },
    "fr": {
        "file": "home-exact-fr.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal-fr",
        "comp_center": "home-center-slider/home-center-slider-fr",
        "comp_center_name": "HomeCenterSlider",
        "comp_ticker": "news-ticker-carousal/page-fr",
        "tags_loc": ' locale="fr"', "layout_loc": ' locale="fr"',
        "top": ("Top ", "Stories"), "browse": ("Parcourir", "les catégories"),
        "reviews": ("Derniers", "Reviews"), "toolsstacks": ("Outils &amp;", "Standards"),
        "editor": ("CHOIX", "DE LA RÉDACTION"), "latest": ("Derniers", "articles"),
        "tab_mv": "Les plus lus", "tab_pn": "Populaires",
        "viewall": "Voir toutes les catégories", "by": "Par",
    },
    "es": {
        "file": "home-exact-es.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal-es",
        "comp_center": "home-center-slider/home-center-slider-es",
        "comp_center_name": "HomeCenterSlider",
        "comp_ticker": "news-ticker-carousal/page-es",
        "tags_loc": ' locale="es"', "layout_loc": ' locale="es"',
        "top": ("Top ", "Stories"), "browse": ("Explorar", "categorías"),
        "reviews": ("Últimos", "Reviews"), "toolsstacks": ("Herramientas &amp;", "Standards"),
        "editor": ("SELECCIÓN", "EDITORIAL"), "latest": ("Últimos", "articles"),
        "tab_mv": "Lo más visto", "tab_pn": "Populares",
        "viewall": "Ver todas las categorías", "by": "Por",
    },
    "de": {
        "file": "home-exact-de.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal-de",
        "comp_center": "home-center-slider/home-center-slider-de",
        "comp_center_name": "HomeCenterSlider",
        "comp_ticker": "news-ticker-carousal/page-de",
        "tags_loc": ' locale="de"', "layout_loc": ' locale="de"',
        "top": ("Top ", "Themen"), "browse": ("Durchstöbern", "die Kategorien"),
        "reviews": ("Neueste", "Reviews"), "toolsstacks": ("Werkzeuge &amp;", "Standards"),
        "editor": ("AUSWAHL", "DER REDAKTION"), "latest": ("Neueste", "Artikel"),
        "tab_mv": "Meistgelesen", "tab_pn": "Beliebt",
        "viewall": "Alle Kategorien ansehen", "by": "Von",
    },
    "it": {
        "file": "home-exact-it.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal-it",
        "comp_center": "home-center-slider/home-center-slider-it",
        "comp_center_name": "HomeCenterSlider",
        "comp_ticker": "news-ticker-carousal/page-it",
        "tags_loc": ' locale="it"', "layout_loc": ' locale="it"',
        "top": ("Top ", "Storie"), "browse": ("Esplora", "le categorie"),
        "reviews": ("Ultimi", "Recensioni"), "toolsstacks": ("Strumenti &amp;", "Standards"),
        "editor": ("SCELTE", "DELLA REDAZIONE"), "latest": ("Ultimi", "articoli"),
        "tab_mv": "I più letti", "tab_pn": "Popolari",
        "viewall": "Vedi tutte le categorie", "by": "Da",
    },
    "pt": {
        "file": "home-exact-pt.js",
        "comp_carousal": "home-feature-carousal/home-feature-carousal-pt",
        "comp_center": "home-center-slider/home-center-slider-pt",
        "comp_center_name": "HomeCenterSlider",
        "comp_ticker": "news-ticker-carousal/page-pt",
        "tags_loc": ' locale="pt"', "layout_loc": ' locale="pt"',
        "top": ("Top ", "Histórias"), "browse": ("Explorar", "as categorias"),
        "reviews": ("Recentes", "Análises"), "toolsstacks": ("Ferramentas &amp;", "Standards"),
        "editor": ("ESCOLHAS", "DA REDAÇÃO"), "latest": ("Recentes", "artigos"),
        "tab_mv": "Mais lidos", "tab_pn": "Populares",
        "viewall": "Ver todas as categorias", "by": "Por",
    },
}

CATS_JS = "[" + ", ".join('"%s"' % k for k in CATS) + "]"


def editor_picks_js(loc):
    out = []
    for i, (slug, title) in enumerate(PROJECTS):
        cls = "py-3 pb-0" if i == len(PROJECTS) - 1 else "border-bottom py-3"
        out.append(
            f'''                      <div className="{cls}">
                        <h6 className="posts-title"><a href={{LOC === "en" ? "/projects/{slug}" : `/${{LOC}}/projects/{slug}`}}>{title}</a></h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                      </div>''')
    return "\n".join(out)


def build(loc, c):
    LOC = loc
    by = c["by"]
    picks = editor_picks_js(loc)
    return f'''"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/ltr/{c["comp_ticker"]}";
import {{ useBackgroundImageLoader }} from "@/components/ltr/use-background-image/use-background-image";
import Layout from "@/components/ltr/layout/layout";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import HomeFeatureCarousal from "@/components/ltr/{c["comp_carousal"]}";
import {c["comp_center_name"]} from "@/components/ltr/{c["comp_center"]}";
import Tags from "@/components/ltr/tags/tags";
import {{ useEffect }} from "react";
import {{ getArticles, articleHref, categoryLabel }} from "@/data/articles";

const LOC = "{LOC}";

export default function Home() {{
  useEffect(() => {{
    document.documentElement.removeAttribute('dir', 'rtl');
  }}, []);
  useRemoveBodyClass(['home-nine'], ['home-six', 'home-seven', 'home-two', 'boxed-layout', 'layout-rtl']);
  useBackgroundImageLoader();

  // Liste COMPLETE triee par date desc : la home pioche dans A a des index/slices DIFFERENTS
  // par section => le recent circule + un MAXIMUM d'articles distincts est lie (chemins de crawl).
  const A = [...getArticles(LOC)].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  // POST BLOCK historique : 6 cartes a partir de l'index 6 (decale du hero/feature).
  const L = A.slice(6);
  const href = (s) => articleHref(s, LOC);
  const cat = (k) => categoryLabel(k, LOC);

  // slices par section (chevauchement minimal pour couvrir le plus d'articles)
  const topStories  = A.slice(0, 3);                 // Top Stories
  const mostViewed  = A.slice(0, 5);                 // onglet Most Viewed
  const popularNews = A.slice(3, 6);                 // onglet Popular news
  const featured    = A[0];                          // gros article en tete (Popular)
  const grid        = A.slice(0, 6);                 // news-grid-2
  const reviews     = A.slice(6, 10);                // Latest Reviews (1 grande + 3 liste)
  const toolFeed    = A.filter((a) => a.category === "tooling" || a.category === "standards");
  const toolsStacks = (toolFeed.length ? toolFeed : A).slice(0, 4); // Tooling & Standards
  const editorPick  = A[A.length - 1];               // Editor's Picks = l'article le plus profond (le fait remonter)
  const latest      = A;                              // Latest articles = TOUT le catalogue (max chemins de crawl, recent en tete)

  return (
    <Layout{c["layout_loc"]}>
      {{/* *** START PAGE MAIN CONTENT *** */}}
      <main className="page_main_wrapper">
        <h1 className="visually-hidden">{H1}</h1>
        <NewsTicker />
        {{/* START FEATURE SECTION */}}
        <div className="bg-img feature-section py-4 py-lg-3 py-xl-4" data-image-src="/assets/images/bg-shape.png">
          <div className="container">
            <HomeFeatureCarousal />
          </div>
        </div>
        {{/* END OF /. FEATURE SECTION */}}
        {{/* START POST BLOCK SECTION */}}
        <section className="slider-inner">
          <div className="container-fluid p-0">
            <div className="row thm-margin">
              <div className="col-md-4 col-xxl-4 thm-padding d-md-none d-xxl-block">
                <div className="row slider-right-post thm-margin">
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={{href(L[0].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[0].hero}} alt={{L[0].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[0].category)}}</span>
                        <h4><a href={{href(L[0].slug)}}>{{L[0].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={{href(L[1].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[1].hero}} alt={{L[1].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[1].category)}}</span>
                        <h4><a href={{href(L[1].slug)}}>{{L[1].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href={{href(L[2].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[2].hero}} alt={{L[2].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[2].category)}}</span>
                        <h4><a href={{href(L[2].slug)}}>{{L[2].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="slider-wrapper">
                  <{c["comp_center_name"]} />
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="row slider-right-post thm-margin">
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={{href(L[3].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[3].hero}} alt={{L[3].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[3].category)}}</span>
                        <h4><a href={{href(L[3].slug)}}>{{L[3].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={{href(L[4].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[4].hero}} alt={{L[4].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[4].category)}}</span>
                        <h4><a href={{href(L[4].slug)}}>{{L[4].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href={{href(L[5].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{L[5].hero}} alt={{L[5].title}} className="img-fluid" />
                      </a>
                      <div className="post-text">
                        <span className="post-category">{{cat(L[5].category)}}</span>
                        <h4><a href={{href(L[5].slug)}}>{{L[5].title}}</a></h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {{/* END OF /. POST BLOCK SECTION */}}
        <div className="container">
          <div className="row gx-lg-5">
            {{/* START MAIN CONTENT */}}
            <div className="col-md-3 leftSidebar d-none d-xl-block">
              <StickyBox>
                <div className="panel_header">
                  <h4><strong>{c["top"][0]}</strong> {c["top"][1]}</h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    {{topStories.map((a, i) => (
                      <li className={{i === 2 ? "d-none d-xl-block post-grid" : "post-grid"}} key={{a.slug}}>
                        <div className="posts-inner px-0">
                          <h6 className="posts-title"><a href={{href(a.slug)}}>{{a.title}}</a></h6>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li><span className="post-category">{{cat(a.category)}}</span></li>
                          </ul>
                          <p>{{a.dek}}</p>
                        </div>
                      </li>
                    ))}}
                  </ul>
                </div>
                {{/* START NAV TABS */}}
                <div className="tabs-wrapper">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link border-0 active" id="most-viewed" data-bs-toggle="tab" data-bs-target="#most-viewed-pane" type="button" role="tab" aria-controls="most-viewed-pane" aria-selected="true">{c["tab_mv"]}</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link border-0" id="popular-news" data-bs-toggle="tab" data-bs-target="#popular-news-pane" type="button" role="tab" aria-controls="popular-news-pane" aria-selected="false">{c["tab_pn"]}</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="most-viewed-pane" role="tabpanel" aria-labelledby="most-viewed" tabIndex={{0}}>
                      <div className="most-viewed">
                        <ul id="most-today" className="content tabs-content">
                          {{mostViewed.map((a, i) => (
                            <li key={{a.slug}}>
                              <span className="count">{{String(i + 1).padStart(2, "0")}}</span>
                              <span className="text"><a href={{href(a.slug)}}>{{a.title}}</a></span>
                            </li>
                          ))}}
                        </ul>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="popular-news-pane" role="tabpanel" aria-labelledby="popular-news" tabIndex={{0}}>
                      <div className="popular-news">
                        {{popularNews.map((a) => (
                          <div className="p-post" key={{a.slug}}>
                            <h4><a href={{href(a.slug)}}>{{a.title}}</a></h4>
                            <ul className="authar-info d-flex flex-wrap justify-content-center">
                              <li className="date"><a href={{href(a.slug)}}><i className="ti ti ti-timer" /> </a></li>
                              <li className="like"><a href={{href(a.slug)}}><i className="ti ti ti-thumb-up" />{{cat(a.category)}}</a></li>
                            </ul>
                            <div className="reatting-2">
                              <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" />
                            </div>
                          </div>
                        ))}}
                      </div>
                    </div>
                  </div>
                </div>
                {{/* END OF /. NAV TABS */}}
              </StickyBox>
            </div>
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <StickyBox>
                {{/* START POST CATEGORY STYLE ONE (Popular news) */}}
                <div className="post-inner">
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href={{href(featured.slug)}}>
                          <img loading="lazy" decoding="async" src={{featured.hero}} width={{345}} alt={{featured.title}} className="img-fluid" />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4"><a href={{href(featured.slug)}}>{{featured.title}}</a></h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{{cat(featured.category)}}</span></li>
                          <li>{by} <span className="editor-name">{BRAND}</span></li>
                        </ul>
                        <p>{{featured.dek}}</p>
                      </div>
                    </article>
                  </div>
                </div>
                {{/* END OF /. POST CATEGORY STYLE ONE */}}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    {{grid.map((a, i) => (
                      <div className="col-6 col-md-4 col-sm-6" key={{a.slug}}>
                        <div className="grid-item mb-0">
                          <div className="grid-item-img">
                            <a href={{href(a.slug)}}>
                              <img loading="lazy" decoding="async" src={{a.hero}} className="img-fluid" alt={{a.title}} />
                              <div className="link-icon"><i className={{i % 2 ? "fa fa-camera" : "fa fa-play"}} /></div>
                            </a>
                          </div>
                          <h5><a href={{href(a.slug)}} className="title">{{a.title}}</a></h5>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                        </div>
                      </div>
                    ))}}
                  </div>
                </div>
              </StickyBox>
            </div>
            {{/* END OF /. MAIN CONTENT */}}
            {{/* START SIDE CONTENT */}}
            <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
              <StickyBox>
                {{/* START TRENDING TOPICS */}}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4><strong>{c["browse"][0]}</strong> {c["browse"][1]}</h4>
                  </div>
                  <div className="panel_body">
                    {{{CATS_JS}.map((k) => {{
                      const pic = A.find((a) => a.category === k) || A[0];
                      return (
                        <div className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3" data-image-src={{pic.hero}} key={{k}}>
                          <a href={{LOC === "en" ? `/categories/${{k}}` : `/${{LOC}}/categories/${{k}}`}} className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white">{{cat(k)}}</a>
                        </div>
                      );
                    }})}}
                    <div className="text-center mt-3">
                      <a href={{LOC === "en" ? "/categories" : `/${{LOC}}/categories`}} className="fw-bold text-primary-hover"><u>{c["viewall"]}</u></a>
                    </div>
                  </div>
                </div>
                {{/* END OF /. TRENDING TOPICS */}}
                {{/* START LATEST REVIEWS */}}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4><strong>{c["reviews"][0]}</strong> {c["reviews"][1]}</h4>
                  </div>
                  <div className="panel_body">
                    {{reviews[0] && (
                    <div className="more-post">
                      <a href={{href(reviews[0].slug)}} className="news-image">
                        <img loading="lazy" decoding="async" src={{reviews[0].hero}} alt={{reviews[0].title}} className="img-fluid w-100" />
                      </a>
                      <div className="reatting">
                        <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half-o" /><i className="fa fa-star-o" />
                      </div>
                      <div className="post-text">
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li><span className="post-category mb-0">{{cat(reviews[0].category)}}</span></li>
                        </ul>
                        <h4 className="mb-0"><a href={{href(reviews[0].slug)}}>{{reviews[0].title}}</a></h4>
                      </div>
                    </div>
                    )}}
                    <div className="mt-4 news-list">
                      {{reviews.slice(1, 4).map((a, i) => (
                        <div className={{i === 2 ? "news-list-item p-0" : "news-list-item p-0 mb-4"}} key={{a.slug}}>
                          <div className="img-wrapper">
                            <a href={{href(a.slug)}} className="thumb">
                              <img loading="lazy" decoding="async" src={{a.hero}} alt={{a.title}} className="img-fluid" />
                              <div className="link-icon"><i className={{i % 2 ? "fa fa-play" : "fa fa-camera"}} /></div>
                            </a>
                          </div>
                          <div className="post-info-2">
                            <h5><a href={{href(a.slug)}} className="title">{{a.title}}</a></h5>
                            <div className="reviews-reatting">
                              <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" />
                            </div>
                          </div>
                        </div>
                      ))}}
                    </div>
                  </div>
                </div>
                {{/* END OF /. LATEST REVIEWS */}}
              </StickyBox>
            </div>
            {{/* END OF /. SIDE CONTENT */}}
          </div>
        </div>

        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-md-3 leftSidebar d-none d-xl-block">
                <StickyBox>
                  {{/* START TOOLING & STANDARDS */}}
                  <div className="panel_inner">
                    <div className="panel_header" style={{{{ marginTop: "2.5rem" }}}}>
                      <h4><strong>{c["toolsstacks"][0]}</strong> {c["toolsstacks"][1]}</h4>
                    </div>
                    <div className="panel_body">
                      {{toolsStacks[0] && (
                      <div className="border-bottom">
                        <a href={{href(toolsStacks[0].slug)}} className="d-block mb-3">
                          <img loading="lazy" decoding="async" src={{toolsStacks[0].hero}} alt={{toolsStacks[0].title}} className="img-fluid w-100" />
                        </a>
                        <h5><a href={{href(toolsStacks[0].slug)}}>{{toolsStacks[0].title}}</a></h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{{cat(toolsStacks[0].category)}}</span></li>
                        </ul>
                        <p>{{toolsStacks[0].dek}}</p>
                      </div>
                      )}}
                      {{toolsStacks.slice(1, 4).map((a, i) => (
                        <div className={{i === 2 ? "py-3 pb-0" : "border-bottom py-3"}} key={{a.slug}}>
                          <h6 className="posts-title"><a href={{href(a.slug)}}>{{a.title}}</a></h6>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0"></ul>
                        </div>
                      ))}}
                    </div>
                  </div>
                  {{/* END OF /. TOOLING & STANDARDS */}}
                  {{/* START EDITOR'S PICKS */}}
                  <div className="panel_inner mb-0">
                    <div className="panel_header">
                      <h4><strong>{c["editor"][0]}</strong> {c["editor"][1]}</h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href={{href(editorPick.slug)}} className="d-block mb-3">
                          <img loading="lazy" decoding="async" src={{editorPick.hero}} alt={{editorPick.title}} className="img-fluid" />
                        </a>
                        <h5><a href={{href(editorPick.slug)}}>{{editorPick.title}}</a></h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li><span className="post-category mb-0">{{cat(editorPick.category)}}</span></li>
                        </ul>
                        <p>{{editorPick.dek}}</p>
                      </div>
{picks}
                    </div>
                  </div>
                  {{/* END OF /. EDITOR'S PICKS */}}
                </StickyBox>
              </div>
              <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
                <StickyBox>
                  {{/* START POST CATEGORY STYLE FOUR (Latest articles) */}}
                  <div className="post-inner">
                    <div className="post-head" style={{{{ marginTop: "2.5rem" }}}}>
                      <h2 className="title"><strong>{c["latest"][0]}</strong> {c["latest"][1]}</h2>
                    </div>
                    <div className="post-body">
                      {{latest.map((a) => (
                        <div className="news-list-item articles-list" key={{a.slug}}>
                          <div className="img-wrapper">
                            <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                              <i className="fa-solid fa-bolt-lightning" />
                            </div>
                            <a href={{href(a.slug)}} className="thumb">
                              <img loading="lazy" decoding="async" src={{a.hero}} alt={{a.title}} className="img-fluid w-100" />
                            </a>
                          </div>
                          <div className="post-info-2">
                            <h4><a href={{href(a.slug)}} className="title">{{a.title}}</a></h4>
                            <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                              <li><span className="post-category mb-0">{{cat(a.category)}}</span></li>
                              <li>{by} <span className="editor-name">{BRAND}</span></li>
                            </ul>
                            <p className="d-lg-block d-none">{{a.dek}}</p>
                          </div>
                        </div>
                      ))}}
                    </div>{{" "}}
                    <div className="post-footer">
                      <div className="row thm-margin">
                        <div className="col-md-8 thm-padding">{{" "}}</div>
                        <div className="col-md-4 d-md-block d-none thm-padding">
                          <div className="social">
                            <ul>
                              <li>
                                <div className="share transition">
                                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F{DOMAIN}%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="ico fb"><i className="fab fa-facebook-f" /></a>
                                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2F{DOMAIN}%2F&text={BRAND}" target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="ico tw"><i className="fab fa-twitter" /></a>
                                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2F{DOMAIN}%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="ico rs"><i className="fab fa-linkedin-in" /></a>
                                  <a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2F{DOMAIN}%2F" target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="ico pin"><i className="fab fa-pinterest-p" /></a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>{{" "}}
                  </div>
                  {{/* END OF /. POST CATEGORY STYLE FOUR */}}
                </StickyBox>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  <div className="archive-wrapper"></div>
                  <Tags{c["tags_loc"]} />
                </StickyBox>
              </div>
            </div>
          </div>
        </section>
      </main>
      {{/* *** END OF /. PAGE MAIN CONTENT *** */}}
    </Layout>
  );
}}
'''


def main():
    for loc, c in LOCS.items():
        path = os.path.join(OUT, c["file"])
        with io.open(path, "w", encoding="utf-8") as f:
            f.write(build(loc, c))
        print("wrote", path)


if __name__ == "__main__":
    main()
