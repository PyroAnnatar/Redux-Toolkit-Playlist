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
      <li key={song} className="flex justify-between">
        {song}
        <button
          onClick={() => dispatch(removeSong(song))}
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
        <h3 className="text-xl text-center font-bold">Şarkı Listesi</h3>
      </div>
      <ul className="flex flex-col gap-2 mt-4">{renderedSongs}</ul>
      <div className="flex justify-center my-2">
        <button
          onClick={() => dispatch(addSong(createRandomSong()))}
          className="py-1 px-3 rounded text-white bg-blue-600 hover:bg-blue-500/80"
        >
          + Listeye Şarkı Ekle
        </button>
      </div>
    </div>
  );
}

export default SongPlaylist;
