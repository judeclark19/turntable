import React from "react";
// import { playAudio } from "../util";

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
  const selectSongHandler = async () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong(song);

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

    if (isPlaying) {
      audioRef.current.play();
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
