import Link from "next/link";

export default function VtoroyVoprosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">Альтаир. Второй вопрос</h1>
      <p className="mb-6 text-lg text-muted">
        После исходного сообщения мы не пересказываем его ещё раз, а быстро отвечаем на следующий проверяемый вопрос: кого коснётся, сколько стоит, когда вступит в силу, что изменилось в документе, имеет ли отношение к Сибири.
      </p>
      <div className="rounded-xl border border-line bg-paper p-6">
        <div className="mb-2 text-sm font-medium text-signal">Демонстрация</div>
        <h2 className="mb-2 text-xl font-semibold">Пример сюжета</h2>
        <p className="mb-4 text-sm text-muted">Учебный сюжет. Не описывает реальных событий.</p>
        <Link href="/news/demo-irkutsk-tarify-uchebnyy" className="text-blue">Смотреть связанный материал →</Link>
      </div>
      <p className="mt-8 text-sm text-muted">
        Система готова к подключению Source Radar и ИИ-адаптеров. В текущем режиме работает на демонстрационных данных.
      </p>
    </div>
  );
}
