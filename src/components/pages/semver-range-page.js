"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { parseRange, parseVersion, matchSet, formatSet, compare } from "@/lib/semver-range";

// Outil 2 de VersionDude : ce qu'une plage npm accepte vraiment. Logique dans
// src/lib/semver-range.js, verifiee contre node-semver 7. Les versions viennent
// du registre npm (CORS ouvert, document abrege) ou d'une liste collee a la main.
// CTA : Infomaniak (Awin, valide reseau), angle lockfile/CI comme LOCKFILE_CI_CTA.
const CTA_URL = "https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469";
const SAMPLE = "1.1.9\n1.2.0\n1.2.3-beta.2\n1.2.3\n1.2.4\n1.3.0\n1.9.9\n2.0.0-rc.1\n2.0.0";
const EXAMPLES = ["^1.2.3", "~1.2.3", "^0.2.3", "^0.0.3", "1.x", ">=1.2.0 <1.9.0", "^1.0.0 || ^2.0.0", "1.2.3 - 2.0.0"];
const SHOWN = 60;
// Slugs localises recopies de SLUG_I18N (src/data/articles.js) : importer ce module
// dans un composant client embarque tout le corpus d'articles (717 kB au build).
const SLUGS = {
  "semver-ranges-caret-tilde": { fr: "plages-semver-caret-tilde", es: "rangos-semver-caret-tilde", de: "semver-bereiche-caret-tilde", it: "intervalli-semver-caret-tilde", pt: "intervalos-semver-caret-til" },
  "package-lock-vs-package-json": { fr: "package-lock-json-contre-package-json", es: "package-lock-json-frente-a-package-json", de: "package-lock-json-gegen-package-json", it: "package-lock-json-contro-package-json", pt: "package-lock-json-contra-package-json" },
  "npm-overrides-transitive-dependency": { fr: "npm-overrides-dependance-transitive", es: "npm-overrides-dependencia-transitiva", de: "npm-overrides-transitive-abhaengigkeit", it: "npm-overrides-dipendenza-transitiva", pt: "npm-overrides-dependencia-transitiva" },
};
const slugFor = (slug, locale) => SLUGS[slug]?.[locale] || slug;

const STR = {
  en: {
    h1: "npm semver range checker",
    lead: "Type a range from package.json (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) and see exactly which versions it accepts. Load the real version list of any npm package, or paste your own.",
    range: "Range", pkg: "npm package (optional)", load: "Load versions", loading: "Loading...", versions: "Versions to test (one per line)",
    invalid: "This is not a valid npm range.", notFound: "Package not found on the npm registry.", netErr: "The npm registry could not be reached. Paste the versions instead.",
    expands: "Expands to", or: "or", any: "any version", highest: "Highest accepted version:", none: "No version in the list satisfies this range.",
    count: (n, m) => `${n} of ${m} versions accepted`, latest: (v, ok) => `The latest dist-tag is ${v}: ${ok ? "accepted by this range" : "NOT accepted by this range"}.`,
    op: { ">=": (v) => `at least ${v}`, ">": (v) => `above ${v}`, "<=": (v) => `at most ${v}`, "<": (v) => `below ${v}`, "<-0": (v) => `below ${v}, and none of its pre-releases`, "=": (v) => `exactly ${v}` },
    preNote: (n) => `${n} pre-release version(s) were skipped although they sit inside the bounds: npm only accepts a pre-release when the range itself names a pre-release of the same major.minor.patch.`,
    yes: "accepted", no: "rejected", more: (n) => `${n} older versions not shown.`, examples: "Try:",
    h2: "How npm reads a range",
    pts: [
      "^ (caret) allows every change that does not modify the leftmost non-zero number: ^1.2.3 means >=1.2.3 <2.0.0, but ^0.2.3 means >=0.2.3 <0.3.0 and ^0.0.3 means only 0.0.3.",
      "~ (tilde) allows patch changes when a minor is given: ~1.2.3 means >=1.2.3 <1.3.0. ~1 is the same as 1.x.",
      "x, X and * are wildcards: 1.x is >=1.0.0 <2.0.0. A missing part counts as a wildcard, so 1.2 means 1.2.x.",
      "Spaces mean AND, || means OR. A hyphen range 1.2.3 - 2.3.4 includes both ends; a partial upper end like - 2.3 means below 2.4.0.",
      "Pre-releases (1.3.0-beta.1) are excluded unless the range itself names a pre-release on the same major.minor.patch. This is the rule that surprises people most.",
    ],
    note: "Logic written to the node-semver 7 rules used by npm (strict mode, includePrerelease off) and checked against the semver package before release. Version lists come straight from registry.npmjs.org in your browser; nothing is sent to VersionDude.",
    readMore: "Go further", links: [["semver-ranges-caret-tilde", "Caret vs tilde: what ^1.2.3 and ~1.2.3 actually allow"], ["package-lock-vs-package-json", "package-lock.json vs package.json: which file decides"], ["npm-overrides-transitive-dependency", "npm overrides: force a transitive dependency"]],
    compare: "Compare two versions instead", ctaTitle: "A range floats. Your build machine should not.",
    ctaText: "A caret lets the next install pick a newer version; only the lockfile and the machine that runs npm ci keep builds reproducible. Infomaniak, a Swiss, privacy-respecting provider, offers VPS and cloud servers to run your own build and CI machines.",
    ctaBtn: "See Infomaniak Cloud", aff: "Affiliate link",
  },
  fr: {
    h1: "Vérificateur de plages semver npm",
    lead: "Saisissez une plage de package.json (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) et voyez exactement quelles versions elle accepte. Chargez la vraie liste des versions de n'importe quel paquet npm, ou collez la vôtre.",
    range: "Plage", pkg: "Paquet npm (facultatif)", load: "Charger les versions", loading: "Chargement...", versions: "Versions à tester (une par ligne)",
    invalid: "Ce n'est pas une plage npm valide.", notFound: "Paquet introuvable sur le registre npm.", netErr: "Le registre npm est injoignable. Collez plutôt les versions.",
    expands: "Se développe en", or: "ou", any: "n'importe quelle version", highest: "Version la plus haute acceptée :", none: "Aucune version de la liste ne satisfait cette plage.",
    count: (n, m) => `${n} versions acceptées sur ${m}`, latest: (v, ok) => `Le dist-tag latest est ${v} : ${ok ? "accepté par cette plage" : "PAS accepté par cette plage"}.`,
    op: { ">=": (v) => `au moins ${v}`, ">": (v) => `au-dessus de ${v}`, "<=": (v) => `au plus ${v}`, "<": (v) => `en dessous de ${v}`, "<-0": (v) => `en dessous de ${v}, aucune de ses pré-versions comprise`, "=": (v) => `exactement ${v}` },
    preNote: (n) => `${n} pré-version(s) ont été écartées bien qu'elles soient dans les bornes : npm n'accepte une pré-version que si la plage nomme elle-même une pré-version du même major.minor.patch.`,
    yes: "acceptée", no: "refusée", more: (n) => `${n} versions plus anciennes non affichées.`, examples: "Essayez :",
    h2: "Comment npm lit une plage",
    pts: [
      "^ (caret) autorise tout changement qui ne modifie pas le premier chiffre non nul en partant de la gauche : ^1.2.3 vaut >=1.2.3 <2.0.0, mais ^0.2.3 vaut >=0.2.3 <0.3.0 et ^0.0.3 n'accepte que 0.0.3.",
      "~ (tilde) autorise les correctifs quand une mineure est donnée : ~1.2.3 vaut >=1.2.3 <1.3.0. ~1 équivaut à 1.x.",
      "x, X et * sont des jokers : 1.x vaut >=1.0.0 <2.0.0. Une partie absente compte comme un joker, donc 1.2 signifie 1.2.x.",
      "Un espace signifie ET, || signifie OU. Une plage à trait d'union 1.2.3 - 2.3.4 inclut les deux bornes ; une borne haute partielle comme - 2.3 signifie en dessous de 2.4.0.",
      "Les pré-versions (1.3.0-beta.1) sont exclues, sauf si la plage nomme elle-même une pré-version du même major.minor.patch. C'est la règle qui surprend le plus.",
    ],
    note: "Logique écrite selon les règles de node-semver 7 utilisées par npm (mode strict, includePrerelease désactivé) et vérifiée contre le paquet semver avant publication. Les listes de versions viennent directement de registry.npmjs.org dans votre navigateur ; rien n'est envoyé à VersionDude.",
    readMore: "Pour aller plus loin", links: [["semver-ranges-caret-tilde", "Caret ou tilde : ce que ^1.2.3 et ~1.2.3 autorisent vraiment"], ["package-lock-vs-package-json", "package-lock.json ou package.json : quel fichier décide"], ["npm-overrides-transitive-dependency", "npm overrides : forcer une dépendance transitive"]],
    compare: "Comparer plutôt deux versions", ctaTitle: "Une plage flotte. Votre machine de build, non.",
    ctaText: "Un caret laisse la prochaine installation choisir une version plus récente ; seuls le lockfile et la machine qui lance npm ci rendent les builds reproductibles. Infomaniak, hébergeur suisse respectueux de la vie privée, propose des VPS et serveurs cloud pour faire tourner vos propres machines de build et d'intégration continue.",
    ctaBtn: "Voir le cloud Infomaniak", aff: "Lien affilié",
  },
  es: {
    h1: "Comprobador de rangos semver de npm",
    lead: "Escribe un rango de package.json (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) y mira exactamente qué versiones acepta. Carga la lista real de versiones de cualquier paquete npm o pega la tuya.",
    range: "Rango", pkg: "Paquete npm (opcional)", load: "Cargar versiones", loading: "Cargando...", versions: "Versiones a probar (una por línea)",
    invalid: "No es un rango npm válido.", notFound: "Paquete no encontrado en el registro npm.", netErr: "No se pudo contactar con el registro npm. Pega las versiones a mano.",
    expands: "Equivale a", or: "o", any: "cualquier versión", highest: "Versión más alta aceptada:", none: "Ninguna versión de la lista cumple este rango.",
    count: (n, m) => `${n} de ${m} versiones aceptadas`, latest: (v, ok) => `El dist-tag latest es ${v}: ${ok ? "aceptado por este rango" : "NO aceptado por este rango"}.`,
    op: { ">=": (v) => `como mínimo ${v}`, ">": (v) => `por encima de ${v}`, "<=": (v) => `como máximo ${v}`, "<": (v) => `por debajo de ${v}`, "<-0": (v) => `por debajo de ${v}, sin ninguna de sus preversiones`, "=": (v) => `exactamente ${v}` },
    preNote: (n) => `Se descartaron ${n} preversión(es) aunque están dentro de los límites: npm solo acepta una preversión si el propio rango nombra una preversión del mismo major.minor.patch.`,
    yes: "aceptada", no: "rechazada", more: (n) => `${n} versiones más antiguas no mostradas.`, examples: "Prueba:",
    h2: "Cómo lee npm un rango",
    pts: [
      "^ (caret) permite cualquier cambio que no modifique el primer número distinto de cero por la izquierda: ^1.2.3 es >=1.2.3 <2.0.0, pero ^0.2.3 es >=0.2.3 <0.3.0 y ^0.0.3 solo acepta 0.0.3.",
      "~ (tilde) permite parches cuando se indica una menor: ~1.2.3 es >=1.2.3 <1.3.0. ~1 equivale a 1.x.",
      "x, X y * son comodines: 1.x es >=1.0.0 <2.0.0. Una parte ausente cuenta como comodín, así que 1.2 significa 1.2.x.",
      "Un espacio significa Y, || significa O. Un rango con guion 1.2.3 - 2.3.4 incluye ambos extremos; un extremo superior parcial como - 2.3 significa por debajo de 2.4.0.",
      "Las preversiones (1.3.0-beta.1) quedan excluidas salvo que el propio rango nombre una preversión del mismo major.minor.patch. Es la regla que más sorprende.",
    ],
    note: "Lógica escrita según las reglas de node-semver 7 que usa npm (modo estricto, includePrerelease desactivado) y comprobada contra el paquete semver antes de publicar. Las listas de versiones llegan directamente de registry.npmjs.org en tu navegador; no se envía nada a VersionDude.",
    readMore: "Para ir más lejos", links: [["semver-ranges-caret-tilde", "Caret o tilde: lo que ^1.2.3 y ~1.2.3 permiten de verdad"], ["package-lock-vs-package-json", "package-lock.json o package.json: qué archivo decide"], ["npm-overrides-transitive-dependency", "npm overrides: forzar una dependencia transitiva"]],
    compare: "Comparar dos versiones", ctaTitle: "Un rango flota. Tu máquina de build no debería.",
    ctaText: "Un caret deja que la próxima instalación elija una versión más nueva; solo el lockfile y la máquina que ejecuta npm ci hacen reproducibles los builds. Infomaniak, proveedor suizo respetuoso con la privacidad, ofrece VPS y servidores cloud para ejecutar tus propias máquinas de build e integración continua.",
    ctaBtn: "Ver el cloud de Infomaniak", aff: "Enlace de afiliado",
  },
  de: {
    h1: "npm-Semver-Bereichsprüfer",
    lead: "Geben Sie einen Bereich aus package.json ein (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) und sehen Sie genau, welche Versionen er akzeptiert. Laden Sie die echte Versionsliste eines beliebigen npm-Pakets oder fügen Sie Ihre eigene ein.",
    range: "Bereich", pkg: "npm-Paket (optional)", load: "Versionen laden", loading: "Wird geladen...", versions: "Zu prüfende Versionen (eine pro Zeile)",
    invalid: "Das ist kein gültiger npm-Bereich.", notFound: "Paket nicht in der npm-Registry gefunden.", netErr: "Die npm-Registry ist nicht erreichbar. Fügen Sie die Versionen stattdessen ein.",
    expands: "Entspricht", or: "oder", any: "jede Version", highest: "Höchste akzeptierte Version:", none: "Keine Version der Liste erfüllt diesen Bereich.",
    count: (n, m) => `${n} von ${m} Versionen akzeptiert`, latest: (v, ok) => `Der dist-tag latest ist ${v}: ${ok ? "von diesem Bereich akzeptiert" : "von diesem Bereich NICHT akzeptiert"}.`,
    op: { ">=": (v) => `mindestens ${v}`, ">": (v) => `über ${v}`, "<=": (v) => `höchstens ${v}`, "<": (v) => `unter ${v}`, "<-0": (v) => `unter ${v}, ohne dessen Vorabversionen`, "=": (v) => `genau ${v}` },
    preNote: (n) => `${n} Vorabversion(en) wurden übersprungen, obwohl sie innerhalb der Grenzen liegen: npm akzeptiert eine Vorabversion nur, wenn der Bereich selbst eine Vorabversion desselben major.minor.patch nennt.`,
    yes: "akzeptiert", no: "abgelehnt", more: (n) => `${n} ältere Versionen nicht angezeigt.`, examples: "Beispiele:",
    h2: "Wie npm einen Bereich liest",
    pts: [
      "^ (Caret) erlaubt jede Änderung, die die erste von null verschiedene Zahl von links nicht verändert: ^1.2.3 bedeutet >=1.2.3 <2.0.0, aber ^0.2.3 bedeutet >=0.2.3 <0.3.0 und ^0.0.3 nur 0.0.3.",
      "~ (Tilde) erlaubt Patch-Änderungen, wenn eine Minor-Version angegeben ist: ~1.2.3 bedeutet >=1.2.3 <1.3.0. ~1 ist dasselbe wie 1.x.",
      "x, X und * sind Platzhalter: 1.x ist >=1.0.0 <2.0.0. Ein fehlender Teil zählt als Platzhalter, 1.2 bedeutet also 1.2.x.",
      "Ein Leerzeichen bedeutet UND, || bedeutet ODER. Ein Bindestrich-Bereich 1.2.3 - 2.3.4 schließt beide Enden ein; ein unvollständiges oberes Ende wie - 2.3 bedeutet unter 2.4.0.",
      "Vorabversionen (1.3.0-beta.1) sind ausgeschlossen, es sei denn, der Bereich nennt selbst eine Vorabversion desselben major.minor.patch. Diese Regel überrascht am häufigsten.",
    ],
    note: "Logik nach den node-semver-7-Regeln geschrieben, die npm verwendet (strikter Modus, includePrerelease aus), und vor der Veröffentlichung mit dem semver-Paket abgeglichen. Versionslisten kommen direkt von registry.npmjs.org in Ihrem Browser; nichts wird an VersionDude gesendet.",
    readMore: "Weiterlesen", links: [["semver-ranges-caret-tilde", "Caret oder Tilde: was ^1.2.3 und ~1.2.3 wirklich erlauben"], ["package-lock-vs-package-json", "package-lock.json oder package.json: welche Datei entscheidet"], ["npm-overrides-transitive-dependency", "npm overrides: eine transitive Abhängigkeit erzwingen"]],
    compare: "Stattdessen zwei Versionen vergleichen", ctaTitle: "Ein Bereich schwankt. Ihre Build-Maschine sollte es nicht.",
    ctaText: "Ein Caret lässt die nächste Installation eine neuere Version wählen; nur die Lockfile und die Maschine, die npm ci ausführt, machen Builds reproduzierbar. Infomaniak, ein schweizerischer, datenschutzfreundlicher Anbieter, bietet VPS und Cloud-Server, um eigene Build- und CI-Maschinen zu betreiben.",
    ctaBtn: "Infomaniak Cloud ansehen", aff: "Affiliate-Link",
  },
  it: {
    h1: "Verificatore di intervalli semver npm",
    lead: "Scrivi un intervallo di package.json (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) e guarda esattamente quali versioni accetta. Carica l'elenco reale delle versioni di qualsiasi pacchetto npm, oppure incolla il tuo.",
    range: "Intervallo", pkg: "Pacchetto npm (facoltativo)", load: "Carica le versioni", loading: "Caricamento...", versions: "Versioni da verificare (una per riga)",
    invalid: "Non è un intervallo npm valido.", notFound: "Pacchetto non trovato nel registro npm.", netErr: "Il registro npm non è raggiungibile. Incolla le versioni a mano.",
    expands: "Equivale a", or: "oppure", any: "qualsiasi versione", highest: "Versione più alta accettata:", none: "Nessuna versione dell'elenco soddisfa questo intervallo.",
    count: (n, m) => `${n} versioni accettate su ${m}`, latest: (v, ok) => `Il dist-tag latest è ${v}: ${ok ? "accettato da questo intervallo" : "NON accettato da questo intervallo"}.`,
    op: { ">=": (v) => `almeno ${v}`, ">": (v) => `oltre ${v}`, "<=": (v) => `al massimo ${v}`, "<": (v) => `sotto ${v}`, "<-0": (v) => `sotto ${v}, senza nessuna delle sue pre-release`, "=": (v) => `esattamente ${v}` },
    preNote: (n) => `${n} pre-release sono state scartate pur rientrando nei limiti: npm accetta una pre-release solo se l'intervallo stesso nomina una pre-release dello stesso major.minor.patch.`,
    yes: "accettata", no: "rifiutata", more: (n) => `${n} versioni più vecchie non mostrate.`, examples: "Prova:",
    h2: "Come npm legge un intervallo",
    pts: [
      "^ (caret) consente ogni modifica che non tocca il primo numero diverso da zero a partire da sinistra: ^1.2.3 vale >=1.2.3 <2.0.0, ma ^0.2.3 vale >=0.2.3 <0.3.0 e ^0.0.3 accetta solo 0.0.3.",
      "~ (tilde) consente le patch quando è indicata una minor: ~1.2.3 vale >=1.2.3 <1.3.0. ~1 equivale a 1.x.",
      "x, X e * sono jolly: 1.x vale >=1.0.0 <2.0.0. Una parte mancante conta come jolly, quindi 1.2 significa 1.2.x.",
      "Uno spazio significa E, || significa O. Un intervallo con trattino 1.2.3 - 2.3.4 include entrambi gli estremi; un estremo superiore parziale come - 2.3 significa sotto 2.4.0.",
      "Le pre-release (1.3.0-beta.1) sono escluse, a meno che l'intervallo stesso non nomini una pre-release dello stesso major.minor.patch. È la regola che sorprende di più.",
    ],
    note: "Logica scritta secondo le regole di node-semver 7 usate da npm (modalità rigorosa, includePrerelease disattivato) e verificata con il pacchetto semver prima della pubblicazione. Gli elenchi di versioni arrivano direttamente da registry.npmjs.org nel tuo browser; nulla viene inviato a VersionDude.",
    readMore: "Per approfondire", links: [["semver-ranges-caret-tilde", "Caret o tilde: cosa consentono davvero ^1.2.3 e ~1.2.3"], ["package-lock-vs-package-json", "package-lock.json o package.json: quale file decide"], ["npm-overrides-transitive-dependency", "npm overrides: forzare una dipendenza transitiva"]],
    compare: "Confronta invece due versioni", ctaTitle: "Un intervallo fluttua. La tua macchina di build no.",
    ctaText: "Un caret lascia che la prossima installazione scelga una versione più recente; solo il lockfile e la macchina che esegue npm ci rendono riproducibili le build. Infomaniak, provider svizzero attento alla privacy, offre VPS e server cloud per eseguire le tue macchine di build e integrazione continua.",
    ctaBtn: "Scopri Infomaniak Cloud", aff: "Link di affiliazione",
  },
  pt: {
    h1: "Verificador de intervalos semver do npm",
    lead: "Escreva um intervalo do package.json (^1.2.3, ~1.2.3, 1.x, >=1.0.0 <2.0.0, ||) e veja exatamente que versões aceita. Carregue a lista real de versões de qualquer pacote npm ou cole a sua.",
    range: "Intervalo", pkg: "Pacote npm (opcional)", load: "Carregar versões", loading: "A carregar...", versions: "Versões a testar (uma por linha)",
    invalid: "Não é um intervalo npm válido.", notFound: "Pacote não encontrado no registo npm.", netErr: "Não foi possível contactar o registo npm. Cole as versões manualmente.",
    expands: "Equivale a", or: "ou", any: "qualquer versão", highest: "Versão mais alta aceite:", none: "Nenhuma versão da lista satisfaz este intervalo.",
    count: (n, m) => `${n} de ${m} versões aceites`, latest: (v, ok) => `O dist-tag latest é ${v}: ${ok ? "aceite por este intervalo" : "NÃO aceite por este intervalo"}.`,
    op: { ">=": (v) => `pelo menos ${v}`, ">": (v) => `acima de ${v}`, "<=": (v) => `no máximo ${v}`, "<": (v) => `abaixo de ${v}`, "<-0": (v) => `abaixo de ${v}, sem nenhum dos seus pré-lançamentos`, "=": (v) => `exatamente ${v}` },
    preNote: (n) => `${n} pré-lançamento(s) foram ignorados embora estejam dentro dos limites: o npm só aceita um pré-lançamento se o próprio intervalo nomear um pré-lançamento do mesmo major.minor.patch.`,
    yes: "aceite", no: "recusada", more: (n) => `${n} versões mais antigas não mostradas.`, examples: "Experimente:",
    h2: "Como o npm lê um intervalo",
    pts: [
      "^ (caret) permite qualquer alteração que não mude o primeiro número diferente de zero a contar da esquerda: ^1.2.3 é >=1.2.3 <2.0.0, mas ^0.2.3 é >=0.2.3 <0.3.0 e ^0.0.3 só aceita 0.0.3.",
      "~ (til) permite correções quando é indicada uma menor: ~1.2.3 é >=1.2.3 <1.3.0. ~1 equivale a 1.x.",
      "x, X e * são curingas: 1.x é >=1.0.0 <2.0.0. Uma parte em falta conta como curinga, por isso 1.2 significa 1.2.x.",
      "Um espaço significa E, || significa OU. Um intervalo com hífen 1.2.3 - 2.3.4 inclui ambos os extremos; um extremo superior parcial como - 2.3 significa abaixo de 2.4.0.",
      "Os pré-lançamentos (1.3.0-beta.1) ficam excluídos, a menos que o próprio intervalo nomeie um pré-lançamento do mesmo major.minor.patch. É a regra que mais surpreende.",
    ],
    note: "Lógica escrita segundo as regras do node-semver 7 usadas pelo npm (modo estrito, includePrerelease desativado) e verificada contra o pacote semver antes da publicação. As listas de versões vêm diretamente de registry.npmjs.org no seu navegador; nada é enviado à VersionDude.",
    readMore: "Para ir mais longe", links: [["semver-ranges-caret-tilde", "Caret ou til: o que ^1.2.3 e ~1.2.3 permitem de facto"], ["package-lock-vs-package-json", "package-lock.json ou package.json: que ficheiro decide"], ["npm-overrides-transitive-dependency", "npm overrides: forçar uma dependência transitiva"]],
    compare: "Comparar antes duas versões", ctaTitle: "Um intervalo flutua. A sua máquina de build não deve.",
    ctaText: "Um caret deixa a próxima instalação escolher uma versão mais recente; só o lockfile e a máquina que corre npm ci tornam os builds reprodutíveis. A Infomaniak, fornecedor suíço respeitador da privacidade, oferece VPS e servidores cloud para correr as suas próprias máquinas de build e integração contínua.",
    ctaBtn: "Ver o Infomaniak Cloud", aff: "Link de afiliado",
  },
};

function describe(set, s) {
  if (!set.length) return s.any;
  return set.map((x) => {
    const key = x.op === "<" && x.ver.pre.length === 1 && x.ver.pre[0] === 0 ? "<-0" : x.op;
    const shown = key === "<-0" ? `${x.ver.major}.${x.ver.minor}.${x.ver.patch}` : x.ver.raw;
    return s.op[key](shown);
  }).join(", ");
}

function registryUrl(name) {
  const n = name.trim().toLowerCase();
  return `https://registry.npmjs.org/${n.startsWith("@") ? "@" + encodeURIComponent(n.slice(1)) : encodeURIComponent(n)}`;
}

export default function SemverRangePage({ locale = "en" }) {
  const s = STR[locale] || STR.en;
  const pre = locale === "en" ? "" : `/${locale}`;
  const [range, setRange] = useState("^1.2.3");
  const [pkg, setPkg] = useState("");
  const [list, setList] = useState(SAMPLE);
  const [latest, setLatest] = useState(null);
  const [status, setStatus] = useState("");

  async function load() {
    if (!pkg.trim()) return;
    setStatus("loading");
    try {
      const r = await fetch(registryUrl(pkg), { headers: { Accept: "application/vnd.npm.install-v1+json" } });
      if (r.status === 404) { setStatus("notFound"); return; }
      if (!r.ok) throw new Error(String(r.status));
      const doc = await r.json();
      setList(Object.keys(doc.versions || {}).join("\n"));
      setLatest(doc["dist-tags"]?.latest || null);
      setStatus("");
    } catch {
      setStatus("netErr");
    }
  }

  const out = useMemo(() => {
    const parsed = parseRange(range);
    if (!parsed) return null;
    const vers = [...new Set(list.split(/[\s,]+/).filter(Boolean))].map(parseVersion).filter(Boolean)
      .sort((a, b) => compare(b, a));
    let skippedPre = 0;
    const rows = vers.map((v) => {
      const ok = matchSet(parsed, v) >= 0;
      if (!ok && v.pre.length) {
        const inBounds = parsed.sets.some((set) => set.every((x) => {
          const r = compare(v, x.ver);
          return x.op === ">=" ? r >= 0 : x.op === ">" ? r > 0 : x.op === "<=" ? r <= 0 : x.op === "<" ? r < 0 : r === 0;
        }));
        if (inBounds) skippedPre++;
      }
      return { v, ok };
    });
    const accepted = rows.filter((r) => r.ok);
    const lat = latest ? parseVersion(latest) : null;
    return { parsed, rows, accepted, skippedPre, latestOk: lat ? matchSet(parsed, lat) >= 0 : null };
  }, [range, list, latest]);

  const mono = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" };

  return (
    <div className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-3">{s.h1}</h1>
      <p className="text-secondary mb-4" style={{ fontSize: "1.05rem" }}>{s.lead}</p>

      <label className="fw-semibold d-block mb-1" htmlFor="rg">{s.range}</label>
      <input id="rg" className="form-control mb-2" style={mono} value={range} onChange={(e) => setRange(e.target.value)} spellCheck={false} placeholder="^1.2.3" />
      <div className="small text-secondary mb-4">
        {s.examples}{" "}
        {EXAMPLES.map((ex) => (
          <button key={ex} type="button" className="btn btn-sm btn-outline-secondary me-1 mb-1" style={mono} onClick={() => setRange(ex)}>{ex}</button>
        ))}
      </div>

      <div className="row g-3 align-items-end mb-3">
        <div className="col-12 col-sm-8">
          <label className="fw-semibold d-block mb-1" htmlFor="pk">{s.pkg}</label>
          <input id="pk" className="form-control" style={mono} value={pkg} onChange={(e) => setPkg(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") load(); }} spellCheck={false} placeholder="react, @types/node" />
        </div>
        <div className="col-12 col-sm-4">
          <button type="button" className="btn btn-dark w-100" onClick={load} disabled={status === "loading" || !pkg.trim()}>
            {status === "loading" ? s.loading : s.load}
          </button>
        </div>
      </div>
      {(status === "notFound" || status === "netErr") && <div className="alert alert-warning py-2">{s[status]}</div>}

      <label className="fw-semibold d-block mb-1" htmlFor="vl">{s.versions}</label>
      <textarea id="vl" className="form-control" style={{ ...mono, minHeight: 120 }} value={list}
        onChange={(e) => { setList(e.target.value); setLatest(null); }} spellCheck={false} />

      {!out && range.trim() && <div className="alert alert-danger mt-4">{s.invalid}</div>}
      {out && (
        <div className="mt-4 p-3 rounded-3" style={{ background: "#f0fdf4", border: "1px solid #10b981" }}>
          <div className="text-secondary small">{s.expands}</div>
          <div className="fw-bold mb-2" style={{ ...mono, fontSize: "1.1rem", color: "#047857" }}>
            {out.parsed.sets.map(formatSet).join(" || ")}
          </div>
          <ul className="mb-2">
            {out.parsed.sets.map((set, i) => <li key={i}>{i > 0 && <em>{s.or} </em>}{describe(set, s)}</li>)}
          </ul>
          {out.rows.length > 0 && (
            <div className="fw-semibold">
              {out.accepted.length ? <>{s.highest} <span style={mono}>{out.accepted[0].v.raw}</span> · {s.count(out.accepted.length, out.rows.length)}</> : s.none}
            </div>
          )}
          {out.latestOk !== null && <div className="mt-1">{s.latest(latest, out.latestOk)}</div>}
          {out.skippedPre > 0 && <div className="small text-secondary mt-2">{s.preNote(out.skippedPre)}</div>}
        </div>
      )}

      {out && out.rows.length > 0 && (
        <div className="mt-3 d-flex flex-wrap gap-1" style={mono}>
          {out.rows.slice(0, SHOWN).map(({ v, ok }) => (
            <span key={v.raw} title={ok ? s.yes : s.no} className="px-2 py-1 rounded-2 small"
              style={ok ? { background: "#10b981", color: "#fff" } : { background: "#f1f5f9", color: "#64748b", textDecoration: "line-through" }}>
              {v.raw}
            </span>
          ))}
          {out.rows.length > SHOWN && <span className="small text-secondary align-self-center ms-1">{s.more(out.rows.length - SHOWN)}</span>}
        </div>
      )}

      <h2 className="fw-bold mt-5 mb-3" style={{ fontSize: "1.4rem" }}>{s.h2}</h2>
      <ul className="text-secondary">{s.pts.map((p, i) => <li key={i} className="mb-1">{p}</li>)}</ul>
      <p className="text-secondary small mt-3">{s.note}</p>

      <div className="mt-4 p-4 rounded-3" style={{ background: "#0f172a", color: "#e2e8f0" }}>
        <div className="fw-bold mb-2" style={{ fontSize: "1.1rem", color: "#fff" }}>{s.ctaTitle}</div>
        <p className="mb-3" style={{ fontSize: ".95rem" }}>{s.ctaText}</p>
        <a href={CTA_URL} target="_blank" rel="sponsored nofollow noopener" className="btn btn-light fw-semibold">{s.ctaBtn}</a>
        <span className="small ms-2" style={{ color: "#94a3b8" }}>{s.aff}</span>
      </div>

      <h2 className="fw-bold mt-5 mb-3" style={{ fontSize: "1.2rem" }}>{s.readMore}</h2>
      <ul>
        {s.links.map(([slug, label]) => <li key={slug}><Link href={`${pre}/articles/${slugFor(slug, locale)}`}>{label}</Link></li>)}
        <li><Link href={`${pre}/semver-compare`}>{s.compare}</Link></li>
      </ul>
    </div>
  );
}
