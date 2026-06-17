import FR from "./articles-fr.json";
import ES from "./articles-es.json";
import ENX from "./articles-en.json";
import SECDEF from "./article-sections-i18n.json";

// Découpe le corps d'un article (déjà localisé) en sections {heading, paras} selon les intertitres.
export function getSections(article, locale = "en") {
  const def = SECDEF[article.slug];
  const paras = article.paras || [];
  if (!def) return [{ heading: "", paras }];
  const out = []; let i = 0;
  for (const sec of def) {
    const h = sec[locale] || sec.en || "";
    out.push({ heading: h, paras: paras.slice(i, i + sec.n) });
    i += sec.n;
  }
  if (i < paras.length) out.push({ heading: "", paras: paras.slice(i) });
  return out;
}
// VersionDude — articles éditoriaux réels (EN + traductions FR/ES). Contenu factuel et original.
// Pilier 1 (web standards / jus) : non monétisé. Pilier 2 (privacy/open-source) : CTA Proton perso.
// Images : Pixabay, libres de droits, uniques, légendes honnêtes (vérifiées).

const PROTON = {
  pass: { url: 'https://go.getproton.me/aff_c?offer_id=38&aff_id=18294', label: 'Try Proton Pass', sublabel: 'Open-source, end-to-end encrypted password manager from the makers of Proton Mail.' },
  mail: { url: 'https://go.getproton.me/aff_c?offer_id=7&aff_id=18294', label: 'Try Proton Mail', sublabel: 'End-to-end encrypted, Swiss-based email built on open-source cryptography.' },
};

const a = (o) => o;

export const ARTICLES = [
  // ---------- PILIER 2 — monétisable (Proton) ----------
  a({
    slug: 'open-source-password-managers', category: 'tooling', readingMinutes: 6,
    title: 'The best open-source password managers',
    dek: 'Why open-source matters for a password manager, and the projects worth trusting — from Bitwarden and KeePassXC to Proton Pass.',
    hero: '/assets/articles/open-source-password-managers-hero.jpg', heroAlt: 'A padlock on a circuit board representing digital security',
    body: '/assets/articles/open-source-password-managers-body.jpg', bodyCaption: 'A metallic padlock, symbolising account security.',
    paras: [
      'A password manager holds the keys to your entire digital life, so the question of whether you can trust it matters more than for almost any other app. Open-source software answers part of that question: when the code is public, independent researchers can audit how your secrets are stored and encrypted, instead of taking a vendor’s word for it.',
      'Bitwarden is the best-known open-source option. Its clients and server are published under open licences and it has been independently audited; you can even self-host the backend if you want full control. KeePassXC takes a different, fully local approach: your vault is a single encrypted file you store and sync yourself, with no cloud component at all.',
      'For people who want open-source cryptography without running their own infrastructure, Proton Pass is a strong managed option. It is built by the team behind Proton Mail, uses end-to-end encryption, and its apps are open source, so you get auditable security with the convenience of hosted sync across devices.',
      'Whichever you choose, the fundamentals are the same: a long, unique master password, two-factor authentication on the vault, and unique generated passwords for every site. The right tool is the one you will actually use consistently.',
    ],
    list: ['Bitwarden — open-source, audited, optional self-hosting', 'KeePassXC — fully local encrypted vault file', 'Proton Pass — open-source apps, hosted end-to-end encrypted sync'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'self-hosted-password-managers', category: 'tooling', readingMinutes: 6,
    title: 'Self-hosted password managers: full control of your vault',
    dek: 'Running your own password manager puts you in charge of where secrets live — here is how the main options compare, and when a managed service makes more sense.',
    hero: '/assets/articles/self-hosted-password-managers-hero.jpg', heroAlt: 'Server hardware in a data centre',
    body: '/assets/articles/self-hosted-password-managers-body.jpg', bodyCaption: 'Networking and storage equipment in a server rack.',
    paras: [
      'Self-hosting a password manager means the encrypted vault lives on infrastructure you control rather than a vendor’s cloud. For developers and privacy-conscious users that can be appealing: no third party holds your data, and you decide the backup and access policy.',
      'Vaultwarden is the most popular route — a lightweight, compatible reimplementation of the Bitwarden server that runs comfortably in a single container on a small VPS or home server. It works with the official Bitwarden client apps, so you keep a polished user experience while owning the backend.',
      'KeePassXC is the simplest form of "self-hosting": the vault is just an encrypted file. You sync it with whatever you already trust — your own storage, an encrypted drive, or a private repository. There is no server to maintain at all.',
      'Self-hosting is not free of cost: you become responsible for uptime, updates, and especially backups. If you lose the file or the server without a backup, the data is gone. If that responsibility sounds heavy, a managed end-to-end encrypted service such as Proton Pass gives you most of the privacy benefits — your secrets are encrypted before they leave your device — without the operational burden.',
    ],
    list: ['Vaultwarden — self-hosted, Bitwarden-compatible server', 'KeePassXC — encrypted file you sync yourself', 'Proton Pass — managed, end-to-end encrypted alternative'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'secrets-management-tools', category: 'tooling', readingMinutes: 6,
    title: 'Secrets management tools for developers',
    dek: 'API keys, tokens and .env files should never sit in plain text or in your git history. Here is how teams keep application secrets safe.',
    hero: '/assets/articles/secrets-management-tools-hero.jpg', heroAlt: 'Program code displayed in a terminal',
    body: '/assets/articles/secrets-management-tools-body.jpg', bodyCaption: 'Lines of code on a dark terminal screen.',
    paras: [
      'Application secrets — database passwords, API keys, signing tokens — are a recurring source of breaches. The most common mistakes are hard-coding them in source, committing a .env file by accident, or pasting them into chat. The goal of secrets management is to keep these values encrypted, access-controlled, and out of version control.',
      'At the project level, the basics go a long way: add .env to .gitignore, commit a redacted .env.example instead, and rotate any key that has ever touched a public repository. Tools like git-secrets or pre-commit hooks can block accidental commits before they happen.',
      'For teams and production systems, dedicated tools centralise secrets behind authentication and audit logging. HashiCorp Vault, cloud-native options like AWS Secrets Manager, and open-source projects such as Infisical let applications fetch secrets at runtime instead of storing them on disk.',
      'For the personal secrets a developer accumulates — recovery codes, service logins, license keys — an encrypted password manager is the right home. Proton Pass, with its end-to-end encryption and secure note support, keeps those values out of plain-text files and synced safely across your machines.',
    ],
    list: ['Keep .env out of git; commit .env.example', 'Rotate any leaked key immediately', 'Vault / Infisical for runtime secrets', 'A password manager for personal credentials'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'proton-mail-review', category: 'tooling', readingMinutes: 5,
    title: 'Proton Mail review: encrypted email, in practice',
    dek: 'What Proton Mail actually offers — end-to-end encryption, open-source apps and a Swiss privacy base — and where its trade-offs lie.',
    hero: '/assets/articles/proton-mail-review-hero.jpg', heroAlt: 'A handwritten letter and envelope on a desk',
    body: '/assets/articles/proton-mail-review-body.jpg', bodyCaption: 'A person typing on a laptop keyboard.',
    paras: [
      'Proton Mail is an email service built around end-to-end and zero-access encryption: messages are stored encrypted in a way that, by design, Proton itself cannot read. It is based in Switzerland, operated by Proton AG, and its client applications are open source, which lets the cryptography be independently reviewed.',
      'In daily use it behaves like a normal mailbox, with web, desktop and mobile apps. Mail between Proton users is automatically end-to-end encrypted; messages to other providers can be sent password-protected when needed. A free tier exists with limited storage, and paid plans add custom domains, more storage and extra aliases.',
      'The honest trade-offs: end-to-end encryption only fully applies between Proton users or with password-protected messages, and some convenience features differ from mainstream providers because of the encryption model. For anyone who wants email that the provider cannot mine, those trade-offs are usually worth it.',
      'If you are moving away from ad-funded email, Proton Mail is one of the most credible, openly auditable options available today.',
    ],
    cta: PROTON.mail,
  }),
  a({
    slug: 'best-encrypted-email', category: 'tooling', readingMinutes: 6,
    title: 'The best encrypted email services',
    dek: 'What "encrypted email" really means, the difference between zero-access and end-to-end, and the services that do it credibly.',
    hero: '/assets/articles/best-encrypted-email-hero.jpg', heroAlt: 'A laptop with a glowing cyber-security padlock graphic',
    body: '/assets/articles/best-encrypted-email-body.jpg', bodyCaption: 'A laptop keyboard lit in blue, suggesting cyber security.',
    paras: [
      'Ordinary email is transmitted with transport encryption, but the provider still stores your messages in a form it can read — and often scan. "Encrypted email" usually means something stronger: zero-access encryption, where the provider cannot read your stored mail, and end-to-end encryption, where only sender and recipient can.',
      'Proton Mail is the most established option, with zero-access storage, end-to-end encryption between users, open-source apps and a Swiss legal base. Tuta (formerly Tutanota) is another open-source, end-to-end encrypted provider with its own approach to encrypting subject lines and the whole mailbox.',
      'No provider can magically encrypt a message end-to-end to someone using a normal Gmail account — that is a limitation of how email works, not of any one service. The realistic goal is to keep your own stored mail private and to get true end-to-end encryption with contacts on the same system or via password-protected messages.',
      'For most people who want a private mailbox that the provider cannot read, Proton Mail is the easiest credible starting point.',
    ],
    list: ['Zero-access: provider cannot read stored mail', 'End-to-end: only sender and recipient can read', 'Proton Mail and Tuta are the leading open-source options'],
    cta: PROTON.mail,
  }),
  a({
    slug: 'proton-pass-review', category: 'tooling', readingMinutes: 5,
    title: 'Proton Pass review: an open-source password manager',
    dek: 'Proton’s password manager brings end-to-end encryption, open-source apps and integrated email aliases — here is how it holds up.',
    hero: '/assets/articles/proton-pass-review-hero.jpg', heroAlt: 'A digital padlock over a privacy-policy background',
    body: '/assets/articles/proton-pass-review-body.jpg', bodyCaption: 'An abstract digital security graphic.',
    paras: [
      'Proton Pass is the password manager in the Proton suite. It stores logins, notes and card details with end-to-end encryption, and its client apps are open source, so the security model can be independently audited — the same philosophy behind Proton Mail.',
      'A distinctive feature is built-in email aliases (hide-my-email): instead of giving every site your real address, you generate a unique alias that forwards to your inbox, which limits tracking and contains the damage if a site is breached. It also includes a standard generator, autofill across browsers and devices, and two-factor support.',
      'Compared with Bitwarden it is newer and its ecosystem is still growing, but it benefits from Proton’s track record on encryption and from tight integration if you already use Proton Mail or VPN. There is a usable free tier, with paid plans unlocking unlimited aliases and extra vaults.',
      'For anyone who wants an open-source, privacy-first manager backed by an established encryption company, Proton Pass is a compelling choice.',
    ],
    cta: PROTON.pass,
  }),
  // ---------- PILIER 1 — web standards (jus, non monétisé) ----------
  a({
    slug: 'what-is-the-dom', category: 'parsing', readingMinutes: 5,
    title: 'What is the DOM?',
    dek: 'The Document Object Model is the tree a browser builds from your HTML — and the thing your JavaScript actually talks to.',
    hero: '/assets/articles/what-is-the-dom-hero.jpg', heroAlt: 'HTML code on a screen',
    body: '/assets/articles/what-is-the-dom-body.jpg', bodyCaption: 'Coloured source code shown on a monitor.',
    paras: [
      'The Document Object Model, or DOM, is the in-memory representation a browser creates after it parses an HTML document. Where the HTML is text, the DOM is a tree of objects — elements, attributes and text nodes — that programs can read and change.',
      'When the browser finishes parsing a page, every tag becomes a node with a parent and children, mirroring the nesting of your markup. JavaScript interacts with this tree through APIs like document.querySelector and element.appendChild; changing the DOM is what updates what the user sees, without reloading the page.',
      'It helps to separate three ideas: the HTML source you write, the DOM the browser builds from it (after applying the standard parsing and error-recovery rules), and the rendered pixels on screen. Frameworks like React work by computing changes to this same DOM efficiently.',
      'Understanding the DOM as a tree — produced by a parser, manipulated by script — is the foundation for understanding how validation, accessibility and rendering all fit together.',
    ],
    related: 'html5-parser',
  }),
  a({
    slug: 'html-validator', category: 'standards', readingMinutes: 5,
    title: 'What an HTML validator does (and why it matters)',
    dek: 'An HTML validator checks your markup against the living standard — catching errors that browsers hide but that hurt accessibility and reliability.',
    hero: '/assets/articles/html-validator-hero.jpg', heroAlt: 'A green check mark symbol',
    body: '/assets/articles/html-validator-body.jpg', bodyCaption: 'A check-mark icon indicating a passed check.',
    paras: [
      'An HTML validator parses your document the way a browser would and reports where it deviates from the HTML standard: unclosed tags, misused attributes, elements in places the specification does not allow. Because browsers are deliberately forgiving, these problems often go unnoticed until they cause subtle bugs.',
      'The reference tool is the Nu HTML Checker (validator.nu / validator.w3.org/nu), which grew out of the same conformance-checking work documented elsewhere on this site. It applies the real parsing algorithm and the schema rules behind the living standard.',
      'Valid markup is not pedantry. It improves accessibility for assistive technology, reduces cross-browser inconsistencies, and makes your pages more predictable for search engines and other tools that read the DOM. Fixing validator warnings is one of the cheapest quality wins available.',
      'Run the validator as part of your workflow — on commit or in CI — and treat new errors as regressions, the same way you would a failing test.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'what-is-a-parser', category: 'parsing', readingMinutes: 5,
    title: 'What is a parser?',
    dek: 'A parser turns a stream of characters into structured data a program can work with — the step between raw text and meaning.',
    hero: '/assets/articles/what-is-a-parser-hero.jpg', heroAlt: 'Streams of binary and program code',
    body: '/assets/articles/what-is-a-parser-body.jpg', bodyCaption: 'Abstract representation of digital data.',
    paras: [
      'A parser is the component that reads input text and builds a structured representation of it. It usually works in two stages: a tokenizer (or lexer) groups characters into meaningful units — tags, words, numbers, symbols — and a tree-construction stage arranges those tokens into a hierarchy according to a grammar.',
      'Parsers are everywhere: compilers parse source code, browsers parse HTML and CSS, and applications parse JSON, XML and configuration files. The output is typically a tree — an abstract syntax tree for code, or the DOM for a web page.',
      'What makes HTML parsing unusual is its standardised error recovery. Real-world markup is full of mistakes, so the HTML specification defines exactly how a parser must handle them, which is why every modern browser builds the same tree from the same broken input.',
      'Once you see software as a series of parsers turning text into structure, a lot of the web stack becomes easier to reason about.',
    ],
    related: 'html5-parser',
  }),
  a({
    slug: 'semantic-web', category: 'standards', readingMinutes: 6,
    title: 'The semantic web, explained',
    dek: 'The idea of a web of data — where meaning is machine-readable — and the standards like RDF, OWL and reasoners that make it work.',
    hero: '/assets/articles/semantic-web-hero.jpg', heroAlt: 'An abstract network of connected points',
    body: '/assets/articles/semantic-web-body.jpg', bodyCaption: 'An abstract pattern of connected nodes and lines.',
    paras: [
      'The semantic web is an extension of the web in which information is given well-defined meaning, so that machines — not just people — can process it. Instead of pages of text, the goal is a web of data, where relationships between things are explicit and queryable.',
      'It rests on a stack of W3C standards. RDF expresses facts as subject–predicate–object triples; ontologies written in OWL (the Web Ontology Language) describe the classes and relationships in a domain; and SPARQL queries the resulting graphs.',
      'Reasoners are the engines that make this powerful. A reasoner such as Pellet takes an OWL ontology and infers new facts that follow logically from the stated ones — checking consistency and answering questions the raw data never spelled out.',
      'You meet the semantic web’s descendants every day: structured data and schema.org markup that power rich search results are a pragmatic slice of the same idea — making the meaning of a page legible to machines.',
    ],
    related: 'pellet',
  }),
  a({
    slug: 'xml-vs-html', category: 'standards', readingMinutes: 5,
    title: 'XML vs HTML: what is the difference?',
    dek: 'They look alike, but XML and HTML were built for different jobs — one describes documents for browsers, the other carries structured data.',
    hero: '/assets/articles/xml-vs-html-hero.jpg', heroAlt: 'Markup code in an editor',
    body: '/assets/articles/xml-vs-html-body.jpg', bodyCaption: 'HTML and CSS code shown in a code editor.',
    paras: [
      'HTML and XML share ancestry in SGML and use the same angle-bracket syntax, which is why they look similar. But they were designed for different purposes. HTML has a fixed vocabulary of elements with built-in meaning for browsers, and it is deliberately forgiving of errors.',
      'XML, by contrast, defines no tags of its own — it is a meta-language for creating your own markup to carry structured data. It is strict: a document that is not well-formed (every tag closed, properly nested) is rejected outright, which makes it reliable for machine-to-machine exchange.',
      'There is also XHTML, which is HTML expressed under XML’s strict rules. In modern web development HTML5 is the standard for pages, while XML and formats derived from it remain common for configuration, data feeds and document storage.',
      'A useful rule of thumb: reach for HTML when you are describing a document for people to read in a browser, and for XML-family formats when you are exchanging structured data between systems.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'ruby-on-rails-cms', category: 'archive', readingMinutes: 5,
    title: 'Ruby on Rails content-management systems',
    dek: 'Rails is better known for apps than for CMSes, but a lineage of Rails-based content systems — from Railfrog onward — has always existed.',
    hero: '/assets/articles/ruby-on-rails-cms-hero.jpg', heroAlt: 'A developer working at a desk with a computer',
    body: '/assets/articles/ruby-on-rails-cms-body.jpg', bodyCaption: 'Program code on a screen.',
    paras: [
      'Ruby on Rails made web application development famous for its conventions and speed, and over the years developers have built content-management systems on top of it. These aim to combine editorial features — pages, media, workflow — with the flexibility of a full Rails app underneath.',
      'Railfrog was one of the early entrants, a Rails-based CMS historically distributed as a plugin. Like many projects of its era it is no longer actively developed, but it is part of the story of how the Rails community approached content management.',
      'Later and currently maintained options include projects such as Comfortable Mexican Sofa and Spina, which integrate as engines into an existing Rails application rather than running as a separate platform. That "CMS as a library" model fits teams that already build in Rails.',
      'If you are choosing today, weigh how much you need a turnkey editorial interface versus the freedom to treat content as just another part of your Rails codebase.',
    ],
    related: 'railfrog',
  }),
  a({
    slug: 'character-encoding-utf-8', category: 'standards', readingMinutes: 5,
    title: 'Character encoding and why UTF-8 won',
    dek: 'Mojibake, broken accents and "" symbols all come down to encoding. Here is what UTF-8 is and why it is the default of the modern web.',
    hero: '/assets/articles/character-encoding-utf-8-hero.jpg', heroAlt: 'Printed letters and text characters',
    body: '/assets/articles/character-encoding-utf-8-body.jpg', bodyCaption: 'An arrangement of letter tiles.',
    paras: [
      'Computers store text as numbers, and a character encoding is the agreement about which number means which character. When a document is written with one encoding and read with another, you get mojibake — the garbled accents and question-mark boxes everyone has seen.',
      'Early encodings like ASCII covered only English; a patchwork of incompatible 8-bit encodings followed for other languages. Unicode solved the underlying problem by giving every character in every script a unique code point. UTF-8 is the encoding that maps those code points to bytes.',
      'UTF-8 won because it is backward-compatible with ASCII, space-efficient for common text, and able to represent every Unicode character. It is now the overwhelming default on the web, and the HTML standard recommends declaring it explicitly with a <meta charset="utf-8"> at the top of every document.',
      'The practical advice is simple: save your files as UTF-8, serve them as UTF-8, and declare UTF-8 — get those three to agree and encoding problems disappear.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'self-hosted-cms', category: 'tooling', readingMinutes: 5,
    title: 'Self-hosted CMS options worth knowing',
    dek: 'Owning your content platform means control over data, customisation and cost — here is how the main self-hosted approaches compare.',
    hero: '/assets/articles/self-hosted-cms-hero.jpg', heroAlt: 'Cloud and server infrastructure concept',
    body: '/assets/articles/self-hosted-cms-body.jpg', bodyCaption: 'Servers representing cloud infrastructure.',
    paras: [
      'A self-hosted content-management system runs on infrastructure you control, rather than a hosted SaaS. The appeal is ownership: your content and data stay with you, you can customise freely, and you avoid per-seat subscription costs — at the price of handling hosting, updates and backups yourself.',
      'The traditional choice is WordPress, which still powers a large share of the web and has an enormous plugin ecosystem. For developers who want a clean separation between content and front end, headless options like Strapi, Directus and Ghost expose content over an API you consume from any framework.',
      'There is also a long history of framework-native systems — Rails-based content managers, for example — for teams that would rather treat content as part of their own application than adopt a separate platform.',
      'Whichever you pick, budget for the operational basics: automated backups, timely security updates, and a plan for scaling. Self-hosting rewards control with responsibility.',
    ],
    related: 'railfrog',
  }),
];

const CATS = {
  standards: 'Standards', parsing: 'Parsing', tooling: 'Tooling', archive: 'Archive',
};

const TR = { fr: FR, es: ES };

// Slugs localisés par langue (EN = id canonique). FR/ES ont leurs propres slugs.
const ART_SLUG = {
  "open-source-password-managers": { fr: "meilleurs-gestionnaires-mots-de-passe-open-source", es: "mejores-gestores-de-contrasenas-de-codigo-abierto" },
  "self-hosted-password-managers": { fr: "gestionnaires-de-mots-de-passe-auto-heberges", es: "gestores-de-contrasenas-autoalojados" },
  "secrets-management-tools": { fr: "outils-de-gestion-des-secrets", es: "herramientas-de-gestion-de-secretos" },
  "proton-mail-review": { fr: "test-proton-mail", es: "analisis-proton-mail" },
  "best-encrypted-email": { fr: "meilleurs-services-email-chiffre", es: "mejores-servicios-de-correo-cifrado" },
  "proton-pass-review": { fr: "test-proton-pass", es: "analisis-proton-pass" },
  "what-is-the-dom": { fr: "qu-est-ce-que-le-dom", es: "que-es-el-dom" },
  "html-validator": { fr: "validateur-html", es: "validador-html" },
  "what-is-a-parser": { fr: "qu-est-ce-qu-un-parseur", es: "que-es-un-analizador" },
  "semantic-web": { fr: "web-semantique", es: "web-semantica" },
  "xml-vs-html": { fr: "xml-contre-html", es: "xml-frente-a-html" },
  "ruby-on-rails-cms": { fr: "cms-ruby-on-rails", es: "cms-ruby-on-rails-es" },
  "character-encoding-utf-8": { fr: "encodage-des-caracteres-utf-8", es: "codificacion-de-caracteres-utf-8" },
  "self-hosted-cms": { fr: "cms-auto-heberges", es: "cms-autoalojados" },
};
export function slugFor(enSlug, locale) {
  return locale === "en" ? enSlug : (ART_SLUG[enSlug] && ART_SLUG[enSlug][locale]) || enSlug;
}
export function enSlugOf(locSlug, locale) {
  if (locale === "en") return locSlug;
  for (const en in ART_SLUG) if (ART_SLUG[en][locale] === locSlug) return en;
  return locSlug;
}
// href complet localisé pour un article (slug localisé + préfixe locale)
export function articleHref(enSlug, locale) {
  const p = locale === "en" ? "" : `/${locale}`;
  return `${p}/articles/${slugFor(enSlug, locale)}`;
}
export function localizedArticleSlugs(locale) {
  return ARTICLES.map((a) => slugFor(a.slug, locale));
}
// Corps EN étoffé (8-12 paragraphes) appliqué d'abord, puis traduction par locale.
function applyEN(a) {
  const o = ENX[a.slug];
  return o ? { ...a, paras: o.paras || a.paras, list: o.list || a.list } : a;
}
function localize(a, locale) {
  const o = (TR[locale] || {})[a.slug];
  if (!o) return a;
  return { ...a, title: o.title || a.title, dek: o.dek || a.dek, paras: o.paras || a.paras,
    list: o.list || a.list, heroAlt: o.heroAlt || a.heroAlt, bodyCaption: o.bodyCaption || a.bodyCaption };
}
export function getArticles(locale = "en") {
  return ARTICLES.map((a) => (locale === "en" ? applyEN(a) : localize(applyEN(a), locale)));
}
export function findArticleBySlug(slug, locale = "en") {
  const en = enSlugOf(slug, locale); // accepte le slug localisé OU le slug EN
  const a = ARTICLES.find((x) => x.slug === en);
  if (!a) return undefined;
  return locale === "en" ? applyEN(a) : localize(applyEN(a), locale);
}
const CAT_I18N = {
  en: CATS,
  fr: { standards: "Standards", parsing: "Analyse", tooling: "Outils", archive: "Archive" },
  es: { standards: "Estándares", parsing: "Análisis", tooling: "Herramientas", archive: "Archivo" },
};
export function categoryLabel(key, locale = "en") { return (CAT_I18N[locale] || CATS)[key] || key; }
export const ARTICLE_SLUGS = ARTICLES.map((x) => x.slug);
