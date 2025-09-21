import { BREAKPOINTS } from '../utils/constants';

export const theme = {
  colors: {
    primary: {
      main: '#e65895',
      secondary: '#bc6be8',
      gradient: 'linear-gradient(to right, #e65895, #bc6be8)',
    },
    background: {
      main: '#343964',
      secondary: '#393f6e',
      card: '#4a5578',
    },
    text: {
      primary: '#E2E4F3',
      secondary: '#ffffff',
    },
    success: '#4CAF50',
    error: '#f44336',
  },
  
  typography: {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
    round: '50%',
  },
  
  breakpoints: BREAKPOINTS,
  
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
} as const;