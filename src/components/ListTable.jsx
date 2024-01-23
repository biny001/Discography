import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Row from "./Row";
import { fetchSong, getSong } from "../redux/features/userPlaylist";
import CreateSongForm from "./CreateSongForm";
import { getData } from "../redux/musicSaga";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const createButton = styled.button`
  position: absolute;
  right: 0;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  position: relative;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ListTable() {
  const dispatch = useDispatch();
  const song = useSelector((store) => store.music.songs);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSong());
    console.log("fetch successfull");
  }, [dispatch]);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>

        <div>Song</div>
        <div>Artist</div>
        <div>Duration</div>

        <div></div>
        <button onClick={() => setOpenForm(true)}>create</button>
      </TableHeader>

      {openForm && <CreateSongForm setOpenForm={setOpenForm} />}
      {song?.map((song) => (
        <Row
          song={song}
          key={song.id}
        />
      ))}
    </Table>
  );
}

export default ListTable;
