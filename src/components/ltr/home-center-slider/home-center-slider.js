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
            <a href="/articles/open-source-password-managers" className="news-image">
              <img
                src="/assets/articles/self-hosted-password-managers-body.jpg"
                alt="The best open-source password managers"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Tooling</span>
              <h2>
                <a href="/articles/open-source-password-managers">The best open-source password managers</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/articles/self-hosted-password-managers" className="news-image">
              <img
                src="/assets/articles/proton-mail-review-body.jpg"
                alt="Self-hosted password managers"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Tooling</span>
              <h2>
                <a href="/articles/self-hosted-password-managers">Self-hosted password managers</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/articles/secrets-management-tools" className="news-image">
              <img
                src="/assets/articles/proton-pass-review-body.jpg"
                alt="Secrets management tools for developers"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Tooling</span>
              <h2>
                <a href="/articles/secrets-management-tools">Secrets management tools for developers</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/articles/proton-mail-review" className="news-image">
              <img
                src="/assets/articles/html-validator-body.jpg"
                alt="Proton Mail review: encrypted email"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Tooling</span>
              <h2>
                <a href="/articles/proton-mail-review">Proton Mail review: encrypted email</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">VersionDude</span>
                </li>
                </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="/articles/best-encrypted-email" className="news-image">
              <img
                src="/assets/articles/what-is-a-parser-body.jpg"
                alt="The best encrypted email services"
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Tooling</span>
              <h2>
                <a href="/articles/best-encrypted-email">The best encrypted email services</a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">VersionDude</span>
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