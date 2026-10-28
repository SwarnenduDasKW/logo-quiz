import React from 'react';
import { Volume2, VolumeX, Flame, Trophy, PlayCircle, BookOpen, Shuffle, Clock, Home, Sparkles } from 'lucide-react';
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
  timerEnabled,
  setTimerEnabled,
  onReset
}) {
  const handleSoundToggle = () => {
    const newState = soundEffects.toggle();
    setSoundOn(newState);
  };

  const isOpposite = mode === 'opposite';
  const isLanding = mode === 'landing';

  return (
    <header className="w-full flex flex-col items-center select-none shadow-2xl z-30">
      {/* Top Banner */}
      <div 
        className={`w-full py-3.5 px-4 shadow-xl flex items-center justify-between relative overflow-hidden transition-all ${
          isOpposite
            ? 'bg-gradient-to-r from-purple-800 via-pink-700 to-indigo-800 border-b-4 border-pink-900'
            : isLanding
            ? 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b-4 border-purple-950'
            : 'bg-gradient-to-r from-red-700 via-red-600 to-red-700 border-b-4 border-red-900'
        }`}
      >
        {/* Gloss shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none" />

        {/* Left: Home / Navigation */}
        <div className="flex items-center gap-2 z-10">
          {!isLanding && (
            <button
              onClick={() => setMode('landing')}
              className="flex items-center gap-1.5 bg-black/40 hover:bg-black/60 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full transition-all border border-white/20 active:scale-95"
              title="Return to Kids Hub Landing Page"
            >
              <Home size={15} />
              <span className="hidden sm:inline">Kids Hub</span>
            </button>
          )}

          {!isLanding && !isOpposite && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 bg-black/30 hover:bg-black/40 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full transition-all border border-white/20 active:scale-95"
              title="Restart Car Quiz"
            >
              <span className="text-base">🏎️</span>
              <span className="hidden md:inline">Restart</span>
            </button>
          )}

          {isLanding && (
            <div className="flex items-center gap-1.5 text-amber-300 font-extrabold text-xs sm:text-sm bg-black/30 px-3 py-1.5 rounded-full border border-amber-300/30">
              <Sparkles size={16} />
              <span>Kids Fun Zone</span>
            </div>
          )}
        </div>

        {/* Center: Title */}
        <div 
          className="flex items-center gap-1.5 md:gap-2.5 font-quiz tracking-tight uppercase text-center cursor-pointer z-10"
          onClick={() => {
            if (!isLanding && !isOpposite) onReset();
          }}
        >
          {isOpposite ? (
            <div className="flex items-center gap-2">
              <img 
                src="/Colorful-Opposite-Word-Quiz-Badge.png" 
                alt="Colorful Opposite Word Quiz Badge" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow" 
              />
              <span className="text-white text-lg sm:text-2xl md:text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                KIDS OPPOSITE
              </span>
              <span className="text-yellow-300 text-lg sm:text-2xl md:text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                WORDS QUIZ
              </span>
            </div>
          ) : isLanding ? (
            <>
              <span className="text-white text-lg sm:text-2xl md:text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                KIDS QUIZ
              </span>
              <span className="text-yellow-300 text-lg sm:text-2xl md:text-3xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                PLAYGROUND 🚀
              </span>
            </>
          ) : (
            <>
              <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-black">
                GUESS THE
              </span>
              <span className="text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-black">
                CAR LOGO
              </span>
            </>
          )}
        </div>

        {/* Right: Sound and Timer Toggles */}
        <div className="flex items-center gap-2 z-10">
          {!isLanding && !isOpposite && (
            <button
              type="button"
              role="switch"
              aria-checked={timerEnabled}
              aria-label="Question timer"
              onClick={() => setTimerEnabled((enabled) => !enabled)}
              className={`p-2 rounded-full transition-all border ${
                timerEnabled
                  ? 'bg-amber-400 text-slate-900 border-amber-300 shadow-md hover:bg-amber-300'
                  : 'bg-black/40 text-slate-300 border-white/20 hover:bg-black/60'
              } active:scale-95`}
              title={timerEnabled ? 'Timer on: 15 seconds' : 'Timer off'}
            >
              <Clock size={18} />
            </button>
          )}

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
      {!isLanding && mode !== 'opposite' && (
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
              <span>Classic Car Quiz</span>
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
              <span>Scramble</span>
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

            {/* Switch to Opposite Words Quiz Pill */}
            <button
              onClick={() => setMode('opposite')}
              className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition-all text-xs sm:text-sm ${
                mode === 'opposite'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/30'
                  : 'bg-gradient-to-r from-pink-900/60 to-purple-900/60 border border-pink-500/30 text-pink-200 hover:bg-pink-800/60'
              }`}
            >
              <span>🎈 Opposite Quiz</span>
            </button>
          </div>

          {/* Stats Pill (Score, Streak, Progress) for car quizzes */}
          {(mode === 'classic' || mode === 'scramble' || mode === 'autoplay') && (
            <div className="flex items-center gap-3 ml-auto font-bold text-xs sm:text-sm">
              {streak > 1 && (
                <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 px-2.5 py-0.5 rounded-full animate-pop">
                  <Flame size={15} className="text-amber-400 animate-pulse" />
                  <span>{streak}x Streak</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full">
                <Trophy size={14} className="text-yellow-400" />
                <span>Score: <strong className="text-yellow-400">{score}</strong></span>
              </div>

              <div className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                {currentIndex + 1} <span className="text-slate-500">/</span> {totalQuestions}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
