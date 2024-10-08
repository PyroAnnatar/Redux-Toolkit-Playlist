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
    <div className="h-screen overflow-auto p-10 bg-gradient-to-bl from-[#cea5a5] via-[#420] to-[#070707] flex flex-col items-center gap-4">
      <button
        onClick={handleResetClick}
        className="py-1 px-3 rounded text-white bg-red-600 hover:bg-red-500/80 self-center"
      >
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
