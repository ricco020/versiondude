import { getContent, getProjects, projectImages } from "@/data/content";
import ProjectsList from "@/components/projects-list/projects-list";

export function generateMetadata() {
  const c = getContent("en");
  return {
    title: `${c.projectsTitle} - VersionDude`,
    description: c.projectsIntro,
    robots: { index: true, follow: true },
    alternates: { canonical: "https://versiondude.net/projects" },
  };
}

export default function Page() {
  const c = getContent("en");
  const projects = getProjects("en").map((p) => ({ ...p, hero: projectImages(p.slug).hero }));
  return <ProjectsList title={c.projectsTitle} intro={c.projectsIntro} projects={projects} />;
}
