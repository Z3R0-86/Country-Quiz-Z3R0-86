import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url("/bg.jpg");
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    body {
      background-image: url("/bg-sm.jpg");
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1.2;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${theme.colors.primary.main};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: all 0.2s ease;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: ${theme.spacing.lg};
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.gradient};
    border-radius: ${theme.borderRadius.small};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary.main};
  }
`;

export default GlobalStyle;