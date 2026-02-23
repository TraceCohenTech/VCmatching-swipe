"use client";

import { Fund } from "../data/funds";
import { ScoreBreakdown } from "./SwipeInterface";

interface FundDetailModalProps {
  fund: Fund;
  score?: number;
  breakdown?: ScoreBreakdown;
  onClose: () => void;
  onCompare?: () => void;
  isComparing?: boolean;
}

const tierConfig = {
  emerging: {
    badge: "bg-gray-700 text-gray-300",
    label: "Emerging",
  },
  established: {
    badge: "bg-slate-600 text-slate-200",
    label: "Established",
  },
  "top-tier": {
    badge: "bg-blue-600 text-white",
    label: "Top Tier",
  },
  elite: {
    badge: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    label: "Elite",
  },
};

export default function FundDetailModal({ fund, score, breakdown, onClose, onCompare, isComparing }: FundDetailModalProps) {
  const tier = tierConfig[fund.tier];

  // Generate a search URL for the fund
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(fund.name + " venture capital")}`;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-white">{fund.name}</h2>
            <p className="text-gray-400 text-sm">{fund.fundNumber}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.badge}`}>
              {tier.label}
            </span>
            <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-5">
          {/* Score */}
          {score !== undefined && (
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-4 border border-cyan-700/50">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Match Score</span>
                <span className="text-3xl font-black text-cyan-400">{score}%</span>
              </div>
              {breakdown && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {breakdown.stage.matched > 0 && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                      ✓ {breakdown.stage.matched}/{breakdown.stage.total} stages
                    </span>
                  )}
                  {breakdown.sector.matched > 0 && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                      ✓ {breakdown.sector.matched} sectors
                    </span>
                  )}
                  {breakdown.geography && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                      ✓ geography
                    </span>
                  )}
                  {breakdown.managerType === true && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">
                      ✓ manager type
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Fund Size</p>
              <p className="text-white font-semibold">{fund.fundSize}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Check Size</p>
              <p className="text-white font-semibold">{fund.checkSize}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Geography</p>
              <p className="text-white font-semibold">{fund.geography}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <p className="text-gray-500 text-xs">Stage Focus</p>
              <p className="text-white font-semibold text-sm">{fund.stage.join(", ")}</p>
            </div>
          </div>

          {/* Thesis */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Investment Thesis</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{fund.thesis}</p>
          </div>

          {/* General Partners */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">General Partners</h3>
            <div className="space-y-2">
              {fund.gps.map((gp, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {gp.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{gp.name}</p>
                    <p className="text-gray-500 text-sm">{gp.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Sectors</h3>
            <div className="flex flex-wrap gap-2">
              {fund.sectors.map((sector) => (
                <span key={sector} className="text-sm bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          {fund.notablePortfolio.length > 0 && (
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Notable Portfolio</h3>
              <div className="flex flex-wrap gap-2">
                {fund.notablePortfolio.map((company) => (
                  <span key={company} className="text-sm bg-blue-900/30 text-blue-300 px-3 py-1.5 rounded-lg border border-blue-800/50">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* LP Fit */}
          {fund.lpFit.length > 0 && (
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">Best Fit For</h3>
              <div className="flex flex-wrap gap-2">
                {fund.lpFit.map((fit) => (
                  <span key={fit} className="text-sm bg-purple-900/30 text-purple-300 px-3 py-1.5 rounded-lg border border-purple-800/50">
                    {fit}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <a
              href={searchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-4 rounded-xl text-center hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Research Fund
            </a>
            {onCompare && (
              <button
                onClick={onCompare}
                className={`py-3 px-4 rounded-xl font-bold transition-all flex items-center gap-2 ${
                  isComparing
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {isComparing ? "✓ Added" : "+ Compare"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
