"use client";

import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { STAGES, SECTORS, LP_TYPES } from "../data/funds";

const FUND_SIZE_VALUES = [
  { label: "<$50M", value: 50 },
  { label: "$100M", value: 100 },
  { label: "$200M", value: 200 },
  { label: "$500M", value: 500 },
  { label: "$1B", value: 1000 },
  { label: "$1B+", value: 10000 },
];

export default function LPForm() {
  const { setLPProfile, setCurrentStep } = useApp();
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [ledActive, setLedActive] = useState(false);
  const [screenText, setScreenText] = useState("SYSTEM READY... AWAITING INPUT");

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

  // Update screen text based on selections
  useEffect(() => {
    if (formData.type) {
      setLedActive(true);
      const parts = [];
      parts.push(`TYPE: ${formData.type.toUpperCase()}`);
      if (formData.stages.length > 0) parts.push(`STAGES: ${formData.stages.length}`);
      if (formData.sectors.length > 0) parts.push(`SECTORS: ${formData.sectors.length}`);
      setScreenText(parts.join(" | "));
    } else {
      setLedActive(false);
      setScreenText("SYSTEM READY... AWAITING INPUT");
    }
  }, [formData]);

  const toggleArrayField = (field: "stages" | "sectors", value: string) => {
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
      setScreenText("ERROR: COMPLETE ALL FIELDS");
      return;
    }

    setScreenText("INITIALIZING MATCH ALGORITHM...");

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

    setTimeout(() => {
      setLPProfile({
        ...formData,
        fundSizeMin,
        fundSizeMax,
      });
      setCurrentStep("swipe");
    }, 500);
  };

  const sections = [
    { title: "Investor Type", key: "type" },
    { title: "Investment Stages", key: "stages" },
    { title: "Target Sectors", key: "sectors" },
    { title: "Fund Size Range", key: "fundsize" },
  ];

  const canProceed = () => {
    switch (currentSection) {
      case 0: return formData.type !== "";
      case 1: return formData.stages.length > 0;
      case 2: return formData.sectors.length > 0;
      case 3: return true;
      default: return false;
    }
  };

  return (
    <div className={`min-h-screen min-h-[100dvh] bg-[#0f1419] flex items-center justify-center p-4 md:p-6 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="device-panel p-6 md:p-10 w-full max-w-lg">
        {/* Screws */}
        <div className="screw tl" />
        <div className="screw tr" />
        <div className="screw bl" />
        <div className="screw br" />

        {/* LED Indicator */}
        <div className={`led absolute top-6 right-6 ${ledActive ? "active animate-led-pulse" : ""}`} />

        {/* CRT Screen Header */}
        <div className="crt-screen p-4 md:p-5 mb-6 text-center">
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-2 animate-text-pulse relative z-10">
            LP Matchmaker
          </h1>
          <p className="text-sm opacity-80 relative z-10">{screenText}</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {sections.map((s, i) => (
              <button
                key={s.key}
                onClick={() => i < currentSection && setCurrentSection(i)}
                className={`h-3 rounded-full transition-all ${
                  i === currentSection
                    ? "flex-[2] bg-gradient-to-r from-blue-500 to-blue-500"
                    : i < currentSection
                    ? "flex-1 bg-blue-500 cursor-pointer hover:bg-blue-400"
                    : "flex-1 bg-[#0a0f14]"
                }`}
                style={{
                  boxShadow: i <= currentSection
                    ? "0 0 8px rgba(59,130,246,0.4)"
                    : "inset 2px 2px 4px rgba(0,0,0,0.5)"
                }}
                title={s.title}
              />
            ))}
            <span className="text-sm text-gray-400 ml-2 font-mono">{currentSection + 1}/{sections.length}</span>
          </div>
          {/* Step labels */}
          <div className="flex gap-2">
            {sections.map((s, i) => (
              <span
                key={s.key}
                className={`text-[10px] transition-all ${
                  i === currentSection
                    ? "flex-[2] text-blue-400 font-medium"
                    : i < currentSection
                    ? "flex-1 text-gray-500"
                    : "flex-1 text-gray-600"
                }`}
              >
                {i === currentSection ? s.title : ""}
              </span>
            ))}
            <span className="w-12" /> {/* Spacer for the counter */}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="relative min-h-[280px]">
            {/* Section 0: LP Type */}
            <div className={`transition-all duration-300 ${currentSection === 0 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
              <label className="neu-label">{sections[0].title}</label>
              <div className="grid grid-cols-2 gap-3">
                {LP_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`neu-select-btn text-left ${formData.type === type ? "selected" : ""}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 1: Stages */}
            <div className={`transition-all duration-300 ${currentSection === 1 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
              <label className="neu-label">{sections[1].title}</label>
              <div className="grid grid-cols-2 gap-3">
                {STAGES.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => toggleArrayField("stages", stage)}
                    className={`neu-select-btn text-center ${formData.stages.includes(stage) ? "selected" : ""}`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 2: Sectors */}
            <div className={`transition-all duration-300 ${currentSection === 2 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
              <label className="neu-label">
                {sections[2].title}
                {formData.sectors.length > 0 && (
                  <span className="text-blue-600 ml-2">({formData.sectors.length} selected)</span>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map((sector) => (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => toggleArrayField("sectors", sector)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      formData.sectors.includes(sector)
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                        : "bg-[#0f1419] text-gray-400 hover:text-white border border-transparent hover:border-blue-500/30"
                    }`}
                    style={{
                      boxShadow: formData.sectors.includes(sector)
                        ? "0 0 15px rgba(59,130,246,0.4)"
                        : "inset 2px 2px 4px rgba(0,0,0,0.4)"
                    }}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 3: Fund Size */}
            <div className={`transition-all duration-300 ${currentSection === 3 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
              <label className="neu-label">{sections[3].title}</label>
              <div className="neu-card-inset p-4 mb-4 text-center">
                <span className="text-xl md:text-2xl font-black text-blue-600">
                  {FUND_SIZE_VALUES[formData.fundSizeMin].label} — {FUND_SIZE_VALUES[formData.fundSizeMax].label}
                </span>
              </div>
              <p className="text-gray-400 text-xs mb-2">Click to set range boundaries:</p>
              <div className="flex mb-4 rounded-xl overflow-hidden border border-gray-800" style={{ boxShadow: "inset 3px 3px 6px rgba(0,0,0,0.5)" }}>
                {FUND_SIZE_VALUES.map((size, i) => (
                  <button
                    key={size.label}
                    type="button"
                    onClick={() => {
                      // If clicking outside current range, expand to include it
                      // If clicking inside range, set as new boundary (closer to edges)
                      if (i < formData.fundSizeMin) {
                        setFormData({ ...formData, fundSizeMin: i });
                      } else if (i > formData.fundSizeMax) {
                        setFormData({ ...formData, fundSizeMax: i });
                      } else {
                        // Clicking inside range - determine which boundary to move
                        const distToMin = i - formData.fundSizeMin;
                        const distToMax = formData.fundSizeMax - i;
                        if (distToMin <= distToMax) {
                          setFormData({ ...formData, fundSizeMin: i });
                        } else {
                          setFormData({ ...formData, fundSizeMax: i });
                        }
                      }
                    }}
                    className={`flex-1 py-3 text-xs font-bold transition-all ${
                      i >= formData.fundSizeMin && i <= formData.fundSizeMax
                        ? "bg-gradient-to-b from-blue-400 to-blue-500 text-white"
                        : "bg-transparent text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 w-10 font-mono">MIN</span>
                  <input
                    type="range" min="0" max="5" value={formData.fundSizeMin}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val <= formData.fundSizeMax) setFormData({ ...formData, fundSizeMin: val });
                    }}
                    className="flex-1 h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "#0a0f14", boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.5)" }}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 w-10 font-mono">MAX</span>
                  <input
                    type="range" min="0" max="5" value={formData.fundSizeMax}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val >= formData.fundSizeMin) setFormData({ ...formData, fundSizeMax: val });
                    }}
                    className="flex-1 h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: "#0a0f14", boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.5)" }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between items-center">
            {currentSection > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentSection(currentSection - 1)}
                className="neu-btn neu-btn-small flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`neu-btn flex items-center gap-2 ${canProceed() ? "neu-btn-primary" : ""}`}
              >
                Continue
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                className="neu-btn neu-btn-primary flex items-center gap-2"
              >
                Initialize Search
                <span>🎯</span>
              </button>
            )}
          </div>
        </form>

        {/* Selection Summary */}
        {(formData.type || formData.stages.length > 0) && (
          <div className="mt-4 neu-card-inset p-3">
            <div className="text-xs text-gray-400 flex flex-wrap gap-2">
              {formData.type && <span className="text-gray-200 font-medium">{formData.type}</span>}
              {formData.stages.length > 0 && <span>• {formData.stages.join(", ")}</span>}
              {formData.sectors.length > 0 && <span>• {formData.sectors.length} sectors</span>}
              {(formData.fundSizeMin > 0 || formData.fundSizeMax < 5) && (
                <span>• {FUND_SIZE_VALUES[formData.fundSizeMin].label}–{FUND_SIZE_VALUES[formData.fundSizeMax].label}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
