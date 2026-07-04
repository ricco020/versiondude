import { findArticleBySlug, categoryLabel, localizedArticleSlugs, ARTICLE_SLUGS, slugFor } from "@/data/articles";
import { findProject } from "@/data/content";
import ArticlePage from "@/components/article-page/article-page";
import { notFound } from "next/navigation";
const LOC="fr";
export function generateStaticParams(){return [...new Set([...localizedArticleSlugs(LOC),...ARTICLE_SLUGS])].map(slug=>({slug}));}
export function generateMetadata({params}){const x=findArticleBySlug(params.slug,LOC);if(!x)return{};return{title:`${x.title} - VersionDude`,description:x.dek,openGraph:{title:x.title,description:x.dek,type:'article',images:[x.hero]},robots:{index:true,follow:true},alternates: { canonical: `https://versiondude.net/${LOC}/articles/${slugFor(x.slug, LOC)}`, languages: { 'en': `https://versiondude.net/articles/${x.slug}`, 'fr': `https://versiondude.net/fr/articles/${slugFor(x.slug,'fr')}`, 'es': `https://versiondude.net/es/articles/${slugFor(x.slug,'es')}`, 'de': `https://versiondude.net/de/articles/${slugFor(x.slug,'de')}`, 'it': `https://versiondude.net/it/articles/${slugFor(x.slug,'it')}`, 'pt': `https://versiondude.net/pt/articles/${slugFor(x.slug,'pt')}`, 'x-default': `https://versiondude.net/articles/${x.slug}` } }};}
export default function P({params}){const x=findArticleBySlug(params.slug,LOC);if(!x)notFound();const rel=x.related?findProject(LOC,x.related):null;return <ArticlePage article={x} catLabel={categoryLabel(x.category,LOC)} relatedHref={rel?`/${LOC}/projects/${rel.slug}`:null} relatedLabel={rel?rel.name:null} home={`/${LOC}`}/>;}
