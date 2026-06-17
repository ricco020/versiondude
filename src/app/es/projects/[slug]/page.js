import { findProject, projectImages, getContent, PROJECT_SLUGS } from "@/data/content";
import ProjectArticle from "@/components/project-article/project-article";
import { t } from "@/data/site-i18n";
import { notFound } from "next/navigation";
const LOC="es";
export function generateStaticParams(){return PROJECT_SLUGS.map(slug=>({slug}));}
export function generateMetadata({params}){const p=findProject(LOC,params.slug);if(!p)return{};return{title:`${p.name} — VersionDude`,description:p.excerpt,robots:{index:true,follow:true},alternates:{canonical:`https://versiondude.net/${LOC}/projects/${p.slug}`}};}
export default function P({params}){const p=findProject(LOC,params.slug);if(!p)notFound();const c=getContent(LOC);const labels={home:t(LOC).ui.home,projectsTitle:c.projectsTitle,statusLabel:c.statusLabel,currentHomeLabel:c.currentHomeLabel};return <ProjectArticle project={p} img={projectImages(p.slug)} labels={labels} home={`/${LOC}`}/>;}
