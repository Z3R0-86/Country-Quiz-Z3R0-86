import { useState, useEffect, useMemo } from 'react';
import { Container, QuizContainer, QuizCompleteWrapper } from './layout/Container';
/*import { QuizHeader, QuestionNumbers, QuestionCard, QuizComplete } from './quiz';*/

import { QuizHeader } from './quiz/QuizHeader';
import { QuestionNumbers } from './quiz/QuestionNumbers';
import { QuestionCard } from './quiz/QuestionCard';
import { QuizComplete } from './quiz/QuizComplete';

import { useCountriesData } from '../hooks/useCountriesData';
import { generateQuestions } from '../utils/quiz';
import { QUIZ_CONFIG } from '../utils/constants';

export function Quiz() {
  const { data, loading, error } = useCountriesData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizSeed, setQuizSeed] = useState(Date.now());
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const questions = useMemo(
    () => generateQuestions(data),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, quizSeed] // quizSeed is needed to regenerate questions on restart
  );

  // Initialize userAnswers when questions are ready
  useEffect(() => {
    if (questions.length > 0 && userAnswers.length !== questions.length) {
      setUserAnswers(Array(questions.length).fill(null));
    }
  }, [questions.length, userAnswers.length]);

  const selectedQuestion = questions[currentQuestion];

  // Auto advance after answering
  useEffect(() => {
    if (!answered) return;
    
    const timeoutId = setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Last question answered, show final result
        setCurrentQuestion(questions.length);
      }
      setAnswered(false);
    }, QUIZ_CONFIG.ANSWER_DELAY_MS);
    
    return () => clearTimeout(timeoutId);
  }, [answered, currentQuestion, questions.length]);

  // Handle user's choice
  function handleQuestionChoice(choice: string) {
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = choice;
      return updated;
    });

    // Recalculate score
    const newScore = questions.reduce((acc, q, i) => {
      return acc + (userAnswers[i] === q.answer || (i === currentQuestion && choice === q.answer) ? 1 : 0);
    }, 0);
    setScore(newScore);

    setAnswered(true);
  }

  // Navigate to specific question
  function goToQuestion(index: number) {
    setCurrentQuestion(index);
  }

  // Restart quiz
  function handleRestart() {
    setCurrentQuestion(0);
    setScore(0);
    setQuizSeed(Date.now());
    setUserAnswers([]);
    setAnswered(false);
  }

  if (loading) {
    return (
      <Container>
        <QuizContainer>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            Loading questions...
          </div>
        </QuizContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <QuizContainer>
          <div style={{ textAlign: 'center', padding: '2rem', color: '#f44336' }}>
            Error: {error}
          </div>
        </QuizContainer>
      </Container>
    );
  }

  return (
    <Container>
      {selectedQuestion ? (
        <>
          <QuizHeader score={score} totalQuestions={questions.length} />
          <QuizContainer>
            <QuestionNumbers
              numOfQuestions={questions.length}
              solvedQuestionsNum={currentQuestion}
              userAnswers={userAnswers}
              onSelectQuestion={goToQuestion}
            />

            <QuestionCard
              key={currentQuestion} // Force re-render
              question={selectedQuestion}
              onChoose={handleQuestionChoice}
              selectedAnswer={userAnswers[currentQuestion]}
              readonly={answered} // Only readonly during feedback period
            />
          </QuizContainer>
        </>
      ) : (
        <QuizCompleteWrapper>
          <QuizComplete
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        </QuizCompleteWrapper>
      )}
    </Container>
  );
}