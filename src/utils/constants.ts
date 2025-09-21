// Configuración del Quiz
export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 10,
  ANSWER_DELAY_MS: 2000,
  OPTIONS_PER_QUESTION: 4,
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