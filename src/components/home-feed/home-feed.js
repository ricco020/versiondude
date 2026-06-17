"use client";
import Layout from "@/components/ltr/layout/layout";
import Link from "next/link";

// Home VersionDude : design iNews (classes template slider-post / news-image / post-category / post-text)
// peuplé de vrai contenu (articles + projets). Tous les liens pointent vers de vraies pages.
function Card({ href, img, alt, category, title, meta, big }) {
  return (
    <div className={`slider-post ${big ? "post-height-2" : "post-height-4"}`}>
      <Link href={href} className="news-image">
        <img src={img} alt={alt} className="img-fluid" />
      </Link>
      <div className="post-text">
        <span className="post-category">{category}</span>
        <h4><Link href={href}>{title}</Link></h4>
        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
          <li>By <span className="editor-name">VersionDude</span></li>
          {meta ? <li>{meta}</li> : null}
        </ul>
      </div>
    </div>
  );
}

export default function HomeFeed({ articles, projects }) {
  const featured = articles[0];
  const secondary = articles.slice(1, 5);
  const rest = articles.slice(5);
  return (
    <Layout>
      <main className="page_main_wrapper">
        {/* FEATURE SECTION */}
        <div className="bg-img feature-section py-4 py-lg-3 py-xl-4">
          <div className="container">
            <div className="row thm-margin">
              <div className="col-lg-6 thm-padding mb-4 mb-lg-0">
                <Card big href={`/articles/${featured.slug}`} img={featured.hero} alt={featured.heroAlt}
                  category={featured.cat} title={featured.title} meta={`${featured.readingMinutes} min read`} />
              </div>
              <div className="col-lg-6 thm-padding">
                <div className="row slider-right-post thm-margin">
                  {secondary.map((x) => (
                    <div className="col-sm-6 thm-padding mb-4" key={x.slug}>
                      <Card href={`/articles/${x.slug}`} img={x.hero} alt={x.heroAlt}
                        category={x.cat} title={x.title} meta={`${x.readingMinutes} min read`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LATEST ARTICLES */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3"><h2 className="border-bottom pb-2">Latest articles</h2></div>
              {rest.map((x) => (
                <div className="col-md-4 col-sm-6 thm-padding mb-4" key={x.slug}>
                  <Card href={`/articles/${x.slug}`} img={x.hero} alt={x.heroAlt}
                    category={x.cat} title={x.title} meta={`${x.readingMinutes} min read`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3"><h2 className="border-bottom pb-2">Projects</h2></div>
              {projects.map((p) => (
                <div className="col-md-4 col-sm-6 thm-padding mb-4" key={p.slug}>
                  <Card href={`/projects/${p.slug}`} img={p.hero} alt={p.heroAlt}
                    category={p.status} title={p.name} meta={null} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
