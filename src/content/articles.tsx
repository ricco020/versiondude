import type { ReactNode } from 'react';

const spec = (
  <a href="https://html.spec.whatwg.org/multipage/parsing.html" rel="noopener" target="_blank">
    section 13 “Parsing HTML documents”
  </a>
);
const specFr = (
  <a href="https://html.spec.whatwg.org/multipage/parsing.html" rel="noopener" target="_blank">
    section 13 « Parsing HTML documents »
  </a>
);
const specEs = (
  <a href="https://html.spec.whatwg.org/multipage/parsing.html" rel="noopener" target="_blank">
    sección 13 «Parsing HTML documents»
  </a>
);

function HowHtmlParsingEN() {
  return (
    <>
      <p>An HTML parser is the component that turns a stream of HTML markup into a structured <strong>Document Object Model (DOM)</strong> tree that a browser, validator or tool can work with. What makes HTML special is that the parsing rules are <em>fully specified</em> by the WHATWG HTML Standard — including exactly how to recover from malformed input — so every conforming parser produces the same tree for the same bytes.</p>
      <h2>The two stages: tokenization and tree construction</h2>
      <p>HTML parsing is defined as two cooperating stages that run together:</p>
      <ol>
        <li><strong>Tokenization.</strong> A state machine reads the input character by character and emits <em>tokens</em>: start tags, end tags, comments, doctypes, character data and an end-of-file token. The tokenizer has dozens of states (data state, tag-open state, attribute-name state, and so on) and is influenced by the tree builder — for example, the content of <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> is handled by special “raw text” states.</li>
        <li><strong>Tree construction.</strong> Each token is fed to a tree builder that decides how to modify the document. The builder keeps a <em>stack of open elements</em> and a list of <em>active formatting elements</em>, and operates as a state machine of <strong>insertion modes</strong> (such as “before html”, “in head”, “in body”, “in table”).</li>
      </ol>
      <h2>Insertion modes and the stack of open elements</h2>
      <p>The insertion mode determines what happens to the next token. Seeing <code>&lt;table&gt;</code> switches the builder into “in table” mode; an unexpected token there may be “foster parented” out of the table rather than discarded. The stack of open elements tracks nesting, so the parser knows which element a piece of text or a child belongs to, and when an implied end tag should close an element automatically.</p>
      <h2>Error recovery is part of the standard</h2>
      <p>Real-world HTML is frequently malformed — unclosed tags, misnested elements, stray characters. Unlike XML, HTML does not stop on errors: the standard defines a precise, deterministic recovery for every situation. The famous “adoption agency algorithm”, for instance, repairs misnested formatting elements like <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>. Because recovery is specified rather than left to each implementation, two compliant parsers agree even on broken input.</p>
      <blockquote>This is why a conformance checker (a “validator”) and a browser can be built on the same parsing engine: the parser produces the canonical tree, and the checker then reports where the input deviated from the rules.</blockquote>
      <h2>Where to read the authoritative rules</h2>
      <ul>
        <li>The WHATWG HTML Standard, {spec} — the normative algorithm.</li>
        <li>An open-source implementation to read alongside it: the HTML5 parser (Java) and the Validator.nu conformance checker built on top of it — both documented on this site.</li>
      </ul>
    </>
  );
}

function HowHtmlParsingFR() {
  return (
    <>
      <p>Un parseur HTML est le composant qui transforme un flux de balisage HTML en un arbre <strong>Document Object Model (DOM)</strong> structuré, exploitable par un navigateur, un validateur ou un outil. La particularité du HTML est que ses règles d’analyse sont <em>entièrement spécifiées</em> par le standard HTML du WHATWG — y compris la façon exacte de récupérer une entrée malformée — si bien que tout parseur conforme produit le même arbre pour les mêmes octets.</p>
      <h2>Les deux étapes : tokenisation et construction de l’arbre</h2>
      <p>L’analyse HTML est définie comme deux étapes coopérantes qui s’exécutent ensemble :</p>
      <ol>
        <li><strong>Tokenisation.</strong> Une machine à états lit l’entrée caractère par caractère et émet des <em>tokens</em> : balises ouvrantes, balises fermantes, commentaires, doctypes, données caractères et un token de fin de fichier. Le tokeniseur possède des dizaines d’états et est influencé par le constructeur d’arbre — par exemple, le contenu de <code>&lt;script&gt;</code> et <code>&lt;style&gt;</code> est traité par des états « texte brut » spéciaux.</li>
        <li><strong>Construction de l’arbre.</strong> Chaque token est transmis à un constructeur d’arbre qui décide comment modifier le document. Le constructeur tient une <em>pile d’éléments ouverts</em> et une liste d’<em>éléments de mise en forme actifs</em>, et fonctionne comme une machine à états de <strong>modes d’insertion</strong> (« before html », « in head », « in body », « in table »…).</li>
      </ol>
      <h2>Modes d’insertion et pile d’éléments ouverts</h2>
      <p>Le mode d’insertion détermine le sort du token suivant. Rencontrer <code>&lt;table&gt;</code> fait basculer le constructeur en mode « in table » ; un token inattendu peut alors être « foster parenté » hors de la table plutôt que rejeté. La pile d’éléments ouverts suit l’imbrication : le parseur sait à quel élément appartient un texte ou un enfant, et quand une balise de fermeture implicite doit fermer automatiquement un élément.</p>
      <h2>La récupération d’erreurs fait partie du standard</h2>
      <p>Le HTML réel est souvent malformé : balises non fermées, éléments mal imbriqués, caractères parasites. Contrairement au XML, le HTML ne s’arrête pas sur les erreurs : le standard définit une récupération précise et déterministe pour chaque situation. Le célèbre « adoption agency algorithm », par exemple, répare les éléments de mise en forme mal imbriqués comme <code>&lt;b&gt;</code> et <code>&lt;i&gt;</code>. Parce que la récupération est spécifiée plutôt que laissée à chaque implémentation, deux parseurs conformes s’accordent même sur une entrée cassée.</p>
      <blockquote>C’est pourquoi un validateur de conformité et un navigateur peuvent reposer sur le même moteur d’analyse : le parseur produit l’arbre canonique, et le validateur signale ensuite où l’entrée s’écarte des règles.</blockquote>
      <h2>Où lire les règles de référence</h2>
      <ul>
        <li>Le standard HTML du WHATWG, {specFr} — l’algorithme normatif.</li>
        <li>Une implémentation open source à lire en parallèle : le parseur HTML5 (Java) et le validateur Validator.nu construit dessus — tous deux documentés sur ce site.</li>
      </ul>
    </>
  );
}

function HowHtmlParsingES() {
  return (
    <>
      <p>Un analizador de HTML (parser) es el componente que convierte un flujo de marcado HTML en un árbol <strong>Document Object Model (DOM)</strong> estructurado, utilizable por un navegador, un validador o una herramienta. Lo especial del HTML es que sus reglas de análisis están <em>totalmente especificadas</em> por el estándar HTML del WHATWG — incluida la forma exacta de recuperarse de una entrada malformada — de modo que todo analizador conforme produce el mismo árbol para los mismos bytes.</p>
      <h2>Las dos etapas: tokenización y construcción del árbol</h2>
      <p>El análisis de HTML se define como dos etapas cooperantes que se ejecutan juntas:</p>
      <ol>
        <li><strong>Tokenización.</strong> Una máquina de estados lee la entrada carácter por carácter y emite <em>tokens</em>: etiquetas de apertura, de cierre, comentarios, doctypes, datos de caracteres y un token de fin de archivo. El tokenizador tiene decenas de estados y está influido por el constructor del árbol — por ejemplo, el contenido de <code>&lt;script&gt;</code> y <code>&lt;style&gt;</code> se trata con estados especiales de «texto en bruto».</li>
        <li><strong>Construcción del árbol.</strong> Cada token se pasa a un constructor de árbol que decide cómo modificar el documento. El constructor mantiene una <em>pila de elementos abiertos</em> y una lista de <em>elementos de formato activos</em>, y funciona como una máquina de estados de <strong>modos de inserción</strong> («before html», «in head», «in body», «in table»…).</li>
      </ol>
      <h2>Modos de inserción y la pila de elementos abiertos</h2>
      <p>El modo de inserción determina qué ocurre con el siguiente token. Ver <code>&lt;table&gt;</code> cambia el constructor al modo «in table»; allí, un token inesperado puede ser «foster parented» fuera de la tabla en lugar de descartarse. La pila de elementos abiertos rastrea el anidamiento, de modo que el analizador sabe a qué elemento pertenece un texto o un hijo, y cuándo una etiqueta de cierre implícita debe cerrar un elemento automáticamente.</p>
      <h2>La recuperación de errores forma parte del estándar</h2>
      <p>El HTML real suele estar malformado: etiquetas sin cerrar, elementos mal anidados, caracteres sueltos. A diferencia de XML, el HTML no se detiene ante los errores: el estándar define una recuperación precisa y determinista para cada situación. El famoso «adoption agency algorithm», por ejemplo, repara elementos de formato mal anidados como <code>&lt;b&gt;</code> e <code>&lt;i&gt;</code>. Como la recuperación está especificada en lugar de dejarse a cada implementación, dos analizadores conformes coinciden incluso ante una entrada rota.</p>
      <blockquote>Por eso un validador de conformidad y un navegador pueden construirse sobre el mismo motor de análisis: el analizador produce el árbol canónico y el validador informa después de dónde se desvió la entrada de las reglas.</blockquote>
      <h2>Dónde leer las reglas de referencia</h2>
      <ul>
        <li>El estándar HTML del WHATWG, {specEs} — el algoritmo normativo.</li>
        <li>Una implementación de código abierto para leer en paralelo: el analizador HTML5 (Java) y el validador Validator.nu construido sobre él — ambos documentados en este sitio.</li>
      </ul>
    </>
  );
}

/** Body components keyed by each locale's article slug. */
export const ARTICLE_BODIES: Record<string, () => ReactNode> = {
  'how-html-parsing-works': HowHtmlParsingEN,
  'comment-fonctionne-analyse-html': HowHtmlParsingFR,
  'como-funciona-el-analisis-html': HowHtmlParsingES,
};
