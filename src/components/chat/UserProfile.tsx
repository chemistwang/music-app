import React from "react";
import styled from "styled-components";

interface UserProfileProps {
  name: string;
  avatar: string;
  status: string;
}

const Container = styled.div`
  width: 240px;
  height: 100%;
  background-color: #ffffff;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f7f7f7;
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const UserName = styled.h3`
  font-weight: 500;
  font-size: 20px;
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

const ProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
`;

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar, status }) => {
  return (
    <Container>
      <ProfileSection>
        <Avatar style={{ backgroundImage: `url(${avatar})` }} />
        <UserInfo>
          <UserName>{name}</UserName>
          <UserStatus>{status}</UserStatus>
        </UserInfo>
        <ProfileButton>View profile</ProfileButton>
      </ProfileSection>

      <MenuList>
        <MenuItem>
          <MenuIcon src="/icons/search-chat-icon.svg" alt="Search" />
          <MenuText>Search chat</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon src="/icons/image-icon.svg" alt="Images" />
          <MenuText>Sent images</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon src="/icons/more-options-icon.svg" alt="More" />
          <MenuText>More options</MenuText>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default UserProfile;
