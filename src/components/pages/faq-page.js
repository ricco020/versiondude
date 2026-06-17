"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

export default function FaqPage({ locale = "en" }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <section className="inner-head bg-img" style={{ backgroundImage: "url('/assets/articles/secrets-management-tools-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container position-relative">
            <div className="row"><div className="col-sm-12">
              <h1 className="entry-title text-white">{s.faqTitle}</h1>
              <div className="breadcrumb"><ul className="clearfix">
                <li className="ib"><Link href={p || "/"}>{s.ui.home}</Link></li>
                <li className="ib current-page">FAQ</li>
              </ul></div>
            </div></div>
          </div>
        </section>

        <section className="faq-inner py-5">
          <div className="container">
            <div className="row justify-content-center"><div className="col-lg-10">
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
            </div></div>
          </div>
        </section>
      </main>
    </LayoutTwo>
  );
}
