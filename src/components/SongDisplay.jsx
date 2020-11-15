import React from "react";

function SongDisplay({ currentSong }) {
  return (
    <div className="song-display">
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default SongDisplay;
