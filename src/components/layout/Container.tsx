import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 564px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

export const QuizContainer = styled.div`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-shadow: ${theme.shadows.large};

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;
