import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  isLoading: false,
  songEdit: null,
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
    updateSong(state, action) {
      state.songs = state.songs.map((song) => {
        if (song.id === action.payload.id) {
          return {
            ...song,
            ...action.payload,
          };
        }
        return song;
      });
    },
  },
});

export const { getSong, removeSong } = userPlaylistSlice.actions;

export default userPlaylistSlice.reducer;
