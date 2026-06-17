import { getTranslations } from 'next-intl/server';
import type { CategoryKey } from '@/data/content';
import { CATEGORY_CLASS, glyphFor } from '@/lib/site';

type Variant = 'lead' | 'tall' | 'row' | 'grid';

export default async function PostCard({
  locale,
  href,
  title,
  excerpt,
  category,
  meta,
  variant = 'grid',
}: {
  locale: string;
  href: string;
  title: string;
  excerpt?: string;
  category: CategoryKey;
  meta?: string;
  variant?: Variant;
}) {
  const t = await getTranslations({ locale, namespace: 'categories' });
  const catClass = CATEGORY_CLASS[category];
  const glyph = glyphFor(title);

  if (variant === 'row') {
    return (
      <a href={href} className={`card-hover group flex gap-4 ${catClass}`}>
        <div className="thumb flex h-20 w-24 shrink-0 items-center justify-center rounded-lg">
          <span className="thumb__glyph text-xl">{glyph}</span>
        </div>
        <div className="min-w-0">
          <span className={`cat-pill ${catClass}`}>{t(category)}</span>
          <h3 className="mt-1.5 font-display text-base font-semibold leading-snug group-hover:text-brand">{title}</h3>
          {meta && <p className="mt-1 text-xs text-muted">{meta}</p>}
        </div>
      </a>
    );
  }

  const isLead = variant === 'lead';
  const isTall = variant === 'tall';
  const thumbH = isLead ? 'h-72 md:h-96' : isTall ? 'h-56' : 'h-44';

  return (
    <a href={href} className={`card-hover group flex flex-col overflow-hidden rounded-2xl border border-line bg-card ${catClass}`}>
      <div className={`thumb relative flex ${thumbH} items-center justify-center`}>
        <span className={`thumb__glyph ${isLead ? 'text-7xl' : 'text-5xl'}`}>{glyph}</span>
        <span className="absolute left-4 top-4">
          <span className="cat-pill cat-pill--solid">{t(category)}</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`font-display font-bold leading-tight group-hover:text-brand ${isLead ? 'text-2xl md:text-3xl' : 'text-lg'}`}>{title}</h3>
        {excerpt && <p className={`mt-2 text-sm leading-relaxed text-muted ${isLead ? '' : 'line-clamp-3'}`}>{excerpt}</p>}
        {meta && <p className="mt-3 text-xs text-muted">{meta}</p>}
      </div>
    </a>
  );
}
