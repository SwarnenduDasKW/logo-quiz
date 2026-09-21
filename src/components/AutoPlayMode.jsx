import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Check, X, Sparkles, RefreshCw } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import CarLogoImage from './CarLogoImage';

export default function AutoPlayMode({
  questions,
  onFinish,
  onRecordScore
}) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('guessing'); // 'guessing' | 'revealed'
  const [countdown, setCountdown] = useState(5);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userTally, setUserTally] = useState({ correct: 0, total: 0 });
  const [selfScoreGiven, setSelfScoreGiven] = useState(false);

  const current = questions[index] || questions[0];

  useEffect(() => {
    if (!isPlaying) return;

    let timer;
    if (phase === 'guessing') {
      if (countdown > 0) {
        soundEffects.tick();
        timer = setTimeout(() => {
          setCountdown((c) => c - 1);
        }, 1000);
      } else {
        // Switch to revealed
        setPhase('revealed');
        soundEffects.correct();
        setCountdown(3); // 3 seconds to look at answer
      }
    } else if (phase === 'revealed') {
      if (countdown > 0) {
        timer = setTimeout(() => {
          setCountdown((c) => c - 1);
        }, 1000);
      } else {
        // Advance to next
        if (index < questions.length - 1) {
          setIndex((i) => i + 1);
          setPhase('guessing');
          setCountdown(5);
          setSelfScoreGiven(false);
        } else {
          setIsPlaying(false);
          if (onFinish) onFinish(userTally);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [isPlaying, phase, countdown, index, questions.length]);

  const handleSelfScore = (knewIt) => {
    if (selfScoreGiven) return;
    setSelfScoreGiven(true);
    if (knewIt) {
      soundEffects.correct();
      setUserTally((prev) => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      if (onRecordScore) onRecordScore(true);
    } else {
      soundEffects.wrong();
      setUserTally((prev) => ({ ...prev, total: prev.total + 1 }));
      if (onRecordScore) onRecordScore(false);
    }
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
      setPhase('guessing');
      setCountdown(5);
      setSelfScoreGiven(false);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      setPhase('guessing');
      setCountdown(5);
      setSelfScoreGiven(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col items-center select-none">
      {/* Top Video Header */}
      <div className="w-full flex items-center justify-between bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-700/60 mb-4 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
          <span className="text-white font-bold uppercase tracking-wider text-xs sm:text-sm">
            YouTube Video Mode (Auto-Play)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-yellow-400 font-mono text-xs sm:text-sm">
            Self-Score: <strong>{userTally.correct}</strong> / {userTally.total}
          </div>
          <div className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full text-xs">
            {index + 1} of {questions.length}
          </div>
        </div>
      </div>

      {/* Main Video Screen Container */}
      <div className="w-full bg-gradient-to-b from-blue-900/70 to-slate-900/90 rounded-3xl p-6 sm:p-8 border-4 border-blue-500/30 shadow-2xl flex flex-col items-center relative overflow-hidden">
        {/* Phase Indicator */}
        <div className="mb-4">
          {phase === 'guessing' ? (
            <div className="flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-4 py-1.5 rounded-full font-quiz text-sm sm:text-base font-bold animate-pulse">
              <span>Guess the logo!</span>
              <span className="font-mono text-lg font-black text-amber-400">00:0{countdown}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-5 py-1.5 rounded-full font-quiz text-base sm:text-lg font-black animate-pop">
              <span>ANSWER REVEALED!</span>
            </div>
          )}
        </div>

        {/* White Logo Card */}
        <div className="w-full max-w-[340px] aspect-square bg-white rounded-3xl p-6 shadow-card-glow border-4 border-slate-200/90 flex flex-col items-center justify-center relative my-3">
          <div className="w-full h-full flex items-center justify-center p-2">
            <CarLogoImage logo={current} revealed={phase === 'revealed'} />
          </div>

          <div className="absolute bottom-2 text-slate-400 text-xs font-semibold tracking-widest uppercase">
            {phase === 'revealed' ? current.name : `Question #${index + 1}`}
          </div>
        </div>

        {/* Revealed Brand Card */}
        {phase === 'revealed' ? (
          <div className="w-full max-w-md mt-4 text-center animate-pop">
            <h2 className="text-3xl sm:text-4xl font-quiz font-black text-white mb-2 drop-shadow-md">
              {current.name}
            </h2>
            <div className="flex items-center justify-center gap-3 text-sm text-slate-300 font-semibold mb-3">
              <span>{current.countryFlag} {current.country}</span>
              <span>•</span>
              <span>Founded {current.founded}</span>
            </div>
            <p className="text-xs sm:text-sm text-blue-200 bg-blue-950/60 border border-blue-500/30 p-3 rounded-xl max-w-sm mx-auto leading-relaxed">
              {current.trivia}
            </p>

            {/* Self-Score Buttons */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => handleSelfScore(true)}
                disabled={selfScoreGiven}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-quiz font-bold text-sm transition-all ${
                  selfScoreGiven
                    ? 'opacity-50 cursor-not-allowed bg-slate-800 text-slate-400'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 active:scale-95'
                }`}
              >
                <Check size={18} />
                <span>I Knew It!</span>
              </button>

              <button
                onClick={() => handleSelfScore(false)}
                disabled={selfScoreGiven}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-quiz font-bold text-sm transition-all ${
                  selfScoreGiven
                    ? 'opacity-50 cursor-not-allowed bg-slate-800 text-slate-400'
                    : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 active:scale-95'
                }`}
              >
                <X size={18} />
                <span>Missed It</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 text-center text-slate-300 text-sm">
            <p className="font-semibold text-slate-400">Options:</p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              {current.shuffledOptions.map((opt) => (
                <span key={opt} className="bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700 text-xs text-white font-bold">
                  {opt}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Video Player Controls Bar */}
        <div className="w-full max-w-md flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-700/50">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 active:scale-95"
            title="Previous"
          >
            <SkipBack size={18} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/40 active:scale-95"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
          </button>

          <button
            onClick={handleNext}
            disabled={index >= questions.length - 1}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 active:scale-95"
            title="Next"
          >
            <SkipForward size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
