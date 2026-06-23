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
            <a href="/de/articles/beste-open-source-passwortmanager" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt="Die besten Open-Source-Passwortmanager"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Werkzeuge</span>
              <h2>
                <a href="/de/articles/beste-open-source-passwortmanager">Die besten Open-Source-Passwortmanager</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Von <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/de/articles/selbstgehostete-passwortmanager" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-mail-review-body.jpg"
                alt="Selbstgehostete Passwortmanager"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Werkzeuge</span>
              <h2>
                <a href="/de/articles/selbstgehostete-passwortmanager">Selbstgehostete Passwortmanager</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Von <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/de/articles/secrets-management-werkzeuge" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/proton-pass-review-body.jpg"
                alt="Secrets-Management-Werkzeuge für Entwickler"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Werkzeuge</span>
              <h2>
                <a href="/de/articles/secrets-management-werkzeuge">Secrets-Management-Werkzeuge für Entwickler</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Von <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/de/articles/proton-mail-test" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/html-validator-body.jpg"
                alt="Proton Mail im Test: verschlüsselte E-Mail"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Werkzeuge</span>
              <h2>
                <a href="/de/articles/proton-mail-test">Proton Mail im Test: verschlüsselte E-Mail</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Von <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/de/articles/beste-verschluesselte-email-dienste" className="news-image">
              <img loading="lazy" decoding="async"
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt="Die besten verschlüsselten E-Mail-Dienste"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Werkzeuge</span>
              <h2>
                <a href="/de/articles/beste-verschluesselte-email-dienste">Die besten verschlüsselten E-Mail-Dienste</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  Von <span className="editor-name">VersionDude</span>
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