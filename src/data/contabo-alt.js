// Second lien hebergeur sous l encart Infomaniak (Awin 19231 : 154 clics en 90 j, 0 vente au 20/10/2026).
// Contabo (CJ 4639721) est le seul programme du reseau qui vend (5 ventes en octobre, vpnsmith).
// PID CJ versiondude 101807053 ; lien texte CJ dans la langue du lecteur quand Contabo en publie un
// (DE 17058456, ES 17248464), sinon EN 12454592. Aucun prix cite : les tarifs tiers perimient.
const AID = { en: 12454592, de: 17058456, es: 17248464 };

export function contaboAltUrl(loc, slug, pos) {
  const aid = AID[loc] || AID.en;
  return `https://www.tkqlhce.com/click-101807053-${aid}?sid=versiondude-${slug}${pos ? '-' + pos : ''}`;
}

// 17/11/2026 : Contabo passe en bouton principal de ces encarts (ventes CJ 60 j du reseau : Contabo seul,
// Infomaniak 154 clics et 0 vente en 90 j) ; Infomaniak reste en second bouton. SID du bouton : -btn.
export const CONTABO_BTN_LABEL = {
  en: 'See Contabo Cloud VPS', fr: 'Voir les Cloud VPS Contabo', es: 'Ver los Cloud VPS de Contabo',
  de: 'Contabo Cloud VPS ansehen', it: 'Scopri i Cloud VPS di Contabo', pt: 'Ver os Cloud VPS da Contabo',
};

export const CONTABO_ALT_LABEL = {
  en: { pre: 'Another option:', link: 'Contabo Cloud VPS', post: ', with data centres in Europe, the US and Asia, full root access and its own public IPv4 (affiliate link).' },
  fr: { pre: 'Autre option :', link: 'Cloud VPS Contabo', post: ', avec des centres de données en Europe, aux États-Unis et en Asie, accès root complet et IPv4 publique dédiée (lien affilié).' },
  es: { pre: 'Otra opción:', link: 'Cloud VPS de Contabo', post: ', con centros de datos en Europa, EE. UU. y Asia, acceso root completo e IPv4 pública propia (enlace de afiliado).' },
  de: { pre: 'Eine weitere Option:', link: 'Contabo Cloud VPS', post: ', mit Rechenzentren in Europa, den USA und Asien, vollem Root-Zugriff und eigener öffentlicher IPv4 (Affiliate-Link).' },
  it: { pre: "Un'altra opzione:", link: 'Cloud VPS di Contabo', post: ', con data center in Europa, Stati Uniti e Asia, accesso root completo e IPv4 pubblico dedicato (link di affiliazione).' },
  pt: { pre: 'Outra opção:', link: 'Cloud VPS da Contabo', post: ', com centros de dados na Europa, nos EUA e na Ásia, acesso root completo e IPv4 pública própria (link de afiliado).' },
};

// Seuls les encarts marques contaboAlt (angle « serveur que vous controlez » : LTS, MediaWiki, RC, reverse proxy,
// Git, Renovate, CI, et DEV_CLOUD_SERVER : VPS, Docker, CMS/CRM auto-heberges, webhook, CDN) le portent ;
// pas DEV_CLOUD seul, encart generique pose sur des articles sans besoin de serveur.
export const hasContaboAlt = (cta) => !!(cta && cta.contaboAlt);

// 17/11/2026 : rappel court apres la 1re section (le bouton n etait qu en fin d article, sous toutes les sections).
// Meme lien CJ, SID -top, mention affiliee visible.
export const CONTABO_EARLY_LABEL = {
  en: { pre: 'Want to try this on a server you control?', link: 'Contabo Cloud VPS', post: ' gives you full root access and a public IPv4 (affiliate link).' },
  fr: { pre: 'Envie de tester sur un serveur que vous contrôlez ?', link: 'Cloud VPS Contabo', post: ' : accès root complet et IPv4 publique (lien affilié).' },
  es: { pre: '¿Quieres probarlo en un servidor que controles?', link: 'Cloud VPS de Contabo', post: ': acceso root completo e IPv4 pública (enlace de afiliado).' },
  de: { pre: 'Sie möchten das auf einem eigenen Server ausprobieren?', link: 'Contabo Cloud VPS', post: ' bietet vollen Root-Zugriff und eine öffentliche IPv4 (Affiliate-Link).' },
  it: { pre: 'Vuoi provarlo su un server che controlli?', link: 'Cloud VPS di Contabo', post: ': accesso root completo e IPv4 pubblico (link di affiliazione).' },
  pt: { pre: 'Quer testar num servidor que controla?', link: 'Cloud VPS da Contabo', post: ': acesso root completo e IPv4 pública (link de afiliado).' },
};
