import React, { useState, useEffect, useRef } from 'react';
import { Clock, Check, X, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import Lifelines from './Lifelines';
import AnswerReveal from './AnswerReveal';
import CarLogoImage from './CarLogoImage';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({
  currentQuestion,
  currentIndex,
  totalQuestions,
  onAnswer,
  onNext,
  timerDuration = 15,
  timerEnabled = true
}) {
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [countryHintRevealed, setCountryHintRevealed] = useState(false);
  const [lifelinesUsed, setLifelinesUsed] = useState({
    '5050': false,
    'origin': false,
    'time': false
  });

  const timerRef = useRef(null);

  // Reset question state whenever currentQuestion changes
  useEffect(() => {
    setTimeLeft(timerDuration);
    setSelectedOption(null);
    setIsAnswered(false);
    setHiddenOptions([]);
    setCountryHintRevealed(false);
  }, [currentQuestion, timerDuration]);

  // Countdown timer loop
  useEffect(() => {
    if (isAnswered || !timerEnabled) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }

        // Sound cues for ticking
        if (prev <= 3) {
          soundEffects.warningTick();
        } else {
          soundEffects.tick();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isAnswered, currentQuestion, timerEnabled]);

  const handleTimeOut = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption('TIMEOUT');
    soundEffects.wrong();
    onAnswer({
      isCorrect: false,
      isTimeout: true,
      selected: null
    });
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    clearInterval(timerRef.current);
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option.toLowerCase() === currentQuestion.name.toLowerCase();
    if (isCorrect) {
      soundEffects.correct();
    } else {
      soundEffects.wrong();
    }

    onAnswer({
      isCorrect,
      isTimeout: false,
      selected: option
    });
  };

  // Lifeline handlers
  const handleUse5050 = () => {
    if (lifelinesUsed['5050'] || isAnswered) return;
    const incorrect = currentQuestion.shuffledOptions.filter(
      (opt) => opt.toLowerCase() !== currentQuestion.name.toLowerCase()
    );
    // Hide 2 incorrect answers
    const toHide = incorrect.slice(0, 2);
    setHiddenOptions(toHide);
    setLifelinesUsed((prev) => ({ ...prev, '5050': true }));
  };

  const handleUseOriginHint = () => {
    if (lifelinesUsed['origin'] || isAnswered) return;
    setCountryHintRevealed(true);
    setLifelinesUsed((prev) => ({ ...prev, 'origin': true }));
  };

  const handleUseExtraTime = () => {
    if (lifelinesUsed['time'] || isAnswered) return;
    setTimeLeft((prev) => prev + 5);
    setLifelinesUsed((prev) => ({ ...prev, 'time': true }));
  };

  // Timer bar percentage and color
  const timerPercent = Math.max(0, Math.min(100, (timeLeft / timerDuration) * 100));
  const timerColor =
    timeLeft <= 2
      ? 'bg-red-500 shadow-red-500/50'
      : timeLeft <= 4
      ? 'bg-amber-400 shadow-amber-400/50'
      : 'bg-emerald-400 shadow-emerald-400/50';

  // Difficulty label
  const difficultyLabels = {
    1: { name: 'Level 1: Everyday Brands', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
    2: { name: 'Level 2: Popular & Premium', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    3: { name: 'Level 3: Luxury & Sports', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    4: { name: 'Level 4: Supercars & Classic', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
  };
  const diff = difficultyLabels[currentQuestion.difficulty] || difficultyLabels[1];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-4 md:py-6">
      {/* Top Info Bar */}
      <div className="w-full flex items-center justify-between gap-2 mb-3">
        {/* Difficulty level badge */}
        <span className={`text-xs sm:text-sm font-bold px-3 py-1 rounded-full border ${diff.color}`}>
          {diff.name}
        </span>

        {timerEnabled && (
          <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1 rounded-full border border-slate-700/60 font-mono text-sm sm:text-base font-bold text-white shadow-inner">
            <Clock size={16} className={timeLeft <= 2 ? 'text-red-400 animate-pulse' : 'text-cyan-400'} />
            <span className={timeLeft <= 2 ? 'text-red-400 font-extrabold' : 'text-slate-200'}>
              00:{String(timeLeft).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>

      {/* Animated Timer Progress Bar */}
      {timerEnabled && (
        <div className="w-full h-2.5 bg-slate-950/80 rounded-full overflow-hidden mb-5 border border-slate-700/40 p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear shadow-lg ${timerColor}`}
            style={{ width: `${timerPercent}%` }}
          />
        </div>
      )}

      {/* Country Hint Tag (If revealed) */}
      {countryHintRevealed && (
        <div className="w-full max-w-lg mb-3 bg-cyan-950/70 border border-cyan-500/40 text-cyan-200 px-4 py-2 rounded-xl text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 animate-pop">
          <Sparkles size={16} className="text-cyan-400" />
          <span>Origin Hint: <strong>{currentQuestion.countryFlag} {currentQuestion.country}</strong></span>
        </div>
      )}

      {/* Main Quiz Arena: Left Logo Card, Right Options (matching Knowlio YouTube layout) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* LEFT / TOP: White Card with Car Logo */}
        <div className="md:col-span-6 w-full flex flex-col items-center">
          <div className="w-full aspect-square max-w-[320px] sm:max-w-[360px] md:max-w-none bg-white rounded-3xl p-6 sm:p-8 shadow-card-glow border-4 border-slate-200/90 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Subtle card sheen */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-100 to-transparent pointer-events-none rounded-tr-3xl" />

            {/* Logo Emblem (Official 1000Logos with SVG fallback) */}
            <div className="w-full h-full flex items-center justify-center p-2">
              <CarLogoImage logo={currentQuestion} revealed={isAnswered} />
            </div>

            {/* Hint overlay on bottom of card */}
            <div className="absolute bottom-2 text-slate-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
              {isAnswered ? currentQuestion.name : 'Guess the brand'}
            </div>
          </div>
        </div>

        {/* RIGHT / BOTTOM: 3D Glossy Multiple Choice Options (A, B, C, D) */}
        <div className="md:col-span-6 w-full flex flex-col gap-3 sm:gap-3.5">
          {currentQuestion.shuffledOptions.map((option, idx) => {
            const isHidden = hiddenOptions.includes(option);
            const isCorrectOption = option.toLowerCase() === currentQuestion.name.toLowerCase();
            const isSelected = selectedOption === option;

            if (isHidden) {
              return (
                <div
                  key={option}
                  className="w-full py-3.5 px-4 rounded-full border border-dashed border-slate-700/50 bg-slate-900/30 opacity-40 text-slate-600 text-center text-sm font-semibold select-none"
                >
                  <span className="line-through">{option}</span>
                </div>
              );
            }

            // Button styling based on quiz state
            let containerStyle = 'bg-white text-slate-900 hover:bg-slate-50 shadow-pill hover:shadow-pill-hover border border-slate-200';
            let badgeStyle = 'glossy-red-badge text-white';
            let statusIcon = null;

            if (isAnswered) {
              if (isCorrectOption) {
                containerStyle = 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 border-2 border-emerald-300 font-extrabold animate-pop';
                badgeStyle = 'glossy-green-badge text-white';
                statusIcon = <Check size={20} className="text-white shrink-0 stroke-[3]" />;
              } else if (isSelected) {
                containerStyle = 'bg-red-600 text-white shadow-lg shadow-red-600/40 border-2 border-red-400 line-through animate-shake';
                badgeStyle = 'bg-red-900 text-white';
                statusIcon = <X size={20} className="text-white shrink-0 stroke-[3]" />;
              } else {
                containerStyle = 'bg-slate-200/70 text-slate-500 opacity-60 border border-slate-300';
                badgeStyle = 'bg-slate-400 text-white';
              }
            }

            return (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                disabled={isAnswered}
                className={`w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-full flex items-center justify-between transition-all duration-200 active:scale-[0.98] ${containerStyle}`}
              >
                {/* Left Badge: Glossy Circle with Letter */}
                <div className="flex items-center gap-3 sm:gap-4 text-left">
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-quiz text-base sm:text-lg font-black shrink-0 transition-transform ${badgeStyle}`}
                  >
                    {OPTION_LETTERS[idx] || (idx + 1)}
                  </span>
                  <span className="font-quiz text-base sm:text-lg md:text-xl font-bold tracking-tight">
                    {option}
                  </span>
                </div>

                {/* Right Status Icon */}
                {statusIcon && <div>{statusIcon}</div>}
              </button>
            );
          })}

          {/* Lifelines controls */}
          {!isAnswered && (
            <Lifelines
              lifelinesUsed={lifelinesUsed}
              onUse5050={handleUse5050}
              onUseOriginHint={handleUseOriginHint}
              onUseExtraTime={handleUseExtraTime}
              countryHintRevealed={countryHintRevealed}
              disabled={isAnswered}
              timerEnabled={timerEnabled}
            />
          )}
        </div>
      </div>

      {/* Answer Reveal Box once question is completed */}
      {isAnswered && (
        <AnswerReveal
          currentLogo={currentQuestion}
          selectedAnswer={selectedOption}
          isCorrect={selectedOption?.toLowerCase() === currentQuestion.name.toLowerCase()}
          isTimeout={selectedOption === 'TIMEOUT'}
          onNext={onNext}
        />
      )}
    </div>
  );
}
