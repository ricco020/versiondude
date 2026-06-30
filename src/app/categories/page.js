import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("en").ui.category} - VersionDude`,description:t("en").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/categories"}};}
export default function P(){return <CategoriesIndex locale="en"/>;}
