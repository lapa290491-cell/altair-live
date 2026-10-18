import Link from "next/link";
import { DemoArticle } from "@/lib/demo-data";

export function ArticleCard({ article, variant = "compact" }: { article: DemoArticle; variant?: "hero" | "wide" | "compact" | "text" }) {
  const isHero = variant === "hero";
  return (
    <article className={`group relative overflow-hidden rounded-xl border border-line bg-paper transition hover:shadow-sm ${isHero ? "md:col-span-2" : ""}`}>
      <div className="p-4 md:p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded bg-signal/10 px-2 py-0.5 font-medium text-signal">Демонстрация</span>
          <span className="text-muted">{article.kind}</span>
          <span className="text-muted">{new Date(article.publishedAt).toLocaleDateString("ru-RU")}</span>
        </div>
        <h2 className={`font-semibold leading-tight ${isHero ? "text-2xl md:text-3xl" : "text-lg"}`}>
          <Link href={`/news/${article.slug}`} className="hover:text-blue">
            {article.headline}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-muted line-clamp-2">{article.deck}</p>
        {article.summaryPoints && (
          <ul className="mt-3 space-y-1 text-sm">
            {article.summaryPoints.slice(0, 2).map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue">•</span> {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
