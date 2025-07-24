import React from 'react';
import { Trophy, RefreshCw, Target } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 80) return "Excellent work! You have a great understanding of tectonic plates.";
    if (percentage >= 60) return "Good job! You're learning about plate tectonics well.";
    if (percentage >= 40) return "Not bad! Keep studying to improve your knowledge.";
    return "Keep practicing! Tectonic plates are fascinating to learn about.";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl border-2 border-[#0281BD] p-8 max-w-2xl w-full text-center">
        <div className="mb-6">
          <Trophy className="h-16 w-16 text-[#EAD9AA] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#0281BD] mb-2">Quiz Complete!</h2>
          <p className="text-gray-600">Great job exploring tectonic plate movements!</p>
        </div>

        <div className="mb-8">
          <div className="bg-[#79E4FF] bg-opacity-20 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Target className="h-8 w-8 text-[#0281BD]" />
              <div>
                <div className={`text-4xl font-bold ${getScoreColor()}`}>
                  {score}/{totalQuestions}
                </div>
                <div className={`text-2xl font-semibold ${getScoreColor()}`}>
                  {percentage}%
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            {getPerformanceMessage()}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="bg-[#0281BD] hover:bg-[#0281BD]/90 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto"
        >
          <RefreshCw className="h-5 w-5" />
          <span>Take Quiz Again</span>
        </button>

        <div className="mt-6 text-sm text-gray-500">
          Continue exploring marine geology and plate tectonics!
        </div>
      </div>
    </div>
  );
};

export default QuizResults;