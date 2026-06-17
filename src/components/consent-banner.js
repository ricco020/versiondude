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

export default function ConsentBanner({ locale = "en" }) {
  const [show, setShow] = useState(false);
  const c = CONSENT[locale] || CONSENT.en;
  useEffect(() => {
    const v = localStorage.getItem("vd_consent");
    if (v === "accept") loadGA();
    else if (v !== "decline") setShow(true);
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
