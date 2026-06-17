import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { localeHref, LOCALES } from '@/lib/site';

export const dynamic = 'force-static';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  const langs = {};
  for (const l of LOCALES) langs[l] = localeHref(l, '/about');
  langs['x-default'] = langs.en;
  return { title: t('nav.about'), description: t('site.description'), alternates: { canonical: localeHref(locale, '/about'), languages: langs } };
}

export default async function AboutPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  return (
    <div className="container py-4 py-lg-5">
      <div className="mx-auto" style={{ maxWidth: '760px' }}>
        <span className="d-inline-block post-category vd-cat vd-cat--archive" style={{ position: 'static' }}>{t('nav.about')}</span>
        <h1 className="fw-bold mt-3" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2.6rem' }}>{t('site.name')}</h1>
        <p className="mt-3" style={{ fontSize: '1.2rem', opacity: 0.8 }}>{t('site.tagline')}</p>
        <div className="vd-prose mt-4">
          <p>{t('site.description')}</p>
          <p>{t('footer.about')}</p>
          <p>{t('footer.noAffiliation')}</p>
        </div>
        <div className="mt-4 d-flex flex-wrap gap-2">
          <Link href={localeHref(locale, '/projects')} className="btn vd-btn px-4 py-2 fw-semibold">{t('nav.projects')}</Link>
          <Link href={localeHref(locale, '/reference')} className="btn btn-outline-secondary px-4 py-2 fw-semibold">{t('nav.reference')}</Link>
        </div>
      </div>
    </div>
  );
}
