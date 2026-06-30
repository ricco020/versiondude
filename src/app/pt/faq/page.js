import FaqPage from "@/components/pages/faq-page";
import FaqJsonLd from "@/components/faq-jsonld";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("pt").faqTitle} - VersionDude`,description:t("pt").meta.faqDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/pt/faq"}};}
export default function P(){return (<><FaqPage locale="pt"/><FaqJsonLd locale="pt"/></>);}
