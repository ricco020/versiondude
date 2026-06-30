import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("it").ui.category} - VersionDude`,description:t("it").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/it/categories"}};}
export default function P(){return <CategoriesIndex locale="it"/>;}
