"use client";

import { useState, useEffect } from "react";
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

const geoEmojis: Record<string, string> = {
  US: "🇺🇸",
  Europe: "🇪🇺",
  Israel: "🇮🇱",
  Asia: "🌏",
  Global: "🌍",
};

// Floating particle component
function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function LPForm() {
  const { setLPProfile, setCurrentStep } = useApp();
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [formData, setFormData] = useState({
    type: "",
    stages: [] as string[],
    sectors: [] as string[],
    geography: [] as string[],
    fundSizeMin: 0,
    fundSizeMax: 5,
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
    setLPProfile({
      ...formData,
      fundSizeMin: FUND_SIZES[formData.fundSizeMin],
      fundSizeMax: FUND_SIZES[formData.fundSizeMax],
    });
    setCurrentStep("swipe");
  };

  const sections = [
    { title: "Who are you?", subtitle: "Select your investor type", key: "type" },
    { title: "Investment Stages", subtitle: "What stages do you target?", key: "stages" },
    { title: "Sectors", subtitle: "Pick your focus areas", key: "sectors" },
    { title: "Fund Size", subtitle: "Set your preferred range", key: "fundsize" },
    { title: "Geography", subtitle: "Where do you want exposure?", key: "geography" },
  ];

  const canProceed = () => {
    switch (currentSection) {
      case 0: return formData.type !== "";
      case 1: return formData.stages.length > 0;
      case 2: return formData.sectors.length > 0;
      case 3: return true;
      case 4: return true;
      default: return false;
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className={`min-h-screen bg-gray-950 p-4 md:p-6 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float" />
      </div>

      <FloatingParticles />

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
            LP <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">Match</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">Gotta catch &apos;em all!</p>
          <p className="text-sm text-gray-600 mt-2">1,116 VCs • Swipe to build your deck</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span className="font-semibold">Step {currentSection + 1} of {sections.length}</span>
            <span className="text-cyan-400">{sections[currentSection].title}</span>
          </div>
          <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Section 0: LP Type */}
          <div className={`transition-all duration-500 ${currentSection === 0 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/5">
              <h2 className="text-3xl font-bold text-white mb-2">{sections[0].title}</h2>
              <p className="text-gray-400 mb-8">{sections[0].subtitle}</p>
              <div className="grid grid-cols-2 gap-4">
                {LP_TYPES.map((type, idx) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`relative p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-[1.02] border-2 overflow-hidden group ${
                      formData.type === type
                        ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-cyan-400 shadow-lg shadow-cyan-500/20"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className={`text-lg font-bold ${formData.type === type ? "text-white" : "text-gray-300"}`}>
                      {type}
                    </span>
                    {formData.type === type && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-scale-in">
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
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">{sections[1].title}</h2>
              <p className="text-gray-400 mb-8">{sections[1].subtitle}</p>
              <div className="grid grid-cols-2 gap-5">
                {STAGES.map((stage, idx) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => toggleArrayField("stages", stage)}
                    className={`relative p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-[1.03] border-2 overflow-hidden ${
                      formData.stages.includes(stage)
                        ? `bg-gradient-to-br ${stageColors[stage]} border-transparent shadow-xl`
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <span className={`text-2xl font-black ${formData.stages.includes(stage) ? "text-white" : "text-gray-300"}`}>
                      {stage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Sectors */}
          <div className={`transition-all duration-500 ${currentSection === 2 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">{sections[2].title}</h2>
              <p className="text-gray-400 mb-6">{sections[2].subtitle}</p>
              <div className="flex flex-wrap gap-3">
                {SECTORS.map((sector, idx) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleArrayField("sectors", sector)}
                    className={`relative px-6 py-4 rounded-2xl text-base font-bold transition-all duration-300 transform hover:scale-110 ${
                      formData.sectors.includes(sector)
                        ? `bg-gradient-to-r ${sectorColors[sector]} text-white shadow-lg`
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                    }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {sector}
                  </button>
                ))}
              </div>
              <div className="mt-6 text-lg text-cyan-400 font-semibold">
                {formData.sectors.length} selected
              </div>
            </div>
          </div>

          {/* Section 3: Fund Size Slider */}
          <div className={`transition-all duration-500 ${currentSection === 3 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">{sections[3].title}</h2>
              <p className="text-gray-400 mb-8">{sections[3].subtitle}</p>

              {/* Fund Size Range Display */}
              <div className="text-center mb-8">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {FUND_SIZES[formData.fundSizeMin]} — {FUND_SIZES[formData.fundSizeMax]}
                </div>
              </div>

              {/* Dual Range Slider */}
              <div className="relative px-4 py-8">
                {/* Track */}
                <div className="absolute left-4 right-4 top-1/2 h-3 bg-gray-700 rounded-full -translate-y-1/2" />

                {/* Active Track */}
                <div
                  className="absolute top-1/2 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-y-1/2"
                  style={{
                    left: `calc(${(formData.fundSizeMin / 5) * 100}% + 1rem)`,
                    right: `calc(${((5 - formData.fundSizeMax) / 5) * 100}% + 1rem)`,
                  }}
                />

                {/* Min Slider */}
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={formData.fundSizeMin}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val <= formData.fundSizeMax) {
                      setFormData({ ...formData, fundSizeMin: val });
                    }
                  }}
                  className="absolute w-full h-12 opacity-0 cursor-pointer z-10"
                />

                {/* Max Slider */}
                <input
                  type="range"
                  min="0"
                  max="5"
                  value={formData.fundSizeMax}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= formData.fundSizeMin) {
                      setFormData({ ...formData, fundSizeMax: val });
                    }
                  }}
                  className="absolute w-full h-12 opacity-0 cursor-pointer z-20"
                />

                {/* Thumb indicators */}
                <div
                  className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-blue-500 -translate-y-1/2 top-1/2 transition-all cursor-pointer"
                  style={{ left: `calc(${(formData.fundSizeMin / 5) * 100}% + 0.5rem)` }}
                />
                <div
                  className="absolute w-8 h-8 bg-white rounded-full shadow-lg border-4 border-cyan-500 -translate-y-1/2 top-1/2 transition-all cursor-pointer"
                  style={{ left: `calc(${(formData.fundSizeMax / 5) * 100}% + 0.5rem)` }}
                />

                {/* Labels */}
                <div className="flex justify-between mt-8 text-sm text-gray-500">
                  {FUND_SIZES.map((size, i) => (
                    <span key={size} className={i >= formData.fundSizeMin && i <= formData.fundSizeMax ? "text-cyan-400 font-semibold" : ""}>
                      {size.replace('$', '').replace(' ', '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Geography */}
          <div className={`transition-all duration-500 ${currentSection === 4 ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-10 pointer-events-none"}`}>
            <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">{sections[4].title}</h2>
              <p className="text-gray-400 mb-8">{sections[4].subtitle}</p>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
                {GEOGRAPHIES.map((geo, idx) => (
                  <button
                    key={geo}
                    type="button"
                    onClick={() => toggleArrayField("geography", geo)}
                    className={`relative p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 border-2 overflow-hidden ${
                      formData.geography.includes(geo)
                        ? `bg-gradient-to-br ${geoColors[geo]} border-transparent shadow-lg`
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <span className="text-4xl block mb-2">{geoEmojis[geo]}</span>
                    <span className={`text-sm font-bold ${formData.geography.includes(geo) ? "text-white" : "text-gray-400"}`}>
                      {geo}
                    </span>
                  </button>
                ))}
              </div>

              {/* Manager Preference */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Manager Preference <span className="text-gray-500 font-normal">(optional)</span></h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferEmerging: !formData.preferEmerging })}
                    className={`p-5 rounded-2xl text-center transition-all duration-300 border-2 ${
                      formData.preferEmerging
                        ? "bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-purple-400 shadow-lg shadow-purple-500/20"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <span className="text-3xl mb-2 block">🚀</span>
                    <span className={`font-bold ${formData.preferEmerging ? "text-white" : "text-gray-300"}`}>Emerging</span>
                    <span className="block text-xs text-gray-500">Fund I-II</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, preferEstablished: !formData.preferEstablished })}
                    className={`p-5 rounded-2xl text-center transition-all duration-300 border-2 ${
                      formData.preferEstablished
                        ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-cyan-400 shadow-lg shadow-cyan-500/20"
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <span className="text-3xl mb-2 block">🏛️</span>
                    <span className={`font-bold ${formData.preferEstablished ? "text-white" : "text-gray-300"}`}>Established</span>
                    <span className="block text-xs text-gray-500">Fund III+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            {currentSection > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(currentSection - 1)}
                className="px-6 py-4 text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold"
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
                className={`px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-all duration-300 ${
                  canProceed()
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="px-10 py-5 rounded-2xl font-black text-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Start Swiping
                <span className="text-2xl">🎯</span>
              </button>
            )}
          </div>
        </form>

        {/* Quick summary */}
        {(formData.type || formData.stages.length > 0 || formData.sectors.length > 0) && (
          <div className="mt-8 p-5 bg-gray-900/60 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2 items-center text-sm">
              {formData.type && (
                <span className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-xl border border-cyan-500/30 font-semibold">
                  {formData.type}
                </span>
              )}
              {formData.stages.map((s) => (
                <span key={s} className={`px-3 py-1 bg-gradient-to-r ${stageColors[s]} text-white rounded-xl text-xs font-bold`}>
                  {s}
                </span>
              ))}
              {formData.sectors.slice(0, 3).map((s) => (
                <span key={s} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-xl text-xs font-semibold">
                  {s}
                </span>
              ))}
              {formData.sectors.length > 3 && (
                <span className="text-gray-500 text-xs font-semibold">+{formData.sectors.length - 3} more</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
