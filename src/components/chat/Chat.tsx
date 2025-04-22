import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ChatList from "./ChatList";
import ChatConversation from "./ChatConversation";
import UserProfile from "./UserProfile";

// Types
interface ChatUser {
  id: string;
  name: string;
  avatar: string;
  status: string;
  lastMessage: string;
}

interface Message {
  id: string;
  content: string;
  isSentByMe: boolean;
  timestamp: Date;
  chatId: string;
}

// Styled Components
const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

const NewMessageButton = styled.button`
  position: absolute;
  bottom: 24px;
  left: 32px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &:hover {
    background-color: #333;
  }
`;

// Mock data
const mockUsers: ChatUser[] = [
  {
    id: "user1",
    name: "Helena Hills",
    avatar: "https://via.placeholder.com/48/D1BEE7/FFFFFF",
    status: "Active 20m ago",
    lastMessage: "Will head to the Help Center...",
  },
  {
    id: "user2",
    name: "Carlo Emilio",
    avatar: "https://via.placeholder.com/48/B2EBF2/FFFFFF",
    status: "Active now",
    lastMessage: "Let's go",
  },
  {
    id: "user3",
    name: "Oscar Davis",
    avatar: "https://via.placeholder.com/48/C8E6C9/FFFFFF",
    status: "Active 5m ago",
    lastMessage: "Trueeeeee",
  },
  {
    id: "user4",
    name: "Daniel Jay Park",
    avatar: "https://via.placeholder.com/48/FFF9C4/FFFFFF",
    status: "Active yesterday",
    lastMessage: "lol yeah, are you coming to the lunch on the 13th?",
  },
  {
    id: "user5",
    name: "Mark Rojas",
    avatar: "https://via.placeholder.com/48/FFCCBC/FFFFFF",
    status: "Active 3h ago",
    lastMessage: "great catching up over dinner!!",
  },
];

const mockMessages: { [key: string]: Message[] } = {
  user1: [
    {
      id: "m1",
      content: "No honestly I'm thinking of a career pivot",
      isSentByMe: false,
      timestamp: new Date("2023-11-30T09:41:00"),
      chatId: "user1",
    },
    {
      id: "m2",
      content: "This is the main chat template",
      isSentByMe: false,
      timestamp: new Date("2023-11-30T09:42:00"),
      chatId: "user1",
    },
    {
      id: "m3",
      content: "Oh?",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:43:00"),
      chatId: "user1",
    },
    {
      id: "m4",
      content: "Cool",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:44:00"),
      chatId: "user1",
    },
    {
      id: "m5",
      content: "How does it work?",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:45:00"),
      chatId: "user1",
    },
    {
      id: "m6",
      content: "Simple",
      isSentByMe: false,
      timestamp: new Date("2023-11-30T09:46:00"),
      chatId: "user1",
    },
    {
      id: "m7",
      content:
        "You just edit any text to type in the conversation you want to show, and delete any bubbles you don't want to use",
      isSentByMe: false,
      timestamp: new Date("2023-11-30T09:47:00"),
      chatId: "user1",
    },
    {
      id: "m8",
      content: "Boom",
      isSentByMe: false,
      timestamp: new Date("2023-11-30T09:48:00"),
      chatId: "user1",
    },
    {
      id: "m9",
      content: "Hmmm",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:49:00"),
      chatId: "user1",
    },
    {
      id: "m10",
      content: "I think I get it",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:50:00"),
      chatId: "user1",
    },
    {
      id: "m11",
      content: "Will head to the Help Center if I have more questions tho",
      isSentByMe: true,
      timestamp: new Date("2023-11-30T09:51:00"),
      chatId: "user1",
    },
  ],
  user2: [
    {
      id: "m12",
      content: "Hey, how are you?",
      isSentByMe: false,
      timestamp: new Date("2023-11-29T14:22:00"),
      chatId: "user2",
    },
    {
      id: "m13",
      content: "I'm good, thanks! How about you?",
      isSentByMe: true,
      timestamp: new Date("2023-11-29T14:25:00"),
      chatId: "user2",
    },
    {
      id: "m14",
      content: "I'm great, just finished a project.",
      isSentByMe: false,
      timestamp: new Date("2023-11-29T14:30:00"),
      chatId: "user2",
    },
    {
      id: "m15",
      content: "Let's go",
      isSentByMe: false,
      timestamp: new Date("2023-11-29T14:32:00"),
      chatId: "user2",
    },
  ],
};

const Chat: React.FC = () => {
  const [activeChat, setActiveChat] = useState(mockUsers[0].id);
  const [messages, setMessages] = useState(mockMessages);
  const navigate = useNavigate();

  const handleSelectChat = (chatId: string) => {
    setActiveChat(chatId);
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      content,
      isSentByMe: true,
      timestamp: new Date(),
      chatId: activeChat,
    };

    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage],
    }));
  };

  const handleNewChat = () => {
    navigate("/new-chat");
  };

  const activeChatUser = mockUsers.find((user) => user.id === activeChat)!;
  const activeChatMessages = messages[activeChat] || [];

  return (
    <ChatContainer>
      <ChatList
        chats={mockUsers}
        activeChat={activeChat}
        onSelectChat={handleSelectChat}
      />
      <ChatConversation
        activeUser={activeChatUser}
        messages={activeChatMessages}
        onSendMessage={handleSendMessage}
      />
      <UserProfile
        name={activeChatUser.name}
        avatar={activeChatUser.avatar}
        status={activeChatUser.status}
      />
      <NewMessageButton onClick={handleNewChat}>+</NewMessageButton>
    </ChatContainer>
  );
};

export default Chat;
