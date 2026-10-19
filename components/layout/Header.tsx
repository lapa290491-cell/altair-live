"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, X, Radio } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
            <Radio className="h-4 w-4" />
          </span>
          <span className="text-lg">Альтаир <span className="text-blue">Live</span></span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {CATEGORIES.slice(0, 4).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="text-ink/70 transition hover:text-ink">
              {c.title}
            </Link>
          ))}
          <Link href="/vtoroy-vopros" className="text-blue">Второй вопрос</Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/search" className="rounded-lg p-2 text-ink/70 hover:bg-canvas" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </Link>
          <button
            className="rounded-lg p-2 text-ink/70 hover:bg-canvas lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-4 py-5 lg:hidden">
          <div className="mb-4 flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                href={r.slug ? `/region/${r.slug}` : "/"}
                className="rounded-full bg-canvas px-3 py-1.5 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {r.title}
              </Link>
            ))}
          </div>
          <div className="grid gap-1">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="rounded-lg px-2 py-3 text-base font-medium hover:bg-canvas"
                onClick={() => setOpen(false)}
              >
                {c.title}
              </Link>
            ))}
            <Link href="/world" className="rounded-lg px-2 py-3" onClick={() => setOpen(false)}>Мир</Link>
            <Link href="/vtoroy-vopros" className="rounded-lg px-2 py-3 text-blue" onClick={() => setOpen(false)}>Второй вопрос</Link>
          </div>
        </div>
      )}
    </header>
  );
}
