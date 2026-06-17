// VersionDude — strings & page content in EN/FR/ES. Real, honest content only.
export const LOCALES = ["en", "fr", "es"];
export const DEFAULT_LOCALE = "en";

const T = {
  en: {
    meta: { homeTitle: "VersionDude — web standards, parsers & developer tooling", homeDesc: "Web standards, HTML parsing and developer tooling — plus practical guides to open-source, self-hosted and privacy tools.", catDesc: "Browse VersionDude by category: web standards, HTML parsing, developer tooling and archived projects." },
    nav: { home: "Home", projects: "Projects", articles: "Guides", about: "About", contact: "Contact", faq: "FAQ" },
    cats: { standards: "Standards", parsing: "Parsing", tooling: "Tooling", archive: "Archive" },
    ui: { home: "Home", readMin: "min read", latest: "Latest articles", projects: "Projects", guides: "Guides",
          related: "Related project", currentHome: "Current home", status: "Status", by: "By", allProjects: "All projects",
          category: "Category", moreIn: "More in", search: "Search" },
    footer: { tagline: "Web standards, HTML parsing and developer tooling — plus practical guides to open-source, self-hosted and privacy tools.",
              rights: "VersionDude — independent web-standards & developer-tooling archive." },
    about: {
      title: "About VersionDude",
      missionTitle: "Our mission",
      missionLead: "Keeping a piece of web-standards history alive — and useful.",
      mission: [
        "VersionDude documents a set of open-source projects whose early development repositories were once hosted on this domain — among them an HTML5 parsing engine, the Validator.nu conformance checker, and the Pellet OWL reasoner. Each project page links to the project's current, actively maintained home.",
        "Alongside that archive we publish practical, independent guides to the tools developers and privacy-conscious users actually reach for: open-source and self-hosted password managers, encrypted email, secrets management and more.",
      ],
      historyTitle: "Why this domain",
      history: [
        "This domain carries a long history of links from the web-standards community — the WHATWG mailing list, the W3C, and developers like John Resig referenced its repositories when HTML5 was taking shape.",
        "Rather than let that history disappear, VersionDude preserves those references (every legacy link still resolves) and builds on them with original, honest content in the same technical spirit.",
      ],
      independentTitle: "An independent project",
      independent: "VersionDude is an independent publication. We do not claim authorship of the third-party projects we document; we link to their real maintainers. Some guides contain affiliate links, which are always disclosed.",
    },
    contact: {
      title: "Contact", lead: "Questions, corrections or suggestions? Get in touch.",
      intro: "If you spot an inaccuracy in a project page or a guide, we want to fix it. Email is the fastest way to reach us.",
      emailLabel: "Email", email: "hello@versiondude.net",
      form: { name: "Your name", email: "Your email", message: "Your message", send: "Send message" },
      note: "We read every message but cannot always reply individually.",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "What is VersionDude?", a: "An independent archive of open-source web-standards projects historically hosted on this domain, plus practical guides to developer and privacy tooling." },
      { q: "Do you maintain these projects?", a: "No. We document them and link to their current, actively maintained homes (for example on GitHub). We do not claim authorship." },
      { q: "Why do old repository links still work?", a: "We deliberately preserve every legacy link from the web-standards community: old Subversion paths now redirect to the matching project page, so no reference is broken." },
      { q: "Are your guides independent?", a: "Yes. Our guides are written independently. Some contain affiliate links — these are always clearly disclosed and never change our recommendations." },
      { q: "Is the content available in other languages?", a: "Yes — VersionDude is published in English, French and Spanish. Use the language switcher in the header." },
      { q: "How can I report an error?", a: "Email us. If a project detail or a guide is inaccurate, we will correct it." },
    ],
  },
  fr: {
    meta: { homeTitle: "VersionDude — standards web, parseurs & outils pour développeurs", homeDesc: "Standards web, parsing HTML et outillage pour développeurs — plus des guides pratiques sur les outils open source, auto-hébergés et de confidentialité.", catDesc: "Parcourez VersionDude par catégorie : standards web, parsing HTML, outils pour développeurs et projets archivés." },
    nav: { home: "Accueil", projects: "Projets", articles: "Guides", about: "À propos", contact: "Contact", faq: "FAQ" },
    cats: { standards: "Standards", parsing: "Analyse", tooling: "Outils", archive: "Archive" },
    ui: { home: "Accueil", readMin: "min de lecture", latest: "Derniers articles", projects: "Projets", guides: "Guides",
          related: "Projet lié", currentHome: "Dépôt actuel", status: "Statut", by: "Par", allProjects: "Tous les projets",
          category: "Catégorie", moreIn: "Plus dans", search: "Rechercher" },
    footer: { tagline: "Standards du web, analyse HTML et outils pour développeurs — avec des guides pratiques sur les outils open-source, auto-hébergés et de confidentialité.",
              rights: "VersionDude — archive indépendante des standards du web et des outils de développement." },
    about: {
      title: "À propos de VersionDude",
      missionTitle: "Notre mission",
      missionLead: "Préserver un pan de l'histoire des standards du web — et le rendre utile.",
      mission: [
        "VersionDude documente des projets open source dont les premiers dépôts de développement étaient hébergés sur ce domaine — parmi eux un moteur d'analyse HTML5, le validateur de conformité Validator.nu et le raisonneur OWL Pellet. Chaque page de projet renvoie vers son dépôt actuel, activement maintenu.",
        "À côté de cette archive, nous publions des guides pratiques et indépendants sur les outils que les développeurs et les utilisateurs soucieux de leur vie privée utilisent vraiment : gestionnaires de mots de passe open source et auto-hébergés, email chiffré, gestion des secrets, et plus encore.",
      ],
      historyTitle: "Pourquoi ce domaine",
      history: [
        "Ce domaine porte une longue histoire de liens issus de la communauté des standards du web — la liste de diffusion WHATWG, le W3C, et des développeurs comme John Resig ont référencé ses dépôts à l'époque où HTML5 prenait forme.",
        "Plutôt que de laisser cette histoire disparaître, VersionDude préserve ces références (chaque lien historique fonctionne toujours) et s'appuie dessus avec du contenu original et honnête, dans le même esprit technique.",
      ],
      independentTitle: "Un projet indépendant",
      independent: "VersionDude est une publication indépendante. Nous ne revendiquons pas la paternité des projets tiers que nous documentons ; nous renvoyons vers leurs vrais mainteneurs. Certains guides contiennent des liens d'affiliation, toujours signalés.",
    },
    contact: {
      title: "Contact", lead: "Questions, corrections ou suggestions ? Écrivez-nous.",
      intro: "Si vous repérez une inexactitude dans une page projet ou un guide, nous voulons la corriger. L'email est le moyen le plus rapide de nous joindre.",
      emailLabel: "Email", email: "hello@versiondude.net",
      form: { name: "Votre nom", email: "Votre email", message: "Votre message", send: "Envoyer le message" },
      note: "Nous lisons chaque message mais ne pouvons pas toujours répondre individuellement.",
    },
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Qu'est-ce que VersionDude ?", a: "Une archive indépendante de projets open source liés aux standards du web, historiquement hébergés sur ce domaine, accompagnée de guides pratiques sur les outils de développement et de confidentialité." },
      { q: "Maintenez-vous ces projets ?", a: "Non. Nous les documentons et renvoyons vers leur dépôt actuel, activement maintenu (par exemple sur GitHub). Nous n'en revendiquons pas la paternité." },
      { q: "Pourquoi les anciens liens de dépôt fonctionnent-ils encore ?", a: "Nous préservons volontairement chaque lien historique de la communauté : les anciens chemins Subversion redirigent vers la page de projet correspondante, donc aucune référence n'est cassée." },
      { q: "Vos guides sont-ils indépendants ?", a: "Oui. Nos guides sont rédigés de façon indépendante. Certains contiennent des liens d'affiliation — toujours clairement signalés et sans influence sur nos recommandations." },
      { q: "Le contenu est-il disponible dans d'autres langues ?", a: "Oui — VersionDude est publié en anglais, français et espagnol. Utilisez le sélecteur de langue dans l'en-tête." },
      { q: "Comment signaler une erreur ?", a: "Écrivez-nous. Si un détail d'un projet ou d'un guide est inexact, nous le corrigerons." },
    ],
  },
  es: {
    meta: { homeTitle: "VersionDude — estándares web, analizadores y herramientas para desarrolladores", homeDesc: "Estándares web, análisis de HTML y herramientas para desarrolladores — además de guías prácticas sobre herramientas open source, autoalojadas y de privacidad.", catDesc: "Explora VersionDude por categoría: estándares web, análisis de HTML, herramientas para desarrolladores y proyectos archivados." },
    nav: { home: "Inicio", projects: "Proyectos", articles: "Guías", about: "Acerca de", contact: "Contacto", faq: "FAQ" },
    cats: { standards: "Estándares", parsing: "Análisis", tooling: "Herramientas", archive: "Archivo" },
    ui: { home: "Inicio", readMin: "min de lectura", latest: "Últimos artículos", projects: "Proyectos", guides: "Guías",
          related: "Proyecto relacionado", currentHome: "Hogar actual", status: "Estado", by: "Por", allProjects: "Todos los proyectos",
          category: "Categoría", moreIn: "Más en", search: "Buscar" },
    footer: { tagline: "Estándares web, análisis de HTML y herramientas para desarrolladores — además de guías prácticas sobre herramientas open-source, autoalojadas y de privacidad.",
              rights: "VersionDude — archivo independiente de estándares web y herramientas de desarrollo." },
    about: {
      title: "Acerca de VersionDude",
      missionTitle: "Nuestra misión",
      missionLead: "Mantener viva — y útil — una parte de la historia de los estándares web.",
      mission: [
        "VersionDude documenta un conjunto de proyectos de código abierto cuyos primeros repositorios de desarrollo se alojaron en este dominio — entre ellos un motor de análisis HTML5, el validador de conformidad Validator.nu y el razonador OWL Pellet. Cada página de proyecto enlaza con su hogar actual, mantenido activamente.",
        "Junto a ese archivo publicamos guías prácticas e independientes sobre las herramientas que de verdad usan los desarrolladores y las personas preocupadas por su privacidad: gestores de contraseñas open-source y autoalojados, correo cifrado, gestión de secretos y mucho más.",
      ],
      historyTitle: "Por qué este dominio",
      history: [
        "Este dominio arrastra una larga historia de enlaces de la comunidad de estándares web — la lista de correo de WHATWG, el W3C y desarrolladores como John Resig referenciaron sus repositorios cuando HTML5 estaba tomando forma.",
        "En lugar de dejar que esa historia desaparezca, VersionDude preserva esas referencias (cada enlace histórico sigue funcionando) y construye sobre ellas con contenido original y honesto, con el mismo espíritu técnico.",
      ],
      independentTitle: "Un proyecto independiente",
      independent: "VersionDude es una publicación independiente. No reclamamos la autoría de los proyectos de terceros que documentamos; enlazamos a sus verdaderos mantenedores. Algunas guías contienen enlaces de afiliados, siempre indicados.",
    },
    contact: {
      title: "Contacto", lead: "¿Preguntas, correcciones o sugerencias? Escríbenos.",
      intro: "Si detectas una inexactitud en una página de proyecto o en una guía, queremos corregirla. El correo es la forma más rápida de contactarnos.",
      emailLabel: "Correo", email: "hello@versiondude.net",
      form: { name: "Tu nombre", email: "Tu correo", message: "Tu mensaje", send: "Enviar mensaje" },
      note: "Leemos todos los mensajes pero no siempre podemos responder individualmente.",
    },
    faqTitle: "Preguntas frecuentes",
    faq: [
      { q: "¿Qué es VersionDude?", a: "Un archivo independiente de proyectos open-source de estándares web alojados históricamente en este dominio, además de guías prácticas sobre herramientas de desarrollo y privacidad." },
      { q: "¿Mantenéis estos proyectos?", a: "No. Los documentamos y enlazamos a su hogar actual, mantenido activamente (por ejemplo en GitHub). No reclamamos su autoría." },
      { q: "¿Por qué siguen funcionando los enlaces antiguos de repositorio?", a: "Preservamos deliberadamente cada enlace histórico de la comunidad: las antiguas rutas de Subversion redirigen a la página de proyecto correspondiente, así que ninguna referencia queda rota." },
      { q: "¿Son independientes vuestras guías?", a: "Sí. Nuestras guías se redactan de forma independiente. Algunas contienen enlaces de afiliados — siempre claramente indicados y sin influir en nuestras recomendaciones." },
      { q: "¿El contenido está disponible en otros idiomas?", a: "Sí — VersionDude se publica en inglés, francés y español. Usa el selector de idioma en la cabecera." },
      { q: "¿Cómo informo de un error?", a: "Escríbenos. Si un detalle de un proyecto o una guía es inexacto, lo corregiremos." },
    ],
  },
};

export function t(locale) { return T[locale] || T.en; }

export const CONSENT = {
  en: { text: "We use cookies and analytics to understand how this site is used. You can accept or decline.", accept: "Accept", decline: "Decline", more: "Privacy" },
  fr: { text: "Nous utilisons des cookies et des statistiques pour comprendre l'usage du site. Vous pouvez accepter ou refuser.", accept: "Accepter", decline: "Refuser", more: "Confidentialité" },
  es: { text: "Usamos cookies y analítica para entender cómo se usa el sitio. Puedes aceptar o rechazar.", accept: "Aceptar", decline: "Rechazar", more: "Privacidad" },
};
