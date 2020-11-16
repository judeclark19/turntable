import React from "react";
import LibraryItem from "./LibraryItem";

function Library({ songs, currentSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-items">
        {songs.map((song) => (
          <LibraryItem song={song} />
        ))}
      </div>
    </div>
  );
}

export default Library;