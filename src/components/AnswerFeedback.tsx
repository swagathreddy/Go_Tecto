import React from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  referenceUrl?: string;
  referenceLabel?: string;
}

const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({
  isCorrect,
  explanation,
  referenceUrl,
  referenceLabel
}) => {
  // Extract image path if embedded in explanation string (format: [Image: image_url])
  const imageMatch = explanation.match(/\[Image:\s*(.*?)\]/);
  const explanationText = explanation.replace(/\[Image:\s*.*?\]/, '').trim();

  // Enhanced table processing with better responsive design
  const processedExplanation = explanationText
    // Replace the outer div with responsive container
    .replace(
      /<div style="overflow-x: auto; width: 100%;">/g,
      '<div class="my-6 -mx-4 sm:mx-0"><div class="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">'
    )
    // Update table styling
    .replace(
      /<table style="[^"]*">/g,
      '<table class="min-w-full divide-y divide-gray-200">'
    )
    // Style table headers
    .replace(
      /<thead style="background-color: #f3f4f6;">/g,
      '<thead class="bg-gray-50">'
    )
    // Style header cells
    .replace(
      /<th style="border: 1px solid #ccc; padding: 8px;">/g,
      '<th class="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider border-r border-gray-200 last:border-r-0">'
    )
    // Style body rows with alternating colors
    .replace(
      /<tbody>/g,
      '<tbody class="bg-white divide-y divide-gray-200">'
    )
    // Style body cells
    .replace(
      /<td style="border: 1px solid #ccc; padding: 8px;">/g,
      '<td class="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0 align-top">'
    )
    // Close the responsive container
    .replace(
      /<\/table>\s*<\/div>/g,
      '</table></div></div>'
    )
    // Add zebra striping for better readability
    .replace(
      /<tr>/g,
      '<tr class="hover:bg-gray-50">'
    );

  return (
    <div className="mt-6 max-w-4xl mx-auto px-4 sm:px-0">
      <div
        className={`rounded-lg border-2 p-4 sm:p-6 ${
          isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'
        }`}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {isCorrect ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4
              className={`font-bold text-lg mb-3 ${
                isCorrect ? 'text-green-800' : 'text-red-800'
              }`}
            >
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </h4>

            <div
              className={`prose prose-sm sm:prose max-w-none ${
                isCorrect ? 'text-green-700' : 'text-red-700'
              } [&_table]:my-0 [&_div]:my-0`}
            >
              {isCorrect ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: processedExplanation,
                  }}
                />
              ) : (
                <p className="text-base">That's incorrect. Try again!</p>
              )}
            </div>

            {/* Show image only if answer is correct and image is embedded */}
            {isCorrect && imageMatch && (
              <img
                src={imageMatch[1]}
                alt="Explanation visual"
                className="mt-4 rounded-md w-full h-auto shadow-sm"
              />
            )}
          </div>
        </div>

        {/* Learn More / Reference Block */}
        {isCorrect && referenceUrl && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="min-w-0 flex-1">
                <h5 className="font-semibold text-blue-800 mb-2">Learn More:</h5>
                <a
                  href={referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 hover:underline text-sm break-words transition-colors duration-200"
                >
                  {referenceLabel || 'Click here for more details'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AnswerFeedback;
