import { getDemoArticle } from "@/lib/demo-data";
import { notFound } from "next/navigation";


export default function NewsPage({ params }: { params: { slug: string } }) {
  const article = getDemoArticle(params.slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded bg-signal/10 px-2 py-1 font-medium text-signal">Демонстрация</span>
        <span className="text-muted">{article.kind}</span>
        <span className="text-muted">{new Date(article.publishedAt).toLocaleString("ru-RU")}</span>
      </div>
      <h1 className="mb-3 text-3xl font-bold leading-tight md:text-4xl">{article.headline}</h1>
      <p className="mb-6 text-lg text-muted">{article.deck}</p>

      <div className="mb-6 rounded-xl border border-line bg-paper p-4">
        <div className="mb-2 font-medium">Главное за 15 секунд</div>
        <ul className="space-y-1 text-sm">
          {article.summaryPoints.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>

      <div className="prose prose-neutral max-w-none mb-8" dangerouslySetInnerHTML={{ __html: article.body.replace(/\n/g, "<br/>").replace(/## /g, "<h2>").replace(/### /g, "<h3>") }} />

      {article.secondQuestion && (
        <div className="mb-6 rounded-xl border border-blue/30 bg-blue/5 p-5">
          <div className="text-sm font-medium text-blue">Второй вопрос</div>
          <div className="mt-1 font-medium">{article.secondQuestion}</div>
          <p className="mt-2 text-sm text-muted">{article.whatItMeans}</p>
        </div>
      )}

      <div className="mb-6">
        <div className="mb-2 font-medium">Источники и документы</div>
        {article.sources.length ? (
          <ul className="space-y-1 text-sm">
            {article.sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} className="text-blue hover:underline" target="_blank" rel="noopener noreferrer">{s.title}</a> ({s.type})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">Учебные источники не указаны.</p>
        )}
      </div>

      <div className="flex gap-4 text-sm">
        <button className="rounded-md border border-line px-3 py-1.5">Поделиться</button>
        <button className="rounded-md border border-line px-3 py-1.5">Скопировать ссылку</button>
      </div>

      <div className="mt-8 text-xs text-muted">
        Автор: {article.author}. Это демонстрационный материал. Не индексируется в продакшене.
      </div>
    </article>
  );
}
