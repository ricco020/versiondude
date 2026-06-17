// Pass-through root layout. The real <html>/<body> live in [locale]/layout.js
// (all routes are localized); this exists so the global not-found has a root layout.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
