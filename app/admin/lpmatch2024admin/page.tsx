"use client";

import { useEffect, useState } from "react";

interface AggregateData {
  totalSwipes: number;
  totalLikes: number;
  totalPasses: number;
  totalSessions: number;
  fundStats: Record<string, { likes: number; passes: number; name: string }>;
  lpTypeStats: Record<string, number>;
  stageStats: Record<string, number>;
  sectorStats: Record<string, number>;
  recentSwipes: Array<{
    lpId: string;
    lpType: string;
    fundId: string;
    fundName: string;
    action: "like" | "pass";
    score: number;
    timestamp: string;
    stages: string[];
    sectors: string[];
  }>;
  lastUpdated: string;
}

export default function AdminPage() {
  const [data, setData] = useState<AggregateData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/analytics?key=lpmatch2024admin");
      if (!res.ok) throw new Error("Failed to fetch");
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (e) {
      setError("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading analytics...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-red-400">{error || "No data"}</div>
      </div>
    );
  }

  // Sort funds by total engagement
  const sortedFunds = Object.entries(data.fundStats).sort(
    ([, a], [, b]) => (b.likes + b.passes) - (a.likes + a.passes)
  );

  const likeRate = data.totalSwipes > 0 ? ((data.totalLikes / data.totalSwipes) * 100).toFixed(1) : "0";

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-red-500">ADMIN</span> Analytics Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Last updated: {new Date(data.lastUpdated).toLocaleString()}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-3xl font-bold text-white">{data.totalSessions}</div>
            <div className="text-gray-500 text-sm">Total Sessions</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-3xl font-bold text-white">{data.totalSwipes}</div>
            <div className="text-gray-500 text-sm">Total Swipes</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-3xl font-bold text-cyan-400">{data.totalLikes}</div>
            <div className="text-gray-500 text-sm">Total Likes</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-3xl font-bold text-red-400">{data.totalPasses}</div>
            <div className="text-gray-500 text-sm">Total Passes</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="text-3xl font-bold text-emerald-400">{likeRate}%</div>
            <div className="text-gray-500 text-sm">Like Rate</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Fund Popularity */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Fund Popularity</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {sortedFunds.map(([fundId, stats]) => {
                const total = stats.likes + stats.passes;
                const likePercent = total > 0 ? (stats.likes / total) * 100 : 0;
                return (
                  <div key={fundId} className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{stats.name}</div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                          style={{ width: `${likePercent}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs">
                        <span className="text-cyan-400">{stats.likes}</span>
                        {" / "}
                        <span className="text-red-400">{stats.passes}</span>
                      </div>
                      <div className="text-xs text-gray-500">{likePercent.toFixed(0)}% like</div>
                    </div>
                  </div>
                );
              })}
              {sortedFunds.length === 0 && (
                <div className="text-gray-500 text-sm">No fund data yet</div>
              )}
            </div>
          </div>

          {/* LP Type Distribution */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">LP Types</h2>
            <div className="space-y-3">
              {Object.entries(data.lpTypeStats)
                .sort(([, a], [, b]) => b - a)
                .map(([type, count]) => {
                  const percent = data.totalSwipes > 0 ? (count / data.totalSwipes) * 100 : 0;
                  return (
                    <div key={type} className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{type}</div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">{count} swipes</div>
                    </div>
                  );
                })}
              {Object.keys(data.lpTypeStats).length === 0 && (
                <div className="text-gray-500 text-sm">No LP type data yet</div>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Stage Interest */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Stage Interest</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.stageStats)
                .sort(([, a], [, b]) => b - a)
                .map(([stage, count]) => (
                  <div
                    key={stage}
                    className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30"
                  >
                    {stage}: <span className="font-bold">{count}</span>
                  </div>
                ))}
              {Object.keys(data.stageStats).length === 0 && (
                <div className="text-gray-500 text-sm">No stage data yet</div>
              )}
            </div>
          </div>

          {/* Sector Interest */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Sector Interest</h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(data.sectorStats)
                .sort(([, a], [, b]) => b - a)
                .map(([sector, count]) => (
                  <div
                    key={sector}
                    className="px-3 py-1.5 bg-emerald-600/20 text-emerald-300 rounded-lg border border-emerald-500/30 text-sm"
                  >
                    {sector}: <span className="font-bold">{count}</span>
                  </div>
                ))}
              {Object.keys(data.sectorStats).length === 0 && (
                <div className="text-gray-500 text-sm">No sector data yet</div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Swipes (Last 100)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-800">
                  <th className="pb-3 pr-4">Time</th>
                  <th className="pb-3 pr-4">LP Type</th>
                  <th className="pb-3 pr-4">Fund</th>
                  <th className="pb-3 pr-4">Action</th>
                  <th className="pb-3 pr-4">Score</th>
                  <th className="pb-3">Sectors</th>
                </tr>
              </thead>
              <tbody>
                {data.recentSwipes.slice(0, 20).map((swipe, idx) => (
                  <tr key={idx} className="border-b border-gray-800/50">
                    <td className="py-2 pr-4 text-gray-500">
                      {new Date(swipe.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="py-2 pr-4">{swipe.lpType}</td>
                    <td className="py-2 pr-4 font-medium">{swipe.fundName}</td>
                    <td className="py-2 pr-4">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          swipe.action === "like"
                            ? "bg-cyan-600/20 text-cyan-400"
                            : "bg-red-600/20 text-red-400"
                        }`}
                      >
                        {swipe.action.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-2 pr-4">{swipe.score}%</td>
                    <td className="py-2 text-gray-500 text-xs">
                      {swipe.sectors.slice(0, 2).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.recentSwipes.length === 0 && (
              <div className="text-gray-500 text-sm py-4 text-center">No swipes yet</div>
            )}
          </div>
        </div>

        {/* Export */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => {
              const json = JSON.stringify(data, null, 2);
              const blob = new Blob([json], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `lp-analytics-${new Date().toISOString().split("T")[0]}.json`;
              a.click();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Export JSON
          </button>
          <button
            onClick={fetchData}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
