import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }
  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  })
const HomeCenterSlider = () => {

  const optionEight = {
    loop: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
    autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i class='ti ti-angle-left'></i>`,
      `<i class='ti ti-angle-right'></i>`
    ]
  }
    return (
        <OwlCarousel id="owl-slider" className="owl-theme" {...optionEight}>
        {/* Slider item one */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt="Os melhores gestores de palavras-passe open source"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Ferramentas</span>
              <h2>
                <a href="/pt/articles/melhores-gestores-de-palavras-passe-open-source">Os melhores gestores de palavras-passe open source</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Por <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/pt/articles/gestores-de-palavras-passe-auto-hospedados" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-mail-review-body.jpg"
                alt="Gestores de palavras-passe auto-hospedados"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Ferramentas</span>
              <h2>
                <a href="/pt/articles/gestores-de-palavras-passe-auto-hospedados">Gestores de palavras-passe auto-hospedados</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Por <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/pt/articles/ferramentas-de-gestao-de-segredos" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-pass-review-body.jpg"
                alt="Ferramentas de gestão de segredos para programadores"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Ferramentas</span>
              <h2>
                <a href="/pt/articles/ferramentas-de-gestao-de-segredos">Ferramentas de gestão de segredos para programadores</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Por <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/pt/articles/analise-proton-mail" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/html-validator-body.jpg"
                alt="Análise do Proton Mail: o email cifrado"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Ferramentas</span>
              <h2>
                <a href="/pt/articles/analise-proton-mail">Análise do Proton Mail: o email cifrado</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Por <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/pt/articles/melhores-servicos-de-email-cifrado" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt="Os melhores serviços de email cifrado"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Ferramentas</span>
              <h2>
                <a href="/pt/articles/melhores-servicos-de-email-cifrado">Os melhores serviços de email cifrado</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Por <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item five */}
      </OwlCarousel>
    );
};

export default HomeCenterSlider;