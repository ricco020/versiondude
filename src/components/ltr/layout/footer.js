"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ScrollToTopUI from "../scroll-to-top/scroll-to-top";
import { localeHref } from "@/lib/site";

const CATS = ["standards", "parsing", "tooling", "archive"];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const year = 2026;

  return (
    <footer className="main-footer">
      <div className="container py-5">
        <div className="row">
          {/* Brand + about */}
          <div className="col-lg-5 footer-box py-3">
            <Link href={localeHref(locale, "/")} className="text-decoration-none">
              <span className="fw-bold" style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "1.9rem" }}>
                Version<span style={{ color: "#e8472b" }}>Dude</span>
              </span>
            </Link>
            <p className="mt-3" style={{ maxWidth: "32rem", opacity: 0.75, fontSize: ".95rem" }}>
              {t("footer.about")}
            </p>
          </div>

          {/* Explore */}
          <div className="col-sm-6 col-lg-3 footer-box py-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: ".08em", fontSize: ".8rem" }}>
              {t("footer.explore")}
            </h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              <li><Link className="text-decoration-none" href={localeHref(locale, "/")}>{t("nav.home")}</Link></li>
              <li><Link className="text-decoration-none" href={localeHref(locale, "/reference")}>{t("nav.reference")}</Link></li>
              <li><Link className="text-decoration-none" href={localeHref(locale, "/projects")}>{t("nav.projects")}</Link></li>
              <li><Link className="text-decoration-none" href={localeHref(locale, "/about")}>{t("nav.about")}</Link></li>
            </ul>
          </div>

          {/* Topics */}
          <div className="col-sm-6 col-lg-4 footer-box py-3">
            <h6 className="text-uppercase fw-bold mb-3" style={{ letterSpacing: ".08em", fontSize: ".8rem" }}>
              {t("footer.topics")}
            </h6>
            <ul className="list-unstyled d-grid gap-2 mb-0">
              {CATS.map((c) => (
                <li key={c} style={{ opacity: 0.75 }}>{t(`categories.${c}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="sub-footer border-top">
        <div className="container py-3">
          <div className="row align-items-center g-2">
            <div className="col-md-auto" style={{ fontSize: ".82rem", opacity: 0.7 }}>
              © {year} {t("footer.rights")}
            </div>
            <div className="col-md ms-md-auto text-md-end" style={{ fontSize: ".82rem", opacity: 0.7 }}>
              {t("footer.noAffiliation")}
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopUI />
    </footer>
  );
}
