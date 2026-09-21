import React, { useState, useEffect } from 'react';
import { Check, X, ArrowRight, Sparkles, Delete } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import CarLogoImage from './CarLogoImage';

export default function ScrambleMode({
  currentQuestion,
  currentIndex,
  totalQuestions,
  onNext,
  onRecordScore
}) {
  const brandName = currentQuestion.name.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const [userLetters, setUserLetters] = useState([]);
  const [scrambledPool, setScrambledPool] = useState([]);
  const [status, setStatus] = useState('guessing'); // 'guessing' | 'correct' | 'wrong'

  useEffect(() => {
    // Generate pool of letters: brand letters + a few decoy letters
    const letters = brandName.split('');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const decoysCount = Math.max(2, 8 - letters.length);
    for (let i = 0; i < decoysCount; i++) {
      letters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }

    // Shuffle pool
    const pool = letters.map((char, id) => ({ id: `${char}_${id}`, char, used: false }));
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    setScrambledPool(pool);
    setUserLetters([]);
    setStatus('guessing');
  }, [currentQuestion, brandName]);

  const handlePickLetter = (item) => {
    if (status !== 'guessing' || item.used) return;
    if (userLetters.length >= brandName.length) return;

    soundEffects.tick();
    setUserLetters((prev) => [...prev, item]);
    setScrambledPool((prev) =>
      prev.map((p) => (p.id === item.id ? { ...p, used: true } : p))
    );
  };

  const handleRemoveLetter = (indexToRemove) => {
    if (status !== 'guessing') return;
    const removed = userLetters[indexToRemove];
    setUserLetters((prev) => prev.filter((_, i) => i !== indexToRemove));
    setScrambledPool((prev) =>
      prev.map((p) => (p.id === removed.id ? { ...p, used: false } : p))
    );
  };

  const handleCheck = () => {
    const attempted = userLetters.map((l) => l.char).join('');
    if (attempted === brandName) {
      soundEffects.correct();
      setStatus('correct');
      if (onRecordScore) onRecordScore(true);
    } else {
      soundEffects.wrong();
      setStatus('wrong');
      if (onRecordScore) onRecordScore(false);
    }
  };

  const handleClear = () => {
    if (status !== 'guessing') return;
    setUserLetters([]);
    setScrambledPool((prev) => prev.map((p) => ({ ...p, used: false })));
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 flex flex-col items-center select-none">
      {/* Question Counter */}
      <div className="w-full flex items-center justify-between mb-4 text-xs sm:text-sm font-bold text-slate-300">
        <span className="bg-purple-950/70 border border-purple-500/40 text-purple-300 px-3 py-1 rounded-full">
          Letter Scramble Challenge
        </span>
        <span>Question {currentIndex + 1} of {totalQuestions}</span>
      </div>

      {/* White Logo Card */}
      <div className="w-full max-w-[280px] aspect-square bg-white rounded-3xl p-6 shadow-card-glow border-4 border-slate-200/90 flex flex-col items-center justify-center relative mb-5">
        <div className="w-full h-full flex items-center justify-center p-2">
          <CarLogoImage logo={currentQuestion} revealed={status !== 'guessing'} />
        </div>
      </div>

      {/* Answer Slots */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        {Array.from({ length: brandName.length }).map((_, idx) => {
          const userItem = userLetters[idx];
          return (
            <button
              key={idx}
              onClick={() => userItem && handleRemoveLetter(idx)}
              className={`w-10 h-12 sm:w-12 sm:h-14 rounded-xl font-quiz text-xl sm:text-2xl font-black flex items-center justify-center border-2 transition-all ${
                userItem
                  ? status === 'correct'
                    ? 'bg-emerald-500 border-emerald-300 text-white animate-pop'
                    : status === 'wrong'
                    ? 'bg-red-500 border-red-300 text-white animate-shake'
                    : 'bg-white border-blue-400 text-slate-900 shadow-md active:scale-95'
                  : 'bg-slate-900/60 border-slate-700 text-slate-600'
              }`}
            >
              {userItem ? userItem.char : ''}
            </button>
          );
        })}
      </div>

      {/* Scrambled Pool Letter Tiles */}
      {status === 'guessing' && (
        <div className="w-full max-w-md flex flex-wrap items-center justify-center gap-2 mb-6">
          {scrambledPool.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePickLetter(item)}
              disabled={item.used}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl font-quiz text-lg font-bold border transition-all ${
                item.used
                  ? 'opacity-20 border-slate-700 bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-b from-slate-100 to-slate-200 hover:from-white hover:to-slate-100 text-slate-900 border-slate-300 shadow-md active:scale-95'
              }`}
            >
              {item.char}
            </button>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {status === 'guessing' ? (
          <>
            <button
              onClick={handleClear}
              disabled={userLetters.length === 0}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm flex items-center gap-1.5 disabled:opacity-40"
            >
              <Delete size={16} />
              <span>Clear</span>
            </button>

            <button
              onClick={handleCheck}
              disabled={userLetters.length !== brandName.length}
              className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-quiz font-bold text-base shadow-lg shadow-purple-600/30 flex items-center gap-2 disabled:opacity-40 active:scale-95"
            >
              <Check size={18} />
              <span>Submit Guess</span>
            </button>
          </>
        ) : (
          <button
            onClick={onNext}
            className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-quiz font-bold text-base shadow-lg shadow-emerald-600/30 flex items-center gap-2 active:scale-95"
          >
            <span>Next Brand</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>

      {/* Answer feedback if finished */}
      {status !== 'guessing' && (
        <div className="mt-4 text-center text-sm font-semibold text-slate-300">
          {status === 'correct' ? (
            <p className="text-emerald-400 font-bold">🎉 Excellent! You got {currentQuestion.name}!</p>
          ) : (
            <p className="text-red-400 font-bold">The correct brand is {currentQuestion.name}</p>
          )}
          <p className="text-xs text-slate-400 mt-1">{currentQuestion.countryFlag} {currentQuestion.country} • Est. {currentQuestion.founded}</p>
        </div>
      )}
    </div>
  );
}
