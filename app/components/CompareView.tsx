"use client";

import { useEffect } from "react";
import { Fund } from "../data/funds";
import { DeckItem } from "../context/AppContext";

interface CompareViewProps {
  funds: { fund: Fund; deckItem: DeckItem }[];
  onRemove: (fundId: string) => void;
  onClose: () => void;
}

const tierConfig = {
  emerging: { label: "Emerging", color: "text-purple-300" },
  established: { label: "Established", color: "text-blue-300" },
  "top-tier": { label: "Top Tier", color: "text-blue-300" },
  elite: { label: "Elite", color: "text-amber-300" },
};

export default function CompareView({ funds, onRemove, onClose }: CompareViewProps) {
  // Handle Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (funds.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="device-panel p-8 max-w-md text-center" onClick={(e) => e.stopPropagation()}>
          <div className="screw tl" />
          <div className="screw tr" />
          <div className="screw bl" />
          <div className="screw br" />

          <div className="crt-screen p-6 mb-6">
            <div className="text-4xl mb-2 relative z-10">⚖️</div>
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2 relative z-10">Compare Funds</h2>
            <p className="text-sm opacity-80 relative z-10">SELECT 2-3 FUNDS FROM DECK</p>
          </div>

          <button onClick={onClose} className="neu-btn w-full">
            Got it
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0f1419] z-50 overflow-auto">
      {/* Header */}
      <div
        className="sticky top-0 p-4 flex justify-between items-center z-10 border-b border-gray-800/50"
        style={{
          background: "linear-gradient(180deg, #1a1f2a, #0f1419)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
        }}
      >
        <h2 className="text-xl font-bold text-gray-200">Compare {funds.length} Funds</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-200 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 overflow-x-auto">
        <div className="min-w-max">
          {/* Fund Headers */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${funds.length}, minmax(200px, 1fr))` }}>
            <div /> {/* Empty cell for labels */}
            {funds.map(({ fund, deckItem }) => (
              <div
                key={fund.id}
                className="rounded-xl p-4 relative border border-blue-500/30"
                style={{
                  background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.1)"
                }}
              >
                <button
                  onClick={() => onRemove(fund.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                  style={{ boxShadow: "0 0 10px rgba(239,68,68,0.4)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="font-bold text-gray-100 truncate">{fund.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-semibold ${tierConfig[fund.tier].color}`}>
                    {tierConfig[fund.tier].label}
                  </span>
                  <span className="text-blue-400 text-sm font-bold">{deckItem.score}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Rows */}
          <div className="mt-4 space-y-2">
            <CompareRow label="Fund Size" values={funds.map(f => f.fund.fundSize)} />
            <CompareRow label="Check Size" values={funds.map(f => f.fund.checkSize)} />
            <CompareRow label="Geography" values={funds.map(f => f.fund.geography)} />
            <CompareRow label="Stages" values={funds.map(f => f.fund.stage.join(", "))} />
            <CompareRow label="Sectors" values={funds.map(f => f.fund.sectors.join(", "))} />
            <CompareRow label="Thesis" values={funds.map(f => f.fund.thesis)} isLong />
            <CompareRow
              label="GPs"
              values={funds.map(f => f.fund.gps.map(gp => gp.name).join(", "))}
            />
            <CompareRow
              label="Portfolio"
              values={funds.map(f => f.fund.notablePortfolio.join(", ") || "—")}
            />
            <CompareRow
              label="Best For"
              values={funds.map(f => f.fund.lpFit.join(", ") || "—")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareRow({ label, values, isLong = false }: { label: string; values: string[]; isLong?: boolean }) {
  return (
    <div
      className="grid gap-4 items-start"
      style={{ gridTemplateColumns: `200px repeat(${values.length}, minmax(200px, 1fr))` }}
    >
      <div className="text-blue-400 text-sm font-semibold py-2 uppercase tracking-wide" style={{ textShadow: "0 0 8px rgba(59,130,246,0.3)" }}>{label}</div>
      {values.map((value, idx) => (
        <div
          key={idx}
          className={`rounded-lg p-3 text-gray-100 text-sm border border-gray-800/50 ${isLong ? "leading-relaxed" : ""}`}
          style={{
            background: "#0a0f14",
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
