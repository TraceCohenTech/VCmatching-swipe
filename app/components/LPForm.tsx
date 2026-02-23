"use client";

import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { STAGES, SECTORS, GEOGRAPHIES, LP_TYPES } from "../data/funds";
import NeuralBackground from "./NeuralBackground";

const FUND_SIZE_VALUES = [
  { label: "<$50M", value: 50 },
  { label: "$100M", value: 100 },
  { label: "$200M", value: 200 },
  { label: "$500M", value: 500 },
  { label: "$1B", value: 1000 },
  { label: "$1B+", value: 10000 },
];

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

const geoEmojis: Record<string, string> = {
  US: "🇺🇸",
  Europe: "🇪🇺",
  Israel: "🇮🇱",
  Asia: "🌏",
  Global: "🌍",
};

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

    const minVal = FUND_SIZE_VALUES[formData.fundSizeMin].value;
    const maxVal = FUND_SIZE_VALUES[formData.fundSizeMax].value;

    let fundSizeMin = "< $50M";
    let fundSizeMax = "> $1B";

    if (minVal <= 50) fundSizeMin = "< $50M";
    else if (minVal <= 100) fundSizeMin = "$50M - $100M";
    else if (minVal <= 200) fundSizeMin = "$100M - $200M";
    else if (minVal <= 500) fundSizeMin = "$200M - $500M";
    else if (minVal <= 1000) fundSizeMin = "$500M - $1B";
    else fundSizeMin = "> $1B";

    if (maxVal <= 50) fundSizeMax = "< $50M";
    else if (maxVal <= 100) fundSizeMax = "$50M - $100M";
    else if (maxVal <= 200) fundSizeMax = "$100M - $200M";
    else if (maxVal <= 500) fundSizeMax = "$200M - $500M";
    else if (maxVal <= 1000) fundSizeMax = "$500M - $1B";
    else fundSizeMax = "> $1B";

    setLPProfile({
      ...formData,
      fundSizeMin,
      fundSizeMax,
    });
    setCurrentStep("swipe");
  };

  const sections = [
    { title: "I am a...", key: "type" },
    { title: "Stages", key: "stages" },
    { title: "Sectors", key: "sectors" },
    { title: "Fund Size", key: "fundsize" },
    { title: "Geography", key: "geography" },
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

  return (
    <div className={`min-h-screen min-h-[100dvh] bg-gray-950 flex flex-col overflow-y-auto overflow-x-hidden transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Canvas-based neural network background */}
      <NeuralBackground />

      {/* Main content - centered */}
      <div className="flex-1 flex flex-col justify-center px-4 py-4 md:px-6 md:py-8 relative z-10">
        <div className="max-w-lg mx-auto w-full">
          {/* Header */}
          <div className={`flex items-center gap-3 md:gap-5 mb-4 md:mb-6 transform transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`}>
            <img
              src="https://i.etsystatic.com/14159953/r/il/30a07b/3187685073/il_fullxfull.3187685073_dulk.jpg"
              alt="Choose your starter"
              className="w-20 h-20 md:w-40 md:h-40 rounded-xl md:rounded-2xl shadow-2xl border-2 border-cyan-500/30 object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-2xl md:text-5xl font-black text-white mb-1 md:mb-2">
                LP <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Match</span>
              </h1>
              <p className="text-sm md:text-lg text-gray-400">Find your perfect VC match</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            {sections.map((s, i) => (
              <button
                key={s.key}
                onClick={() => i < currentSection && setCurrentSection(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSection
                    ? "flex-[2] bg-gradient-to-r from-blue-500 to-cyan-500"
                    : i < currentSection
                    ? "flex-1 bg-cyan-600 cursor-pointer hover:bg-cyan-500"
                    : "flex-1 bg-gray-700"
                }`}
              />
            ))}
            <span className="text-sm text-gray-400 ml-2">{currentSection + 1}/{sections.length}</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="relative">
              {/* Section 0: LP Type */}
              <div className={`transition-all duration-300 ${currentSection === 0 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{sections[0].title}</h2>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {LP_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`p-3 md:p-4 rounded-lg md:rounded-xl text-left transition-all border-2 ${
                          formData.type === type
                            ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-cyan-400 text-white"
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-500 text-gray-300"
                        }`}
                      >
                        <span className="text-sm md:text-base font-semibold">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 1: Stages */}
              <div className={`transition-all duration-300 ${currentSection === 1 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{sections[1].title}</h2>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {STAGES.map((stage) => (
                      <button
                        key={stage}
                        type="button"
                        onClick={() => toggleArrayField("stages", stage)}
                        className={`p-3 md:p-4 rounded-lg md:rounded-xl text-center transition-all border-2 ${
                          formData.stages.includes(stage)
                            ? `bg-gradient-to-br ${stageColors[stage]} border-transparent text-white`
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-500 text-gray-300"
                        }`}
                      >
                        <span className="text-base font-bold">{stage}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Sectors */}
              <div className={`transition-all duration-300 ${currentSection === 2 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                    {sections[2].title}
                    <span className="text-cyan-400 text-sm md:text-base font-normal ml-2">({formData.sectors.length})</span>
                  </h2>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {SECTORS.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => toggleArrayField("sectors", sector)}
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                          formData.sectors.includes(sector)
                            ? `bg-gradient-to-r ${sectorColors[sector]} text-white shadow-md`
                            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                        }`}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 3: Fund Size */}
              <div className={`transition-all duration-300 ${currentSection === 3 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{sections[3].title}</h2>
                  <div className="text-center mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {FUND_SIZE_VALUES[formData.fundSizeMin].label} — {FUND_SIZE_VALUES[formData.fundSizeMax].label}
                    </span>
                  </div>
                  <div className="flex mb-3 md:mb-4">
                    {FUND_SIZE_VALUES.map((size, i) => (
                      <button
                        key={size.label}
                        type="button"
                        onClick={() => {
                          if (i <= formData.fundSizeMax) setFormData({ ...formData, fundSizeMin: i });
                        }}
                        className={`flex-1 py-2 md:py-3 text-[10px] md:text-xs font-bold transition-all ${
                          i >= formData.fundSizeMin && i <= formData.fundSizeMax
                            ? "bg-gradient-to-b from-cyan-500 to-blue-600 text-white"
                            : "bg-gray-800 text-gray-500 hover:bg-gray-700"
                        } ${i === 0 ? "rounded-l-lg md:rounded-l-xl" : ""} ${i === FUND_SIZE_VALUES.length - 1 ? "rounded-r-lg md:rounded-r-xl" : ""}`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-xs text-gray-400 w-10 md:w-12">Min</span>
                      <input
                        type="range" min="0" max="5" value={formData.fundSizeMin}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val <= formData.fundSizeMax) setFormData({ ...formData, fundSizeMin: val });
                        }}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-xs text-gray-400 w-10 md:w-12">Max</span>
                      <input
                        type="range" min="0" max="5" value={formData.fundSizeMax}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val >= formData.fundSizeMin) setFormData({ ...formData, fundSizeMax: val });
                        }}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Geography */}
              <div className={`transition-all duration-300 ${currentSection === 4 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{sections[4].title}</h2>
                  <div className="grid grid-cols-5 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {GEOGRAPHIES.map((geo) => (
                      <button
                        key={geo}
                        type="button"
                        onClick={() => toggleArrayField("geography", geo)}
                        className={`p-2 md:p-3 rounded-lg md:rounded-xl text-center transition-all border-2 ${
                          formData.geography.includes(geo)
                            ? "bg-gradient-to-br from-blue-600 to-cyan-600 border-transparent"
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        <span className="text-lg md:text-2xl block">{geoEmojis[geo]}</span>
                        <span className={`text-[10px] md:text-xs font-medium ${formData.geography.includes(geo) ? "text-white" : "text-gray-400"}`}>{geo}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 text-center mb-3 md:mb-4">Select none for all regions</p>
                  <div className="border-t border-gray-700 pt-3 md:pt-4">
                    <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">Manager Preference</p>
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferEmerging: !formData.preferEmerging })}
                        className={`p-2 md:p-3 rounded-lg md:rounded-xl text-center transition-all border-2 ${
                          formData.preferEmerging
                            ? "bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-purple-400"
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        <span className="text-lg md:text-xl">🚀</span>
                        <span className={`text-xs md:text-sm font-medium block ${formData.preferEmerging ? "text-white" : "text-gray-400"}`}>Emerging</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, preferEstablished: !formData.preferEstablished })}
                        className={`p-2 md:p-3 rounded-lg md:rounded-xl text-center transition-all border-2 ${
                          formData.preferEstablished
                            ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-cyan-400"
                            : "bg-gray-800/50 border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        <span className="text-lg md:text-xl">🏛️</span>
                        <span className={`text-xs md:text-sm font-medium block ${formData.preferEstablished ? "text-white" : "text-gray-400"}`}>Established</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-4 md:mt-5 flex justify-between items-center">
              {currentSection > 0 ? (
                <button
                  type="button"
                  onClick={() => setCurrentSection(currentSection - 1)}
                  className="px-3 py-2 md:px-4 md:py-2.5 text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 md:gap-2 text-sm md:text-base font-medium"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className={`px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base flex items-center gap-1.5 md:gap-2 transition-all ${
                    canProceed()
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25"
                      : "bg-gray-700 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-1.5 md:gap-2"
                >
                  Start Swiping
                  <span>🎯</span>
                </button>
              )}
            </div>
          </form>

          {/* Selection Summary - only show after first selection */}
          {(formData.type || formData.stages.length > 0) && (
            <div className="mt-3 md:mt-4 px-3 py-2 md:px-4 md:py-3 bg-gray-900/70 rounded-lg md:rounded-xl border border-gray-700/50">
              <div className="text-xs md:text-sm text-gray-400 flex flex-wrap gap-1.5 md:gap-2">
                {formData.type && <span className="text-white font-medium">{formData.type}</span>}
                {formData.stages.length > 0 && <span>• {formData.stages.join(", ")}</span>}
                {formData.sectors.length > 0 && <span>• {formData.sectors.length} sectors</span>}
                {(formData.fundSizeMin > 0 || formData.fundSizeMax < 5) && (
                  <span>• {FUND_SIZE_VALUES[formData.fundSizeMin].label}–{FUND_SIZE_VALUES[formData.fundSizeMax].label}</span>
                )}
                {formData.geography.length > 0 && <span>• {formData.geography.map(g => geoEmojis[g]).join(" ")}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
