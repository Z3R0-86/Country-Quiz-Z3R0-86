import { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { Question } from '../../types';
import { theme } from '../../styles/theme';
import { QUIZ_TEXTS } from '../../utils/constants';

interface QuestionCardProps {
  question: Question;
  onChoose: (answer: string) => void;
  selectedAnswer?: string | null;
  readonly?: boolean;
}

interface OptionProps {
  $selected?: boolean;
  $isCorrect?: boolean;
  $isWrong?: boolean;
}

export function QuestionCard({ 
  question, 
  onChoose, 
  selectedAnswer, 
  readonly 
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);


  useEffect(() => {
    setSelected(selectedAnswer || null);
  }, [selectedAnswer]);

  const handleChoose = (option: string) => {
    if (selected || readonly) return; // Evita cambiar la seleccción despues de responder la pregunta (cuando vizualiza la respuesta correcta)
    setSelected(option);
    onChoose(option);
  };

  return (
    <Wrapper>
      <QuestionText>
        {question.type === 'flag' ? (
          <FlagQuestionWrapper>
            <span>Which country's flag is this?</span>
            <FlagImage 
              src={question.image} 
              alt={QUIZ_TEXTS.flag_aria}
              width="40"
              height="30"
              loading="lazy"
            />
          </FlagQuestionWrapper>
        ) : (
          question.prompt
        )}
      </QuestionText>
      
      <OptionsGrid>
        {question.options.map((option, index) => {
          let showIcon = false;
          let iconSrc = '';
          let isCorrect = false;
          let isWrong = false;
          
          if (selected) {
            if (option === question.answer) {
              showIcon = true;
              iconSrc = '/Check_round_fill.svg';
              isCorrect = true;
            } else if (option === selected) {
              showIcon = true;
              iconSrc = '/Close_round_fill.svg';
              isWrong = true;
            }
          }
          
          return (
            <Option
              key={index}
              $selected={selected === option}
              $isCorrect={isCorrect}
              $isWrong={isWrong}
              onClick={() => handleChoose(option)}
              role="button"
              tabIndex={0}
              aria-label={`${QUIZ_TEXTS.option_aria}${option}`}
              aria-pressed={selected === option}
              aria-disabled={readonly}
              data-correct={isCorrect}
            >
              <OptionText>{option}</OptionText>
              {iconSrc && (
                <OptionIcon
                  src={iconSrc}
                  style={{ opacity: showIcon ? 1 : 0 }}
                  alt={isCorrect ? 'Correct answer' : 'Wrong answer'}
                />
              )}
            </Option>
          );
        })}
      </OptionsGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xxl};
  margin-top: 0
  max-width: 500px; // Limita el ancho máximo del marco
  width: 100%;
`;

const FlagQuestionWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize.large};
  }
`;

const FlagImage = styled.img`
  width: 40px;
  height: auto;
  border-radius: ${theme.borderRadius.small};
  box-shadow: ${theme.shadows.small};
`;

const QuestionText = styled.h2`
  text-align: center;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  line-height: 1.4;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  width: 100%;
   max-width: 455px; // Limita el ancho máximo del grid


  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

const Option = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
  text-align: center;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  min-height: 48px;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  background: ${({ $selected, $isCorrect, $isWrong }) => {
    if ($isCorrect) return theme.colors.primary.gradient;
    if ($isWrong) return '#6066d0';
    if ($selected) return theme.colors.primary.gradient;
    return theme.colors.background.secondary;
  }};
  
  color: ${theme.colors.text.primary};

  &:hover:not([data-correct]) {
    background-color: ${({ $isCorrect, $isWrong }) => {
      if ($isCorrect || $isWrong) return 'inherit';
      return theme.colors.background.card;
    }};
    transform: ${({ $isCorrect, $isWrong }) => 
      $isCorrect || $isWrong ? 'none' : 'translateY(-1px)'};
    box-shadow: ${({ $isCorrect, $isWrong }) => 
      $isCorrect || $isWrong ? 'none' : theme.shadows.medium};
  }

  &:focus {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 2px;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    min-height: 56px;
  }
`;

const OptionText = styled.span`
  flex: 1;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const OptionIcon = styled.img`
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
`;