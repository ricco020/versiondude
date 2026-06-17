import Link from "next/link";
import { t } from "@/data/site-i18n";
import { articleHref } from "@/data/articles";

// Tags réels = catégories + thèmes, liens vers les pages catégorie (locale-aware). Plus de href="#".
const Tags = ({ locale = "en" }) => {
  const s = t(locale);
  const p = locale === "en" ? "" : `/${locale}`;
  const tags = [
    { label: s.cats.standards, href: `${p}/categories/standards` },
    { label: s.cats.parsing, href: `${p}/categories/parsing` },
    { label: s.cats.tooling, href: `${p}/categories/tooling` },
    { label: s.cats.archive, href: `${p}/categories/archive` },
    { label: "HTML", href: `${p}/categories/standards` },
    { label: "DOM", href: articleHref("what-is-the-dom", locale) },
    { label: "Proton", href: articleHref("proton-mail-review", locale) },
    { label: "Open source", href: articleHref("open-source-password-managers", locale) },
    { label: "Privacy", href: articleHref("best-encrypted-email", locale) },
  ];
  return (
    <div className="panel_inner mb-0">
      <div className="panel_header"><h4><strong>Tags </strong></h4></div>
      <div className="panel_body">
        <div className="tags-inner d-flex flex-wrap gap-2">
          {tags.map((tg, i) => (
            <Link key={i} href={tg.href} className="ui tag text-uppercase fw-semibold border">{tg.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
