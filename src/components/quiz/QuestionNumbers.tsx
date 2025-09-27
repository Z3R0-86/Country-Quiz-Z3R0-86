import styled from 'styled-components';
import { range } from '../../utils/array';
import { theme } from '../../styles/theme';

interface QuestionNumbersProps {
  numOfQuestions: number;
  solvedQuestionsNum: number;
  userAnswers: (string | null)[];
  onSelectQuestion?: (index: number) => void;
}

interface NumberProps {
  $solved: boolean;
  $answered?: boolean;
}

export function QuestionNumbers({
  numOfQuestions,
  solvedQuestionsNum,
  userAnswers,
  onSelectQuestion,
}: QuestionNumbersProps) {
  return (
    <Wrapper>
      {range(numOfQuestions).map((num) => {
        const questionIndex = num - 1; // Convertir de indexado 1 a indexado 0
        const isAnswered = userAnswers[questionIndex] !== null;
        
        return (
          <Number
            $solved={num <= solvedQuestionsNum}
            $answered={isAnswered}
            key={num}
            onClick={() => onSelectQuestion && onSelectQuestion(questionIndex)}
            role="button"
            tabIndex={0}
            aria-label={`Go to question ${num}`}
          >
            {num}
          </Number>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.md};
  }
`;

const Number = styled.span<NumberProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  
  background: ${({ $solved, $answered }) => {
    if ($solved) return theme.colors.primary.gradient;
    if ($answered) return theme.colors.background.card;
    return theme.colors.background.secondary;
  }};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.medium};
  }

  &:focus {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 2px;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    width: 48px;
    height: 48px;
    font-size: ${theme.typography.fontSize.large};
  }
`;
