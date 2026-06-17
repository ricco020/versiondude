import { findArticleBySlug, categoryLabel, localizedArticleSlugs, ARTICLE_SLUGS } from "@/data/articles";
import { findProject } from "@/data/content";
import ArticlePage from "@/components/article-page/article-page";
import { notFound } from "next/navigation";
const LOC="es";
export function generateStaticParams(){return [...new Set([...localizedArticleSlugs(LOC),...ARTICLE_SLUGS])].map(slug=>({slug}));}
export function generateMetadata({params}){const x=findArticleBySlug(params.slug,LOC);if(!x)return{};return{title:`${x.title} — VersionDude`,description:x.dek,robots:{index:true,follow:true},alternates:{canonical:`https://versiondude.net/${LOC}/articles/${params.slug}`}};}
export default function P({params}){const x=findArticleBySlug(params.slug,LOC);if(!x)notFound();const rel=x.related?findProject(LOC,x.related):null;return <ArticlePage article={x} catLabel={categoryLabel(x.category,LOC)} relatedHref={rel?`/${LOC}/projects/${rel.slug}`:null} relatedLabel={rel?rel.name:null} home={`/${LOC}`}/>;}
