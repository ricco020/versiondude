import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("pt").ui.category} — VersionDude`,description:t("pt").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/pt/categories"}};}
export default function P(){return <CategoriesIndex locale="pt"/>;}
