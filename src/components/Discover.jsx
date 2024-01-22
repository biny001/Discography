import styled from "@emotion/styled";

const DiscoverContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  justify-content: center;
`;

const SongCard = styled.div`
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
`;

const SongArtist = styled.p`
  font-size: 14px;
  color: #888;
`;

function Discover() {
  return (
    <DiscoverContainer>
      {[...Array(6)].map((_, index) => (
        <SongCard key={index}>
          <SongImage
            src={`https://via.placeholder.com/200x120?text=Song+${index + 1}`}
            alt={`Song ${index + 1}`}
          />
          <SongInfo>
            <SongTitle>Song Title {index + 1}</SongTitle>
            <SongArtist>Artist Name</SongArtist>
          </SongInfo>
        </SongCard>
      ))}
    </DiscoverContainer>
  );
}

export default Discover;
