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
            <a href="/fr/" className="news-image">
              <img
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Outils</span>
              <h2>
                <a href="/fr/articles/open-source-password-managers">Les meilleurs gestionnaires de mots de passe open source</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Par <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/fr/" className="news-image">
              <img
                src="/assets/articles/proton-mail-review-body.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Outils</span>
              <h2>
                <a href="/fr/articles/self-hosted-password-managers">Gestionnaires de mots de passe auto-hébergés</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Par <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/fr/" className="news-image">
              <img
                src="/assets/articles/proton-pass-review-body.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Outils</span>
              <h2>
                <a href="/fr/articles/secrets-management-tools">Outils de gestion des secrets pour développeurs</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Par <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/fr/" className="news-image">
              <img
                src="/assets/articles/html-validator-body.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Outils</span>
              <h2>
                <a href="/fr/articles/proton-mail-review">Test de Proton Mail : l'email chiffré</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Par <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/fr/" className="news-image">
              <img
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Outils</span>
              <h2>
                <a href="/fr/articles/best-encrypted-email">Les meilleurs services d'email chiffré</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Par <span className="editor-name">VersionDude</span>
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