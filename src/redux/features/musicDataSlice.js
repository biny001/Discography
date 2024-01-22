import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  musicSlice.actions;

export default musicSlice.reducer;
