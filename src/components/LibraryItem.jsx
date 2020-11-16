import React from "react";

function LibraryItem({ song }) {
  return (
    <div className="library-item">
      <img src={song.cover} alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibraryItem;
