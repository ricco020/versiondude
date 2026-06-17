"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import ThemeChanger from "../style-selectors/style-selector";
import { localeHref } from "@/lib/site";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.removeAttribute("dir");
  }, []);

  const ref = t("nav.reference");
  const nav = [
    { label: t("nav.home"), href: localeHref(locale, "/") },
    { label: ref, href: localeHref(locale, "/reference") },
    { label: t("nav.projects"), href: localeHref(locale, "/projects") },
    { label: t("nav.about"), href: localeHref(locale, "/about") },
  ];

  return (
    <header>
      {/* HEADER TOP */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="d-flex top-left-menu">
                <span className="fw-semibold text-uppercase" style={{ letterSpacing: ".05em", fontSize: ".8rem" }}>
                  {t("site.tagline")}
                </span>
              </div>
            </div>
            <div className="col-auto ms-auto">
              <div className="header-right-menu">
                <ul className="d-flex justify-content-end align-items-center gap-3 mb-0">
                  {/* language dropdown */}
                  <li className="dropdown language-dropdown">
                    <button
                      className="btn p-0 dropdown-toggle d-flex align-items-center gap-2 fw-bold text-uppercase"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: ".8rem" }}
                    >
                      <i className="fa fa-globe" /> {locale}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      {LOCALES.map((l) => (
                        <li key={l.code}>
                          {/* full reload -> middleware sets NEXT_LOCALE cookie */}
                          <a className={`dropdown-item ${l.code === locale ? "active" : ""}`} href={localeHref(l.code, "/")}>
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="d-flex align-items-center">
                    <ThemeChanger />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER MID: logo */}
      <div className="header-mid py-3">
        <div className="container">
          <div className="text-center">
            <Link href={localeHref(locale, "/")} className="header-logo d-inline-flex align-items-baseline gap-2 text-decoration-none">
              <span className="fw-bold" style={{ fontFamily: "var(--font-cormorant-garamond)", fontSize: "2.4rem", lineHeight: 1 }}>
                Version<span style={{ color: "#e8472b" }}>Dude</span>
              </span>
              <span className="text-uppercase" style={{ fontFamily: "var(--font-roboto)", fontSize: ".62rem", letterSpacing: ".18em", opacity: 0.6 }}>
                /svn archive
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="custom-navbar navbar navbar-expand-lg sticky-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#vdNav"
            aria-controls="vdNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="vdNav">
            <ul className="navbar-nav align-items-lg-center gap-lg-2">
              {nav.map((n) => (
                <li className="nav-item" key={n.href}>
                  <Link className="nav-link fw-semibold text-uppercase" href={n.href} style={{ fontSize: ".82rem", letterSpacing: ".04em" }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="btn p-0 ms-auto ms-lg-3 search-trigger"
            aria-label="Search"
            onClick={() => setIsSearchOpen((o) => !o)}
          >
            <i className="ti ti-search" style={{ fontSize: "1.1rem" }} />
          </button>
        </div>
      </nav>
    </header>
  );
}
