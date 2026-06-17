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
