export type QuestionType = "flag" | "capital";

export interface Question {
  type: QuestionType;
  prompt: string;
  image?: string; // for flag questions
  options: string[];
  answer: string;
}

export interface QuizState {
  currentQuestion: number;
  answered: boolean;
  score: number;
  userAnswers: (string | null)[];
}