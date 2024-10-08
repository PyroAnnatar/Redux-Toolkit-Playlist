import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../features/songs/songsSlice";

function SongPlaylist() {
  const { list } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  // Yapılacaklar:
  // Şarkıların listesini al
  const songPlaylist = [...list];

  // const handleSongAdd = (song) => {
  // Yapılacaklar:
  // Listeye şarkı ekle
  // }
  // const handleSongRemove = (song) => {
  // Yapılacaklar:
  // Listeden şarkıyı kaldır
  // }

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => dispatch(removeSong(song))} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Şarkı Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => dispatch(addSong(createRandomSong()))}
            className="button"
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
