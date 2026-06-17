'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from '@/i18n/routing';
import { localeHref, LOCALES } from '@/lib/site';

const LABELS: Record<string, string> = { en: 'EN', fr: 'FR', es: 'ES' };
const FULL: Record<string, string> = { en: 'English', fr: 'Français', es: 'Español' };

/**
 * Manual language override. Uses plain <a> with the full localized path so a
 * full navigation triggers the next-intl middleware, which sets the NEXT_LOCALE
 * cookie and stops auto re-detection from bouncing the choice.
 * `hrefs` lets pages with localized slugs (articles) pass exact per-locale paths.
 */
export default function LangSwitcher({
  locale,
  hrefs,
}: {
  locale: string;
  hrefs?: Partial<Record<string, string>>;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1 rounded-full border border-line px-3 text-xs font-display font-semibold text-ink/80 hover:text-brand hover:border-brand transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {LABELS[locale]}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-line bg-card shadow-lg">
          {LOCALES.map((l) => {
            const href = hrefs?.[l] ?? localeHref(l, pathname || '/');
            return (
              <li key={l}>
                <a
                  href={href}
                  className={`block px-4 py-2 text-sm hover:bg-brand/10 ${l === locale ? 'text-brand font-semibold' : 'text-ink/80'}`}
                >
                  {FULL[l]}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
