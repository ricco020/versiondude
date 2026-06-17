import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent } from '@/data/content';
import { localeHref, LOCALES } from '@/lib/site';
import PostCard from '@/components/PostCard';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[l] = localeHref(l, '/projects');
  langs['x-default'] = langs.en;
  return {
    title: t('nav.projects'),
    description: t('site.description'),
    alternates: { canonical: localeHref(locale, '/projects'), languages: langs },
  };
}

export default async function ProjectsIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { projects } = getContent(locale);

  return (
    <div className="mx-auto max-w-screen px-5 py-10">
      <h1 className="flex items-center gap-3 font-display text-3xl font-bold tracking-tight">
        <span className="h-7 w-1.5 rounded bg-brand" />
        {t('home.latest')}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{t('site.description')}</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <PostCard
            key={p.slug}
            locale={locale}
            href={localeHref(locale, `/projects/${p.slug}`)}
            title={p.name}
            excerpt={p.excerpt}
            category={p.category}
            meta={p.status}
            variant="grid"
          />
        ))}
      </div>
    </div>
  );
}
