"use client";
import { useEffect, useState } from "react";
import { CONSENT } from "@/data/site-i18n";

const GA_ID = "G-EGDNJHLQ0J";
function loadGA() {
  if (window.__ga_loaded) return; window.__ga_loaded = true;
  const sc = document.createElement("script"); sc.async = true;
  sc.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`; document.head.appendChild(sc);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag; gtag("js", new Date()); gtag("config", GA_ID);
}

// Reseaux d'affiliation dont les liens sortent EN DIRECT, sans passer par /go/.
// Sur versiondude les CTA pointent sur awin1.com sans redirection interne : un
// tracker cale uniquement sur /go/ n'y verrait donc jamais rien. Verifie sur la
// page servie avant d'ecrire ce motif.
const AFFILIATE_HOSTS = /(awin1\.com|tkqlhce\.com|dpbolvw\.net|anrdoezrs\.net|kqzyfj\.com|jdoqocy\.com|getproton\.me|partner\.pcloud\.com)/i;

function programOf(href) {
  const m = href.match(/\/go\/([^/?#]+)/);
  if (m) return m[1];
  const h = href.match(/awin1\.com.*awinmid=(\d+)/i);
  if (h) return "awin-" + h[1];
  try { return new URL(href).hostname.replace(/^www\./, ""); } catch (e) { return "inconnu"; }
}

/**
 * Mesure des clics affilies, ajoutee le 2026-08-10.
 *
 * L'audit GA4 du reseau a montre que ce site n'emettait AUCUN evenement de clic :
 * seulement page_view, session_start, first_visit et user_engagement. Sa
 * conversion n'etait pas mauvaise, elle etait inobservable.
 *
 * Le code vit dans le composant de consentement parce qu'il est deja client,
 * deja monte dans les deux layouts, et qu'il porte deja gtag : la mesure reste
 * ainsi conditionnee au consentement au lieu de le contourner.
 *
 * Memes noms d'evenement et de parametres que vpnsmith, wethepurple, secure-os
 * et html5advent, pour que les sites soient comparables dans une seule
 * exploration GA4.
 */
function trackAffiliateClicks() {
  const onClick = (e) => {
    const link = e.target?.closest?.("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (!href.includes("/go/") && !AFFILIATE_HOSTS.test(href)) return;
    const path = window.location.pathname;
    const seg = path.split("/").filter(Boolean)[0];
    const slug = programOf(href);
    const params = {
      affiliate_program: slug.split("-")[0],
      affiliate_slug: slug,
      landing_path: path,
      locale: seg && /^[a-z]{2}$/i.test(seg) ? seg.toLowerCase() : "",
      link_url: link.href,
      transport_type: "beacon",
    };
    if (typeof window.gtag === "function") {
      window.gtag("event", "affiliate_click", params);
      window.gtag("event", "go_click", params);
    }
  };
  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}

export default function ConsentBanner({ locale = "en" }) {
  const [show, setShow] = useState(false);
  const c = CONSENT[locale] || CONSENT.en;
  useEffect(() => {
    const untrack = trackAffiliateClicks();
    const v = localStorage.getItem("vd_consent");
    if (v === "accept") loadGA();
    else if (v !== "decline") setShow(true);
    return untrack;
  }, []);
  if (!show) return null;
  const choose = (val) => { localStorage.setItem("vd_consent", val); if (val === "accept") loadGA(); setShow(false); };
  const legal = locale === "en" ? "/legal" : `/${locale}/legal`;
  const btn = { flex: 1, minHeight: 44, borderRadius: 6, border: "1.5px solid #242038", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" };
  return (
    <div className="vd-consent" role="dialog" aria-labelledby="vd-consent-title" aria-describedby="vd-consent-text">
      <style>{`.vd-consent{position:fixed;right:24px;bottom:24px;z-index:1080;width:min(420px,calc(100vw - 24px));box-sizing:border-box;background:#fff;color:#242038;border:1px solid #D9D3F2;border-left:4px solid #6543D6;border-radius:8px;padding:16px 18px;box-shadow:0 8px 28px rgba(36,32,56,.16);font-family:var(--font-source-sans),system-ui,sans-serif}
.vd-consent p{margin:0}
.vd-consent .vd-t{font-size:12px;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:#6543D6;margin-bottom:6px}
.vd-consent .vd-x{font-size:14px;line-height:20px;color:#3A3550}
.vd-consent a{color:#242038;text-decoration:underline;text-underline-offset:2px}
.vd-consent button:focus-visible,.vd-consent a:focus-visible{outline:2px solid #6543D6;outline-offset:2px}
@media (max-width:640px){.vd-consent{right:12px;left:12px;bottom:calc(12px + env(safe-area-inset-bottom));width:auto;padding:14px 16px}}`}</style>
      <p className="vd-t" id="vd-consent-title">{c.title}</p>
      <p className="vd-x" id="vd-consent-text">{c.text} <a href={legal}>{c.more}</a></p>
      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <button onClick={() => choose("decline")} style={{ ...btn, background: "#fff", color: "#242038" }}>{c.decline}</button>
        <button onClick={() => choose("accept")} style={{ ...btn, background: "#fff", color: "#242038" }}>{c.accept}</button>
      </div>
    </div>
  );
}
