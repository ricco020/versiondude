"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import { t } from "@/data/site-i18n";

export default function FaqPage({ locale = "en" }) {
  const s = t(locale);
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <h1 className="mb-sm-0"><strong>{s.faqTitle}</strong></h1>
          </div>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="accordion" id="faqAcc">
                {s.faq.map((item, i) => (
                  <div className="accordion-item mb-2" key={i}>
                    <h2 className="accordion-header" id={`fh${i}`}>
                      <button className={`accordion-button ${i === 0 ? "" : "collapsed"}`} type="button"
                        data-bs-toggle="collapse" data-bs-target={`#fc${i}`} aria-expanded={i === 0 ? "true" : "false"} aria-controls={`fc${i}`}>
                        {item.q}
                      </button>
                    </h2>
                    <div id={`fc${i}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} aria-labelledby={`fh${i}`} data-bs-parent="#faqAcc">
                      <div className="accordion-body">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
