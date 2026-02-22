"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { FUNDS, Fund } from "../data/funds";
import FundCard from "./FundCard";

// Constants
const MAX_MATCHES = 50; // Limit cards shown
const MIN_SCORE = 30; // Minimum match score to show

// Parse fund size string to get numeric value (in millions)
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

// Check if fund size falls within LP's preferred range
function fundSizeInRange(fundSize: string, lpMin: string, lpMax: string): boolean {
  const fund = parseFundSize(fundSize);
  const prefMin = parseFundSize(lpMin);
  const prefMax = parseFundSize(lpMax);
  return fund.min <= prefMax.max && fund.max >= prefMin.min;
}

// Check if fund geography matches LP preference
function geographyMatches(fundGeo: string, lpGeo: string[]): boolean {
  if (lpGeo.length === 0) return true; // No preference = show all
  if (lpGeo.includes("Global")) return true;
  return lpGeo.includes(fundGeo);
}

// Scoring algorithm
function calculateScore(fund: Fund, lpProfile: NonNullable<ReturnType<typeof useApp>["lpProfile"]>): number {
  let score = 0;
  let maxScore = 0;

  // Stage match (40 points max)
  maxScore += 40;
  const stageMatches = fund.stage.filter((s) => lpProfile.stages.includes(s)).length;
  if (stageMatches > 0) {
    score += Math.min(40, stageMatches * 20);
  }

  // Sector match (40 points max)
  maxScore += 40;
  const sectorMatches = fund.sectors.filter((s) => lpProfile.sectors.includes(s)).length;
  if (lpProfile.sectors.length > 0 && fund.sectors.length > 0) {
    const sectorOverlapRatio = sectorMatches / Math.min(fund.sectors.length, lpProfile.sectors.length);
    score += Math.round(sectorOverlapRatio * 40);
  }

  // Geography match (20 points)
  maxScore += 20;
  if (geographyMatches(fund.geography, lpProfile.geography)) {
    score += 20;
  }

  // Manager preference
  if (lpProfile.preferEmerging || lpProfile.preferEstablished) {
    maxScore += 20;
    const isEmerging = fund.tier === "emerging";
    const isEstablished = fund.tier === "established" || fund.tier === "top-tier" || fund.tier === "elite";

    if (lpProfile.preferEmerging && isEmerging) {
      score += 20;
    } else if (lpProfile.preferEstablished && isEstablished) {
      score += 20;
    } else if (lpProfile.preferEmerging && lpProfile.preferEstablished) {
      score += 20;
    }
  }

  return Math.round((score / maxScore) * 100);
}

// Confetti component
function Confetti({ count = 50 }: { count?: number }) {
  const colors = ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 0.5}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}

export default function SwipeInterface() {
  const { lpProfile, deck, addToDeck, addToPassed, passed, setCurrentStep } = useApp();
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | "super" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [superLiked, setSuperLiked] = useState<string[]>([]);

  // Touch handling
  const cardRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchDelta, setTouchDelta] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Filter and score funds based on LP profile
  const rankedFunds = useMemo(() => {
    if (!lpProfile) return FUNDS.slice(0, MAX_MATCHES).map((fund) => ({ fund, score: 50 }));

    // HARD FILTERS: Fund size and geography
    const filtered = FUNDS.filter((fund) => {
      const sizeMatch = fundSizeInRange(fund.fundSize, lpProfile.fundSizeMin, lpProfile.fundSizeMax);
      const geoMatch = geographyMatches(fund.geography, lpProfile.geography);
      return sizeMatch && geoMatch;
    });

    // Score and sort
    const scored = filtered.map((fund) => ({
      fund,
      score: calculateScore(fund, lpProfile),
    }));

    // Filter by minimum score and limit to MAX_MATCHES
    return scored
      .filter(({ score }) => score >= MIN_SCORE)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_MATCHES);
  }, [lpProfile]);

  // Filter out already swiped funds
  const availableFunds = rankedFunds.filter(
    ({ fund }) => !deck.find((d) => d.id === fund.id) && !passed.includes(fund.id)
  );

  const currentItem = availableFunds[0];
  const nextItem = availableFunds[1];
  const thirdItem = availableFunds[2];

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleSwipe = useCallback((direction: "left" | "right" | "super") => {
    if (isAnimating || !currentItem) return;

    setIsAnimating(true);
    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === "right" || direction === "super") {
        addToDeck(currentItem.fund, currentItem.score);
        if (direction === "super") {
          setSuperLiked(prev => [...prev, currentItem.fund.id]);
          triggerConfetti();
        }
        // Trigger confetti for high-score matches
        if (currentItem.score >= 80) {
          triggerConfetti();
        }
      } else {
        addToPassed(currentItem.fund.id, currentItem.fund.name, currentItem.score);
      }
      setSwipeDirection(null);
      setIsAnimating(false);
      setTouchDelta({ x: 0, y: 0 });
    }, 300);
  }, [isAnimating, currentItem, addToDeck, addToPassed]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || isAnimating) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    setTouchDelta({ x: deltaX, y: deltaY });
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTouchStart(null);

    const threshold = 100;
    if (touchDelta.x > threshold) {
      handleSwipe("right");
    } else if (touchDelta.x < -threshold) {
      handleSwipe("left");
    } else if (touchDelta.y < -threshold) {
      handleSwipe("super"); // Swipe up for super like
    } else {
      setTouchDelta({ x: 0, y: 0 });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setTouchStart({ x: e.clientX, y: e.clientY });
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || isAnimating || !isDragging) return;
    const deltaX = e.clientX - touchStart.x;
    const deltaY = e.clientY - touchStart.y;
    setTouchDelta({ x: deltaX, y: deltaY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setTouchStart(null);

    const threshold = 100;
    if (touchDelta.x > threshold) {
      handleSwipe("right");
    } else if (touchDelta.x < -threshold) {
      handleSwipe("left");
    } else if (touchDelta.y < -threshold) {
      handleSwipe("super");
    } else {
      setTouchDelta({ x: 0, y: 0 });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleSwipe("left");
    if (e.key === "ArrowRight") handleSwipe("right");
    if (e.key === "ArrowUp") handleSwipe("super");
  };

  // Calculate rotation based on drag
  const rotation = touchDelta.x * 0.05;
  const opacity = Math.max(0.5, 1 - Math.abs(touchDelta.x) / 500);

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="text-center relative z-10 animate-card-enter">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-black text-white mb-4">All Done!</h2>
          <p className="text-xl text-gray-400 mb-2">
            You reviewed {rankedFunds.length} top matches
          </p>
          <p className="text-2xl text-cyan-400 font-bold mb-8">
            {deck.length} funds in your deck
          </p>
          <button
            onClick={() => setCurrentStep("deck")}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black py-5 px-10 rounded-2xl text-xl hover:from-emerald-400 hover:to-teal-400 transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/30"
          >
            View My Deck 🎯
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gray-950 flex flex-col items-center p-4 md:p-6 select-none relative overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseLeave={handleMouseUp}
    >
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {showConfetti && <Confetti />}

      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mb-4 relative z-10">
        <button
          onClick={() => setCurrentStep("form")}
          className="text-gray-400 hover:text-white transition-colors font-semibold flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Edit
        </button>
        <h1 className="text-2xl font-black text-white">
          LP <span className="text-cyan-400">Match</span>
        </h1>
        <button
          onClick={() => setCurrentStep("deck")}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-xl font-bold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/20"
        >
          Deck: {deck.length}
        </button>
      </div>

      {/* Progress */}
      <div className="w-full max-w-md mb-6 relative z-10">
        <div className="flex justify-between text-sm text-gray-400 mb-2 font-semibold">
          <span>{rankedFunds.length - availableFunds.length} / {rankedFunds.length} reviewed</span>
          <span className="text-cyan-400">{availableFunds.length} remaining</span>
        </div>
        <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-300"
            style={{
              width: `${((rankedFunds.length - availableFunds.length) / rankedFunds.length) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center">
          Showing top {rankedFunds.length} matches (score ≥{MIN_SCORE}%)
        </p>
      </div>

      {/* Card Stack */}
      <div
        className="relative flex items-center justify-center flex-1 w-full max-w-[400px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Third card preview */}
        {thirdItem && (
          <div
            className="absolute pointer-events-none"
            style={{ transform: "scale(0.88) translateY(20px)", opacity: 0.2 }}
          >
            <FundCard fund={thirdItem.fund} score={thirdItem.score} />
          </div>
        )}

        {/* Next card preview */}
        {nextItem && (
          <div
            className="absolute pointer-events-none"
            style={{ transform: "scale(0.94) translateY(10px)", opacity: 0.4 }}
          >
            <FundCard fund={nextItem.fund} score={nextItem.score} />
          </div>
        )}

        {/* Current card */}
        <div
          ref={cardRef}
          className={`absolute cursor-grab active:cursor-grabbing touch-none ${
            swipeDirection === "left" ? "swipe-left" :
            swipeDirection === "right" || swipeDirection === "super" ? "swipe-right" : ""
          } ${swipeDirection === "super" ? "animate-super-like" : ""}`}
          style={{
            transform: swipeDirection ? undefined : `translateX(${touchDelta.x}px) translateY(${touchDelta.y * 0.3}px) rotate(${rotation}deg)`,
            opacity: swipeDirection ? undefined : opacity,
            transition: isDragging ? "none" : "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <FundCard fund={currentItem.fund} score={currentItem.score} />

          {/* Swipe indicators */}
          {touchDelta.x < -50 && (
            <div
              className="absolute top-8 right-4 text-red-500 text-3xl font-black -rotate-12 border-4 border-red-500 px-5 py-2 rounded-2xl bg-red-500/20 backdrop-blur-sm"
              style={{ opacity: Math.min(1, Math.abs(touchDelta.x) / 100) }}
            >
              PASS
            </div>
          )}
          {touchDelta.x > 50 && (
            <div
              className="absolute top-8 left-4 text-cyan-400 text-3xl font-black rotate-12 border-4 border-cyan-400 px-5 py-2 rounded-2xl bg-cyan-500/20 backdrop-blur-sm"
              style={{ opacity: Math.min(1, Math.abs(touchDelta.x) / 100) }}
            >
              DECK
            </div>
          )}
          {touchDelta.y < -50 && (
            <div
              className="absolute top-8 left-1/2 -translate-x-1/2 text-amber-400 text-3xl font-black border-4 border-amber-400 px-5 py-2 rounded-2xl bg-amber-500/20 backdrop-blur-sm"
              style={{ opacity: Math.min(1, Math.abs(touchDelta.y) / 100) }}
            >
              ⭐ SUPER
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-5 mt-6 mb-4 relative z-10">
        <button
          onClick={() => handleSwipe("left")}
          disabled={isAnimating}
          className="w-16 h-16 rounded-full bg-gray-800 border-3 border-red-500/50 text-red-400 flex items-center justify-center hover:bg-red-500/20 hover:border-red-400 hover:scale-110 transition-all disabled:opacity-50 shadow-lg"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe("super")}
          disabled={isAnimating}
          className="w-14 h-14 rounded-full bg-gray-800 border-3 border-amber-500/50 text-amber-400 flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 transition-all disabled:opacity-50 shadow-lg"
        >
          <span className="text-2xl">⭐</span>
        </button>

        <button
          onClick={() => handleSwipe("right")}
          disabled={isAnimating}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center hover:scale-110 transition-all shadow-xl shadow-blue-500/40 disabled:opacity-50 border-2 border-cyan-400/30 animate-glow"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      <p className="text-gray-500 text-sm font-medium relative z-10">
        Swipe or drag • ↑ Super Like • Arrow keys
      </p>
    </div>
  );
}
