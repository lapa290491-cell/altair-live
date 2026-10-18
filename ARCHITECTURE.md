# Архитектура Altair Live

- Next.js 16 App Router + TypeScript + Tailwind CSS v4
- Демо-данные в `lib/demo-data.ts` (явно помечены isDemo)
- Supabase: схема в `supabase/migrations/`
- Админка: `/admin/*` (демо-интерфейс)
- SEO: robots.ts, sitemap.ts, rss.xml, news-sitemap.xml, метаданные
- Source Radar и Второй вопрос: UI и модели подготовлены, требуют БД и (опционально) AI-адаптер

## Безопасность

- Секреты только в env
- RLS включается после подключения Supabase
- Демо-контент не попадает в sitemap
