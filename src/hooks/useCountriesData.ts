import { useState, useEffect } from 'react';
import type { Country } from '../types';
import { fetchCountries } from '../services/countriesApi';

interface UseCountriesDataReturn {
  data: Country[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to manage countries data fetching
 * Provides loading state, error handling, and refetch functionality
 */
export function useCountriesData(): UseCountriesDataReturn {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCountries = async () => {
    try {
      setLoading(true);
      setError(null);
      const countries = await fetchCountries();
      setData(countries);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load countries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: loadCountries,
  };
}