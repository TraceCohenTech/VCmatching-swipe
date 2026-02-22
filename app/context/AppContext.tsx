"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Fund } from "../data/funds";

export interface LPProfile {
  id: string;
  type: string;
  stages: string[];
  sectors: string[];
  geography: string[];
  fundSizeMin: string;
  fundSizeMax: string;
  preferEmerging: boolean;
  preferEstablished: boolean;
  createdAt: string;
}

export interface SwipeEvent {
  id: string;
  lpId: string;
  fundId: string;
  fundName: string;
  action: "like" | "pass";
  score: number;
  timestamp: string;
  lpType: string;
  lpStages: string[];
  lpSectors: string[];
}

interface Analytics {
  totalSessions: number;
  totalSwipes: number;
  totalLikes: number;
  totalPasses: number;
  swipeEvents: SwipeEvent[];
  lpProfiles: LPProfile[];
}

export type LPProfileInput = Omit<LPProfile, "id" | "createdAt">;

interface AppContextType {
  lpProfile: LPProfile | null;
  setLPProfile: (profile: LPProfileInput) => void;
  deck: Fund[];
  addToDeck: (fund: Fund, score: number) => void;
  removeFromDeck: (fundId: string) => void;
  passed: string[];
  addToPassed: (fundId: string, fundName: string, score: number) => void;
  currentStep: "form" | "swipe" | "deck";
  setCurrentStep: (step: "form" | "swipe" | "deck") => void;
  resetSession: () => void;
  analytics: Analytics;
}

const ANALYTICS_KEY = "lp_matchmaking_analytics";

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function loadAnalytics(): Analytics {
  if (typeof window === "undefined") {
    return { totalSessions: 0, totalSwipes: 0, totalLikes: 0, totalPasses: 0, swipeEvents: [], lpProfiles: [] };
  }
  try {
    const stored = localStorage.getItem(ANALYTICS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load analytics", e);
  }
  return { totalSessions: 0, totalSwipes: 0, totalLikes: 0, totalPasses: 0, swipeEvents: [], lpProfiles: [] };
}

function saveAnalytics(analytics: Analytics): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
  } catch (e) {
    console.error("Failed to save analytics", e);
  }
}

// Send analytics to server for global tracking
async function sendToServer(type: "swipe" | "session", payload: Record<string, unknown>): Promise<void> {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, payload }),
    });
  } catch (e) {
    // Silently fail - don't break UX for analytics
    console.error("Failed to send analytics to server", e);
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lpProfile, setLPProfileState] = useState<LPProfile | null>(null);
  const [deck, setDeck] = useState<Fund[]>([]);
  const [passed, setPassed] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<"form" | "swipe" | "deck">("form");
  const [analytics, setAnalytics] = useState<Analytics>(loadAnalytics);

  // Load analytics on mount
  useEffect(() => {
    setAnalytics(loadAnalytics());
  }, []);

  const setLPProfile = (profile: Omit<LPProfile, "id" | "createdAt">) => {
    const fullProfile: LPProfile = {
      ...profile,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    setLPProfileState(fullProfile);

    // Track new session locally
    const newAnalytics = {
      ...analytics,
      totalSessions: analytics.totalSessions + 1,
      lpProfiles: [...analytics.lpProfiles, fullProfile],
    };
    setAnalytics(newAnalytics);
    saveAnalytics(newAnalytics);

    // Send to server for global tracking
    sendToServer("session", { lpId: fullProfile.id, lpType: profile.type });
  };

  const addToDeck = (fund: Fund, score: number) => {
    setDeck((prev) => {
      if (prev.find((f) => f.id === fund.id)) return prev;
      return [...prev, fund];
    });

    if (lpProfile) {
      const event: SwipeEvent = {
        id: generateId(),
        lpId: lpProfile.id,
        fundId: fund.id,
        fundName: fund.name,
        action: "like",
        score,
        timestamp: new Date().toISOString(),
        lpType: lpProfile.type,
        lpStages: lpProfile.stages,
        lpSectors: lpProfile.sectors,
      };

      // Local tracking
      const newAnalytics = {
        ...analytics,
        totalSwipes: analytics.totalSwipes + 1,
        totalLikes: analytics.totalLikes + 1,
        swipeEvents: [...analytics.swipeEvents, event],
      };
      setAnalytics(newAnalytics);
      saveAnalytics(newAnalytics);

      // Send to server for global tracking
      sendToServer("swipe", {
        lpId: lpProfile.id,
        lpType: lpProfile.type,
        fundId: fund.id,
        fundName: fund.name,
        action: "like",
        score,
        timestamp: event.timestamp,
        stages: lpProfile.stages,
        sectors: lpProfile.sectors,
        geography: lpProfile.geography,
      });
    }
  };

  const removeFromDeck = (fundId: string) => {
    setDeck((prev) => prev.filter((f) => f.id !== fundId));
  };

  const addToPassed = (fundId: string, fundName: string, score: number) => {
    setPassed((prev) => {
      if (prev.includes(fundId)) return prev;
      return [...prev, fundId];
    });

    if (lpProfile) {
      const event: SwipeEvent = {
        id: generateId(),
        lpId: lpProfile.id,
        fundId,
        fundName,
        action: "pass",
        score,
        timestamp: new Date().toISOString(),
        lpType: lpProfile.type,
        lpStages: lpProfile.stages,
        lpSectors: lpProfile.sectors,
      };

      // Local tracking
      const newAnalytics = {
        ...analytics,
        totalSwipes: analytics.totalSwipes + 1,
        totalPasses: analytics.totalPasses + 1,
        swipeEvents: [...analytics.swipeEvents, event],
      };
      setAnalytics(newAnalytics);
      saveAnalytics(newAnalytics);

      // Send to server for global tracking
      sendToServer("swipe", {
        lpId: lpProfile.id,
        lpType: lpProfile.type,
        fundId,
        fundName,
        action: "pass",
        score,
        timestamp: event.timestamp,
        stages: lpProfile.stages,
        sectors: lpProfile.sectors,
        geography: lpProfile.geography,
      });
    }
  };

  const resetSession = () => {
    setLPProfileState(null);
    setDeck([]);
    setPassed([]);
    setCurrentStep("form");
  };

  return (
    <AppContext.Provider
      value={{
        lpProfile,
        setLPProfile,
        deck,
        addToDeck,
        removeFromDeck,
        passed,
        addToPassed,
        currentStep,
        setCurrentStep,
        resetSession,
        analytics,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
