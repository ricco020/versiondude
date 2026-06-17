
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
});



const HomeFeatureCarousal = () => {
  
  return (
    <OwlCarousel className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{
        0: {
          items: 1,
          autoplay: true
        },
        576: {
          items: 2
        },
        768: {
          items: 2.5
        },
        992: {
          items: 3.5
        },
        1200: {
          items: 4
        }
      }}
    >
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/articles/open-source-password-managers" className="thumb">
            <img loading="lazy" decoding="async"
              src="/assets/articles/self-hosted-password-managers-body.jpg"
              alt="The best open-source password managers"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Tooling</span>
          <h5 className="mb-0">
            <a href="/articles/open-source-password-managers" className="title">The best open-source password managers</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/articles/self-hosted-password-managers" className="thumb">
            <img loading="lazy" decoding="async"
              src="/assets/articles/proton-mail-review-body.jpg"
              alt="Self-hosted password managers"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Tooling</span>
          <h5 className="mb-0">
            <a href="/articles/self-hosted-password-managers" className="title">Self-hosted password managers</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/articles/secrets-management-tools" className="thumb">
            <img loading="lazy" decoding="async"
              src="/assets/articles/proton-pass-review-body.jpg"
              alt="Secrets management tools for developers"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Tooling</span>
          <h5 className="mb-0">
            <a href="/articles/secrets-management-tools" className="title">Secrets management tools for developers</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/articles/proton-mail-review" className="thumb">
            <img loading="lazy" decoding="async"
              src="/assets/articles/html-validator-body.jpg"
              alt="Proton Mail review: encrypted email"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Tooling</span>
          <h5 className="mb-0">
            <a href="/articles/proton-mail-review" className="title">Proton Mail review: encrypted email</a>
          </h5>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;