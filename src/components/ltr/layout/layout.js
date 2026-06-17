import Footer from "./footer";
import SiteHeader from "./site-header";

export default function Layout({ children, locale = "en" }) {
  return (
    <>
      <SiteHeader locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
