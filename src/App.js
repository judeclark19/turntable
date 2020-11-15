import "./styles/App.scss";
import Player from "./components/Player";
import SongDisplay from "./components/SongDisplay";

function App() {
  return (
    <div>
      <SongDisplay />
      <Player />
    </div>
  );
}

export default App;
