import FaqPage from "@/components/pages/faq-page";
import FaqJsonLd from "@/components/faq-jsonld";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("fr").faqTitle} - VersionDude`,description:t("fr").meta.faqDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/fr/faq"}};}
export default function P(){return (<><FaqPage locale="fr"/><FaqJsonLd locale="fr"/></>);}
