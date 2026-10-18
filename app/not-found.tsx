import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-muted">Страница не найдена.</p>
      <Link href="/" className="mt-6 inline-block text-blue">На главную</Link>
    </div>
  );
}
