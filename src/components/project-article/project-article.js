"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";

// Rendu d'une page projet dans le design d'article de la démo (post_details_block).
// project = objet localisé (content.js) ; img = {hero, body} ; labels = libellés localisés ; home = préfixe locale ("" | "/fr" | "/es").
export default function ProjectArticle({ project, img, labels, home = "" }) {
  return (
    <LayoutTwo>
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
                    <img src={img.hero} className="img-fluid" alt={project.heroAlt} width={690} height={460} />
                  </figure>
                  <ul className="authar-info d-flex flex-wrap">
                    <li><span className="link">VersionDude</span></li>
                    <li>{labels.statusLabel}: {project.status}</li>
                  </ul>

                  {project.body.map((para, i) => (<p key={i}>{para}</p>))}

                  <figure className="align-left">
                    <img src={img.body} alt={project.bodyCaption} width={300} height={362} />
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
