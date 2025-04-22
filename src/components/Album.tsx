import React from "react";
import styled from "styled-components";

interface AlbumProps {
  coverImage: string;
  artistName: string;
  genre: string;
}

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 144px;
`;

const AlbumCover = styled.div<{ image: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f5f5f5;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius);
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ArtistName = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5em;
  color: var(--color-text-primary);
`;

const Genre = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--color-text-secondary);
`;

const Album: React.FC<AlbumProps> = ({ coverImage, artistName, genre }) => {
  return (
    <AlbumContainer>
      <AlbumCover image={coverImage} />
      <AlbumInfo>
        <ArtistName>{artistName}</ArtistName>
        <Genre>{genre}</Genre>
      </AlbumInfo>
    </AlbumContainer>
  );
};

export default Album;
