import { NextResponse } from "next/server";

// Locales with a URL prefix. English is the default and lives at the root (no prefix).
const PREFIXED = ["fr", "es"];
const COOKIE = "NEXT_LOCALE";
const YEAR = 60 * 60 * 24 * 365;

// Auto-detect the visitor's language ONLY on their first visit (no cookie yet):
//   browser fr  -> redirect to /fr…   · browser es -> /es…   · anything else -> English (root).
// Once a cookie exists we never auto-redirect again, so a manual language switch
// (which lands on /fr, /es or /) always sticks. Fallback is always English.
export function middleware(req) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];
  const pathLocale = PREFIXED.includes(seg) ? seg : "en";
  const cookie = req.cookies.get(COOKIE)?.value;

  // First visit, English-area URL: sniff Accept-Language and route once.
  if (pathLocale === "en" && !cookie) {
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
    const res = NextResponse.next();
    res.cookies.set(COOKIE, "en", { path: "/", maxAge: YEAR });
    return res;
  }

  // Returning visitor / explicit choice: never auto-redirect, just keep the
  // cookie in sync with whatever locale they're actually viewing.
  if (cookie !== pathLocale) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, pathLocale, { path: "/", maxAge: YEAR });
    return res;
  }

  return NextResponse.next();
}

// Run on real pages only — skip Next internals, API, static assets and any file.
export const config = {
  matcher: ["/((?!_next|api|assets|og|favicon|robots\\.txt|sitemap|.*\\.).*)"],
};
