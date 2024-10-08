import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { clearList as clearMovies } from "./features/movies/moviesSlice";
import { clearList as clearSongs } from "./features/songs/songsSlice";

export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(clearMovies());
    dispatch(clearSongs());
  };

  return (
    <div className="container">
      <button onClick={handleResetClick} className="button">
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
