import React from "react";
import LibraryItem from "./LibraryItem";

function Library({ songs, currentSong, setCurrentSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-items">
        {songs.map((song) => (
          <LibraryItem
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
