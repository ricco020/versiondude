import type { MetadataRoute } from 'next';
import { CONTENT, type Locale } from '@/data/content';
import { SITE_URL, localeHref, LOCALES } from '@/lib/site';

const abs = (locale: string, path: string) => `${SITE_URL}${localeHref(locale, path)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // Each route maps a locale to its (possibly localized) path.
  const routes: ((l: Locale) => string)[] = [
    () => '/',
    () => '/projects',
    ...CONTENT.en.projects.map((p) => () => `/projects/${p.slug}`),
    (l: Locale) => `/${CONTENT[l].articles[0].slug}`,
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const route of routes) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = abs(l, route(l as Locale));
    languages['x-default'] = languages.en;
    for (const l of LOCALES) {
      entries.push({
        url: abs(l, route(l as Locale)),
        changeFrequency: 'monthly',
        priority: route === routes[0] ? 1 : 0.7,
        alternates: { languages },
      });
    }
  }
  return entries;
}
