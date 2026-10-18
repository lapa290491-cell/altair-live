# Деплой с телефона

1. Откройте браузер на смартфоне → github.com/lapa290491-cell/altair-live
2. Перейдите на vercel.com → New Project → Import Git Repository → выберите altair-live
3. Framework Preset: Next.js
4. Environment Variables: скопируйте из .env.example, заполните NEXT_PUBLIC_SITE_URL и Supabase при наличии
5. Deploy
6. После деплоя откройте полученный URL
7. Для Supabase: supabase.com → New Project → SQL Editor → вставьте содержимое supabase/migrations/001_initial.sql → Run
8. Создайте пользователя в Authentication → затем в Table Editor profiles установите role = owner

Все действия выполняются через мобильный браузер.
