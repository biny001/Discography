import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createSong } from "../redux/features/userPlaylist";
import { v4 as uuidv4 } from "uuid";
const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  font-size: 14px;
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
      props.primary === "green" ? "#03C988" : " #b91c1c"};
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
  transition: background-color 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function CreateSongForm({ setOpenForm }) {
  const random = uuidv4();
  const [artist, setartist] = useState("");
  const [title, settitle] = useState("");
  const [duration, setduration] = useState("");
  const [coverArt, setCoverArt] = useState("https://");

  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    const newSong = {
      id: random,
      artist: artist,
      title: title,
      duration: duration,
      coverArt: coverArt,
    };

    dispatch(createSong(newSong));

    setOpenForm(false);
  };

  const hanldeModal = (e) => {
    e.preventDefault();
    setOpenForm(false);
  };

  return (
    <Overlay>
      <StyledModal>
        <h1>Create Song</h1>
        <form>
          <StyledFormRow>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="UpTown-Funk"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            {/* {errors.title && <Error>{errors.title}</Error>} */}
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="title">Artist</label>
            <input
              type="text"
              id="artist"
              value={artist}
              placeholder="Bruno Mars"
              onChange={(e) => {
                setartist(e.target.value);
              }}
            />
            {/* {errors.title && <Error>{errors.title}</Error>} */}
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="title">Duration</label>
            <input
              type="text"
              id="duration"
              value={duration}
              placeholder="3:00"
              onChange={(e) => {
                setduration(e.target.value);
              }}
            />
            {/* {errors.title && <Error>{errors.title}</Error>} */}
          </StyledFormRow>
          <StyledFormRow>
            <label htmlFor="title">CoverArt</label>
            <input
              type="text"
              id="coverArt"
              value={coverArt}
              onChange={(e) => {
                setCoverArt(e.target.value);
              }}
            />
            {/* {errors.title && <Error>{errors.title}</Error>} */}
          </StyledFormRow>
          <Wrapper>
            <Button
              primary="green"
              onClick={handleCreate}
            >
              create
            </Button>
            <Button onClick={hanldeModal}>cancel</Button>
          </Wrapper>
        </form>
      </StyledModal>
    </Overlay>
  );
}

export default CreateSongForm;
