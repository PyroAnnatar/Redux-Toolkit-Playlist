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
      <li key={movie}>
        {movie}
        <button onClick={() => dispatch(removeMovie(movie))} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Film Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => dispatch(addMovie(createRandomMovie()))}
            className="button"
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
