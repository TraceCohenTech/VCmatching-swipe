"use client";

import { useEffect } from "react";
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
  emerging: { label: "Emerging", color: "text-purple-300", bg: "bg-purple-900/50" },
  established: { label: "Established", color: "text-blue-300", bg: "bg-blue-900/50" },
  "top-tier": { label: "Top Tier", color: "text-blue-300", bg: "bg-blue-900/50" },
  elite: { label: "Elite", color: "text-amber-300", bg: "bg-amber-900/50" },
};

export default function FundDetailModal({ fund, score, breakdown, onClose, onCompare, isComparing }: FundDetailModalProps) {
  const tier = tierConfig[fund.tier];
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(fund.name + " venture capital")}`;

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="device-panel p-0 max-w-lg w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="screw tl" />
        <div className="screw tr" />
        <div className="screw bl" />
        <div className="screw br" />

        {/* Header */}
        <div
          className="sticky top-0 p-4 flex justify-between items-start z-10"
          style={{
            background: "linear-gradient(180deg, #1a1f2a, #0f1419)",
            borderBottom: "1px solid rgba(59,130,246,0.2)"
          }}
        >
          <div>
            <h2 className="text-xl font-bold text-gray-100">{fund.name}</h2>
            <p className="text-gray-400 text-sm">{fund.fundNumber}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.bg} ${tier.color}`}>
              {tier.label}
            </span>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-200 p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-5 overflow-y-auto max-h-[calc(90vh-80px)]" style={{ background: "#0a0f14" }}>
          {/* Score */}
          {score !== undefined && (
            <div
              className="rounded-xl p-4 border border-blue-500/30"
              style={{
                background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                boxShadow: "0 0 20px rgba(59,130,246,0.1)"
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Match Score</span>
                <span className="text-3xl font-black text-blue-400" style={{ textShadow: "0 0 15px rgba(59,130,246,0.5)" }}>{score}%</span>
              </div>
              {breakdown && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {breakdown.stage.matched > 0 && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded font-medium">
                      ✓ {breakdown.stage.matched}/{breakdown.stage.total} stages
                    </span>
                  )}
                  {breakdown.sector.matched > 0 && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded font-medium">
                      ✓ {breakdown.sector.matched} sectors
                    </span>
                  )}
                  {breakdown.geography && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded font-medium">
                      ✓ geography
                    </span>
                  )}
                  {breakdown.managerType === true && (
                    <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded font-medium">
                      ✓ manager type
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Fund Size", value: fund.fundSize },
              { label: "Check Size", value: fund.checkSize },
              { label: "Geography", value: fund.geography },
              { label: "Stage Focus", value: fund.stage.join(", ") },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-3 border border-gray-800/50"
                style={{
                  background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                }}
              >
                <p className="text-blue-400/70 text-xs">{stat.label}</p>
                <p className="text-gray-100 font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Thesis */}
          <div>
            <h3 className="neu-label">Investment Thesis</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{fund.thesis}</p>
          </div>

          {/* General Partners */}
          <div>
            <h3 className="neu-label">General Partners</h3>
            <div className="space-y-2">
              {fund.gps.map((gp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg p-3 border border-gray-800/50"
                  style={{
                    background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-blue-400 font-bold border border-blue-500/30"
                    style={{
                      background: "#0a0f14",
                      boxShadow: "0 0 10px rgba(59,130,246,0.2)"
                    }}
                  >
                    {gp.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">{gp.name}</p>
                    <p className="text-gray-400 text-sm">{gp.background}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="neu-label">Sectors</h3>
            <div className="flex flex-wrap gap-2">
              {fund.sectors.map((sector) => (
                <span
                  key={sector}
                  className="text-sm text-gray-200 px-3 py-1.5 rounded-lg border border-gray-700/50"
                  style={{
                    background: "#0a0f14",
                  }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          {fund.notablePortfolio.length > 0 && (
            <div>
              <h3 className="neu-label">Notable Portfolio</h3>
              <div className="flex flex-wrap gap-2">
                {fund.notablePortfolio.map((company) => (
                  <span key={company} className="text-sm bg-blue-900/50 text-blue-300 px-3 py-1.5 rounded-lg font-medium">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* LP Fit */}
          {fund.lpFit.length > 0 && (
            <div>
              <h3 className="neu-label">Best Fit For</h3>
              <div className="flex flex-wrap gap-2">
                {fund.lpFit.map((fit) => (
                  <span key={fit} className="text-sm bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-lg font-medium">
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
              className="flex-1 neu-btn neu-btn-primary text-center flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Research Fund
            </a>
            {onCompare && (
              <button
                onClick={onCompare}
                className={`neu-btn flex items-center gap-2 ${isComparing ? "neu-btn-primary" : ""}`}
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
