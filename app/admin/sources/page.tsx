export default function AdminSourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Источники</h1>
      <p className="mb-4 text-muted">Каталог RSS и разрешённых источников. Добавление доступно после подключения Supabase.</p>
      <button className="rounded bg-blue px-4 py-2 text-sm text-white">Добавить источник (демо)</button>
    </div>
  );
}
