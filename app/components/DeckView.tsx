"use client";

import { useState, useMemo } from "react";
import { useApp, DeckItem } from "../context/AppContext";
import { FUNDS, Fund } from "../data/funds";
import FundCard from "./FundCard";
import PersonalityQuiz from "./PersonalityQuiz";
import FundDetailModal from "./FundDetailModal";
import CompareView from "./CompareView";

function getFullFund(deckItem: DeckItem): Fund | null {
  return FUNDS.find(f => f.id === deckItem.id) || null;
}

type SortOption = "score" | "name" | "fundSize";

const PERSONALITIES = {
  hunter: { name: "Hunter", emoji: "🔥", color: "from-orange-500 to-red-600" },
  architect: { name: "Architect", emoji: "🌿", color: "from-emerald-500 to-green-600" },
  guardian: { name: "Guardian", emoji: "💧", color: "from-blue-500 to-cyan-600" },
};

export default function DeckView() {
  const { deck, removeFromDeck, setCurrentStep, resetSession, analytics, setPersonality, lpProfile } = useApp();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedFund, setSelectedFund] = useState<{ fund: Fund; deckItem: DeckItem } | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("score");

  const personality = lpProfile?.personality;

  // Sort deck
  const processedDeck = useMemo(() => {
    const sorted = [...deck];

    sorted.sort((a, b) => {
      switch (sortBy) {
        case "score":
          return b.score - a.score;
        case "name":
          return a.name.localeCompare(b.name);
        case "fundSize":
          // Parse fund size for sorting
          const sizeA = a.fundSize.includes("$1B") ? 1000 : parseInt(a.fundSize.replace(/\D/g, "")) || 0;
          const sizeB = b.fundSize.includes("$1B") ? 1000 : parseInt(b.fundSize.replace(/\D/g, "")) || 0;
          return sizeB - sizeA;
        default:
          return 0;
      }
    });

    return sorted;
  }, [deck, sortBy]);

  const handleCardClick = (fund: Fund, deckItem: DeckItem) => {
    setSelectedFund({ fund, deckItem });
  };

  const toggleCompare = (fundId: string) => {
    setCompareList(prev => {
      if (prev.includes(fundId)) {
        return prev.filter(id => id !== fundId);
      }
      if (prev.length >= 3) {
        return prev; // Max 3 funds
      }
      return [...prev, fundId];
    });
  };

  const compareFunds = useMemo(() => {
    return compareList
      .map(id => {
        const deckItem = deck.find(d => d.id === id);
        const fund = deckItem ? getFullFund(deckItem) : null;
        if (fund && deckItem) return { fund, deckItem };
        return null;
      })
      .filter(Boolean) as { fund: Fund; deckItem: DeckItem }[];
  }, [compareList, deck]);

  if (showQuiz) {
    return (
      <PersonalityQuiz
        onComplete={(p) => {
          setPersonality(p);
          setShowQuiz(false);
        }}
      />
    );
  }

  if (showCompare) {
    return (
      <CompareView
        funds={compareFunds}
        onRemove={(id) => setCompareList(prev => prev.filter(fid => fid !== id))}
        onClose={() => setShowCompare(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              My <span className="text-blue-400">Deck</span>
            </h1>
            <span className="text-gray-400 text-sm">{deck.length} funds</span>

            {/* Personality Badge */}
            {personality && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${PERSONALITIES[personality].color} text-white text-sm font-medium`}>
                <span>{PERSONALITIES[personality].emoji}</span>
                <span>{PERSONALITIES[personality].name}</span>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentStep("form")}
              className="text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              Edit Criteria
            </button>
            <button
              onClick={() => setCurrentStep("swipe")}
              className="text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              Continue Swiping
            </button>
            <button
              onClick={() => setShowQuiz(true)}
              className="text-purple-400 hover:text-purple-300 text-sm px-3 py-1.5 rounded-lg border border-purple-700 hover:border-purple-500 transition-colors flex items-center gap-1"
            >
              <span>🎮</span> {personality ? "Retake Quiz" : "Personality Quiz"}
            </button>
            <button
              onClick={resetSession}
              className="text-red-400 hover:text-red-300 text-sm px-3 py-1.5 rounded-lg border border-red-700/50 hover:border-red-500 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>

        {deck.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-50">📁</div>
            <h2 className="text-2xl font-bold text-white mb-2">Your deck is empty</h2>
            <p className="text-gray-400 mb-8">
              Swipe right on funds you&apos;re interested in to build your deck
            </p>
            <button
              onClick={() => setCurrentStep("swipe")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              Start Swiping
            </button>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{deck.length}</div>
                <div className="text-gray-500 text-sm">Total Funds</div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                  {deck.length > 0 ? Math.round(deck.reduce((s, d) => s + d.score, 0) / deck.length) : 0}%
                </div>
                <div className="text-gray-500 text-sm">Avg Match</div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                  {deck.filter((f) => f.score >= 80).length}
                </div>
                <div className="text-gray-500 text-sm">Top Matches</div>
              </div>
            </div>

            {/* Sort and Compare Controls */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 focus:border-cyan-500 outline-none"
                >
                  <option value="score">Match Score</option>
                  <option value="name">Name</option>
                  <option value="fundSize">Fund Size</option>
                </select>
              </div>

              {/* Compare Button */}
              <button
                onClick={() => setShowCompare(true)}
                disabled={compareList.length < 2}
                className={`ml-auto flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  compareList.length >= 2
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span>⚖️</span>
                Compare {compareList.length > 0 ? `(${compareList.length})` : ""}
              </button>
            </div>

            {/* Compare instructions */}
            {compareList.length > 0 && compareList.length < 2 && (
              <p className="text-yellow-400 text-sm mb-4">
                Select {2 - compareList.length} more fund{compareList.length === 0 ? "s" : ""} to compare
              </p>
            )}

            {/* Deck Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
              {processedDeck.map((deckItem) => {
                const fullFund = getFullFund(deckItem);
                if (!fullFund) return null;
                const isComparing = compareList.includes(deckItem.id);
                return (
                  <div key={deckItem.id} className="relative group">
                    {/* Compare checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompare(deckItem.id);
                      }}
                      className={`absolute top-3 left-3 z-10 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isComparing
                          ? "bg-purple-600 text-white"
                          : "bg-gray-800/80 text-gray-400 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {isComparing ? "✓" : "+"}
                    </button>

                    {/* Clickable card */}
                    <div onClick={() => handleCardClick(fullFund, deckItem)} className="cursor-pointer">
                      <FundCard
                        fund={fullFund}
                        score={deckItem.score}
                        className={`transform transition-all ${isComparing ? "ring-2 ring-purple-500" : "group-hover:scale-[1.02]"}`}
                      />
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromDeck(deckItem.id);
                        setCompareList(prev => prev.filter(id => id !== deckItem.id));
                      }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-500 z-10"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Export Section */}
            <div className="mt-12 bg-gray-900/80 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Export Your Deck</h3>
              <p className="text-gray-400 mb-4">
                Download your {deck.length} selected funds to continue your research.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const fullData = deck.map(d => getFullFund(d)).filter(Boolean) as Fund[];
                    const csv = [
                      ["Fund", "Stage", "Sectors", "Geography", "Fund Size", "Tier", "Score"].join(","),
                      ...fullData.map((f, i) =>
                        [
                          `"${f.name}"`,
                          `"${f.stage.join(", ")}"`,
                          `"${f.sectors.join(", ")}"`,
                          `"${f.geography}"`,
                          `"${f.fundSize}"`,
                          `"${f.tier}"`,
                          `"${deck[i].score}%"`,
                        ].join(",")
                      ),
                    ].join("\n");

                    const blob = new Blob([csv], { type: "text/csv" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "my-fund-deck.csv";
                    a.click();
                  }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all"
                >
                  Export to CSV
                </button>
                <button
                  onClick={() => {
                    const fullData = deck.map(d => ({ ...getFullFund(d), score: d.score })).filter(f => f.name) as (Fund & { score: number })[];
                    const text = fullData
                      .map((f) =>
                        `${f.name} - ${f.score}% match\n` +
                        `Tier: ${f.tier}\n` +
                        `Stage: ${f.stage.join(", ")}\n` +
                        `Sectors: ${f.sectors.join(", ")}\n` +
                        `Geography: ${f.geography}\n` +
                        `Fund Size: ${f.fundSize}\n`
                      )
                      .join("\n---\n\n");
                    navigator.clipboard.writeText(text);
                    alert("Deck copied to clipboard!");
                  }}
                  className="bg-gray-800 text-white font-bold py-3 px-6 rounded-xl hover:bg-gray-700 transition-all border border-gray-700"
                >
                  Copy to Clipboard
                </button>
              </div>
            </div>

            {/* Analytics Preview */}
            {analytics.totalSwipes > 0 && (
              <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-400 mb-4">Session Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Total Swipes:</span>
                    <span className="text-white ml-2">{analytics.totalSwipes}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Saved:</span>
                    <span className="text-cyan-400 ml-2">{analytics.totalLikes}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Passed:</span>
                    <span className="text-red-400 ml-2">{analytics.totalPasses}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Save Rate:</span>
                    <span className="text-emerald-400 ml-2">
                      {analytics.totalSwipes > 0 ? Math.round((analytics.totalLikes / analytics.totalSwipes) * 100) : 0}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Fund Detail Modal */}
      {selectedFund && (
        <FundDetailModal
          fund={selectedFund.fund}
          score={selectedFund.deckItem.score}
          onClose={() => setSelectedFund(null)}
          onCompare={() => toggleCompare(selectedFund.fund.id)}
          isComparing={compareList.includes(selectedFund.fund.id)}
        />
      )}
    </div>
  );
}
