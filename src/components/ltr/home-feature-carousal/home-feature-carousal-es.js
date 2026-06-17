
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
          <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto" className="thumb">
            <img
              src="/assets/articles/self-hosted-password-managers-body.jpg"
              alt="Los mejores gestores de contraseñas de código abierto"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Herramientas</span>
          <h5 className="mb-0">
            <a href="/es/articles/mejores-gestores-de-contrasenas-de-codigo-abierto" className="title">Los mejores gestores de contraseñas de código abierto</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/es/articles/gestores-de-contrasenas-autoalojados" className="thumb">
            <img
              src="/assets/articles/proton-mail-review-body.jpg"
              alt="Gestores de contraseñas autoalojados"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Herramientas</span>
          <h5 className="mb-0">
            <a href="/es/articles/gestores-de-contrasenas-autoalojados" className="title">Gestores de contraseñas autoalojados</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/es/articles/herramientas-de-gestion-de-secretos" className="thumb">
            <img
              src="/assets/articles/proton-pass-review-body.jpg"
              alt="Herramientas de gestión de secretos para desarrolladores"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Herramientas</span>
          <h5 className="mb-0">
            <a href="/es/articles/herramientas-de-gestion-de-secretos" className="title">Herramientas de gestión de secretos para desarrolladores</a>
          </h5>
        </div>
      </div>
      <div className="news-list-item">
        <div className="img-wrapper">
          <a href="/es/articles/analisis-proton-mail" className="thumb">
            <img
              src="/assets/articles/html-validator-body.jpg"
              alt="Análisis de Proton Mail: correo cifrado"
              className="img-fluid"
            />
            <div className="link-icon">
              <i className="fa fa-camera" />
            </div>
          </a>
        </div>
        <div className="post-info-2">
          <span className="post-category">Herramientas</span>
          <h5 className="mb-0">
            <a href="/es/articles/analisis-proton-mail" className="title">Análisis de Proton Mail: correo cifrado</a>
          </h5>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;