export default function AdminRadarPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Source Radar</h1>
      <p className="mb-4 text-muted">Очередь кандидатов из RSS и утверждённых источников. В демо-режиме пусто. Добавьте источники в /admin/sources и подключите cron.</p>
      <div className="rounded-xl border border-dashed border-line p-8 text-center text-muted">
        Нет поступивших материалов. Радар не запущен.
      </div>
    </div>
  );
}
