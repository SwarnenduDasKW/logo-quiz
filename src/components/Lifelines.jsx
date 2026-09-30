import React from 'react';
import { Sparkles, Globe, Timer } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export default function Lifelines({
  lifelinesUsed,
  onUse5050,
  onUseOriginHint,
  onUseExtraTime,
  countryHintRevealed,
  disabled,
  timerEnabled = true
}) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 my-2 select-none">
      {/* 50:50 Lifeline */}
      <button
        onClick={() => {
          soundEffects.lifeline();
          onUse5050();
        }}
        disabled={disabled || lifelinesUsed['5050']}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm border transition-all ${
          lifelinesUsed['5050']
            ? 'bg-slate-800/40 text-slate-500 border-slate-700/40 cursor-not-allowed opacity-50'
            : 'bg-indigo-600/80 hover:bg-indigo-500 text-white border-indigo-400/50 shadow-md shadow-indigo-500/20 active:scale-95'
        }`}
        title="Eliminate 2 incorrect answers"
      >
        <Sparkles size={14} className="text-yellow-300" />
        <span>50:50</span>
      </button>

      {/* Origin Country Hint */}
      <button
        onClick={() => {
          soundEffects.lifeline();
          onUseOriginHint();
        }}
        disabled={disabled || lifelinesUsed['origin'] || countryHintRevealed}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm border transition-all ${
          lifelinesUsed['origin'] || countryHintRevealed
            ? 'bg-slate-800/40 text-slate-500 border-slate-700/40 cursor-not-allowed opacity-50'
            : 'bg-cyan-600/80 hover:bg-cyan-500 text-white border-cyan-400/50 shadow-md shadow-cyan-500/20 active:scale-95'
        }`}
        title="Reveal country of origin"
      >
        <Globe size={14} className="text-cyan-200" />
        <span>Country Hint</span>
      </button>

      {timerEnabled && (
        <button
          onClick={() => {
            soundEffects.lifeline();
            onUseExtraTime();
          }}
          disabled={disabled || lifelinesUsed['time']}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm border transition-all ${
            lifelinesUsed['time']
              ? 'bg-slate-800/40 text-slate-500 border-slate-700/40 cursor-not-allowed opacity-50'
              : 'bg-emerald-600/80 hover:bg-emerald-500 text-white border-emerald-400/50 shadow-md shadow-emerald-500/20 active:scale-95'
          }`}
          title="Add +5 seconds to timer"
        >
          <Timer size={14} className="text-emerald-200" />
          <span>+5s Time</span>
        </button>
      )}
    </div>
  );
}
