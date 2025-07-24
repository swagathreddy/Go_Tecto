export interface QuizQuestion {
  id: number;
  question: string;
  image: string;
  options: string[];
  correctAnswer: number;
  explanation: string;

  referenceUrl?: string;
}