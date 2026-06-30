import { findArticleBySlug, categoryLabel, ARTICLE_SLUGS } from "@/data/articles";
import { findProject } from "@/data/content";
import ArticlePage from "@/components/article-page/article-page";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const x = findArticleBySlug(params.slug);
  if (!x) return {};
  return {
    title: `${x.title} - VersionDude`,
    description: x.dek,
    openGraph: { title: x.title, description: x.dek, type: 'article', images: [x.hero] },
    robots: { index: true, follow: true },
    alternates: { canonical: `https://versiondude.net/articles/${x.slug}` },
  };
}

export default function Page({ params }) {
  const x = findArticleBySlug(params.slug);
  if (!x) notFound();
  const rel = x.related ? findProject("en", x.related) : null;
  return (
    <ArticlePage
      article={x}
      catLabel={categoryLabel(x.category)}
      relatedHref={rel ? `/projects/${rel.slug}` : null}
      relatedLabel={rel ? rel.name : null}
      home=""
    />
  );
}
