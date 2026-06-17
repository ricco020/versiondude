"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import { t } from "@/data/site-i18n";

export default function AboutPage({ locale = "en" }) {
  const s = t(locale).about;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <h1 className="mb-sm-0"><strong>{s.title}</strong></h1>
          </div>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="mb-1">{s.missionTitle}</h2>
              <p className="lead text-muted">{s.missionLead}</p>
              {s.mission.map((p, i) => (<p key={i}>{p}</p>))}

              <h2 className="mt-5 mb-2">{s.historyTitle}</h2>
              {s.history.map((p, i) => (<p key={i}>{p}</p>))}

              <h2 className="mt-5 mb-2">{s.independentTitle}</h2>
              <p>{s.independent}</p>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
