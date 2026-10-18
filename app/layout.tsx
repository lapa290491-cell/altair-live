import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Альтаир Live — сибирский медиапортал",
    template: "%s | Альтаир Live",
  },
  description: "Не просто что случилось. Что это меняет, для кого и что будет дальше. Иркутск, Улан-Удэ, Красноярск и вся Сибирь.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://altair-live.vercel.app"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Альтаир Live",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
