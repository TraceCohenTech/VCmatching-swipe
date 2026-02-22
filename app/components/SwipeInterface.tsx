"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { useApp } from "../context/AppContext";
import { FUNDS, Fund } from "../data/funds";
import FundCard from "./FundCard";

// Parse fund size string to get numeric value (in millions)
function parseFundSize(sizeStr: string): { min: number; max: number } {
  if (sizeStr.includes("< $50M")) return { min: 0, max: 50 };
  if (sizeStr.includes("> $500M")) return { min: 500, max: 10000 };

  const match = sizeStr.match(/\$(\d+)M?\s*-\s*\$(\d+)M?/);
  if (match) {
    return { min: parseInt(match[1]), max: parseInt(match[2]) };
  }
  return { min: 0, max: 10000 };
}

// Check if fund size falls within LP's preferred range
function fundSizeInRange(fundSize: string, lpMin: string, lpMax: string): boolean {
  const fund = parseFundSize(fundSize);
  const prefMin = parseFundSize(lpMin);
  const prefMax = parseFundSize(lpMax);

  // Fund's range should overlap with LP's preferred range
  return fund.min <= prefMax.max && fund.max >= prefMin.min;
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fair scoring algorithm - no bias toward large/established funds
function calculateScore(fund: Fund, lpProfile: NonNullable<ReturnType<typeof useApp>["lpProfile"]>): number {
  let score = 0;
  let maxScore = 0;

  // Stage match (30 points max) - most important
  maxScore += 30;
  const stageMatches = fund.stage.filter((s) => lpProfile.stages.includes(s)).length;
  if (stageMatches > 0) {
    score += Math.min(30, stageMatches * 15);
  }

  // Sector match (30 points max) - weighted by overlap percentage
  maxScore += 30;
  const sectorMatches = fund.sectors.filter((s) => lpProfile.sectors.includes(s)).length;
  if (lpProfile.sectors.length > 0 && fund.sectors.length > 0) {
    const sectorOverlapRatio = sectorMatches / Math.min(fund.sectors.length, lpProfile.sectors.length);
    score += Math.round(sectorOverlapRatio * 30);
  }

  // Geography match (20 points)
  maxScore += 20;
  if (lpProfile.geography.length === 0) {
    score += 20; // No preference = match all
  } else if (lpProfile.geography.includes("Global") || lpProfile.geography.includes(fund.geography)) {
    score += 20;
  }

  // Fund size match (20 points) - respect LP preferences
  maxScore += 20;
  if (fundSizeInRange(fund.fundSize, lpProfile.fundSizeMin, lpProfile.fundSizeMax)) {
    score += 20;
  }

  // Manager preference - ONLY apply if LP has a preference
  // This ensures no inherent bias toward established funds
  if (lpProfile.preferEmerging || lpProfile.preferEstablished) {
    maxScore += 20;
    const isEmerging = fund.tier === "emerging";
    const isEstablished = fund.tier === "established" || fund.tier === "top-tier" || fund.tier === "elite";

    if (lpProfile.preferEmerging && isEmerging) {
      score += 20;
    } else if (lpProfile.preferEstablished && isEstablished) {
      score += 20;
    } else if (lpProfile.preferEmerging && lpProfile.preferEstablished) {
      // Wants both
      score += 20;
    }
  }

  // Normalize to percentage
  return Math.round((score / maxScore) * 100);
}

export default function SwipeInterface() {
  const { lpProfile, deck, addToDeck, addToPassed, passed, setCurrentStep } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Touch handling
  const cardRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchDelta, setTouchDelta] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Filter and score funds based on LP profile
  const rankedFunds = useMemo(() => {
    if (!lpProfile) return FUNDS.map((fund) => ({ fund, score: 50 }));

    return FUNDS.map((fund) => ({
      fund,
      score: calculateScore(fund, lpProfile),
    })).sort((a, b) => b.score - a.score);
  }, [lpProfile]);

  // Filter out already swiped funds
  const availableFunds = rankedFunds.filter(
    ({ fund }) => !deck.find((d) => d.id === fund.id) && !passed.includes(fund.id)
  );

  const currentItem = availableFunds[0];
  const nextItem = availableFunds[1];

  const handleSwipe = useCallback((direction: "left" | "right") => {
    if (isAnimating || !currentItem) return;

    setIsAnimating(true);
    setSwipeDirection(direction);

    setTimeout(() => {
      if (direction === "right") {
        addToDeck(currentItem.fund, currentItem.score);
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
    } else {
      setTouchDelta({ x: 0, y: 0 });
    }
  };

  // Mouse drag handlers for desktop
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
    } else {
      setTouchDelta({ x: 0, y: 0 });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleSwipe("left");
    if (e.key === "ArrowRight") handleSwipe("right");
  };

  // Calculate rotation based on drag
  const rotation = touchDelta.x * 0.05;
  const opacity = Math.max(0.5, 1 - Math.abs(touchDelta.x) / 500);

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">All caught!</h2>
          <p className="text-gray-400 mb-8">
            You&apos;ve reviewed all {FUNDS.length} funds.
            <br />
            You have {deck.length} funds in your deck.
          </p>
          <button
            onClick={() => setCurrentStep("deck")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            View My Deck ({deck.length})
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex flex-col items-center p-4 md:p-6 select-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentStep("form")}
          className="text-gray-400 hover:text-white transition-colors text-sm"
        >
          &larr; Edit Criteria
        </button>
        <h1 className="text-xl font-bold text-white">
          LP <span className="text-blue-400">Matchmaking</span>
        </h1>
        <button
          onClick={() => setCurrentStep("deck")}
          className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors border border-blue-500/30"
        >
          Deck: {deck.length}
        </button>
      </div>

      {/* Progress */}
      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>
            {FUNDS.length - availableFunds.length} / {FUNDS.length} reviewed
          </span>
          <span>{availableFunds.length} remaining</span>
        </div>
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
            style={{
              width: `${((FUNDS.length - availableFunds.length) / FUNDS.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Card Stack */}
      <div
        className="relative flex items-center justify-center flex-1 w-full max-w-[380px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Next card preview */}
        {nextItem && (
          <div
            className="absolute pointer-events-none"
            style={{ transform: "scale(0.95) translateY(10px)", opacity: 0.4 }}
          >
            <FundCard fund={nextItem.fund} score={nextItem.score} />
          </div>
        )}

        {/* Current card */}
        <div
          ref={cardRef}
          className={`absolute cursor-grab active:cursor-grabbing touch-none ${
            swipeDirection === "left" ? "swipe-left" :
            swipeDirection === "right" ? "swipe-right" : ""
          }`}
          style={{
            transform: swipeDirection ? undefined : `translateX(${touchDelta.x}px) rotate(${rotation}deg)`,
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
              className="absolute top-8 right-4 text-red-500 text-2xl font-bold -rotate-12 border-4 border-red-500 px-4 py-2 rounded-xl bg-red-500/10"
              style={{ opacity: Math.min(1, Math.abs(touchDelta.x) / 100) }}
            >
              PASS
            </div>
          )}
          {touchDelta.x > 50 && (
            <div
              className="absolute top-8 left-4 text-cyan-400 text-2xl font-bold rotate-12 border-4 border-cyan-400 px-4 py-2 rounded-xl bg-cyan-500/10"
              style={{ opacity: Math.min(1, Math.abs(touchDelta.x) / 100) }}
            >
              DECK
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6 mt-6 mb-4">
        <button
          onClick={() => handleSwipe("left")}
          disabled={isAnimating}
          className="w-14 h-14 rounded-full bg-gray-800 border-2 border-red-500/50 text-red-400 flex items-center justify-center hover:bg-red-500/20 hover:border-red-400 hover:scale-110 transition-all disabled:opacity-50"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <button
          onClick={() => handleSwipe("right")}
          disabled={isAnimating}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center hover:scale-110 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 border border-blue-400/30"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>

      <p className="text-gray-600 text-xs">
        Swipe or drag cards • Arrow keys work too
      </p>
    </div>
  );
}
