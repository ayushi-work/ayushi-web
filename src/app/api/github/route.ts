import { NextResponse } from "next/server";
import { getGithubStats } from "@/lib/github";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") ?? process.env.GITHUB_USERNAME ?? "";
  const stats = await getGithubStats(username);
  return NextResponse.json({ live: Boolean(stats), stats });
}
