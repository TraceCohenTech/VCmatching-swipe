"use client";

import { Fund } from "../data/funds";
import { ScoreBreakdown } from "./SwipeInterface";

interface FundCardProps {
  fund: Fund;
  score?: number;
  breakdown?: ScoreBreakdown;
  style?: React.CSSProperties;
  className?: string;
}

const tierConfig = {
  emerging: {
    label: "Emerging",
    color: "text-purple-300",
    bg: "bg-purple-900/50",
  },
  established: {
    label: "Established",
    color: "text-blue-300",
    bg: "bg-blue-900/50",
  },
  "top-tier": {
    label: "Top Tier",
    color: "text-blue-300",
    bg: "bg-blue-900/50",
  },
  elite: {
    label: "Elite",
    color: "text-amber-300",
    bg: "bg-amber-900/50",
  },
};

export default function FundCard({ fund, score, breakdown, style, className = "" }: FundCardProps) {
  const tier = tierConfig[fund.tier];

  // Determine glow color based on score
  const getGlowStyle = () => {
    if (!score) return {};
    if (score >= 80) return {
      borderColor: "rgba(59,130,246,0.5)",
      boxShadow: "12px 12px 24px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.2), 0 0 60px rgba(59,130,246,0.1)"
    };
    if (score >= 60) return {
      borderColor: "rgba(34,211,238,0.4)",
      boxShadow: "12px 12px 24px rgba(0,0,0,0.5), 0 0 25px rgba(34,211,238,0.15)"
    };
    return {
      borderColor: "rgba(168,85,247,0.3)",
      boxShadow: "12px 12px 24px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.1)"
    };
  };

  return (
    <div
      style={{
        ...style,
        background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
        ...getGlowStyle(),
      }}
      className={`
        relative w-[calc(100vw-2rem)] max-w-[360px] rounded-2xl border overflow-hidden ${className}
      `}
    >
      {/* Top accent bar - glowing */}
      <div className="h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500" style={{ boxShadow: "0 2px 10px rgba(59,130,246,0.5)" }} />

      {/* Header */}
      <div className="p-4 md:p-5 pb-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg md:text-xl font-bold text-gray-100 truncate">{fund.name}</h2>
            <p className="text-gray-400 text-xs md:text-sm">{fund.fundNumber}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className={`text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full ${tier.bg} ${tier.color}`}>
              {tier.label}
            </span>
            {score !== undefined && (
              <span className="text-sm font-bold text-blue-400" style={{ textShadow: "0 0 10px rgba(59,130,246,0.5)" }}>
                {score}% match
              </span>
            )}
          </div>
        </div>

        {/* Score breakdown */}
        {breakdown && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {breakdown.stage.matched > 0 && (
              <span className="text-[10px] bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded font-medium">
                ✓ {breakdown.stage.matched}/{breakdown.stage.total} stages
              </span>
            )}
            {breakdown.sector.matched > 0 && (
              <span className="text-[10px] bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded font-medium">
                ✓ {breakdown.sector.matched} sectors
              </span>
            )}
            {breakdown.geography && (
              <span className="text-[10px] bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded font-medium">
                ✓ geo
              </span>
            )}
            {breakdown.managerType === true && (
              <span className="text-[10px] bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded font-medium">
                ✓ type
              </span>
            )}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="px-4 md:px-5 space-y-3 md:space-y-4">
        {/* GPs */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
            General Partners
          </p>
          <div className="space-y-1.5">
            {fund.gps.slice(0, 2).map((gp, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-blue-400 flex-shrink-0"
                  style={{
                    background: "#0a0f14",
                    boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.5), 0 0 8px rgba(59,130,246,0.2)"
                  }}
                >
                  {gp.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <span className="text-gray-200 font-medium text-sm block truncate">{gp.name}</span>
                  <span className="text-gray-400 text-xs block truncate">{gp.background}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 font-semibold">
            Thesis
          </p>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{fund.thesis}</p>
        </div>

        {/* Portfolio */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
            Portfolio
          </p>
          <div className="flex flex-wrap gap-1.5">
            {fund.notablePortfolio.map((company) => (
              <span
                key={company}
                className="text-xs text-gray-300 px-2.5 py-1 rounded-md border border-gray-700/50"
                style={{
                  background: "#0a0f14",
                }}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div
        className="mt-4 p-4"
        style={{
          background: "#0a0f14",
          borderTop: "1px solid rgba(42,52,65,0.5)"
        }}
      >
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div
            className="rounded-lg p-2.5 border border-gray-800/50"
            style={{
              background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
            }}
          >
            <p className="text-gray-500 text-xs">Fund Size</p>
            <p className="text-gray-100 font-semibold text-sm">{fund.fundSize}</p>
          </div>
          <div
            className="rounded-lg p-2.5 border border-gray-800/50"
            style={{
              background: "linear-gradient(145deg, #1a1f2a, #0f1419)",
            }}
          >
            <p className="text-gray-500 text-xs">Check Size</p>
            <p className="text-gray-100 font-semibold text-sm">{fund.checkSize}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded font-medium">
            {fund.geography}
          </span>
          {fund.stage.map((s) => (
            <span
              key={s}
              className="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded font-medium"
            >
              {s}
            </span>
          ))}
          {fund.sectors.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
