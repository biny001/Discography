import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPlaylist: [],
  isLoading: false,
  favorite: [],
};

const userPlaylistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong(state, action) {
      state.userPlaylist.push(action.payload);
    },
    removeSong(state, action) {
      state.userPlaylist = state.userPlaylist.filter((song) => {
        return song.id !== action.payload.id;
      });
    },
  },
});

export const { addSong, removeSong } = userPlaylistSlice.actions;

export default userPlaylistSlice.reducer;
