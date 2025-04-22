import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

const DashboardPage: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <Dashboard />
    </PageContainer>
  );
};

export default DashboardPage;
