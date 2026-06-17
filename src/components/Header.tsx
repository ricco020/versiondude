import { getTranslations } from 'next-intl/server';
import { getContent } from '@/data/content';
import { localeHref } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import LangSwitcher from './LangSwitcher';

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  const { projects, articles } = getContent(locale);
  const ref = articles[0];

  const nav = [
    { label: t('nav.home'), href: localeHref(locale, '/') },
    { label: t('nav.reference'), href: localeHref(locale, `/${ref.slug}`) },
    { label: t('nav.projects'), href: localeHref(locale, '/projects') },
  ];

  const ticker = [t('home.trending'), ...projects.map((p) => p.name), ref.title];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      {/* utility bar */}
      <div className="hidden md:block border-b border-line/70">
        <div className="mx-auto flex max-w-screen items-center justify-between px-5 py-1.5 text-xs text-muted">
          <span className="font-display tracking-wide">{t('site.tagline')}</span>
          <div className="flex items-center gap-3">
            <LangSwitcher locale={locale} />
            <ThemeToggle label={t('theme.toggle')} />
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="mx-auto flex max-w-screen items-center justify-between gap-4 px-5 py-3.5">
        <a href={localeHref(locale, '/')} className="group inline-flex items-baseline gap-1.5" aria-label={t('site.name')}>
          <span className="font-display text-2xl font-bold tracking-tight">
            Version<span className="text-brand">Dude</span>
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-muted">/svn</span>
        </a>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-display font-medium text-ink/80 hover:bg-ink/5 hover:text-brand transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitcher locale={locale} />
          <ThemeToggle label={t('theme.toggle')} />
        </div>
      </div>

      {/* trending ticker */}
      <div className="border-t border-line/70 bg-card/40 overflow-hidden">
        <div className="mx-auto max-w-screen px-5 py-2">
          <div className="flex items-center gap-3 text-xs">
            <span className="cat-pill cat-parsing cat-pill--solid shrink-0">{t('home.trending')}</span>
            <div className="relative flex-1 overflow-hidden">
              <div className="marquee gap-8 text-muted">
                {[...ticker, ...ticker].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-8">
                    {item}
                    <span className="text-brand/50">/</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
