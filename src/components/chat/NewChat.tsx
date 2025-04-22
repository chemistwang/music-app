import React, { useState } from "react";
import styled from "styled-components";

// Types
interface ContactType {
  id: string;
  name: string;
  avatar: string;
  status: string;
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5em;
  color: #000000;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #454545;
  font-size: 24px;
`;

const SearchContainer = styled.div`
  padding: 16px 32px;
  border-bottom: 1px solid #e0e0e0;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  height: 40px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  font-family: "Inter", sans-serif;

  &::placeholder {
    color: #828282;
  }
`;

const ContactsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
`;

const ContactGroup = styled.div`
  margin-bottom: 24px;
`;

const GroupTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: #828282;
  padding: 0 32px;
  margin-bottom: 8px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 32px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Avatar = styled.div<{ src: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactName = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5em;
  color: #000000;
  margin: 0;
`;

const ContactStatus = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #454545;
  margin: 0;
`;

const NewChat: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const recentContacts: ContactType[] = [
    {
      id: "recent1",
      name: "Helena Hills",
      avatar: "https://via.placeholder.com/48/D1BEE7/FFFFFF",
      status: "Active 20m ago",
    },
    {
      id: "recent2",
      name: "Carlo Emilio",
      avatar: "https://via.placeholder.com/48/B2EBF2/FFFFFF",
      status: "Active now",
    },
  ];

  const allContacts: ContactType[] = [
    {
      id: "contact1",
      name: "Oscar Davis",
      avatar: "https://via.placeholder.com/48/C8E6C9/FFFFFF",
      status: "Active 5m ago",
    },
    {
      id: "contact2",
      name: "Daniel Jay Park",
      avatar: "https://via.placeholder.com/48/FFF9C4/FFFFFF",
      status: "Active yesterday",
    },
    {
      id: "contact3",
      name: "Mark Rojas",
      avatar: "https://via.placeholder.com/48/FFCCBC/FFFFFF",
      status: "Active 3h ago",
    },
    {
      id: "contact4",
      name: "Briana Lewis",
      avatar: "https://via.placeholder.com/48/BBDEFB/FFFFFF",
      status: "Active 1d ago",
    },
    {
      id: "contact5",
      name: "Giannis Constantinou",
      avatar: "https://via.placeholder.com/48/F8BBD0/FFFFFF",
      status: "Active 2d ago",
    },
  ];

  const filteredRecentContacts = recentContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredAllContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>New message</Title>
        <CloseButton>×</CloseButton>
      </Header>
      <SearchContainer>
        <SearchInput>
          <SearchIcon src="/icons/search-chat-icon.svg" alt="Search" />
          <Input
            placeholder="Search contacts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchInput>
      </SearchContainer>
      <ContactsContainer>
        {filteredRecentContacts.length > 0 && (
          <ContactGroup>
            <GroupTitle>Recent</GroupTitle>
            {filteredRecentContacts.map((contact) => (
              <ContactItem key={contact.id}>
                <Avatar src={contact.avatar} />
                <ContactInfo>
                  <ContactName>{contact.name}</ContactName>
                  <ContactStatus>{contact.status}</ContactStatus>
                </ContactInfo>
              </ContactItem>
            ))}
          </ContactGroup>
        )}
        {filteredAllContacts.length > 0 && (
          <ContactGroup>
            <GroupTitle>All contacts</GroupTitle>
            {filteredAllContacts.map((contact) => (
              <ContactItem key={contact.id}>
                <Avatar src={contact.avatar} />
                <ContactInfo>
                  <ContactName>{contact.name}</ContactName>
                  <ContactStatus>{contact.status}</ContactStatus>
                </ContactInfo>
              </ContactItem>
            ))}
          </ContactGroup>
        )}
      </ContactsContainer>
    </Container>
  );
};

export default NewChat;
