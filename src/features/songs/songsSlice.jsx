import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: { list: [] },
  reducers: {
    addSong: (state, action) => {
      state.list.push(action.payload);
    },
    removeSong: (state, action) => {
      state.list = state.list.filter((song) => song !== action.payload);
    },
    clearList: (state) => {
      state.list = [];
    },
  },
});

export const { addSong, removeSong, clearList } = songsSlice.actions;
export default songsSlice.reducer;
