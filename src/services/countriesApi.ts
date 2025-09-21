import type { Country, ApiCountry } from '../types';
import { API_CONFIG } from '../utils/constants';

/**
 * Fetch countries data from REST Countries API
 * @returns Promise with formatted country data
 */
export async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await fetch(API_CONFIG.COUNTRIES_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch countries data: ${response.status}`);
    }
    
    const apiCountries: ApiCountry[] = await response.json();
    
    // Format the data to our internal structure
    return apiCountries.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      capital: country.capital ? country.capital[0] : 'N/A',
    }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    throw new Error(`Countries API Error: ${message}`);
  }
}