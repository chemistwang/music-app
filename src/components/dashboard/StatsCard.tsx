import React from "react";
import styled from "styled-components";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isNegative?: boolean;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
`;

const Value = styled.div`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.1em;
  letter-spacing: -0.02em;
  color: #000000;
`;

const Change = styled.div<{ isNegative?: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: ${(props) => (props.isNegative ? "#E53935" : "#43A047")};
`;

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  isNegative,
}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <Change isNegative={isNegative}>{change}</Change>
    </Card>
  );
};

export default StatsCard;
