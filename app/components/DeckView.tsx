"use client";

import { useApp } from "../context/AppContext";
import FundCard from "./FundCard";

export default function DeckView() {
  const { deck, removeFromDeck, setCurrentStep, resetSession, analytics } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-4 md:p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentStep("swipe")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              &larr; Back
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              My <span className="text-blue-400">Deck</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-400">{deck.length} funds</span>
            <button
              onClick={resetSession}
              className="text-gray-500 hover:text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>

        {deck.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 opacity-50">&#127183;</div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{deck.length}</div>
                <div className="text-gray-500 text-sm">Total Funds</div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400">
                  {deck.filter((f) => f.tier === "elite").length}
                </div>
                <div className="text-gray-500 text-sm">Elite</div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  {deck.filter((f) => f.tier === "top-tier").length}
                </div>
                <div className="text-gray-500 text-sm">Top Tier</div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-300">
                  {[...new Set(deck.flatMap((f) => f.sectors))].length}
                </div>
                <div className="text-gray-500 text-sm">Sectors</div>
              </div>
            </div>

            {/* Deck Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
              {deck.map((fund) => (
                <div key={fund.id} className="relative group">
                  <FundCard fund={fund} className="transform group-hover:scale-[1.02] transition-transform" />
                  <button
                    onClick={() => removeFromDeck(fund.id)}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-red-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-500"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
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
                    const csv = [
                      ["Fund", "Firm", "Stage", "Sectors", "Geography", "Fund Size", "Check Size", "GPs", "Tier"].join(","),
                      ...deck.map((f) =>
                        [
                          `"${f.name}"`,
                          `"${f.firm}"`,
                          `"${f.stage.join(", ")}"`,
                          `"${f.sectors.join(", ")}"`,
                          `"${f.geography}"`,
                          `"${f.fundSize}"`,
                          `"${f.checkSize}"`,
                          `"${f.gps.map((g) => g.name).join(", ")}"`,
                          `"${f.tier}"`,
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
                    const text = deck
                      .map(
                        (f) =>
                          `${f.name} (${f.fundNumber})\n` +
                          `Tier: ${f.tier}\n` +
                          `Stage: ${f.stage.join(", ")}\n` +
                          `Sectors: ${f.sectors.join(", ")}\n` +
                          `GPs: ${f.gps.map((g) => g.name).join(", ")}\n` +
                          `Thesis: ${f.thesis}\n`
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

            {/* Analytics Preview (Admin) */}
            {analytics.totalSwipes > 0 && (
              <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-400 mb-4">Session Analytics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Total Sessions:</span>
                    <span className="text-white ml-2">{analytics.totalSessions}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Total Swipes:</span>
                    <span className="text-white ml-2">{analytics.totalSwipes}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Likes:</span>
                    <span className="text-cyan-400 ml-2">{analytics.totalLikes}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Passes:</span>
                    <span className="text-red-400 ml-2">{analytics.totalPasses}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const data = JSON.stringify(analytics, null, 2);
                    const blob = new Blob([data], { type: "application/json" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "lp-matchmaking-analytics.json";
                    a.click();
                  }}
                  className="mt-4 text-sm text-gray-500 hover:text-white transition-colors underline"
                >
                  Download Full Analytics
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
