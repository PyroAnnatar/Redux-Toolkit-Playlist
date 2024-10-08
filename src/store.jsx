import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import songsReducer from "./features/songs/songsSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer,
  },
});
