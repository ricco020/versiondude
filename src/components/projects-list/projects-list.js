"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";

export default function ProjectsList({ intro, title, projects }) {
  return (
    <LayoutTwo>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <div className="align-items-center row">
              <div className="col"><h1 className="mb-sm-0"><strong>{title}</strong></h1></div>
              <div className="col-12 col-sm-auto">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb d-inline-block">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="mb-4">{intro}</p>
          <div className="row">
            {projects.map((p) => (
              <div className="col-md-6 mb-4" key={p.slug}>
                <article className="post">
                  <figure className="post-thumb">
                    <Link href={`/projects/${p.slug}`}>
                      <img src={p.hero} className="img-fluid" alt={p.heroAlt} width={690} height={460} />
                    </Link>
                  </figure>
                  <div className="post-content pt-3">
                    <h3 className="post-title"><Link href={`/projects/${p.slug}`}>{p.name}</Link></h3>
                    <p>{p.excerpt}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
