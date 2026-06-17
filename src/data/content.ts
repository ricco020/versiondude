// Single source of truth for VersionDude editorial metadata, in all three locales.
// Everything here is factual and original. We do NOT claim authorship of the
// third-party projects documented below; each links to its real current home.
// Article bodies live as JSX components in src/content/articles.tsx (keyed by slug).

export type Locale = 'en' | 'fr' | 'es';

export type CategoryKey = 'standards' | 'parsing' | 'tooling' | 'archive';

export interface Project {
  slug: string;
  name: string;
  category: CategoryKey;
  excerpt: string;
  body: string[];
  legacy: string;
  currentHome: { label: string; url: string }[];
  status: string;
}

export interface Article {
  slug: string;
  title: string;
  dek: string;
  category: CategoryKey;
  readingMinutes: number;
}

export interface LocaleContent {
  projects: Project[];
  articles: Article[];
}

const en: LocaleContent = {
  articles: [
    {
      slug: 'how-html-parsing-works',
      title: 'How HTML parsing works',
      dek: 'How a parser turns raw markup into a DOM tree: tokenization, tree construction, insertion modes, and the standard error recovery that makes every browser agree.',
      category: 'parsing',
      readingMinutes: 6,
    },
  ],
  projects: [
    {
      slug: 'html5-parser',
      name: 'HTML5 Parser (htmlparser)',
      category: 'parsing',
      excerpt: 'An early Java HTML5 parsing engine with SAX and DOM interfaces — the engine behind the Nu HTML Checker.',
      body: [
        'The htmlparser project is an HTML5 parsing engine written in Java that provides SAX and DOM interfaces. Early development repositories were hosted here under /whattf/htmlparser/trunk/.',
        'The parser became the engine behind the Nu HTML Checker (validator.nu), implementing the HTML5 tokenization and tree-construction algorithm described in our reference on how HTML parsing works.',
      ],
      legacy: '/whattf/htmlparser/trunk/',
      status: 'Maintained elsewhere',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu',
      name: 'Validator.nu',
      category: 'standards',
      excerpt: 'The HTML5 conformance checker — its syntax schemas and checker tooling were developed in repositories hosted here.',
      body: [
        'Validator.nu is an HTML5 conformance checker. Its syntax schemas, checker (/whattf/syntax/, org.whattf.checker) and build tooling were developed in repositories hosted here.',
        'It is now maintained as the Nu HTML Checker and is widely used to validate web documents against the living standard.',
      ],
      legacy: '/whattf/syntax/trunk/',
      status: 'Maintained elsewhere',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog',
      name: 'Railfrog',
      category: 'archive',
      excerpt: 'A Ruby on Rails content-management system, historically installed via script/plugin from this host.',
      body: [
        'Railfrog was a Ruby on Rails content-management system. It was historically installed via script/plugin install from /railfrog/cms/railfrog/trunk.',
        'The project is no longer actively developed; the link below points to a historical reference.',
      ],
      legacy: '/railfrog/cms/railfrog/trunk',
      status: 'Discontinued',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet',
      name: 'Pellet (OWL 2 reasoner)',
      category: 'tooling',
      excerpt: 'An OWL 2 DL reasoner; development builds were once hosted here, now maintained by Stardog Union.',
      body: [
        'Pellet is an OWL 2 DL reasoner. Development builds (Clark & Parsia, /clark-parsia/pellet-devel/) were once hosted here.',
        'It is now maintained by Stardog Union.',
      ],
      legacy: '/clark-parsia/pellet-devel/',
      status: 'Maintained elsewhere',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc',
      name: 'Bersirc',
      category: 'archive',
      excerpt: 'An open-source IRC client for Windows built on the Claro GUI toolkit; files were once hosted here.',
      body: [
        'Bersirc was an open-source IRC client for Windows (built on the Claro GUI toolkit). Its files were once hosted under /terminal/bersirc/.',
        'The project is discontinued; the link below points to a historical reference.',
      ],
      legacy: '/terminal/bersirc/',
      status: 'Discontinued',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const fr: LocaleContent = {
  articles: [
    {
      slug: 'comment-fonctionne-analyse-html',
      title: 'Comment fonctionne l’analyse HTML',
      dek: 'Comment un parseur transforme le balisage brut en arbre DOM : tokenisation, construction de l’arbre, modes d’insertion et la récupération d’erreurs normalisée qui met tous les navigateurs d’accord.',
      category: 'parsing',
      readingMinutes: 6,
    },
  ],
  projects: [
    {
      slug: 'html5-parser',
      name: 'Parseur HTML5 (htmlparser)',
      category: 'parsing',
      excerpt: 'Un moteur d’analyse HTML5 en Java (interfaces SAX et DOM) — le moteur derrière le Nu HTML Checker.',
      body: [
        'Le projet htmlparser est un moteur d’analyse HTML5 écrit en Java qui fournit des interfaces SAX et DOM. Ses premiers dépôts de développement étaient hébergés ici sous /whattf/htmlparser/trunk/.',
        'Le parseur est devenu le moteur du Nu HTML Checker (validator.nu), implémentant l’algorithme de tokenisation et de construction d’arbre HTML5 décrit dans notre référence sur le fonctionnement de l’analyse HTML.',
      ],
      legacy: '/whattf/htmlparser/trunk/',
      status: 'Maintenu ailleurs',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu',
      name: 'Validator.nu',
      category: 'standards',
      excerpt: 'Le validateur de conformité HTML5 — ses schémas de syntaxe et son outillage ont été développés dans des dépôts hébergés ici.',
      body: [
        'Validator.nu est un validateur de conformité HTML5. Ses schémas de syntaxe, son vérificateur (/whattf/syntax/, org.whattf.checker) et son outillage de build ont été développés dans des dépôts hébergés ici.',
        'Il est aujourd’hui maintenu sous le nom de Nu HTML Checker et largement utilisé pour valider les documents web face au standard vivant.',
      ],
      legacy: '/whattf/syntax/trunk/',
      status: 'Maintenu ailleurs',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog',
      name: 'Railfrog',
      category: 'archive',
      excerpt: 'Un système de gestion de contenu Ruby on Rails, historiquement installé via script/plugin depuis cet hôte.',
      body: [
        'Railfrog était un système de gestion de contenu Ruby on Rails. Il s’installait historiquement via script/plugin install depuis /railfrog/cms/railfrog/trunk.',
        'Le projet n’est plus activement développé ; le lien ci-dessous renvoie vers une référence historique.',
      ],
      legacy: '/railfrog/cms/railfrog/trunk',
      status: 'Abandonné',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet',
      name: 'Pellet (raisonneur OWL 2)',
      category: 'tooling',
      excerpt: 'Un raisonneur OWL 2 DL ; ses builds de développement étaient hébergés ici, aujourd’hui maintenu par Stardog Union.',
      body: [
        'Pellet est un raisonneur OWL 2 DL. Ses builds de développement (Clark & Parsia, /clark-parsia/pellet-devel/) étaient autrefois hébergés ici.',
        'Il est aujourd’hui maintenu par Stardog Union.',
      ],
      legacy: '/clark-parsia/pellet-devel/',
      status: 'Maintenu ailleurs',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc',
      name: 'Bersirc',
      category: 'archive',
      excerpt: 'Un client IRC open source pour Windows bâti sur la boîte à outils Claro ; ses fichiers étaient hébergés ici.',
      body: [
        'Bersirc était un client IRC open source pour Windows (bâti sur la boîte à outils GUI Claro). Ses fichiers étaient hébergés sous /terminal/bersirc/.',
        'Le projet est abandonné ; le lien ci-dessous renvoie vers une référence historique.',
      ],
      legacy: '/terminal/bersirc/',
      status: 'Abandonné',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const es: LocaleContent = {
  articles: [
    {
      slug: 'como-funciona-el-analisis-html',
      title: 'Cómo funciona el análisis de HTML',
      dek: 'Cómo un analizador convierte el marcado en un árbol DOM: tokenización, construcción del árbol, modos de inserción y la recuperación de errores normalizada que pone de acuerdo a todos los navegadores.',
      category: 'parsing',
      readingMinutes: 6,
    },
  ],
  projects: [
    {
      slug: 'html5-parser',
      name: 'Analizador HTML5 (htmlparser)',
      category: 'parsing',
      excerpt: 'Un motor de análisis HTML5 en Java (interfaces SAX y DOM) — el motor tras el Nu HTML Checker.',
      body: [
        'El proyecto htmlparser es un motor de análisis HTML5 escrito en Java que ofrece interfaces SAX y DOM. Sus primeros repositorios de desarrollo se alojaron aquí bajo /whattf/htmlparser/trunk/.',
        'El analizador se convirtió en el motor del Nu HTML Checker (validator.nu), implementando el algoritmo de tokenización y construcción de árbol de HTML5 descrito en nuestra referencia sobre cómo funciona el análisis de HTML.',
      ],
      legacy: '/whattf/htmlparser/trunk/',
      status: 'Mantenido en otro lugar',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu',
      name: 'Validator.nu',
      category: 'standards',
      excerpt: 'El validador de conformidad HTML5 — sus esquemas de sintaxis y herramientas se desarrollaron en repositorios alojados aquí.',
      body: [
        'Validator.nu es un validador de conformidad HTML5. Sus esquemas de sintaxis, su verificador (/whattf/syntax/, org.whattf.checker) y sus herramientas de compilación se desarrollaron en repositorios alojados aquí.',
        'Hoy se mantiene como Nu HTML Checker y se usa ampliamente para validar documentos web frente al estándar vivo.',
      ],
      legacy: '/whattf/syntax/trunk/',
      status: 'Mantenido en otro lugar',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog',
      name: 'Railfrog',
      category: 'archive',
      excerpt: 'Un sistema de gestión de contenidos en Ruby on Rails, instalado históricamente vía script/plugin desde este host.',
      body: [
        'Railfrog era un sistema de gestión de contenidos en Ruby on Rails. Históricamente se instalaba con script/plugin install desde /railfrog/cms/railfrog/trunk.',
        'El proyecto ya no se desarrolla activamente; el enlace de abajo apunta a una referencia histórica.',
      ],
      legacy: '/railfrog/cms/railfrog/trunk',
      status: 'Descontinuado',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet',
      name: 'Pellet (razonador OWL 2)',
      category: 'tooling',
      excerpt: 'Un razonador OWL 2 DL; sus builds de desarrollo se alojaron aquí, hoy mantenido por Stardog Union.',
      body: [
        'Pellet es un razonador OWL 2 DL. Sus builds de desarrollo (Clark & Parsia, /clark-parsia/pellet-devel/) se alojaron aquí en su día.',
        'Hoy lo mantiene Stardog Union.',
      ],
      legacy: '/clark-parsia/pellet-devel/',
      status: 'Mantenido en otro lugar',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc',
      name: 'Bersirc',
      category: 'archive',
      excerpt: 'Un cliente IRC de código abierto para Windows basado en el toolkit Claro; sus archivos se alojaron aquí.',
      body: [
        'Bersirc era un cliente IRC de código abierto para Windows (basado en el toolkit gráfico Claro). Sus archivos se alojaron bajo /terminal/bersirc/.',
        'El proyecto está descontinuado; el enlace de abajo apunta a una referencia histórica.',
      ],
      legacy: '/terminal/bersirc/',
      status: 'Descontinuado',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

export const CONTENT: Record<Locale, LocaleContent> = { en, fr, es };

export function getContent(locale: string): LocaleContent {
  return CONTENT[(locale as Locale)] ?? CONTENT.en;
}

export function findArticle(locale: string, slug: string): Article | undefined {
  return getContent(locale).articles.find((a) => a.slug === slug);
}

export function findProject(locale: string, slug: string): Project | undefined {
  return getContent(locale).projects.find((p) => p.slug === slug);
}

/** Map a project slug to its localized article/route across locales (slugs are shared for projects). */
export function articleSlugFor(locale: Locale): string {
  return getContent(locale).articles[0].slug;
}
