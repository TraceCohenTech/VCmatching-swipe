"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";
import { STAGES, SECTORS, GEOGRAPHIES, LP_TYPES, FUND_SIZES } from "../data/funds";

const sectorColors: Record<string, string> = {
  SaaS: "from-blue-500 to-blue-600",
  Enterprise: "from-indigo-500 to-indigo-600",
  Fintech: "from-emerald-500 to-emerald-600",
  Consumer: "from-pink-500 to-pink-600",
  Health: "from-red-500 to-red-600",
  Climate: "from-green-500 to-green-600",
  "Developer Tools": "from-violet-500 to-violet-600",
  Marketplace: "from-orange-500 to-orange-600",
  Media: "from-fuchsia-500 to-fuchsia-600",
  Security: "from-slate-500 to-slate-600",
  Crypto: "from-amber-500 to-amber-600",
  Cyber: "from-cyan-500 to-cyan-600",
  Generalist: "from-gray-500 to-gray-600",
};

const stageColors: Record<string, string> = {
  "Pre-seed": "from-purple-500 to-purple-600",
  Seed: "from-blue-500 to-cyan-500",
  "Series A": "from-teal-500 to-emerald-500",
  Growth: "from-orange-500 to-red-500",
};

const geoColors: Record<string, string> = {
  US: "from-blue-600 to-blue-700",
  Europe: "from-indigo-500 to-indigo-600",
  Israel: "from-sky-500 to-sky-600",
  Asia: "from-rose-500 to-rose-600",
  Global: "from-violet-500 to-violet-600",
};

export default function LPForm() {
  const { setLPProfile, setCurrentStep } = useApp();
  const [currentSection, setCurrentSection] = useState(0);

  const [formData, setFormData] = useState({
    type: "",
    stages: [] as string[],
    sectors: [] as string[],
    geography: [] as string[],
    fundSizeMin: "$50M - $100M",
    fundSizeMax: "$300M - $500M",
    preferEmerging: false,
    preferEstablished: false,
  });

  const toggleArrayField = (field: "stages" | "sectors" | "geography", value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      setFormData({ ...formData, [field]: current.filter((v) => v !== value) });
    } else {
      setFormData({ ...formData, [field]: [...current, value] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type || formData.stages.length === 0 || formData.sectors.length === 0) {
      alert("Please complete all required sections");
      return;
    }
    setLPProfile(formData);
    setCurrentStep("swipe");
  };

  const sections = [
    { title: "Who are you?", key: "type" },
    { title: "What stages?", key: "stages" },
    { title: "Which sectors?", key: "sectors" },
    { title: "Where?", key: "geography" },
    { title: "Fund size & preferences", key: "preferences" },
  ];

  const canProceed = () => {
    switch (currentSection) {
      case 0: return formData.type !== "";
      case 1: return formData.stages.length > 0;
      case 2: return formData.sectors.length > 0;
      case 3: return true; // Geography is optional
      case 4: return true;
      default: return false;
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 p-4 md:p-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            LP <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Matchmaking</span>
          </h1>
          <p className="text-gray-400 text-lg">Gotta catch them all!</p>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Step {currentSection + 1} of {sections.length}</span>
            <span>{sections[currentSection].title}</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Section 0: LP Type */}
          <div className={`transition-all duration-500 ${currentSection === 0 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">I am a...</h2>
              <div className="grid grid-cols-2 gap-4">
                {LP_TYPES.map((type, idx) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`relative p-5 rounded-xl text-left transition-all duration-300 transform hover:scale-105 border-2 overflow-hidden group ${
                      formData.type === type
                        ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-blue-400 shadow-lg shadow-blue-500/20"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <span className={`relative text-lg font-medium ${formData.type === type ? "text-white" : "text-gray-300"}`}>
                      {type}
                    </span>
                    {formData.type === type && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1: Stages */}
          <div className={`transition-all duration-500 ${currentSection === 1 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Investment Stages</h2>
              <p className="text-gray-400 mb-6">Select all that interest you</p>
              <div className="grid grid-cols-2 gap-4">
                {STAGES.map((stage, idx) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => toggleArrayField("stages", stage)}
                    className={`relative p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 border-2 overflow-hidden ${
                      formData.stages.includes(stage)
                        ? `bg-gradient-to-br ${stageColors[stage]} border-transparent shadow-lg`
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className={`text-xl font-bold ${formData.stages.includes(stage) ? "text-white" : "text-gray-300"}`}>
                      {stage}
                    </span>
                    {formData.stages.includes(stage) && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Sectors */}
          <div className={`transition-all duration-500 ${currentSection === 2 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Sectors</h2>
              <p className="text-gray-400 mb-6">Pick your focus areas</p>
              <div className="flex flex-wrap gap-3">
                {SECTORS.map((sector, idx) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleArrayField("sectors", sector)}
                    className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-110 ${
                      formData.sectors.includes(sector)
                        ? `bg-gradient-to-r ${sectorColors[sector]} text-white shadow-lg`
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                    }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {sector}
                    {formData.sectors.includes(sector) && (
                      <span className="ml-2 inline-flex items-center justify-center w-4 h-4 bg-white/20 rounded-full text-xs">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500">
                {formData.sectors.length} selected
              </div>
            </div>
          </div>

          {/* Section 3: Geography */}
          <div className={`transition-all duration-500 ${currentSection === 3 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-2">Geography</h2>
              <p className="text-gray-400 mb-6">Where do you want exposure? (optional)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {GEOGRAPHIES.map((geo, idx) => (
                  <button
                    key={geo}
                    type="button"
                    onClick={() => toggleArrayField("geography", geo)}
                    className={`relative p-5 rounded-xl text-center transition-all duration-300 transform hover:scale-105 border-2 overflow-hidden ${
                      formData.geography.includes(geo)
                        ? `bg-gradient-to-br ${geoColors[geo]} border-transparent shadow-lg`
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className="text-3xl mb-2 block">
                      {geo === "US" && "🇺🇸"}
                      {geo === "Europe" && "🇪🇺"}
                      {geo === "Israel" && "🇮🇱"}
                      {geo === "Asia" && "🌏"}
                      {geo === "Global" && "🌍"}
                    </span>
                    <span className={`text-lg font-semibold ${formData.geography.includes(geo) ? "text-white" : "text-gray-300"}`}>
                      {geo}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Fund Size & Preferences */}
          <div className={`transition-all duration-500 ${currentSection === 4 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Final Details</h2>

              {/* Fund Size */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Fund Size Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Minimum</label>
                    <select
                      value={formData.fundSizeMin}
                      onChange={(e) => setFormData({ ...formData, fundSizeMin: e.target.value })}
                      className="w-full bg-gray-800 text-white rounded-xl p-4 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      {FUND_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Maximum</label>
                    <select
                      value={formData.fundSizeMax}
                      onChange={(e) => setFormData({ ...formData, fundSizeMax: e.target.value })}
                      className="w-full bg-gray-800 text-white rounded-xl p-4 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    >
                      {FUND_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Manager Preference */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Manager Preference</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferEmerging: !formData.preferEmerging })}
                    className={`p-5 rounded-xl text-center transition-all duration-300 border-2 ${
                      formData.preferEmerging
                        ? "bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-purple-400"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <span className="text-2xl mb-2 block">🚀</span>
                    <span className={`font-semibold ${formData.preferEmerging ? "text-white" : "text-gray-300"}`}>
                      Emerging
                    </span>
                    <span className="block text-xs text-gray-500 mt-1">Fund I-II</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferEstablished: !formData.preferEstablished })}
                    className={`p-5 rounded-xl text-center transition-all duration-300 border-2 ${
                      formData.preferEstablished
                        ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-blue-400"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <span className="text-2xl mb-2 block">🏛️</span>
                    <span className={`font-semibold ${formData.preferEstablished ? "text-white" : "text-gray-300"}`}>
                      Established
                    </span>
                    <span className="block text-xs text-gray-500 mt-1">Fund III+</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Select both or neither if you&apos;re open to all
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between items-center">
            {currentSection > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(currentSection - 1)}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            {currentSection < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => canProceed() && setCurrentSection(currentSection + 1)}
                disabled={!canProceed()}
                className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all duration-300 ${
                  canProceed()
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Start Matching</span>
                <span className="text-xl">🎯</span>
              </button>
            )}
          </div>
        </form>

        {/* Quick summary */}
        {(formData.type || formData.stages.length > 0 || formData.sectors.length > 0) && (
          <div className="mt-6 p-4 bg-gray-900/40 rounded-xl border border-gray-800">
            <div className="flex flex-wrap gap-2 items-center text-sm">
              {formData.type && (
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  {formData.type}
                </span>
              )}
              {formData.stages.map((s) => (
                <span key={s} className={`px-3 py-1 bg-gradient-to-r ${stageColors[s]} text-white rounded-full text-xs`}>
                  {s}
                </span>
              ))}
              {formData.sectors.slice(0, 3).map((s) => (
                <span key={s} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  {s}
                </span>
              ))}
              {formData.sectors.length > 3 && (
                <span className="text-gray-500 text-xs">+{formData.sectors.length - 3} more</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
