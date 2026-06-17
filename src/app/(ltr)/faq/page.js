import FaqPage from "@/components/pages/faq-page";
import FaqJsonLd from "@/components/faq-jsonld";
import { t } from "@/data/site-i18n";
export function generateMetadata(){return{title:`${t("en").faqTitle} — VersionDude`,description:t("en").meta.faqDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/faq"}};}
export default function P(){return (<><FaqPage locale="en"/><FaqJsonLd locale="en"/></>);}
