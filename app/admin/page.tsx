import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Редакционная панель</h1>
      <p className="mb-6 text-sm text-signal">Демонстрационный режим. Изменения не сохраняются в продакшен.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-line bg-paper p-5">
          <div className="text-2xl font-bold">3</div>
          <div className="text-sm text-muted">Демо-материала</div>
        </div>
        <div className="rounded-xl border border-line bg-paper p-5">
          <div className="text-2xl font-bold">0</div>
          <div className="text-sm text-muted">Ожидают проверки</div>
        </div>
        <div className="rounded-xl border border-line bg-paper p-5">
          <div className="text-2xl font-bold">N/A</div>
          <div className="text-sm text-muted">Радар (не подключён)</div>
        </div>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        <Link href="/admin/articles" className="rounded-lg border border-line p-4 hover:border-blue">Материалы</Link>
        <Link href="/admin/stories" className="rounded-lg border border-line p-4 hover:border-blue">Сюжеты / Второй вопрос</Link>
        <Link href="/admin/radar" className="rounded-lg border border-line p-4 hover:border-blue">Source Radar</Link>
        <Link href="/admin/sources" className="rounded-lg border border-line p-4 hover:border-blue">Источники</Link>
        <Link href="/admin/settings" className="rounded-lg border border-line p-4 hover:border-blue">Настройки</Link>
      </div>
      <p className="mt-8 text-sm text-muted">
        Для полноценной работы подключите Supabase (см. .env.example и README). Роли: owner, editor, author, reviewer.
      </p>
    </div>
  );
}
