import React from "react";

function Player() {
  return (
    <div className="player">
      <div className="time-control">
        <p>current time</p>
        <input type="range" />
        <p>duration</p>
      </div>
      <div className="play-control">icons here</div>
    </div>
  );
}

export default Player;
