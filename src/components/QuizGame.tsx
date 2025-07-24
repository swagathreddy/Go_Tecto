import React, { useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';
import { quizData } from '../data/quizData'; 


const QuizGame: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizData.length).fill(false));

  const handleAnswer = (selectedOption: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    // Calculate score based on all answered questions
    let newScore = 0;
    newAnswers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
    setAnsweredQuestions(new Array(quizData.length).fill(false));
  };

  if (quizCompleted) {
    return <QuizResults score={score} totalQuestions={quizData.length} onRestart={restartQuiz} />;
  }

  return (
    <div className="min-h-screen">
      <QuizHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0281BD] mb-2">Quiz Part</h2>
          <div className="text-sm text-[#0281BD] font-medium">
            Question {currentQuestion + 1} of {quizData.length}
          </div>
          <div className="w-full bg-[#EAD9AA] rounded-full h-2 mt-4 max-w-md mx-auto">
            <div 
              className="bg-[#0281BD] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <QuizCard 
          question={quizData[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          selectedAnswer={answers[currentQuestion]}
          isAnswered={answeredQuestions[currentQuestion]}
        />
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#EAD9AA] text-[#0281BD] hover:bg-[#EAD9AA]/80 border-2 border-[#0281BD]'
            }`}
          >
            ← Previous
          </button>
          
          <div className="text-center">
            <div className="text-sm text-[#0281BD] mb-2">
              Answered: {answeredQuestions.filter(Boolean).length} of {quizData.length}
            </div>
          </div>
          
          {currentQuestion < quizData.length - 1 ? (
            <button
              onClick={goToNextQuestion}
              className="px-6 py-3 rounded-lg font-medium bg-[#0281BD] text-white hover:bg-[#0281BD]/90 transition-all duration-200"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setQuizCompleted(true)}
              disabled={answeredQuestions.filter(Boolean).length < quizData.length}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                answeredQuestions.filter(Boolean).length < quizData.length
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              Finish Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;