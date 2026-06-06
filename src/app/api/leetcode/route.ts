import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://alfa-leetcode-api.onrender.com/praneshs616", {
      next: { revalidate: 3600 }, // Cache for 1 hour to prevent rate limiting
    });

    if (!res.ok) {
      throw new Error(`API returned status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    // If the external API fails (e.g. 429), return a successful 200 response with fallback data
    // This prevents the browser console from throwing a network error
    return NextResponse.json({
      totalSolved: 150,
      ranking: 50000,
      acceptanceRate: 65,
      isFallback: true,
    });
  }
}
