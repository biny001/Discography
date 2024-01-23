import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSong } from "../redux/features/userPlaylist";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  font-size: 16px;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  color: black;
  text-align: center;

  @media (max-width: 420px) {
    width: 80%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  background-color: ${(props) =>
    props.primary === "green" ? "#15803d" : "#4b5563"};
  color: var(--color-grey-100);
  transition: all 0.2s;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: ${(props) =>
      props.primary === "green" ? "#03C988" : "#b91c1c"};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }

  transition: background-color 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function EditModal({ setIsOpen, song }) {
  const [editedArtist, setEditedArtist] = useState(song.artist);
  const [editedTitle, setEditedTitle] = useState(song.title);
  const [editedDuration, setEditedDuration] = useState(song.duration);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const editobj = {
      ...song,
      artist: editedArtist,
      title: editedTitle,
      duration: editedDuration,
    };
    dispatch(updateSong(editobj));
    setIsOpen(false);
    console.log(editedTitle);
  };

  const hanldeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Overlay>
      <StyledModal>
        <h1>Edit Song</h1>
        <form>
          <StyledFormRow>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={editedTitle}
              onChange={(e) => {
                setEditedTitle(e.target.value);
              }}
            />
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="title">Artist</label>
            <input
              type="text"
              id="artist"
              value={editedArtist}
              onChange={(e) => {
                setEditedArtist(e.target.value);
              }}
            />
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="title">Duration</label>
            <input
              type="text"
              id="duration"
              value={editedDuration}
              onChange={(e) => {
                setEditedDuration(e.target.value);
              }}
            />
          </StyledFormRow>
          <Wrapper>
            <Button
              primary="green"
              onClick={handleEdit}
            >
              save
            </Button>
            <Button onClick={hanldeModal}>cancel</Button>
          </Wrapper>
        </form>
      </StyledModal>
    </Overlay>
  );
}

export default EditModal;
