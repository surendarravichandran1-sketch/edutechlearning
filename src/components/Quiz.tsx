import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Quiz as QuizType, QuizQuestion } from '@/types';
import { Button } from './ui/button';

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number, passed: boolean) => void;
}

export function Quiz({ quiz, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean }[]>([]);

  const currentQuestion = quiz.questions[currentIndex];
  const isLastQuestion = currentIndex === quiz.questions.length - 1;
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleSelectAnswer = (index: number) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, correct: index === currentQuestion.correctAnswer },
    ]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const score = Math.round((correctAnswers / quiz.questions.length) * 100);
      const passed = score >= quiz.passingScore;
      setShowResult(true);
      setTimeout(() => {
        onComplete(score, passed);
      }, 2000);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectAnswers(0);
    setAnswers([]);
  };

  if (showResult) {
    const score = Math.round((correctAnswers / quiz.questions.length) * 100);
    const passed = score >= quiz.passingScore;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 ${
            passed ? 'gradient-success' : 'bg-destructive'
          }`}
        >
          {passed ? (
            <CheckCircle className="h-12 w-12 text-success-foreground" />
          ) : (
            <XCircle className="h-12 w-12 text-destructive-foreground" />
          )}
        </motion.div>

        <h3 className="text-2xl font-bold text-foreground mb-2">
          {passed ? 'Congratulations!' : 'Keep Learning!'}
        </h3>
        <p className="text-muted-foreground mb-4">
          You scored {score}% ({correctAnswers}/{quiz.questions.length} correct)
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Passing score: {quiz.passingScore}%
        </p>

        {!passed && (
          <Button variant="outline" onClick={handleRetry}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {quiz.questions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full transition-colors ${
              index < currentIndex
                ? answers[index]?.correct
                  ? 'bg-success'
                  : 'bg-destructive'
                : index === currentIndex
                ? 'gradient-primary'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Question {currentIndex + 1} of {quiz.questions.length}</span>
            <span>{quiz.passingScore}% to pass</span>
          </div>

          <h4 className="text-lg font-semibold text-foreground">
            {currentQuestion.question}
          </h4>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectOption = index === currentQuestion.correctAnswer;
              const showCorrect = hasAnswered && isCorrectOption;
              const showIncorrect = hasAnswered && isSelected && !isCorrect;

              return (
                <motion.button
                  key={index}
                  whileHover={!hasAnswered ? { scale: 1.02 } : undefined}
                  whileTap={!hasAnswered ? { scale: 0.98 } : undefined}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    showCorrect
                      ? 'bg-success/20 border-2 border-success'
                      : showIncorrect
                      ? 'bg-destructive/20 border-2 border-destructive'
                      : isSelected
                      ? 'gradient-primary border-2 border-primary'
                      : 'glass-card hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                        showCorrect
                          ? 'bg-success text-success-foreground'
                          : showIncorrect
                          ? 'bg-destructive text-destructive-foreground'
                          : isSelected
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span
                      className={`flex-1 ${
                        isSelected && !hasAnswered ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                    >
                      {option}
                    </span>
                    {showCorrect && <CheckCircle className="h-5 w-5 text-success" />}
                    {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          {hasAnswered && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-muted/50 border border-border"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Explanation: </span>
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}

          {/* Next button */}
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button onClick={handleNext} className="w-full">
                {isLastQuestion ? 'See Results' : 'Next Question'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
