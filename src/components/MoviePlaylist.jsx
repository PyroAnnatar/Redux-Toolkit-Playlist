import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../features/movies/moviesSlice";

function MoviePlaylist() {
  const { list } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  // Yapılacaklar:
  // Filmlerin listesini al
  const moviePlaylist = [...list];
  // const handleMovieAdd = (movie) => {
  // Yapılacaklar:
  // Listeye film ekle
  // };
  // const handleMovieRemove = (movie) => {
  // Yapılacaklar:
  // Listeden şarkıyı kaldır
  // };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie} className="flex justify-between">
        {movie}
        <button
          onClick={() => dispatch(removeMovie(movie))}
          className="py-1 px-3 rounded text-white bg-red-600 hover:bg-red-500/80"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] p-4 rounded-md w-2/3 border-gray-400 border-2">
      <div className="table-header">
        <h3 className="text-xl text-center font-bold">Film Listesi</h3>
      </div>
      <ul className="flex flex-col gap-2  mt-4">{renderedMovies}</ul>
      <div className="flex justify-center my-2">
        <button
          onClick={() => dispatch(addMovie(createRandomMovie()))}
          className="py-1 px-3 rounded text-white bg-blue-600 hover:bg-blue-500/80"
        >
          + Listeye Film Ekle
        </button>
      </div>
    </div>
  );
}

export default MoviePlaylist;
