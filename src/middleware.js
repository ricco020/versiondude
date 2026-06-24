import { NextResponse } from "next/server";

// Locales with a URL prefix. English is the default and lives at the root (no prefix).
const PREFIXED = ["fr", "es", "de", "it", "pt"];
// Fresh cookie name on purpose: voids any stale NEXT_LOCALE that an earlier
// build may have pinned to "en" and wrongly blocked detection.
const COOKIE = "wlocale";
const YEAR = 60 * 60 * 24 * 365;

// Language handling:
//  • On a prefixed path (/fr, /es) remember it in the cookie.
//  • On an English-area path:
//      - cookie fr/es  -> redirect to that locale (language is sticky across visits)
//      - cookie en     -> stay (user explicitly chose English; switcher sets this)
//      - no cookie     -> detect the browser language: fr/es redirect, anything else
//                         stays English (the required fallback).
export function middleware(req) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];
  const pathLocale = PREFIXED.includes(seg) ? seg : "en";
  const cookie = req.cookies.get(COOKIE)?.value;

  if (pathLocale !== "en") {
    if (cookie !== pathLocale) {
      const res = NextResponse.next();
      res.cookies.set(COOKIE, pathLocale, { path: "/", maxAge: YEAR });
      return res;
    }
    return NextResponse.next();
  }

  if (cookie === "fr" || cookie === "es") {
    const url = req.nextUrl.clone();
    url.pathname = `/${cookie}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }
  if (cookie === "en") {
    return NextResponse.next();
  }

  const primary = (req.headers.get("accept-language") || "")
    .toLowerCase()
    .split(",")[0]
    .split("-")[0]
    .trim();
  if (PREFIXED.includes(primary)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${primary}${pathname === "/" ? "" : pathname}`;
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE, primary, { path: "/", maxAge: YEAR });
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|assets|og|favicon|robots\\.txt|sitemap|.*\\.).*)"],
};
