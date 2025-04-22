import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import NewChat from "../components/chat/NewChat";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

const NewChatPage: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <NewChat />
    </PageContainer>
  );
};

export default NewChatPage;
