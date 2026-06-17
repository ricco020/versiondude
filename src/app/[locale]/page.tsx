import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent, type CategoryKey } from '@/data/content';
import { localeHref, CATEGORY_CLASS } from '@/lib/site';
import PostCard from '@/components/PostCard';

const CATS: CategoryKey[] = ['standards', 'parsing', 'tooling', 'archive'];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale });
  const { projects, articles } = getContent(locale);
  const ref = articles[0];

  const refMeta = `${t('categories.parsing')} · ${ref.readingMinutes} ${t('article.minRead')}`;

  return (
    <div className="mx-auto max-w-screen px-5">
      {/* Hero */}
      <section className="grid gap-6 py-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <PostCard
            locale={locale}
            href={localeHref(locale, `/${ref.slug}`)}
            title={ref.title}
            excerpt={ref.dek}
            category={ref.category}
            meta={refMeta}
            variant="lead"
          />
        </div>
        <div className="flex flex-col gap-6">
          {projects.slice(0, 2).map((p) => (
            <PostCard
              key={p.slug}
              locale={locale}
              href={localeHref(locale, `/projects/${p.slug}`)}
              title={p.name}
              excerpt={p.excerpt}
              category={p.category}
              meta={p.status}
              variant="tall"
            />
          ))}
        </div>
      </section>

      {/* Browse by topic */}
      <section className="flex flex-wrap items-center gap-2 border-y border-line py-4">
        <span className="font-display text-sm font-semibold text-muted mr-2">{t('home.browseByTopic')}:</span>
        {CATS.map((c) => (
          <span key={c} className={`cat-pill ${CATEGORY_CLASS[c]}`}>
            {t(`categories.${c}`)} <span className="opacity-60">{projects.filter((p) => p.category === c).length}</span>
          </span>
        ))}
      </section>

      {/* Main grid + sidebar */}
      <section className="grid gap-10 py-10 lg:grid-cols-[2.2fr_1fr]">
        <div>
          <h2 className="mb-5 flex items-center gap-3 font-display text-xl font-bold">
            <span className="h-5 w-1.5 rounded bg-brand" />
            {t('home.latest')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
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

        <aside className="space-y-8">
          <div className="rounded-2xl border border-line bg-card p-6">
            <h2 className="mb-4 flex items-center gap-3 font-display text-lg font-bold">
              <span className="h-5 w-1.5 rounded bg-accent" />
              {t('home.reference')}
            </h2>
            <PostCard
              locale={locale}
              href={localeHref(locale, `/${ref.slug}`)}
              title={ref.title}
              category={ref.category}
              meta={refMeta}
              variant="row"
            />
          </div>

          <div className="rounded-2xl border border-line bg-card p-6">
            <h2 className="mb-4 flex items-center gap-3 font-display text-lg font-bold">
              <span className="h-5 w-1.5 rounded bg-brand" />
              {t('home.sidebarTitle')}
            </h2>
            <ul className="space-y-4">
              {projects.slice(0, 4).map((p, i) => (
                <li key={p.slug}>
                  <a href={localeHref(locale, `/projects/${p.slug}`)} className="group flex gap-3">
                    <span className="font-display text-2xl font-bold text-brand/40">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-display text-sm font-semibold leading-snug group-hover:text-brand">{p.name}</h3>
                      <p className="text-xs text-muted">{t(`categories.${p.category}`)}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* CTA band */}
      <section className="my-10 overflow-hidden rounded-3xl border border-line bg-ink text-paper">
        <div className="grid items-center gap-6 p-8 md:grid-cols-[2fr_1fr] md:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t('home.ctaTitle')}</h2>
            <p className="mt-3 max-w-xl text-sm text-paper/70">{t('home.ctaText')}</p>
          </div>
          <div className="md:justify-self-end">
            <a
              href={localeHref(locale, `/${ref.slug}`)}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-display text-sm font-semibold text-white hover:opacity-90"
            >
              {t('home.readReference')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
