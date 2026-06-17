import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent, findArticle, CONTENT, type Locale } from '@/data/content';
import { ARTICLE_BODIES } from '@/content/articles';
import { localeHref, CATEGORY_CLASS, LOCALES } from '@/lib/site';

export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  return getContent(params.locale).articles.map((a) => ({ slug: a.slug }));
}

function articleAlternates() {
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[l] = localeHref(l, `/${CONTENT[l as Locale].articles[0].slug}`);
  langs['x-default'] = langs.en;
  return langs;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = findArticle(locale, slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: localeHref(locale, `/${slug}`), languages: articleAlternates() },
    openGraph: { type: 'article', title: article.title, description: article.dek },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = findArticle(locale, slug);
  const Body = ARTICLE_BODIES[slug];
  if (!article || !Body) notFound();

  const t = await getTranslations({ locale });
  const { projects } = getContent(locale);
  const related = projects.filter((p) => p.category === article.category);

  return (
    <article className="mx-auto max-w-3xl px-5 py-10">
      <nav className="mb-6 text-sm text-muted">
        <a href={localeHref(locale, '/')} className="hover:text-brand">{t('site.name')}</a>
        <span className="mx-2">/</span>
        <span>{t('nav.reference')}</span>
      </nav>

      <span className={`cat-pill ${CATEGORY_CLASS[article.category]}`}>{t(`categories.${article.category}`)}</span>
      <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">{article.title}</h1>
      <p className="mt-4 text-lg text-muted">{article.dek}</p>
      <p className="mt-4 border-y border-line py-3 text-sm text-muted">
        {t('article.updated')} · {article.readingMinutes} {t('article.minRead')}
      </p>

      <div className="prose mt-8">
        <Body />
      </div>

      <p className="mt-10 rounded-xl border border-line bg-card p-4 text-sm text-muted">{t('article.disclaimerShort')}</p>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 font-display text-lg font-bold">{t('article.related')}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((p) => (
              <li key={p.slug}>
                <a href={localeHref(locale, `/projects/${p.slug}`)} className="flex items-center justify-between rounded-xl border border-line bg-card p-4 hover:border-brand">
                  <span className="font-display text-sm font-semibold">{p.name}</span>
                  <span className="text-brand">→</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
