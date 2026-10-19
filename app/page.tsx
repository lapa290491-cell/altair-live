import { ArticleCard } from "@/components/news/ArticleCard";
import { getDemoArticles } from "@/lib/demo-data";
import Link from "next/link";

export default function HomePage() {
  const articles = getDemoArticles();
  const hero = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      {/* Top meta */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <div>Вся Сибирь · 18 октября 2026</div>
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-ink">О проекте</Link>
          <Link href="/editorial-policy" className="hover:text-ink">Редакция</Link>
        </div>
      </div>

      {/* Hero */}
      {hero && (
        <section className="mb-12">
          <ArticleCard article={hero} variant="hero" />
        </section>
      )}

      {/* Главное */}
      <section className="mb-14">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Главное за сегодня</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>

      {/* Второй вопрос */}
      <section className="mb-14 overflow-hidden rounded-3xl bg-ink text-paper">
        <div className="p-6 md:p-10">
          <div className="mb-2 text-sm font-medium text-blue">Альтаир · Второй вопрос</div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">Что это значит для нас?</h2>
          <p className="mb-6 max-w-xl text-paper/70">
            После громкого события ищем следующий проверяемый вопрос: кого коснётся, сколько стоит, когда вступит в силу и имеет ли отношение к Сибири.
          </p>
          <Link href="/vtoroy-vopros" className="inline-flex items-center rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink">
            Смотреть сюжеты →
          </Link>
        </div>
      </section>

      {/* Регионы */}
      <section className="mb-14">
        <h2 className="mb-5 text-2xl font-semibold tracking-tight">Регионы</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { slug: "irkutsk", title: "Иркутск и область" },
            { slug: "ulan-ude", title: "Улан-Удэ и Бурятия" },
            { slug: "krasnoyarsk", title: "Красноярск и край" },
          ].map((r) => (
            <Link key={r.slug} href={`/region/${r.slug}`} className="rounded-2xl border border-line bg-paper p-6 transition hover:border-blue/40">
              <div className="text-lg font-semibold">{r.title}</div>
              <div className="mt-1 text-sm text-muted">Лента региона</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
