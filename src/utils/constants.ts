// Configuración del Quiz
export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 10,
  ANSWER_DELAY_MS: 2000,
  OPTIONS_PER_QUESTION: 4,
} as const;

// Textos del Quiz
export const QUIZ_TEXTS = {
  loading: 'Cargando preguntas...',
  error: 'Error: ',
  questionFlag: '¿A qué país pertenece esta bandera?',
  congratulations: '¡Felicitaciones! Has completado el quiz.',
  correctAnswers: 'Has respondido',
  correctly: 'correctamente',
  accuracy: 'Precisión',
  playAgain: 'Jugar de nuevo',
  points: 'puntos',
  loading_aria: 'Cargando preguntas del quiz',
  error_aria: 'Error en la carga del quiz',
  quiz_aria: 'Quiz de países',
  flag_aria: 'Bandera del país',
  option_aria: 'Seleccionar respuesta: ',
  correct_answer: 'Respuesta correcta',
  wrong_answer: 'Respuesta incorrecta',
  question_number: 'Pregunta'
} as const;

// Configuración de la API
export const API_CONFIG = {
  COUNTRIES_URL: 'https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies',
} as const;

// Constantes de IU
export const BREAKPOINTS = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px',
} as const;