import CategoryPage from "@/components/pages/category-page";
import { getArticles, categoryLabel, articleHref } from "@/data/articles";
import { getProjects, projectImages } from "@/data/content";
import { t } from "@/data/site-i18n";
import { notFound } from "next/navigation";
const LOC="es"; const CATS=["standards","parsing","tooling","archive"];
export function generateStaticParams(){return CATS.map(cat=>({cat}));}
export function generateMetadata({params}){if(!CATS.includes(params.cat))return{};return{title:`${categoryLabel(params.cat,LOC)} - VersionDude`,description:t(LOC).meta.catItemTpl.replace("{cat}",categoryLabel(params.cat,LOC)),robots:{index:true,follow:true},alternates:{canonical:`https://versiondude.net/${LOC}/categories/${params.cat}`}};}
function items(cat){const s=t(LOC);const a=getArticles(LOC).filter(x=>x.category===cat).map(x=>({type:"articles",slug:x.slug,href:articleHref(x.slug,LOC),title:x.title,img:x.hero,alt:x.heroAlt,meta:`${x.readingMinutes} ${s.ui.readMin}`}));const p=getProjects(LOC).filter(x=>x.category===cat).map(x=>({type:"projects",slug:x.slug,href:(LOC==="en"?"":"/"+LOC)+"/projects/"+x.slug,title:x.name,img:projectImages(x.slug).hero,alt:x.heroAlt,meta:null}));return[...a,...p];}
export default function P({params}){if(!CATS.includes(params.cat))notFound();return <CategoryPage locale={LOC} categoryKey={params.cat} title={categoryLabel(params.cat,LOC)} items={items(params.cat)}/>;}
