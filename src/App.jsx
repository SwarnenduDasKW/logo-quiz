import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuizScreen from './components/QuizScreen';
import AutoPlayMode from './components/AutoPlayMode';
import ScrambleMode from './components/ScrambleMode';
import StudyMode from './components/StudyMode';
import ResultsScreen from './components/ResultsScreen';
import { getQuizQuestions, CAR_LOGOS } from './data/carLogos';
import { soundEffects } from './utils/soundEffects';

export default function App() {
  const [mode, setMode] = useState('classic'); // 'classic' | 'autoplay' | 'scramble' | 'study' | 'results'
  const [questions, setQuestions] = useState(() => getQuizQuestions());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [soundOn, setSoundOn] = useState(() => soundEffects.isEnabled());
  const [highScore, setHighScore] = useState(() => {
    try {
      return Number(localStorage.getItem('logo_quiz_high_score')) || 0;
    } catch (e) {
      return 0;
    }
  });

  const currentQuestion = questions[currentIndex] || questions[0];

  // Answer handler for classic mode
  const handleAnswer = ({ isCorrect, isTimeout, selected }) => {
    setHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        isCorrect,
        isTimeout,
        selected
      }
    ]);

    if (isCorrect) {
      const multiplier = Math.min(3, 1 + Math.floor(streak / 3) * 0.5);
      const points = Math.round(100 * multiplier);
      const newScore = score + points;
      const newStreak = streak + 1;

      setScore(newScore);
      setStreak(newStreak);
      setMaxStreak((prev) => Math.max(prev, newStreak));
      setCorrectCount((prev) => prev + 1);

      if (newStreak > 1 && newStreak % 3 === 0) {
        soundEffects.streak();
      }

      // Update high score
      if (newScore > highScore) {
        setHighScore(newScore);
        try {
          localStorage.setItem('logo_quiz_high_score', String(newScore));
        } catch (e) {}
      }
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setMode('results');
    }
  };

  const handleRestart = () => {
    setQuestions(getQuizQuestions());
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectCount(0);
    setHistory([]);
    setMode('classic');
  };

  const handlePracticeMissed = (missedList) => {
    if (missedList && missedList.length > 0) {
      setQuestions(missedList.map((m) => ({
        ...m,
        shuffledOptions: [...m.options].sort(() => 0.5 - Math.random())
      })));
      setCurrentIndex(0);
      setScore(0);
      setStreak(0);
      setMaxStreak(0);
      setCorrectCount(0);
      setHistory([]);
      setMode('classic');
    }
  };

  return (
    <div className="min-h-screen quiz-backdrop quiz-waves flex flex-col items-center justify-between text-slate-100 selection:bg-red-600 selection:text-white pb-8">
      {/* Header with Knowlio Red Bar */}
      <Header
        mode={mode}
        setMode={(newMode) => {
          setMode(newMode);
        }}
        score={score}
        streak={streak}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
        onReset={handleRestart}
      />

      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center justify-center p-2 sm:p-4">
        {mode === 'classic' && (
          <QuizScreen
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onNext={handleNext}
            timerDuration={8}
          />
        )}

        {mode === 'autoplay' && (
          <AutoPlayMode
            questions={questions}
            onFinish={() => setMode('results')}
            onRecordScore={(knewIt) => {
              if (knewIt) {
                setScore((s) => s + 100);
                setCorrectCount((c) => c + 1);
              }
            }}
          />
        )}

        {mode === 'scramble' && (
          <ScrambleMode
            currentQuestion={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            onNext={handleNext}
            onRecordScore={(isCorrect) => {
              if (isCorrect) {
                setScore((s) => s + 150);
                setCorrectCount((c) => c + 1);
                setStreak((s) => s + 1);
              } else {
                setStreak(0);
              }
            }}
          />
        )}

        {mode === 'study' && (
          <StudyMode onTestBrand={() => setMode('classic')} />
        )}

        {mode === 'results' && (
          <ResultsScreen
            score={score}
            correctCount={correctCount}
            totalQuestions={questions.length}
            maxStreak={maxStreak}
            history={history}
            onRestart={handleRestart}
            onPracticeMissed={handlePracticeMissed}
          />
        )}
      </main>

      {/* Bottom Footer Credits */}
      <footer className="w-full max-w-4xl px-4 pt-4 text-center text-xs text-blue-300/60 border-t border-blue-500/10">
        <p>
          Inspired by <strong className="text-white">Knowlio</strong> "50 Famous Car Logos You Should Know" Quiz • Built with React & Vite
        </p>
      </footer>
    </div>
  );
}
