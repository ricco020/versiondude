import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent } from '@/data/content';
import { ARTICLE_BODIES } from '@/content/articles';
import { localeHref, mediaFor, LOCALES } from '@/lib/site';

export const dynamic = 'force-static';

export async function generateMetadata({ params: { locale } }) {
  const { articles } = getContent(locale);
  const a = articles[0];
  const langs = {};
  for (const l of LOCALES) langs[l] = localeHref(l, '/reference');
  langs['x-default'] = langs.en;
  return { title: a.title, description: a.dek, alternates: { canonical: localeHref(locale, '/reference'), languages: langs } };
}

export default async function ReferencePage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { articles, projects } = getContent(locale);
  const a = articles[0];
  const Body = ARTICLE_BODIES[a.slug];
  const media = mediaFor(a.slug, locale);
  const related = projects.filter((p) => p.category === a.category);

  return (
    <article className="container py-4 py-lg-5">
      <div className="mx-auto" style={{ maxWidth: '820px' }}>
        <nav className="mb-3" style={{ fontSize: '.85rem', opacity: 0.7 }}>
          <Link href={localeHref(locale, '/')} className="text-reset text-decoration-none">{t('site.name')}</Link>
          <span className="mx-2">/</span>{t('nav.reference')}
        </nav>
        <span className={`d-inline-block post-category vd-cat vd-cat--${a.category}`} style={{ position: 'static' }}>{t(`categories.${a.category}`)}</span>
        <h1 className="fw-bold mt-3" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2.8rem', lineHeight: 1.1 }}>{a.title}</h1>
        <p className="mt-3" style={{ fontSize: '1.2rem', opacity: 0.8 }}>{a.dek}</p>
        <p className="border-top border-bottom py-2 my-4" style={{ fontSize: '.85rem', opacity: 0.65 }}>
          {t('article.updated')} · {a.readingMinutes} {t('article.minRead')}
        </p>
        <img src={media.img} alt={media.alt} className="img-fluid w-100 rounded mb-2" style={{ aspectRatio: '16/8', objectFit: 'cover' }} />
        <figcaption className="mb-4" style={{ fontSize: '.82rem', opacity: 0.6 }}>{media.alt}</figcaption>

        <div className="vd-prose">{Body ? <Body /> : null}</div>

        <p className="mt-4 p-3 rounded" style={{ background: 'rgba(128,128,128,.1)', fontSize: '.9rem' }}>{t('article.disclaimerShort')}</p>

        {related.length > 0 && (
          <section className="mt-5">
            <h2 className="h5 fw-bold mb-3">{t('article.related')}</h2>
            <div className="row g-3">
              {related.map((p) => (
                <div className="col-sm-6" key={p.slug}>
                  <Link href={localeHref(locale, `/projects/${p.slug}`)} className="d-flex justify-content-between align-items-center p-3 rounded text-reset text-decoration-none vd-widget">
                    <span className="fw-semibold">{p.name}</span><span style={{ color: 'var(--vd-brand)' }}>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
