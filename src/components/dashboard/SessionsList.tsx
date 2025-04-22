import React from "react";
import styled from "styled-components";

interface Session {
  id: number;
  source: string;
  sessions: number;
  change: string;
  isPositive: boolean;
}

interface SessionsListProps {
  title: string;
  sessions: Session[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 24px;
  border-bottom: 1px solid #e0e0e0;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5em;
  color: #828282;

  &:nth-child(2),
  &:nth-child(3) {
    text-align: right;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const Source = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
`;

const SessionCount = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
  text-align: right;
`;

const ChangeValue = styled.div<{ isPositive: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: ${(props) => (props.isPositive ? "#43A047" : "#E53935")};
  text-align: right;
`;

const SessionsList: React.FC<SessionsListProps> = ({ title, sessions }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Header>
        <HeaderItem>Source</HeaderItem>
        <HeaderItem>Sessions</HeaderItem>
        <HeaderItem>Change</HeaderItem>
      </Header>
      <List>
        {sessions.map((session) => (
          <ListItem key={session.id}>
            <Source>{session.source}</Source>
            <SessionCount>{session.sessions}</SessionCount>
            <ChangeValue isPositive={session.isPositive}>
              {session.change}
            </ChangeValue>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SessionsList;
