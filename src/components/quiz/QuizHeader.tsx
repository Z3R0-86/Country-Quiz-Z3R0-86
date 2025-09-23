import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface QuizHeaderProps {
  score: number;
  totalQuestions: number;
}

export function QuizHeader({ score, totalQuestions }: QuizHeaderProps) {
  return (
    <Wrapper>
      <Title>Country Quiz</Title>
      <ScoreDisplay>
        🏆 {score}/{totalQuestions} Points
      </ScoreDisplay>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
    text-align: center;
  }
`;

const Title = styled.h1`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xlarge};
  font-weight: ${theme.typography.fontWeight.bold};
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ScoreDisplay = styled.div`
  background: ${theme.colors.primary.gradient};
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.large};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.large};
  box-shadow: ${theme.shadows.small};
`;