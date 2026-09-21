import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import CarLogoImage from './CarLogoImage';

export default function AnswerReveal({
  currentLogo,
  selectedAnswer,
  isCorrect,
  isTimeout,
  onNext
}) {
  return (
    <div className={`w-full max-w-xl mx-auto mt-4 bg-slate-900/95 border-2 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl animate-pop transition-all ${
      isCorrect ? 'border-emerald-500/80 shadow-emerald-500/20' : 'border-red-500/80 shadow-red-500/20'
    }`}>
      {/* Banner */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-700/60 pb-3 mb-3">
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <div className="flex items-center gap-1.5 text-emerald-400 font-quiz text-lg sm:text-xl font-black">
              <CheckCircle2 size={24} className="text-emerald-400" />
              <span>CORRECT!</span>
            </div>
          ) : isTimeout ? (
            <div className="flex items-center gap-1.5 text-amber-400 font-quiz text-lg sm:text-xl font-black">
              <XCircle size={24} className="text-amber-400" />
              <span>TIME'S UP!</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-red-400 font-quiz text-lg sm:text-xl font-black">
              <XCircle size={24} className="text-red-400" />
              <span>INCORRECT!</span>
            </div>
          )}
        </div>

        {/* Brand Name Highlight & Mini Thumbnail */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-xl p-1 shadow border border-slate-700 flex items-center justify-center shrink-0">
            <CarLogoImage logo={currentLogo} revealed={true} className="w-full h-full object-contain" />
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Official Brand:</span>
            <span className="text-lg sm:text-xl font-black text-white font-quiz">{currentLogo.name}</span>
          </div>
        </div>
      </div>

      {/* Brand Origin & Founded */}
      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold mb-3">
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700/50">
          <MapPin size={16} className="text-blue-400 shrink-0" />
          <span>{currentLogo.countryFlag} {currentLogo.country}</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-700/50">
          <Calendar size={16} className="text-amber-400 shrink-0" />
          <span>Est. {currentLogo.founded}</span>
        </div>
      </div>

      {/* Trivia Box */}
      <div className="bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border border-blue-500/30 rounded-xl p-3 mb-4 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
        <Sparkles size={18} className="text-yellow-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-yellow-300">Heritage: </strong>
          {currentLogo.trivia}
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-quiz text-base sm:text-lg py-3 px-6 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] font-black"
      >
        <span>Next Logo</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
