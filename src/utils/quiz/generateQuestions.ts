import { shuffle } from '../array';
import type { Country, Question } from '../../types';
import { QUIZ_CONFIG } from '../constants';

/**
 * Generate quiz questions from country data
 * Creates both flag and capital questions
 */
export function generateQuestions(countries: Country[]): Question[] {
  const questions: Question[] = [];

  // Flag questions
  const validFlagCountries = countries.filter((c) => c.flag && c.name);
  validFlagCountries.forEach((country) => {
    const wrongAnswers = shuffle(
      validFlagCountries
        .filter((c) => c.name !== country.name)
        .map((c) => c.name)
    ).slice(0, QUIZ_CONFIG.OPTIONS_PER_QUESTION - 1);
    
    questions.push({
      type: "flag",
      prompt: `Which country does this flag belong to?`,
      image: country.flag,
      options: shuffle([country.name, ...wrongAnswers]),
      answer: country.name,
    });
  });

  // Capital questions
  const validCapitalCountries = countries.filter((c) => {
    const capital = Array.isArray(c.capital) ? c.capital[0] : c.capital;
    return capital && typeof capital === "string" && capital.trim() !== "";
  });
  
  validCapitalCountries.forEach((country) => {
    const capital = Array.isArray(country.capital)
      ? country.capital[0]
      : country.capital;
      
    const wrongAnswers = shuffle(
      validCapitalCountries
        .map((c) => (Array.isArray(c.capital) ? c.capital[0] : c.capital))
        .filter((c) => c && c !== capital)
    ).slice(0, QUIZ_CONFIG.OPTIONS_PER_QUESTION - 1);
    
    questions.push({
      type: "capital",
      prompt: `What is the capital of ${country.name}?`,
      options: shuffle([capital, ...wrongAnswers]),
      answer: capital,
    });
  });

  // Shuffle all questions and limit to configured amount
  return shuffle(questions).slice(0, QUIZ_CONFIG.TOTAL_QUESTIONS);
}