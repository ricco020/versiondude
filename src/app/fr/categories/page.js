import CategoriesIndex from "@/components/pages/categories-index";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("fr").ui.category} — VersionDude`,description:t("fr").meta.catDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/fr/categories"}};}
export default function P(){return <CategoriesIndex locale="fr"/>;}
