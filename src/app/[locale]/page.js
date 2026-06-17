import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent } from '@/data/content';
import { localeHref, mediaFor } from '@/lib/site';

export const dynamic = 'force-static';

function Card({ href, title, excerpt, category, catLabel, media, big }) {
  return (
    <div className={`vd-card h-100 ${big ? 'vd-card--lead' : ''}`}>
      <Link href={href} className="news-image d-block position-relative">
        <img src={media.img} alt={media.alt} className="img-fluid w-100" loading="lazy"
          style={{ aspectRatio: big ? '16/10' : '16/9', objectFit: 'cover' }} />
        <span className={`post-category vd-cat vd-cat--${category}`}>{catLabel}</span>
      </Link>
      <div className="post-text pt-3">
        <h3 className={big ? 'h2 fw-bold' : 'h5 fw-bold'} style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
          <Link href={href} className="text-reset text-decoration-none vd-hover">{title}</Link>
        </h3>
        {excerpt && <p className="mt-2 mb-0" style={{ opacity: 0.75, fontSize: big ? '1.02rem' : '.92rem' }}>{excerpt}</p>}
      </div>
    </div>
  );
}

export default async function Home({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { projects, articles } = getContent(locale);
  const ref = articles[0];
  const refHref = localeHref(locale, '/reference');
  const refMedia = mediaFor(ref.slug, locale);
  const cat = (k) => t(`categories.${k}`);

  return (
    <div className="container py-4 py-lg-5">
      {/* HERO */}
      <section className="row g-4 mb-5">
        <div className="col-lg-8">
          <Card href={refHref} title={ref.title} excerpt={ref.dek}
            category={ref.category} catLabel={cat(ref.category)} media={refMedia} big />
        </div>
        <div className="col-lg-4">
          <div className="row g-4">
            {projects.slice(0, 2).map((p) => (
              <div className="col-12 col-sm-6 col-lg-12" key={p.slug}>
                <Card href={localeHref(locale, `/projects/${p.slug}`)} title={p.name}
                  excerpt={p.excerpt} category={p.category} catLabel={cat(p.category)} media={mediaFor(p.slug, locale)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION HEADING */}
      <div className="vd-section-head d-flex align-items-center gap-3 mb-4">
        <span className="vd-tick" />
        <h2 className="h4 fw-bold m-0 text-uppercase" style={{ letterSpacing: '.04em' }}>{t('home.latest')}</h2>
      </div>

      {/* PROJECTS GRID + SIDEBAR */}
      <section className="row g-4">
        <div className="col-lg-8">
          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-sm-6" key={p.slug}>
                <Card href={localeHref(locale, `/projects/${p.slug}`)} title={p.name}
                  excerpt={p.excerpt} category={p.category} catLabel={cat(p.category)} media={mediaFor(p.slug, locale)} />
              </div>
            ))}
          </div>
        </div>

        <aside className="col-lg-4">
          <div className="vd-widget p-4 mb-4">
            <div className="vd-section-head d-flex align-items-center gap-2 mb-3">
              <span className="vd-tick" />
              <h2 className="h6 fw-bold m-0 text-uppercase">{t('home.reference')}</h2>
            </div>
            <Link href={refHref} className="d-block text-decoration-none text-reset vd-hover">
              <img src={refMedia.img} alt={refMedia.alt} className="img-fluid w-100 rounded mb-2" loading="lazy"
                style={{ aspectRatio: '16/9', objectFit: 'cover' }} />
              <span className={`post-category vd-cat vd-cat--${ref.category}`}>{cat(ref.category)}</span>
              <h3 className="h6 fw-bold mt-2" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>{ref.title}</h3>
            </Link>
          </div>

          <div className="vd-widget p-4">
            <div className="vd-section-head d-flex align-items-center gap-2 mb-3">
              <span className="vd-tick" />
              <h2 className="h6 fw-bold m-0 text-uppercase">{t('home.sidebarTitle')}</h2>
            </div>
            <ol className="vd-rank list-unstyled m-0">
              {projects.slice(0, 4).map((p, i) => (
                <li key={p.slug} className="d-flex gap-3 py-2">
                  <span className="vd-rank__n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <Link href={localeHref(locale, `/projects/${p.slug}`)} className="text-reset text-decoration-none fw-semibold vd-hover" style={{ fontFamily: 'var(--font-cormorant-garamond)', fontSize: '1.05rem' }}>{p.name}</Link>
                    <div style={{ fontSize: '.78rem', opacity: 0.6 }}>{cat(p.category)}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>

      {/* CTA */}
      <section className="vd-cta mt-5 p-4 p-lg-5 text-center">
        <h2 className="fw-bold" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>{t('home.ctaTitle')}</h2>
        <p className="mx-auto mt-2 mb-4" style={{ maxWidth: '40rem', opacity: 0.8 }}>{t('home.ctaText')}</p>
        <Link href={refHref} className="btn vd-btn px-4 py-2 fw-semibold text-uppercase">{t('home.readReference')}</Link>
      </section>
    </div>
  );
}
