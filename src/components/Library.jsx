import React from "react";
import LibraryItem from "./LibraryItem";

function Library({
  libraryStatus,
  audioRef,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-items">
        {songs.map((song) => (
          <LibraryItem
            audioRef={audioRef}
            song={song}
            songs={songs}
            setSongs={setSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
