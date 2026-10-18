export type ArticleKind = "news" | "explainer" | "analysis" | "opinion" | "calculation" | "update" | "guide" | "event" | "interview";
export type ArticleStatus = "draft" | "in_review" | "approved" | "scheduled" | "published" | "rejected" | "archived" | "corrected";

export interface DemoArticle {
  id: string;
  slug: string;
  headline: string;
  deck: string;
  summaryPoints: string[];
  body: string;
  kind: ArticleKind;
  status: ArticleStatus;
  regions: string[];
  categories: string[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  isDemo: true;
  author: string;
  sources: { title: string; url: string; type: string }[];
  secondQuestion?: string;
  whatItMeans?: string;
}

export const DEMO_ARTICLES: DemoArticle[] = [
  {
    id: "demo-1",
    slug: "demo-irkutsk-tarify-uchebnyy",
    headline: "Учебный пример: как изменение тарифа может повлиять на счета в Иркутске",
    deck: "Демонстрационный материал. Не является реальной новостью. Разбираем условный сценарий.",
    summaryPoints: [
      "Это учебный пример, а не реальная новость.",
      "Показывает структуру «Второго вопроса».",
      "Все цифры условные.",
    ],
    body: `## Демонстрация

Этот материал создан исключительно для демонстрации интерфейса Альтаир Live.

**Не является реальной новостью.** Никаких утверждений о действительных решениях органов власти или компаний.

### Что это значит для вас

Пока неизвестно — это демонстрация.

### Заявлено / Подтверждено / Неизвестно

- Заявлено: ничего.
- Подтверждено: ничего.
- Неизвестно: всё, поскольку это учебный текст.

### Источники

Учебные источники не приводятся.`,
    kind: "explainer",
    status: "published",
    regions: ["irkutsk"],
    categories: ["nashi-dengi"],
    tags: ["демо", "тарифы"],
    publishedAt: new Date(Date.now() - 3600_000).toISOString(),
    updatedAt: new Date().toISOString(),
    isDemo: true,
    author: "Редакция Альтаира (демо)",
    sources: [{ title: "Учебный источник", url: "https://example.com", type: "demo" }],
    secondQuestion: "Как теоретически рассчитать влияние условного тарифа на средний счёт?",
    whatItMeans: "Пока неизвестно — демонстрация.",
  },
  {
    id: "demo-2",
    slug: "demo-ulan-ude-gorod-uchebnyy",
    headline: "Учебный пример: городская жизнь Улан-Удэ в формате карточки",
    deck: "Демонстрация. Показывает карточку материала для региона Улан-Удэ.",
    summaryPoints: [
      "Демонстрационный контент.",
      "Не описывает реальных событий.",
    ],
    body: "Это учебный текст для демонстрации страницы региона Улан-Удэ.",
    kind: "news",
    status: "published",
    regions: ["ulan-ude"],
    categories: ["sibirskiy-dvizh"],
    tags: ["демо"],
    publishedAt: new Date(Date.now() - 7200_000).toISOString(),
    updatedAt: new Date().toISOString(),
    isDemo: true,
    author: "Редакция Альтаира (демо)",
    sources: [],
  },
  {
    id: "demo-3",
    slug: "demo-krasnoyarsk-raschet-uchebnyy",
    headline: "Альтаир посчитал: учебный расчёт на примере Красноярска",
    deck: "Демонстрация формата «Альтаир посчитал». Цифры условные.",
    summaryPoints: [
      "Учебный расчёт.",
      "Формула и входные данные указаны явно.",
      "Не является реальным анализом.",
    ],
    body: `## Учебный расчёт

Формула: условная стоимость = базовая × коэффициент.

Входные данные: учебные.

Оговорка: это демонстрация.`,
    kind: "calculation",
    status: "published",
    regions: ["krasnoyarsk"],
    categories: ["nashi-dengi"],
    tags: ["демо", "расчёт"],
    publishedAt: new Date(Date.now() - 10800_000).toISOString(),
    updatedAt: new Date().toISOString(),
    isDemo: true,
    author: "Редакция Альтаира (демо)",
    sources: [{ title: "Учебные данные", url: "#", type: "demo" }],
  },
];

export function getDemoArticles(region?: string, category?: string) {
  return DEMO_ARTICLES.filter((a) => {
    if (region && !a.regions.includes(region) && region !== "") return false;
    if (category && !a.categories.includes(category)) return false;
    return a.status === "published";
  });
}

export function getDemoArticle(slug: string) {
  return DEMO_ARTICLES.find((a) => a.slug === slug);
}
