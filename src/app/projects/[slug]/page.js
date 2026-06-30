import { findProject, projectImages, getContent, PROJECT_SLUGS } from "@/data/content";
import ProjectArticle from "@/components/project-article/project-article";
import { notFound } from "next/navigation";

const LABELS = { home: "Home", projectsTitle: "Projects", statusLabel: "Status", currentHomeLabel: "Current home" };

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const p = findProject("en", params.slug);
  if (!p) return {};
  return {
    title: `${p.name} - VersionDude`,
    description: p.excerpt,
    openGraph: { title: p.name, description: p.excerpt, images: [projectImages(p.slug).hero] },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://versiondude.net/projects/${p.slug}` },
  };
}

export default function Page({ params }) {
  const project = findProject("en", params.slug);
  if (!project) notFound();
  const c = getContent("en");
  const labels = { ...LABELS, projectsTitle: c.projectsTitle, statusLabel: c.statusLabel, currentHomeLabel: c.currentHomeLabel };
  return <ProjectArticle project={project} img={projectImages(project.slug)} labels={labels} home="" />;
}
