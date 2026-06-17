import CategoryPage from "@/components/pages/category-page";
import { getArticles, categoryLabel } from "@/data/articles";
import { getProjects, projectImages } from "@/data/content";
import { t } from "@/data/site-i18n";
import { notFound } from "next/navigation";
const CATS=["standards","parsing","tooling","archive"];
export function generateStaticParams(){return CATS.map(cat=>({cat}));}
export function generateMetadata({params}){if(!CATS.includes(params.cat))return{};return{title:`${categoryLabel(params.cat,"en")} — VersionDude`,robots:{index:true,follow:true},alternates:{canonical:`https://versiondude.net/categories/${params.cat}`}};}
function items(loc,cat){
  const s=t(loc);
  const arts=getArticles(loc).filter(a=>a.category===cat).map(a=>({type:"articles",slug:a.slug,title:a.title,img:a.hero,alt:a.heroAlt,meta:`${a.readingMinutes} ${s.ui.readMin}`}));
  const pr=getProjects(loc).filter(p=>p.category===cat).map(p=>({type:"projects",slug:p.slug,title:p.name,img:projectImages(p.slug).hero,alt:p.heroAlt,meta:null}));
  return [...arts,...pr];
}
export default function P({params}){const loc="en";if(!CATS.includes(params.cat))notFound();return <CategoryPage locale={loc} categoryKey={params.cat} title={categoryLabel(params.cat,loc)} items={items(loc,params.cat)}/>;}
