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
            <a href="/it/articles/migliori-gestori-password-open-source" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt="I migliori gestori di password open source"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Strumenti</span>
              <h2>
                <a href="/it/articles/migliori-gestori-password-open-source">I migliori gestori di password open source</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Di <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/it/articles/gestori-password-self-hosted" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-mail-review-body.jpg"
                alt="Gestori di password self-hosted"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Strumenti</span>
              <h2>
                <a href="/it/articles/gestori-password-self-hosted">Gestori di password self-hosted</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Di <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/it/articles/strumenti-gestione-segreti" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-pass-review-body.jpg"
                alt="Strumenti di gestione dei segreti per sviluppatori"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Strumenti</span>
              <h2>
                <a href="/it/articles/strumenti-gestione-segreti">Strumenti di gestione dei segreti per sviluppatori</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Di <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/it/articles/recensione-proton-mail" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/html-validator-body.jpg"
                alt="Recensione di Proton Mail: l'email cifrata"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Strumenti</span>
              <h2>
                <a href="/it/articles/recensione-proton-mail">Recensione di Proton Mail: l'email cifrata</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Di <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/it/articles/migliori-servizi-email-cifrata" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt="I migliori servizi di email cifrata"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Strumenti</span>
              <h2>
                <a href="/it/articles/migliori-servizi-email-cifrata">I migliori servizi di email cifrata</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Di <span className="editor-name">VersionDude</span>
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