export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q || "";
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Поиск</h1>
      <form action="/search" className="mb-6">
        <input
          name="q"
          defaultValue={q}
          placeholder="Что ищем?"
          className="w-full rounded-lg border border-line px-4 py-3 text-lg focus:border-blue focus:outline-none"
        />
      </form>
      {q ? (
        <div className="text-muted">Результаты по запросу «{q}» (демо-режим: поиск по учебным материалам будет добавлен).</div>
      ) : (
        <div className="text-muted">Введите запрос. В демонстрационном режиме поиск ограничен учебными данными.</div>
      )}
    </div>
  );
}
