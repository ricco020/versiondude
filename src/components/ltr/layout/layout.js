import Footer from "./footer";
import SiteHeader from "./site-header";
import ConsentBanner from "@/components/consent-banner";

export default function Layout({ children, locale = "en" }) {
  return (
    <>
      <SiteHeader locale={locale} />
      {children}
      <ConsentBanner locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
