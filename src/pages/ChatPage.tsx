import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Chat from "../components/chat/Chat";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

const ChatPage: React.FC = () => {
  return (
    <PageContainer>
      <Sidebar />
      <Chat />
    </PageContainer>
  );
};

export default ChatPage;
