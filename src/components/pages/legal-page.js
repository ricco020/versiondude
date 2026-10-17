"use client";
import LayoutTwo from "@/components/ltr/layout/layout-two";
import Link from "next/link";
import { t } from "@/data/site-i18n";

/* Mentions legales (LCEN art. 6-III, editeur professionnel), six langues.
   Liee depuis le pied de page. */
const EMAIL = "referencement.frb@gmail.com";
// Identite legale de l'editeur (LCEN art. 6-III, editeur professionnel).
// Aucune donnee bancaire ne doit figurer ici ni ailleurs sur le site.
const LEGAL_PUBLISHER = {"name": "Eric LEROY", "address": "18bis rue Bricka, 06160 Juan-les-Pins, France", "phone": "+33 6 79 04 78 65", "phoneHref": "+33679047865", "siret": "504 527 763 00024", "siren": "504 527 763"};
const LEGAL_HOST = {"name": "Railway Corporation", "phone": "+1 415 707 7675", "url": "https://railway.com"};
const LEGAL_L10N = {
  "en": {
    "pubTitle": "Publisher",
    "status": "Eric LEROY, sole trader (entrepreneur individuel, micro-entreprise) registered in France",
    "addr": "Address",
    "phone": "Phone",
    "email": "Email",
    "siret": "SIRET (French business registration number)",
    "siren": "SIREN",
    "vat": "VAT not applicable, article 293 B of the French General Tax Code (TVA non applicable, art. 293 B du CGI)",
    "dirTitle": "Publication director",
    "hostTitle": "Hosting",
    "country": "United States",
    "hostWeb": "Website",
    "title": "Legal notice",
    "sep": ": ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, United States"
  },
  "fr": {
    "pubTitle": "Éditeur du site",
    "status": "Eric LEROY, entrepreneur individuel (micro-entreprise)",
    "addr": "Adresse",
    "phone": "Téléphone",
    "email": "E-mail",
    "siret": "SIRET",
    "siren": "SIREN",
    "vat": "TVA non applicable, art. 293 B du CGI",
    "dirTitle": "Directeur de la publication",
    "hostTitle": "Hébergement",
    "country": "États-Unis",
    "hostWeb": "Site web",
    "title": "Mentions légales",
    "sep": " : ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, États-Unis"
  },
  "de": {
    "pubTitle": "Herausgeber",
    "status": "Eric LEROY, Einzelunternehmer (entrepreneur individuel, micro-entreprise) in Frankreich",
    "addr": "Anschrift",
    "phone": "Telefon",
    "email": "E-Mail",
    "siret": "SIRET (französische Unternehmensnummer)",
    "siren": "SIREN",
    "vat": "Keine Umsatzsteuer gemäß Art. 293 B des französischen Steuergesetzbuchs (TVA non applicable, art. 293 B du CGI)",
    "dirTitle": "Verantwortlich für die Veröffentlichung (directeur de la publication)",
    "hostTitle": "Hosting",
    "country": "Vereinigte Staaten",
    "hostWeb": "Website",
    "title": "Impressum",
    "sep": ": ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, Vereinigte Staaten"
  },
  "es": {
    "pubTitle": "Editor del sitio",
    "status": "Eric LEROY, empresario individual (entrepreneur individuel, micro-entreprise) registrado en Francia",
    "addr": "Dirección",
    "phone": "Teléfono",
    "email": "Correo electrónico",
    "siret": "SIRET (número de registro mercantil francés)",
    "siren": "SIREN",
    "vat": "IVA no aplicable, art. 293 B del Código General de Impuestos francés (TVA non applicable, art. 293 B du CGI)",
    "dirTitle": "Director de la publicación",
    "hostTitle": "Alojamiento",
    "country": "Estados Unidos",
    "hostWeb": "Sitio web",
    "title": "Aviso legal",
    "sep": ": ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, Estados Unidos"
  },
  "it": {
    "pubTitle": "Editore del sito",
    "status": "Eric LEROY, imprenditore individuale (entrepreneur individuel, micro-entreprise) registrato in Francia",
    "addr": "Indirizzo",
    "phone": "Telefono",
    "email": "E-mail",
    "siret": "SIRET (numero di registrazione francese)",
    "siren": "SIREN",
    "vat": "IVA non applicabile, art. 293 B del Codice generale delle imposte francese (TVA non applicable, art. 293 B du CGI)",
    "dirTitle": "Direttore della pubblicazione",
    "hostTitle": "Hosting",
    "country": "Stati Uniti",
    "hostWeb": "Sito web",
    "title": "Note legali",
    "sep": ": ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, Stati Uniti"
  },
  "pt": {
    "pubTitle": "Editor do site",
    "status": "Eric LEROY, empresário em nome individual (entrepreneur individuel, micro-entreprise) registado em França",
    "addr": "Morada",
    "phone": "Telefone",
    "email": "E-mail",
    "siret": "SIRET (número de registo empresarial francês)",
    "siren": "SIREN",
    "vat": "IVA não aplicável, art. 293 B do Código Geral dos Impostos francês (TVA non applicable, art. 293 B du CGI)",
    "dirTitle": "Diretor da publicação",
    "hostTitle": "Alojamento",
    "country": "Estados Unidos",
    "hostWeb": "Website",
    "title": "Aviso legal",
    "sep": ": ",
    "hostAddr": "548 Market St PMB 68956, San Francisco, CA 94104, Estados Unidos"
  }
};
const AFF_TITLE = {"en": "Affiliate links", "fr": "Liens affiliés", "de": "Affiliate-Links", "es": "Enlaces de afiliado", "it": "Link di affiliazione", "pt": "Links de afiliado"};
const AFFILIATE = {
  "en": "Some guides contain affiliate links. If you buy through one, the publisher may receive a commission at no extra cost to you. These links are disclosed and never change a recommendation.",
  "fr": "Certains guides contiennent des liens affiliés. Si vous achetez par l'un d'eux, l'éditeur peut percevoir une commission, sans surcoût pour vous. Ces liens sont signalés et ne modifient jamais une recommandation.",
  "de": "Einige Leitfäden enthalten Affiliate-Links. Wenn Sie darüber kaufen, kann der Herausgeber eine Provision erhalten, ohne Mehrkosten für Sie. Diese Links sind gekennzeichnet und ändern nie eine Empfehlung.",
  "es": "Algunas guías contienen enlaces de afiliado. Si compra a través de uno, el editor puede recibir una comisión sin coste adicional para usted. Estos enlaces se indican y nunca cambian una recomendación.",
  "it": "Alcune guide contengono link di affiliazione. Se acquisti tramite uno di essi, l'editore può ricevere una commissione senza costi aggiuntivi per te. Questi link sono segnalati e non cambiano mai una raccomandazione.",
  "pt": "Alguns guias contêm links de afiliado. Se comprar através de um deles, o editor pode receber uma comissão sem custo adicional para si. Estes links são assinalados e nunca alteram uma recomendação."
};

export function legalTitle(locale) {
  return (LEGAL_L10N[locale] || LEGAL_L10N.en).title;
}

export default function LegalPage({ locale = "en" }) {
  const lg = LEGAL_L10N[locale] || LEGAL_L10N.en;
  const ui = t(locale).ui;
  const p = locale === "en" ? "" : `/${locale}`;
  return (
    <LayoutTwo locale={locale}>
      <main className="page_main_wrapper">
        <div className="team about-content">
          <div className="container">
            <div className="breadcrumb"><ul className="clearfix">
              <li className="ib"><Link href={p || "/"}>{ui.home}</Link></li>
              <li className="ib current-page">{lg.title}</li>
            </ul></div>
            <div className="about-title">
              <h1>{lg.title}</h1>
            </div>
            <div className="about-title mt-4">
              <h2>{lg.pubTitle}</h2>
              <p><strong>{lg.status}</strong></p>
              <p>{lg.addr}{lg.sep}{LEGAL_PUBLISHER.address}</p>
              <p>{lg.phone}{lg.sep}<a href={`tel:${LEGAL_PUBLISHER.phoneHref}`}>{LEGAL_PUBLISHER.phone}</a></p>
              <p>{lg.email}{lg.sep}<a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p>{lg.siret}{lg.sep}{LEGAL_PUBLISHER.siret} ({lg.siren} {LEGAL_PUBLISHER.siren})</p>
              <p>{lg.vat}</p>
              <p>{lg.dirTitle}{lg.sep}{LEGAL_PUBLISHER.name}</p>
            </div>
            <div className="about-title mt-4">
              <h2>{lg.hostTitle}</h2>
              <p><strong>{LEGAL_HOST.name}</strong></p>
              <p>{lg.hostAddr}</p>
              <p>{lg.phone}{lg.sep}{LEGAL_HOST.phone}</p>
              <p>{lg.hostWeb}{lg.sep}<a href={LEGAL_HOST.url} rel="noopener">{LEGAL_HOST.url.replace("https://", "")}</a></p>
            </div>
            <div className="about-title mt-4 mb-5">
              <h2>{AFF_TITLE[locale] || AFF_TITLE.en}</h2>
              <p>{AFFILIATE[locale] || AFFILIATE.en}</p>
            </div>
          </div>
        </div>
      </main>
    </LayoutTwo>
  );
}
