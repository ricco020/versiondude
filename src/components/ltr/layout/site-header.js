"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, LOCALES } from "@/data/site-i18n";

export default function SiteHeader({ locale = "en" }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  const pathname = usePathname() || "/";
  // base path without any locale prefix
  let base = pathname;
  for (const l of LOCALES) { if (l !== "en" && (base === `/${l}` || base.startsWith(`/${l}/`))) { base = base.slice(l.length + 1) || "/"; break; } }
  const localeHref = (l) => (l === "en" ? (base || "/") : `/${l}${base === "/" ? "" : base}`);
  const nav = [
    { href: `${p}/`, text: s.nav.home },
    { href: `${p}/projects`, text: s.nav.projects },
    { href: `${p}/about`, text: s.nav.about },
    { href: `${p}/contact`, text: s.nav.contact },
    { href: `${p}/faq`, text: s.nav.faq },
  ];
  return (
    <header className="site-header border-bottom bg-white">
      <nav className="custom-navbar navbar navbar-expand-lg sticky-top bg-white">
        <div className="container">
          <Link className="navbar-brand vd-logo" href={`${p}/`} aria-label="VersionDude">
            <span className="vd-logo-mark">&lt;/&gt;</span>
            <span className="vd-logo-text"><span className="vd-logo-v">Version</span><span className="vd-logo-d">Dude</span></span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vdNav" aria-controls="vdNav" aria-expanded="false" aria-label="Menu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="vdNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {nav.map((n) => (
                <li className="nav-item" key={n.href}>
                  <Link className="nav-link px-3 fw-semibold" href={n.href}>{n.text}</Link>
                </li>
              ))}
              <li className="nav-item ms-lg-3 d-flex gap-2">
                {LOCALES.map((l) => (
                  <Link key={l} href={localeHref(l)}
                    className={`small text-uppercase fw-bold text-decoration-none ${l === locale ? "text-danger" : "text-muted"}`}>{l}</Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
