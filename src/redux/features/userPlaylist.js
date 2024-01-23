import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const random = uuidv4();
const initialState = {
  songs: [],
  isLoading: false,
  songEdit: null,
  edit: {
    title: "",
    artist: "",
    thumbnail: "",
    duration: "",
    id: "",
  },
};
const userPlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    createSong(state, action) {
      console.log(action.payload);
    },
    getSong(state, action) {
      state.songs = action.payload;
    },
    removeSong(state, action) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    updateSong(state, action) {
      state.edit = {
        title: action.payload.title,
        artist: action.payload.artist,

        duration: action.payload.duration,
        id: action.payload.id,
      };
    },
  },
});

export const { getSong, removeSong, updateSong, createSong } =
  userPlaylistSlice.actions;

export default userPlaylistSlice.reducer;
