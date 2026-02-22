import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client (will use env vars UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN)
const redis = process.env.UPSTASH_REDIS_REST_URL
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

interface SwipeData {
  lpId: string;
  lpType: string;
  fundId: string;
  fundName: string;
  action: "like" | "pass";
  score: number;
  timestamp: string;
  stages: string[];
  sectors: string[];
  geography: string[];
}

interface AggregateData {
  totalSwipes: number;
  totalLikes: number;
  totalPasses: number;
  totalSessions: number;
  fundStats: Record<string, { likes: number; passes: number; name: string }>;
  lpTypeStats: Record<string, number>;
  stageStats: Record<string, number>;
  sectorStats: Record<string, number>;
  recentSwipes: SwipeData[];
  lastUpdated: string;
}

const ANALYTICS_KEY = "lp_matchmaking_analytics";

// Fallback in-memory storage for development
const globalForAnalytics = globalThis as unknown as {
  analyticsData: AggregateData;
};

function getDefaultData(): AggregateData {
  return {
    totalSwipes: 0,
    totalLikes: 0,
    totalPasses: 0,
    totalSessions: 0,
    fundStats: {},
    lpTypeStats: {},
    stageStats: {},
    sectorStats: {},
    recentSwipes: [],
    lastUpdated: new Date().toISOString(),
  };
}

if (!globalForAnalytics.analyticsData) {
  globalForAnalytics.analyticsData = getDefaultData();
}

async function getData(): Promise<AggregateData> {
  if (redis) {
    try {
      const data = await redis.get<AggregateData>(ANALYTICS_KEY);
      return data || getDefaultData();
    } catch (e) {
      console.error("Redis get error:", e);
      return globalForAnalytics.analyticsData;
    }
  }
  return globalForAnalytics.analyticsData;
}

async function saveData(data: AggregateData): Promise<void> {
  if (redis) {
    try {
      await redis.set(ANALYTICS_KEY, data);
    } catch (e) {
      console.error("Redis set error:", e);
    }
  }
  globalForAnalytics.analyticsData = data;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, payload } = body;

    const data = await getData();

    if (type === "swipe") {
      const swipe = payload as SwipeData;

      // Update totals
      data.totalSwipes++;
      if (swipe.action === "like") {
        data.totalLikes++;
      } else {
        data.totalPasses++;
      }

      // Update fund stats
      if (!data.fundStats[swipe.fundId]) {
        data.fundStats[swipe.fundId] = { likes: 0, passes: 0, name: swipe.fundName };
      }
      if (swipe.action === "like") {
        data.fundStats[swipe.fundId].likes++;
      } else {
        data.fundStats[swipe.fundId].passes++;
      }

      // Update LP type stats
      data.lpTypeStats[swipe.lpType] = (data.lpTypeStats[swipe.lpType] || 0) + 1;

      // Update stage stats
      if (swipe.stages) {
        swipe.stages.forEach((stage) => {
          data.stageStats[stage] = (data.stageStats[stage] || 0) + 1;
        });
      }

      // Update sector stats
      if (swipe.sectors) {
        swipe.sectors.forEach((sector) => {
          data.sectorStats[sector] = (data.sectorStats[sector] || 0) + 1;
        });
      }

      // Keep last 100 swipes
      data.recentSwipes.unshift(swipe);
      if (data.recentSwipes.length > 100) {
        data.recentSwipes = data.recentSwipes.slice(0, 100);
      }

      data.lastUpdated = new Date().toISOString();
    }

    if (type === "session") {
      data.totalSessions++;
      data.lastUpdated = new Date().toISOString();
    }

    await saveData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ success: false, error: "Failed to process" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  // Secret key check - change this to your own secret!
  if (key !== "lpmatch2024admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getData();
  return NextResponse.json(data);
}
