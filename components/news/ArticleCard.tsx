import Link from "next/link";
import { DemoArticle } from "@/lib/demo-data";

export function ArticleCard({ article, variant = "compact" }: { article: DemoArticle; variant?: "hero" | "wide" | "compact" | "text" }) {
  const isHero = variant === "hero";

  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all hover:border-blue/30 hover:shadow-sm ${isHero ? "md:col-span-2" : ""}`}>
      <div className={`flex flex-1 flex-col ${isHero ? "p-6 md:p-8" : "p-5"}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-signal/10 px-2.5 py-1 font-medium text-signal">Демо</span>
          <span className="text-muted">{article.kind}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{new Date(article.publishedAt).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}</span>
        </div>

        <h2 className={`font-semibold leading-snug tracking-tight ${isHero ? "text-2xl md:text-3xl" : "text-lg"}`}>
          <Link href={`/news/${article.slug}`} className="hover:text-blue">
            {article.headline}
          </Link>
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{article.deck}</p>

        {article.summaryPoints && article.summaryPoints.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm">
            {article.summaryPoints.slice(0, isHero ? 3 : 2).map((p, i) => (
              <li key={i} className="flex gap-2 text-ink/80">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 text-xs font-medium text-blue">Читать →</div>
      </div>
    </article>
  );
}
