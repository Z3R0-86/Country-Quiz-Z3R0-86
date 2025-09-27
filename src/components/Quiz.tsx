import { useState, useEffect, useMemo } from 'react';
import { Container, QuizContainer, QuizCompleteWrapper } from './layout/Container';
/*import { QuizHeader, QuestionNumbers, QuestionCard, QuizComplete } from './quiz';*/

import { QuizHeader } from './quiz/QuizHeader';
import { QuestionNumbers } from './quiz/QuestionNumbers';
import { QuestionCard } from './quiz/QuestionCard';
import { QuizComplete } from './quiz/QuizComplete';

import { useCountriesData } from '../hooks/useCountriesData';
import { generateQuestions } from '../utils/quiz';
import { QUIZ_CONFIG, QUIZ_TEXTS } from '../utils/constants';

export function Quiz() {
  // Hook personalizado que obtiene los datos de países de la API
  const { data, loading, error } = useCountriesData();
  // Estados del quiz
  // currentQuestion: Índice de la pregunta actual (0-9, o 10 para mostrar resultados)
  // answered: Indica si la pregunta actual ya fue respondida
  // score: Puntuación actual del usuario
  // quizSeed: Valor aleatorio para generar nuevas preguntas al reiniciar
  // userAnswers: Array con las respuestas del usuario para cada pregunta (null si no respondió)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizSeed, setQuizSeed] = useState(Date.now());
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  const questions = useMemo(
    () => generateQuestions(data),
    [data, quizSeed] // quizSeed es necesario para regenerar preguntas al reiniciar el quiz. Cambia en cada reinicio para obtener preguntas diferentes
  );

  // Inicializar userAnswers cuando las preguntas estén listas
  useEffect(() => {
    if (questions.length > 0 && userAnswers.length !== questions.length) {
      setUserAnswers(Array(questions.length).fill(null));
    }
  }, [questions.length, userAnswers.length]);

  const selectedQuestion = questions[currentQuestion];

  // Auto avance después de responder
  useEffect(() => {
    if (!answered) return;
    
    const timeoutId = setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Verificar si el usuario ha respondido todas las preguntas antes de mostrar el resultado final
        // Evita que se muestre la pantalla de resultados si hay preguntas sin responder
        const allQuestionsAnswered = userAnswers.every(answer => answer !== null);
        if (allQuestionsAnswered) {
          // Solo mostrar resultado si todas las preguntas están respondidas
          setCurrentQuestion(questions.length);
        }
      }
      setAnswered(false);
    }, QUIZ_CONFIG.ANSWER_DELAY_MS);
    
    return () => clearTimeout(timeoutId);
  }, [answered, currentQuestion, questions.length]);

  // Procesa la respuesta seleccionada por el usuario:
  // 1. Actualiza el array de respuestas
  // 2. Recalcula la puntuación
  // 3. Marca la pregunta como respondida para activar el avance automático
  function handleQuestionChoice(choice: string) {
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = choice;
      return updated;
    });

    // Recalcular la puntuación
    const newScore = questions.reduce((acc, q, i) => {
      return acc + (userAnswers[i] === q.answer || (i === currentQuestion && choice === q.answer) ? 1 : 0);
    }, 0);
    setScore(newScore);

    setAnswered(true);
  }

  // Navegar a una pregunta específica
  function goToQuestion(index: number) {
    setCurrentQuestion(index);
  }

  // Reiniciar quiz
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
          <div 
            role="status" 
            aria-live="polite"
            aria-label={QUIZ_TEXTS.loading_aria}
            style={{ textAlign: 'center', padding: '2rem' }}
          >
            {QUIZ_TEXTS.loading}
          </div>
        </QuizContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <QuizContainer>
          <div 
            role="alert" 
            aria-live="assertive"
            aria-label={QUIZ_TEXTS.error_aria}
            style={{ textAlign: 'center', padding: '2rem', color: '#d32f2f' }}
          >
            {QUIZ_TEXTS.error}{error}
          </div>
        </QuizContainer>
      </Container>
    );
  }

  return (
    <Container 
      role="main" 
      aria-label={QUIZ_TEXTS.quiz_aria}
      lang="es"
    >
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
              key={currentQuestion} // Forzar re-renderizado del componente cuando cambia la pregunta actual
              question={selectedQuestion}
              onChoose={handleQuestionChoice}
              selectedAnswer={userAnswers[currentQuestion]}
              readonly={answered} // Deshabilita la interacción con las opciones cuando la pregunta ya fue respondida
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