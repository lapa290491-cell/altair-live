import { ArticleCard } from "@/components/news/ArticleCard";
import { getDemoArticles } from "@/lib/demo-data";
import { notFound } from "next/navigation";

const REGIONS: Record<string, string> = {
  irkutsk: "Иркутск и Иркутская область",
  "ulan-ude": "Улан-Удэ и Республика Бурятия",
  krasnoyarsk: "Красноярск и Красноярский край",
};

export default function RegionPage({ params }: { params: { slug: string } }) {
  const title = REGIONS[params.slug];
  if (!title) notFound();

  const articles = getDemoArticles(params.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">{title}</h1>
      <p className="mb-6 text-muted">Региональная лента. В демонстрационном режиме показаны учебные материалы с меткой «Демонстрация».</p>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
      {articles.length === 0 && (
        <div className="rounded-xl border border-dashed border-line p-8 text-center text-muted">
          Пока нет материалов по этому региону. Демо-данные ограничены.
        </div>
      )}
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(REGIONS).map((slug) => ({ slug }));
}
