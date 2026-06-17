import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("es").ui.category} — VersionDude`,description:t("es").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/es/categories"}};}
export default function P(){return <CategoriesIndex locale="es"/>;}
