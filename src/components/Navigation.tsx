import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 40px;
  background-color: var(--color-text-primary);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const SegmentedControl = styled.div`
  display: flex;
  background-color: var(--color-active-item-bg);
  border-radius: var(--border-radius);
  padding: 4px;
`;

const TabItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  height: 32px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--color-text-primary);
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "var(--color-background)" : "transparent"};
  box-shadow: ${(props) =>
    props.active ? "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--color-background)" : "rgba(0, 0, 0, 0.05)"};
  }
`;

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <Button>Start Listening</Button>
      <SegmentedControl>
        <TabItem active>Music</TabItem>
        <TabItem>Podcasts</TabItem>
        <TabItem>Live</TabItem>
      </SegmentedControl>
    </NavContainer>
  );
};

export default Navigation;
