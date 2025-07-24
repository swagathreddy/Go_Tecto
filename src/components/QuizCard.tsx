import React, { useState } from 'react';
import { QuizQuestion } from '../types/quiz';
import AnswerFeedback from './AnswerFeedback';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (selectedOption: number) => void;
  questionNumber: number;
  selectedAnswer?: number;
  isAnswered: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  onAnswer, 
  questionNumber, 
  selectedAnswer, 
  isAnswered,

}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState<number[]>([]);

  // Update feedback visibility when question changes or answer is provided
  React.useEffect(() => {
    setShowFeedback(isAnswered);
    setWrongAttempts([]);
  }, [isAnswered, questionNumber]);

  const handleOptionClick = (optionIndex: number) => {
    if (isAnswered || wrongAttempts.includes(optionIndex)) return;
    
    if (optionIndex === question.correctAnswer) {
      // Correct answer
      onAnswer(optionIndex);
      setShowFeedback(true);
    } else {
      // Wrong answer - add to wrong attempts
      setWrongAttempts([...wrongAttempts, optionIndex]);
    }
  };

  const isCorrect = selectedAnswer === question.correctAnswer;
  
  const getOptionStyle = (index: number) => {
    if (wrongAttempts.includes(index)) {
      return 'border-red-500 bg-red-100 text-red-800 cursor-not-allowed';
    }
    if (!isAnswered) {
      return 'border-[#79E4FF] bg-white hover:bg-[#79E4FF] hover:bg-opacity-20 cursor-pointer';
    }
    if (selectedAnswer === index) {
      return isCorrect
        ? 'border-green-500 bg-green-100 text-green-800'
        : 'border-red-500 bg-red-100 text-red-800';
    }
    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-100 text-green-800';
    }
    return 'border-gray-300 bg-gray-100 text-gray-600';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden border-2 border-[#0281BD]">
        {/* Question Header */}
        <div className="bg-[#EAD9AA] p-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#0281BD]">
            Quiz - {questionNumber}
          </h3>
        </div>

        {/* Question Content */}
        <div className="p-6">
          <h4 className="text-lg md:text-xl font-semibold text-[#0281BD] mb-6 text-center">
            {question.question}
          </h4>

          {/* Question Image */}
          <div className="mb-6 text-center">
            <img 
              src={question.image} 
              alt={`Quiz ${questionNumber} illustration`}
              className="mx-auto max-w-full h-auto rounded-lg shadow-md border-2 border-[#79E4FF]"
              style={{ maxHeight: '300px' }}
            />
            {question.credit && (
      <p className="text-xs text-gray-500 mt-1">
        Image credit: {question.credit}
      </p>
    )}
          </div>

          {/* Wrong Answer Message */}
          {wrongAttempts.length > 0 && !isAnswered && (
            <div className="mb-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-center">
              <p className="text-red-700 font-medium">
                That's not correct. Please try again!
              </p>
            </div>
          )}
          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered || wrongAttempts.includes(index)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${getOptionStyle(index)}`}
              >
                <span className="font-medium text-[#0281BD] mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Answer Feedback */}
      {showFeedback && isAnswered && selectedAnswer !== undefined && (
        <AnswerFeedback 
  isCorrect={isCorrect}
  explanation={question.explanation}
  referenceUrl={question.referenceUrl}
  referenceLabel="Read more about this topic"
  credit={question.credit}

/>

      )}
    </div>
  );
};

export default QuizCard;