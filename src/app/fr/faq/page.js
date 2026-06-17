import FaqPage from "@/components/pages/faq-page";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("fr").faqTitle} — VersionDude`,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/fr/faq"}};}
export default function P(){return <FaqPage locale="fr"/>;}
