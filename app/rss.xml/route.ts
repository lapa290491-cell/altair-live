import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://altair-live.vercel.app";
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Альтаир Live</title>
    <link>${base}</link>
    <description>Сибирский медиапортал</description>
    <language>ru</language>
  </channel>
</rss>`;
  return new NextResponse(rss, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
