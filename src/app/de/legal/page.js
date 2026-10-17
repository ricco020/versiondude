import LegalPage from "@/components/pages/legal-page";
export function generateMetadata(){return{title:"Impressum",description:"Impressum: Eric LEROY, SIRET 504 527 763 00024, Railway Corporation.",robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/de/legal"}};}
export default function P(){return <LegalPage locale="de"/>;}
