import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { list: [] },
  reducers: {
    addMovie: (state, action) => {
      state.list.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.list = state.list.filter((movie) => movie !== action.payload);
    },
    clearList: (state) => {
      state.list = [];
    },
  },
});

export const { addMovie, removeMovie, clearList } = moviesSlice.actions;
export default moviesSlice.reducer;
