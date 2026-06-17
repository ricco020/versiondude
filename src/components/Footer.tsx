import { getTranslations } from 'next-intl/server';
import { getContent, type CategoryKey } from '@/data/content';
import { localeHref } from '@/lib/site';

const CATS: CategoryKey[] = ['standards', 'parsing', 'tooling', 'archive'];

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const { projects, articles } = getContent(locale);
  const ref = articles[0];
  const year = 2026;

  return (
    <footer className="mt-16 border-t border-line bg-card">
      <div className="mx-auto grid max-w-screen gap-10 px-5 py-12 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <span className="font-display text-xl font-bold tracking-tight">
            Version<span className="text-brand">Dude</span>
          </span>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{t('footer.about')}</p>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('footer.explore')}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-brand" href={localeHref(locale, '/')}>{t('nav.home')}</a></li>
            <li><a className="hover:text-brand" href={localeHref(locale, `/${ref.slug}`)}>{t('nav.reference')}</a></li>
            <li><a className="hover:text-brand" href={localeHref(locale, '/projects')}>{t('nav.projects')}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">{t('footer.topics')}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {CATS.map((c) => (
              <li key={c}><span className="text-muted">{t(`categories.${c}`)}</span> <span className="text-muted/60">· {projects.filter((p) => p.category === c).length}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-screen flex-col gap-1 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {t('footer.rights')}</span>
          <span>{t('footer.noAffiliation')}</span>
        </div>
      </div>
    </footer>
  );
}
