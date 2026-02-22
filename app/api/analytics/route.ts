import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client (uses env vars from Vercel)
const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  : null;

interface SwipeData {
  lp_id: string;
  lp_type: string;
  fund_id: string;
  fund_name: string;
  action: "like" | "pass";
  score: number;
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
  recentSwipes: Array<{
    lpId: string;
    lpType: string;
    fundId: string;
    fundName: string;
    action: string;
    score: number;
    timestamp: string;
    stages: string[];
    sectors: string[];
  }>;
  lastUpdated: string;
}

// Fallback in-memory storage
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, payload } = body;

    // Always update in-memory for immediate response
    const data = globalForAnalytics.analyticsData;

    if (type === "swipe") {
      const swipe = payload;

      data.totalSwipes++;
      if (swipe.action === "like") {
        data.totalLikes++;
      } else {
        data.totalPasses++;
      }

      if (!data.fundStats[swipe.fundId]) {
        data.fundStats[swipe.fundId] = { likes: 0, passes: 0, name: swipe.fundName };
      }
      if (swipe.action === "like") {
        data.fundStats[swipe.fundId].likes++;
      } else {
        data.fundStats[swipe.fundId].passes++;
      }

      data.lpTypeStats[swipe.lpType] = (data.lpTypeStats[swipe.lpType] || 0) + 1;

      if (swipe.stages) {
        swipe.stages.forEach((stage: string) => {
          data.stageStats[stage] = (data.stageStats[stage] || 0) + 1;
        });
      }

      if (swipe.sectors) {
        swipe.sectors.forEach((sector: string) => {
          data.sectorStats[sector] = (data.sectorStats[sector] || 0) + 1;
        });
      }

      data.recentSwipes.unshift({
        lpId: swipe.lpId,
        lpType: swipe.lpType,
        fundId: swipe.fundId,
        fundName: swipe.fundName,
        action: swipe.action,
        score: swipe.score,
        timestamp: swipe.timestamp || new Date().toISOString(),
        stages: swipe.stages || [],
        sectors: swipe.sectors || [],
      });
      if (data.recentSwipes.length > 100) {
        data.recentSwipes = data.recentSwipes.slice(0, 100);
      }

      data.lastUpdated = new Date().toISOString();

      // Also save to Supabase if connected
      if (supabase) {
        try {
          await supabase.from("swipes").insert({
            lp_id: swipe.lpId,
            lp_type: swipe.lpType,
            fund_id: swipe.fundId,
            fund_name: swipe.fundName,
            action: swipe.action,
            score: swipe.score,
            stages: swipe.stages,
            sectors: swipe.sectors,
            geography: swipe.geography,
            created_at: new Date().toISOString(),
          });
        } catch (e) {
          console.error("Supabase insert error:", e);
        }
      }
    }

    if (type === "session") {
      data.totalSessions++;
      data.lastUpdated = new Date().toISOString();

      if (supabase) {
        try {
          await supabase.from("sessions").insert({
            lp_id: payload.lpId,
            lp_type: payload.lpType,
            created_at: new Date().toISOString(),
          });
        } catch (e) {
          console.error("Supabase session insert error:", e);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json({ success: false, error: "Failed to process" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key !== "lpmatch2024admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Try to get data from Supabase first
  if (supabase) {
    try {
      // Get all swipes
      const { data: swipes, error: swipesError } = await supabase
        .from("swipes")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(100);

      // Get session count
      const { count: sessionCount } = await supabase
        .from("sessions")
        .select("*", { count: "exact", head: true });

      if (!swipesError && swipes) {
        // Build aggregate data from Supabase
        const fundStats: Record<string, { likes: number; passes: number; name: string }> = {};
        const lpTypeStats: Record<string, number> = {};
        const stageStats: Record<string, number> = {};
        const sectorStats: Record<string, number> = {};
        let totalLikes = 0;
        let totalPasses = 0;

        // Get all swipes for stats (not just last 100)
        const { data: allSwipes } = await supabase.from("swipes").select("*");

        (allSwipes || []).forEach((swipe) => {
          if (swipe.action === "like") totalLikes++;
          else totalPasses++;

          if (!fundStats[swipe.fund_id]) {
            fundStats[swipe.fund_id] = { likes: 0, passes: 0, name: swipe.fund_name };
          }
          if (swipe.action === "like") fundStats[swipe.fund_id].likes++;
          else fundStats[swipe.fund_id].passes++;

          lpTypeStats[swipe.lp_type] = (lpTypeStats[swipe.lp_type] || 0) + 1;

          (swipe.stages || []).forEach((stage: string) => {
            stageStats[stage] = (stageStats[stage] || 0) + 1;
          });

          (swipe.sectors || []).forEach((sector: string) => {
            sectorStats[sector] = (sectorStats[sector] || 0) + 1;
          });
        });

        return NextResponse.json({
          totalSwipes: (allSwipes || []).length,
          totalLikes,
          totalPasses,
          totalSessions: sessionCount || 0,
          fundStats,
          lpTypeStats,
          stageStats,
          sectorStats,
          recentSwipes: swipes.map((s) => ({
            lpId: s.lp_id,
            lpType: s.lp_type,
            fundId: s.fund_id,
            fundName: s.fund_name,
            action: s.action,
            score: s.score,
            timestamp: s.created_at,
            stages: s.stages || [],
            sectors: s.sectors || [],
          })),
          lastUpdated: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.error("Supabase fetch error:", e);
    }
  }

  // Fallback to in-memory
  return NextResponse.json(globalForAnalytics.analyticsData);
}
