import React from 'react';
import { Sparkles, Trophy, Play, Star, BookOpen, Volume2, ShieldCheck, Heart } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export default function LandingPage({ onSelect }) {
  const handleSelect = (modeKey) => {
    soundEffects.correct();
    onSelect(modeKey);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 flex flex-col items-center select-none text-slate-100">
      {/* Hero Welcome Header */}
      <div className="text-center max-w-2xl mb-8 sm:mb-12 relative flex flex-col items-center">
        {/* Featured Badges Duo */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
          <img 
            src="/Colorful-Opposite-Word-Quiz-Badge.png" 
            alt="Colorful Opposite Word Quiz Badge" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_14px_rgba(236,72,153,0.7)] hover:scale-110 transition-transform" 
            title="Opposite Words Quiz"
          />
          <span className="text-amber-400 font-black text-xl">⚡</span>
          <img 
            src="/Neon Logo Quiz Car Badge small.png" 
            alt="Neon Logo Quiz Car Badge" 
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_14px_rgba(239,68,68,0.7)] hover:scale-110 transition-transform" 
            title="Car Logos Quiz"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 via-pink-400/20 to-purple-400/20 border border-amber-300/40 text-amber-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-4 shadow-sm animate-pulse">
          <Sparkles size={16} className="text-amber-300" />
          <span>Interactive Kids Learning Playground</span>
          <Sparkles size={16} className="text-amber-300" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-lg font-quiz">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
            Choose Your Fun Quiz!
          </span>
        </h1>

        <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed font-medium">
          Pick an adventure below: Guess legendary car logos or master 100 opposite words with colorful pictures and voice!
        </p>
      </div>

      {/* Two Big Interactive Game Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 max-w-4xl">
        {/* Card 1: Kids Opposite Words Quiz (Featured New!) */}
        <div 
          onClick={() => handleSelect('opposite')}
          className="group relative bg-gradient-to-b from-indigo-900/90 via-purple-950/90 to-slate-900/95 border-2 border-pink-400/50 hover:border-pink-300 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-pink-500/20 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-400/30 transition-all" />

          {/* Card Top: Badges & Mascot */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-pink-500/20 border border-pink-400/40 text-pink-300 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1">
                <Star size={12} className="text-pink-300" /> New & Kid-Friendly
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-full">
                Ages 3 – 10
              </span>
            </div>

            {/* Icon Graphic with Colorful Opposite Word Quiz Badge */}
            <div className="w-20 h-20 bg-gradient-to-tr from-slate-900 via-purple-950 to-pink-950 border-2 border-pink-400/50 rounded-3xl p-2 flex items-center justify-center shadow-lg shadow-pink-500/40 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform overflow-hidden">
              <img 
                src="/Colorful-Opposite-Word-Quiz-Badge.png" 
                alt="Colorful Opposite Word Quiz Badge" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(236,72,153,0.6)]" 
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-pink-200 transition-colors">
              Opposite Words Quiz
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Learn antonyms with cheerful emojis, real speech pronunciation, and interactive challenges.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-200 flex items-center gap-1">
                🐣 5 Progressive Levels (20w each)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200 flex items-center gap-1">
                🗣️ Speech Voice
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-200 flex items-center gap-1">
                🌟 All 100 Words
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 flex items-center gap-1">
                📺 Miss Kaye Video Mode
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelect('opposite');
            }}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95"
          >
            <span>Play Opposite Words</span>
            <Play size={20} className="fill-white" />
          </button>
        </div>

        {/* Card 2: Famous Car Logo Quiz (Knowlio Edition) */}
        <div 
          onClick={() => handleSelect('classic')}
          className="group relative bg-gradient-to-b from-blue-950/90 via-slate-900/90 to-slate-900/95 border-2 border-blue-400/50 hover:border-blue-300 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 cursor-pointer flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/30 transition-all" />

          {/* Card Top */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-red-600/30 border border-red-500/50 text-red-300 font-extrabold text-xs rounded-full uppercase tracking-wider flex items-center gap-1">
                🏎️ Knowlio Classic
              </span>
              <span className="text-xs font-bold text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-1 rounded-full">
                All Ages
              </span>
            </div>

            {/* Icon Graphic with Neon Car Badge */}
            <div className="w-20 h-20 bg-gradient-to-tr from-slate-900 via-red-950 to-slate-900 border-2 border-red-500/50 rounded-3xl p-2.5 flex items-center justify-center shadow-lg shadow-red-500/40 mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform overflow-hidden">
              <img 
                src="/Neon Logo Quiz Car Badge small.png" 
                alt="Neon Logo Quiz Car Badge" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(239,68,68,0.6)]" 
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
              Car Logos Quiz
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Can you name 60 famous car emblems? Features high-octane Speed Run, Letter Scramble, and full YouTube Video Auto-Play mode!
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-200 flex items-center gap-1">
                🏁 60 Famous Brands
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200 flex items-center gap-1">
                🔤 Letter Scramble
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-500/30 text-red-200 flex items-center gap-1">
                🔥 Streaks & Combos
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSelect('classic')}
            }
            className="w-full py-3.5 px-6 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-slate-950 font-extrabold text-base sm:text-lg rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95"
          >
            <span>Play Car Logos</span>
            <Play size={20} className="fill-slate-950" />
          </button>
        </div>
      </div>

      {/* Trust & Safe for Kids Footer Highlights */}
      <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-6 bg-slate-900/60 border border-blue-500/20 rounded-2xl text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-400" />
          <span>100% Kid Safe & Ad-Free</span>
        </div>
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-amber-400" />
          <span>Speech Audio & Sound FX</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart size={18} className="text-rose-400" />
          <span>Fun Educational Vocabulary</span>
        </div>
      </div>
    </div>
  );
}
