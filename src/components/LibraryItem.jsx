import React from "react";

function LibraryItem({ song, songs, setCurrentSong, id }) {
  const selectSongHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(song);
  };

  return (
    <div onClick={selectSongHandler} className="library-item">
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibraryItem;
