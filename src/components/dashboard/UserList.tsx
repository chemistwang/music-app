import React from "react";
import styled from "styled-components";

interface User {
  id: number;
  name: string;
  email: string;
  avatarColor: string;
}

interface UserListProps {
  title: string;
  users: User[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
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
  margin-bottom: 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const Avatar = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
`;

const UserEmail = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #454545;
`;

const UserList: React.FC<UserListProps> = ({ title, users }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {users.map((user) => (
          <UserItem key={user.id}>
            <Avatar color={user.avatarColor}>{user.name.charAt(0)}</Avatar>
            <UserInfo>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserInfo>
          </UserItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;
