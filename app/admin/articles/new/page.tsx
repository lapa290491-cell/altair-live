export default function NewArticlePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Новый материал</h1>
      <p className="mb-4 text-sm text-signal">Демонстрационный редактор. Данные не сохраняются.</p>
      <form className="space-y-4">
        <input placeholder="Заголовок" className="w-full rounded border border-line px-3 py-2" />
        <textarea placeholder="Лид / deck" className="w-full rounded border border-line px-3 py-2" rows={2} />
        <textarea placeholder="Основной текст" className="w-full rounded border border-line px-3 py-2" rows={8} />
        <div className="flex gap-2">
          <button type="button" className="rounded border border-line px-4 py-2">Сохранить черновик</button>
          <button type="button" className="rounded bg-blue px-4 py-2 text-white">Отправить на проверку</button>
        </div>
      </form>
    </div>
  );
}
