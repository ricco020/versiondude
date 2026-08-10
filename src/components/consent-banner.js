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
  return (
    <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 1080, background: "#1a1a1a", color: "#fff", padding: "14px 18px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "center", boxShadow: "0 -2px 12px rgba(0,0,0,.25)" }}>
      <span style={{ fontSize: 14, maxWidth: 760 }}>{c.text}</span>
      <span style={{ display: "flex", gap: 10 }}>
        <button onClick={() => choose("decline")} style={{ background: "transparent", color: "#fff", border: "1px solid #777", borderRadius: 7, padding: "8px 16px", cursor: "pointer", fontWeight: 600 }}>{c.decline}</button>
        <button onClick={() => choose("accept")} style={{ background: "#e63329", color: "#fff", border: "none", borderRadius: 7, padding: "8px 18px", cursor: "pointer", fontWeight: 700 }}>{c.accept}</button>
      </span>
    </div>
  );
}
