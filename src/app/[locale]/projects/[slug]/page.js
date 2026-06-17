import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent, findProject } from '@/data/content';
import { localeHref, mediaFor, LOCALES } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams({ params: { locale } }) {
  return getContent(locale).projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params: { locale, slug } }) {
  const p = findProject(locale, slug);
  if (!p) return {};
  const langs = {};
  for (const l of LOCALES) langs[l] = localeHref(l, `/projects/${slug}`);
  langs['x-default'] = langs.en;
  return { title: p.name, description: p.excerpt, alternates: { canonical: localeHref(locale, `/projects/${slug}`), languages: langs } };
}

export default async function ProjectDetail({ params: { locale, slug } }) {
  setRequestLocale(locale);
  const p = findProject(locale, slug);
  if (!p) notFound();
  const t = await getTranslations({ locale });
  const { articles } = getContent(locale);
  const ref = articles[0];
  const media = mediaFor(slug, locale);

  return (
    <article className="container py-4 py-lg-5">
      <div className="mx-auto" style={{ maxWidth: '820px' }}>
        <nav className="mb-3" style={{ fontSize: '.85rem', opacity: 0.7 }}>
          <Link href={localeHref(locale, '/')} className="text-reset text-decoration-none">{t('site.name')}</Link>
          <span className="mx-2">/</span>
          <Link href={localeHref(locale, '/projects')} className="text-reset text-decoration-none">{t('nav.projects')}</Link>
        </nav>
        <span className={`d-inline-block post-category vd-cat vd-cat--${p.category}`} style={{ position: 'static' }}>{t(`categories.${p.category}`)}</span>
        <h1 className="fw-bold mt-3" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '2.6rem', lineHeight: 1.12 }}>{p.name}</h1>

        <img src={media.img} alt={media.alt} className="img-fluid w-100 rounded mt-4 mb-2" style={{ aspectRatio: '16/8', objectFit: 'cover' }} />
        <figcaption className="mb-4" style={{ fontSize: '.82rem', opacity: 0.6 }}>{media.alt}</figcaption>

        <div className="vd-prose">
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className="row g-3 my-4">
          <div className="col-sm-6">
            <div className="vd-widget p-3 h-100">
              <div className="text-uppercase fw-bold mb-1" style={{ fontSize: '.72rem', letterSpacing: '.08em', opacity: 0.6 }}>{t('project.status')}</div>
              <div className="fw-semibold">{p.status}</div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="vd-widget p-3 h-100">
              <div className="text-uppercase fw-bold mb-1" style={{ fontSize: '.72rem', letterSpacing: '.08em', opacity: 0.6 }}>{t('project.legacyPath')}</div>
              <code style={{ wordBreak: 'break-all' }}>{p.legacy}</code>
            </div>
          </div>
          <div className="col-12">
            <div className="vd-widget p-3">
              <div className="text-uppercase fw-bold mb-2" style={{ fontSize: '.72rem', letterSpacing: '.08em', opacity: 0.6 }}>{t('project.currentHome')}</div>
              <div className="d-flex flex-wrap gap-2">
                {p.currentHome.map((h) => (
                  <a key={h.url} href={h.url} target="_blank" rel="noopener" className="btn btn-sm vd-btn">{h.label} ↗</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="p-3 rounded" style={{ background: 'rgba(128,128,128,.1)', fontSize: '.9rem' }}>{t('project.disclaimer')}</p>

        <div className="vd-widget p-3 d-flex justify-content-between align-items-center mt-4">
          <div>
            <div className="text-uppercase fw-bold" style={{ fontSize: '.72rem', letterSpacing: '.08em', opacity: 0.6 }}>{t('project.relatedReference')}</div>
            <Link href={localeHref(locale, '/reference')} className="fw-semibold text-reset text-decoration-none vd-hover" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '1.1rem' }}>{ref.title}</Link>
          </div>
          <Link href={localeHref(locale, '/reference')} className="text-decoration-none" style={{ color: 'var(--vd-brand)', fontSize: '1.3rem' }}>→</Link>
        </div>

        <p className="mt-4"><Link href={localeHref(locale, '/projects')} className="text-reset text-decoration-none" style={{ opacity: 0.7 }}>← {t('project.backToProjects')}</Link></p>
      </div>
    </article>
  );
}
