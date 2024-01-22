import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { removeSong } from "../redux/features/userPlaylist";
import { useEffect } from "react";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 2fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  color: var(--color-grey-900);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-900);
  font-family: "Sono";
`;

const Duration = styled.div`
  font-family: "Poppins";
  font-weight: 600;
  color: var(--color-blue-700);
`;
const Edit = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

function Row({ song }) {
  const { id, artist, title, coverArt, duration } = song;
  const dispatch = useDispatch();
  function handleRemoveSong() {
    dispatch(removeSong(id));
  }

  return (
    <TableRow role="row">
      <Img src={coverArt} />
      <Title>{title}</Title>
      <div>{artist}</div>
      <Duration>{duration}</Duration>

      <Edit>
        <button>Edit</button>
        <button onClick={handleRemoveSong}>Delete</button>
      </Edit>
    </TableRow>
  );
}

export default Row;
