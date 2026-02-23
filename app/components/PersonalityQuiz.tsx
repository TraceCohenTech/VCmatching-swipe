"use client";

import { useState, useEffect } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    emoji: string;
    type: "hunter" | "architect" | "guardian";
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "A founder pitches you a wild idea with no revenue. You...",
    options: [
      { text: "YOLO, let's ride 🚀", emoji: "🔥", type: "hunter" },
      { text: "Show me the TAM analysis", emoji: "📊", type: "architect" },
      { text: "Come back with traction", emoji: "🛡️", type: "guardian" },
    ],
  },
  {
    id: 2,
    question: "Your ideal GP has...",
    options: [
      { text: "Zero funds but insane hustle", emoji: "💪", type: "hunter" },
      { text: "One hit fund, thesis-driven", emoji: "🎯", type: "architect" },
      { text: "20 years and a track record", emoji: "👔", type: "guardian" },
    ],
  },
  {
    id: 3,
    question: "How do you feel about Fund I managers?",
    options: [
      { text: "That's where alpha lives!", emoji: "⚡", type: "hunter" },
      { text: "Depends on their background", emoji: "🤔", type: "architect" },
      { text: "Too risky for my blood", emoji: "😬", type: "guardian" },
    ],
  },
  {
    id: 4,
    question: "Pick your portfolio construction vibe:",
    options: [
      { text: "Concentrated bets, high conviction", emoji: "🎰", type: "hunter" },
      { text: "Balanced with clear strategy", emoji: "⚖️", type: "architect" },
      { text: "Diversified, de-risked", emoji: "🏦", type: "guardian" },
    ],
  },
  {
    id: 5,
    question: "A fund missed their target by 40%. Your reaction?",
    options: [
      { text: "Smaller fund = more upside", emoji: "📈", type: "hunter" },
      { text: "Why? Let's dig into it", emoji: "🔍", type: "architect" },
      { text: "Red flag, moving on", emoji: "🚩", type: "guardian" },
    ],
  },
  {
    id: 6,
    question: "Your LP meetings are usually...",
    options: [
      { text: "Coffee chats, vibes-based", emoji: "☕", type: "hunter" },
      { text: "Deep dives on strategy", emoji: "📋", type: "architect" },
      { text: "Formal with full diligence", emoji: "📑", type: "guardian" },
    ],
  },
  {
    id: 7,
    question: "A crypto fund DMs you. You...",
    options: [
      { text: "Already in three 😎", emoji: "🌙", type: "hunter" },
      { text: "Intrigued if thesis is solid", emoji: "🧐", type: "architect" },
      { text: "Delete and block", emoji: "🗑️", type: "guardian" },
    ],
  },
];

const PERSONALITIES = {
  hunter: {
    name: "The Hunter",
    emoji: "🔥",
    title: "High-Risk, High-Reward Seeker",
    color: "from-orange-500 to-red-600",
    borderColor: "border-orange-400",
    bgColor: "bg-orange-500",
    description: "You chase alpha where others fear to tread. Emerging managers, pre-seed chaos, Fund I energy - that's your playground.",
    traits: ["Risk-tolerant", "Early-stage lover", "Emerging manager fan", "Conviction-driven"],
    famous: "You'd back PayPal Mafia before they were the PayPal Mafia",
    matchStyle: "First checks, bold bets, founder energy",
  },
  architect: {
    name: "The Architect",
    emoji: "🌿",
    title: "Strategic Builder",
    color: "from-emerald-500 to-green-600",
    borderColor: "border-emerald-400",
    bgColor: "bg-emerald-500",
    description: "You build portfolios like a chess master. Every allocation is intentional, thesis-driven, and part of a larger strategy.",
    traits: ["Thesis-driven", "Sector specialist", "Data-informed", "Long-term thinker"],
    famous: "You're the LP that GPs actually prep for",
    matchStyle: "Growth stage, clear thesis, proven operators",
  },
  guardian: {
    name: "The Guardian",
    emoji: "💧",
    title: "Steady Hand, Proven Paths",
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-cyan-400",
    bgColor: "bg-blue-500",
    description: "You protect capital like a fortress. Brand-name funds, established track records, and institutional-grade diligence are your standard.",
    traits: ["Risk-averse", "Track record focused", "Brand-conscious", "Institutional"],
    famous: "Your portfolio reads like a VC hall of fame",
    matchStyle: "Top-tier GPs, multi-stage, household names",
  },
};

interface PersonalityQuizProps {
  onComplete: (personality: "hunter" | "architect" | "guardian") => void;
}

export default function PersonalityQuiz({ onComplete }: PersonalityQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<("hunter" | "architect" | "guardian")[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<"hunter" | "architect" | "guardian" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);

  const handleAnswer = (type: "hunter" | "architect" | "guardian") => {
    setIsAnimating(true);
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      } else {
        // Calculate result
        const counts = { hunter: 0, architect: 0, guardian: 0 };
        newAnswers.forEach((a) => counts[a]++);
        const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as "hunter" | "architect" | "guardian";
        setResult(winner);
        setShowResult(true);
      }
    }, 300);
  };

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
  const question = QUIZ_QUESTIONS[currentQuestion];
  const personality = result ? PERSONALITIES[result] : null;

  // Share card component
  const ShareCard = () => {
    if (!personality) return null;
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="max-w-sm w-full">
          {/* The shareable card */}
          <div
            id="share-card"
            className={`bg-gradient-to-br ${personality.color} rounded-3xl p-6 shadow-2xl relative overflow-hidden`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              {/* Header */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">{personality.emoji}</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider">I am</div>
                <div className="text-white text-2xl font-black">{personality.name}</div>
                <div className="text-white/90 text-sm font-medium">{personality.title}</div>
              </div>

              {/* Traits */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {personality.traits.map((trait) => (
                  <span key={trait} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {trait}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-white/10 rounded-xl p-3 mb-4">
                <p className="text-white/90 text-sm italic text-center">"{personality.famous}"</p>
              </div>

              {/* Branding */}
              <div className="text-center">
                <div className="text-white font-bold text-lg">LP Match</div>
                <div className="text-white/60 text-xs">Find your perfect VC fund</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => {
                // Copy to clipboard or trigger share
                const text = `I'm ${personality.emoji} ${personality.name} - ${personality.title}!\n\nFind your LP personality at lp-fund-matcher.vercel.app`;
                navigator.clipboard.writeText(text);
                alert("Copied to clipboard! Share it on Twitter/LinkedIn 🚀");
              }}
              className="w-full py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <span>📋</span> Copy & Share
            </button>
            <button
              onClick={() => setShowShareCard(false)}
              className="w-full py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              Continue to Matching →
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (showResult && personality) {
    return (
      <>
        {showShareCard && <ShareCard />}
        <div className="min-h-screen bg-gray-950 p-4 overflow-hidden">
          {/* Animated background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-br ${personality.color} opacity-20`} />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>

          {/* Confetti burst */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6"][i % 5],
                animationDelay: `${Math.random() * 0.5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}

          <div className="max-w-lg mx-auto relative pt-8">
            {/* Result Card */}
            <div className="animate-scale-in">
              <div className={`bg-gradient-to-br ${personality.color} rounded-3xl p-8 shadow-2xl relative overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative text-center">
                  <div className="text-7xl mb-4 animate-bounce">{personality.emoji}</div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">You are</div>
                  <h1 className="text-4xl font-black text-white mb-2">{personality.name}</h1>
                  <p className="text-white/90 text-lg font-medium mb-6">{personality.title}</p>

                  <p className="text-white/80 text-base mb-6 leading-relaxed">
                    {personality.description}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {personality.traits.map((trait) => (
                      <span key={trait} className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Famous line */}
                  <div className="bg-white/10 rounded-xl p-4 mb-6">
                    <p className="text-white/90 italic">"{personality.famous}"</p>
                  </div>

                  {/* Match style */}
                  <div className="text-white/70 text-sm">
                    <span className="font-bold text-white">Your vibe:</span> {personality.matchStyle}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => setShowShareCard(true)}
                className={`w-full py-4 bg-gradient-to-r ${personality.color} text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg`}
              >
                <span>📸</span> Share My Personality
              </button>
              <button
                onClick={() => result && onComplete(result)}
                className="w-full py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Find My Matches <span>→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-2xl font-black text-white">{answers.filter(a => a === "hunter").length}</div>
                <div className="text-xs text-gray-400">🔥 Hunter</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-2xl font-black text-white">{answers.filter(a => a === "architect").length}</div>
                <div className="text-xs text-gray-400">🌿 Architect</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4">
                <div className="text-2xl font-black text-white">{answers.filter(a => a === "guardian").length}</div>
                <div className="text-xs text-gray-400">💧 Guardian</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-lg mx-auto relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-black text-white mb-1">
            LP <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Personality</span>
          </h1>
          <p className="text-sm text-gray-400">7 questions to find your investor DNA</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
          <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl mb-6">
            <h2 className="text-xl font-bold text-white mb-6 leading-relaxed">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.type)}
                  className="w-full p-4 rounded-xl text-left transition-all duration-200 transform hover:scale-[1.02] bg-gray-800/50 border-2 border-gray-700 hover:border-gray-500 hover:bg-gray-800 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{option.emoji}</span>
                    <span className="text-white font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Answer indicators */}
        <div className="flex justify-center gap-2">
          {QUIZ_QUESTIONS.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx < currentQuestion
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : idx === currentQuestion
                  ? "bg-white"
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
