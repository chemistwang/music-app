import React from "react";
import styled from "styled-components";
import StatsCard from "./StatsCard";
import UserList from "./UserList";
import SessionsList from "./SessionsList";

const DashboardContainer = styled.div`
  padding: 24px 32px;
  width: 100%;
  overflow-y: auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #000000;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const AvatarImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-weight: 600;
  font-size: 14px;
`;

const ChevronIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #eeeeee;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 405px;
  margin-bottom: 32px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: #828282;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

// Mock data
const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "$45,678.90",
    change: "+20% month over month",
    isNegative: false,
  },
  {
    id: 2,
    title: "Active Users",
    value: "2,405",
    change: "+33% month over month",
    isNegative: false,
  },
  {
    id: 3,
    title: "New Subscribers",
    value: "10,353",
    change: "-8% month over month",
    isNegative: true,
  },
];

const usersData = [
  {
    id: 1,
    name: "Helena",
    email: "helena@example.com",
    avatarColor: "#FF6B6B",
  },
  { id: 2, name: "Oscar", email: "oscar@example.com", avatarColor: "#4D96FF" },
  {
    id: 3,
    name: "Daniel",
    email: "daniel@example.com",
    avatarColor: "#6BCB77",
  },
  {
    id: 4,
    name: "Daniel Jay Park",
    email: "djp@example.com",
    avatarColor: "#FFD93D",
  },
  {
    id: 5,
    name: "Mark Rojas",
    email: "mark@example.com",
    avatarColor: "#9D65C9",
  },
];

const sessionsData = [
  {
    id: 1,
    source: "website.net",
    sessions: 4321,
    change: "+84%",
    isPositive: true,
  },
  {
    id: 2,
    source: "website.net",
    sessions: 4033,
    change: "-8%",
    isPositive: false,
  },
  {
    id: 3,
    source: "website.net",
    sessions: 3128,
    change: "+2%",
    isPositive: true,
  },
  {
    id: 4,
    source: "website.net",
    sessions: 2104,
    change: "+33%",
    isPositive: true,
  },
  {
    id: 5,
    source: "website.net",
    sessions: 2003,
    change: "+30%",
    isPositive: true,
  },
  {
    id: 6,
    source: "website.net",
    sessions: 1894,
    change: "+15%",
    isPositive: true,
  },
  {
    id: 7,
    source: "website.net",
    sessions: 405,
    change: "-12%",
    isPositive: false,
  },
];

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>Dashboard app</Title>
        <HeaderRight>
          <Avatar>
            <AvatarImage>U</AvatarImage>
            <ChevronIcon src="/icons/chevron-down-icon.svg" alt="Dropdown" />
          </Avatar>
          <ButtonGroup>
            <IconButton>
              <img src="/icons/more-horizontal-icon.svg" alt="More" />
            </IconButton>
            <Button>Share</Button>
          </ButtonGroup>
        </HeaderRight>
      </DashboardHeader>

      <SearchBar>
        <SearchIcon src="/icons/search-small-icon.svg" alt="Search" />
        <SearchInput placeholder="Search..." />
      </SearchBar>

      <StatsGrid>
        {statsData.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            isNegative={stat.isNegative}
          />
        ))}
      </StatsGrid>

      <ContentGrid>
        <SessionsList title="Traffic Sources" sessions={sessionsData} />
        <UserList title="New Users" users={usersData} />
      </ContentGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
