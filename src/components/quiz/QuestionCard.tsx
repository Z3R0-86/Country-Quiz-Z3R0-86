import { useState, useEffect } from 'react';
import styled from 'styled-components';
import type { Question } from '../../types';
import { theme } from '../../styles/theme';

interface QuestionCardProps {
  question: Question;
  onChoose: (answer: string) => void;
  selectedAnswer?: string | null;
  readonly?: boolean;
}

interface OptionProps {
  $selected?: boolean;
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
            <FlagImage src={question.image} alt="Country flag" />
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
          
          if (selected) {
            if (option === question.answer) {
              showIcon = true;
              iconSrc = '/Check_round_fill.svg';
              isCorrect = true;
            } else if (option === selected) {
              showIcon = true;
              iconSrc = '/Close_round_fill.svg';
            }
          }
          
          return (
            <Option
              key={index}
              $selected={selected === option}
              onClick={() => handleChoose(option)}
              role="button"
              tabIndex={0}
              aria-label={`Select option: ${option}`}
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
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
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
  width: 48px;
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
  gap: ${theme.spacing.md};
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
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
  background-color: ${theme.colors.background.secondary};
  color: ${theme.colors.text.primary};
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  background: ${({ $selected }) =>
    $selected ? theme.colors.primary.gradient : theme.colors.background.secondary};

  &:hover:not([data-correct]) {
    background-color: ${theme.colors.background.card};
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.medium};
  }

  /* No aplicar gradient extra a la respuesta correcta si no fue seleccionada */

  &:focus {
    outline: 2px solid ${theme.colors.primary.main};
    outline-offset: 2px;
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.md};
    min-height: 56px;
  }
`;

const OptionText = styled.span`
  flex: 1;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const OptionIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
`;