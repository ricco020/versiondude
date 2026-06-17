import { NextResponse } from "next/server";
// Détection auto de langue à l'atterrissage sur "/" : redirige vers /fr ou /es selon Accept-Language (EN par défaut).
export function middleware(req) {
  const al = (req.headers.get("accept-language") || "").toLowerCase();
  const lang = al.split(",")[0].slice(0, 2);
  if (lang === "fr") return NextResponse.redirect(new URL("/fr", req.url));
  if (lang === "es") return NextResponse.redirect(new URL("/es", req.url));
  return NextResponse.next();
}
export const config = { matcher: ["/"] };
