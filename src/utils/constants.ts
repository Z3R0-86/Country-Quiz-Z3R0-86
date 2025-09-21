// Quiz configuration
export const QUIZ_CONFIG = {
  TOTAL_QUESTIONS: 10,
  ANSWER_DELAY_MS: 2000,
  OPTIONS_PER_QUESTION: 4,
} as const;

// API configuration
export const API_CONFIG = {
  COUNTRIES_URL: 'https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies',
} as const;

// UI constants
export const BREAKPOINTS = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px',
} as const;