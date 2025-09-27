import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 92%;
  max-width: 850px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.mobile}) {
    width: 60%;
    padding: 0 ${theme.spacing.md};
  }
`;

export const QuizContainer = styled.div`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.large};

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xxl} ${theme.spacing.xxl};
    margin-top: 50px;
    gap: ${theme.spacing.xl};
  }
`;

export const QuizCompleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}) {
    margin-top: 48px;
  }
`;
