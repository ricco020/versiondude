import Link from "next/link";
import { t } from "@/data/site-i18n";

export default function Footer({ locale = "en" }) {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="text-white">VersionDude</h3>
            <p className="text-white-50">{s.footer.tagline}</p>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <h5 className="text-white mb-3">{s.ui.projects}</h5>
            <ul className="list-unstyled">
              <li><Link href={`${p}/projects/html5-parser`} className="text-white-50">HTML5 Parser</Link></li>
              <li><Link href={`${p}/projects/validator-nu`} className="text-white-50">Validator.nu</Link></li>
              <li><Link href={`${p}/projects/railfrog`} className="text-white-50">Railfrog</Link></li>
              <li><Link href={`${p}/projects/pellet`} className="text-white-50">Pellet</Link></li>
              <li><Link href={`${p}/projects/bersirc`} className="text-white-50">Bersirc</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <h5 className="text-white mb-3">{s.nav.articles}</h5>
            <ul className="list-unstyled">
              <li><Link href={`${p}/about`} className="text-white-50">{s.nav.about}</Link></li>
              <li><Link href={`${p}/contact`} className="text-white-50">{s.nav.contact}</Link></li>
              <li><Link href={`${p}/faq`} className="text-white-50">{s.nav.faq}</Link></li>
              <li><Link href={`${p}/projects`} className="text-white-50">{s.ui.allProjects}</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-white-50 mb-0 small">© {s.footer.rights}</p>
      </div>
    </footer>
  );
}
