import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FiChevronDown as DownArrow } from 'react-icons/fi';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((currentState) => !currentState);
  };

  return (
    <Container>
      <Header openState={isOpen}>
        <button
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title}`}
          onClick={handleToggle}
        >
          {title}
          <ArrowIcon size={24} />
        </button>
      </Header>
      <AccordionContent id={`accordion-content-${title}`} hidden={!isOpen}>
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.muted1};
  border: 1px solid ${(props) => props.theme.colors.muted3};
  border-radius: ${(props) => props.theme.sizing.small};
  width: 100%;

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const Header = styled.h3<{ openState: boolean }>`
  margin: 0px;
  ${(props) => props.theme.typography['body-bold']};

  button {
    width: 100%;
    padding: ${(props) => props.theme.spacing.normal};
    text-align: left;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.3s ease;

    svg {
      transition: transform 0.3s ease;
      transform: ${(props) =>
        props.openState ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
  }
`;

const AccordionContent = styled.div`
  padding: ${(props) => props.theme.spacing.normal};
  ${(props) => props.theme.typography.body};
`;

const ArrowIcon = styled(DownArrow)`
  transition: transform 200ms ease;
  transform: rotate(0deg);
`;
