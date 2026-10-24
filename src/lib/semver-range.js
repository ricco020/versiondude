// npm range semantics (node-semver 7, strict mode, includePrerelease off), written
// from the published rules so the page needs no dependency. Checked against the
// real `semver` package on a fixed battery of ranges and versions before shipping.

const NUM = "(0|[1-9]\\d*)";
const PRE = "(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][a-zA-Z0-9-]*))*))";
const BUILD = "(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))";
const FULL = new RegExp(`^v?${NUM}\\.${NUM}\\.${NUM}${PRE}?${BUILD}?$`);
const XID = "(0|[1-9]\\d*|x|X|\\*)";
const PARTIAL = new RegExp(`^v?${XID}(?:\\.${XID}(?:\\.${XID}${PRE}?${BUILD}?)?)?$`);

export function parseVersion(v) {
  const m = String(v).trim().replace(/^=+\s*/, "").match(FULL);
  if (!m) return null;
  const pre = m[4] ? m[4].split(".").map((x) => (/^\d+$/.test(x) ? +x : x)) : [];
  return { major: +m[1], minor: +m[2], patch: +m[3], pre, raw: `${+m[1]}.${+m[2]}.${+m[3]}${pre.length ? "-" + pre.join(".") : ""}` };
}

function cmpId(a, b) {
  const na = typeof a === "number", nb = typeof b === "number";
  if (na && nb) return a === b ? 0 : a < b ? -1 : 1;
  if (na) return -1;
  if (nb) return 1;
  return a === b ? 0 : a < b ? -1 : 1;
}

export function compare(a, b) {
  for (const k of ["major", "minor", "patch"]) if (a[k] !== b[k]) return a[k] < b[k] ? -1 : 1;
  if (!a.pre.length && !b.pre.length) return 0;
  if (!a.pre.length) return 1;
  if (!b.pre.length) return -1;
  for (let i = 0; ; i++) {
    const x = a.pre[i], y = b.pre[i];
    if (x === undefined && y === undefined) return 0;
    if (x === undefined) return -1;
    if (y === undefined) return 1;
    const c = cmpId(x, y);
    if (c) return c;
  }
}

const isX = (id) => !id || id === "x" || id === "X" || id === "*";
const v = (M, m, p, pre = "") => ({ ver: parseVersion(`${M}.${m}.${p}${pre}`) });
const c = (op, M, m, p, pre = "") => ({ op, ...v(M, m, p, pre) });

function partial(s) {
  const m = s.match(PARTIAL);
  if (!m) throw new Error(s);
  return { M: m[1], m: m[2], p: m[3], pre: m[4] ? `-${m[4]}` : "" };
}

function caret(s) {
  const { M, m, p, pre } = partial(s);
  if (isX(M)) return [];
  const a = +M;
  if (isX(m)) return [c(">=", a, 0, 0), c("<", a + 1, 0, 0, "-0")];
  const b = +m;
  if (isX(p)) return a === 0 ? [c(">=", 0, b, 0), c("<", 0, b + 1, 0, "-0")] : [c(">=", a, b, 0), c("<", a + 1, 0, 0, "-0")];
  const d = +p;
  const lo = c(">=", a, b, d, pre);
  if (a !== 0) return [lo, c("<", a + 1, 0, 0, "-0")];
  if (b !== 0) return [lo, c("<", 0, b + 1, 0, "-0")];
  return [lo, c("<", 0, 0, d + 1, "-0")];
}

function tilde(s) {
  const { M, m, p, pre } = partial(s);
  if (isX(M)) return [];
  const a = +M;
  if (isX(m)) return [c(">=", a, 0, 0), c("<", a + 1, 0, 0, "-0")];
  const b = +m;
  if (isX(p)) return [c(">=", a, b, 0), c("<", a, b + 1, 0, "-0")];
  return [c(">=", a, b, +p, pre), c("<", a, b + 1, 0, "-0")];
}

function xrange(op, s) {
  const { M, m, p, pre } = partial(s);
  if (op === "=") op = "";
  const xM = isX(M), xm = xM || isX(m), xp = xm || isX(p);
  if (op === "" && xp) {
    if (xM) return [];
    if (xm) return [c(">=", +M, 0, 0), c("<", +M + 1, 0, 0, "-0")];
    return [c(">=", +M, +m, 0), c("<", +M, +m + 1, 0, "-0")];
  }
  if (xM) return op === ">" || op === "<" ? [c("<", 0, 0, 0, "-0")] : [];
  if (op && xp) {
    let a = +M, b = xm ? 0 : +m, d = 0;
    if (op === ">") {
      op = ">=";
      if (xm) { a += 1; b = 0; } else { b += 1; }
      return [c(op, a, b, d)];
    }
    if (op === "<=") {
      return [xm ? c("<", a + 1, 0, 0, "-0") : c("<", a, b + 1, 0, "-0")];
    }
    if (op === "<") return [c("<", a, b, d, "-0")];
    return [c(op, a, b, d)];
  }
  return [c(op || "=", +M, +m, +p, pre)];
}

function hyphen(from, to) {
  const f = partial(from), t = partial(to);
  let lo;
  if (isX(f.M)) lo = [];
  else if (isX(f.m)) lo = [c(">=", +f.M, 0, 0)];
  else if (isX(f.p)) lo = [c(">=", +f.M, +f.m, 0)];
  else lo = [c(">=", +f.M, +f.m, +f.p, f.pre)];
  let hi;
  if (isX(t.M)) hi = [];
  else if (isX(t.m)) hi = [c("<", +t.M + 1, 0, 0, "-0")];
  else if (isX(t.p)) hi = [c("<", +t.M, +t.m + 1, 0, "-0")];
  else hi = [c("<=", +t.M, +t.m, +t.p, t.pre)];
  return [...lo, ...hi];
}

function parseSet(raw) {
  let s = raw.trim().replace(/(<=|>=|<|>|=|~>|~|\^)\s+/g, "$1");
  const h = s.match(/^(\S+)\s+-\s+(\S+)$/);
  if (h) return hyphen(h[1], h[2]);
  if (!s) return [];
  const out = [];
  for (const tok of s.split(/\s+/)) {
    let r;
    if (tok.startsWith("^")) r = caret(tok.slice(1));
    else if (tok.startsWith("~>")) r = tilde(tok.slice(2));
    else if (tok.startsWith("~")) r = tilde(tok.slice(1));
    else {
      const m = tok.match(/^(<=|>=|<|>|=)?(.*)$/);
      r = xrange(m[1] || "", m[2]);
    }
    out.push(...r);
  }
  return out;
}

// Returns { sets: [[{op, ver}]] } or null if the range is not valid.
export function parseRange(range) {
  try {
    const sets = String(range).split("||").map(parseSet);
    return { sets };
  } catch {
    return null;
  }
}

const show = (x) => `${x.op === "=" ? "" : x.op}${x.ver.raw}`;
export function formatSet(set) {
  return set.length ? set.map(show).join(" ") : "*";
}

function test(cmp, ver) {
  const r = compare(ver, cmp.ver);
  switch (cmp.op) {
    case ">=": return r >= 0;
    case ">": return r > 0;
    case "<=": return r <= 0;
    case "<": return r < 0;
    default: return r === 0;
  }
}

// Which set (index) accepts the version, or -1. Mirrors node-semver's testSet,
// including the rule that a pre-release only matches a set that names a
// pre-release on the same major.minor.patch.
export function matchSet(parsed, ver) {
  for (let i = 0; i < parsed.sets.length; i++) {
    const set = parsed.sets[i];
    if (!set.every((x) => test(x, ver))) continue;
    if (ver.pre.length) {
      const ok = set.some((x) => x.ver.pre.length && x.ver.major === ver.major && x.ver.minor === ver.minor && x.ver.patch === ver.patch);
      if (!ok) continue;
    }
    return i;
  }
  return -1;
}

export function satisfies(version, range) {
  const ver = parseVersion(version), r = parseRange(range);
  if (!ver || !r) return false;
  return matchSet(r, ver) >= 0;
}
