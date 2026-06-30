"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";

// Rendu d'une page projet dans le design d'article de la démo (post_details_block).
// project = objet localisé (content.js) ; img = {hero, body} ; labels = libellés localisés ; home = préfixe locale ("" | "/fr" | "/es").
// Affiliate CTA - DigitalOcean (Awin mid=123996, deeplink Eric 2026-06-29, vérifié →
// digitalocean.com). Developer cloud (Droplets/App Platform) = match exact de la copie
// "ship & scale your apps", mieux aligné que l'hébergement mutualisé pour une audience dev.
const AFF_CLOUD = "https://www.awin1.com/cread.php?awinmid=123996&awinaffid=979469&clickref=versiondude-project";
const CTA = {
  en: { tag: "Sponsored", title: "Deploying your own project?", text: "Reliable, developer-friendly cloud hosting to ship and scale your apps.", btn: "See cloud hosting" },
  fr: { tag: "Sponsorisé", title: "Vous déployez votre projet ?", text: "Hébergement cloud fiable et orienté développeurs pour lancer et faire évoluer vos apps.", btn: "Voir l’hébergement cloud" },
  es: { tag: "Patrocinado", title: "¿Despliegas tu propio proyecto?", text: "Hosting cloud fiable y orientado a desarrolladores para lanzar y escalar tus apps.", btn: "Ver hosting cloud" },
  de: { tag: "Gesponsert", title: "Eigenes Projekt am Start?", text: "Zuverlässiges, entwicklerfreundliches Cloud-Hosting, um Ihre Apps auszuliefern und zu skalieren.", btn: "Cloud-Hosting ansehen" },
  it: { tag: "Sponsorizzato", title: "Stai distribuendo il tuo progetto?", text: "Hosting cloud affidabile e a misura di sviluppatore per pubblicare e scalare le tue app.", btn: "Scopri l’hosting cloud" },
  pt: { tag: "Patrocinado", title: "A lançar o seu próprio projeto?", text: "Alojamento cloud fiável e orientado a programadores para publicar e escalar as suas apps.", btn: "Ver alojamento cloud" },
};

export default function ProjectArticle({ project, img, labels, home = "" }) {
  const loc = home && home !== "/" ? home.replace(/^\//, "") : "en";
  const cta = CTA[loc] || CTA.en;
  return (
    <LayoutTwo locale={loc}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col">
                <h1 className="mb-sm-0"><strong>{project.name}</strong></h1>
              </div>
              <div className="col-12 col-sm-auto">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-inline-block">
                    <li className="breadcrumb-item"><Link href={home || "/"}>{labels.home}</Link></li>
                    <li className="breadcrumb-item"><Link href={`${home}/projects`}>{labels.projectsTitle}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{project.name}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-m">
            <div className="col-md-8 col-p main-content">
              <div className="post_details_inner">
                <div className="post_details_block">
                  <figure>
                    <img loading="lazy" decoding="async" src={img.hero} className="img-fluid" alt={project.heroAlt} width={690} height={460} />
                  </figure>
                  <ul className="authar-info d-flex flex-wrap">
                    <li><span className="link">VersionDude</span></li>
                    <li>{labels.statusLabel}: {project.status}</li>
                  </ul>

                  {project.body.map((para, i) => (<p key={i}>{para}</p>))}

                  <figure className="align-left">
                    <img loading="lazy" decoding="async" src={img.body} alt={project.bodyCaption} width={300} height={362} />
                    <figcaption>{project.bodyCaption}</figcaption>
                  </figure>

                  <h3>{labels.currentHomeLabel}</h3>
                  <ul className="arrow_list">
                    {project.currentHome.map((h, i) => (
                      <li key={i}>
                        <a href={h.url} target="_blank" rel="noopener noreferrer nofollow">{h.label}</a>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", background: "#f6f8ff", border: "1px solid #d9e1ff", borderRadius: 14, padding: "20px 22px", margin: "26px 0" }}>
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <span style={{ display: "inline-block", background: "#2447f0", color: "#fff", fontWeight: 700, fontSize: 11, letterSpacing: ".5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999 }}>{cta.tag}</span>
                      <h3 style={{ margin: "8px 0 4px", fontSize: 19 }}>{cta.title}</h3>
                      <p style={{ margin: 0, fontSize: 14.5, opacity: 0.8 }}>{cta.text}</p>
                    </div>
                    <a href={AFF_CLOUD} rel="sponsored nofollow noopener" target="_blank" style={{ background: "#2447f0", color: "#fff", borderRadius: 9, padding: "11px 20px", fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>{cta.btn}</a>
                  </div>

                  <p><Link href={`${home}/projects`} className="link">&larr; {labels.projectsTitle}</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
