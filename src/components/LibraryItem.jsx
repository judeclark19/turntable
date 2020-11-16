import React from "react";

function LibraryItem({ audioRef, song, songs, setCurrentSong, id, isPlaying }) {
  const selectSongHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(song);
    //check if song is playing
    if (isPlaying) {
      //stuff
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          //stuff
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={selectSongHandler}
      className={`library-item ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibraryItem;
