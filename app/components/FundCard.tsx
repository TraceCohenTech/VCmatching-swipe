"use client";

import { Fund } from "../data/funds";

interface FundCardProps {
  fund: Fund;
  score?: number;
  style?: React.CSSProperties;
  className?: string;
}

const tierConfig = {
  emerging: {
    border: "border-gray-600",
    badge: "bg-gray-700 text-gray-300",
    label: "Emerging",
    accent: "bg-gray-700",
  },
  established: {
    border: "border-slate-500",
    badge: "bg-slate-600 text-slate-200",
    label: "Established",
    accent: "bg-slate-600",
  },
  "top-tier": {
    border: "border-blue-500",
    badge: "bg-blue-600 text-white",
    label: "Top Tier",
    accent: "bg-blue-600",
  },
  elite: {
    border: "border-cyan-400",
    badge: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
    label: "Elite",
    accent: "bg-cyan-500",
  },
};

export default function FundCard({ fund, score, style, className = "" }: FundCardProps) {
  const tier = tierConfig[fund.tier];

  return (
    <div
      style={style}
      className={`
        relative w-[320px] md:w-[360px] bg-gray-900 rounded-2xl border-2 ${tier.border}
        shadow-2xl overflow-hidden ${fund.tier === "elite" ? "card-elite" : ""} ${className}
      `}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 ${tier.accent}`} />

      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-white truncate">{fund.name}</h2>
            <p className="text-gray-400 text-sm">{fund.fundNumber}</p>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.badge}`}>
              {tier.label}
            </span>
            {score !== undefined && (
              <span className="text-xs text-gray-400">
                {score}% match
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-5 space-y-4">
        {/* GPs */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
            General Partners
          </p>
          <div className="space-y-1.5">
            {fund.gps.slice(0, 2).map((gp, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-blue-400 flex-shrink-0">
                  {gp.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <span className="text-white font-medium text-sm block truncate">{gp.name}</span>
                  <span className="text-gray-500 text-xs block truncate">{gp.background}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5 font-medium">
            Thesis
          </p>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{fund.thesis}</p>
        </div>

        {/* Portfolio */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
            Portfolio
          </p>
          <div className="flex flex-wrap gap-1.5">
            {fund.notablePortfolio.map((company) => (
              <span
                key={company}
                className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="mt-4 p-4 bg-gray-950/50 border-t border-gray-800">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-gray-800/50 rounded-lg p-2.5">
            <p className="text-gray-500 text-xs">Fund Size</p>
            <p className="text-white font-semibold text-sm">{fund.fundSize}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-2.5">
            <p className="text-gray-500 text-xs">Check Size</p>
            <p className="text-white font-semibold text-sm">{fund.checkSize}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[10px] bg-blue-900/50 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
            {fund.geography}
          </span>
          {fund.stage.map((s) => (
            <span
              key={s}
              className="text-[10px] bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800"
            >
              {s}
            </span>
          ))}
          {fund.sectors.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded border border-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
