import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 text-lg font-bold">АЛЬТАИР LIVE</div>
            <p className="text-sm text-muted">
              Сибирский информационно-развлекательный медиапортал. Не просто что случилось — что это меняет.
            </p>
          </div>
          <div>
            <div className="mb-3 font-medium">Рубрики</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/na-sluhu" className="hover:text-blue">На слуху</Link></li>
              <li><Link href="/category/chto-tvoritsya" className="hover:text-blue">Что творится?</Link></li>
              <li><Link href="/category/nashi-dengi" className="hover:text-blue">Наши деньги</Link></li>
              <li><Link href="/vtoroy-vopros" className="hover:text-blue">Второй вопрос</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium">Регионы</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/region/irkutsk" className="hover:text-blue">Иркутск</Link></li>
              <li><Link href="/region/ulan-ude" className="hover:text-blue">Улан-Удэ</Link></li>
              <li><Link href="/region/krasnoyarsk" className="hover:text-blue">Красноярск</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 font-medium">О проекте</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue">О проекте</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-blue">Редакционная политика</Link></li>
              <li><Link href="/corrections" className="hover:text-blue">Исправления</Link></li>
              <li><Link href="/privacy" className="hover:text-blue">Конфиденциальность</Link></li>
              <li><Link href="/contacts" className="hover:text-blue">Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-6 text-center text-xs text-muted">
          © 2026 Альтаир Live. Демонстрационный режим. Все материалы с меткой «Демонстрация» — учебные.
        </div>
      </div>
    </footer>
  );
}
