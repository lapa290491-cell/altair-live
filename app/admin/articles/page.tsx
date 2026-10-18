import Link from "next/link";
import { DEMO_ARTICLES } from "@/lib/demo-data";

export default function AdminArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Материалы</h1>
        <Link href="/admin/articles/new" className="rounded-md bg-blue px-4 py-2 text-sm text-white">Новый</Link>
      </div>
      <div className="space-y-3">
        {DEMO_ARTICLES.map((a) => (
          <div key={a.id} className="flex items-center justify-between rounded-lg border border-line bg-paper p-4">
            <div>
              <div className="font-medium">{a.headline}</div>
              <div className="text-xs text-muted">{a.status} · {a.kind} · Демо</div>
            </div>
            <Link href={`/admin/articles/${a.id}`} className="text-sm text-blue">Открыть</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
