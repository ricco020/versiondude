import FaqPage from "@/components/pages/faq-page";
import FaqJsonLd from "@/components/faq-jsonld";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("it").faqTitle} - VersionDude`,description:t("it").meta.faqDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/it/faq"}};}
export default function P(){return (<><FaqPage locale="it"/><FaqJsonLd locale="it"/></>);}
