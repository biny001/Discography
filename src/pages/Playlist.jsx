import styled from "@emotion/styled";
import ListTable from "../components/ListTable";

const PlaylistContainer = styled.div`
  padding: 16px;

  @media (max-width: 767px) {
    text-align: right;
  }
`;

function Playlist() {
  return (
    <PlaylistContainer>
      <h1>Playlist</h1>
      <ListTable />
    </PlaylistContainer>
  );
}

export default Playlist;
