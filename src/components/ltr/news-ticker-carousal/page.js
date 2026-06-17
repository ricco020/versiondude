
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


const NewsTicker = () => {

  return (
    <div className="container">
      <div className="newstricker_inner">
        <div className="trending">
          <strong>Trending</strong> Now
        </div>
        <OwlCarousel className="news-ticker owl-theme"
          loop={true}
          items={1}
          dots={false}
          animateOut='animate__slideOutDown'
          animateIn='animate__flipInX'
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          nav={false}
          responsive={{
            0: {
              nav: false,
            },
            768: {
              nav: true,
              navText: [
                "<i class='ti ti-angle-left'></i>",
                "<i class='ti ti-angle-right'></i>"
              ],
            }
          }}>
          <div className="item">
            <a href="/articles/open-source-password-managers">The best open-source password managers</a>
          </div>
          <div className="item">
            <a href="/articles/best-encrypted-email">The best encrypted email services</a>
          </div>
          <div className="item">
            <a href="/articles/what-is-the-dom">What is the DOM?</a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default NewsTicker;