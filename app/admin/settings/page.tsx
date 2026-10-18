export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Настройки</h1>
      <div className="space-y-4 text-sm">
        <div>DEMO_MODE: true</div>
        <div>AI_PROVIDER: none</div>
        <div>Supabase: не подключён</div>
      </div>
      <p className="mt-6 text-muted">Секреты хранятся только в переменных окружения Vercel/Supabase, не в репозитории.</p>
    </div>
  );
}
