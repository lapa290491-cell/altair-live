import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: process.env.DEMO_MODE === "false" ? "production" : "demo",
    databaseConnected: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    time: new Date().toISOString(),
  });
}
