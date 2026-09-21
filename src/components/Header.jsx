import React from 'react';
import { Volume2, VolumeX, Flame, Trophy, PlayCircle, BookOpen, Shuffle, HelpCircle } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export default function Header({
  mode,
  setMode,
  score,
  streak,
  currentIndex,
  totalQuestions,
  soundOn,
  setSoundOn,
  onReset
}) {
  const handleSoundToggle = () => {
    const newState = soundEffects.toggle();
    setSoundOn(newState);
  };

  return (
    <header className="w-full flex flex-col items-center select-none shadow-2xl z-30">
      {/* Iconic Knowlio Red Top Banner */}
      <div className="w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 border-b-4 border-red-900 py-3.5 px-4 shadow-xl flex items-center justify-between relative overflow-hidden">
        {/* Subtle diagonal gloss shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none" />

        {/* Left: Brand Icon or Reset */}
        <button
          onClick={onReset}
          className="flex items-center gap-2 bg-black/30 hover:bg-black/40 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full transition-all border border-white/20 active:scale-95"
          title="Restart Quiz"
        >
          <span className="text-base">🏎️</span>
          <span className="hidden sm:inline">New Game</span>
        </button>

        {/* Center: Bold Title matching YouTube video thumbnail */}
        <div className="flex items-center gap-1.5 md:gap-2.5 font-quiz tracking-tight uppercase text-center cursor-pointer" onClick={onReset}>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-black">
            GUESS THE
          </span>
          <span className="text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-black">
            CAR LOGO
          </span>
        </div>

        {/* Right: Sound Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSoundToggle}
            className={`p-2 rounded-full transition-all border ${
              soundOn
                ? 'bg-amber-400 text-slate-900 border-amber-300 shadow-md hover:bg-amber-300'
                : 'bg-black/40 text-slate-300 border-white/20 hover:bg-black/60'
            } active:scale-95`}
            title={soundOn ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </div>

      {/* Mode Navigation & Stats Bar */}
      <div className="w-full max-w-5xl px-4 py-2 flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20 text-sm">
        {/* Game Mode Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          <button
            onClick={() => setMode('classic')}
            className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
              mode === 'classic'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <PlayCircle size={15} />
            <span>Classic Quiz</span>
          </button>

          <button
            onClick={() => setMode('autoplay')}
            className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
              mode === 'autoplay'
                ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
            title="Plays continuously like the YouTube video"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping mr-0.5" />
            <span>Video Mode</span>
          </button>

          <button
            onClick={() => setMode('scramble')}
            className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
              mode === 'scramble'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Shuffle size={15} />
            <span>Letter Scramble</span>
          </button>

          <button
            onClick={() => setMode('study')}
            className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
              mode === 'study'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <BookOpen size={15} />
            <span>All 50 Logos</span>
          </button>
        </div>

        {/* Stats Pill (Score, Streak, Progress) */}
        {(mode === 'classic' || mode === 'scramble' || mode === 'autoplay') && (
          <div className="flex items-center gap-3 ml-auto font-bold text-xs sm:text-sm">
            {/* Streak Counter */}
            {streak > 1 && (
              <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 px-2.5 py-0.5 rounded-full animate-pop">
                <Flame size={15} className="text-amber-400 animate-pulse" />
                <span>{streak}x Streak</span>
              </div>
            )}

            {/* Score */}
            <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full">
              <Trophy size={14} className="text-yellow-400" />
              <span>Score: <strong className="text-yellow-400">{score}</strong></span>
            </div>

            {/* Counter */}
            <div className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">
              {currentIndex + 1} <span className="text-slate-500">/</span> {totalQuestions}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
