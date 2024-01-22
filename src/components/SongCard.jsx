/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const SongCardContainer = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

const SongImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const SongInfo = styled.div`
  padding: 12px;
`;

const SongTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: rgba(10, 116, 179, 1);
`;

const SongArtist = styled.p`
  font-size: 14px;
  color: #000;
`;
function SongCard({ song }) {
  // eslint-disable-next-line react/prop-types
  const { images, subtitle, title, url } = song;

  return (
    <SongCardContainer>
      <SongImage
        src={images?.coverart}
        alt={`Cover art for ${title}`}
      />
      <SongInfo>
        <SongTitle>{title}</SongTitle>
        <SongArtist>{subtitle}</SongArtist>
      </SongInfo>
    </SongCardContainer>
  );
}

export default SongCard;
