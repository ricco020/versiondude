import AboutPage from "@/components/pages/about-page";
import { t } from "@/data/site-i18n";
export function generateMetadata(){const s=t("de").about;return{title:s.title,description:s.missionLead,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/de/about"}};}
export default function P(){return <AboutPage locale="de"/>;}
