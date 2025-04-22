import React from "react";
import styled from "styled-components";

interface PlaylistProps {
  coverImage: string;
  title: string;
  description: string;
}

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 232px;
`;

const PlaylistCover = styled.div<{ image: string }>`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f5f5f5;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaylistTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 1em;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5em;
  color: var(--color-text-primary);
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: var(--color-text-secondary);
`;

const Playlist: React.FC<PlaylistProps> = ({
  coverImage,
  title,
  description,
}) => {
  return (
    <PlaylistContainer>
      <PlaylistCover image={coverImage}>
        <PlaylistTitle>{title}</PlaylistTitle>
      </PlaylistCover>
      <PlaylistInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </PlaylistInfo>
    </PlaylistContainer>
  );
};

export default Playlist;
