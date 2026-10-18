import { ArticleCard } from "@/components/news/ArticleCard";
import { getDemoArticles } from "@/lib/demo-data";
import { notFound } from "next/navigation";

const CATEGORIES: Record<string, { title: string; description: string }> = {
  "na-sluhu": { title: "На слуху", description: "Резонансные и обсуждаемые темы." },
  "chto-tvoritsya": { title: "Что творится?", description: "Конфликты, происшествия, город, власть и общество." },
  "nashi-dengi": { title: "Наши деньги", description: "Тарифы, зарплаты, налоги, ЖКХ, бюджет." },
  "sibirskiy-dvizh": { title: "Сибирский движ", description: "Городская жизнь, развлечения, события, культура." },
  "nashi-lyudi": { title: "Наши люди", description: "Портреты, сильные герои, истории." },
  "kuda-shodit": { title: "Куда сходить", description: "Афиша, маршруты, досуг." },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = CATEGORIES[params.slug];
  if (!cat) notFound();

  const articles = getDemoArticles(undefined, params.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">{cat.title}</h1>
      <p className="mb-6 text-muted">{cat.description} Демонстрационные материалы отмечены.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}
