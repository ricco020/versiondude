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

const de = {
  projectsTitle: 'Projekte',
  projectsIntro: 'Historische Open-Source-Projekte, deren frühe Entwicklungs-Repositories einst auf dieser Domain gehostet wurden. Jedes verlinkt auf sein aktuelles Zuhause.',
  statusLabel: 'Status',
  currentHomeLabel: 'Aktuelles Repository',
  projects: [
    {
      slug: 'html5-parser', name: 'HTML5-Parser (htmlparser)', category: 'parsing',
      excerpt: 'Eine frühe HTML5-Parsing-Engine in Java mit SAX- und DOM-Schnittstellen — die Engine hinter dem Nu HTML Checker.',
      heroAlt: 'Computercode auf einem Bildschirm', bodyCaption: 'Codezeilen auf einem Bildschirm.',
      body: [
        'Das Projekt htmlparser ist eine in Java geschriebene HTML5-Parsing-Engine, die SAX- und DOM-Schnittstellen bereitstellt. Frühe Entwicklungs-Repositories waren hier unter /whattf/htmlparser/trunk/ gehostet.',
        'Der Parser wurde zur Engine hinter dem Nu HTML Checker (validator.nu) und implementiert den HTML5-Tokenisierungs- und Baum-Konstruktions-Algorithmus, der Browser darin übereinstimmen lässt, wie Markup gelesen wird.',
      ],
      status: 'Anderswo gepflegt',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'Der HTML5-Konformitätsprüfer — seine Syntax-Schemata und sein Checker-Werkzeug wurden in hier gehosteten Repositories entwickelt.',
      heroAlt: 'Ein Laptop, der Codezeilen anzeigt', bodyCaption: 'Quellcode in einem Code-Editor.',
      body: [
        'Validator.nu ist ein HTML5-Konformitätsprüfer. Seine Syntax-Schemata, sein Checker (/whattf/syntax/, org.whattf.checker) und sein Build-Werkzeug wurden in hier gehosteten Repositories entwickelt.',
        'Er wird heute als Nu HTML Checker gepflegt und wird breit genutzt, um Webdokumente gegen den Living Standard zu validieren.',
      ],
      status: 'Anderswo gepflegt',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'Ein Content-Management-System auf Ruby-on-Rails-Basis, das historisch per script/plugin von diesem Host installiert wurde.',
      heroAlt: 'Ein Softwareentwickler bei der Arbeit am Computer', bodyCaption: 'Webentwicklungs-Code: HTML, CSS und PHP.',
      body: [
        'Railfrog war ein Content-Management-System auf Ruby-on-Rails-Basis. Es wurde historisch per script/plugin install von /railfrog/cms/railfrog/trunk installiert.',
        'Das Projekt wird nicht mehr aktiv entwickelt; der Link unten verweist auf eine historische Referenz.',
      ],
      status: 'Eingestellt',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (OWL-2-Reasoner)', category: 'tooling',
      excerpt: 'Ein OWL-2-DL-Reasoner; Entwicklungs-Builds waren einst hier gehostet, heute von Stardog Union gepflegt.',
      heroAlt: 'Ein abstrakter, leuchtender Netzwerk-Hintergrund', bodyCaption: 'Helle grüne Schnüre, an Knoten verbunden, bilden ein abstraktes Netzwerk.',
      body: [
        'Pellet ist ein OWL-2-DL-Reasoner. Entwicklungs-Builds (Clark & Parsia, /clark-parsia/pellet-devel/) waren einst hier gehostet.',
        'Er wird heute von Stardog Union gepflegt und dient dazu, über Ontologien des semantischen Webs zu schließen.',
      ],
      status: 'Anderswo gepflegt',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'Ein quelloffener IRC-Client für Windows auf Basis des Claro-GUI-Toolkits; seine Dateien waren einst hier gehostet.',
      heroAlt: 'Online-Kommunikation an einem Computer', bodyCaption: 'Eine Person, die an einem Laptop am Schreibtisch tippt.',
      body: [
        'Bersirc war ein quelloffener IRC-Client für Windows (auf Basis des Claro-GUI-Toolkits). Seine Dateien waren einst unter /terminal/bersirc/ gehostet.',
        'Das Projekt ist eingestellt; der Link unten verweist auf eine historische Referenz.',
      ],
      status: 'Eingestellt',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const it = {
  projectsTitle: 'Progetti',
  projectsIntro: 'Progetti open source storici i cui primi repository di sviluppo erano un tempo ospitati su questo dominio. Ognuno rimanda alla sua sede attuale.',
  statusLabel: 'Stato',
  currentHomeLabel: 'Repository attuale',
  projects: [
    {
      slug: 'html5-parser', name: 'Parser HTML5 (htmlparser)', category: 'parsing',
      excerpt: "Un primo motore di parsing HTML5 in Java con interfacce SAX e DOM — il motore dietro il Nu HTML Checker.",
      heroAlt: 'Codice informatico su uno schermo', bodyCaption: 'Righe di codice mostrate su uno schermo.',
      body: [
        "Il progetto htmlparser è un motore di parsing HTML5 scritto in Java che fornisce interfacce SAX e DOM. I primi repository di sviluppo erano ospitati qui sotto /whattf/htmlparser/trunk/.",
        "Il parser è diventato il motore del Nu HTML Checker (validator.nu), implementando l'algoritmo di tokenizzazione e costruzione dell'albero di HTML5 che mette d'accordo i browser su come leggere il markup.",
      ],
      status: 'Mantenuto altrove',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'Il validatore di conformità HTML5 — i suoi schemi di sintassi e i suoi strumenti sono stati sviluppati in repository ospitati qui.',
      heroAlt: 'Un portatile che mostra righe di codice', bodyCaption: 'Codice sorgente in un editor di codice.',
      body: [
        'Validator.nu è un validatore di conformità HTML5. I suoi schemi di sintassi, il suo checker (/whattf/syntax/, org.whattf.checker) e i suoi strumenti di build sono stati sviluppati in repository ospitati qui.',
        'Oggi è mantenuto come Nu HTML Checker ed è ampiamente usato per validare i documenti web rispetto al living standard.',
      ],
      status: 'Mantenuto altrove',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'Un sistema di gestione dei contenuti in Ruby on Rails, installato storicamente via script/plugin da questo host.',
      heroAlt: 'Uno sviluppatore software al lavoro', bodyCaption: 'Codice web: HTML, CSS e PHP.',
      body: [
        'Railfrog era un sistema di gestione dei contenuti in Ruby on Rails. Storicamente si installava con script/plugin install da /railfrog/cms/railfrog/trunk.',
        'Il progetto non è più sviluppato attivamente; il link qui sotto rimanda a un riferimento storico.',
      ],
      status: 'Dismesso',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (reasoner OWL 2)', category: 'tooling',
      excerpt: 'Un reasoner OWL 2 DL; le sue build di sviluppo erano ospitate qui, oggi mantenuto da Stardog Union.',
      heroAlt: 'Uno sfondo astratto di rete luminosa', bodyCaption: 'Corde verdi unite da nodi, che formano una rete astratta.',
      body: [
        'Pellet è un reasoner OWL 2 DL. Le sue build di sviluppo (Clark & Parsia, /clark-parsia/pellet-devel/) erano un tempo ospitate qui.',
        'Oggi è mantenuto da Stardog Union ed è usato per ragionare sulle ontologie del web semantico.',
      ],
      status: 'Mantenuto altrove',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'Un client IRC open source per Windows basato sul toolkit Claro; i suoi file erano ospitati qui.',
      heroAlt: 'Comunicazione online su un computer', bodyCaption: 'Una persona che digita su un portatile alla scrivania.',
      body: [
        'Bersirc era un client IRC open source per Windows (basato sul toolkit grafico Claro). I suoi file erano ospitati sotto /terminal/bersirc/.',
        'Il progetto è dismesso; il link qui sotto rimanda a un riferimento storico.',
      ],
      status: 'Dismesso',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const pt = {
  projectsTitle: 'Projetos',
  projectsIntro: 'Projetos open source históricos cujos primeiros repositórios de desenvolvimento estiveram outrora alojados neste domínio. Cada um liga à sua sede atual.',
  statusLabel: 'Estado',
  currentHomeLabel: 'Repositório atual',
  projects: [
    {
      slug: 'html5-parser', name: 'Analisador HTML5 (htmlparser)', category: 'parsing',
      excerpt: 'Um motor de análise de HTML5 em Java com interfaces SAX e DOM — o motor por trás do Nu HTML Checker.',
      heroAlt: 'Código informático num ecrã', bodyCaption: 'Linhas de código apresentadas num ecrã.',
      body: [
        'O projeto htmlparser é um motor de análise de HTML5 escrito em Java que fornece interfaces SAX e DOM. Os primeiros repositórios de desenvolvimento estiveram alojados aqui em /whattf/htmlparser/trunk/.',
        'O analisador tornou-se o motor do Nu HTML Checker (validator.nu), implementando o algoritmo de tokenização e construção de árvore do HTML5 que põe os navegadores de acordo sobre como ler o markup.',
      ],
      status: 'Mantido noutro lugar',
      currentHome: [{ label: 'github.com/validator/htmlparser', url: 'https://github.com/validator/htmlparser' }],
    },
    {
      slug: 'validator-nu', name: 'Validator.nu', category: 'standards',
      excerpt: 'O verificador de conformidade HTML5 — os seus esquemas de sintaxe e ferramentas foram desenvolvidos em repositórios alojados aqui.',
      heroAlt: 'Um portátil a mostrar linhas de código', bodyCaption: 'Código-fonte num editor de código.',
      body: [
        'O Validator.nu é um verificador de conformidade HTML5. Os seus esquemas de sintaxe, o seu verificador (/whattf/syntax/, org.whattf.checker) e as suas ferramentas de build foram desenvolvidos em repositórios alojados aqui.',
        'Hoje é mantido como Nu HTML Checker e é amplamente usado para validar documentos web face ao living standard.',
      ],
      status: 'Mantido noutro lugar',
      currentHome: [
        { label: 'validator.nu', url: 'https://validator.nu/' },
        { label: 'github.com/validator/validator', url: 'https://github.com/validator/validator' },
      ],
    },
    {
      slug: 'railfrog', name: 'Railfrog', category: 'archive',
      excerpt: 'Um sistema de gestão de conteúdos em Ruby on Rails, instalado historicamente via script/plugin a partir deste host.',
      heroAlt: 'Um programador de software a trabalhar', bodyCaption: 'Código web: HTML, CSS e PHP.',
      body: [
        'O Railfrog era um sistema de gestão de conteúdos em Ruby on Rails. Historicamente instalava-se com script/plugin install a partir de /railfrog/cms/railfrog/trunk.',
        'O projeto já não é desenvolvido ativamente; a ligação abaixo aponta para uma referência histórica.',
      ],
      status: 'Descontinuado',
      currentHome: [{ label: 'ruby-toolbox.com/projects/railfrog', url: 'https://www.ruby-toolbox.com/projects/railfrog/railfrog' }],
    },
    {
      slug: 'pellet', name: 'Pellet (reasoner OWL 2)', category: 'tooling',
      excerpt: 'Um reasoner OWL 2 DL; as suas builds de desenvolvimento estiveram alojadas aqui, hoje mantido pela Stardog Union.',
      heroAlt: 'Um fundo abstrato de rede luminosa', bodyCaption: 'Cordas verdes unidas por nós, formando uma rede abstrata.',
      body: [
        'O Pellet é um reasoner OWL 2 DL. As suas builds de desenvolvimento (Clark & Parsia, /clark-parsia/pellet-devel/) estiveram outrora alojadas aqui.',
        'Hoje é mantido pela Stardog Union e serve para raciocinar sobre ontologias da web semântica.',
      ],
      status: 'Mantido noutro lugar',
      currentHome: [{ label: 'github.com/stardog-union/pellet', url: 'https://github.com/stardog-union/pellet' }],
    },
    {
      slug: 'bersirc', name: 'Bersirc', category: 'archive',
      excerpt: 'Um cliente IRC open source para Windows baseado no toolkit Claro; os seus ficheiros estiveram alojados aqui.',
      heroAlt: 'Comunicação online num computador', bodyCaption: 'Uma pessoa a escrever num portátil na secretária.',
      body: [
        'O Bersirc era um cliente IRC open source para Windows (baseado no toolkit gráfico Claro). Os seus ficheiros estiveram alojados em /terminal/bersirc/.',
        'O projeto está descontinuado; a ligação abaixo aponta para uma referência histórica.',
      ],
      status: 'Descontinuado',
      currentHome: [{ label: 'sourceforge.net/projects/bersirc', url: 'https://sourceforge.net/projects/bersirc/' }],
    },
  ],
};

const CONTENT = { en, fr, es, de, it, pt };

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
