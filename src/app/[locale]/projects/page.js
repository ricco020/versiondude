import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent } from '@/data/content';
import { localeHref, mediaFor, LOCALES } from '@/lib/site';

export const dynamic = 'force-static';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  const langs = {};
  for (const l of LOCALES) langs[l] = localeHref(l, '/projects');
  langs['x-default'] = langs.en;
  return { title: t('nav.projects'), description: t('site.description'), alternates: { canonical: localeHref(locale, '/projects'), languages: langs } };
}

export default async function ProjectsIndex({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { projects } = getContent(locale);
  const cat = (k) => t(`categories.${k}`);

  return (
    <div className="container py-4 py-lg-5">
      <div className="vd-section-head d-flex align-items-center gap-3 mb-2">
        <span className="vd-tick" />
        <h1 className="h3 fw-bold m-0 text-uppercase" style={{ letterSpacing: '.03em' }}>{t('home.latest')}</h1>
      </div>
      <p className="mb-4" style={{ maxWidth: '46rem', opacity: 0.75 }}>{t('site.description')}</p>
      <div className="row g-4">
        {projects.map((p) => {
          const media = mediaFor(p.slug, locale);
          return (
            <div className="col-md-6 col-lg-4" key={p.slug}>
              <div className="vd-card h-100">
                <Link href={localeHref(locale, `/projects/${p.slug}`)} className="news-image d-block position-relative">
                  <img src={media.img} alt={media.alt} className="img-fluid w-100" loading="lazy" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
                  <span className={`post-category vd-cat vd-cat--${p.category}`}>{cat(p.category)}</span>
                </Link>
                <div className="post-text pt-3">
                  <h3 className="h5 fw-bold" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    <Link href={localeHref(locale, `/projects/${p.slug}`)} className="text-reset text-decoration-none vd-hover">{p.name}</Link>
                  </h3>
                  <p className="mt-2 mb-0" style={{ opacity: 0.75, fontSize: '.92rem' }}>{p.excerpt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
