import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getContent, findProject } from '@/data/content';
import { localeHref, CATEGORY_CLASS, glyphFor, LOCALES } from '@/lib/site';

export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  return getContent(params.locale).projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = findProject(locale, slug);
  if (!project) return {};
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[l] = localeHref(l, `/projects/${slug}`);
  langs['x-default'] = langs.en;
  return {
    title: project.name,
    description: project.excerpt,
    alternates: { canonical: localeHref(locale, `/projects/${slug}`), languages: langs },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = findProject(locale, slug);
  if (!project) notFound();

  const t = await getTranslations({ locale });
  const { articles } = getContent(locale);
  const ref = articles[0];
  const catClass = CATEGORY_CLASS[project.category];

  return (
    <div className={`mx-auto max-w-3xl px-5 py-10 ${catClass}`}>
      <nav className="mb-6 text-sm text-muted">
        <a href={localeHref(locale, '/')} className="hover:text-brand">{t('site.name')}</a>
        <span className="mx-2">/</span>
        <a href={localeHref(locale, '/projects')} className="hover:text-brand">{t('nav.projects')}</a>
      </nav>

      <div className="flex items-center gap-5">
        <div className="thumb flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl">
          <span className="thumb__glyph text-3xl">{glyphFor(project.name)}</span>
        </div>
        <div>
          <span className={`cat-pill ${catClass}`}>{t(`categories.${project.category}`)}</span>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">{project.name}</h1>
        </div>
      </div>

      <div className="prose mt-8">
        {project.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        <div className="bg-card p-5">
          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('project.status')}</dt>
          <dd className="mt-1 font-medium">{project.status}</dd>
        </div>
        <div className="bg-card p-5">
          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('project.legacyPath')}</dt>
          <dd className="mt-1 font-mono text-sm break-all">{project.legacy}</dd>
        </div>
        <div className="bg-card p-5 sm:col-span-2">
          <dt className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('project.currentHome')}</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.currentHome.map((h) => (
              <a key={h.url} href={h.url} rel="noopener" target="_blank" className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand hover:bg-brand/20">
                {h.label}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </a>
            ))}
          </dd>
        </div>
      </dl>

      <p className="mt-6 rounded-xl border border-line bg-card p-4 text-sm text-muted">{t('project.disclaimer')}</p>

      <section className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-line bg-card p-5">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('project.relatedReference')}</p>
          <a href={localeHref(locale, `/${ref.slug}`)} className="mt-1 inline-block font-display font-semibold hover:text-brand">{ref.title}</a>
        </div>
        <a href={localeHref(locale, `/${ref.slug}`)} className="shrink-0 text-brand text-xl" aria-hidden="true">→</a>
      </section>

      <p className="mt-8">
        <a href={localeHref(locale, '/projects')} className="text-sm text-muted hover:text-brand">← {t('project.backToProjects')}</a>
      </p>
    </div>
  );
}
