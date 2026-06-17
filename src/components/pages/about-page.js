"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

export default function AboutPage({ locale = "en" }) {
  const s = t(locale).about;
  const ui = t(locale).ui;
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <section className="inner-head bg-img" style={{ backgroundImage: "url('/assets/articles/semantic-web-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container position-relative">
            <div className="row"><div className="col-sm-12">
              <h2 className="entry-title text-white">{s.title}</h2>
              <p className="description text-white">{s.missionLead}</p>
              <div className="breadcrumb"><ul className="clearfix">
                <li className="ib"><Link href={p || "/"}>{ui.home}</Link></li>
                <li className="ib current-page">{s.title}</li>
              </ul></div>
            </div></div>
          </div>
        </section>

        <div className="team about-content">
          <div className="container">
            <div className="about-title">
              <h1>{s.missionTitle}</h1>
              <h3>{s.missionLead}</h3>
              {s.mission.map((para, i) => (<p key={i}>{para}</p>))}
            </div>

            <div className="about-title mt-5">
              <h2>{s.historyTitle}</h2>
              {s.history.map((para, i) => (<p key={i}>{para}</p>))}
            </div>

            <div className="about-title mt-5">
              <h2>{s.independentTitle}</h2>
              <p>{s.independent}</p>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
