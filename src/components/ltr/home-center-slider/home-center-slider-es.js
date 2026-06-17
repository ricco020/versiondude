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
            <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt="Los mejores gestores de contraseñas de código abierto"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Herramientas</span>
              <h2>
                <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto">Los mejores gestores de contraseñas de código abierto</a>
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
            <a href="/es/articles/gestores-de-contrasenas-autoalojados" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-mail-review-body.jpg"
                alt="Gestores de contraseñas autoalojados"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Herramientas</span>
              <h2>
                <a href="/es/articles/gestores-de-contrasenas-autoalojados">Gestores de contraseñas autoalojados</a>
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
            <a href="/es/articles/herramientas-de-gestion-de-secretos" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-pass-review-body.jpg"
                alt="Herramientas de gestión de secretos para desarrolladores"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Herramientas</span>
              <h2>
                <a href="/es/articles/herramientas-de-gestion-de-secretos">Herramientas de gestión de secretos para desarrolladores</a>
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
            <a href="/es/articles/analisis-proton-mail" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/html-validator-body.jpg"
                alt="Análisis de Proton Mail: correo cifrado"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Herramientas</span>
              <h2>
                <a href="/es/articles/analisis-proton-mail">Análisis de Proton Mail: correo cifrado</a>
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
            <a href="/es/articles/mejores-servicios-de-correo-cifrado" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt="Los mejores servicios de correo cifrado"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Herramientas</span>
              <h2>
                <a href="/es/articles/mejores-servicios-de-correo-cifrado">Los mejores servicios de correo cifrado</a>
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