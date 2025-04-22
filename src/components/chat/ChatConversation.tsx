import React, { useState } from "react";
import styled from "styled-components";

interface Message {
  id: string;
  content: string;
  isSentByMe: boolean;
  timestamp: Date;
}

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

interface ChatConversationProps {
  activeUser: ChatUser;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f7f7f7;
  background-size: cover;
  background-position: center;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
  margin: 0;
`;

const UserStatus = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #454545;
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 24px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const MessageGroup = styled.div<{ alignRight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};
  max-width: 70%;
  align-self: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};
`;

const MessageBubble = styled.div<{ isSentByMe: boolean }>`
  padding: 12px 16px;
  background-color: ${(props) => (props.isSentByMe ? "#000000" : "#E0E0E0")};
  color: ${(props) => (props.isSentByMe ? "#FFFFFF" : "#000000")};
  border-radius: ${(props) =>
    props.isSentByMe ? "16px 16px 4px 16px" : "24px 16px 16px 4px"};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  max-width: 100%;
  word-break: break-word;
`;

const MessageDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #828282;
  text-align: center;
  margin: 16px 0;
  align-self: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-top: 1px solid #e0e0e0;
  background-color: #ffffff;
`;

const MessageInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  &::placeholder {
    color: #828282;
  }
`;

const formatDate = (date: Date): string => {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const groupMessagesByDate = (
  messages: Message[]
): { date: string; messages: Message[] }[] => {
  const groups: { [key: string]: Message[] } = {};

  messages.forEach((message) => {
    const dateKey = message.timestamp.toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(message);
  });

  return Object.entries(groups).map(([date, msgs]) => ({
    date,
    messages: msgs,
  }));
};

const ChatConversation: React.FC<ChatConversationProps> = ({
  activeUser,
  messages,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const messageGroups = groupMessagesByDate(messages);

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <Container>
      <ChatHeader>
        <UserInfo>
          <Avatar style={{ backgroundImage: `url(${activeUser.avatar})` }} />
          <UserDetails>
            <UserName>{activeUser.name}</UserName>
            <UserStatus>{activeUser.status}</UserStatus>
          </UserDetails>
        </UserInfo>
        <HeaderActions>
          <IconButton>
            <Icon src="/icons/phone-icon.svg" alt="Call" />
          </IconButton>
          <IconButton>
            <Icon src="/icons/video-icon.svg" alt="Video" />
          </IconButton>
        </HeaderActions>
      </ChatHeader>

      <MessagesContainer>
        {messageGroups.map((group, i) => (
          <React.Fragment key={i}>
            <MessageDate>{formatDate(new Date(group.date))}</MessageDate>
            {group.messages.map((message) => (
              <MessageGroup key={message.id} alignRight={message.isSentByMe}>
                <MessageBubble isSentByMe={message.isSentByMe}>
                  {message.content}
                </MessageBubble>
              </MessageGroup>
            ))}
          </React.Fragment>
        ))}
      </MessagesContainer>

      <InputContainer>
        <IconButton>
          <Icon src="/icons/image-upload-icon.svg" alt="Upload" />
        </IconButton>
        <IconButton>
          <Icon src="/icons/smile-chat-icon.svg" alt="Emoji" />
        </IconButton>
        <MessageInput
          placeholder="Enter your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleSendMessage}
        />
        <IconButton>
          <Icon src="/icons/mic-icon.svg" alt="Voice" />
        </IconButton>
      </InputContainer>
    </Container>
  );
};

export default ChatConversation;
