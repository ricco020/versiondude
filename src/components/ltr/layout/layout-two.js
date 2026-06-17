import Footer from "./footer";
import SiteHeader from "./site-header";

export default function LayoutTwo({ children, locale = "en" }) {
  return (
    <>
      <SiteHeader locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
