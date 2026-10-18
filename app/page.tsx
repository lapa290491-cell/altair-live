import { ArticleCard } from "@/components/news/ArticleCard";
import { getDemoArticles } from "@/lib/demo-data";
import Link from "next/link";

export default function HomePage() {
  const articles = getDemoArticles();
  const hero = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
      {/* Mini topbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <div>Вся Сибирь · 18 октября 2026</div>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-blue">О проекте</Link>
          <Link href="/editorial-policy" className="hover:text-blue">Редакция</Link>
        </div>
      </div>

      {/* Hero */}
      {hero && (
        <section className="mb-10">
          <ArticleCard article={hero} variant="hero" />
        </section>
      )}

      {/* Главное за сегодня */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Главное за сегодня</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
        {articles.length === 0 && (
          <div className="rounded-xl border border-dashed border-line p-8 text-center text-muted">
            Пока нет опубликованных материалов. В демонстрационном режиме показаны учебные примеры.
          </div>
        )}
      </section>

      {/* Второй вопрос */}
      <section className="mb-12 rounded-2xl border border-line bg-paper p-6 md:p-8">
        <div className="mb-2 text-sm font-medium text-blue">Альтаир. Второй вопрос</div>
        <h2 className="mb-3 text-2xl font-bold">Что это значит для нас?</h2>
        <p className="mb-4 text-muted">
          После громкого события мы ищем следующий проверяемый вопрос: кого коснётся, сколько стоит, когда вступит в силу, имеет ли отношение к Сибири.
        </p>
        <Link href="/vtoroy-vopros" className="inline-flex items-center text-blue font-medium hover:underline">
          Смотреть сюжеты и вопросы →
        </Link>
      </section>

      {/* Регионы */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Регионы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { slug: "irkutsk", title: "Иркутск и область" },
            { slug: "ulan-ude", title: "Улан-Удэ и Бурятия" },
            { slug: "krasnoyarsk", title: "Красноярск и край" },
          ].map((r) => (
            <Link key={r.slug} href={`/region/${r.slug}`} className="rounded-xl border border-line bg-paper p-5 hover:border-blue">
              <div className="text-lg font-semibold">{r.title}</div>
              <div className="mt-1 text-sm text-muted">Лента региона</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Альтаир посчитал */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Альтаир посчитал</h2>
        <div className="rounded-xl border border-line bg-paper p-6">
          <p className="text-muted">Редакционные расчёты с явными формулами и источниками. В демо-режиме — учебные примеры.</p>
          <Link href="/poschital" className="mt-3 inline-block text-blue">Перейти к расчётам →</Link>
        </div>
      </section>
    </div>
  );
}
