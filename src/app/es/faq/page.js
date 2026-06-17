import FaqPage from "@/components/pages/faq-page";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("es").faqTitle} — VersionDude`,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/es/faq"}};}
export default function P(){return <FaqPage locale="es"/>;}
