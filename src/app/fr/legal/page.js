import LegalPage from "@/components/pages/legal-page";
export function generateMetadata(){return{title:"Mentions légales",description:"Mentions légales: Eric LEROY, SIRET 504 527 763 00024, Railway Corporation.",robots:{index:true,follow:true},alternates:{canonical:"https://versiondude.net/fr/legal"}};}
export default function P(){return <LegalPage locale="fr"/>;}
