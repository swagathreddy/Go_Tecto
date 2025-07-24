import React from 'react';

const QuizHeader: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header with title */}
      <div className="bg-[#EAD9AA] py-4 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0281BD] inline-block bg-[#EAD9AA] px-6 py-2 rounded-lg border-2 border-[#0281BD]">
            Go Tecto
          </h1>
        </div>
      </div>
      
      {/* Subtitle banner */}
      <div className="bg-[#0281BD] py-6 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg md:text-xl text-white font-medium max-w-4xl mx-auto">
            Play the quiz below to explore how plate movements have affected landmasses and oceans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;