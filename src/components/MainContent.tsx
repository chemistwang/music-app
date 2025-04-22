import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import Album from "./Album";
import Playlist from "./Playlist";
import Navigation from "./Navigation";

const MainContentContainer = styled.div`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  max-height: 100vh;
`;

const SmallGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 48px;
`;

const LargeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 48px;
`;

const albumData = [
  {
    id: 1,
    coverImage: "https://via.placeholder.com/300/FF5733/FFFFFF",
    artistName: "Artist Name",
    genre: "R&B",
  },
  {
    id: 2,
    coverImage: "https://via.placeholder.com/300/33FF57/FFFFFF",
    artistName: "Artist Name",
    genre: "Indie pop",
  },
  {
    id: 3,
    coverImage: "https://via.placeholder.com/300/3357FF/FFFFFF",
    artistName: "Artist Name",
    genre: "Hip hop",
  },
  {
    id: 4,
    coverImage: "https://via.placeholder.com/300/FF33F6/FFFFFF",
    artistName: "Artist Name",
    genre: "Electronic",
  },
  {
    id: 5,
    coverImage: "https://via.placeholder.com/300/F6FF33/FFFFFF",
    artistName: "Artist Name",
    genre: "R&B",
  },
  {
    id: 6,
    coverImage: "https://via.placeholder.com/300/33FFF6/FFFFFF",
    artistName: "Artist Name",
    genre: "Rock",
  },
];

const playlistData = [
  {
    id: 1,
    coverImage: "https://via.placeholder.com/400/FF9F33/FFFFFF",
    title: "Playlist 1",
    description: "Description of playlist",
  },
  {
    id: 2,
    coverImage: "https://via.placeholder.com/400/33B5FF/FFFFFF",
    title: "Playlist 2",
    description: "Description of playlist",
  },
  {
    id: 3,
    coverImage: "https://via.placeholder.com/400/FF33A8/FFFFFF",
    title: "Playlist 3",
    description: "Description of playlist",
  },
  {
    id: 4,
    coverImage: "https://via.placeholder.com/400/7C33FF/FFFFFF",
    title: "Playlist 4",
    description: "Description of playlist",
  },
];

const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      <Navigation />

      <SectionHeader
        title="New Releases"
        subheading="Check out the latest albums from your favorite artists"
      />

      <SmallGrid>
        {albumData.map((album) => (
          <Album
            key={album.id}
            coverImage={album.coverImage}
            artistName={album.artistName}
            genre={album.genre}
          />
        ))}
      </SmallGrid>

      <SectionHeader
        title="Featured Playlists"
        subheading="Curated playlists to match your mood"
      />

      <LargeGrid>
        {playlistData.map((playlist) => (
          <Playlist
            key={playlist.id}
            coverImage={playlist.coverImage}
            title={playlist.title}
            description={playlist.description}
          />
        ))}
      </LargeGrid>
    </MainContentContainer>
  );
};

export default MainContent;
