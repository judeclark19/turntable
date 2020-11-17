import "./styles/App.scss";
import { useState, useRef } from "react";
import Nav from "./components/Nav";
import Player from "./components/Player";
import SongDisplay from "./components/SongDisplay";
import Library from "./components/Library";
import chillHop from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Lifted from Player
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercent: 0,
  });

  //functions
  const songEndHandler = async () => {
    // console.log("song over");
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //Lifted from Player
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercent = (currentTime / duration) * 100;

    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration: duration,
      animationPercent: animationPercent,
    });
  };

  //Render
  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <SongDisplay currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
      />
      <Library
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={() => {
          songEndHandler();
        }}
      />
    </div>
  );
}

export default App;
