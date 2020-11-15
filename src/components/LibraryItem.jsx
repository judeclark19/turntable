import React from "react";

function LibraryItem({ song }) {
  return (
    <div className="library-item">
      <img src={song.cover} alt={song.name} />
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
}

export default LibraryItem;
