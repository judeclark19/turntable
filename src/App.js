import "./styles/App.scss";
import { useState } from "react";
import Player from "./components/Player";
import SongDisplay from "./components/SongDisplay";
import Library from "./components/Library";
import chillHop from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //Render
  return (
    <div>
      <SongDisplay currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} currentSong={currentSong} />
    </div>
  );
}

export default App;
