import Home from "@/components/home-exact/home-exact-it";
import { t } from "@/data/site-i18n";
export function generateMetadata(){const m=t("it").meta;return{title:m.homeTitle,description:m.homeDesc,robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/it/"}};}
export default function P(){return <Home/>;}
