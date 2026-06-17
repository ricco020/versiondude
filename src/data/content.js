// VersionDude — source unique du contenu éditorial réel, en EN/FR/ES.
// Tout est factuel et original. Nous ne revendiquons PAS la paternité des projets
// tiers documentés ci-dessous ; chacun renvoie à son vrai dépôt actuel.
// Images : libres de droits (Pixabay), uniques par projet, légendes littérales honnêtes.

const IMG = {
  'html5-parser': { hero: '/assets/projects/html5-parser-hero.jpg', body: '/assets/projects/html5-parser-body.jpg' },
  'validator-nu': { hero: '/assets/projects/validator-nu-hero.jpg', body: '/assets/projects/validator-nu-body.jpg' },
  'railfrog': { hero: '/assets/projects/railfrog-hero.jpg', body: '/assets/projects/railfrog-body.jpg' },
  'pellet': { hero: '/assets/projects/pellet-hero.jpg', body: '/assets/projects/pellet-body.jpg' },
  'bersirc': { hero: '/assets/projects/bersirc-hero.jpg', body: '/assets/projects/bersirc-body.jpg' },
};

const en = {
  projectsTitle: 'Projects',
  projectsIntro: 'Historical open-source projects whose early development repositories were once hosted on this domain. Each links to its current home.',
  statusLabel: 'Status',
  currentHomeLabel: 'Current home',
  projects: [
    {
      slug: 'html5-parser', name: 'HTML5 Parser (htmlparser)', category: 'parsing',
      excerpt: 'An early Java HTML5 parsing engine with SAX and DOM interfaces — the engine behind the Nu HTML Checker.',
      heroAlt: 'Computer code on a screen', bodyCaption: 'Lines of code displayed on a screen.',
      body: [
        'The htmlparser project is an HTML5 parsing engine written in Java that provides SAX and DOM interfaces. Early development repositories were hosted here under /whattf/htmlparser/trunk/.',
        'The parser became the engine behind the Nu HTML Checker (validator.nu), implementing the HTML5 tokenization and tree-construction algorithm that makes browsers agree on how to read markup.',
      ],
      status: 'Maintained elsewhere',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'The HTML5 conformance checker — its syntax schemas and checker tooling were developed in repositories hosted here.',
      heroAlt: 'A laptop displaying lines of code', bodyCaption: 'Source code shown in a code editor.',
      body: [
        'Validator.nu is an HTML5 conformance checker. Its syntax schemas, checker (/whattf/syntax/, org.whattf.checker) and build tooling were developed in repositories hosted here.',
        'It is now maintained as the Nu HTML Checker and is widely used to validate web documents against the living standard.',
      ],
      status: 'Maintained elsewhere',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'A Ruby on Rails content-management system, historically installed via script/plugin from this host.',
      heroAlt: 'A software developer working at a computer', bodyCaption: 'Web development code: HTML, CSS and PHP.',
      body: [
        'Railfrog was a Ruby on Rails content-management system. It was historically installed via script/plugin install from /railfrog/cms/railfrog/trunk.',
        'The project is no longer actively developed; the link below points to a historical reference.',
      ],
      status: 'Discontinued',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (OWL 2 reasoner)', category: 'tooling',
      excerpt: 'An OWL 2 DL reasoner; development builds were once hosted here, now maintained by Stardog Union.',
      heroAlt: 'An abstract glowing network background', bodyCaption: 'Bright green cords connected at knots, forming an abstract network.',
      body: [
        'Pellet is an OWL 2 DL reasoner. Development builds (Clark & Parsia, /clark-parsia/pellet-devel/) were once hosted here.',
        'It is now maintained by Stardog Union and is used to reason over semantic-web ontologies.',
      ],
      status: 'Maintained elsewhere',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'An open-source IRC client for Windows built on the Claro GUI toolkit; files were once hosted here.',
      heroAlt: 'Online communication on a computer', bodyCaption: 'A person typing on a laptop at a desk.',
      body: [
        'Bersirc was an open-source IRC client for Windows (built on the Claro GUI toolkit). Its files were once hosted under /terminal/bersirc/.',
        'The project is discontinued; the link below points to a historical reference.',
      ],
      status: 'Discontinued',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const fr = {
  projectsTitle: 'Projets',
  projectsIntro: 'Projets open source historiques dont les premiers dépôts de développement étaient autrefois hébergés sur ce domaine. Chacun renvoie à son dépôt actuel.',
  statusLabel: 'Statut',
  currentHomeLabel: 'Dépôt actuel',
  projects: [
    {
      slug: 'html5-parser', name: 'Parseur HTML5 (htmlparser)', category: 'parsing',
      excerpt: 'Un moteur d’analyse HTML5 en Java (interfaces SAX et DOM) — le moteur derrière le Nu HTML Checker.',
      heroAlt: 'Du code informatique à l’écran', bodyCaption: 'Des lignes de code affichées à l’écran.',
      body: [
        'Le projet htmlparser est un moteur d’analyse HTML5 écrit en Java qui fournit des interfaces SAX et DOM. Ses premiers dépôts de développement étaient hébergés ici sous /whattf/htmlparser/trunk/.',
        'Le parseur est devenu le moteur du Nu HTML Checker (validator.nu), implémentant l’algorithme de tokenisation et de construction d’arbre HTML5 qui met tous les navigateurs d’accord.',
      ],
      status: 'Maintenu ailleurs',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'Le validateur de conformité HTML5 — ses schémas de syntaxe et son outillage ont été développés dans des dépôts hébergés ici.',
      heroAlt: 'Un ordinateur portable affichant du code', bodyCaption: 'Du code source dans un éditeur.',
      body: [
        'Validator.nu est un validateur de conformité HTML5. Ses schémas de syntaxe, son vérificateur (/whattf/syntax/, org.whattf.checker) et son outillage de build ont été développés dans des dépôts hébergés ici.',
        'Il est aujourd’hui maintenu sous le nom de Nu HTML Checker et largement utilisé pour valider les documents web face au standard vivant.',
      ],
      status: 'Maintenu ailleurs',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'Un système de gestion de contenu Ruby on Rails, historiquement installé via script/plugin depuis cet hôte.',
      heroAlt: 'Un développeur logiciel au travail', bodyCaption: 'Du code web : HTML, CSS et PHP.',
      body: [
        'Railfrog était un système de gestion de contenu Ruby on Rails. Il s’installait historiquement via script/plugin install depuis /railfrog/cms/railfrog/trunk.',
        'Le projet n’est plus activement développé ; le lien ci-dessous renvoie vers une référence historique.',
      ],
      status: 'Abandonné',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (raisonneur OWL 2)', category: 'tooling',
      excerpt: 'Un raisonneur OWL 2 DL ; ses builds de développement étaient hébergés ici, aujourd’hui maintenu par Stardog Union.',
      heroAlt: 'Un fond abstrait de réseau lumineux', bodyCaption: 'Des cordes vertes reliées par des nœuds, formant un réseau abstrait.',
      body: [
        'Pellet est un raisonneur OWL 2 DL. Ses builds de développement (Clark & Parsia, /clark-parsia/pellet-devel/) étaient autrefois hébergés ici.',
        'Il est aujourd’hui maintenu par Stardog Union et sert à raisonner sur des ontologies du web sémantique.',
      ],
      status: 'Maintenu ailleurs',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'Un client IRC open source pour Windows bâti sur la boîte à outils Claro ; ses fichiers étaient hébergés ici.',
      heroAlt: 'Communication en ligne sur un ordinateur', bodyCaption: 'Une personne tapant sur un ordinateur portable.',
      body: [
        'Bersirc était un client IRC open source pour Windows (bâti sur la boîte à outils GUI Claro). Ses fichiers étaient hébergés sous /terminal/bersirc/.',
        'Le projet est abandonné ; le lien ci-dessous renvoie vers une référence historique.',
      ],
      status: 'Abandonné',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const es = {
  projectsTitle: 'Proyectos',
  projectsIntro: 'Proyectos de código abierto históricos cuyos primeros repositorios de desarrollo se alojaron en este dominio. Cada uno enlaza con su hogar actual.',
  statusLabel: 'Estado',
  currentHomeLabel: 'Hogar actual',
  projects: [
    {
      slug: 'html5-parser', name: 'Analizador HTML5 (htmlparser)', category: 'parsing',
      excerpt: 'Un motor de análisis HTML5 en Java (interfaces SAX y DOM) — el motor tras el Nu HTML Checker.',
      heroAlt: 'Código informático en una pantalla', bodyCaption: 'Líneas de código en una pantalla.',
      body: [
        'El proyecto htmlparser es un motor de análisis HTML5 escrito en Java que ofrece interfaces SAX y DOM. Sus primeros repositorios de desarrollo se alojaron aquí bajo /whattf/htmlparser/trunk/.',
        'El analizador se convirtió en el motor del Nu HTML Checker (validator.nu), implementando el algoritmo de tokenización y construcción de árbol de HTML5 que pone de acuerdo a los navegadores.',
      ],
      status: 'Mantenido en otro lugar',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'El validador de conformidad HTML5 — sus esquemas de sintaxis y herramientas se desarrollaron en repositorios alojados aquí.',
      heroAlt: 'Un portátil mostrando código', bodyCaption: 'Código fuente en un editor de código.',
      body: [
        'Validator.nu es un validador de conformidad HTML5. Sus esquemas de sintaxis, su verificador (/whattf/syntax/, org.whattf.checker) y sus herramientas de compilación se desarrollaron en repositorios alojados aquí.',
        'Hoy se mantiene como Nu HTML Checker y se usa ampliamente para validar documentos web frente al estándar vivo.',
      ],
      status: 'Mantenido en otro lugar',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'Un sistema de gestión de contenidos en Ruby on Rails, instalado históricamente vía script/plugin desde este host.',
      heroAlt: 'Un desarrollador de software trabajando', bodyCaption: 'Código web: HTML, CSS y PHP.',
      body: [
        'Railfrog era un sistema de gestión de contenidos en Ruby on Rails. Históricamente se instalaba con script/plugin install desde /railfrog/cms/railfrog/trunk.',
        'El proyecto ya no se desarrolla activamente; el enlace de abajo apunta a una referencia histórica.',
      ],
      status: 'Descontinuado',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (razonador OWL 2)', category: 'tooling',
      excerpt: 'Un razonador OWL 2 DL; sus builds de desarrollo se alojaron aquí, hoy mantenido por Stardog Union.',
      heroAlt: 'Un fondo abstracto de red luminosa', bodyCaption: 'Cuerdas verdes unidas por nudos, formando una red abstracta.',
      body: [
        'Pellet es un razonador OWL 2 DL. Sus builds de desarrollo (Clark & Parsia, /clark-parsia/pellet-devel/) se alojaron aquí en su día.',
        'Hoy lo mantiene Stardog Union y se usa para razonar sobre ontologías de la web semántica.',
      ],
      status: 'Mantenido en otro lugar',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'Un cliente IRC de código abierto para Windows basado en el toolkit Claro; sus archivos se alojaron aquí.',
      heroAlt: 'Comunicación en línea en un ordenador', bodyCaption: 'Una persona escribiendo en un portátil.',
      body: [
        'Bersirc era un cliente IRC de código abierto para Windows (basado en el toolkit gráfico Claro). Sus archivos se alojaron bajo /terminal/bersirc/.',
        'El proyecto está descontinuado; el enlace de abajo apunta a una referencia histórica.',
      ],
      status: 'Descontinuado',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const CONTENT = { en, fr, es };

export function getContent(locale) {
  return CONTENT[locale] || CONTENT.en;
}
export function getProjects(locale) {
  return getContent(locale).projects;
}
export function findProject(locale, slug) {
  return getProjects(locale).find((p) => p.slug === slug);
}
export function projectImages(slug) {
  return IMG[slug] || null;
}
export const PROJECT_SLUGS = ['html5-parser', 'validator-nu', 'railfrog', 'pellet', 'bersirc'];
