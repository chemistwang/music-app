import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainContent />
    </PageContainer>
  );
};

export default HomePage;
