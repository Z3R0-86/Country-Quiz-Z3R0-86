export type QuestionType = "flag" | "capital";

export interface Question {
  type: QuestionType;
  prompt: string;
  image?: string; // para preguntas de tipo 'banderas'
  options: string[];
  answer: string;
}

export interface QuizState {
  currentQuestion: number;
  answered: boolean;
  score: number;
  userAnswers: (string | null)[];
}