import ContactPage from "@/components/pages/contact-page";
import { t } from "@/data/site-i18n";
export function generateMetadata(){const s=t("pt").contact;return{title:`${s.title} — VersionDude`,description:s.lead,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/pt/contact"}};}
export default function P(){return <ContactPage locale="pt"/>;}
