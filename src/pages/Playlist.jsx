import styled from "@emotion/styled";
import ListTable from "../components/ListTable";

const PlaylistContainer = styled.div`
  padding: 16px;

  @media (max-width: 720px) {
    text-align: right;

    > h1 {
      font-size: 24px;
      font-weight: 700;
      margin-top: 10px;
    }
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
