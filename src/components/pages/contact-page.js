"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

export default function ContactPage({ locale = "en" }) {
  const s = t(locale).contact;
  const ui = t(locale).ui;
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <section className="inner-head bg-img" style={{ backgroundImage: "url('/assets/articles/proton-mail-review-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container position-relative">
            <div className="row"><div className="col-sm-12">
              <h1 className="entry-title text-white">{s.title}</h1>
              <p className="description text-white">{s.lead}</p>
              <div className="breadcrumb"><ul className="clearfix">
                <li className="ib"><Link href={p || "/"}>{ui.home}</Link></li>
                <li className="ib current-page">{s.title}</li>
              </ul></div>
            </div></div>
          </div>
        </section>

        <section className="py-5"><div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <p>{s.intro}</p>
              <p className="mb-1"><strong>{s.emailLabel}</strong></p>
              <p><a href={`mailto:${s.email}`} className="link">{s.email}</a></p>
              <p className="text-muted small">{s.note}</p>
            </div>
            <div className="col-lg-7">
              <form action={`mailto:${s.email}`} method="post" encType="text/plain">
                <div className="row g-3">
                  <div className="col-md-6"><input type="text" className="form-control" name="name" placeholder={s.form.name} required /></div>
                  <div className="col-md-6"><input type="email" className="form-control" name="email" placeholder={s.form.email} required /></div>
                  <div className="col-12"><textarea className="form-control" name="message" rows={6} placeholder={s.form.message} required /></div>
                  <div className="col-12"><button type="submit" className="btn btn-primary">{s.form.send}</button></div>
                </div>
              </form>
            </div>
          </div>
        </div></section>
      </main>
    </LayoutTwo>
  );
}
