import { getContent, getProjects, projectImages } from "@/data/content";
import ProjectsList from "@/components/projects-list/projects-list";
const LOC="pt";
export function generateMetadata(){const c=getContent(LOC);return{title:`${c.projectsTitle} — VersionDude`,description:c.projectsIntro,robots:{index:true,follow:true},alternates:{canonical:`https://versiondude.net/${LOC}/projects`}};}
export default function P(){const c=getContent(LOC);const projects=getProjects(LOC).map(p=>({...p,hero:projectImages(p.slug).hero}));return <ProjectsList locale={LOC} title={c.projectsTitle} intro={c.projectsIntro} projects={projects}/>;}
