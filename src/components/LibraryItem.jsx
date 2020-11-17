import React from "react";

function LibraryItem({
  audioRef,
  song,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  id,
  isPlaying,
}) {
  const selectSongHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    //check if song is playing
    if (isPlaying) {
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
