import React, { useEffect } from 'react';
import { Trophy, Flame, RotateCcw, Award, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { fireConfetti } from '../utils/confetti';
import { soundEffects } from '../utils/soundEffects';

export default function ResultsScreen({
  score,
  correctCount,
  totalQuestions,
  maxStreak,
  history,
  onRestart,
  onPracticeMissed
}) {
  const accuracy = Math.round((correctCount / totalQuestions) * 100) || 0;

  // Rank determination
  let rank = {
    title: 'Learner Driver',
    badge: '🚦',
    color: 'from-slate-600 to-slate-800',
    desc: 'You are just beginning your automotive journey. Hit Study Mode to learn all 50 logos!'
  };

  if (accuracy >= 90) {
    rank = {
      title: 'Grand Prix Legend 🏆',
      badge: '🏎️',
      color: 'from-amber-500 to-yellow-600',
      desc: 'Masterclass! You know the world’s car emblems inside and out. True automotive royalty!'
    };
  } else if (accuracy >= 75) {
    rank = {
      title: 'Supercar Virtuoso',
      badge: '⚡',
      color: 'from-blue-500 to-indigo-600',
      desc: 'Outstanding performance! You can identify nearly every machine on the highway.'
    };
  } else if (accuracy >= 50) {
    rank = {
      title: 'Trackday Enthusiast',
      badge: '🏁',
      color: 'from-emerald-500 to-teal-600',
      desc: 'Great work! You have strong brand recognition and gearhead instincts.'
    };
  } else if (accuracy >= 30) {
    rank = {
      title: 'Weekend Cruiser',
      badge: '🚗',
      color: 'from-cyan-500 to-blue-600',
      desc: 'Decent effort! A little more practice with the luxury and exotic brands will get you to the top!'
    };
  }

  // Trigger celebration on mount
  useEffect(() => {
    soundEffects.victory();
    if (accuracy >= 50) {
      fireConfetti();
    }
  }, [accuracy]);

  const missedQuestions = history.filter((h) => !h.isCorrect);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 flex flex-col items-center select-none animate-pop">
      {/* Victory / Summary Card */}
      <div className="w-full bg-slate-900/90 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-600/20 to-transparent pointer-events-none" />

        {/* Big Rank Badge */}
        <div className="text-6xl sm:text-7xl mb-3 animate-bounce">
          {rank.badge}
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-quiz font-black text-white mb-1 drop-shadow-md">
          Quiz Complete!
        </h2>
        <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-quiz font-black text-base sm:text-lg px-5 py-1.5 rounded-full mb-3 shadow-lg">
          {rank.title}
        </div>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
          {rank.desc}
        </p>

        {/* Metrics Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-2xl">
            <span className="text-xs text-slate-400 block font-bold uppercase">Final Score</span>
            <span className="text-2xl sm:text-3xl font-quiz font-black text-yellow-400">{score}</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-2xl">
            <span className="text-xs text-slate-400 block font-bold uppercase">Correct</span>
            <span className="text-2xl sm:text-3xl font-quiz font-black text-emerald-400">
              {correctCount} <span className="text-sm text-slate-400 font-normal">/ {totalQuestions}</span>
            </span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-2xl">
            <span className="text-xs text-slate-400 block font-bold uppercase">Accuracy</span>
            <span className="text-2xl sm:text-3xl font-quiz font-black text-cyan-400">{accuracy}%</span>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/60 p-3 rounded-2xl">
            <span className="text-xs text-slate-400 block font-bold uppercase">Max Streak</span>
            <span className="text-2xl sm:text-3xl font-quiz font-black text-amber-400 flex items-center justify-center gap-1">
              <Flame size={20} className="text-amber-500" />
              {maxStreak}x
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-quiz font-black text-base shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <RotateCcw size={18} />
            <span>Play Again</span>
          </button>

          {missedQuestions.length > 0 && (
            <button
              onClick={() => onPracticeMissed(missedQuestions.map((m) => m.question))}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-quiz font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>Retry Missed ({missedQuestions.length})</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Breakdown of Answers */}
      <div className="w-full mt-8">
        <h3 className="text-lg font-quiz font-bold text-white mb-3 flex items-center gap-2">
          <span>Question Review ({history.length})</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-96 overflow-y-auto pr-1">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-semibold ${
                item.isCorrect
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                  : 'bg-red-950/30 border-red-500/30 text-red-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {item.isCorrect ? (
                  <CheckCircle size={18} className="text-emerald-400 shrink-0" />
                ) : (
                  <XCircle size={18} className="text-red-400 shrink-0" />
                )}
                <div>
                  <span className="font-bold text-white block">{item.question.name}</span>
                  {!item.isCorrect && (
                    <span className="text-[11px] text-slate-400">
                      You guessed: {item.selected || 'Timed Out'}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right text-slate-400 font-mono text-xs">
                {item.question.countryFlag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
