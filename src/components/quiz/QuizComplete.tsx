import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface QuizCompleteProps {
  score: number;
  totalQuestions: number;
  onRestart?: () => void;
}

export function QuizComplete({ score, totalQuestions, onRestart }: QuizCompleteProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <Wrapper>
      <CongratsImage src="/congrats.png" alt="Congratulations" />
      <Title>Congrats! You completed the quiz.</Title>
      <ScoreText>
        You answered <Strong>{score}/{totalQuestions}</Strong> correctly
      </ScoreText>
      <PercentageText>
        That's <Strong>{percentage}%</Strong> accuracy!
      </PercentageText>
      <RestartButton onClick={onRestart}>
        Play Again
      </RestartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};
  border-radius: ${theme.borderRadius.small};
  padding: ${theme.spacing.xxl};
  text-align: center;
  max-width: 500px;
  box-shadow: ${theme.shadows.large};
`;

const CongratsImage = styled.img`
  max-width: 150px;
  height: auto;
`;

const Title = styled.h2`
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.xlarge};
  color: ${theme.colors.text.primary};
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ScoreText = styled.p`
  font-size: ${theme.typography.fontSize.large};
  margin: 0;
`;

const PercentageText = styled.p`
  font-size: ${theme.typography.fontSize.large};
  color: ${theme.colors.primary.main};
  margin: 0;
`;

const Strong = styled.strong`
  background: ${theme.colors.primary.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${theme.typography.fontWeight.bold};
`;

const RestartButton = styled.button`
  background: ${theme.colors.primary.gradient};
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.md} ${theme.spacing.xxl};
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSize.large};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: ${theme.spacing.md};
  box-shadow: ${theme.shadows.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${theme.colors.text.primary};
    outline-offset: 2px;
  }
`;