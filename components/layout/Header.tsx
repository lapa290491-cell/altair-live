"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const REGIONS = [
  { slug: "", title: "Вся Сибирь" },
  { slug: "irkutsk", title: "Иркутск" },
  { slug: "ulan-ude", title: "Улан-Удэ" },
  { slug: "krasnoyarsk", title: "Красноярск" },
];

const CATEGORIES = [
  { slug: "na-sluhu", title: "На слуху" },
  { slug: "chto-tvoritsya", title: "Что творится?" },
  { slug: "nashi-dengi", title: "Наши деньги" },
  { slug: "sibirskiy-dvizh", title: "Сибирский движ" },
  { slug: "nashi-lyudi", title: "Наши люди" },
  { slug: "kuda-shodit", title: "Куда сходить" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState("");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-full bg-blue" />
          АЛЬТАИР <span className="text-blue">LIVE</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {CATEGORIES.slice(0, 4).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="text-sm font-medium hover:text-blue">
              {c.title}
            </Link>
          ))}
          <Link href="/world" className="text-sm font-medium hover:text-blue">Мир</Link>
          <Link href="/vtoroy-vopros" className="text-sm font-medium text-blue">Второй вопрос</Link>
        </nav>

        <div className="flex items-center gap-2">
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
              // In real app: set cookie or router.push
            }}
            className="hidden rounded-md border border-line bg-paper px-2 py-1 text-sm md:block"
            aria-label="Регион"
          >
            {REGIONS.map((r) => (
              <option key={r.slug} value={r.slug}>{r.title}</option>
            ))}
          </select>
          <Link href="/search" className="rounded-md p-2 hover:bg-canvas" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </Link>
          <button
            className="rounded-md p-2 hover:bg-canvas md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 md:hidden">
          <div className="mb-4 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={r.slug ? `/region/${r.slug}` : "/"}
                className="rounded-full border border-line px-3 py-1 text-sm"
                onClick={() => setOpen(false)}
              >
                {r.title}
              </Link>
            ))}
          </div>
          <div className="grid gap-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="py-2 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {c.title}
              </Link>
            ))}
            <Link href="/world" className="py-2" onClick={() => setOpen(false)}>Что происходит в мире</Link>
            <Link href="/vtoroy-vopros" className="py-2 text-blue" onClick={() => setOpen(false)}>Второй вопрос</Link>
            <Link href="/admin" className="py-2 text-muted" onClick={() => setOpen(false)}>Редакция</Link>
          </div>
        </div>
      )}
    </header>
  );
}
