import React from "react";
import styled from "styled-components";

interface ChatPreview {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  isActive?: boolean;
}

interface ChatListProps {
  chats: ChatPreview[];
  activeChat: string;
  onSelectChat: (id: string) => void;
}

const Container = styled.div`
  width: 400px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const AppTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5em;
  letter-spacing: -1%;
  color: #000000;
  padding: 24px 16px 16px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  margin: 0 16px 16px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  height: 40px;
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
  font-family: "Inter", sans-serif;

  &::placeholder {
    color: #828282;
  }
`;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

interface ChatItemProps {
  active: boolean;
}

const ChatItem = styled.div<ChatItemProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#F7F7F7" : "transparent")};

  &:hover {
    background-color: ${(props) => (props.active ? "#F7F7F7" : "#f5f5f5")};
  }
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f7f7f7;
  background-size: cover;
  background-position: center;
`;

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const ChatName = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5em;
  color: #000000;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastMessage = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #454545;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChatList: React.FC<ChatListProps> = ({
  chats,
  activeChat,
  onSelectChat,
}) => {
  return (
    <Container>
      <AppTitle>App</AppTitle>

      <SearchContainer>
        <SearchIcon src="/icons/search-chat-icon.svg" alt="Search" />
        <SearchInput placeholder="Search chats" />
      </SearchContainer>

      <ChatsContainer>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            active={chat.id === activeChat}
            onClick={() => onSelectChat(chat.id)}
          >
            <Avatar style={{ backgroundImage: `url(${chat.avatar})` }} />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              <LastMessage>{chat.lastMessage}</LastMessage>
            </ChatInfo>
          </ChatItem>
        ))}
      </ChatsContainer>
    </Container>
  );
};

export default ChatList;
