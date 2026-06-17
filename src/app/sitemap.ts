import type { MetadataRoute } from 'next';
import { CONTENT } from '@/data/content';
import { SITE_URL, localeHref, LOCALES } from '@/lib/site';

const abs = (locale: string, path: string) => `${SITE_URL}${localeHref(locale, path)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/reference', '/projects', '/about', ...CONTENT.en.projects.map((p) => `/projects/${p.slug}`)];
  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = abs(l, path);
    languages['x-default'] = languages.en;
    for (const l of LOCALES) {
      entries.push({ url: abs(l, path), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7, alternates: { languages } });
    }
  }
  return entries;
}
