import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("de").ui.category} — VersionDude`,description:t("de").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/de/categories"}};}
export default function P(){return <CategoriesIndex locale="de"/>;}
