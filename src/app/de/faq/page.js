import FaqPage from "@/components/pages/faq-page";
import FaqJsonLd from "@/components/faq-jsonld";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("de").faqTitle} — VersionDude`,description:t("de").meta.faqDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/de/faq"}};}
export default function P(){return (<><FaqPage locale="de"/><FaqJsonLd locale="de"/></>);}
