"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import { t } from "@/data/site-i18n";

export default function ContactPage({ locale = "en" }) {
  const s = t(locale).contact;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="page-title">
          <div className="container">
            <h1 className="mb-sm-0"><strong>{s.title}</strong></h1>
          </div>
        </div>
        <div className="container py-4">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-5">
              <p className="lead text-muted">{s.lead}</p>
              <p>{s.intro}</p>
              <p className="mb-1"><strong>{s.emailLabel}</strong></p>
              <p><a href={`mailto:${s.email}`} className="link">{s.email}</a></p>
              <p className="text-muted small">{s.note}</p>
            </div>
            <div className="col-lg-6">
              <form action={`mailto:${s.email}`} method="post" encType="text/plain">
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" placeholder={s.form.name} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" name="email" placeholder={s.form.email} required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" name="message" rows={6} placeholder={s.form.message} required />
                </div>
                <button type="submit" className="btn btn-primary">{s.form.send}</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
