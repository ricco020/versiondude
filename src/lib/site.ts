import type { CategoryKey } from '@/data/content';

export const SITE_URL = 'https://versiondude.net';
export const GA_ID = 'G-EGDNJHLQ0J';
export const LOCALES = ['en', 'fr', 'es'] as const;

export const CATEGORY_CLASS: Record<CategoryKey, string> = {
  standards: 'cat-standards',
  parsing: 'cat-parsing',
  tooling: 'cat-tooling',
  archive: 'cat-archive',
};

/** Two-letter monogram used in the generated card artwork. */
export function glyphFor(name: string): string {
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, ' ').trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return cleaned.slice(0, 2).toUpperCase();
}

/** Locale-aware href: EN has no prefix (as-needed), fr/es prefixed. */
export function localeHref(locale: string, path: string): string {
  const clean = path === '/' ? '' : path;
  return locale === 'en' ? clean || '/' : `/${locale}${clean}`;
}

/**
 * Real thematic photos (downloaded to /public/assets/vd, served locally → HTTP 200, no hotlink).
 * Captions honestly describe what each photo shows (per the unique-living-images rule).
 * Keyed by project slug (shared across locales) and by each locale's article slug.
 */
type Alt = { en: string; fr: string; es: string };
export const MEDIA: Record<string, { img: string; alt: Alt }> = {
  // article (one entry per localized slug, same photo)
  'how-html-parsing-works': { img: '/assets/vd/code-parsing.jpg', alt: { en: 'HTML source code displayed on a screen', fr: 'Code source HTML affiché à l’écran', es: 'Código fuente HTML en una pantalla' } },
  'comment-fonctionne-analyse-html': { img: '/assets/vd/code-parsing.jpg', alt: { en: 'HTML source code displayed on a screen', fr: 'Code source HTML affiché à l’écran', es: 'Código fuente HTML en una pantalla' } },
  'como-funciona-el-analisis-html': { img: '/assets/vd/code-parsing.jpg', alt: { en: 'HTML source code displayed on a screen', fr: 'Code source HTML affiché à l’écran', es: 'Código fuente HTML en una pantalla' } },
  // projects
  'html5-parser': { img: '/assets/vd/reasoner.jpg', alt: { en: 'Lines of source code on a dark screen', fr: 'Lignes de code source sur un écran sombre', es: 'Líneas de código fuente en una pantalla oscura' } },
  'validator-nu': { img: '/assets/vd/web-standards.jpg', alt: { en: 'A developer workspace with code on screen', fr: 'Un poste de développeur avec du code à l’écran', es: 'Un espacio de desarrollo con código en pantalla' } },
  'railfrog': { img: '/assets/vd/rails-cms.jpg', alt: { en: 'Programming on a laptop', fr: 'Programmation sur un ordinateur portable', es: 'Programación en un portátil' } },
  'pellet': { img: '/assets/vd/server.jpg', alt: { en: 'Server racks in a data centre', fr: 'Baies de serveurs dans un centre de données', es: 'Racks de servidores en un centro de datos' } },
  'bersirc': { img: '/assets/vd/irc-client.jpg', alt: { en: 'A retro terminal screen', fr: 'Un écran de terminal rétro', es: 'Una pantalla de terminal retro' } },
};

export function mediaFor(slug: string, locale: string): { img: string; alt: string } {
  const m = MEDIA[slug];
  if (!m) return { img: '/assets/vd/code-parsing.jpg', alt: '' };
  return { img: m.img, alt: (m.alt as any)[locale] ?? m.alt.en };
}
