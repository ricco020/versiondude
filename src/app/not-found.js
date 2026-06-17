import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";

export const metadata = { title: "Page not found — VersionDude", robots: { index: false } };

export default function NotFound() {
  return (
    <LayoutTwo locale="en">
      <main className="page_main_wrapper">
        <div className="container py-5 text-center" style={{ minHeight: "50vh" }}>
          <h1 style={{ fontSize: "5rem", color: "#e63329", fontWeight: 800, marginBottom: ".5rem" }}>404</h1>
          <h2 className="h4 mb-3">Page not found</h2>
          <p className="text-muted mb-4">The page you’re looking for doesn’t exist or has moved.</p>
          <div className="d-flex gap-2 justify-content-center flex-wrap">
            <Link href="/" className="btn btn-primary">Home</Link>
            <Link href="/projects" className="btn btn-outline-secondary">Projects</Link>
            <Link href="/categories" className="btn btn-outline-secondary">Categories</Link>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
