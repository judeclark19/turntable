import "./styles/App.scss";
import { useState } from "react";
import Player from "./components/Player";
import SongDisplay from "./components/SongDisplay";
import chillHop from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //Render
  return (
    <div>
      <SongDisplay currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
