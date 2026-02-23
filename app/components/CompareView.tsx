"use client";

import { Fund } from "../data/funds";
import { DeckItem } from "../context/AppContext";

interface CompareViewProps {
  funds: { fund: Fund; deckItem: DeckItem }[];
  onRemove: (fundId: string) => void;
  onClose: () => void;
}

const tierConfig = {
  emerging: { label: "Emerging", color: "text-gray-400" },
  established: { label: "Established", color: "text-slate-300" },
  "top-tier": { label: "Top Tier", color: "text-blue-400" },
  elite: { label: "Elite", color: "text-cyan-400" },
};

export default function CompareView({ funds, onRemove, onClose }: CompareViewProps) {
  if (funds.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gray-900 rounded-2xl p-6 max-w-md text-center border border-gray-700" onClick={(e) => e.stopPropagation()}>
          <div className="text-4xl mb-4">⚖️</div>
          <h2 className="text-xl font-bold text-white mb-2">Compare Funds</h2>
          <p className="text-gray-400 mb-4">Select 2-3 funds from your deck to compare side by side.</p>
          <button onClick={onClose} className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
            Got it
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-auto">
      {/* Header */}
      <div className="sticky top-0 bg-gray-950 border-b border-gray-800 p-4 flex justify-between items-center z-10">
        <h2 className="text-xl font-bold text-white">Compare {funds.length} Funds</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-2">
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
              <div key={fund.id} className="bg-gray-900 rounded-xl p-4 border border-gray-700 relative">
                <button
                  onClick={() => onRemove(fund.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/80 text-white rounded-full flex items-center justify-center hover:bg-red-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="font-bold text-white truncate">{fund.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs font-semibold ${tierConfig[fund.tier].color}`}>
                    {tierConfig[fund.tier].label}
                  </span>
                  <span className="text-cyan-400 text-sm font-bold">{deckItem.score}%</span>
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
      <div className="text-gray-500 text-sm font-medium py-2">{label}</div>
      {values.map((value, idx) => (
        <div
          key={idx}
          className={`bg-gray-800/50 rounded-lg p-3 text-gray-300 text-sm ${isLong ? "leading-relaxed" : ""}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
