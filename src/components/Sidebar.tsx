import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: var(--color-sidebar-bg);
  border-right: 1px solid var(--color-border);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  padding: 0 16px;
  margin-bottom: 16px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--color-text-primary);
  padding: 0 16px;
  margin-bottom: 8px;
`;

interface MenuItemProps {
  active?: boolean;
}

const MenuItem = styled(Link)<MenuItemProps>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.active ? "var(--color-active-item-bg)" : "transparent"};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--color-active-item-bg);
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  width: 100%;
  text-align: left;
  font-family: inherit;

  &:hover {
    background-color: var(--color-active-item-bg);
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
  color: var(--color-text-primary);
`;

const Spacer = styled.div`
  flex: 1;
`;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isDashboard = location.pathname === "/dashboard";
  const isChat = location.pathname === "/chat";

  const handleAuthClick = () => {
    // In a real app, this would check auth state and either log out or navigate to auth
    navigate("/auth");
  };

  return (
    <SidebarContainer>
      <Title>Music app</Title>

      <MenuList>
        <MenuItem to="/" active={isHome}>
          <MenuText>Discover</MenuText>
        </MenuItem>

        <MenuItem to="/" active={isHome}>
          <MenuIcon src="/icons/home-icon.svg" alt="Home" />
          <MenuText>Home</MenuText>
        </MenuItem>

        <MenuItem to="/dashboard" active={isDashboard}>
          <MenuIcon src="/icons/search-icon.svg" alt="Dashboard" />
          <MenuText>Dashboard</MenuText>
        </MenuItem>

        <MenuItem to="/chat" active={isChat}>
          <MenuIcon src="/icons/smile-chat-icon.svg" alt="Chat" />
          <MenuText>Chat</MenuText>
        </MenuItem>

        <MenuItem to="/" active={false}>
          <MenuIcon src="/icons/radio-icon.svg" alt="Radio" />
          <MenuText>Radio</MenuText>
        </MenuItem>
      </MenuList>

      <MenuList>
        <SectionTitle>Library</SectionTitle>

        <MenuItem to="/" active={false}>
          <MenuIcon src="/icons/playlist-icon.svg" alt="Playlists" />
          <MenuText>Playlists</MenuText>
        </MenuItem>

        <MenuItem to="/" active={false}>
          <MenuIcon src="/icons/music-icon.svg" alt="Songs" />
          <MenuText>Songs</MenuText>
        </MenuItem>

        <MenuItem to="/" active={false}>
          <MenuIcon src="/icons/smile-icon.svg" alt="Personalized picks" />
          <MenuText>Personalized picks</MenuText>
        </MenuItem>
      </MenuList>

      <Spacer />

      <MenuList>
        <MenuButton onClick={handleAuthClick}>
          <MenuIcon src="/icons/user-icon.svg" alt="Login" />
          <MenuText>Login</MenuText>
        </MenuButton>
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
