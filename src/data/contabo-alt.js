// Second lien hebergeur sous l encart Infomaniak (Awin 19231 : 154 clics en 90 j, 0 vente au 20/10/2026).
// Contabo (CJ 4639721) est le seul programme du reseau qui vend (5 ventes en octobre, vpnsmith).
// PID CJ versiondude 101807053 ; lien texte CJ dans la langue du lecteur quand Contabo en publie un
// (DE 17058456, ES 17248464), sinon EN 12454592. Aucun prix cite : les tarifs tiers perimient.
const AID = { en: 12454592, de: 17058456, es: 17248464 };

export function contaboAltUrl(loc, slug) {
  const aid = AID[loc] || AID.en;
  return `https://www.tkqlhce.com/click-101807053-${aid}?sid=versiondude-${slug}`;
}

export const CONTABO_ALT_LABEL = {
  en: { pre: 'Another option:', link: 'Contabo Cloud VPS', post: ', with data centres in Europe, the US and Asia, full root access and its own public IPv4 (affiliate link).' },
  fr: { pre: 'Autre option :', link: 'Cloud VPS Contabo', post: ', avec des centres de données en Europe, aux États-Unis et en Asie, accès root complet et IPv4 publique dédiée (lien affilié).' },
  es: { pre: 'Otra opción:', link: 'Cloud VPS de Contabo', post: ', con centros de datos en Europa, EE. UU. y Asia, acceso root completo e IPv4 pública propia (enlace de afiliado).' },
  de: { pre: 'Eine weitere Option:', link: 'Contabo Cloud VPS', post: ', mit Rechenzentren in Europa, den USA und Asien, vollem Root-Zugriff und eigener öffentlicher IPv4 (Affiliate-Link).' },
  it: { pre: "Un'altra opzione:", link: 'Cloud VPS di Contabo', post: ', con data center in Europa, Stati Uniti e Asia, accesso root completo e IPv4 pubblico dedicato (link di affiliazione).' },
  pt: { pre: 'Outra opção:', link: 'Cloud VPS da Contabo', post: ', com centros de dados na Europa, nos EUA e na Ásia, acesso root completo e IPv4 pública própria (link de afiliado).' },
};

// Seuls les encarts marques contaboAlt (angle « serveur que vous controlez » : LTS, MediaWiki, RC, reverse proxy,
// Git, Renovate, CI) le portent ; pas DEV_CLOUD, encart generique pose sur des articles sans besoin de serveur.
export const hasContaboAlt = (cta) => !!(cta && cta.contaboAlt);
