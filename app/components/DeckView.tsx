"use client";

import { useState, useMemo } from "react";
import { useApp, DeckItem } from "../context/AppContext";
import { FUNDS, Fund } from "../data/funds";
import FundCard from "./FundCard";
import PersonalityQuiz from "./PersonalityQuiz";
import FundDetailModal from "./FundDetailModal";
import CompareView from "./CompareView";
import { useToast } from "./Toast";

function getFullFund(deckItem: DeckItem): Fund | null {
  return FUNDS.find(f => f.id === deckItem.id) || null;
}

type SortOption = "score" | "name" | "fundSize";

const PERSONALITIES = {
  hunter: { name: "Hunter", emoji: "🔥", color: "from-orange-500 to-red-500" },
  architect: { name: "Architect", emoji: "🌿", color: "from-emerald-500 to-green-500" },
  guardian: { name: "Guardian", emoji: "💧", color: "from-blue-500 to-cyan-500" },
};

export default function DeckView() {
  const { deck, removeFromDeck, setCurrentStep, resetSession, analytics, setPersonality, lpProfile } = useApp();
  const { showToast } = useToast();
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedFund, setSelectedFund] = useState<{ fund: Fund; deckItem: DeckItem } | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("score");

  const personality = lpProfile?.personality;

  const processedDeck = useMemo(() => {
    const sorted = [...deck];

    sorted.sort((a, b) => {
      switch (sortBy) {
        case "score":
          return b.score - a.score;
        case "name":
          return a.name.localeCompare(b.name);
        case "fundSize":
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
        return prev;
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
        onCancel={() => setShowQuiz(false)}
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
    <div className="min-h-screen bg-[#0f1419] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 rounded-2xl border border-gray-800/50"
          style={{
            background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
            boxShadow: "8px 8px 16px rgba(0,0,0,0.4)"
          }}
        >
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              My <span className="text-blue-400" style={{ textShadow: "0 0 10px rgba(59,130,246,0.5)" }}>Deck</span>
            </h1>
            <span className="text-gray-400 text-sm">{deck.length} funds</span>

            {personality && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${PERSONALITIES[personality].color} text-white text-sm font-medium`}>
                <span>{PERSONALITIES[personality].emoji}</span>
                <span>{PERSONALITIES[personality].name}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentStep("form")}
              className="neu-btn neu-btn-small"
            >
              Edit Criteria
            </button>
            <button
              onClick={() => setCurrentStep("swipe")}
              className="neu-btn neu-btn-small"
            >
              Continue Swiping
            </button>
            <button
              onClick={() => setShowQuiz(true)}
              className="neu-btn neu-btn-small"
              style={{ background: "linear-gradient(145deg, #c084fc, #9333ea)", color: "white" }}
            >
              🎮 {personality ? "Retake Quiz" : "Personality Quiz"}
            </button>
            <button
              onClick={() => {
                if (window.confirm(`Are you sure? This will delete your ${deck.length} saved funds and reset all criteria.`)) {
                  resetSession();
                }
              }}
              className="neu-btn neu-btn-small neu-btn-danger"
            >
              Start Over
            </button>
          </div>
        </div>

        {deck.length === 0 ? (
          <div className="device-panel p-10 text-center max-w-md mx-auto">
            <div className="screw tl" />
            <div className="screw tr" />
            <div className="screw bl" />
            <div className="screw br" />

            <div className="crt-screen p-6 mb-6">
              <div className="text-5xl mb-2 relative z-10">📁</div>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-2 relative z-10">Deck Empty</h2>
              <p className="text-sm opacity-80 relative z-10">NO FUNDS SAVED YET</p>
            </div>

            <p className="text-gray-400 mb-6">
              Swipe right on funds you&apos;re interested in to build your deck
            </p>
            <button
              onClick={() => setCurrentStep("swipe")}
              className="neu-btn neu-btn-primary w-full"
            >
              Start Swiping
            </button>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="neu-card-inset p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-200">{deck.length}</div>
                <div className="text-gray-400 text-sm">Total Funds</div>
              </div>
              <div className="neu-card-inset p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  {deck.length > 0 ? Math.round(deck.reduce((s, d) => s + d.score, 0) / deck.length) : 0}%
                </div>
                <div className="text-gray-400 text-sm">Avg Match</div>
              </div>
              <div className="neu-card-inset p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                  {deck.filter((f) => f.score >= 80).length}
                </div>
                <div className="text-gray-400 text-sm">Top Matches</div>
              </div>
            </div>

            {/* Sort and Compare Controls */}
            <div
              className="flex flex-wrap items-center gap-3 mb-6 p-3 rounded-xl border border-gray-800/50"
              style={{
                background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                boxShadow: "6px 6px 12px rgba(0,0,0,0.4)"
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="neu-input py-2 text-sm"
                  style={{ width: "auto" }}
                >
                  <option value="score">Match Score</option>
                  <option value="name">Name</option>
                  <option value="fundSize">Fund Size</option>
                </select>
              </div>

              <button
                onClick={() => setShowCompare(true)}
                disabled={compareList.length < 2}
                className={`ml-auto neu-btn neu-btn-small ${compareList.length >= 2 ? "" : "opacity-50 cursor-not-allowed"}`}
                style={compareList.length >= 2 ? { background: "linear-gradient(145deg, #c084fc, #9333ea)", color: "white" } : {}}
              >
                ⚖️ Compare {compareList.length > 0 ? `(${compareList.length})` : ""}
              </button>
            </div>

            {compareList.length > 0 && compareList.length < 2 && (
              <p className="text-amber-600 text-sm mb-4 font-medium">
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
                    {/* Compare checkbox - always visible on mobile */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompare(deckItem.id);
                      }}
                      className={`absolute top-3 left-3 z-10 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isComparing
                          ? "bg-purple-500 text-white"
                          : "bg-gray-900/90 text-gray-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 border border-gray-700"
                      }`}
                      style={{
                        boxShadow: isComparing ? "0 0 12px rgba(168,85,247,0.5)" : "none"
                      }}
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
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600 z-10"
                      style={{ boxShadow: "2px 2px 4px #1a2029" }}
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
            <div
              className="mt-12 p-6 rounded-2xl border border-gray-800/50"
              style={{
                background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                boxShadow: "8px 8px 16px rgba(0,0,0,0.4)"
              }}
            >
              <h3 className="text-xl font-bold text-gray-200 mb-4">Export Your Deck</h3>
              <p className="text-gray-400 mb-4">
                Download your {deck.length} selected funds to continue your research.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const fullData = deck.map(d => getFullFund(d)).filter(Boolean) as Fund[];
                    const csv = [
                      ["Fund", "Score", "Tier", "Fund Size", "Check Size", "Stage", "Sectors", "Geography", "GPs", "Thesis", "Portfolio"].join(","),
                      ...fullData.map((f, i) =>
                        [
                          `"${f.name}"`,
                          `"${deck[i].score}%"`,
                          `"${f.tier}"`,
                          `"${f.fundSize}"`,
                          `"${f.checkSize}"`,
                          `"${f.stage.join(", ")}"`,
                          `"${f.sectors.join(", ")}"`,
                          `"${f.geography}"`,
                          `"${f.gps.map(gp => gp.name).join(", ")}"`,
                          `"${f.thesis.replace(/"/g, '""')}"`,
                          `"${f.notablePortfolio.join(", ")}"`,
                        ].join(",")
                      ),
                    ].join("\n");

                    const blob = new Blob([csv], { type: "text/csv" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "my-fund-deck.csv";
                    a.click();
                    showToast(`Exported ${deck.length} funds to CSV`, "success");
                  }}
                  className="neu-btn neu-btn-primary"
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
                    showToast("Deck copied to clipboard!", "success");
                  }}
                  className="neu-btn"
                >
                  Copy to Clipboard
                </button>
              </div>
            </div>

            {/* Analytics Preview */}
            {analytics.totalSwipes > 0 && (
              <div className="mt-8 neu-card-inset p-6">
                <h3 className="text-lg font-bold text-gray-300 mb-4">Session Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Total Swipes:</span>
                    <span className="text-gray-200 ml-2 font-medium">{analytics.totalSwipes}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Saved:</span>
                    <span className="text-blue-400 ml-2 font-medium">{analytics.totalLikes}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Passed:</span>
                    <span className="text-red-400 ml-2 font-medium">{analytics.totalPasses}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Save Rate:</span>
                    <span className="text-emerald-400 ml-2 font-medium">
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
