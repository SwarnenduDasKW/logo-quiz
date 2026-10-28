import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Sparkles, 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  Home, 
  Clock, 
  Award, 
  Play, 
  Pause, 
  HelpCircle, 
  CheckCircle2, 
  XCircle,
  Tv,
  Gamepad2,
  ListFilter,
  Search,
  Shuffle,
  ChevronRight,
  Layers,
  Globe
} from 'lucide-react';
import { OPPOSITE_WORDS, LEVELS, getOppositeQuestions } from '../data/oppositeWords';
import { soundEffects } from '../utils/soundEffects';
import { fireConfetti } from '../utils/confetti';

export default function OppositeQuiz({ onFinish }) {
  // Current active level: 1 | 2 | 3 | 4 | 5 | 'all'
  const [currentLevel, setCurrentLevel] = useState(1);
  // Quiz submode: 'quiz' | 'levels' | 'learn' | 'browse' | 'results'
  const [subMode, setSubMode] = useState('quiz');
  const [questions, setQuestions] = useState(() => getOppositeQuestions(1, 20));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [history, setHistory] = useState([]);
  
  // Timer & Speech / Language settings
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [speechLang, setSpeechLang] = useState('en-US'); // 'en-US' | 'en-GB' | 'es-ES'
  const [showClue, setShowClue] = useState(false);

  // Auto/Learn mode state
  const [learnLevel, setLearnLevel] = useState('all');
  const [learnIndex, setLearnIndex] = useState(0);
  const [learnRevealed, setLearnRevealed] = useState(false);
  const [learnAutoPlay, setLearnAutoPlay] = useState(true);

  // Search filter for Browse mode
  const [searchQuery, setSearchQuery] = useState('');
  const [browseLevel, setBrowseLevel] = useState('all');

  const currentQ = questions[currentIndex] || questions[0];
  const timerRef = useRef(null);
  const activeLevelMeta = LEVELS.find((l) => l.level === currentLevel) || {
    level: 'All',
    title: '100 Words Marathon',
    age: 'All Ages',
    icon: '🌟',
    badge: 'Marathon',
    color: 'from-amber-400 to-pink-500',
    borderColor: 'border-amber-400/40',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-300',
    desc: 'All 100 progressive opposite pairs'
  };

  // Text-To-Speech helper
  const speakText = (text) => {
    if (!voiceEnabled || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.lang = speechLang;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  };

  // Announce question when it changes in quiz mode
  useEffect(() => {
    if (subMode === 'quiz' && currentQ) {
      setSelectedOption(null);
      setHasAnswered(false);
      setShowClue(false);
      setTimeLeft(10);

      const timer = setTimeout(() => {
        speakText(`What is the opposite of ${currentQ.word}?`);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, subMode, questions, speechLang]);

  // Countdown timer in Quiz mode
  useEffect(() => {
    if (subMode !== 'quiz' || !timerEnabled || hasAnswered) {
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
        if (prev <= 3) {
          soundEffects.warningTick();
        } else {
          soundEffects.tick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [subMode, timerEnabled, hasAnswered, currentIndex]);

  const handleTimeOut = () => {
    if (hasAnswered) return;
    setHasAnswered(true);
    soundEffects.wrong();
    setStreak(0);
    speakText(`Time is up! The opposite of ${currentQ.word} is ${currentQ.opposite}!`);
    setHistory((prev) => [
      ...prev,
      { question: currentQ, selected: 'Time Out', isCorrect: false }
    ]);
  };

  const handleSelectOption = (opt) => {
    if (hasAnswered) return;
    clearInterval(timerRef.current);
    setSelectedOption(opt);
    setHasAnswered(true);

    const isCorrect = opt.text.toLowerCase() === currentQ.opposite.toLowerCase();

    if (isCorrect) {
      soundEffects.correct();
      const points = 100 + streak * 20;
      setScore((s) => s + points);
      setStreak((s) => {
        const next = s + 1;
        setMaxStreak((m) => Math.max(m, next));
        if (next > 1 && next % 3 === 0) soundEffects.streak();
        return next;
      });
      speakText(`Super job! The opposite of ${currentQ.word} is ${currentQ.opposite}!`);
    } else {
      soundEffects.wrong();
      setStreak(0);
      speakText(`Nice try! The opposite of ${currentQ.word} is ${currentQ.opposite}!`);
    }

    setHistory((prev) => [
      ...prev,
      { question: currentQ, selected: opt.text, isCorrect }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      fireConfetti();
      soundEffects.victory();
      setSubMode('results');
    }
  };

  const handleStartLevel = (levelNum) => {
    setCurrentLevel(levelNum);
    const count = levelNum === 'all' ? 100 : 20;
    setQuestions(getOppositeQuestions(levelNum, count));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHistory([]);
    setSelectedOption(null);
    setHasAnswered(false);
    setSubMode('quiz');
  };

  const handlePracticeMissed = () => {
    const missed = history.filter((h) => !h.isCorrect).map((h) => h.question);
    if (missed.length > 0) {
      setQuestions(missed.map((item) => {
        const otherOpposites = OPPOSITE_WORDS
          .filter((w) => w.opposite.toLowerCase() !== item.opposite.toLowerCase())
          .map((w) => ({ text: w.opposite, emoji: w.oppositeEmoji }));
        const shuffledDistractors = otherOpposites.sort(() => 0.5 - Math.random()).slice(0, 3);
        const correctOption = { text: item.opposite, emoji: item.oppositeEmoji, isCorrect: true };
        const distractors = shuffledDistractors.map((d) => ({ text: d.text, emoji: d.emoji, isCorrect: false }));
        return { ...item, options: [correctOption, ...distractors].sort(() => 0.5 - Math.random()) };
      }));
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setMaxStreak(0);
      setHistory([]);
      setSelectedOption(null);
      setHasAnswered(false);
      setSubMode('quiz');
    }
  };

  // Words list for Learn Video Mode
  const learnPool = learnLevel === 'all' 
    ? OPPOSITE_WORDS 
    : OPPOSITE_WORDS.filter((w) => w.level === Number(learnLevel));
  const currentLearn = learnPool[learnIndex % learnPool.length] || OPPOSITE_WORDS[0];

  useEffect(() => {
    if (subMode !== 'learn' || !learnAutoPlay) return;

    setLearnRevealed(false);
    speakText(`${currentLearn.word}! What is the opposite?`);

    const revealTimer = setTimeout(() => {
      setLearnRevealed(true);
      soundEffects.correct();
      speakText(`${currentLearn.opposite}! ${currentLearn.example}`);
    }, 2800);

    const nextTimer = setTimeout(() => {
      setLearnIndex((prev) => (prev + 1) % learnPool.length);
    }, 6000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(nextTimer);
    };
  }, [subMode, learnIndex, learnAutoPlay, learnLevel, learnPool.length, speechLang]);

  // Words list for Browse All 100 Words Mode
  const filteredWords = OPPOSITE_WORDS.filter((w) => {
    const matchesLevel = browseLevel === 'all' || w.level === Number(browseLevel);
    const matchesQuery = 
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.opposite.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 flex flex-col items-center select-none">
      {/* ========================================================= */}
      {/* CENTERED TOP BANNER NAVIGATION & CONTROLS */}
      {/* ========================================================= */}
      <div className="w-full bg-slate-900/95 backdrop-blur-md border border-amber-400/30 rounded-3xl p-3 sm:p-4 mb-4 shadow-2xl flex flex-col items-center justify-center gap-3">
        {/* Row 1: Centered Main Navigation Mode Buttons */}
        <div className="w-full flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 text-center">
          <button
            onClick={onFinish}
            className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
            title="Return to Kids Hub"
          >
            <Home size={16} />
            <span>Kids Hub</span>
          </button>

          <button
            onClick={() => setSubMode('levels')}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              subMode === 'levels'
                ? 'bg-amber-400 text-slate-950 shadow-lg font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Layers size={16} />
            <span>5 Levels</span>
          </button>

          <button
            onClick={() => setSubMode('quiz')}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              subMode === 'quiz'
                ? 'bg-emerald-500 text-slate-950 shadow-lg font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Gamepad2 size={16} />
            <span>Quiz Game</span>
          </button>

          <button
            onClick={() => {
              setSubMode('learn');
              setLearnIndex(0);
            }}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              subMode === 'learn'
                ? 'bg-cyan-400 text-slate-950 shadow-lg font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Tv size={16} />
            <span>Video Mode</span>
          </button>

          <button
            onClick={() => setSubMode('browse')}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              subMode === 'browse'
                ? 'bg-purple-500 text-white shadow-lg font-extrabold'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <ListFilter size={16} />
            <span>100 Words 📖</span>
          </button>
        </div>

        {/* Row 2: Centered Level Selector, Language / Voice, Timer & Score Buttons */}
        <div className="w-full flex items-center justify-center flex-wrap gap-2 sm:gap-3 pt-2.5 border-t border-slate-800/80 text-xs font-bold text-center">
          {/* Centered Level Selector Buttons */}
          <div className="flex items-center justify-center gap-1 bg-slate-800/90 rounded-xl p-1 border border-slate-700 shadow-inner">
            <span className="text-[11px] text-slate-400 px-1 font-semibold hidden sm:inline">Level:</span>
            {[1, 2, 3, 4, 5, 'all'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => handleStartLevel(lvl)}
                className={`px-2 py-1 rounded-lg transition-all ${
                  currentLevel === lvl
                    ? 'bg-amber-400 text-slate-950 shadow font-extrabold scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={lvl === 'all' ? 'All 100 Words' : `Level ${lvl} (20 Words)`}
              >
                {lvl === 'all' ? '100🌟' : `L${lvl}`}
              </button>
            ))}
          </div>

          {/* Centered Language / Voice Accent Selector */}
          <div className="flex items-center justify-center gap-1.5 bg-slate-800/90 rounded-xl px-2.5 py-1 border border-slate-700 text-slate-300 shadow-inner">
            <Globe size={14} className="text-cyan-400" />
            <span className="text-[11px] text-slate-400 font-semibold hidden sm:inline">Voice:</span>
            <select
              value={speechLang}
              onChange={(e) => setSpeechLang(e.target.value)}
              className="bg-transparent text-slate-200 text-xs font-semibold focus:outline-none cursor-pointer"
              title="Select speech accent / language"
            >
              <option value="en-US" className="bg-slate-800 text-white">English 🇺🇸 (US)</option>
              <option value="en-GB" className="bg-slate-800 text-white">English 🇬🇧 (UK)</option>
              <option value="es-ES" className="bg-slate-800 text-white">Español 🇪🇸 (ES)</option>
            </select>
          </div>

          {/* Voice Reader Toggle */}
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`p-1.5 px-2.5 rounded-xl transition-all border flex items-center justify-center gap-1.5 ${
              voiceEnabled
                ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
            title={voiceEnabled ? 'Voice Reader ON' : 'Voice Reader OFF'}
          >
            <Volume2 size={15} />
            <span className="hidden sm:inline">{voiceEnabled ? 'Voice ON' : 'Mute'}</span>
          </button>

          {/* Timer Toggle */}
          {subMode === 'quiz' && (
            <button
              onClick={() => setTimerEnabled(!timerEnabled)}
              className={`p-1.5 px-2.5 rounded-xl transition-all border flex items-center justify-center gap-1.5 ${
                timerEnabled
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
              title={timerEnabled ? 'Timer ON (10s)' : 'Timer OFF (Relaxed)'}
            >
              <Clock size={15} />
              <span className="hidden sm:inline">{timerEnabled ? '10s' : 'No Timer'}</span>
            </button>
          )}

          {/* Score Pill in Quiz Mode */}
          {subMode === 'quiz' && (
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/40 rounded-xl text-amber-300 font-bold">
              <Trophy size={14} className="text-amber-400" />
              <span>Score: {score}</span>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. LEVEL SELECTION MAP (5 Progressive Levels) */}
      {/* ========================================================= */}
      {subMode === 'levels' && (
        <div className="w-full max-w-3xl flex flex-col items-center animate-fadeIn">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-white mb-2 flex items-center justify-center gap-2">
              <span>🌟 5 Progressive Learning Levels</span>
            </h2>
            <p className="text-slate-300 text-sm max-w-lg">
              Start with easy pre-school words and gradually advance through kindergarten, 1st grade, 2nd grade, to Word Master!
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {LEVELS.map((lvl) => {
              const isCurrent = currentLevel === lvl.level;
              return (
                <div
                  key={lvl.level}
                  onClick={() => handleStartLevel(lvl.level)}
                  className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 shadow-xl relative overflow-hidden ${
                    isCurrent
                      ? 'bg-slate-900 border-amber-400 shadow-amber-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl filter drop-shadow">{lvl.icon}</span>
                      <span className={`text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${lvl.badgeColor || 'border-slate-700 bg-slate-800 text-slate-300'}`}>
                        {lvl.age}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white mb-1 group-hover:text-amber-300 transition-colors">
                      Level {lvl.level}: {lvl.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {lvl.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300">20 Words</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartLevel(lvl.level);
                      }}
                      className="px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1 active:scale-95"
                    >
                      <span>Play Level</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* All 100 Words Marathon Card */}
            <div
              onClick={() => handleStartLevel('all')}
              className={`p-5 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between group hover:-translate-y-1 shadow-xl relative overflow-hidden bg-gradient-to-br from-indigo-950/90 via-purple-950/90 to-slate-900 border-pink-400/50 hover:border-pink-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">🏆</span>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-pink-400/40 bg-pink-500/20 text-pink-300">
                    Grand Challenge
                  </span>
                </div>

                <h3 className="text-lg font-black text-white mb-1 group-hover:text-pink-300 transition-colors">
                  100 Words Marathon
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Challenge yourself to all 100 opposite words in one epic learning game!
                </p>
              </div>

              <div className="pt-3 border-t border-purple-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-pink-300">100 Words</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStartLevel('all');
                  }}
                  className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1 active:scale-95"
                >
                  <span>Start Marathon</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. QUIZ MODE */}
      {/* ========================================================= */}
      {subMode === 'quiz' && (
        <div className="w-full flex flex-col items-center">
          {/* Progress Bar & Level Info */}
          <div className="w-full max-w-xl flex items-center justify-between gap-3 mb-3 px-1 text-xs sm:text-sm font-bold text-slate-300">
            <button
              onClick={() => setSubMode('levels')}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-xl border border-slate-700 text-amber-300 transition-all text-xs"
              title="Click to change level"
            >
              <span>{activeLevelMeta.icon}</span>
              <span>{typeof currentLevel === 'number' ? `Level ${currentLevel}: ${activeLevelMeta.title}` : '100 Words Marathon'}</span>
            </button>

            <span>
              Word <span className="text-amber-300 text-base">{currentIndex + 1}</span> of {questions.length}
            </span>

            {streak > 1 && (
              <span className="flex items-center gap-1 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-2.5 py-0.5 rounded-full animate-bounce">
                🔥 {streak}x
              </span>
            )}

            {timerEnabled && (
              <div
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono font-bold ${
                  timeLeft <= 3 ? 'bg-red-500/30 text-red-300 border border-red-500/50 animate-pulse' : 'bg-slate-800 text-slate-300'
                }`}
              >
                ⏱️ {timeLeft}s
              </div>
            )}
          </div>

          {/* Main Question Card */}
          <div className="w-full max-w-xl bg-gradient-to-b from-indigo-950/90 via-slate-900/90 to-purple-950/90 border-2 border-indigo-400/30 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header Question */}
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/Colorful-Opposite-Word-Quiz-Badge.png" 
                alt="Colorful Opposite Word Quiz Badge" 
                className="w-7 h-7 object-contain filter drop-shadow" 
              />
              <span className="text-xs uppercase tracking-widest font-extrabold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                {activeLevelMeta.title} ({activeLevelMeta.age})
              </span>
              <button
                onClick={() => speakText(`What is the opposite of ${currentQ.word}?`)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-all border border-cyan-400/30 active:scale-95"
                title="Hear word pronunciation"
              >
                <Volume2 size={16} />
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 text-center mb-4">
              What is the opposite of:
            </h2>

            {/* Big Target Word Box */}
            <div className="w-full bg-gradient-to-r from-amber-400/20 via-pink-400/20 to-indigo-400/20 border-2 border-amber-300/40 rounded-2xl py-4 px-6 flex flex-col items-center justify-center mb-6 shadow-inner group hover:scale-[1.02] transition-transform">
              <span className="text-5xl sm:text-6xl mb-2 filter drop-shadow">
                {currentQ.wordEmoji}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-wide drop-shadow-md">
                "{currentQ.word}"
              </span>
            </div>

            {/* Clue Accordion */}
            <div className="mb-4 text-center">
              {!showClue ? (
                <button
                  onClick={() => {
                    setShowClue(true);
                    soundEffects.lifeline();
                  }}
                  className="flex items-center gap-1.5 text-xs text-amber-300/80 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30 transition-all"
                >
                  <HelpCircle size={14} />
                  <span>Need a friendly clue?</span>
                </button>
              ) : (
                <p className="text-xs sm:text-sm text-cyan-200 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1.5 rounded-xl animate-fadeIn">
                  💡 {currentQ.example}
                </p>
              )}
            </div>

            {/* 4 Choice Buttons */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption?.text === opt.text;
                const isTargetOpposite = opt.text.toLowerCase() === currentQ.opposite.toLowerCase();

                let btnStyle = 'bg-slate-800/90 border-slate-700 text-slate-200 hover:bg-slate-700/90 hover:border-amber-400/50';

                if (hasAnswered) {
                  if (isTargetOpposite) {
                    btnStyle = 'bg-emerald-600/90 border-emerald-400 text-white shadow-lg shadow-emerald-500/30 animate-pulse';
                  } else if (isSelected && !isTargetOpposite) {
                    btnStyle = 'bg-rose-600/90 border-rose-400 text-white shadow-lg shadow-rose-500/30';
                  } else {
                    btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full py-3.5 px-4 rounded-2xl border-2 flex items-center justify-between font-bold text-base sm:text-lg transition-all transform active:scale-95 shadow-md ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl filter drop-shadow">{opt.emoji}</span>
                      <span>{opt.text}</span>
                    </div>

                    {hasAnswered && isTargetOpposite && (
                      <CheckCircle2 size={20} className="text-emerald-300" />
                    )}
                    {hasAnswered && isSelected && !isTargetOpposite && (
                      <XCircle size={20} className="text-rose-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button or Feedback */}
            {hasAnswered && (
              <div className="w-full flex flex-col items-center gap-3 animate-fadeIn">
                <div className="text-center font-bold text-sm sm:text-base">
                  {selectedOption?.text.toLowerCase() === currentQ.opposite.toLowerCase() ? (
                    <span className="text-emerald-400 flex items-center gap-1.5 justify-center">
                      <Sparkles size={18} /> Fantastic job! "{currentQ.word}" & "{currentQ.opposite}" are opposites!
                    </span>
                  ) : (
                    <span className="text-amber-300">
                      Remember: The opposite of <strong>{currentQ.word}</strong> is <strong>{currentQ.opposite}</strong> {currentQ.oppositeEmoji}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. LEARN / VIDEO MODE (Miss Kaye 100 Opposites by Level) */}
      {/* ========================================================= */}
      {subMode === 'learn' && (
        <div className="w-full max-w-xl flex flex-col items-center">
          <div className="w-full bg-slate-900/90 border-2 border-cyan-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center gap-1">
                <select
                  value={learnLevel}
                  onChange={(e) => {
                    setLearnLevel(e.target.value);
                    setLearnIndex(0);
                    setLearnRevealed(false);
                  }}
                  className="bg-slate-800 text-cyan-300 border border-slate-700 rounded-xl px-2.5 py-1 text-xs font-bold focus:outline-none"
                >
                  <option value="all">All 100 Words</option>
                  {LEVELS.map((l) => (
                    <option key={l.level} value={l.level}>
                      Level {l.level}: {l.title} (20w)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setLearnAutoPlay(!learnAutoPlay)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border transition-all ${
                  learnAutoPlay
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {learnAutoPlay ? <Pause size={13} /> : <Play size={13} />}
                <span>{learnAutoPlay ? 'Auto-Playing' : 'Paused'}</span>
              </button>
            </div>

            <h3 className="text-lg text-slate-300 font-semibold mb-6">
              Watch and repeat after Miss Kaye! ({learnIndex + 1}/{learnPool.length})
            </h3>

            {/* Split Opposites Visual Display */}
            <div className="w-full grid grid-cols-2 gap-4 mb-6">
              {/* Word Left */}
              <div className="bg-gradient-to-b from-blue-900/50 to-slate-900 border-2 border-blue-400/40 rounded-2xl p-5 flex flex-col items-center shadow-lg">
                <span className="text-6xl mb-3 filter drop-shadow">{currentLearn.wordEmoji}</span>
                <span className="text-2xl font-black text-blue-300">{currentLearn.word}</span>
                <span className="text-xs text-blue-200/70 mt-1 uppercase tracking-wider font-semibold">Word</span>
              </div>

              {/* Opposite Right */}
              <div
                className={`rounded-2xl p-5 flex flex-col items-center shadow-lg border-2 transition-all duration-500 ${
                  learnRevealed
                    ? 'bg-gradient-to-b from-pink-900/50 to-slate-900 border-pink-400 text-pink-300 scale-100'
                    : 'bg-slate-900 border-slate-700 text-slate-600 scale-95 opacity-80'
                }`}
              >
                {learnRevealed ? (
                  <>
                    <span className="text-6xl mb-3 filter drop-shadow animate-bounce">
                      {currentLearn.oppositeEmoji}
                    </span>
                    <span className="text-2xl font-black text-pink-300 animate-fadeIn">
                      {currentLearn.opposite}
                    </span>
                    <span className="text-xs text-pink-200/70 mt-1 uppercase tracking-wider font-semibold">Opposite</span>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-6">
                    <span className="text-4xl mb-2 animate-pulse">❓</span>
                    <span className="text-sm font-bold text-slate-400">Guess Opposite...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Example sentence */}
            <div className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-3 mb-6 text-sm text-amber-200">
              🗣️ "{currentLearn.example}"
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setLearnIndex((p) => (p > 0 ? p - 1 : learnPool.length - 1));
                  setLearnRevealed(false);
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all border border-slate-700 active:scale-95"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setLearnRevealed(true);
                  speakText(`${currentLearn.word} and ${currentLearn.opposite}! ${currentLearn.example}`);
                }}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <Volume2 size={16} />
                <span>Hear Voice</span>
              </button>
              <button
                onClick={() => {
                  setLearnIndex((p) => (p + 1) % learnPool.length);
                  setLearnRevealed(false);
                }}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-sm font-bold transition-all flex items-center gap-1 shadow-md active:scale-95"
              >
                <span>Next Pair</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. BROWSE ALL 100 WORDS WITH LEVEL FILTER */}
      {/* ========================================================= */}
      {subMode === 'browse' && (
        <div className="w-full max-w-3xl flex flex-col items-center animate-fadeIn">
          <div className="w-full bg-slate-900/90 border border-purple-400/30 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <span>📖 100 Words Explorer</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-400/40 px-2.5 py-0.5 rounded-full">
                    {filteredWords.length} Pairs
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Click any card to hear the audio speech pronunciation!
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-56">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search words..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 border-b border-slate-800 text-xs font-bold">
              <button
                onClick={() => setBrowseLevel('all')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  browseLevel === 'all'
                    ? 'bg-purple-500 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                All 100 Words
              </button>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.level}
                  onClick={() => setBrowseLevel(lvl.level)}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 ${
                    browseLevel === lvl.level
                      ? 'bg-purple-500 text-white shadow'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{lvl.icon}</span>
                  <span>L{lvl.level}: {lvl.badge}</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[460px] overflow-y-auto pr-2">
              {filteredWords.map((item) => (
                <div
                  key={item.id}
                  onClick={() => speakText(`${item.word} and ${item.opposite}. ${item.example}`)}
                  className="p-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-purple-400/50 rounded-2xl transition-all cursor-pointer flex flex-col justify-between group active:scale-95"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-purple-300 font-extrabold uppercase bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20">
                      Level {item.level}
                    </span>
                    <Volume2 size={14} className="text-slate-500 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="flex items-center justify-between font-bold text-sm text-slate-200 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span>{item.wordEmoji}</span>
                      <span>{item.word}</span>
                    </span>
                    <span className="text-purple-400 text-xs">↔</span>
                    <span className="flex items-center gap-1.5 text-pink-300">
                      <span>{item.opposite}</span>
                      <span>{item.oppositeEmoji}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 italic">
                    "{item.example}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. RESULTS & LEVEL PROGRESSION SCREEN */}
      {/* ========================================================= */}
      {subMode === 'results' && (
        <div className="w-full max-w-xl bg-slate-900/90 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md flex flex-col items-center text-center animate-fadeIn">
          <div className="w-20 h-20 bg-gradient-to-tr from-slate-900 to-pink-950 border-2 border-pink-400/50 rounded-3xl p-2.5 flex items-center justify-center shadow-xl shadow-pink-500/30 mb-3 animate-bounce">
            <img 
              src="/Colorful-Opposite-Word-Quiz-Badge.png" 
              alt="Colorful Opposite Word Quiz Badge" 
              className="w-full h-full object-contain filter drop-shadow" 
            />
          </div>

          <span className="text-xs uppercase font-extrabold px-3 py-1 bg-amber-400/20 border border-amber-400/40 text-amber-300 rounded-full mb-2">
            {typeof currentLevel === 'number' ? `Level ${currentLevel} Cleared!` : '100 Marathon Finished!'}
          </span>

          <h2 className="text-3xl font-extrabold text-white mb-1">
            {typeof currentLevel === 'number' ? `${activeLevelMeta.title} Hero!` : 'Word Master Champion!'}
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            {typeof currentLevel === 'number' && currentLevel < 5 
              ? `You mastered Level ${currentLevel}! Are you ready for Level ${currentLevel + 1}?` 
              : 'You have conquered the highest level of opposite words!'}
          </p>

          {/* Stats Badges */}
          <div className="w-full grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-2xl flex flex-col items-center">
              <span className="text-xs text-slate-400 font-semibold">Score</span>
              <span className="text-2xl font-black text-amber-300">{score}</span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-2xl flex flex-col items-center">
              <span className="text-xs text-slate-400 font-semibold">Correct</span>
              <span className="text-2xl font-black text-emerald-400">
                {history.filter((h) => h.isCorrect).length}/{questions.length}
              </span>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-2xl flex flex-col items-center">
              <span className="text-xs text-slate-400 font-semibold">Best Streak</span>
              <span className="text-2xl font-black text-orange-400">{maxStreak}🔥</span>
            </div>
          </div>

          {/* Next Level Progression Callout */}
          {typeof currentLevel === 'number' && currentLevel < 5 && (
            <div className="w-full bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-slate-900 border border-emerald-400/40 rounded-2xl p-4 mb-6 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-emerald-400">Next Adventure:</span>
                <h4 className="text-base font-black text-white">
                  Level {currentLevel + 1}: {LEVELS[currentLevel]?.title} {LEVELS[currentLevel]?.icon}
                </h4>
              </div>
              <button
                onClick={() => handleStartLevel(currentLevel + 1)}
                className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-1 active:scale-95"
              >
                <span>Play Level {currentLevel + 1}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {history.some((h) => !h.isCorrect) && (
              <button
                onClick={handlePracticeMissed}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center gap-2 active:scale-95 text-sm"
              >
                <span>Practice Missed ({history.filter((h) => !h.isCorrect).length})</span>
              </button>
            )}

            <button
              onClick={() => handleStartLevel(currentLevel)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold rounded-2xl shadow-xl transition-all flex items-center gap-2 active:scale-95 text-sm"
            >
              <RotateCcw size={16} />
              <span>Replay Level</span>
            </button>

            <button
              onClick={() => setSubMode('levels')}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl shadow-md transition-all flex items-center gap-2 active:scale-95 text-sm"
            >
              <Layers size={16} />
              <span>Choose Level</span>
            </button>

            <button
              onClick={onFinish}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl shadow-md transition-all flex items-center gap-2 border border-slate-700 active:scale-95 text-sm"
            >
              <Home size={16} />
              <span>Kids Hub</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
