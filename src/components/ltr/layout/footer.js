import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3 className="text-white">VersionDude</h3>
            <p className="text-white-50">
              Web standards, HTML parsing and developer tooling — plus practical guides to
              open-source, self-hosted and privacy tools.
            </p>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <h5 className="text-white mb-3">Projects</h5>
            <ul className="list-unstyled">
              <li><Link href="/projects/html5-parser" className="text-white-50">HTML5 Parser</Link></li>
              <li><Link href="/projects/validator-nu" className="text-white-50">Validator.nu</Link></li>
              <li><Link href="/projects/railfrog" className="text-white-50">Railfrog</Link></li>
              <li><Link href="/projects/pellet" className="text-white-50">Pellet</Link></li>
              <li><Link href="/projects/bersirc" className="text-white-50">Bersirc</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-6 mb-4">
            <h5 className="text-white mb-3">Guides</h5>
            <ul className="list-unstyled">
              <li><Link href="/articles/open-source-password-managers" className="text-white-50">Open-source password managers</Link></li>
              <li><Link href="/articles/best-encrypted-email" className="text-white-50">Best encrypted email</Link></li>
              <li><Link href="/articles/what-is-the-dom" className="text-white-50">What is the DOM?</Link></li>
              <li><Link href="/projects" className="text-white-50">All projects</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-white-50 mb-0 small">© VersionDude — independent web-standards &amp; developer-tooling archive.</p>
      </div>
    </footer>
  );
};

export default Footer;
