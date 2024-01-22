import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
};

const userPlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    getSong(state, action) {
      state.songs = action.payload;
    },
    removeSong(state, action) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
  },
});

export const { getSong, removeSong } = userPlaylistSlice.actions;

export default userPlaylistSlice.reducer;
