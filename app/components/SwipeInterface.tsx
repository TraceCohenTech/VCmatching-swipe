"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { FUNDS, Fund } from "../data/funds";
import FundCard from "./FundCard";
import PersonalityQuiz from "./PersonalityQuiz";
import FundDetailModal from "./FundDetailModal";

// Constants
const MAX_MATCHES = 50;
const MIN_SCORE = 30;

// Shuffle array with seed for consistent randomization per session
function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let seededRandom = seed;

  const random = () => {
    seededRandom = (seededRandom * 9301 + 49297) % 233280;
    return seededRandom / 233280;
  };

  while (currentIndex > 0) {
    const randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
}

// Score breakdown interface
export interface ScoreBreakdown {
  stage: { matched: number; total: number };
  sector: { matched: number; total: number };
  geography: boolean;
  managerType: boolean | null;
}

function parseFundSize(sizeStr: string): { min: number; max: number } {
  if (sizeStr.includes("< $50M")) return { min: 0, max: 50 };
  if (sizeStr.includes("> $1B")) return { min: 1000, max: 100000 };
  if (sizeStr.includes("$500M - $1B")) return { min: 500, max: 1000 };
  if (sizeStr.includes("$200M - $500M")) return { min: 200, max: 500 };
  if (sizeStr.includes("$100M - $200M")) return { min: 100, max: 200 };
  if (sizeStr.includes("$50M - $100M")) return { min: 50, max: 100 };
  const match = sizeStr.match(/\$(\d+)([MB]?)?\s*-\s*\$(\d+)([MB]?)?/);
  if (match) {
    let min = parseInt(match[1]);
    let max = parseInt(match[3]);
    if (match[2] === "B") min *= 1000;
    if (match[4] === "B") max *= 1000;
    return { min, max };
  }
  return { min: 0, max: 100000 };
}

function fundSizeInRange(fundSize: string, lpMin: string, lpMax: string): boolean {
  const fund = parseFundSize(fundSize);
  const prefMin = parseFundSize(lpMin);
  const prefMax = parseFundSize(lpMax);
  return fund.min <= prefMax.max && fund.max >= prefMin.min;
}

function geographyMatches(fundGeo: string, lpGeo: string[]): boolean {
  if (lpGeo.length === 0) return true;
  if (lpGeo.includes("Global")) return true;
  return lpGeo.includes(fundGeo);
}

function calculateScore(fund: Fund, lpProfile: NonNullable<ReturnType<typeof useApp>["lpProfile"]>): { score: number; breakdown: ScoreBreakdown } {
  let score = 0;
  let maxScore = 0;

  maxScore += 40;
  const stageMatches = fund.stage.filter((s) => lpProfile.stages.includes(s)).length;
  if (stageMatches > 0) {
    score += Math.min(40, stageMatches * 20);
  }

  maxScore += 40;
  const sectorMatches = fund.sectors.filter((s) => lpProfile.sectors.includes(s)).length;
  if (lpProfile.sectors.length > 0 && fund.sectors.length > 0) {
    const sectorOverlapRatio = sectorMatches / Math.min(fund.sectors.length, lpProfile.sectors.length);
    score += Math.round(sectorOverlapRatio * 40);
  }

  maxScore += 20;
  const geoMatch = geographyMatches(fund.geography, lpProfile.geography);
  if (geoMatch) {
    score += 20;
  }

  let managerTypeMatch: boolean | null = null;
  if (lpProfile.preferEmerging || lpProfile.preferEstablished) {
    maxScore += 20;
    const isEmerging = fund.tier === "emerging";
    const isEstablished = fund.tier === "established" || fund.tier === "top-tier" || fund.tier === "elite";
    if (lpProfile.preferEmerging && isEmerging) {
      score += 20;
      managerTypeMatch = true;
    } else if (lpProfile.preferEstablished && isEstablished) {
      score += 20;
      managerTypeMatch = true;
    } else if (lpProfile.preferEmerging && lpProfile.preferEstablished) {
      score += 20;
      managerTypeMatch = true;
    } else {
      managerTypeMatch = false;
    }
  }

  if (lpProfile.personality) {
    maxScore += 15;
    const isEarlyStage = fund.stage.some(s => s === "Pre-seed" || s === "Seed");
    const isEmerging = fund.tier === "emerging";
    const isElite = fund.tier === "elite" || fund.tier === "top-tier";

    if (lpProfile.personality === "hunter") {
      if (isEmerging) score += 10;
      if (isEarlyStage) score += 5;
    } else if (lpProfile.personality === "architect") {
      if (fund.tier === "established" || fund.tier === "top-tier") score += 10;
      if (fund.stage.includes("Series A")) score += 5;
    } else if (lpProfile.personality === "guardian") {
      if (isElite) score += 15;
    }
  }

  return {
    score: Math.round((score / maxScore) * 100),
    breakdown: {
      stage: { matched: stageMatches, total: lpProfile.stages.length },
      sector: { matched: sectorMatches, total: lpProfile.sectors.length },
      geography: geoMatch,
      managerType: managerTypeMatch,
    },
  };
}

function triggerHaptic(type: "light" | "medium" | "heavy" = "medium") {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    const durations = { light: 10, medium: 25, heavy: 50 };
    navigator.vibrate(durations[type]);
  }
}

export default function SwipeInterface() {
  const { lpProfile, deck, addToDeck, addToPassed, passed, setCurrentStep, removeFromDeck, removeFromPassed, setPersonality } = useApp();
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | "super" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastSwipe, setLastSwipe] = useState<{ fundId: string; action: "like" | "pass" } | null>(null);
  const [showMatchCount, setShowMatchCount] = useState(true);
  const [selectedFundDetail, setSelectedFundDetail] = useState<{ fund: Fund; score: number; breakdown: ScoreBreakdown } | null>(null);
  const [showPassedFunds, setShowPassedFunds] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchDelta, setTouchDelta] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const rankedFunds = useMemo(() => {
    const seed = lpProfile ? new Date(lpProfile.createdAt).getTime() : Date.now();

    if (!lpProfile) {
      const shuffled = shuffleArray(FUNDS.slice(0, MAX_MATCHES), seed);
      return shuffled.map((fund) => ({
        fund,
        score: 50,
        breakdown: { stage: { matched: 0, total: 0 }, sector: { matched: 0, total: 0 }, geography: true, managerType: null } as ScoreBreakdown
      }));
    }

    const filtered = FUNDS.filter((fund) => {
      const sizeMatch = fundSizeInRange(fund.fundSize, lpProfile.fundSizeMin, lpProfile.fundSizeMax);
      const geoMatch = geographyMatches(fund.geography, lpProfile.geography);
      return sizeMatch && geoMatch;
    });

    const scored = filtered.map((fund) => {
      const { score, breakdown } = calculateScore(fund, lpProfile);
      return { fund, score, breakdown };
    });

    const passing = scored.filter(({ score }) => score >= MIN_SCORE);
    const buckets: Map<number, typeof passing> = new Map();

    passing.forEach((item) => {
      const bucket = Math.floor(item.score / 10) * 10;
      if (!buckets.has(bucket)) buckets.set(bucket, []);
      buckets.get(bucket)!.push(item);
    });

    const sortedBuckets = Array.from(buckets.entries()).sort((a, b) => b[0] - a[0]);
    const result: typeof passing = [];

    sortedBuckets.forEach(([, items]) => {
      result.push(...shuffleArray(items, seed));
    });

    return result.slice(0, MAX_MATCHES);
  }, [lpProfile]);

  const availableFunds = rankedFunds.filter(
    ({ fund }) => !deck.find((d) => d.id === fund.id) && !passed.includes(fund.id)
  );

  const currentItem = availableFunds[0];
  const nextItem = availableFunds[1];
  const thirdItem = availableFunds[2];

  const handleSwipe = useCallback((direction: "left" | "right" | "super") => {
    if (isAnimating || !currentItem) return;

    triggerHaptic(direction === "right" || direction === "super" ? "medium" : "light");

    setIsAnimating(true);
    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === "right" || direction === "super") {
        addToDeck(currentItem.fund, currentItem.score);
        setLastSwipe({ fundId: currentItem.fund.id, action: "like" });
      } else {
        addToPassed(currentItem.fund.id, currentItem.fund.name, currentItem.score);
        setLastSwipe({ fundId: currentItem.fund.id, action: "pass" });
      }
      setSwipeDirection(null);
      setIsAnimating(false);
      setTouchDelta({ x: 0, y: 0 });
    }, 300);
  }, [isAnimating, currentItem, addToDeck, addToPassed]);

  const handleUndo = useCallback(() => {
    if (!lastSwipe) return;
    if (lastSwipe.action === "like") {
      removeFromDeck(lastSwipe.fundId);
    } else {
      removeFromPassed(lastSwipe.fundId);
    }
    setLastSwipe(null);
  }, [lastSwipe, removeFromDeck, removeFromPassed]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || isAnimating) return;
    const touch = e.touches[0];
    setTouchDelta({ x: touch.clientX - touchStart.x, y: touch.clientY - touchStart.y });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTouchStart(null);
    const threshold = 100;
    if (touchDelta.x > threshold) handleSwipe("right");
    else if (touchDelta.x < -threshold) handleSwipe("left");
    else if (touchDelta.y < -threshold) handleSwipe("super");
    else setTouchDelta({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setTouchStart({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || isAnimating || !isDragging) return;
    setTouchDelta({ x: e.clientX - touchStart.x, y: e.clientY - touchStart.y });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTouchStart(null);
    const threshold = 100;
    if (touchDelta.x > threshold) handleSwipe("right");
    else if (touchDelta.x < -threshold) handleSwipe("left");
    else if (touchDelta.y < -threshold) handleSwipe("super");
    else setTouchDelta({ x: 0, y: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleSwipe("left");
    if (e.key === "ArrowRight") handleSwipe("right");
    if (e.key === "ArrowUp") handleSwipe("super");
  };

  const rotation = touchDelta.x * 0.05;
  const opacity = Math.max(0.5, 1 - Math.abs(touchDelta.x) / 500);

  const totalReviewed = rankedFunds.length - availableFunds.length;
  const rightSwipes = deck.length;
  const leftSwipes = totalReviewed - rightSwipes;
  const selectivityPct = totalReviewed > 0 ? Math.round((leftSwipes / totalReviewed) * 100) : 0;
  const avgScore = deck.length > 0 ? Math.round(deck.reduce((sum, d) => sum + d.score, 0) / deck.length) : 0;

  if (showQuiz) {
    return (
      <PersonalityQuiz
        onComplete={(personality) => {
          setPersonality(personality);
          setShowQuiz(false);
          setCurrentStep("deck");
        }}
        onCancel={() => setShowQuiz(false)}
      />
    );
  }

  // No matches state
  if (rankedFunds.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f1419] flex items-center justify-center p-4">
        <div className="device-panel p-8 max-w-md w-full text-center">
          <div className="screw tl" />
          <div className="screw tr" />
          <div className="screw bl" />
          <div className="screw br" />

          <div className="crt-screen p-6 mb-6">
            <div className="text-4xl mb-2 relative z-10">🔍</div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 relative z-10">No Matches Found</h2>
            <p className="text-sm opacity-80 relative z-10">CRITERIA TOO NARROW</p>
          </div>

          <div className="neu-card-inset p-4 mb-6 text-left">
            <p className="text-sm text-gray-300 mb-3 font-semibold">Suggestions:</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Add more stages</li>
              <li>• Expand sector focus</li>
              <li>• Widen fund size range</li>
              <li>• Include more geographies</li>
            </ul>
          </div>

          <button onClick={() => setCurrentStep("form")} className="neu-btn neu-btn-primary w-full">
            Edit Criteria
          </button>
        </div>
      </div>
    );
  }

  // Match count intro
  if (showMatchCount && rankedFunds.length > 0 && totalReviewed === 0) {
    return (
      <div className="min-h-screen bg-[#0f1419] flex items-center justify-center p-4">
        <div className="device-panel p-8 max-w-md w-full text-center">
          <div className="screw tl" />
          <div className="screw tr" />
          <div className="screw bl" />
          <div className="screw br" />

          <div className="led active animate-led-pulse absolute top-6 right-6" />

          <div className="crt-screen p-6 mb-6">
            <div className="text-4xl mb-2 relative z-10">🎯</div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 animate-text-pulse relative z-10">
              {rankedFunds.length} Matches Found
            </h2>
            <p className="text-sm opacity-80 relative z-10">READY TO BEGIN MATCHING</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="neu-card-inset p-3 text-center">
              <div className="text-xl font-bold text-blue-400">{rankedFunds.filter(f => f.score >= 80).length}</div>
              <div className="text-xs text-gray-400">80%+ Match</div>
            </div>
            <div className="neu-card-inset p-3 text-center">
              <div className="text-xl font-bold text-blue-400">{rankedFunds.filter(f => f.score >= 60 && f.score < 80).length}</div>
              <div className="text-xs text-gray-400">60-79%</div>
            </div>
            <div className="neu-card-inset p-3 text-center">
              <div className="text-xl font-bold text-emerald-400">{Math.round(rankedFunds.reduce((s, f) => s + f.score, 0) / rankedFunds.length)}%</div>
              <div className="text-xs text-gray-400">Avg Score</div>
            </div>
          </div>

          <button onClick={() => setShowMatchCount(false)} className="neu-btn neu-btn-primary w-full mb-3">
            Start Swiping
          </button>
          <button onClick={() => setCurrentStep("form")} className="text-gray-400 hover:text-gray-200 text-sm">
            ← Edit Criteria
          </button>
        </div>
      </div>
    );
  }

  // Completion screen
  if (!currentItem) {
    return (
      <div className="min-h-screen bg-[#0f1419] flex items-center justify-center p-4">
        <div className="device-panel p-8 max-w-md w-full">
          <div className="screw tl" />
          <div className="screw tr" />
          <div className="screw bl" />
          <div className="screw br" />

          <div className="crt-screen p-6 mb-6 text-center">
            <div className="text-4xl mb-2 relative z-10">✅</div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 animate-text-pulse relative z-10">
              Swiping Complete
            </h2>
            <p className="text-sm opacity-80 relative z-10">REVIEWED {rankedFunds.length} FUNDS</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="neu-card-inset p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{deck.length}</div>
              <div className="text-xs text-gray-400">Saved</div>
            </div>
            <div className="neu-card-inset p-4 text-center">
              <div className="text-2xl font-bold text-gray-300">{leftSwipes}</div>
              <div className="text-xs text-gray-400">Passed</div>
            </div>
            <div className="neu-card-inset p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{selectivityPct}%</div>
              <div className="text-xs text-gray-400">Selectivity</div>
            </div>
            <div className="neu-card-inset p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{avgScore}%</div>
              <div className="text-xs text-gray-400">Avg Match</div>
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={() => setCurrentStep("deck")} className="neu-btn neu-btn-primary w-full">
              View My Deck ({deck.length})
            </button>
            <button
              onClick={() => setShowQuiz(true)}
              className="neu-btn w-full"
              style={{ background: "linear-gradient(145deg, #c084fc, #9333ea)", color: "white" }}
            >
              🎮 Take Personality Quiz
            </button>
            <button onClick={() => setCurrentStep("form")} className="neu-btn w-full">
              Edit Criteria
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main swipe interface
  return (
    <div
      className="min-h-screen bg-[#0f1419] flex flex-col items-center p-4 md:p-6 select-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <div
        className="w-full max-w-md flex justify-between items-center mb-4 p-3 rounded-xl border border-gray-800/50"
        style={{
          background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
          boxShadow: "8px 8px 16px rgba(0,0,0,0.4)"
        }}
      >
        <button
          onClick={() => setCurrentStep("form")}
          className="text-gray-400 hover:text-blue-400 transition-colors font-medium text-sm flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Edit
        </button>
        <h1 className="text-lg font-black text-white">
          LP <span className="text-blue-400" style={{ textShadow: "0 0 10px rgba(59,130,246,0.5)" }}>Match</span>
        </h1>
        <button
          onClick={() => setCurrentStep("deck")}
          className="neu-btn neu-btn-primary neu-btn-small"
        >
          Deck: {deck.length}
        </button>
      </div>

      {/* Progress */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>{totalReviewed} / {rankedFunds.length} reviewed</span>
          <span className="text-blue-400">{availableFunds.length} remaining</span>
        </div>
        <div className="neu-progress h-3">
          <div
            className="neu-progress-bar"
            style={{ width: `${(totalReviewed / rankedFunds.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Done Early Button */}
      {deck.length > 0 && (
        <button
          onClick={() => setCurrentStep("deck")}
          className="mb-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Done? View your {deck.length} saved funds →
        </button>
      )}

      {/* Passed Funds Recovery */}
      {passed.length > 0 && (
        <div className="mb-4 w-full max-w-md">
          <button
            onClick={() => setShowPassedFunds(!showPassedFunds)}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1"
          >
            <svg
              className={`w-3 h-3 transition-transform ${showPassedFunds ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {passed.length} passed funds
          </button>

          {showPassedFunds && (
            <div className="mt-2 p-3 rounded-xl bg-gray-900/50 border border-gray-800 max-h-32 overflow-y-auto">
              <div className="space-y-1">
                {passed.slice().reverse().slice(0, 10).map(fundId => {
                  const fundData = rankedFunds.find(r => r.fund.id === fundId);
                  if (!fundData) return null;
                  return (
                    <div key={fundId} className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 truncate flex-1">{fundData.fund.name}</span>
                      <button
                        onClick={() => {
                          removeFromPassed(fundId);
                        }}
                        className="text-blue-400 hover:text-blue-300 ml-2 font-medium"
                      >
                        Restore
                      </button>
                    </div>
                  );
                })}
                {passed.length > 10 && (
                  <p className="text-gray-500 text-xs">+{passed.length - 10} more</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Card Stack */}
      <div
        className="relative flex items-center justify-center flex-1 w-full max-w-[400px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {thirdItem && (
          <div
            className="absolute pointer-events-none"
            style={{ transform: "scale(0.88) translateY(20px)", opacity: 0.2 }}
          >
            <FundCard fund={thirdItem.fund} score={thirdItem.score} breakdown={thirdItem.breakdown} />
          </div>
        )}

        {nextItem && (
          <div
            className="absolute pointer-events-none"
            style={{ transform: "scale(0.94) translateY(10px)", opacity: 0.4 }}
          >
            <FundCard fund={nextItem.fund} score={nextItem.score} breakdown={nextItem.breakdown} />
          </div>
        )}

        <div
          ref={cardRef}
          className={`absolute cursor-grab active:cursor-grabbing touch-none ${
            swipeDirection === "left" ? "swipe-left" :
            swipeDirection === "right" || swipeDirection === "super" ? "swipe-right" : ""
          }`}
          style={{
            transform: swipeDirection ? undefined : `translateX(${touchDelta.x}px) translateY(${touchDelta.y * 0.3}px) rotate(${rotation}deg)`,
            opacity: swipeDirection ? undefined : opacity,
            transition: isDragging ? "none" : "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onClick={() => {
            if (Math.abs(touchDelta.x) < 10 && Math.abs(touchDelta.y) < 10 && !isDragging) {
              setSelectedFundDetail(currentItem);
            }
          }}
        >
          <FundCard fund={currentItem.fund} score={currentItem.score} breakdown={currentItem.breakdown} />

          {/* Tap hint */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 text-blue-300 text-xs flex items-center gap-1 px-3 py-1.5 rounded-full border border-blue-500/30"
            style={{ background: "rgba(15, 20, 25, 0.95)", boxShadow: "0 0 10px rgba(59,130,246,0.2)" }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Tap for details
          </div>

          {touchDelta.x < -50 && (
            <div
              className="absolute top-8 right-4 text-red-400 text-2xl font-black -rotate-12 border-4 border-red-400 px-4 py-1 rounded-xl"
              style={{
                opacity: Math.min(1, Math.abs(touchDelta.x) / 100),
                background: "rgba(127,29,29,0.8)",
                boxShadow: "0 0 20px rgba(239,68,68,0.5)"
              }}
            >
              PASS
            </div>
          )}
          {touchDelta.x > 50 && (
            <div
              className="absolute top-8 left-4 text-blue-300 text-2xl font-black rotate-12 border-4 border-blue-400 px-4 py-1 rounded-xl"
              style={{
                opacity: Math.min(1, Math.abs(touchDelta.x) / 100),
                background: "rgba(13,78,68,0.8)",
                boxShadow: "0 0 20px rgba(59,130,246,0.5)"
              }}
            >
              SAVE
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 md:gap-5 mt-6 mb-4">
        {/* Undo button */}
        <button
          onClick={handleUndo}
          disabled={!lastSwipe || isAnimating}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105"
          style={{
            background: "linear-gradient(145deg, #f59e0b, #d97706)",
            boxShadow: "0 0 15px rgba(245,158,11,0.3)",
            color: "white"
          }}
          title="Undo last swipe"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe("left")}
          disabled={isAnimating}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center disabled:opacity-50 transition-all active:scale-95 hover:scale-105"
          style={{
            background: "linear-gradient(145deg, #ef4444, #dc2626)",
            boxShadow: "0 0 20px rgba(239,68,68,0.4)",
            color: "white"
          }}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe("right")}
          disabled={isAnimating}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center disabled:opacity-50 transition-all active:scale-95 hover:scale-105"
          style={{
            background: "linear-gradient(145deg, #3b82f6, #2563eb)",
            boxShadow: "0 0 25px rgba(59,130,246,0.5)",
            color: "white"
          }}
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>

      <p className="text-gray-400 text-xs">
        Swipe or drag • Tap card for details • Arrow keys work too
      </p>

      {/* Fund Detail Modal */}
      {selectedFundDetail && (
        <FundDetailModal
          fund={selectedFundDetail.fund}
          score={selectedFundDetail.score}
          breakdown={selectedFundDetail.breakdown}
          onClose={() => setSelectedFundDetail(null)}
        />
      )}
    </div>
  );
}
