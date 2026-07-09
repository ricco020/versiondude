"use client";
import { useState } from "react";

// Semantic Versioning 2.0.0 precedence, implemented to the public spec (semver.org).
// Honest, verifiable logic - no invented behaviour.
const RE = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/;

function parse(v) {
  const m = String(v).trim().match(RE);
  if (!m) return null;
  return { major: +m[1], minor: +m[2], patch: +m[3], pre: m[4] ? m[4].split(".") : [], build: m[5] || "" };
}

function cmpPre(a, b) {
  // No prerelease has higher precedence than any prerelease.
  if (a.length === 0 && b.length === 0) return 0;
  if (a.length === 0) return 1;
  if (b.length === 0) return -1;
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) continue;
    const na = /^\d+$/.test(a[i]), nb = /^\d+$/.test(b[i]);
    if (na && nb) return +a[i] < +b[i] ? -1 : 1;
    if (na) return -1; // numeric identifiers are lower than alphanumeric
    if (nb) return 1;
    return a[i] < b[i] ? -1 : 1;
  }
  return a.length < b.length ? -1 : a.length > b.length ? 1 : 0;
}

function compare(a, b) {
  for (const k of ["major", "minor", "patch"]) {
    if (a[k] !== b[k]) return { cmp: a[k] < b[k] ? -1 : 1, level: k };
  }
  const p = cmpPre(a.pre, b.pre);
  if (p !== 0) return { cmp: p, level: "pre" };
  return { cmp: 0, level: "equal" };
}

const STR = {
  en: { h1: "Semver comparator", lead: "Compare two version numbers using the official Semantic Versioning 2.0.0 rules. Enter two versions to see which is newer and why - build metadata is ignored, as the spec requires.",
    a: "Version A", b: "Version B", invalid: "Not valid semver", aGreater: "Version A is newer", bGreater: "Version B is newer", equal: "The two versions are equal in precedence",
    byLevel: { major: "They differ at the major version - a breaking change.", minor: "They differ at the minor version - new, backward-compatible features.", patch: "They differ at the patch version - backward-compatible fixes.", pre: "They share the same major.minor.patch but differ in the pre-release tag - a pre-release is older than the final release.", equal: "" },
    h2: "How semver precedence works", pts: ["Compare major, then minor, then patch, numerically.", "A version with a pre-release tag (like 1.0.0-rc.1) is older than the same version without it (1.0.0).", "Build metadata (after +) is ignored when comparing precedence."],
    note: "This follows Semantic Versioning 2.0.0 (semver.org). It compares the values you enter; it does not fetch package data." },
  fr: { h1: "Comparateur semver", lead: "Comparez deux numéros de version selon les règles officielles du Semantic Versioning 2.0.0. Saisissez deux versions pour voir laquelle est plus récente et pourquoi - les métadonnées de build sont ignorées, comme l'exige la spec.",
    a: "Version A", b: "Version B", invalid: "Semver non valide", aGreater: "La version A est plus récente", bGreater: "La version B est plus récente", equal: "Les deux versions ont la même précédence",
    byLevel: { major: "Elles diffèrent à la version majeure - un changement cassant.", minor: "Elles diffèrent à la version mineure - de nouvelles fonctionnalités rétrocompatibles.", patch: "Elles diffèrent à la version corrective - des correctifs rétrocompatibles.", pre: "Même major.minor.patch mais une pré-version diffère - une pré-version est plus ancienne que la version finale.", equal: "" },
    h2: "Comment fonctionne la précédence semver", pts: ["Comparer major, puis minor, puis patch, numériquement.", "Une version avec une étiquette de pré-version (comme 1.0.0-rc.1) est plus ancienne que la même version sans elle (1.0.0).", "Les métadonnées de build (après +) sont ignorées pour la précédence."],
    note: "Ceci suit le Semantic Versioning 2.0.0 (semver.org). Il compare les valeurs saisies ; il ne récupère aucune donnée de paquet." },
  es: { h1: "Comparador de semver", lead: "Compara dos números de versión con las reglas oficiales del Semantic Versioning 2.0.0. Introduce dos versiones para ver cuál es más nueva y por qué - los metadatos de compilación se ignoran, como exige la spec.",
    a: "Versión A", b: "Versión B", invalid: "Semver no válido", aGreater: "La versión A es más nueva", bGreater: "La versión B es más nueva", equal: "Las dos versiones tienen la misma precedencia",
    byLevel: { major: "Difieren en la versión mayor - un cambio incompatible.", minor: "Difieren en la versión menor - funciones nuevas retrocompatibles.", patch: "Difieren en la versión de parche - correcciones retrocompatibles.", pre: "Mismo major.minor.patch pero difiere la etiqueta de preversión - una preversión es más antigua que la versión final.", equal: "" },
    h2: "Cómo funciona la precedencia de semver", pts: ["Comparar mayor, luego menor, luego parche, numéricamente.", "Una versión con etiqueta de preversión (como 1.0.0-rc.1) es más antigua que la misma versión sin ella (1.0.0).", "Los metadatos de compilación (tras +) se ignoran en la precedencia."],
    note: "Sigue el Semantic Versioning 2.0.0 (semver.org). Compara los valores que introduces; no obtiene datos de paquetes." },
  de: { h1: "Semver-Vergleich", lead: "Vergleichen Sie zwei Versionsnummern nach den offiziellen Regeln von Semantic Versioning 2.0.0. Geben Sie zwei Versionen ein, um zu sehen, welche neuer ist und warum - Build-Metadaten werden ignoriert, wie es die Spezifikation verlangt.",
    a: "Version A", b: "Version B", invalid: "Kein gültiges Semver", aGreater: "Version A ist neuer", bGreater: "Version B ist neuer", equal: "Beide Versionen haben dieselbe Rangfolge",
    byLevel: { major: "Sie unterscheiden sich in der Hauptversion - eine brechende Änderung.", minor: "Sie unterscheiden sich in der Nebenversion - neue, abwärtskompatible Funktionen.", patch: "Sie unterscheiden sich in der Patch-Version - abwärtskompatible Korrekturen.", pre: "Gleiches major.minor.patch, aber der Vorabversions-Tag unterscheidet sich - eine Vorabversion ist älter als die endgültige Version.", equal: "" },
    h2: "Wie die Semver-Rangfolge funktioniert", pts: ["Major, dann Minor, dann Patch numerisch vergleichen.", "Eine Version mit Vorabversions-Tag (wie 1.0.0-rc.1) ist älter als dieselbe Version ohne (1.0.0).", "Build-Metadaten (nach +) werden bei der Rangfolge ignoriert."],
    note: "Dies folgt Semantic Versioning 2.0.0 (semver.org). Es vergleicht die eingegebenen Werte; es ruft keine Paketdaten ab." },
  it: { h1: "Comparatore semver", lead: "Confronta due numeri di versione con le regole ufficiali del Semantic Versioning 2.0.0. Inserisci due versioni per vedere quale è più recente e perché - i metadati di build vengono ignorati, come richiede la spec.",
    a: "Versione A", b: "Versione B", invalid: "Semver non valido", aGreater: "La versione A è più recente", bGreater: "La versione B è più recente", equal: "Le due versioni hanno la stessa precedenza",
    byLevel: { major: "Differiscono nella versione maggiore - una modifica incompatibile.", minor: "Differiscono nella versione minore - nuove funzioni retrocompatibili.", patch: "Differiscono nella versione patch - correzioni retrocompatibili.", pre: "Stesso major.minor.patch ma differisce il tag di pre-release - una pre-release è più vecchia della versione finale.", equal: "" },
    h2: "Come funziona la precedenza semver", pts: ["Confrontare major, poi minor, poi patch, numericamente.", "Una versione con tag di pre-release (come 1.0.0-rc.1) è più vecchia della stessa versione senza (1.0.0).", "I metadati di build (dopo +) sono ignorati nella precedenza."],
    note: "Segue il Semantic Versioning 2.0.0 (semver.org). Confronta i valori inseriti; non recupera dati dei pacchetti." },
  pt: { h1: "Comparador de semver", lead: "Compare dois números de versão com as regras oficiais do Semantic Versioning 2.0.0. Introduza duas versões para ver qual é mais recente e porquê - os metadados de build são ignorados, como exige a spec.",
    a: "Versão A", b: "Versão B", invalid: "Semver inválido", aGreater: "A versão A é mais recente", bGreater: "A versão B é mais recente", equal: "As duas versões têm a mesma precedência",
    byLevel: { major: "Diferem na versão maior - uma alteração incompatível.", minor: "Diferem na versão menor - novas funcionalidades retrocompatíveis.", patch: "Diferem na versão de correção - correções retrocompatíveis.", pre: "Mesmo major.minor.patch mas difere a etiqueta de pré-lançamento - um pré-lançamento é mais antigo que a versão final.", equal: "" },
    h2: "Como funciona a precedência do semver", pts: ["Comparar maior, depois menor, depois correção, numericamente.", "Uma versão com etiqueta de pré-lançamento (como 1.0.0-rc.1) é mais antiga que a mesma versão sem ela (1.0.0).", "Os metadados de build (após +) são ignorados na precedência."],
    note: "Segue o Semantic Versioning 2.0.0 (semver.org). Compara os valores que introduz; não obtém dados de pacotes." },
};

export default function SemverComparePage({ locale = "en" }) {
  const s = STR[locale] || STR.en;
  const [va, setVa] = useState("1.2.0");
  const [vb, setVb] = useState("1.2.0-rc.1");
  const pa = parse(va), pb = parse(vb);
  let result = null;
  if (pa && pb) result = compare(pa, pb);
  const badge = (ok) => (
    <span className="badge" style={{ background: ok ? "#10b981" : "#ef4444", color: "#fff", marginLeft: 8 }}>
      {ok ? "valid" : s.invalid}
    </span>
  );

  return (
    <div className="container py-5" style={{ maxWidth: 720 }}>
      <h1 className="fw-bold mb-3">{s.h1}</h1>
      <p className="text-secondary mb-4" style={{ fontSize: "1.05rem" }}>{s.lead}</p>

      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <label className="fw-semibold d-block mb-1" htmlFor="va">{s.a}{va && badge(!!pa)}</label>
          <input id="va" className="form-control" style={{ fontFamily: "monospace" }} value={va}
            onChange={(e) => setVa(e.target.value)} spellCheck={false} placeholder="1.2.3" />
        </div>
        <div className="col-12 col-sm-6">
          <label className="fw-semibold d-block mb-1" htmlFor="vb">{s.b}{vb && badge(!!pb)}</label>
          <input id="vb" className="form-control" style={{ fontFamily: "monospace" }} value={vb}
            onChange={(e) => setVb(e.target.value)} spellCheck={false} placeholder="1.3.0" />
        </div>
      </div>

      {result && (
        <div className="mt-4 p-3 rounded-3" style={{ background: "#f0fdf4", border: "1px solid #10b981" }}>
          <div className="fw-bold" style={{ fontSize: "1.1rem", color: "#047857" }}>
            {result.cmp === 0 ? s.equal : result.cmp > 0 ? s.aGreater : s.bGreater}
          </div>
          {result.level !== "equal" && <div className="text-secondary mt-1">{s.byLevel[result.level]}</div>}
        </div>
      )}

      <h2 className="fw-bold mt-5 mb-3" style={{ fontSize: "1.4rem" }}>{s.h2}</h2>
      <ul className="text-secondary">
        {s.pts.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <p className="text-secondary small mt-3">{s.note}</p>
    </div>
  );
}
