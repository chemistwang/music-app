import React from "react";
import styled from "styled-components";

interface SectionHeaderProps {
  title: string;
  subheading: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 34px;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
`;

const Subheading = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--color-text-secondary);
`;

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subheading }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subheading>{subheading}</Subheading>
    </Container>
  );
};

export default SectionHeader;
