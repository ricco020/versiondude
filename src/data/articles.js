import FR from "./articles-fr.json";
import ES from "./articles-es.json";
import DE from "./articles-de.json";
import IT from "./articles-it.json";
import PT from "./articles-pt.json";
import ENX from "./articles-en.json";
import SECDEF from "./article-sections-i18n.json";

// Découpe le corps d'un article (déjà localisé) en sections {heading, paras} selon les intertitres.
export function getSections(article, locale = "en") {
  const def = SECDEF[article.slug];
  const paras = article.paras || [];
  if (!def) return [{ heading: "", paras }];
  const out = []; let i = 0;
  for (const sec of def) {
    const h = sec[locale] || sec.en || "";
    out.push({ heading: h, paras: paras.slice(i, i + sec.n) });
    i += sec.n;
  }
  if (i < paras.length) out.push({ heading: "", paras: paras.slice(i) });
  return out;
}
// VersionDude - articles éditoriaux réels (EN + traductions FR/ES). Contenu factuel et original.
// Pilier 1 (web standards / jus) : non monétisé. Pilier 2 (privacy/open-source) : CTA Proton perso.
// Images : Pixabay, libres de droits, uniques, légendes honnêtes (vérifiées).

const PROTON = {
  pass: {
    url: 'https://go.getproton.me/aff_c?offer_id=38&aff_id=18294',
    label: { en: 'Try Proton Pass', fr: 'Essayer Proton Pass', es: 'Probar Proton Pass', de: 'Proton Pass testen', it: 'Prova Proton Pass', pt: 'Experimentar o Proton Pass' },
    sublabel: {
      en: 'Open-source, end-to-end encrypted password manager from the makers of Proton Mail.',
      fr: 'Gestionnaire de mots de passe open source, chiffré de bout en bout, par les créateurs de Proton Mail.',
      es: 'Gestor de contraseñas open source, cifrado de extremo a extremo, de los creadores de Proton Mail.',
      de: 'Open-Source-Passwortmanager mit Ende-zu-Ende-Verschlüsselung von den Machern von Proton Mail.',
      it: 'Gestore di password open source con cifratura end-to-end, dai creatori di Proton Mail.',
      pt: 'Gestor de palavras-passe open source com cifragem ponta a ponta, dos criadores do Proton Mail.',
    },
  },
  mail: {
    url: 'https://go.getproton.me/aff_c?offer_id=7&aff_id=18294',
    label: { en: 'Try Proton Mail', fr: 'Essayer Proton Mail', es: 'Probar Proton Mail', de: 'Proton Mail testen', it: 'Prova Proton Mail', pt: 'Experimentar o Proton Mail' },
    sublabel: {
      en: 'End-to-end encrypted, Swiss-based email built on open-source cryptography.',
      fr: 'Email chiffré de bout en bout, basé en Suisse, bâti sur une cryptographie open source.',
      es: 'Correo cifrado de extremo a extremo, con sede en Suiza, basado en criptografía open source.',
      de: 'Ende-zu-Ende-verschlüsselte E-Mail aus der Schweiz, auf Basis von Open-Source-Kryptografie.',
      it: 'Email cifrata end-to-end, con sede in Svizzera, basata su crittografia open source.',
      pt: 'Email cifrado ponta a ponta, sediado na Suíça, construído sobre criptografia open source.',
    },
  },
};

// Pilier 1 (dev / web) - offre affiliée DEV : hébergement cloud/VPS (Infomaniak via Awin,
// publisher 979469 / merchant 19231, validé réseau). Branché uniquement sur les articles
// où l'hébergement est réellement pertinent (self-hosting / déploiement), jamais en générique.
const DEV_CLOUD = {
  url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
  label: { en: 'See Infomaniak Cloud', fr: 'Voir le cloud Infomaniak', es: 'Ver el cloud de Infomaniak', de: 'Infomaniak Cloud ansehen', it: 'Scopri Infomaniak Cloud', pt: 'Ver o Infomaniak Cloud' },
  sublabel: {
    en: 'Self-hosting needs a reliable home with full runtime and network control. Infomaniak - a Swiss, privacy-respecting provider - offers VPS and cloud servers to host your CMS or app.',
    fr: 'L’auto-hébergement demande un foyer fiable avec un contrôle total du runtime et du réseau. Infomaniak - hébergeur suisse, respectueux de la vie privée - propose des VPS et serveurs cloud pour héberger votre CMS ou votre app.',
    es: 'El autoalojamiento necesita un hogar fiable con control total del runtime y la red. Infomaniak - proveedor suizo, respetuoso con la privacidad - ofrece VPS y servidores cloud para alojar tu CMS o tu app.',
    de: 'Selbst-Hosting braucht ein zuverlässiges Zuhause mit voller Kontrolle über Laufzeit und Netzwerk. Infomaniak - ein schweizerischer, datenschutzfreundlicher Anbieter - bietet VPS und Cloud-Server, um Ihr CMS oder Ihre App zu hosten.',
    it: "L'auto-hosting richiede una base affidabile con pieno controllo di runtime e rete. Infomaniak - provider svizzero attento alla privacy - offre VPS e server cloud per ospitare il tuo CMS o la tua app.",
    pt: 'A auto-hospedagem precisa de uma base fiável com controlo total do runtime e da rede. A Infomaniak - fornecedor suíço, respeitador da privacidade - oferece VPS e servidores cloud para alojar o seu CMS ou a sua app.',
  },
};

// Reverse-proxy article: same Infomaniak offer, angle tuned to the topic (run Nginx/Caddy/Traefik on a server you control).
const REVERSE_PROXY_CTA = {
  url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
  label: { en: 'See Infomaniak Cloud', fr: 'Voir le cloud Infomaniak', es: 'Ver el cloud de Infomaniak', de: 'Infomaniak Cloud ansehen', it: 'Scopri Infomaniak Cloud', pt: 'Ver o Infomaniak Cloud' },
  sublabel: {
    en: 'Running your own reverse proxy (Nginx, Caddy, Traefik) means running a server you fully control. Infomaniak - a Swiss, privacy-respecting host - offers VPS and cloud servers to put one in front of your apps.',
    fr: 'Faire tourner son propre reverse proxy (Nginx, Caddy, Traefik), c’est gérer un serveur que l’on contrôle entièrement. Infomaniak - hébergeur suisse, respectueux de la vie privée - propose des VPS et serveurs cloud pour en placer un devant vos applications.',
    es: 'Ejecutar tu propio proxy inverso (Nginx, Caddy, Traefik) significa gestionar un servidor que controlas por completo. Infomaniak - proveedor suizo, respetuoso con la privacidad - ofrece VPS y servidores cloud para colocar uno delante de tus aplicaciones.',
    de: 'Einen eigenen Reverse Proxy (Nginx, Caddy, Traefik) zu betreiben heißt, einen Server zu betreiben, den Sie vollständig kontrollieren. Infomaniak - ein schweizerischer, datenschutzfreundlicher Anbieter - bietet VPS und Cloud-Server, um einen vor Ihre Apps zu stellen.',
    it: "Gestire il proprio reverse proxy (Nginx, Caddy, Traefik) significa gestire un server che controlli completamente. Infomaniak - provider svizzero attento alla privacy - offre VPS e server cloud per metterne uno davanti alle tue applicazioni.",
    pt: 'Gerir o seu próprio proxy inverso (Nginx, Caddy, Traefik) significa gerir um servidor que controla totalmente. A Infomaniak - fornecedor suíço, respeitador da privacidade - oferece VPS e servidores cloud para colocar um à frente das suas aplicações.',
  },
};

// Git article: same Infomaniak offer, angle tuned to self-hosting a Git server / remote repos.
const GIT_CTA = {
  url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
  label: { en: 'See Infomaniak Cloud', fr: 'Voir le cloud Infomaniak', es: 'Ver el cloud de Infomaniak', de: 'Infomaniak Cloud ansehen', it: 'Scopri Infomaniak Cloud', pt: 'Ver o Infomaniak Cloud' },
  sublabel: {
    en: 'Want your own remote instead of relying on GitHub? Self-hosting Git (with Gitea or GitLab) needs a server you control. Infomaniak - a Swiss, privacy-respecting provider - offers VPS and cloud servers to host your repositories.',
    fr: 'Vous voulez votre propre dépôt distant plutôt que de dépendre de GitHub ? Auto-héberger Git (avec Gitea ou GitLab) demande un serveur que vous contrôlez. Infomaniak - hébergeur suisse, respectueux de la vie privée - propose des VPS et serveurs cloud pour héberger vos dépôts.',
    es: '¿Quieres tu propio remoto en vez de depender de GitHub? Autoalojar Git (con Gitea o GitLab) necesita un servidor que controlas. Infomaniak - proveedor suizo, respetuoso con la privacidad - ofrece VPS y servidores cloud para alojar tus repositorios.',
    de: 'Sie möchten ein eigenes Remote statt von GitHub abhängig zu sein? Git selbst zu hosten (mit Gitea oder GitLab) braucht einen Server, den Sie kontrollieren. Infomaniak - ein schweizerischer, datenschutzfreundlicher Anbieter - bietet VPS und Cloud-Server, um Ihre Repositories zu hosten.',
    it: 'Vuoi un tuo remote invece di dipendere da GitHub? Auto-ospitare Git (con Gitea o GitLab) richiede un server che controlli. Infomaniak - provider svizzero attento alla privacy - offre VPS e server cloud per ospitare i tuoi repository.',
    pt: 'Quer o seu próprio remoto em vez de depender do GitHub? Auto-hospedar Git (com Gitea ou GitLab) precisa de um servidor que controla. A Infomaniak - fornecedor suíço, respeitador da privacidade - oferece VPS e servidores cloud para alojar os seus repositórios.',
  },
};

const SECRETS_CTA = {
  url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
  label: {"en": "See Infomaniak Cloud", "fr": "Voir le cloud Infomaniak", "es": "Ver el cloud de Infomaniak", "de": "Infomaniak Cloud ansehen", "it": "Scopri Infomaniak Cloud", "pt": "Ver o Infomaniak Cloud"},
  sublabel: {"en": "Secrets belong on the server, never in the browser bundle. Run your app where environment variables stay server-side - Infomaniak, a Swiss, privacy-respecting host, offers VPS and cloud servers with full runtime and network control.", "fr": "Les secrets vivent sur le serveur, jamais dans le bundle du navigateur. Faites tourner votre app là où les variables d'environnement restent côté serveur - Infomaniak, hébergeur suisse respectueux de la vie privée, propose des VPS et serveurs cloud avec un contrôle total du runtime et du réseau.", "es": "Los secretos van en el servidor, nunca en el bundle del navegador. Ejecuta tu app donde las variables de entorno quedan del lado del servidor - Infomaniak, proveedor suizo respetuoso con la privacidad, ofrece VPS y servidores cloud con control total del runtime y la red.", "de": "Geheimnisse gehören auf den Server, nie in das Browser-Bundle. Betreiben Sie Ihre App dort, wo Umgebungsvariablen serverseitig bleiben - Infomaniak, ein schweizerischer, datenschutzfreundlicher Anbieter, bietet VPS und Cloud-Server mit voller Kontrolle über Laufzeit und Netzwerk.", "it": "I segreti stanno sul server, mai nel bundle del browser. Esegui la tua app dove le variabili d'ambiente restano lato server - Infomaniak, provider svizzero attento alla privacy, offre VPS e server cloud con pieno controllo di runtime e rete.", "pt": "Os segredos ficam no servidor, nunca no bundle do navegador. Execute a sua app onde as variáveis de ambiente ficam do lado do servidor - a Infomaniak, fornecedor suíço respeitador da privacidade, oferece VPS e servidores cloud com controlo total do runtime e da rede."},
};

// Article GhostApproval : agents IA qui écrivent sur le disque avec vos droits.
// Angle honnête : faire tourner du code non fiable (repos clonés, agents) sur un
// serveur isolé plutôt que sur la machine où vivent vos clés SSH. Infomaniak (Awin, validé réseau).
const AGENT_ISOLATION_CTA = {
  url: 'https://www.awin1.com/cread.php?awinmid=19231&awinaffid=979469',
  label: {"en": "See Infomaniak Cloud", "fr": "Voir le cloud Infomaniak", "es": "Ver el cloud de Infomaniak", "de": "Infomaniak Cloud ansehen", "it": "Scopri Infomaniak Cloud", "pt": "Ver o Infomaniak Cloud"},
  sublabel: {"en": "Run untrusted repositories and AI coding agents on an isolated server, not on the machine that holds your SSH keys. Infomaniak, a Swiss, privacy-respecting host, offers VPS and cloud servers you can wipe and rebuild - a clean sandbox for code you do not fully trust.", "fr": "Faites tourner les dépôts non fiables et les agents de code IA sur un serveur isolé, pas sur la machine qui détient vos clés SSH. Infomaniak, hébergeur suisse respectueux de la vie privée, propose des VPS et serveurs cloud que vous pouvez effacer et reconstruire - un bac à sable propre pour le code auquel vous ne faites pas entièrement confiance.", "es": "Ejecuta los repositorios no fiables y los agentes de código IA en un servidor aislado, no en la máquina que guarda tus claves SSH. Infomaniak, proveedor suizo respetuoso con la privacidad, ofrece VPS y servidores cloud que puedes borrar y reconstruir - un entorno limpio para el código en el que no confías del todo.", "de": "Betreiben Sie nicht vertrauenswürdige Repositories und KI-Coding-Agenten auf einem isolierten Server, nicht auf der Maschine, die Ihre SSH-Schlüssel speichert. Infomaniak, ein schweizerischer, datenschutzfreundlicher Anbieter, bietet VPS und Cloud-Server, die Sie löschen und neu aufsetzen können - eine saubere Sandbox für Code, dem Sie nicht voll vertrauen.", "it": "Esegui i repository non affidabili e gli agenti di codice IA su un server isolato, non sulla macchina che custodisce le tue chiavi SSH. Infomaniak, provider svizzero attento alla privacy, offre VPS e server cloud che puoi cancellare e ricostruire - una sandbox pulita per il codice di cui non ti fidi del tutto.", "pt": "Execute os repositórios não fiáveis e os agentes de código IA num servidor isolado, não na máquina que guarda as suas chaves SSH. A Infomaniak, fornecedor suíço respeitador da privacidade, oferece VPS e servidores cloud que pode apagar e reconstruir - uma sandbox limpa para código em que não confia totalmente."},
};

// Passkeys / passwordless article: Proton Pass is an open-source password manager that
// stores passkeys, so it fits an article about moving to passkey-based, phishing-resistant login.
const PASSKEYS_CTA = {
  url: 'https://go.getproton.me/aff_c?offer_id=38&aff_id=18294',
  label: {"en": "Try Proton Pass", "fr": "Essayer Proton Pass", "es": "Probar Proton Pass", "de": "Proton Pass testen", "it": "Prova Proton Pass", "pt": "Experimentar o Proton Pass"},
  sublabel: {"en": "Passkeys need somewhere to live. Proton Pass - an open-source, end-to-end encrypted manager from the makers of Proton Mail - stores and syncs passkeys across your devices so you can move to phishing-resistant login.", "fr": "Les passkeys ont besoin d'un endroit ou vivre. Proton Pass - gestionnaire open source, chiffre de bout en bout, par les createurs de Proton Mail - stocke et synchronise vos passkeys sur tous vos appareils pour passer a une connexion resistante au phishing.", "es": "Las passkeys necesitan un lugar donde vivir. Proton Pass - gestor open source, cifrado de extremo a extremo, de los creadores de Proton Mail - almacena y sincroniza tus passkeys en todos tus dispositivos para pasar a un inicio de sesion resistente al phishing.", "de": "Passkeys brauchen einen Ort zum Leben. Proton Pass - ein Open-Source-Manager mit Ende-zu-Ende-Verschlusselung von den Machern von Proton Mail - speichert und synchronisiert Passkeys uber Ihre Gerate hinweg, damit Sie zu phishing-resistenter Anmeldung wechseln konnen.", "it": "Le passkey hanno bisogno di un posto dove vivere. Proton Pass - gestore open source con cifratura end-to-end, dai creatori di Proton Mail - archivia e sincronizza le passkey su tutti i tuoi dispositivi per passare a un accesso resistente al phishing.", "pt": "As passkeys precisam de um lugar onde viver. O Proton Pass - gestor open source com cifragem ponta a ponta, dos criadores do Proton Mail - guarda e sincroniza passkeys em todos os seus dispositivos para passar a um inicio de sessao resistente ao phishing."},
};

const a = (o) => o;

export const ARTICLES = [
  a({
    slug: 'what-is-a-changelog', category: 'guides', readingMinutes: 7, date: '2026-07-21',
    title: "What Is a Changelog? Keep a Changelog and Versioned Release Notes, Explained",
    dek: "A changelog is a human-readable file listing the notable changes in each version of a project. The Keep a Changelog convention, the standard change groups, and how it ties into Semantic Versioning.",
    hero: '/assets/articles/what-is-a-changelog-hero.jpg', heroAlt: "Syntax-highlighted source code on a dark screen in a code editor",
    body: '/assets/articles/what-is-a-changelog-body.jpg', bodyCaption: "A typewriter with a sheet of paper reading Update. A changelog is a written record of what changed in each version.",
    paras: ENX['what-is-a-changelog'].paras,
    list: ENX['what-is-a-changelog'].list,
    related: 'what-is-semantic-versioning',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-a-git-tag', category: 'guides', readingMinutes: 7, date: '2026-07-18',
    title: "What Is a Git Tag? Marking Releases and Versions, Explained",
    dek: "A git tag is a named reference that points to a specific commit, used above all to mark releases and versions. Lightweight versus annotated tags, how they differ from branches, and how to create and push them.",
    hero: '/assets/articles/what-is-a-git-tag-hero.jpg', heroAlt: "Syntax-highlighted source code on a dark screen in a code editor",
    body: '/assets/articles/what-is-a-git-tag-body.jpg', bodyCaption: "Syntax-highlighted source code with a motion-blur effect.",
    paras: ENX['what-is-a-git-tag'].paras,
    list: ENX['what-is-a-git-tag'].list,
    related: 'what-is-semantic-versioning',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-a-lockfile', category: 'guides', readingMinutes: 7, date: '2026-07-17',
    title: "What Is a Lockfile? Reproducible Installs, Explained (package-lock, Cargo.lock and more)",
    dek: "A lockfile records the exact resolved version of every dependency so everyone installs the same thing. Why manifests alone are not enough, how integrity hashes add security, and whether to commit it.",
    hero: '/assets/articles/what-is-a-lockfile-hero.jpg', heroAlt: "Syntax-highlighted source code on a dark screen in a code editor",
    body: '/assets/articles/what-is-a-lockfile-body.jpg', bodyCaption: "A package manifest and its lockfile work together: the manifest states ranges, the lockfile pins exact versions.",
    paras: ENX['what-is-a-lockfile'].paras,
    list: ENX['what-is-a-lockfile'].list,
    related: 'what-is-semantic-versioning',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-semantic-versioning', category: 'guides', readingMinutes: 7, date: '2026-07-15',
    title: "What Is Semantic Versioning (SemVer)? MAJOR.MINOR.PATCH, Explained",
    dek: "Semantic Versioning numbers releases as MAJOR.MINOR.PATCH so the version itself tells you what changed. What each part means, the reset rules, pre-release labels, and how npm ranges like ^1.2.3 rely on it.",
    hero: '/assets/articles/what-is-semantic-versioning-hero.jpg', heroAlt: "Syntax-highlighted source code on a dark screen in a code editor",
    body: '/assets/articles/what-is-semantic-versioning-body.jpg', bodyCaption: "Source code open in an editor. Dependency ranges like ^1.2.3 rely on Semantic Versioning to stay safe.",
    paras: ENX['what-is-semantic-versioning'].paras,
    list: ENX['what-is-semantic-versioning'].list,
    related: 'what-is-a-parser',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'typescript-7-go-compiler-2026', category: 'tooling', readingMinutes: 7, date: '2026-07-10',
    title: "TypeScript 7.0 is here: the Go-native compiler and what its 10x speed-up means",
    dek: "TypeScript 7.0 shipped on 8 July 2026 with a compiler rewritten in Go, and Microsoft's benchmarks put builds around 10x faster. What actually changed, why it is faster, and what to check before you migrate.",
    hero: '/assets/articles/typescript-7-go-compiler-2026-hero.jpg', heroAlt: "Syntax-highlighted JavaScript source code on a dark screen",
    body: '/assets/articles/typescript-7-go-compiler-2026-body.jpg', bodyCaption: "Source code shown with syntax highlighting and line numbers in a code editor.",
    paras: ENX['typescript-7-go-compiler-2026'].paras,
    list: ENX['typescript-7-go-compiler-2026'].list,
    related: 'what-is-a-parser',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'ghostapproval-ai-coding-assistants-symlink-2026', category: 'tooling', readingMinutes: 6, date: '2026-07-09',
    title: "GhostApproval: how a symlink can hijack your AI coding assistant",
    dek: "In July 2026 Wiz disclosed GhostApproval, a flaw in six AI coding assistants. A malicious repository uses a symbolic link to redirect an approved file edit onto sensitive files like your SSH keys. What the attack is, which tools are affected, and how to stay safe.",
    hero: '/assets/articles/ghostapproval-ai-coding-assistants-symlink-2026-hero.jpg', heroAlt: "Lines of CSS source code on a screen with a blue and purple motion blur",
    body: '/assets/articles/ghostapproval-ai-coding-assistants-symlink-2026-body.jpg', bodyCaption: "A brass padlock with its key inserted, resting on a pile of steel chain links. GhostApproval slipped an attacker's key into the file that decides who can unlock a developer's machine.",
    paras: [
      "On 8 July 2026 the cloud security firm Wiz disclosed a flaw it calls GhostApproval, affecting six popular AI coding assistants. The trick is simple and unsettling: the assistant asks your permission to edit one harmless-looking file, you approve it, and the write quietly lands on a different, sensitive file instead. The name captures it well - you approve a ghost, and something else happens.",
      "This matters to any developer who uses an AI agent to read and edit code, because those agents act with your own file-system permissions. When an agent can write to disk, a booby-trapped repository can turn a single approved edit into remote code execution. Here is what GhostApproval is, exactly how it works, which tools were affected, and the discipline that keeps you safe.",
      "Wiz published the research on 8 July 2026 and named the pattern GhostApproval. According to its report, the affected assistants are Amazon Q Developer, Anthropic Claude Code, Augment, Cursor, Google Antigravity, and Windsurf. The underlying weakness is classified as CWE-61, symbolic-link following - a category of bug that predates AI tooling by decades.",
      "The word ghost is the point. The assistant shows you an approval prompt naming one file, so you believe you are authorising a small, safe change. But the action that actually runs writes somewhere else entirely. You approved one thing; the tool did another. That gap between what you see and what happens is the whole vulnerability.",
      "The mechanism is an old Unix feature called a symbolic link, or symlink. A symlink is a file that simply points to another file somewhere else on disk. Read or write the symlink and the operating system quietly redirects you to its target. It is useful and completely normal - but only if the program handling it checks where the link actually goes.",
      "Wiz built a malicious repository containing a symlink named something innocent like project_settings.json. That link did not hold settings at all: it pointed to the victim's ~/.ssh/authorized_keys, the file that lists which SSH keys are allowed to log in to the machine. The repository's own README then instructed the assistant to add a line to project_settings.json.",
      "The agent followed the instruction and wrote the line. Because the file was a symlink, the line landed inside authorized_keys instead - and the line was the attacker's own SSH public key, dressed up as a harmless setting. According to Wiz, the result is SSH key injection, shell persistence, or other remote code execution, all reaching outside the workspace the agent was supposed to stay inside.",
      "Vendor responses varied, according to Wiz. Amazon Q was fixed in language server version 1.69.0 and assigned CVE-2026-12958; Cursor was fixed in version 3.0 under CVE-2026-50549; Google Antigravity shipped a fix with a CVE pending. Augment and Windsurf acknowledged the issue - Windsurf on 23 June 2026 - with fixes still in progress at publication.",
      "Anthropic, per Wiz, considered the behaviour outside its threat model rather than a bug; Wiz also notes that Claude Code had already added symlink warnings in version 2.1.32, shipped on 5 February 2026, before the report. Whatever your tool, the practical move is the same: update it to the latest version, where the affected vendors have added symlink resolution and warnings.",
      "Beyond patching, the defence is discipline. Treat every cloned repository as untrusted code, because a repo can carry symlinks that point far outside its own folder. Wiz's guidance to vendors is worth borrowing as a mental checklist: resolve symlinks before showing an approval prompt, warn clearly when the resolved path is outside the workspace, and never write to disk before explicit authorisation.",
      "The deeper lesson outlasts this particular bug. An AI coding agent acts with your permissions, so approving its action means trusting the entire repository it is reading, not just the one line on screen. Scope your SSH keys, run code you do not fully trust in an isolated environment, and read what you approve - especially when the file it names looks reassuringly boring.",
    ],
    list: ["GhostApproval abuses symlinks (CWE-61) in AI coding assistants", "A malicious repo redirects an approved edit onto sensitive files like ~/.ssh/authorized_keys", "Six tools affected; Amazon Q, Cursor and Google Antigravity shipped fixes with CVEs", "Update your AI coding assistant to its latest patched version", "Treat every cloned repository as untrusted code and read what you approve"],
    cta: AGENT_ISOLATION_CTA,
  }),
  a({
    slug: 'novo-nordisk-breach-client-side-secrets-2026', category: 'tooling', readingMinutes: 6, date: '2026-07-04',
    title: "Novo Nordisk breach: how secrets in client-side JavaScript leak everything",
    dek: "In June 2026 Novo Nordisk confirmed a major breach. The attackers reportedly got in through secrets left in client-side JavaScript - Azure credentials and a GitHub token. The developer lesson: a secret in front-end code is a public secret.",
    hero: '/assets/articles/novo-nordisk-breach-client-side-secrets-2026-hero.jpg', heroAlt: "Source code on a dark screen showing JavaScript include tags and an ENV reference",
    body: '/assets/articles/novo-nordisk-breach-client-side-secrets-2026-body.jpg', bodyCaption: "A mouse cursor hovering over the word Security on a screen. Leaked credentials turn a site's own code into an open door.",
    paras: [
      "In June 2026 the Danish pharmaceutical giant Novo Nordisk confirmed a major data breach. According to reporting from HIPAA Journal, FiercePharma and Silicon UK, an extortion group called FulcrumSec claimed it stole 1.3 TB of data and demanded a 25 million dollar ransom, which Novo Nordisk refused to pay. For developers, the most important detail is not the ransom - it is how the attackers reportedly got in.",
      "According to the group's own claims, reported by Silicon UK and others, the initial access came from secrets left in client-side JavaScript. That is a mistake any web team can make, and it is a clear, avoidable one. Here is what happened, why it matters, and how to keep it from happening to your own code.",
      "Novo Nordisk disclosed the incident on 11 June 2026 and published an incident update on its own site. Shortly after, according to BankInfoSecurity, FulcrumSec added the company to its dark-web leak site with sample data from the claimed 1.3 TB haul. When the company refused to pay the reported 25 million dollar ransom, the group began leaking the stolen data.",
      "The stolen material reportedly includes clinical-trial information, intellectual property, and AI models used for drug discovery, according to Yahoo Finance and FiercePharma. FulcrumSec, a cyber-extortion group active since at least September 2025, said it was also pursuing private sales of the stolen research. Novo Nordisk has not confirmed the attackers' technical claims in detail, so treat the entry-point specifics as the group's account.",
      "According to FulcrumSec's account, reported by Silicon UK, the group gained access in March 2026 through secrets left in client-side JavaScript on two separate Novo Nordisk subdomains. In plain terms: sensitive credentials were shipped to the browser inside the website's own JavaScript, where anyone could read them.",
      "The group said those secrets included Azure Container Registry credentials and a GitHub personal access token that reportedly had access to hundreds of repositories. A single leaked token with broad scope can turn one careless line of code into a company-wide breach. That is the whole danger of a hardcoded secret: it does exactly what it was built to do, for whoever finds it.",
      "Client-side JavaScript is, by definition, public. Every visitor's browser downloads it, and anyone can open developer tools or the raw bundle and read it. There is no such thing as a hidden value in front-end code - minifying or obfuscating it only slows a reader down, it does not hide anything. If a secret ships to the browser, treat it as already leaked.",
      "The same risk applies to tokens committed to a Git repository, baked into a container image, or printed in a build log. Automated scanners crawl public sites and code hosts around the clock looking for exactly these strings. A token that grants broad access - like a personal access token with hundreds of repositories in scope - is the worst case, because one leak exposes everything it can reach.",
      "The fix is a discipline, not a single tool. Keep every secret server-side, in environment variables or a dedicated secrets manager, and never let one reach the browser bundle. Scope each token to the minimum it needs, rotate credentials regularly, and rotate them at once if they may have been exposed. Add automated secret scanning to your pipeline so a committed key is caught before it ships.",
      "Front-end code that needs to call a protected service should go through your own server or a serverless function that holds the secret, not carry the secret itself. If you find a leaked credential, the order is simple: revoke it first, then investigate. A revoked token is harmless no matter who copied it.",
      "The Novo Nordisk breach is a reminder that the most damaging failures are often the most basic. The attackers' claims are still the attackers' account, and Novo Nordisk has not detailed the entry point itself. But the lesson stands on its own: a secret in client-side code is a public secret. Keep credentials on the server, scope and rotate them, and scan for them before they ship.",
    ],
    list: ["Keep every secret server-side (env vars or a secrets manager)", "Never ship a credential in client-side JavaScript", "Scope each token to the minimum access it needs", "Rotate credentials regularly - and at once if exposed", "Add automated secret scanning to your CI pipeline"],
    cta: SECRETS_CTA,
  }),
  a({
    slug: 'microsoft-entra-passkeys-default-2026', category: 'tooling', readingMinutes: 6, date: '2026-07-23',
    title: "Microsoft Makes Passkeys the Default in Entra ID and Retires SMS Authentication: What It Means (2026)",
    dek: "Microsoft is making passkeys the default sign-in method in Entra ID from 1 September 2026 and retiring its SMS and voice authentication on 1 February 2027. What passkeys are, why Microsoft says text and call codes no longer stop modern attacks, and what Entra admins should do now.",
    hero: '/assets/articles/microsoft-entra-passkeys-default-2026-hero.jpg', heroAlt: "A finger on a wall-mounted fingerprint and keypad access control scanner",
    body: '/assets/articles/microsoft-entra-passkeys-default-2026-body.jpg', bodyCaption: "A laptop displaying a padlock icon and a Secured checkmark over a world map. Phishing-resistant login aims to keep account access locked to the real device.",
    paras: [
      "Microsoft is changing how people sign in to its enterprise identity platform. According to the Microsoft Security Blog, passkeys will become the default authentication method in Microsoft Entra ID starting 1 September 2026, and Microsoft's own SMS and voice authentication will be fully retired on 1 February 2027. For developers and IT admins, this is a major push toward passwordless, phishing-resistant login.",
      "Entra ID is Microsoft's enterprise identity platform, formerly known as Azure AD. It is what signs users in to Microsoft 365, Azure and countless applications that rely on Microsoft for authentication. A change to its default sign-in method touches a large share of the corporate world, so it is worth understanding exactly what Microsoft announced and what it does not.",
      "According to the Microsoft Security Blog, from 1 September 2026 passkeys become the default authentication method in Entra ID. In practice, Microsoft says users will be prompted to register a passkey at their next MFA challenge on or after that date. This is about steering people toward passkeys by default, rather than a switch that instantly removes other options overnight.",
      "The second date is the harder deadline. Microsoft says its own SMS and voice (phone-call) authentication will be entirely retired on 1 February 2027. After that, according to Microsoft, organisations that still need text-message or phone-call codes will have to use third-party providers, which are paid. Microsoft says it will share the details - which providers are supported and how pricing works - around 18 September 2026.",
      "A passkey is a modern, passwordless credential based on the FIDO2 and WebAuthn standards. Instead of a shared secret you type in, your device holds a private key and proves your identity by signing a challenge from the site. The matching public key is stored by the service. There is no reusable password to steal, phish or leak in a breach, because the private key never leaves your device.",
      "Passkeys are described as phishing-resistant because that signature is cryptographically bound to the real website's domain. A fake login page on a look-alike domain cannot produce a valid response, so a user cannot be tricked into handing over a working credential. One-time codes sent by SMS or read out on a call do not have that binding: a convincing phishing page or a scam call can get a user to type or say the code, and an attacker can relay it in real time.",
      "That gap is Microsoft's stated reason for the change. According to Microsoft, SMS and voice codes cannot stop modern attacks, including attacks assisted by AI, and it is pushing passkeys in their place. In other words, the company is retiring a method it considers too weak against today's phishing and real-time relay attacks, and defaulting to one designed to resist them.",
      "For teams that manage Entra ID, the practical takeaway is to plan now rather than react in 2027. Confirm which users and service accounts still rely on Microsoft's SMS or voice authentication, since those flows stop working when the method is retired on 1 February 2027. Any process built on receiving a text or call code from Microsoft - including some automated or legacy sign-ins - will need another path.",
      "Where SMS or voice is genuinely still required, note that Microsoft says it will point to third-party providers that are paid, with details expected around 18 September 2026. For everyone else, the direction is clear: begin rolling out passkeys and other phishing-resistant methods, test the registration prompt that appears at the next MFA challenge from 1 September 2026, and update internal documentation so users know what to expect.",
      "It is worth being precise about what is and is not happening. Making passkeys the default from 1 September 2026 is a change to what users are prompted to set up, not a claim that every other method disappears that day. The hard removal is specifically Microsoft's own SMS and voice authentication on 1 February 2027. Treat those two dates as the anchors and verify anything beyond them against Microsoft's own documentation.",
      "The bigger picture is that a major identity provider is defaulting millions of enterprise users to passwordless, phishing-resistant login and setting a firm date to drop text and call codes it considers outdated. According to Microsoft and reporting from Cybernews and Windows Latest, the reasoning is that SMS and voice cannot keep up with modern, AI-assisted attacks. If you run anything on Entra ID, the two dates to put on the calendar are 1 September 2026 and 1 February 2027.",
    ],
    list: ["Passkeys become the default sign-in method in Entra ID on 1 September 2026", "Microsoft's own SMS and voice authentication is retired on 1 February 2027", "Passkeys use FIDO2/WebAuthn and are phishing-resistant - the private key never leaves your device", "Microsoft says SMS and voice codes cannot stop modern, AI-assisted attacks", "Still need SMS or voice? Microsoft says you will use paid third-party providers (details around 18 September 2026)"],
    cta: PASSKEYS_CTA,
  }),
  a({
    slug: 'opera-paste-protect-clickfix-clipboard-2026', category: 'tooling', readingMinutes: 6, date: '2026-07-02',
    title: "Opera Paste Protect: the browser defense against ClickFix clipboard attacks",
    dek: "Opera has launched Paste Protect, billed as the first native defense in a major browser against clipboard-based attacks like ClickFix and pastejacking. What the attacks are, what Paste Protect does, and how to protect yourself in any browser.",
    hero: '/assets/articles/opera-paste-protect-clickfix-clipboard-2026-hero.jpg', heroAlt: "A person working on a laptop that shows colourful source code in an editor",
    body: '/assets/articles/opera-paste-protect-clickfix-clipboard-2026-body.jpg', bodyCaption: "A red Security Alert warning over lines of code on a screen. Paste Protect shows a warning like this when it blocks a suspicious clipboard command.",
    paras: ENX['opera-paste-protect-clickfix-clipboard-2026'].paras,
    list: ENX['opera-paste-protect-clickfix-clipboard-2026'].list,
  }),
  // ---------- PILIER 1 - dev monétisable (hébergement) ----------
  a({
    slug: 'what-is-a-cdn', category: 'tooling', readingMinutes: 6, date: '2026-06-20',
    title: 'What is a CDN? Content Delivery Networks explained',
    dek: 'A CDN (Content Delivery Network) is a worldwide network of servers that caches copies of your site close to users, so pages load faster and your origin server is shielded. What a CDN is, how it works, and when you need one.',
    hero: '/assets/articles/what-is-a-cdn-hero.jpg', heroAlt: 'A globe overlaid with networked hexagonal nodes representing a worldwide network',
    body: '/assets/articles/what-is-a-cdn-body.jpg', bodyCaption: 'A network switch with fibre patch cables in a data centre.',
    paras: [
      'A CDN - Content Delivery Network - is a globally distributed network of servers that store cached copies of your website’s content and serve them to visitors from a location physically close to them. Instead of every request travelling to your single origin server (which might be in one country), a visitor in another continent is served by a nearby CDN “edge” server. The result is faster page loads, less load on your origin, and better resilience.',
      'The core problem a CDN solves is distance. Data travels at a finite speed, so a user far from your server experiences higher latency on every request. By placing copies of your static assets - images, CSS, JavaScript, videos - in dozens or hundreds of points of presence worldwide, a CDN cuts that distance dramatically for most visitors.',
      'When someone visits your site through a CDN, their request first reaches the nearest edge server. If that server already has a cached copy of the requested file (a “cache hit”), it returns it immediately without contacting your origin. If it does not (a “cache miss”), it fetches the file from your origin once, serves it, and stores it for the next visitor in that region.',
      'This caching layer is why CDNs are so effective: after the first request in a region, subsequent visitors are served from the edge at high speed, and your origin server only handles a small fraction of total traffic. Cache rules (TTLs) and cache invalidation let you control how long copies live and when they refresh.',
      'Beyond speed, a modern CDN does more: it absorbs traffic spikes and DDoS attacks (the edge soaks up the load instead of your origin), terminates HTTPS/TLS close to users, compresses and optimises assets, and often adds a web application firewall. For a global audience, these benefits compound.',
      'Typical reasons to put a CDN in front of a site include serving a worldwide audience, hosting heavy media, surviving traffic surges, and improving Core Web Vitals (faster loading helps both users and SEO). Even a modest site benefits from offloading static assets to an edge network.',
      'A key point of confusion: a CDN does not replace your hosting. It sits in front of your origin server and caches what that origin produces - you still need a reliable host for the origin itself, especially for anything dynamic (databases, APIs, server-side logic) that the CDN cannot simply cache.',
      'For dynamic content, CDNs increasingly offer edge compute and smart caching, but the origin remains the source of truth. A common, robust setup is a solid origin server (a VPS or cloud server you control) with a CDN layered in front for static assets and global delivery.',
      'So do you need a CDN? If your audience is local and your traffic is light, your host alone may be enough. If you serve users across regions, host media, or care about speed and resilience, a CDN is one of the highest-impact, lowest-effort upgrades - and it pairs naturally with a well-chosen origin host.',
    ],
    list: ['Faster loads via nearby edge servers', 'Less load on your origin (caching)', 'Absorbs traffic spikes & DDoS', 'HTTPS termination + asset optimisation', 'Better Core Web Vitals / SEO'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-ci-cd', category: 'tooling', readingMinutes: 6, date: '2026-07-23',
    title: 'What is CI/CD? Continuous Integration and Delivery explained',
    dek: 'CI/CD is a way of building software where changes are merged, tested and shipped through an automated pipeline. What continuous integration and continuous delivery mean, how the pipeline works, the common tools, and the honest trade-offs.',
    hero: '/assets/articles/what-is-ci-cd-hero.jpg', heroAlt: 'Colorful syntax-highlighted code on a dark computer screen',
    body: '/assets/articles/what-is-ci-cd-body.jpg', bodyCaption: 'Three tower server units on a shelf, lit in blue.',
    paras: [
      'CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous Deployment). It describes a way of building software where code changes flow through an automated pipeline that merges, builds, tests and ships them, instead of relying on manual, occasional releases. The goal is simple: catch problems early and get working changes to users quickly and reliably.',
      'Continuous Integration (CI) is the practice of merging every developer’s changes into a shared main branch frequently - often several times a day - rather than letting branches drift apart for weeks. Each merge triggers an automated build and a suite of tests. If the build breaks or a test fails, the team finds out within minutes, on the specific change that caused it, instead of discovering a tangle of conflicts much later.',
      'The core idea of CI is that integrating in small, frequent steps is far less painful than one big merge at the end. Because the code is built and tested on every change, the main branch stays in a known-good state most of the time, and each failure points at a small, recent diff that is quick to understand and fix.',
      'Continuous Delivery is the next step: after code passes CI, it is automatically prepared for release so that shipping to production is a routine, low-risk action - often a single click or approval. Continuous Deployment goes one step further and removes the manual gate entirely: every change that passes the automated checks is deployed to production on its own. The two terms are related but not identical, and many teams use delivery (with a human approval) rather than full deployment.',
      'A typical pipeline runs in stages: build the application, run the tests (unit, integration, sometimes end-to-end), and then deploy - first perhaps to a staging environment, then to production. Each stage must pass before the next begins, so a failing test stops the pipeline before broken code reaches users. Pipelines are usually defined as code in a configuration file that lives alongside the project.',
      'Several tools implement these pipelines. GitHub Actions and GitLab CI are built into their respective platforms and run pipelines defined in YAML files in the repository. Jenkins is a long-standing, self-hosted, open-source automation server. CircleCI is a hosted service focused on CI/CD. They differ in hosting model and configuration, but all follow the same build-test-deploy pattern.',
      'The benefits are concrete: faster feedback on every change, fewer bugs reaching production because tests run automatically, smaller and safer releases, and less manual, error-prone work at deploy time. When integration and deployment are routine rather than rare events, teams tend to ship more confidently.',
      'CI/CD is not free, though. Setting up a reliable pipeline takes real effort, and it is only as good as the tests behind it - weak tests give false confidence, while flaky tests that fail intermittently erode trust and get ignored. Build minutes and infrastructure cost money, and maintaining the pipeline is ongoing work. These are trade-offs to weigh, not reasons to avoid CI/CD.',
      'So is CI/CD worth it? For most teams shipping software regularly, yes: the automation pays back the setup cost by catching problems early and making releases boring in the best sense. Start small - automate the build and a handful of meaningful tests first - and grow the pipeline as your project and your confidence in it grow.',
    ],
    list: ['CI: merge and test small changes often', 'CD: automate the path to release', 'Pipeline: build then test then deploy', 'Tools: GitHub Actions, GitLab CI, Jenkins, CircleCI', 'Faster feedback, fewer bugs in production'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-a-vps', category: 'tooling', readingMinutes: 6, date: '2026-06-20',
    title: 'What is a VPS? A plain-English guide for developers',
    dek: 'A VPS (Virtual Private Server) gives you a private slice of a real server - your own OS, root access and guaranteed resources. What that means, how it differs from shared and cloud hosting, and when you need one.',
    hero: '/assets/articles/what-is-a-vps-hero.jpg', heroAlt: 'A hand inserting a server module into a blue-lit data-centre rack',
    body: '/assets/articles/what-is-a-vps-body.jpg', bodyCaption: 'A close-up of a server circuit board with CPU and memory chips.',
    paras: [
      'VPS stands for Virtual Private Server - a private slice of a physical server that behaves like a machine of your own. You get your own operating system, root (administrator) access, and a guaranteed share of CPU, memory and storage, all for a predictable monthly price. It is the middle ground between cheap shared hosting and a full dedicated server.',
      'Under the hood, a hosting provider runs one powerful physical server and uses virtualization to split it into several isolated virtual machines. Each VPS has its own OS and resources walled off from its neighbours, so another customer’s traffic spike or crash does not drag your site down the way it can on shared hosting.',
      'That isolation is the whole point. On a VPS you can install almost anything - a web server, a database, background workers, a container runtime - and configure it exactly how you want, because you have root. You are responsible for that environment, which is more power and more responsibility than managed platforms give you.',
      'Compared with shared hosting, a VPS gives you dedicated, guaranteed resources and root access instead of a locked-down control panel on a server crowded with other sites. Shared hosting is cheaper and simpler, but you cannot install system packages, tune the stack, or escape a noisy neighbour.',
      'Compared with cloud hosting, the line is blurrier: a cloud server is essentially a VPS you can resize and bill by the hour, often with extra managed services around it. A traditional VPS is usually a fixed plan at a fixed price. For most small projects a straightforward VPS is simpler and cheaper than a sprawling cloud account.',
      'Developers reach for a VPS when they have outgrown shared hosting or want full control. Common uses include hosting web apps and APIs, running a database, self-hosting tools, staging environments, bots and cron jobs, or learning Linux server administration hands-on.',
      'The trade-off is maintenance: with root access you also own updates, security hardening, backups and uptime. A VPS rewards control with responsibility, so it suits people comfortable on the command line - or willing to learn.',
      'That responsibility is why providers offer managed and unmanaged plans. Unmanaged is cheaper and gives you a bare server to run yourself; managed adds support, updates and sometimes a control panel, for a higher price. Pick based on how much server administration you want to do.',
      'So is a VPS right for you? If you need root, guaranteed resources, or to run something shared hosting forbids - and you are comfortable maintaining a Linux box - a VPS is the natural step up, at a predictable cost. If you just want a simple site live with minimal fuss, managed hosting may still fit better.',
    ],
    list: ['Web apps & APIs that need full control', 'Databases (PostgreSQL, MySQL, Redis)', 'Self-hosted tools, bots and cron jobs', 'Staging environments and side projects', 'Learning Linux server administration'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-a-reverse-proxy', category: 'tooling', readingMinutes: 6, date: '2026-06-26',
    title: 'What is a reverse proxy? A plain-English guide for developers',
    dek: 'A reverse proxy sits in front of your servers and handles every incoming request first - routing, HTTPS, caching and protection in one place. What it does, how it differs from a forward proxy, and the tools that run one.',
    hero: '/assets/articles/what-is-a-reverse-proxy-hero.jpg', heroAlt: 'Modern rack-mounted server units in a data centre',
    body: '/assets/articles/what-is-a-reverse-proxy-body.jpg', bodyCaption: 'Blue Ethernet cables plugged into a network switch - the routing layer a reverse proxy sits in front of.',
    paras: [
      'A reverse proxy is a server that sits in front of one or more backend servers and handles every incoming request before they do. The client - a browser or an app - only ever talks to the proxy; the proxy decides which backend should answer, forwards the request, and sends the response back. To the outside world it looks like a single server, even when several are doing the work behind it.',
      'The name makes more sense next to its opposite. A forward proxy sits in front of clients and speaks to the wider internet on their behalf, hiding who is making the request - the model behind corporate web filters and many VPNs. A reverse proxy does the mirror image: it sits in front of servers and faces the clients, hiding the backend. Same go-between idea, opposite side of the conversation.',
      'Its first job is routing. One public domain and IP address can front many different applications: requests for /api go to one service, /blog to another, everything else to a third, all without the visitor ever seeing the ports or machines underneath. That single entry point is what lets you run a dozen small services and still present one clean address to the world.',
      'On top of routing, a reverse proxy is where the cross-cutting work gets done once instead of in every app. It terminates TLS, so HTTPS certificates live in one place rather than inside each service. It can load-balance requests across several identical backends, cache common responses so the backend is not hit twice for the same thing, and compress replies to save bandwidth - all transparently to the apps behind it.',
      'It is also a natural security boundary. Because backends never face the internet directly, their real addresses and software stay hidden, shrinking what an attacker can see. The proxy becomes the single place to enforce rate limits, block abusive traffic, attach a web application firewall, or cut off a misbehaving client - controls you would otherwise have to bolt onto every service separately.',
      'A handful of tools dominate this space. Nginx and HAProxy are the long-standing, battle-tested choices; Caddy is popular for getting automatic HTTPS working with almost no configuration; and Traefik is built for container and Kubernetes setups where backends come and go. Apache can do the job too with mod_proxy, and managed options - cloud load balancers, or a service like Cloudflare - are essentially reverse proxies someone else runs for you.',
      'In practice you meet a reverse proxy whenever one server has to do more than one thing. Common setups include serving several websites from a single machine, putting HTTPS in front of an app that only speaks plain HTTP, exposing internal microservices under one tidy domain, or spreading traffic across a few copies of an app for resilience. Self-hosters lean on it constantly to run many tools behind one address.',
      'It helps to place a reverse proxy against its neighbours. A load balancer is really just one feature a reverse proxy can provide: spreading requests across backends. An API gateway is a specialised reverse proxy for APIs, adding authentication, rate limiting and request shaping on top. The terms overlap because they are all variations on the same idea - a smart front door in front of your services.',
      'So would you run one yourself? If you self-host more than a single service, want HTTPS handled cleanly, or need one address in front of several apps, a reverse proxy like Nginx or Caddy is the standard answer - and it needs a server you control to run on. It is a small, stable piece of infrastructure that quietly does a lot, which is exactly why almost every production stack has one.',
    ],
    list: ['One domain in front of several apps or microservices', 'Automatic HTTPS / TLS termination (Caddy, Nginx)', 'Load balancing across identical backends', 'Caching and compression to spare the backend', 'Rate limiting, WAF and hiding backend servers'],
    faq: [
      { q: 'What is the difference between a reverse proxy and a forward proxy?', a: 'A forward proxy sits in front of clients and makes requests to the internet on their behalf, hiding who is asking. A reverse proxy is the mirror image: it sits in front of servers, facing the clients, and hides the backend. Same go-between role, opposite side of the conversation.' },
      { q: 'Is a reverse proxy the same as a load balancer?', a: 'Not exactly. Load balancing - spreading requests across several backends - is just one of the jobs a reverse proxy can do. A reverse proxy also handles routing, TLS termination, caching and security, so a load balancer is really one feature of the broader reverse-proxy role.' },
      { q: 'Which software is used to run a reverse proxy?', a: 'Common choices are Nginx and HAProxy (long-standing and battle-tested), Caddy (popular for automatic HTTPS), and Traefik (built for containers and Kubernetes). Apache can also do it with mod_proxy, and managed options like cloud load balancers or Cloudflare are reverse proxies someone else runs for you.' },
      { q: 'Do I need a reverse proxy?', a: 'If you self-host more than one service, want HTTPS handled cleanly in one place, or need a single address in front of several apps, a reverse proxy like Nginx or Caddy is the standard answer. For a single simple app it is optional, but almost every production stack uses one.' },
    ],
    cta: REVERSE_PROXY_CTA,
  }),
  a({
    slug: 'what-is-git', category: 'tooling', readingMinutes: 6, date: '2026-06-28',
    title: 'What is Git? Version control explained',
    dek: 'Git is a distributed version control system that tracks every change to your code and lets many people work on it together without overwriting each other. What Git is, the core concepts, how it differs from GitHub, and the basic commands.',
    hero: '/assets/articles/what-is-git-hero.jpg', heroAlt: 'A code editor showing a Git side panel with the current branch, local and remote branches, and a commit history of merged branches',
    body: '/assets/articles/what-is-git-body.jpg', bodyCaption: 'A developer working at a desktop computer, editing source code of the kind Git tracks.',
    paras: [
      'Git is a version control system - a tool that records every change made to a set of files over time, so you can see what changed, who changed it, and go back to any earlier state. In practice that set of files is usually a software project’s source code. Git was created in 2005 by Linus Torvalds, the founder of Linux, to manage the Linux kernel’s development, and it has since become the standard way developers track and share their work.',
      'What makes Git distinctive is that it is distributed. In an older, centralised system like Subversion (SVN), there is one central server that holds the full history, and each developer checks out only a snapshot of the files. Git works differently: when you clone a repository, you download the entire project along with its complete history onto your own machine.',
      'That means every developer has a full copy of the repository, not just the latest files. You can commit changes, inspect history and create branches entirely offline, without talking to a server. A central copy (often on a service like GitHub) is still useful for sharing, but it is a convenience, not a single point of failure - if it disappeared, every clone would still hold the full history.',
      'To use Git you need a few core concepts. A repository (or “repo”) is the project folder Git is tracking, including its history. A commit is a saved snapshot of your changes at a point in time, each with a message describing what you did. Before you commit, you place changes into a staging area, which lets you choose exactly what goes into the next snapshot rather than committing everything at once.',
      'The other essential ideas are branches and remotes. A branch is an independent line of work: you can branch off to build a feature or fix a bug without touching the main code, then merge your branch back in when it is ready. A remote is a copy of the repository hosted elsewhere - you push your commits up to it to share them, and pull others’ commits down to stay in sync.',
      'Developers rely on Git for several concrete reasons. It keeps a complete, reviewable history of a project; it lets a whole team work on the same codebase in parallel without overwriting each other; branches make it safe to experiment because the main code is untouched until you merge; and if a change breaks something, you can revert to a known-good commit. For almost any project that lives in code, those are everyday needs.',
      'A common source of confusion is the difference between Git and GitHub. Git is the version control tool itself - software that runs on your computer and manages the history. GitHub is a website that hosts Git repositories online, adding collaboration features like pull requests, issue tracking and access control on top. GitLab and Bitbucket are similar hosting services. You can use Git with no account anywhere; the hosts are optional places to store and share your remotes.',
      'In day-to-day use you drive Git with a handful of commands. You start a project with git init, or copy an existing one with git clone. You stage changes with git add, save a snapshot with git commit, send your commits to a remote with git push, and fetch others’ work with git pull. Around those, git status shows what has changed and git branch and git merge handle separate lines of work - a small core that covers most everyday tasks.',
      'So do you need Git? If you write code at all - even alone on a small project - Git gives you a reliable history, an undo button across your whole project, and a safe way to experiment on branches. The moment more than one person is involved, it becomes essential. It has a learning curve, but it is the foundation almost every modern software team is built on, and you can host your own remotes on a server you control.',
    ],
    list: ['Distributed: every clone holds the full history', 'Commits = saved snapshots with a message', 'Branches let you work in parallel safely', 'Push/pull sync your work with a remote', 'Git is the tool; GitHub/GitLab host the repos'],
    faq: [
      { q: 'Is Git the same as GitHub?', a: 'No. Git is the version control software that runs on your machine and tracks your project’s history. GitHub is a website that hosts Git repositories online and adds collaboration features like pull requests and issue tracking. GitLab and Bitbucket are similar hosts. You can use Git without GitHub, and the hosting service is optional.' },
      { q: 'Is Git hard to learn?', a: 'Git has a learning curve, and some advanced operations can be confusing at first. But the everyday workflow rests on a small set of commands - add, commit, push, pull, branch and merge - that most people pick up quickly. You do not need to master every feature to use Git productively.' },
      { q: 'What is a commit?', a: 'A commit is a saved snapshot of your changes at a point in time, each with a short message describing what you did. Commits build up the project’s history, so you can see how the code evolved and return to any earlier state if needed.' },
      { q: 'Do I need Git for solo projects?', a: 'It is not required, but it is genuinely useful even alone. Git gives you a full history of your work, an undo button across the whole project, and branches to try ideas safely. It also makes it easy to back up your code to a remote and to collaborate later if the project grows.' },
    ],
    cta: GIT_CTA,
  }),
  a({
    slug: 'what-is-a-webhook', category: 'tooling', readingMinutes: 6, date: '2026-06-22',
    title: 'What is a webhook? Event-driven HTTP, explained',
    dek: 'A webhook is an automated HTTP request one service sends to another the moment an event happens - a push instead of a poll. What a webhook is, how it differs from a normal API, how it works, and how to receive one securely.',
    hero: '/assets/articles/what-is-a-webhook-hero.jpg', heroAlt: 'Lines of source code shown on a dark computer screen',
    body: '/assets/articles/what-is-a-webhook-body.jpg', bodyCaption: 'Coloured light trails streaming from a smartphone, suggesting data sent between services.',
    paras: [
      'A webhook is an automated message that one application sends to another the instant something happens. Instead of you repeatedly asking a service “anything new yet?”, the service calls you - it makes an HTTP request to a URL you control as soon as an event occurs. People often describe it as a “reverse API”: the data is pushed to you, rather than pulled by you.',
      'To see why that matters, compare it with a normal API. With a traditional API, your app is the one that asks: it sends a request whenever it wants data, and the server answers. That works, but if you need to know about events the moment they happen, you have to keep asking over and over - a wasteful pattern called polling.',
      'A webhook flips the direction. Rather than your app checking a payment service every minute for new payments, the payment service sends a message to your URL the instant a payment succeeds. No wasted requests, and almost no delay. The trade-off is that you now have to run something that listens for those incoming messages.',
      'Mechanically, a webhook is simple. You register a URL - your “endpoint” - with the provider and tell it which events you care about. When such an event fires, the provider sends an HTTP POST request to your endpoint, with a body (usually JSON) describing what happened. Your server receives that request and does whatever the event calls for.',
      'Your endpoint is expected to reply quickly with a success status (a 2xx code) to acknowledge that it received the message. If your endpoint is down or returns an error, most providers will retry delivery several times over a period, so a brief outage does not mean the event is lost for good.',
      'Webhooks are everywhere once you look. A payment provider tells your app a charge went through; a code host triggers a deploy when you push a commit; a chat tool posts a message when a build finishes; an e-commerce platform notifies your system of a new order. Anywhere one service needs to tell another that “something happened”, a webhook is a natural fit.',
      'Because your endpoint is a public URL, anyone who discovers it could try to send fake requests, so verification matters. Reputable providers sign each request with a shared secret - they include a signature header you recalculate and compare. If it does not match, you reject the request. Always serve the endpoint over HTTPS so the payload cannot be read or tampered with in transit.',
      'A few more habits make webhook handling robust. Validate the payload before acting on it, and treat delivery as “at least once”: because of retries the same event can arrive twice, so make your handler idempotent - processing a duplicate should be harmless. Acknowledge fast and push any slow work to a background job, so you never time out the sender.',
      'One catch ties it all together: a webhook only works if your endpoint is publicly reachable and reliably online. The sender cannot reach a script on your laptop or a server that sleeps. Receiving webhooks in production means running an always-on server you control - which is exactly where a dependable host comes in.',
    ],
    list: ['Event-driven: the server pushes, you do not poll', 'Delivered as an HTTP POST with a JSON payload', 'Verify each request with a signed secret over HTTPS', 'Reply 2xx fast; handle retries idempotently', 'Needs a public, always-on endpoint to receive them'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-a-docker-container', category: 'tooling', readingMinutes: 6, date: '2026-06-23',
    title: 'What is a Docker container? A clear, practical explainer',
    dek: 'A Docker container packages an app with everything it needs to run, so it behaves the same on any machine. What a container is, how it differs from a virtual machine, image vs container, and where containers fit in real projects.',
    hero: '/assets/articles/what-is-a-docker-container-hero.jpg', heroAlt: 'Stacks of colourful shipping containers, a visual metaphor for software containers',
    body: '/assets/articles/what-is-a-docker-container-body.jpg', bodyCaption: 'Servers in a data centre - where containers actually run in production.',
    paras: [
      'A Docker container is a lightweight, self-contained package that bundles an application together with everything it needs to run - its code, runtime, system libraries and settings - so it behaves the same way on any machine. It is the practical answer to the classic “but it works on my machine” problem: ship the container, and it runs identically on a colleague’s laptop, a test server, or in production.',
      'The most common confusion is between a container and a virtual machine. A virtual machine emulates an entire computer, including its own full operating system running on top of a hypervisor. That makes VMs powerful but heavy: each one carries a whole OS, takes gigabytes, and is slow to boot.',
      'A container works differently. Instead of bundling a whole operating system, it shares the host machine’s OS kernel and isolates only the application and its dependencies. The result is dramatically lighter: containers are megabytes rather than gigabytes, start in seconds, and you can run many more of them on the same hardware. The trade-off is that they are isolated, but not as strongly separated as VMs.',
      'To use Docker well, you need one key distinction: image versus container. A Docker image is a read-only blueprint - a snapshot of the app plus its dependencies, built in layers. A container is a running instance of that image. From a single image you can launch many identical containers, which is exactly what makes scaling predictable.',
      'In practice, you describe how to build the image in a file called a Dockerfile, build it once, and then run it. Under the hood Docker uses built-in Linux kernel features - namespaces and cgroups - to give each container its own isolated view of processes, filesystem and resources, without the overhead of a separate operating system.',
      'Developers reach for containers because they solve real, everyday problems: a consistent environment from a laptop to production, simple and repeatable deployments, microservices where each service runs in its own container, clean continuous-integration pipelines, and easy scaling - spin up more identical containers when traffic rises.',
      'Running one container is easy; running many across several servers needs orchestration. Docker Compose coordinates multiple containers on a single host, which is ideal for local development and small setups. For large, fault-tolerant systems, Kubernetes schedules and manages containers across a whole cluster of machines.',
      'Containers are not a cure-all. Because they share the host kernel, their isolation is weaker than a VM’s, so they are not a hard security boundary on their own. They are also ephemeral by default - any data you want to keep must live in a mounted volume - and at scale the orchestration layer adds real operational complexity.',
      'Finally, a container has to run somewhere. On your own machine for development that is Docker Desktop, but in production it needs a reliable server you control - a VPS or cloud host where your containers stay up. A solid host is the foundation the whole setup sits on.',
    ],
    list: ['Bundles an app with all its dependencies', 'Shares the host OS kernel - far lighter than a VM', 'Image = blueprint, container = running instance', 'Consistent from laptop to production', 'Orchestrated at scale with Kubernetes'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-devops', category: 'tooling', readingMinutes: 6, date: '2026-06-23',
    title: 'What is DevOps? Culture, Practices & Tools Explained',
    dek: 'DevOps combines software development and IT operations into one automated, collaborative workflow so teams ship faster and more reliably. What DevOps is, the core practices (CI/CD, infrastructure as code), the culture behind it, and the common tools.',
    hero: '/assets/articles/what-is-devops-hero.jpg', heroAlt: 'Interlocking metal gears, representing automation and DevOps',
    body: '/assets/articles/what-is-devops-body.jpg', bodyCaption: 'A developer at work - DevOps merges the people who build software with those who run it.',
    paras: [
      'DevOps is a way of building and running software that merges two worlds: software development (Dev) and IT operations (Ops). The goal is simple - ship software faster and more reliably by making the people who write code and the people who run it work as one team, supported by heavy automation. It is less a single tool than a way of working.',
      'To see what DevOps actually is, it helps to know what it replaced. Traditionally, developers wrote code and then “threw it over the wall” to a separate operations team to deploy and keep running. That hand-off was slow and full of friction: when something broke, each side blamed the other. DevOps tears down that wall.',
      'Instead, one team shares responsibility for the whole lifecycle - building, testing, releasing, and running the software in production. The same people who write a feature help ship it and keep it healthy. That shared ownership, combined with automation, is the heart of DevOps.',
      'A handful of core practices make it work. The biggest is a CI/CD pipeline that automates building, testing, and deploying every change. Alongside it sit infrastructure as code (defining servers in version-controlled files instead of by hand) and continuous monitoring so teams see problems quickly.',
      'CI/CD is the engine. Continuous integration builds and tests every code change automatically; continuous delivery or deployment ships it the moment it passes. Infrastructure as code means your servers and networks are described in files you can review and reproduce, instead of clicked together manually and forgotten.',
      'But DevOps is a culture before it is a toolset. It runs on collaboration, shared ownership, fast feedback, and a blameless approach to failure - fixing the process, not punishing the person. Teams that adopt the tools without the culture rarely get the benefits; the mindset is what makes the automation pay off.',
      'The toolchain reflects those practices: version control with Git, containers with Docker and orchestration with Kubernetes, CI servers like GitHub Actions, GitLab CI or Jenkins, plus monitoring and cloud infrastructure. No single tool “is” DevOps - they are pieces that support the workflow.',
      'The payoff is real: faster, more frequent, and more reliable releases, with problems caught early instead of in production. The catch is that DevOps is a shift in how a team works, not a product you can buy. Bolting on tools without changing the culture is the most common way it fails.',
      'Finally, all of this runs on infrastructure. CI/CD pipelines need build runners, and your deployed app needs a reliable, always-on server. A solid host - a VPS or cloud server you control - is the ground the whole DevOps workflow stands on.',
    ],
    list: ['Combines development and operations into one workflow', 'CI/CD automates build, test and deploy', 'Infrastructure as code + continuous monitoring', 'A culture of shared ownership, not just tools', 'Faster, more frequent, more reliable releases'],
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'what-is-an-api', category: 'tooling', readingMinutes: 6, date: '2026-06-24',
    title: 'What is an API? A clear, practical explainer',
    dek: 'An API (Application Programming Interface) is a contract that lets one piece of software ask another for data or actions, without knowing how it works inside. What an API is, how a request and response work, the common styles like REST and GraphQL, and why developers build on them.',
    hero: '/assets/articles/what-is-an-api-hero.jpg', heroAlt: 'A laptop screen showing source code in a code editor',
    body: '/assets/articles/what-is-an-api-body.jpg', bodyCaption: 'A developer at work - most modern software talks to other software through APIs.',
    paras: [
      'An API - short for Application Programming Interface - is a set of rules that lets one program talk to another. It defines how you ask for data or an action, what you have to send, and what you get back, so two pieces of software can work together without either one knowing how the other is built inside. It is the contract between them.',
      'A common analogy is a restaurant menu. The menu lists what you can order and what each dish costs, you place an order, and the kitchen prepares it - but you never need to see the kitchen or know how the cooking is done. An API is that menu for software: it tells you what you can request and how, and hides everything behind it.',
      'More precisely, an API exposes a set of operations a service is willing to perform. A weather service might offer an operation that returns the forecast for a city; a payment service might offer one that charges a card. You call the operation with the inputs it expects, and the service does the work and hands back a result. The internals stay private and can change freely, as long as the contract holds.',
      'On the web, most APIs work over the same protocol as web pages: HTTP. Your program sends a request to a URL called an endpoint, usually with a method that signals intent - GET to read data, POST to create it, PUT or PATCH to update, DELETE to remove. The request can carry parameters and a body; the server processes it and sends back a response.',
      'That response has two important parts: a status code and a payload. The status code is a short number that says how it went - 200 means success, 404 means the thing was not found, 500 means the server hit an error. The payload is the data itself, today almost always formatted as JSON, a lightweight text format that is easy for programs to read and write.',
      'APIs come in a few common styles. REST is the most widespread: it organises everything around resources addressed by URLs and leans on the standard HTTP methods. GraphQL takes a different approach, letting the client ask for exactly the fields it needs in a single query, which avoids over-fetching. Older systems may use SOAP, and real-time apps often add WebSockets for a continuous two-way connection.',
      'Many APIs are protected, because they expose real data and actions. Authentication proves who is calling - often with an API key or a token such as OAuth - and rate limiting caps how many requests a caller can make in a window, so one client cannot overwhelm the service. Public APIs publish documentation describing every endpoint, its inputs, and its responses.',
      'Developers rely on APIs because they let you build on top of existing services instead of reinventing them. You can add maps, payments, email, login, or AI to an app by calling someone else’s API. They also let large systems split into smaller services that talk to each other, and they are how a mobile app or single-page front end fetches data from a backend.',
      'Finally, an API has to run somewhere. The service behind it - the backend that receives requests and returns responses - needs a reliable, always-on server. For your own APIs, that means a host you control: a VPS or cloud server where the backend stays up and reachable. A solid host is the foundation the whole interface sits on.',
    ],
    list: ['A contract that lets one program ask another for data or actions', 'Web APIs use HTTP: endpoint, method, request, response', 'Responses carry a status code and data, usually as JSON', 'Common styles: REST, GraphQL, SOAP, WebSockets', 'Protected by authentication and rate limits, described in docs'],
    cta: DEV_CLOUD,
  }),
  // ---------- PILIER 2 - monétisable (Proton) ----------
  a({
    slug: 'open-source-password-managers', category: 'tooling', readingMinutes: 6, date: '2026-06-17',
    title: 'The best open-source password managers',
    dek: 'Why open-source matters for a password manager, and the projects worth trusting - from Bitwarden and KeePassXC to Proton Pass.',
    hero: '/assets/articles/open-source-password-managers-hero.jpg', heroAlt: 'A padlock on a circuit board representing digital security',
    body: '/assets/articles/open-source-password-managers-body.jpg', bodyCaption: 'A metallic padlock, symbolising account security.',
    paras: [
      'A password manager holds the keys to your entire digital life, so the question of whether you can trust it matters more than for almost any other app. Open-source software answers part of that question: when the code is public, independent researchers can audit how your secrets are stored and encrypted, instead of taking a vendor’s word for it.',
      'Bitwarden is the best-known open-source option. Its clients and server are published under open licences and it has been independently audited; you can even self-host the backend if you want full control. KeePassXC takes a different, fully local approach: your vault is a single encrypted file you store and sync yourself, with no cloud component at all.',
      'For people who want open-source cryptography without running their own infrastructure, Proton Pass is a strong managed option. It is built by the team behind Proton Mail, uses end-to-end encryption, and its apps are open source, so you get auditable security with the convenience of hosted sync across devices.',
      'Whichever you choose, the fundamentals are the same: a long, unique master password, two-factor authentication on the vault, and unique generated passwords for every site. The right tool is the one you will actually use consistently.',
    ],
    list: ['Bitwarden - open-source, audited, optional self-hosting', 'KeePassXC - fully local encrypted vault file', 'Proton Pass - open-source apps, hosted end-to-end encrypted sync'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'self-hosted-password-managers', category: 'tooling', readingMinutes: 6, date: '2026-06-17',
    title: 'Self-hosted password managers: full control of your vault',
    dek: 'Running your own password manager puts you in charge of where secrets live - here is how the main options compare, and when a managed service makes more sense.',
    hero: '/assets/articles/self-hosted-password-managers-hero.jpg', heroAlt: 'Server hardware in a data centre',
    body: '/assets/articles/self-hosted-password-managers-body.jpg', bodyCaption: 'Networking and storage equipment in a server rack.',
    paras: [
      'Self-hosting a password manager means the encrypted vault lives on infrastructure you control rather than a vendor’s cloud. For developers and privacy-conscious users that can be appealing: no third party holds your data, and you decide the backup and access policy.',
      'Vaultwarden is the most popular route - a lightweight, compatible reimplementation of the Bitwarden server that runs comfortably in a single container on a small VPS or home server. It works with the official Bitwarden client apps, so you keep a polished user experience while owning the backend.',
      'KeePassXC is the simplest form of "self-hosting": the vault is just an encrypted file. You sync it with whatever you already trust - your own storage, an encrypted drive, or a private repository. There is no server to maintain at all.',
      'Self-hosting is not free of cost: you become responsible for uptime, updates, and especially backups. If you lose the file or the server without a backup, the data is gone. If that responsibility sounds heavy, a managed end-to-end encrypted service such as Proton Pass gives you most of the privacy benefits - your secrets are encrypted before they leave your device - without the operational burden.',
    ],
    list: ['Vaultwarden - self-hosted, Bitwarden-compatible server', 'KeePassXC - encrypted file you sync yourself', 'Proton Pass - managed, end-to-end encrypted alternative'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'secrets-management-tools', category: 'tooling', readingMinutes: 6, date: '2026-06-17',
    title: 'Secrets management tools for developers',
    dek: 'API keys, tokens and .env files should never sit in plain text or in your git history. Here is how teams keep application secrets safe.',
    hero: '/assets/articles/secrets-management-tools-hero.jpg', heroAlt: 'Program code displayed in a terminal',
    body: '/assets/articles/secrets-management-tools-body.jpg', bodyCaption: 'Lines of code on a dark terminal screen.',
    paras: [
      'Application secrets - database passwords, API keys, signing tokens - are a recurring source of breaches. The most common mistakes are hard-coding them in source, committing a .env file by accident, or pasting them into chat. The goal of secrets management is to keep these values encrypted, access-controlled, and out of version control.',
      'At the project level, the basics go a long way: add .env to .gitignore, commit a redacted .env.example instead, and rotate any key that has ever touched a public repository. Tools like git-secrets or pre-commit hooks can block accidental commits before they happen.',
      'For teams and production systems, dedicated tools centralise secrets behind authentication and audit logging. HashiCorp Vault, cloud-native options like AWS Secrets Manager, and open-source projects such as Infisical let applications fetch secrets at runtime instead of storing them on disk.',
      'For the personal secrets a developer accumulates - recovery codes, service logins, license keys - an encrypted password manager is the right home. Proton Pass, with its end-to-end encryption and secure note support, keeps those values out of plain-text files and synced safely across your machines.',
    ],
    list: ['Keep .env out of git; commit .env.example', 'Rotate any leaked key immediately', 'Vault / Infisical for runtime secrets', 'A password manager for personal credentials'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'ssh-key-management', category: 'tooling', readingMinutes: 6, date: '2026-06-17',
    title: 'SSH key management: a practical guide',
    dek: 'SSH keys replace passwords with something far stronger - but only if you protect, separate and rotate them. A plain-English guide to managing SSH keys safely.',
    hero: '/assets/articles/ssh-key-management-hero.jpg', heroAlt: 'Source code on a dark screen with line numbers',
    body: '/assets/articles/ssh-key-management-body.jpg', bodyCaption: 'A brass padlock and its key resting on a pile of steel chains.',
    paras: [
      'SSH key management is the practice of generating, protecting, distributing and retiring the cryptographic key pairs you use to log into servers over SSH. Done well, it replaces fragile passwords with keys that are far harder to guess, and lets you revoke access cleanly when a laptop is lost or a contractor leaves. Done badly - keys with no passphrase, copied between machines, never rotated - it quietly becomes one of the widest doors into your infrastructure.',
      'The reason it deserves attention is that an SSH key is a standing credential. Unlike a password you type, a private key sits in a file on disk and grants access for as long as the matching public key stays in a server’s authorized_keys file. A single unprotected key, leaked from a backup or a compromised machine, can hand an attacker the same reach you have - which is exactly why developer and CI/CD keys are such a prized target.',
      'An SSH key pair has two halves. The private key stays on your machine and must never leave it; the public key is copied to each server you want to reach, where it lives in ~/.ssh/authorized_keys. When you connect, the server challenges your client to prove it holds the private key, without the key itself ever crossing the network. Possession of that private file is therefore everything.',
      'Modern practice favours the Ed25519 algorithm - short, fast and strong - over older RSA keys, though 3072-bit-or-larger RSA remains acceptable where Ed25519 is not supported. You generate a pair with ssh-keygen, and the single most important option is a passphrase: it encrypts the private key on disk, so that a stolen key file is useless to anyone who does not also know the phrase.',
      'A handful of habits cover most of the risk. Always set a passphrase, and let ssh-agent hold the decrypted key in memory so you type it once per session rather than disabling it. Use a separate key per device instead of copying one private key across laptops, so you can revoke a single machine without disrupting the others. And give CI systems and servers their own keys, never your personal one.',
      'Access is granted entirely by what sits in each server’s authorized_keys file, so that file is where management really happens. Review it periodically, remove keys for people and machines that no longer need access, and keep a short, named comment on each key so you can tell at a glance whose it is. Beyond a few servers, a configuration-management tool or an SSH certificate authority scales this far better than hand-editing files.',
      'Rotation closes the loop. Plan to replace keys on a schedule, and immediately whenever a device is lost, a passphrase may have been seen, or someone with access leaves. Because revoking a key is simply removing its public half from authorized_keys, keys that are named and inventoried are dramatically easier to retire than anonymous ones you can no longer account for.',
      'The private key file itself should stay on the device that uses it, protected by its passphrase and the operating system’s own file permissions - not synced around in plain cloud folders. But the passphrases that unlock those keys, along with recovery codes and the occasional key you genuinely must back up, do need a safe home, and a plain-text file or a notes app is not it.',
      'An end-to-end encrypted password manager is the right place for those secrets: the passphrases, the recovery codes and any exported key material are encrypted before they leave your device and synced safely across the machines you own. It keeps the human-memorable part of SSH security out of plain sight, without the operational burden of running your own vault server.',
    ],
    list: ['Always protect private keys with a passphrase', 'Prefer Ed25519; use a separate key per device', 'Give CI systems and servers their own keys', 'Audit authorized_keys and remove stale access', 'Rotate keys on a schedule and when a device is lost'],
    cta: PROTON.pass,
  }),
  a({
    slug: 'proton-mail-review', category: 'tooling', readingMinutes: 5, date: '2026-06-17',
    title: 'Proton Mail review: encrypted email, in practice',
    dek: 'What Proton Mail actually offers - end-to-end encryption, open-source apps and a Swiss privacy base - and where its trade-offs lie.',
    hero: '/assets/articles/proton-mail-review-hero.jpg', heroAlt: 'A handwritten letter and envelope on a desk',
    body: '/assets/articles/proton-mail-review-body.jpg', bodyCaption: 'A person typing on a laptop keyboard.',
    paras: [
      'Proton Mail is an email service built around end-to-end and zero-access encryption: messages are stored encrypted in a way that, by design, Proton itself cannot read. It is based in Switzerland, operated by Proton AG, and its client applications are open source, which lets the cryptography be independently reviewed.',
      'In daily use it behaves like a normal mailbox, with web, desktop and mobile apps. Mail between Proton users is automatically end-to-end encrypted; messages to other providers can be sent password-protected when needed. A free tier exists with limited storage, and paid plans add custom domains, more storage and extra aliases.',
      'The honest trade-offs: end-to-end encryption only fully applies between Proton users or with password-protected messages, and some convenience features differ from mainstream providers because of the encryption model. For anyone who wants email that the provider cannot mine, those trade-offs are usually worth it.',
      'If you are moving away from ad-funded email, Proton Mail is one of the most credible, openly auditable options available today.',
    ],
    cta: PROTON.mail,
  }),
  a({
    slug: 'best-encrypted-email', category: 'tooling', readingMinutes: 6, date: '2026-06-17',
    title: 'The best encrypted email services',
    dek: 'What "encrypted email" really means, the difference between zero-access and end-to-end, and the services that do it credibly.',
    hero: '/assets/articles/best-encrypted-email-hero.jpg', heroAlt: 'A laptop with a glowing cyber-security padlock graphic',
    body: '/assets/articles/best-encrypted-email-body.jpg', bodyCaption: 'A laptop keyboard lit in blue, suggesting cyber security.',
    paras: [
      'Ordinary email is transmitted with transport encryption, but the provider still stores your messages in a form it can read - and often scan. "Encrypted email" usually means something stronger: zero-access encryption, where the provider cannot read your stored mail, and end-to-end encryption, where only sender and recipient can.',
      'Proton Mail is the most established option, with zero-access storage, end-to-end encryption between users, open-source apps and a Swiss legal base. Tuta (formerly Tutanota) is another open-source, end-to-end encrypted provider with its own approach to encrypting subject lines and the whole mailbox.',
      'No provider can magically encrypt a message end-to-end to someone using a normal Gmail account - that is a limitation of how email works, not of any one service. The realistic goal is to keep your own stored mail private and to get true end-to-end encryption with contacts on the same system or via password-protected messages.',
      'For most people who want a private mailbox that the provider cannot read, Proton Mail is the easiest credible starting point.',
    ],
    list: ['Zero-access: provider cannot read stored mail', 'End-to-end: only sender and recipient can read', 'Proton Mail and Tuta are the leading open-source options'],
    cta: PROTON.mail,
  }),
  a({
    slug: 'proton-pass-review', category: 'tooling', readingMinutes: 5, date: '2026-06-17',
    title: 'Proton Pass review: an open-source password manager',
    dek: 'Proton’s password manager brings end-to-end encryption, open-source apps and integrated email aliases - here is how it holds up.',
    hero: '/assets/articles/proton-pass-review-hero.jpg', heroAlt: 'A digital padlock over a privacy-policy background',
    body: '/assets/articles/proton-pass-review-body.jpg', bodyCaption: 'An abstract digital security graphic.',
    paras: [
      'Proton Pass is the password manager in the Proton suite. It stores logins, notes and card details with end-to-end encryption, and its client apps are open source, so the security model can be independently audited - the same philosophy behind Proton Mail.',
      'A distinctive feature is built-in email aliases (hide-my-email): instead of giving every site your real address, you generate a unique alias that forwards to your inbox, which limits tracking and contains the damage if a site is breached. It also includes a standard generator, autofill across browsers and devices, and two-factor support.',
      'Compared with Bitwarden it is newer and its ecosystem is still growing, but it benefits from Proton’s track record on encryption and from tight integration if you already use Proton Mail or VPN. There is a usable free tier, with paid plans unlocking unlimited aliases and extra vaults.',
      'For anyone who wants an open-source, privacy-first manager backed by an established encryption company, Proton Pass is a compelling choice.',
    ],
    cta: PROTON.pass,
  }),
  // ---------- PILIER 1 - web standards (jus, non monétisé) ----------
  a({
    slug: 'what-is-the-dom', category: 'parsing', readingMinutes: 5, date: '2026-06-17',
    title: 'What is the DOM?',
    dek: 'The Document Object Model is the tree a browser builds from your HTML - and the thing your JavaScript actually talks to.',
    hero: '/assets/articles/what-is-the-dom-hero.jpg', heroAlt: 'HTML code on a screen',
    body: '/assets/articles/what-is-the-dom-body.jpg', bodyCaption: 'Coloured source code shown on a monitor.',
    paras: [
      'The Document Object Model, or DOM, is the in-memory representation a browser creates after it parses an HTML document. Where the HTML is text, the DOM is a tree of objects - elements, attributes and text nodes - that programs can read and change.',
      'When the browser finishes parsing a page, every tag becomes a node with a parent and children, mirroring the nesting of your markup. JavaScript interacts with this tree through APIs like document.querySelector and element.appendChild; changing the DOM is what updates what the user sees, without reloading the page.',
      'It helps to separate three ideas: the HTML source you write, the DOM the browser builds from it (after applying the standard parsing and error-recovery rules), and the rendered pixels on screen. Frameworks like React work by computing changes to this same DOM efficiently.',
      'Understanding the DOM as a tree - produced by a parser, manipulated by script - is the foundation for understanding how validation, accessibility and rendering all fit together.',
    ],
    related: 'html5-parser',
  }),
  a({
    slug: 'html-validator', category: 'standards', readingMinutes: 5, date: '2026-06-17',
    title: 'What an HTML validator does (and why it matters)',
    dek: 'An HTML validator checks your markup against the living standard - catching errors that browsers hide but that hurt accessibility and reliability.',
    hero: '/assets/articles/html-validator-hero.jpg', heroAlt: 'A green check mark symbol',
    body: '/assets/articles/html-validator-body.jpg', bodyCaption: 'A check-mark icon indicating a passed check.',
    paras: [
      'An HTML validator parses your document the way a browser would and reports where it deviates from the HTML standard: unclosed tags, misused attributes, elements in places the specification does not allow. Because browsers are deliberately forgiving, these problems often go unnoticed until they cause subtle bugs.',
      'The reference tool is the Nu HTML Checker (validator.nu / validator.w3.org/nu), which grew out of the same conformance-checking work documented elsewhere on this site. It applies the real parsing algorithm and the schema rules behind the living standard.',
      'Valid markup is not pedantry. It improves accessibility for assistive technology, reduces cross-browser inconsistencies, and makes your pages more predictable for search engines and other tools that read the DOM. Fixing validator warnings is one of the cheapest quality wins available.',
      'Run the validator as part of your workflow - on commit or in CI - and treat new errors as regressions, the same way you would a failing test.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'what-is-a-parser', category: 'parsing', readingMinutes: 5, date: '2026-06-17',
    title: 'What is a parser?',
    dek: 'A parser turns a stream of characters into structured data a program can work with - the step between raw text and meaning.',
    hero: '/assets/articles/what-is-a-parser-hero.jpg', heroAlt: 'Streams of binary and program code',
    body: '/assets/articles/what-is-a-parser-body.jpg', bodyCaption: 'Abstract representation of digital data.',
    paras: [
      'A parser is the component that reads input text and builds a structured representation of it. It usually works in two stages: a tokenizer (or lexer) groups characters into meaningful units - tags, words, numbers, symbols - and a tree-construction stage arranges those tokens into a hierarchy according to a grammar.',
      'Parsers are everywhere: compilers parse source code, browsers parse HTML and CSS, and applications parse JSON, XML and configuration files. The output is typically a tree - an abstract syntax tree for code, or the DOM for a web page.',
      'What makes HTML parsing unusual is its standardised error recovery. Real-world markup is full of mistakes, so the HTML specification defines exactly how a parser must handle them, which is why every modern browser builds the same tree from the same broken input.',
      'Once you see software as a series of parsers turning text into structure, a lot of the web stack becomes easier to reason about.',
    ],
    related: 'html5-parser',
  }),
  a({
    slug: 'semantic-web', category: 'standards', readingMinutes: 6, date: '2026-06-17',
    title: 'The semantic web, explained',
    dek: 'The idea of a web of data - where meaning is machine-readable - and the standards like RDF, OWL and reasoners that make it work.',
    hero: '/assets/articles/semantic-web-hero.jpg', heroAlt: 'An abstract network of connected points',
    body: '/assets/articles/semantic-web-body.jpg', bodyCaption: 'An abstract pattern of connected nodes and lines.',
    paras: [
      'The semantic web is an extension of the web in which information is given well-defined meaning, so that machines - not just people - can process it. Instead of pages of text, the goal is a web of data, where relationships between things are explicit and queryable.',
      'It rests on a stack of W3C standards. RDF expresses facts as subject-predicate-object triples; ontologies written in OWL (the Web Ontology Language) describe the classes and relationships in a domain; and SPARQL queries the resulting graphs.',
      'Reasoners are the engines that make this powerful. A reasoner such as Pellet takes an OWL ontology and infers new facts that follow logically from the stated ones - checking consistency and answering questions the raw data never spelled out.',
      'You meet the semantic web’s descendants every day: structured data and schema.org markup that power rich search results are a pragmatic slice of the same idea - making the meaning of a page legible to machines.',
    ],
    related: 'pellet',
  }),
  a({
    slug: 'xml-vs-html', category: 'standards', readingMinutes: 5, date: '2026-06-17',
    title: 'XML vs HTML: what is the difference?',
    dek: 'They look alike, but XML and HTML were built for different jobs - one describes documents for browsers, the other carries structured data.',
    hero: '/assets/articles/xml-vs-html-hero.jpg', heroAlt: 'Markup code in an editor',
    body: '/assets/articles/xml-vs-html-body.jpg', bodyCaption: 'HTML and CSS code shown in a code editor.',
    paras: [
      'HTML and XML share ancestry in SGML and use the same angle-bracket syntax, which is why they look similar. But they were designed for different purposes. HTML has a fixed vocabulary of elements with built-in meaning for browsers, and it is deliberately forgiving of errors.',
      'XML, by contrast, defines no tags of its own - it is a meta-language for creating your own markup to carry structured data. It is strict: a document that is not well-formed (every tag closed, properly nested) is rejected outright, which makes it reliable for machine-to-machine exchange.',
      'There is also XHTML, which is HTML expressed under XML’s strict rules. In modern web development HTML5 is the standard for pages, while XML and formats derived from it remain common for configuration, data feeds and document storage.',
      'A useful rule of thumb: reach for HTML when you are describing a document for people to read in a browser, and for XML-family formats when you are exchanging structured data between systems.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'ruby-on-rails-cms', category: 'archive', readingMinutes: 5, date: '2026-06-17',
    title: 'Ruby on Rails content-management systems',
    dek: 'Rails is better known for apps than for CMSes, but a lineage of Rails-based content systems - from Railfrog onward - has always existed.',
    hero: '/assets/articles/ruby-on-rails-cms-hero.jpg', heroAlt: 'A developer working at a desk with a computer',
    body: '/assets/articles/ruby-on-rails-cms-body.jpg', bodyCaption: 'Program code on a screen.',
    paras: [
      'Ruby on Rails made web application development famous for its conventions and speed, and over the years developers have built content-management systems on top of it. These aim to combine editorial features - pages, media, workflow - with the flexibility of a full Rails app underneath.',
      'Railfrog was one of the early entrants, a Rails-based CMS historically distributed as a plugin. Like many projects of its era it is no longer actively developed, but it is part of the story of how the Rails community approached content management.',
      'Later and currently maintained options include projects such as Comfortable Mexican Sofa and Spina, which integrate as engines into an existing Rails application rather than running as a separate platform. That "CMS as a library" model fits teams that already build in Rails.',
      'If you are choosing today, weigh how much you need a turnkey editorial interface versus the freedom to treat content as just another part of your Rails codebase.',
    ],
    related: 'railfrog',
    cta: DEV_CLOUD,
  }),
  a({
    slug: 'character-encoding-utf-8', category: 'standards', readingMinutes: 5, date: '2026-06-17',
    title: 'Character encoding and why UTF-8 won',
    dek: 'Mojibake, broken accents and "" symbols all come down to encoding. Here is what UTF-8 is and why it is the default of the modern web.',
    hero: '/assets/articles/character-encoding-utf-8-hero.jpg', heroAlt: 'Printed letters and text characters',
    body: '/assets/articles/character-encoding-utf-8-body.jpg', bodyCaption: 'An arrangement of letter tiles.',
    paras: [
      'Computers store text as numbers, and a character encoding is the agreement about which number means which character. When a document is written with one encoding and read with another, you get mojibake - the garbled accents and question-mark boxes everyone has seen.',
      'Early encodings like ASCII covered only English; a patchwork of incompatible 8-bit encodings followed for other languages. Unicode solved the underlying problem by giving every character in every script a unique code point. UTF-8 is the encoding that maps those code points to bytes.',
      'UTF-8 won because it is backward-compatible with ASCII, space-efficient for common text, and able to represent every Unicode character. It is now the overwhelming default on the web, and the HTML standard recommends declaring it explicitly with a <meta charset="utf-8"> at the top of every document.',
      'The practical advice is simple: save your files as UTF-8, serve them as UTF-8, and declare UTF-8 - get those three to agree and encoding problems disappear.',
    ],
    related: 'validator-nu',
  }),
  a({
    slug: 'self-hosted-cms', category: 'tooling', readingMinutes: 5, date: '2026-06-17',
    title: 'Self-hosted CMS options worth knowing',
    dek: 'Owning your content platform means control over data, customisation and cost - here is how the main self-hosted approaches compare.',
    hero: '/assets/articles/self-hosted-cms-hero.jpg', heroAlt: 'Cloud and server infrastructure concept',
    body: '/assets/articles/self-hosted-cms-body.jpg', bodyCaption: 'Servers representing cloud infrastructure.',
    paras: [
      'A self-hosted content-management system runs on infrastructure you control, rather than a hosted SaaS. The appeal is ownership: your content and data stay with you, you can customise freely, and you avoid per-seat subscription costs - at the price of handling hosting, updates and backups yourself.',
      'The traditional choice is WordPress, which still powers a large share of the web and has an enormous plugin ecosystem. For developers who want a clean separation between content and front end, headless options like Strapi, Directus and Ghost expose content over an API you consume from any framework.',
      'There is also a long history of framework-native systems - Rails-based content managers, for example - for teams that would rather treat content as part of their own application than adopt a separate platform.',
      'Whichever you pick, budget for the operational basics: automated backups, timely security updates, and a plan for scaling. Self-hosting rewards control with responsibility.',
    ],
    related: 'railfrog',
    cta: DEV_CLOUD,
  }),
];

const CATS = {
  standards: 'Standards', parsing: 'Parsing', tooling: 'Tooling', archive: 'Archive',
};

const TR = { fr: FR, es: ES, de: DE, it: IT, pt: PT };

// Slugs localisés par langue (EN = id canonique). FR/ES ont leurs propres slugs.
const ART_SLUG = {
  "what-is-a-changelog": { fr: "qu-est-ce-qu-un-changelog", es: "que-es-un-changelog", de: "was-ist-ein-changelog", it: "che-cos-e-un-changelog", pt: "o-que-e-um-changelog" },
  "what-is-a-lockfile": { fr: "qu-est-ce-qu-un-lockfile", es: "que-es-un-lockfile", de: "was-ist-eine-lockfile", it: "cos-e-un-lockfile", pt: "o-que-e-um-lockfile" },
  "what-is-semantic-versioning": { fr: "qu-est-ce-que-le-versionnage-semantique", es: "que-es-el-versionado-semantico", de: "was-ist-semantische-versionierung", it: "cos-e-il-versionamento-semantico", pt: "o-que-e-o-versionamento-semantico" },
  "ghostapproval-ai-coding-assistants-symlink-2026": { fr: "ghostapproval-symlink-assistants-code-ia-2026", es: "ghostapproval-symlink-asistentes-codigo-ia-2026", de: "ghostapproval-symlink-ki-coding-assistenten-2026", it: "ghostapproval-symlink-assistenti-codice-ia-2026", pt: "ghostapproval-symlink-assistentes-codigo-ia-2026" },
  "novo-nordisk-breach-client-side-secrets-2026": { fr: "fuite-novo-nordisk-secrets-javascript-client-2026", es: "brecha-novo-nordisk-secretos-javascript-cliente-2026", de: "novo-nordisk-leck-geheimnisse-client-javascript-2026", it: "violazione-novo-nordisk-segreti-javascript-client-2026", pt: "violacao-novo-nordisk-segredos-javascript-cliente-2026" },
  "microsoft-entra-passkeys-default-2026": { fr: "microsoft-entra-passkeys-par-defaut-2026", es: "microsoft-entra-passkeys-por-defecto-2026", de: "microsoft-entra-passkeys-standard-2026", it: "microsoft-entra-passkey-predefinite-2026", pt: "microsoft-entra-passkeys-por-defeito-2026" },
  "what-is-an-api": { fr: "qu-est-ce-qu-une-api", es: "que-es-una-api", de: "was-ist-eine-api", it: "che-cos-e-un-api", pt: "o-que-e-uma-api" },
  "opera-paste-protect-clickfix-clipboard-2026": { fr: "opera-paste-protect-attaques-presse-papiers-2026", es: "opera-paste-protect-ataques-portapapeles-2026", de: "opera-paste-protect-zwischenablage-angriffe-2026", it: "opera-paste-protect-attacchi-appunti-2026", pt: "opera-paste-protect-ataques-area-transferencia-2026" },
  "what-is-a-webhook": { fr: "qu-est-ce-qu-un-webhook", es: "que-es-un-webhook", de: "was-ist-ein-webhook", it: "che-cos-e-un-webhook", pt: "o-que-e-um-webhook" },
  "what-is-a-docker-container": { fr: "qu-est-ce-qu-un-conteneur-docker", es: "que-es-un-contenedor-docker", de: "was-ist-ein-docker-container", it: "che-cos-e-un-container-docker", pt: "o-que-e-um-container-docker" },
  "what-is-devops": { fr: "qu-est-ce-que-le-devops", es: "que-es-el-devops", de: "was-ist-devops", it: "cos-e-il-devops", pt: "o-que-e-o-devops" },
  "what-is-a-cdn": { fr: "qu-est-ce-qu-un-cdn", es: "que-es-una-cdn", de: "was-ist-ein-cdn", it: "che-cos-e-una-cdn", pt: "o-que-e-uma-cdn" },
  "what-is-ci-cd": { fr: "qu-est-ce-que-le-ci-cd", es: "que-es-ci-cd", de: "was-ist-ci-cd", it: "che-cos-e-ci-cd", pt: "o-que-e-ci-cd" },
  "what-is-a-vps": { fr: "qu-est-ce-qu-un-vps", es: "que-es-un-vps", de: "was-ist-ein-vps", it: "che-cos-e-un-vps", pt: "o-que-e-um-vps" },
  "what-is-a-reverse-proxy": { fr: "qu-est-ce-qu-un-proxy-inverse", es: "que-es-un-proxy-inverso", de: "was-ist-ein-reverse-proxy", it: "che-cos-e-un-reverse-proxy", pt: "o-que-e-um-proxy-reverso" },
  "what-is-git": { fr: "qu-est-ce-que-git", es: "que-es-git", de: "was-ist-git", it: "che-cos-e-git", pt: "o-que-e-o-git" },
  "open-source-password-managers": { fr: "meilleurs-gestionnaires-mots-de-passe-open-source", es: "mejores-gestores-de-contrasenas-de-codigo-abierto", de: "beste-open-source-passwortmanager", it: "migliori-gestori-password-open-source", pt: "melhores-gestores-de-palavras-passe-open-source" },
  "self-hosted-password-managers": { fr: "gestionnaires-de-mots-de-passe-auto-heberges", es: "gestores-de-contrasenas-autoalojados", de: "selbstgehostete-passwortmanager", it: "gestori-password-self-hosted", pt: "gestores-de-palavras-passe-auto-hospedados" },
  "secrets-management-tools": { fr: "outils-de-gestion-des-secrets", es: "herramientas-de-gestion-de-secretos", de: "secrets-management-werkzeuge", it: "strumenti-gestione-segreti", pt: "ferramentas-de-gestao-de-segredos" },
  "ssh-key-management": { fr: "gestion-des-cles-ssh", es: "gestion-de-claves-ssh", de: "ssh-schluessel-verwaltung", it: "gestione-delle-chiavi-ssh", pt: "gestao-de-chaves-ssh" },
  "proton-mail-review": { fr: "test-proton-mail", es: "analisis-proton-mail", de: "proton-mail-test", it: "recensione-proton-mail", pt: "analise-proton-mail" },
  "best-encrypted-email": { fr: "meilleurs-services-email-chiffre", es: "mejores-servicios-de-correo-cifrado", de: "beste-verschluesselte-email-dienste", it: "migliori-servizi-email-cifrata", pt: "melhores-servicos-de-email-cifrado" },
  "proton-pass-review": { fr: "test-proton-pass", es: "analisis-proton-pass", de: "proton-pass-test", it: "recensione-proton-pass", pt: "analise-proton-pass" },
  "what-is-the-dom": { fr: "qu-est-ce-que-le-dom", es: "que-es-el-dom", de: "was-ist-das-dom", it: "che-cos-e-il-dom", pt: "o-que-e-o-dom" },
  "html-validator": { fr: "validateur-html", es: "validador-html", de: "html-validator", it: "validatore-html", pt: "validador-html" },
  "what-is-a-git-tag": { fr: "qu-est-ce-qu-un-tag-git", es: "que-es-una-etiqueta-git", de: "was-ist-ein-git-tag", it: "che-cos-e-un-tag-git", pt: "o-que-e-uma-tag-git" },
  "what-is-a-parser": { fr: "qu-est-ce-qu-un-parseur", es: "que-es-un-analizador", de: "was-ist-ein-parser", it: "che-cos-e-un-parser", pt: "o-que-e-um-analisador" },
  "semantic-web": { fr: "web-semantique", es: "web-semantica", de: "semantisches-web", it: "web-semantico", pt: "web-semantica" },
  "xml-vs-html": { fr: "xml-contre-html", es: "xml-frente-a-html", de: "xml-vs-html", it: "xml-contro-html", pt: "xml-vs-html" },
  "ruby-on-rails-cms": { fr: "cms-ruby-on-rails", es: "cms-ruby-on-rails-es", de: "ruby-on-rails-cms", it: "cms-ruby-on-rails", pt: "cms-ruby-on-rails" },
  "character-encoding-utf-8": { fr: "encodage-des-caracteres-utf-8", es: "codificacion-de-caracteres-utf-8", de: "zeichenkodierung-utf-8", it: "codifica-dei-caratteri-utf-8", pt: "codificacao-de-caracteres-utf-8" },
  "self-hosted-cms": { fr: "cms-auto-heberges", es: "cms-autoalojados", de: "selbstgehostete-cms", it: "cms-self-hosted", pt: "cms-auto-hospedados" },
  "typescript-7-go-compiler-2026": { fr: "typescript-7-compilateur-go", es: "typescript-7-compilador-go", de: "typescript-7-go-compiler", it: "typescript-7-compilatore-go", pt: "typescript-7-compilador-em-go" },
};
export function slugFor(enSlug, locale) {
  return locale === "en" ? enSlug : (ART_SLUG[enSlug] && ART_SLUG[enSlug][locale]) || enSlug;
}
export function enSlugOf(locSlug, locale) {
  if (locale === "en") return locSlug;
  for (const en in ART_SLUG) if (ART_SLUG[en][locale] === locSlug) return en;
  return locSlug;
}
// href complet localisé pour un article (slug localisé + préfixe locale)
export function articleHref(enSlug, locale) {
  const p = locale === "en" ? "" : `/${locale}`;
  return `${p}/articles/${slugFor(enSlug, locale)}`;
}
export function localizedArticleSlugs(locale) {
  return ARTICLES.map((a) => slugFor(a.slug, locale));
}
// Corps EN étoffé (8-12 paragraphes) appliqué d'abord, puis traduction par locale.
function applyEN(a) {
  const o = ENX[a.slug];
  return o ? { ...a, paras: o.paras || a.paras, list: o.list || a.list } : a;
}
function localize(a, locale) {
  const o = (TR[locale] || {})[a.slug];
  if (!o) return a;
  return { ...a, title: o.title || a.title, dek: o.dek || a.dek, paras: o.paras || a.paras,
    list: o.list || a.list, heroAlt: o.heroAlt || a.heroAlt, bodyCaption: o.bodyCaption || a.bodyCaption,
    faq: o.faq || a.faq };
}
export function getArticles(locale = "en") {
  // GARDE-FOU anti-mélange de langues : sur une locale non-EN, on EXCLUT les articles
  // non traduits (pas de title dans TR[locale]) - un article EN-only ne doit jamais
  // apparaître (titre anglais) sur une page FR/ES/DE/IT/PT. Eric 2026-06-23.
  const base = locale === "en"
    ? ARTICLES
    : ARTICLES.filter((a) => (TR[locale] || {})[a.slug] && (TR[locale])[a.slug].title);
  return base.map((a) => (locale === "en" ? applyEN(a) : localize(applyEN(a), locale)));
}
export function findArticleBySlug(slug, locale = "en") {
  const en = enSlugOf(slug, locale); // accepte le slug localisé OU le slug EN
  const a = ARTICLES.find((x) => x.slug === en);
  if (!a) return undefined;
  return locale === "en" ? applyEN(a) : localize(applyEN(a), locale);
}
const CAT_I18N = {
  en: CATS,
  fr: { standards: "Standards", parsing: "Analyse", tooling: "Outils", archive: "Archive" },
  es: { standards: "Estándares", parsing: "Análisis", tooling: "Herramientas", archive: "Archivo" },
  de: { standards: "Standards", parsing: "Parsing", tooling: "Werkzeuge", archive: "Archiv" },
  it: { standards: "Standard", parsing: "Parsing", tooling: "Strumenti", archive: "Archivio" },
  pt: { standards: "Padrões", parsing: "Análise", tooling: "Ferramentas", archive: "Arquivo" },
};
export function categoryLabel(key, locale = "en") { return (CAT_I18N[locale] || CATS)[key] || key; }
export const ARTICLE_SLUGS = ARTICLES.map((x) => x.slug);
